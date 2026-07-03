import SwiftUI

struct ProfileView: View {
    @EnvironmentObject var appState: AppState
    @EnvironmentObject var storeManager: StoreManager
    @EnvironmentObject var learningVM: LearningViewModel
    @State private var showVIP = false
    @State private var showSettings = false
    @State private var userName = UserDefaults.standard.string(forKey: "user_name") ?? "学习者"
    
    var body: some View {
        NavigationView {
            List {
                // MARK: - Profile Header
                Section {
                    HStack(spacing: 16) {
                        ZStack {
                            Circle()
                                .fill(LinearGradient(colors: [Color(hex: "FF6B6B"), Color(hex: "FF8E53")],
                                                   startPoint: .topLeading, endPoint: .bottomTrailing))
                                .frame(width: 60, height: 60)
                            
                            Text(String(userName.prefix(1)))
                                .font(.title)
                                .fontWeight(.bold)
                                .foregroundColor(.white)
                        }
                        
                        VStack(alignment: .leading, spacing: 4) {
                            Text(userName)
                                .font(.title3)
                                .fontWeight(.bold)
                            
                            HStack(spacing: 4) {
                                Image(systemName: "star.fill")
                                    .font(.caption)
                                    .foregroundColor(.yellow)
                                Text("Lv.\(learningVM.progress.level) · \(learningVM.progress.xpPoints) XP")
                                    .font(.caption)
                                    .foregroundColor(.gray)
                            }
                        }
                        
                        Spacer()
                        
                        NavigationLink(destination: EmptyView()) {
                            EmptyView()
                        }
                    }
                    .padding(.vertical, 8)
                }
                
                // MARK: - VIP Status
                Section {
                    if storeManager.isVipActive {
                        HStack {
                            Image(systemName: "crown.fill")
                                .foregroundColor(.yellow)
                            Text("VIP会员")
                                .fontWeight(.medium)
                            Spacer()
                            if let expiry = storeManager.vipExpiryDate {
                                Text("有效期至 \(expiry, style: .date)")
                                    .font(.caption)
                                    .foregroundColor(.gray)
                            }
                        }
                    } else {
                        Button(action: { showVIP = true }) {
                            HStack {
                                Image(systemName: "crown.fill")
                                    .foregroundColor(.yellow)
                                Text("开通VIP会员")
                                    .fontWeight(.medium)
                                Spacer()
                                Text(StoreProductType.trial.price)
                                    .foregroundColor(.orange)
                                Image(systemName: "chevron.right")
                                    .font(.caption)
                                    .foregroundColor(.gray)
                            }
                        }
                    }
                }
                
                // MARK: - Learning Stats
                Section("学习统计") {
                    StatRow(icon: "book.fill", color: .blue, label: "已完成课程", value: "\(learningVM.progress.completedLessons.count)")
                    StatRow(icon: "clock.fill", color: .green, label: "学习时长", value: formatTime(learningVM.progress.totalStudyTime))
                    StatRow(icon: "flame.fill", color: .orange, label: "连续打卡", value: "\(learningVM.progress.currentStreak) 天")
                    StatRow(icon: "trophy.fill", color: .yellow, label: "最高纪录", value: "\(learningVM.progress.longestStreak) 天")
                    StatRow(icon: "sparkles", color: .purple, label: "经验值", value: "\(learningVM.progress.xpPoints)")
                }
                
                // MARK: - Quick Actions
                Section("快捷功能") {
                    NavigationLink(destination: EmptyView()) {
                        Label("闪卡复习", systemImage: "square.stack.fill")
                    }
                    NavigationLink(destination: EmptyView()) {
                        Label("每日挑战", systemImage: "target")
                    }
                    NavigationLink(destination: EmptyView()) {
                        Label("学习报告", systemImage: "chart.bar.xaxis")
                    }
                }
                
                // MARK: - Settings
                Section("设置") {
                    HStack {
                        Label("语言设置", systemImage: "globe")
                        Spacer()
                        Text(appState.selectedLanguage.displayName)
                            .font(.caption)
                            .foregroundColor(.gray)
                    }
                    .onTapGesture { showSettings = true }
                    
                    HStack {
                        Label("深色模式", systemImage: "moon.fill")
                        Spacer()
                        Toggle("", isOn: $appState.isDarkMode)
                    }
                    
                    HStack {
                        Label("每日学习提醒", systemImage: "bell.fill")
                        Spacer()
                        Toggle("", isOn: .constant(true))
                    }
                }
                
                // MARK: - About
                Section("关于") {
                    HStack {
                        Label("版本", systemImage: "info.circle")
                        Spacer()
                        Text("1.0.0")
                            .foregroundColor(.gray)
                    }
                    
                    Link(destination: URL(string: "https://example.com/privacy")!) {
                        Label("隐私政策", systemImage: "hand.raised.fill")
                    }
                    
                    Link(destination: URL(string: "https://example.com/terms")!) {
                        Label("服务条款", systemImage: "doc.text.fill")
                    }
                }
            }
            .navigationTitle("我的")
            .sheet(isPresented: $showVIP) { VIPShopView() }
            .sheet(isPresented: $showSettings) {
                LanguageSettingsView()
            }
        }
    }
    
