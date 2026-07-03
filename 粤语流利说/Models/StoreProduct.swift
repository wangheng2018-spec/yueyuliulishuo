import Foundation

enum StoreProductType: String, CaseIterable {
    case trial = "com.yueyu.trial"
    case monthly = "com.yueyu.monthly"
    case lifetime = "com.yueyu.lifetime"
    
    var displayName: String {
        switch self {
        case .trial: return "1元试用"
        case .monthly: return "9.9元/月"
        case .lifetime: return "99元永久"
        }
    }
    
    var price: String {
        switch self {
        case .trial: return "¥1.00"
        case .monthly: return "¥9.90"
        case .lifetime: return "¥99.00"
        }
    }
    
    var description: String {
        switch self {
        case .trial: return "3天试用所有课程和AI陪练"
        case .monthly: return "月度订阅·解锁全部课程+AI陪练"
        case .lifetime: return "一次性购买·永久解锁全部内容"
        }
    }
    
    var highlightFeatures: [String] {
        switch self {
        case .trial:
            return ["解锁全部课程", "AI陪练体验", "3天有效期"]
        case .monthly:
            return ["全部课程永久访问", "AI陪练无限次", "离线下载", "每日挑战"]
        case .lifetime:
            return ["全部课程永久访问", "AI陪练无限次", "离线下载", "每日挑战",
                    "所有未来更新免费", "专属学习报告", "永久会员标识"]
        }
    }
    
    var daysValid: Int {
        switch self {
        case .trial: return 3
        case .monthly: return 30
        case .lifetime: return 36500
        }
    }
    
    var vipType: VipType {
        switch self {
        case .trial: return .trial
        case .monthly: return .monthly
        case .lifetime: return .lifetime
        }
    }
}
