import Foundation

struct Course: Identifiable, Codable {
    let id: String
    let title: String
    let titleEn: String
    let titleYue: String
    let description: String
    let descriptionEn: String
    let iconName: String
    let colorHex: String
    let category: CourseCategory
    let difficulty: TargetLevel
    var lessons: [Lesson]
    let isPremium: Bool
    let order: Int
    
    var localizedTitle: String {
        let lang = UserDefaults.standard.string(forKey: "app_language") ?? "chinese"
        switch lang {
        case "english": return titleEn
        case "cantonese": return titleYue
        default: return title
        }
    }
    
    var localizedDescription: String {
        let lang = UserDefaults.standard.string(forKey: "app_language") ?? "chinese"
        switch lang {
        case "english": return descriptionEn
        default: return description
        }
    }
}

enum CourseCategory: String, Codable, CaseIterable {
    case social = "social"
    case daily = "daily"
    case workplace = "workplace"
    case school = "school"
    case travel = "travel"
    case phone = "phone"
    case culture = "culture"
    case slang = "slang"
    case grammar = "grammar"
    case pronunciation = "pronunciation"
    
    var displayName: String {
        switch self {
        case .social: return "社交礼仪"
        case .daily: return "生活用语"
        case .workplace: return "职场粤语"
        case .school: return "校园粤语"
        case .travel: return "旅行粤语"
        case .phone: return "电话聊天"
        case .culture: return "香港文化"
        case .slang: return "俚语俗语"
        case .grammar: return "语法基础"
        case .pronunciation: return "发音训练"
        }
    }
    
    var iconName: String {
        switch self {
        case .social: return "hand.wave"
        case .daily: return "house"
        case .workplace: return "briefcase"
        case .school: return "book"
        case .travel: return "airplane"
        case .phone: return "phone"
        case .culture: return "star"
        case .slang: return "text.bubble"
        case .grammar: return "textformat"
        case .pronunciation: return "waveform"
        }
    }
}

struct Lesson: Identifiable, Codable {
    let id: String
    let title: String
    let titleEn: String
    let titleYue: String
    let dialogues: [Dialogue]
    let vocabulary: [VocabularyItem]
    let grammarTips: [String]
    let practiceSentences: [PracticeSentence]
    var isCompleted: Bool
    var progress: Double
    let order: Int
}

struct Dialogue: Identifiable, Codable {
    let id: String
    let speaker: String
    let speakerEn: String
    let cantonese: String
    let jyutping: String
    let chinese: String
    let english: String
    let audioFileName: String?
}

struct VocabularyItem: Identifiable, Codable {
    let id: String
    let cantonese: String
    let jyutping: String
    let chinese: String
    let english: String
    let exampleSentence: String
}

struct PracticeSentence: Identifiable, Codable {
    let id: String
    let cantonese: String
    let jyutping: String
    let chinese: String
    let audioFileName: String?
}