    private func formatTime(_ interval: TimeInterval) -> String {
        let hours = Int(interval) / 3600
        let minutes = (Int(interval) % 3600) / 60
        if hours > 0 {
            return "\(hours)小时\(minutes)分钟"
        }
        return "\(minutes)分钟"
    }
}

struct StatRow: View {
    let icon: String
    let color: Color
    let label: String
    let value: String
    
    var body: some View {
        HStack {
            Image(systemName: icon)
                .foregroundColor(color)
                .frame(width: 24)
            Text(label)
            Spacer()
            Text(value)
                .fontWeight(.semibold)
        }
    }
}

struct LanguageSettingsView: View {
    @EnvironmentObject var appState: AppState
    @Environment(\.dismiss) var dismiss
    
    var body: some View {
        NavigationView {
            List {
                ForEach(AppLanguage.allCases, id: \.rawValue) { lang in
                    HStack {
                        Text(lang.displayName)
                        Spacer()
                        if appState.selectedLanguage == lang {
                            Image(systemName: "checkmark")
                                .foregroundColor(Color(hex: "FF6B6B"))
                        }
                    }
                    .contentShape(Rectangle())
                    .onTapGesture {
                        appState.setLanguage(lang)
                        dismiss()
                    }
                }
            }
            .navigationTitle("界面语言")
            .navigationBarTitleDisplayMode(.inline)
            .toolbar {
                ToolbarItem(placement: .navigationBarTrailing) {
                    Button("完成") { dismiss() }
                }
            }
        }
    }
}

struct ProgressView: View {
    @EnvironmentObject var learningVM: LearningViewModel
    
    var body: some View {
        NavigationView {
            ScrollView {
                VStack(spacing: 20) {
                    // Overall Progress
                    VStack(spacing: 12) {
                        Text("学习进度")
                            .font(.title3)
                            .fontWeight(.bold)
                        
                        ZStack {
                            Circle()
                                .stroke(Color(.systemGray5), lineWidth: 12)
                                .frame(width: 120, height: 120)
                            
                            Circle()
                                .trim(from: 0, to: learningVM.progress.totalCompletionRate / 100)
                                .stroke(LinearGradient(colors: [Color(hex: "FF6B6B"), Color(hex: "FF8E53")],
                                                     startPoint: .top, endPoint: .bottom),
                                        style: StrokeStyle(lineWidth: 12, lineCap: .round))
                                .frame(width: 120, height: 120)
                                .rotationEffect(.degrees(-90))
                            
                            VStack(spacing: 2) {
                                Text(String(format: "%.0f%%", learningVM.progress.totalCompletionRate))
                                    .font(.title)
                                    .fontWeight(.bold)
                                Text("完成度")
                                    .font(.caption)
                                    .foregroundColor(.gray)
                            }
                        }
                        
                        HStack(spacing: 30) {
                            ProgressStatItem(value: "\(learningVM.progress.level)", label: "等级")
                            ProgressStatItem(value: "\(learningVM.progress.currentStreak)", label: "连续天数")
                            ProgressStatItem(value: "\(learningVM.progress.xpPoints)", label: "经验值")
                        }
                    }
                    .padding()
                    .background(Color(.systemGray6))
                    .cornerRadius(16)
                    .padding(.horizontal)
                    
                    // XP Level Bar
                    VStack(alignment: .leading, spacing: 8) {
                        HStack {
                            Text("等级 Lv.\(learningVM.progress.level)")
                                .font(.subheadline)
                                .fontWeight(.medium)
                            Spacer()
                            Text("\(learningVM.progress.xpPoints % 100)/100 XP")
                                .font(.caption)
                                .foregroundColor(.gray)
                        }
                        ProgressView(value: Double(learningVM.progress.xpPoints % 100) / 100.0)
                            .tint(Color(hex: "FF6B6B"))
                    }
                    .padding(.horizontal)
                    
                    // Category Progress
                    VStack(alignment: .leading, spacing: 12) {
                        Text("分类进度")
                            .font(.title3)
                            .fontWeight(.bold)
                            .padding(.horizontal)
                        
                        ForEach(CourseCategory.allCases, id: \.self) { cat in
                            CategoryProgressRow(category: cat, progress: Double.random(in: 0.2...0.9))
                        }
                        .padding(.horizontal)
                    }
                }
                .padding(.vertical)
            }
            .navigationTitle("学习进度")
        }
    }
}

struct ProgressStatItem: View {
    let value: String
    let label: String
    
    var body: some View {
        VStack(spacing: 4) {
            Text(value)
                .font(.title2)
                .fontWeight(.bold)
            Text(label)
                .font(.caption)
                .foregroundColor(.gray)
        }
    }
}

struct CategoryProgressRow: View {
    let category: CourseCategory
    let progress: Double
    
    var body: some View {
        VStack(spacing: 4) {
            HStack {
                Image(systemName: category.iconName)
                    .foregroundColor(.blue)
                Text(category.displayName)
                    .font(.subheadline)
                Spacer()
                Text("\(Int(progress * 100))%")
                    .font(.caption)
                    .foregroundColor(.gray)
            }
            ProgressView(value: progress)
                .tint(Color(hex: "FF6B6B"))
        }
    }
}
