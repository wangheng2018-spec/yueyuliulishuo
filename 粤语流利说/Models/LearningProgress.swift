import Foundation

struct LearningProgress: Codable {
    var completedLessons: [String: Bool]
    var lessonScores: [String: Double]
    var vocabularyMastered: [String: Bool]
    var totalStudyTime: TimeInterval
    var dailyGoal: Int
    var currentStreak: Int
    var longestStreak: Int
    var lastStudyDate: Date?
    var xpPoints: Int
    var level: Int
    
    static let defaultProgress = LearningProgress(
        completedLessons: [:],
        lessonScores: [:],
        vocabularyMastered: [:],
        totalStudyTime: 0,
        dailyGoal: 15,
        currentStreak: 0,
        longestStreak: 0,
        lastStudyDate: nil,
        xpPoints: 0,
        level: 1
    )
    
    var totalCompletionRate: Double {
        guard !completedLessons.isEmpty else { return 0 }
        let completed = completedLessons.values.filter { $0 }.count
        return Double(completed) / Double(completedLessons.count) * 100
    }
}

struct DailyChallenge: Identifiable, Codable {
    let id: String
    let date: Date
    let type: ChallengeType
    let description: String
    let targetCount: Int
    var currentCount: Int
    var isCompleted: Bool
    var xpReward: Int
    
    enum ChallengeType: String, Codable {
        case vocabulary = "vocabulary"
        case dialogue = "dialogue"
        case pronunciation = "pronunciation"
        case quiz = "quiz"
        
        var displayName: String {
            switch self {
            case .vocabulary: return "词汇挑战"
            case .dialogue: return "对话挑战"
            case .pronunciation: return "发音挑战"
            case .quiz: return "测验挑战"
            }
        }
    }
}

struct Flashcard: Identifiable, Codable {
    let id: String
    let cantonese: String
    let jyutping: String
    let chinese: String
    let category: String
    var difficulty: Int
    var nextReviewDate: Date
    var reviewCount: Int
}
