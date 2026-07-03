import SwiftUI

struct VIPShopView: View {
    @EnvironmentObject var storeManager: StoreManager
    @Environment(\.dismiss) var dismiss
    @State private var selectedProduct: StoreProductType = .monthly
    @State private var showAlert = false
    @State private var alertMessage = ""
    
    var body: some View {
        NavigationView {
            ScrollView {
                VStack(spacing: 24) {
                    // MARK: - Header
                    VStack(spacing: 12) {
                        Image(systemName: "crown.fill")
                            .font(.system(size: 60))
                            .foregroundColor(.yellow)
                        
                        Text("解锁全部粤语课程")
                            .font(.title2)
                            .fontWeight(.bold)
                        
                        Text("包含AI陪练、离线下载、每日挑战等全部功能")
                            .font(.subheadline)
                            .foregroundColor(.gray)
                            .multilineTextAlignment(.center)
                            .padding(.horizontal)
                    }
                    .padding(.top)
                    
                    // MARK: - Features
                    VStack(alignment: .leading, spacing: 12) {
                        FeatureRow(icon: "book.fill", text: "十大分类课程系统学习")
                        FeatureRow(icon: "waveform.circle.fill", text: "AI陪练男女声自由切换")
                        FeatureRow(icon: "arrow.down.circle.fill", text: "离线下载随时学习")
                        FeatureRow(icon: "flame.fill", text: "每日挑战+打卡激励")
                        FeatureRow(icon: "square.stack.fill", text: "间隔记忆卡片系统")
                        FeatureRow(icon: "chart.bar.fill", text: "学习进度深度追踪")
                    }
                    .padding(.horizontal)
                    
                    // MARK: - Plans
                    VStack(spacing: 12) {
                        ForEach(StoreProductType.allCases, id: \.self) { product in
                            PlanCard(
                                product: product,
                                isSelected: selectedProduct == product,
                                onSelect: { selectedProduct = product }
                            )
                        }
                    }
                    .padding(.horizontal)
                    
                    // MARK: - Subscribe Button
                    Button(action: purchaseProduct) {
                        HStack {
                            if storeManager.purchaseState == .purchasing {
                                ProgressView()
                                    .progressViewStyle(CircularProgressViewStyle(tint: .white))
                            } else {
                                Text("立即开通 · \(selectedProduct.price)")
                                    .fontWeight(.bold)
                            }
                        }
                        .frame(maxWidth: .infinity)
                        .padding()
                        .background(LinearGradient(colors: [Color(hex: "FFD700"), Color(hex: "FFA500")],
                                                 startPoint: .leading, endPoint: .trailing))
                        .foregroundColor(.white)
                        .cornerRadius(14)
                    }
                    .disabled(storeManager.purchaseState == .purchasing)
                    .padding(.horizontal)
                    
                    // MARK: - Restore & Terms
                    VStack(spacing: 8) {
                        Button("恢复购买") {
                            storeManager.restorePurchases()
                        }
                        .font(.subheadline)
                        .foregroundColor(.gray)
                        
                        Text("订阅自动续期，可随时在设置中取消 • 永久会员一次购买终身有效")
                            .font(.caption2)
                            .foregroundColor(.gray)
                            .multilineTextAlignment(.center)
                            .padding(.horizontal)
                    }
                }
                .padding(.bottom, 30)
            }
            .navigationTitle("成为VIP")
            .navigationBarTitleDisplayMode(.inline)
            .toolbar {
                ToolbarItem(placement: .navigationBarTrailing) {
                    Button("关闭") { dismiss() }
                }
            }
            .alert("提示", isPresented: $showAlert) {
                Button("确定", role: .cancel) { 
                    if case .success = storeManager.purchaseState {
                        dismiss()
                    }
                }
            } message: {
                Text(alertMessage)
            }
            .onChange(of: storeManager.purchaseState) { newState in
                switch newState {
                case .success(let type):
                    alertMessage = "\(type.displayName)开通成功！🎉"
                    showAlert = true
                case .failed(let msg):
                    alertMessage = msg
                    showAlert = true
                default: break
                }
            }
        }
    }
    
    private func purchaseProduct() {
        storeManager.purchase(selectedProduct)
    }
}

struct PlanCard: View {
    let product: StoreProductType
    let isSelected: Bool
    let onSelect: () -> Void
    
    var body: some View {
        Button(action: onSelect) {
            HStack(spacing: 16) {
                // Radio
                ZStack {
                    Circle()
                        .stroke(isSelected ? Color(hex: "FFD700") : Color.gray.opacity(0.3), lineWidth: 2)
                        .frame(width: 24, height: 24)
                    
                    if isSelected {
                        Circle()
                            .fill(Color(hex: "FFD700"))
                            .frame(width: 14, height: 14)
                    }
                }
                
                VStack(alignment: .leading, spacing: 4) {
                    Text(product.displayName)
                        .font(.headline)
                        .fontWeight(.bold)
                        .foregroundColor(.primary)
                    
                    Text(product.description)
                        .font(.caption)
                        .foregroundColor(.gray)
                }
                
                Spacer()
                
                Text(product.price)
                    .font(.title3)
                    .fontWeight(.bold)
                    .foregroundColor(Color(hex: "FFD700"))
            }
            .padding()
            .background(isSelected ? Color.yellow.opacity(0.08) : Color(.systemGray6))
            .overlay(
                RoundedRectangle(cornerRadius: 14)
                    .stroke(isSelected ? Color(hex: "FFD700") : Color.clear, lineWidth: 2)
            )
            .cornerRadius(14)
        }
        .buttonStyle(PlainButtonStyle())
    }
}

struct FeatureRow: View {
    let icon: String
    let text: String
    
    var body: some View {
        HStack(spacing: 12) {
            Image(systemName: icon)
                .foregroundColor(Color(hex: "FFD700"))
                .frame(width: 24)
            
            Text(text)
                .font(.subheadline)
                .foregroundColor(.primary)
            
            Spacer()
        }
    }
}
