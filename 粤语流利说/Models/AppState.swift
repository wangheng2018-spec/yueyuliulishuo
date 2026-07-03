import SwiftUI
import Combine

class AppState: ObservableObject {
    @Published var isDarkMode: Bool = false
    @Published var isLoggedIn: Bool = false
    @Published var currentUser: User?
    @Published var selectedLanguage: AppLanguage = .chinese
    @Published var isOnline: Bool = true
    
    init() {
        loadSettings()
    }
    
    func loadSettings() {
        isDarkMode = UserDefaults.standard.bool(forKey: "dark_mode")
        let langRaw = UserDefaults.standard.string(forKey: "app_language") ?? "chinese"
        selectedLanguage = AppLanguage(rawValue: langRaw) ?? .chinese
    }
    
    func toggleDarkMode() {
        isDarkMode.toggle()
        UserDefaults.standard.set(isDarkMode, forKey: "dark_mode")
    }
    
    func setLanguage(_ lang: AppLanguage) {
        selectedLanguage = lang
        UserDefaults.standard.set(lang.rawValue, forKey: "app_language")
    }
}

enum AppLanguage: String, CaseIterable {
    case chinese = "chinese"
    case english = "english"
    case cantonese = "cantonese"
    
    var displayName: String {
        switch self {
        case .chinese: return "简体中文"
        case .english: return "English"
        case .cantonese: return "粵語"
        }
    }
}
