import Foundation
import Combine

class LearningViewModel: ObservableObject {
    @Published var progress: LearningProgress = .defaultProgress
    @Published var recentLessons: [Lesson] = []
    @Published var dailyChallenges: [DailyChallenge] = []
    @Published var flashcards: [Flashcard] = []
    
    private let progressKey = "learning_progress"
    
    init() {
        loadProgress()
    }
    
    func loadProgress() {
        if let data = UserDefaults.standard.data(forKey: progressKey),
           let saved = try? JSONDecoder().decode(LearningProgress.self, from: data) {
            progress = saved
        }
        updateStreak()
        loadRecentLessons()
        generateDailyChallenges()
    }
    
    func saveProgress() {
        if let data = try? JSONEncoder().encode(progress) {
            UserDefaults.standard.set(data, forKey: progressKey)
        }
    }
    
    func markLessonComplete(_ lessonId: String, score: Double) {
        progress.completedLessons[lessonId] = true
        progress.lessonScores[lessonId] = score
        progress.xpPoints += Int(score * 10)
        progress.totalStudyTime += 600 // 10 minutes per lesson
        
        // Level up every 100 XP
        progress.level = (progress.xpPoints / 100) + 1
        
        saveProgress()
        updateStreak()
        loadRecentLessons()
    }
    
    func addStudyTime(_ seconds: TimeInterval) {
        progress.totalStudyTime += seconds
        progress.xpPoints += Int(seconds / 60)
        progress.level = (progress.xpPoints / 100) + 1
        saveProgress()
    }
    
    private func updateStreak() {
        let today = Calendar.current.startOfDay(for: Date())
        
        if let lastStudy = progress.lastStudyDate {
            let daysBetween = Calendar.current.dateComponents([.day], from: lastStudy, to: today).day ?? 0
            
            if daysBetween == 1 {
                progress.currentStreak += 1
            } else if daysBetween > 1 {
                progress.currentStreak = 1
            }
            // If same day, don't change streak
        } else {
            progress.currentStreak = 1
        }
        
        progress.longestStreak = max(progress.longestStreak, progress.currentStreak)
        progress.lastStudyDate = today
        saveProgress()
    }
    
    private func loadRecentLessons() {
        let courses = ContentService.shared.getAllCourses()
        var allLessons: [Lesson] = []
        for course in courses {
            allLessons.append(contentsOf: course.lessons)
        }
        // For now, show first few lessons
        recentLessons = Array(allLessons.prefix(5))
    }
    
    private func generateDailyChallenges() {
        let today = Calendar.current.startOfDay(for: Date())
        let challenge = DailyChallenge(
            id: "daily_\(Date().timeIntervalSince1970)",
            date: today,
            type: .vocabulary,
            description: "学习15个粤语新词汇",
            targetCount: 15,
            currentCount: Int.random(in: 0...15),
            isCompleted: Bool.random(),
            xpReward: 50
        )
        dailyChallenges = [challenge]
    }
    
    func addFlashcard(cantonese: String, jyutping: String, chinese: String, category: String) {
        let card = Flashcard(
            id: UUID().uuidString,
            cantonese: cantonese,
            jyutping: jyutping,
            chinese: chinese,
            category: category,
            difficulty: 1,
            nextReviewDate: Calendar.current.date(byAdding: .day, value: 1, to: Date()) ?? Date(),
            reviewCount: 0
        )
        flashcards.append(card)
        saveFlashcards()
    }
    
    private func saveFlashcards() {
        if let data = try? JSONEncoder().encode(flashcards) {
            UserDefaults.standard.set(data, forKey: "flashcards")
        }
    }
}
