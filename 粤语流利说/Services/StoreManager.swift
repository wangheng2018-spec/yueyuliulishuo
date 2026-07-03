import Foundation
import StoreKit
import Combine

class StoreManager: NSObject, ObservableObject {
    @Published var products: [SKProduct] = []
    @Published var purchaseState: PurchaseState = .idle
    @Published var isVipActive: Bool = false
    @Published var currentVipType: VipType = .none
    @Published var vipExpiryDate: Date?
    
    private var productIdentifiers: Set<String> {
        Set(StoreProductType.allCases.map { $0.rawValue })
    }
    
    override init() {
        super.init()
        loadReceipt()
    }
    
    func loadProducts() {
        let request = SKProductsRequest(productIdentifiers: productIdentifiers)
        request.delegate = self
        request.start()
    }
    
    func purchase(_ productType: StoreProductType) {
        guard let product = products.first(where: { $0.productIdentifier == productType.rawValue }) else {
            purchaseState = .failed("无法获取商品信息")
            return
        }
        
        purchaseState = .purchasing
        
        if SKPaymentQueue.canMakePayments() {
            let payment = SKPayment(product: product)
            SKPaymentQueue.default().add(payment)
            SKPaymentQueue.default().add(self)
        } else {
            purchaseState = .failed("无法进行支付")
        }
    }
    
    func restorePurchases() {
        SKPaymentQueue.default().restoreCompletedTransactions()
        SKPaymentQueue.default().add(self)
    }
    
    private func loadReceipt() {
        guard let appStoreReceiptURL = Bundle.main.appStoreReceiptURL,
              FileManager.default.fileExists(atPath: appStoreReceiptURL.path) else {
            checkLocalVipStatus()
            return
        }
        
        // In production, verify receipt with server
        checkLocalVipStatus()
    }
    
    private func checkLocalVipStatus() {
        let savedType = UserDefaults.standard.string(forKey: "vip_type") ?? "none"
        let expiryDate = UserDefaults.standard.object(forKey: "vip_expiry") as? Date
        
        currentVipType = VipType(rawValue: savedType) ?? .none
        vipExpiryDate = expiryDate
        
        if let expiry = expiryDate {
            isVipActive = expiry > Date() && currentVipType != .none
        } else {
            isVipActive = currentVipType == .lifetime
        }
        
        if !isVipActive && currentVipType != .none {
            currentVipType = .none
            UserDefaults.standard.set(VipType.none.rawValue, forKey: "vip_type")
        }
    }
}

extension StoreManager: SKProductsRequestDelegate {
    func productsRequest(_ request: SKProductsRequest, didReceive response: SKProductsResponse) {
        DispatchQueue.main.async {
            self.products = response.products
        }
    }
}

extension StoreManager: SKPaymentTransactionObserver {
    func paymentQueue(_ queue: SKPaymentQueue, updatedTransactions transactions: [SKPaymentTransaction]) {
        for transaction in transactions {
            switch transaction.transactionState {
            case .purchased:
                handlePurchaseSuccess(transaction)
                SKPaymentQueue.default().finishTransaction(transaction)
            case .failed:
                if let error = transaction.error as? SKError {
                    purchaseState = .failed(error.localizedDescription)
                } else {
                    purchaseState = .failed("购买失败")
                }
                SKPaymentQueue.default().finishTransaction(transaction)
            case .restored:
                handlePurchaseSuccess(transaction)
                SKPaymentQueue.default().finishTransaction(transaction)
            case .purchasing, .deferred:
                break
            @unknown default:
                break
            }
        }
    }
    
    private func handlePurchaseSuccess(_ transaction: SKPaymentTransaction) {
        let productType = StoreProductType.allCases.first { $0.rawValue == transaction.payment.productIdentifier }
        
        guard let type = productType else { return }
        
        currentVipType = type.vipType
        isVipActive = true
        
        let expiryDate: Date?
        if type == .lifetime {
            expiryDate = Calendar.current.date(byAdding: .year, value: 100, to: Date())
        } else {
            expiryDate = Calendar.current.date(byAdding: .day, value: type.daysValid, to: Date())
        }
        
        vipExpiryDate = expiryDate
        
        UserDefaults.standard.set(type.vipType.rawValue, forKey: "vip_type")
        UserDefaults.standard.set(expiryDate, forKey: "vip_expiry")
        
        purchaseState = .success(type.vipType)
    }
}

enum PurchaseState: Equatable {
    case idle
    case purchasing
    case success(VipType)
    case failed(String)
}
