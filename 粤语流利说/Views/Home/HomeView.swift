import SwiftUI

struct HomeView: View {
    @EnvironmentObject var appState: AppState
    @EnvironmentObject var storeManager: StoreManager
    @EnvironmentObject var learningVM: LearningViewModel
    @State private var showVIP = false
    
    var body: some View {
        NavigationView {
            ScrollView(showsIndicators: false) {
                VStack(spacing: 20) {
                    // MARK: - Top Banner
                    topBanner
                    
                    // MARK: - VIP Card (if not VIP)
                    if !storeManager.isVipActive {
                        vipPromotionCard
                    }
                    
                    // MARK: - Continue Learning
                    if !learningVM.recentLessons.isEmpty {
                        continueLearningSection
                    }
                    
                    // MARK: - Course Categories Grid
                    categoriesSection
                    
                    // MARK: - Daily Challenge
                    dailyChallengeCard
                    
                    // MARK: - Quick Stats
                    quickStatsRow
                }
                .padding()
            }
            .navigationTitle("粤语流利说")
            .sheet(isPresented: $showVIP) {
                VIPShopView()
            }
        }
    }
    
    // MARK: - Top Banner
    private var topBanner: some View {
        ZStack(alignment: .leading) {
            RoundedRectangle(cornerRadius: 20)
                .fill(LinearGradient(colors: [Color(hex: "FF6B6B"), Color(hex: "FF8E53")],
                                   startPoint: .topLeading, endPoint: .bottomTrailing))
                .frame(height: 160)
            
            HStack {
                VStack(alignment: .leading, spacing: 8) {
                    Text(storeManager.isVipActive ? "VIP会员" : "每日学粤语")
                        .font(.title2)
                        .fontWeight(.bold)
                        .foregroundColor(.white)
                    
                    Text(storeManager.isVipActive ? "尊享全部课程与AI陪练" : "每天15分钟，轻松学会粤语")
                        .font(.subheadline)
                        .foregroundColor(.white.opacity(0.9))
                    
                    HStack(spacing: 4) {
                        Image(systemName: "flame.fill")
                            .foregroundColor(.yellow)
                        Text("已连续学习 \(learningVM.progress.currentStreak) 天")
                            .font(.caption)
                            .foregroundColor(.white.opacity(0.9))
                    }
                    .padding(.top, 4)
                }
                .padding(.leading, 20)
                
                Spacer()
                
                Image(systemName: "character.bubble.fill.jyutping")
                    .font(.system(size: 60))
                    .foregroundColor(.white.opacity(0.3))
                    .padding(.trailing)
            }
        }
    }
    
    // MARK: - VIP Promotion Card
    private var vipPromotionCard: some View {
        Button(action: { showVIP = true }) {
            ZStack(alignment: .leading) {
                RoundedRectangle(cornerRadius: 16)
                    .fill(LinearGradient(colors: [Color(hex: "FFD700"), Color(hex: "FFA500")],
                                       startPoint: .leading, endPoint: .trailing))
                    .frame(height: 80)
                
                HStack {
                    VStack(alignment: .leading, spacing: 4) {
                        Text("解锁全部课程 🎉")
                            .font(.headline)
                            .fontWeight(.bold)
                            .foregroundColor(.white)
                        Text("1元试用 · 9.9元/月 · 99元永久")
                            .font(.caption)
                            .foregroundColor(.white.opacity(0.9))
                    }
                    .padding(.leading, 16)
                    
                    Spacer()
                    
                    Image(systemName: "crown.fill")
                        .font(.title)
                        .foregroundColor(.white)
                        .padding(.trailing, 16)
                }
            }
        }
        .buttonStyle(PlainButtonStyle())
    }
    
    // MARK: - Continue Learning
    private var continueLearningSection: some View {
        VStack(alignment: .leading, spacing: 12) {
            Text("继续学习")
                .font(.title3)
                .fontWeight(.bold)
            
            ScrollView(.horizontal, showsIndicators: false) {
                HStack(spacing: 14) {
                    ForEach(learningVM.recentLessons, id: \.id) { lesson in
                        NavigationLink(destination: LessonDetailView(lesson: lesson)) {
                            ContinueLessonCard(lesson: lesson)
                        }
                    }
                }
            }
        }
    }
    
