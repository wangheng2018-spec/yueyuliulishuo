import SwiftUI

@main
struct CantoneseApp: App {
    @StateObject private var appState = AppState()
    @StateObject private var storeManager = StoreManager()
    @StateObject private var learningVM = LearningViewModel()
    
    var body: some Scene {
        WindowGroup {
            ContentView()
                .environmentObject(appState)
                .environmentObject(storeManager)
                .environmentObject(learningVM)
                .preferredColorScheme(appState.isDarkMode ? .dark : .light)
                .onAppear {
                    storeManager.loadProducts()
                    learningVM.loadProgress()
                }
        }
    }
}
