import Foundation

struct User: Codable, Identifiable {
    var id: String
    var name: String
    var email: String
    var joinDate: Date
    var isVip: Bool
    var vipType: VipType
    var vipExpiryDate: Date?
    var learningStreak: Int
    var totalLessonsCompleted: Int
    var totalPracticeTime: TimeInterval
    var lastActiveDate: Date
    var nativeLanguage: String
    var targetLevel: TargetLevel
    
    init(id: String = UUID().uuidString,
         name: String = "学习者",
         email: String = "",
         joinDate: Date = Date(),
         isVip: Bool = false,
         vipType: VipType = .none,
         vipExpiryDate: Date? = nil,
         learningStreak: Int = 0,
         totalLessonsCompleted: Int = 0,
         totalPracticeTime: TimeInterval = 0,
         lastActiveDate: Date = Date(),
         nativeLanguage: String = "zh-Hans",
         targetLevel: TargetLevel = .beginner) {
        self.id = id
        self.name = name
        self.email = email
        self.joinDate = joinDate
        self.isVip = isVip
        self.vipType = vipType
        self.vipExpiryDate = vipExpiryDate
        self.learningStreak = learningStreak
        self.totalLessonsCompleted = totalLessonsCompleted
        self.totalPracticeTime = totalPracticeTime
        self.lastActiveDate = lastActiveDate
        self.nativeLanguage = nativeLanguage
        self.targetLevel = targetLevel
    }
}

enum VipType: String, Codable, CaseIterable {
    case none = "none"
    case trial = "trial"
    case monthly = "monthly"
    case lifetime = "lifetime"
    
    var displayName: String {
        switch self {
        case .none: return "免费用户"
        case .trial: return "试用会员"
        case .monthly: return "月度会员"
        case .lifetime: return "永久会员"
        }
    }
    
    var price: String {
        switch self {
        case .none: return "免费"
        case .trial: return "¥1.00"
        case .monthly: return "¥9.90/月"
        case .lifetime: return "¥99.00"
        }
    }
}

enum TargetLevel: String, Codable, CaseIterable {
    case beginner = "beginner"
    case elementary = "elementary"
    case intermediate = "intermediate"
    case advanced = "advanced"
    case fluent = "fluent"
    
    var displayName: String {
        switch self {
        case .beginner: return "零基础"
        case .elementary: return "初级"
        case .intermediate: return "中级"
        case .advanced: return "高级"
        case .fluent: return "流利"
        }
    }
}