    // MARK: - Categories
    private var categoriesSection: some View {
        VStack(alignment: .leading, spacing: 12) {
            HStack {
                Text("课程分类")
                    .font(.title3)
                    .fontWeight(.bold)
                Spacer()
                NavigationLink("查看全部") {
                    CourseListView()
                }
                .font(.subheadline)
                .foregroundColor(Color(hex: "FF6B6B"))
            }
            
            LazyVGrid(columns: [GridItem(.flexible()), GridItem(.flexible())], spacing: 12) {
                ForEach(CourseCategory.allCases, id: \.self) { category in
                    NavigationLink(destination: CourseListView(category: category)) {
                        CategoryCard(category: category)
                    }
                }
            }
        }
    }
    
    // MARK: - Daily Challenge
    private var dailyChallengeCard: some View {
        VStack(alignment: .leading, spacing: 12) {
            Text("今日挑战")
                .font(.title3)
                .fontWeight(.bold)
            
            HStack {
                Image(systemName: "target")
                    .font(.title2)
                    .foregroundColor(Color(hex: "FF6B6B"))
                
                VStack(alignment: .leading, spacing: 4) {
                    Text("学习15个新词汇")
                        .font(.subheadline)
                        .fontWeight(.medium)
                    ProgressView(value: 0.6)
                        .tint(Color(hex: "FF6B6B"))
                    Text("已完成 9/15")
                        .font(.caption)
                        .foregroundColor(.gray)
                }
                .padding(.leading, 8)
                
                Spacer()
                
                Image(systemName: "chevron.right")
                    .foregroundColor(.gray)
            }
            .padding()
            .background(Color(.systemGray6))
            .cornerRadius(12)
        }
    }
    
    // MARK: - Quick Stats
    private var quickStatsRow: some View {
        HStack(spacing: 16) {
            StatCard(icon: "book.fill", value: "\(learningVM.progress.completedLessons.count)", label: "已学课程", color: .blue)
            StatCard(icon: "textformat.size", value: "\(learningVM.progress.xpPoints)", label: "经验值", color: .green)
            StatCard(icon: "flame.fill", value: "\(learningVM.progress.currentStreak)", label: "连续天数", color: .orange)
        }
    }
}

struct ContinueLessonCard: View {
    let lesson: Lesson
    
    var body: some View {
        VStack(alignment: .leading) {
            RoundedRectangle(cornerRadius: 12)
                .fill(Color(hex: "FF6B6B").opacity(0.15))
                .frame(width: 140, height: 100)
                .overlay(
                    Image(systemName: "play.circle.fill")
                        .font(.largeTitle)
                        .foregroundColor(Color(hex: "FF6B6B"))
                )
            
            Text(lesson.title)
                .font(.caption)
                .fontWeight(.medium)
                .lineLimit(1)
                .foregroundColor(.primary)
            
            ProgressView(value: lesson.progress)
                .tint(Color(hex: "FF6B6B"))
                .scaleEffect(0.8)
        }
        .frame(width: 140)
    }
}

struct CategoryCard: View {
    let category: CourseCategory
    
    var body: some View {
        HStack(spacing: 12) {
            Image(systemName: category.iconName)
                .font(.title2)
                .foregroundColor(.white)
                .frame(width: 40, height: 40)
                .background(Color(hex: categoryColor))
                .cornerRadius(10)
            
            Text(category.displayName)
                .font(.subheadline)
                .fontWeight(.medium)
                .foregroundColor(.primary)
            
            Spacer()
            
            Image(systemName: "chevron.right")
                .font(.caption)
                .foregroundColor(.gray)
        }
        .padding()
        .background(Color(.systemGray6))
        .cornerRadius(12)
    }
    
    private var categoryColor: String {
        switch category {
        case .social: return "4ECDC4"
        case .daily: return "45B7D1"
        case .workplace: return "96CEB4"
        case .school: return "9B59B6"
        case .travel: return "F39C12"
        case .phone: return "E74C3C"
        case .culture: return "1ABC9C"
        case .slang: return "E67E22"
        case .grammar: return "3498DB"
        case .pronunciation: return "FF6B6B"
        }
    }
}

struct StatCard: View {
    let icon: String
    let value: String
    let label: String
    let color: Color
    
    var body: some View {
        VStack(spacing: 8) {
            Image(systemName: icon)
                .font(.title3)
                .foregroundColor(color)
            
            Text(value)
                .font(.title2)
                .fontWeight(.bold)
            
            Text(label)
                .font(.caption)
                .foregroundColor(.gray)
        }
        .frame(maxWidth: .infinity)
        .padding(.vertical, 12)
        .background(Color(.systemGray6))
        .cornerRadius(12)
    }
}
