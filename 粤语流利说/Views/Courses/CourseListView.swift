import SwiftUI

struct CourseListView: View {
    @EnvironmentObject var learningVM: LearningViewModel
    @EnvironmentObject var storeManager: StoreManager
    @State private var selectedCategory: CourseCategory? = nil
    @State private var showVIP = false
    
    var filteredCourses: [Course] {
        let courses = ContentService.shared.getAllCourses()
        if let category = selectedCategory {
            return courses.filter { $0.category == category }
        }
        return courses
    }
    
    var body: some View {
        NavigationView {
            ScrollView {
                VStack(spacing: 0) {
                    // Category filter chips
                    ScrollView(.horizontal, showsIndicators: false) {
                        HStack(spacing: 8) {
                            CategoryChip(title: "全部", isSelected: selectedCategory == nil) {
                                selectedCategory = nil
                            }
                            ForEach(CourseCategory.allCases, id: \.self) { cat in
                                CategoryChip(title: cat.displayName, isSelected: selectedCategory == cat) {
                                    selectedCategory = cat
                                }
                            }
                        }
                        .padding(.horizontal)
                        .padding(.vertical, 12)
                    }
                    
                    // Course cards
                    LazyVStack(spacing: 16) {
                        ForEach(filteredCourses) { course in
                            NavigationLink(destination: CourseDetailView(course: course)) {
                                CourseCard(course: course, isLocked: course.isPremium && !storeManager.isVipActive)
                            }
                        }
                    }
                    .padding(.horizontal)
                    .padding(.bottom, 20)
                }
            }
            .navigationTitle("全部课程")
            .background(Color(.systemBackground))
            .sheet(isPresented: $showVIP) {
                VIPShopView()
            }
        }
    }
}

struct CategoryChip: View {
    let title: String
    let isSelected: Bool
    let action: () -> Void
    
    var body: some View {
        Button(action: action) {
            Text(title)
                .font(.subheadline)
                .fontWeight(isSelected ? .semibold : .regular)
                .padding(.horizontal, 16)
                .padding(.vertical, 8)
                .background(isSelected ? Color(hex: "FF6B6B") : Color(.systemGray6))
                .foregroundColor(isSelected ? .white : .primary)
                .cornerRadius(20)
        }
    }
}

struct CourseCard: View {
    let course: Course
    let isLocked: Bool
    
    var body: some View {
        ZStack(alignment: .topTrailing) {
            HStack(spacing: 16) {
                // Icon
                ZStack {
                    RoundedRectangle(cornerRadius: 14)
                        .fill(Color(hex: course.colorHex).opacity(0.15))
                        .frame(width: 70, height: 70)
                    
                    Image(systemName: course.iconName)
                        .font(.title2)
                        .foregroundColor(Color(hex: course.colorHex))
                }
                
                VStack(alignment: .leading, spacing: 6) {
                    HStack {
                        Text(course.localizedTitle)
                            .font(.headline)
                            .fontWeight(.bold)
                            .foregroundColor(.primary)
                        
                        if isLocked {
                            Image(systemName: "lock.fill")
                                .font(.caption)
                                .foregroundColor(.gray)
                        }
                    }
                    
                    Text(course.localizedDescription)
                        .font(.caption)
                        .foregroundColor(.gray)
                        .lineLimit(2)
                    
                    HStack(spacing: 8) {
                        Text(course.difficulty.displayName)
                            .font(.caption2)
                            .padding(.horizontal, 8)
                            .padding(.vertical, 2)
                            .background(Color(hex: course.colorHex).opacity(0.15))
                            .foregroundColor(Color(hex: course.colorHex))
                            .cornerRadius(4)
                        
                        Text("\(course.lessons.count) 课")
                            .font(.caption2)
                            .foregroundColor(.gray)
                        
                        Spacer()
                        
                        if course.isPremium {
                            Text("VIP")
                                .font(.caption2)
                                .fontWeight(.bold)
                                .padding(.horizontal, 6)
                                .padding(.vertical, 2)
                                .background(Color.yellow)
                                .foregroundColor(.white)
                                .cornerRadius(4)
                        }
                    }
                }
                
                Image(systemName: "chevron.right")
                    .font(.caption)
                    .foregroundColor(.gray)
            }
            .padding()
            .background(Color(.systemGray6))
            .cornerRadius(16)
            .opacity(isLocked ? 0.6 : 1.0)
        }
    }
}

struct CourseDetailView: View {
    let course: Course
    @EnvironmentObject var storeManager: StoreManager
    @State private var showVIP = false
    
    var body: some View {
        ScrollView {
            VStack(spacing: 20) {
                // Header
                ZStack {
                    RoundedRectangle(cornerRadius: 20)
                        .fill(LinearGradient(colors: [Color(hex: course.colorHex), Color(hex: course.colorHex).opacity(0.7)],
                                           startPoint: .topLeading, endPoint: .bottomTrailing))
                        .frame(height: 180)
                    
                    VStack(spacing: 12) {
                        Image(systemName: course.iconName)
                            .font(.system(size: 40))
                            .foregroundColor(.white)
                        
                        Text(course.localizedTitle)
                            .font(.title)
                            .fontWeight(.bold)
                            .foregroundColor(.white)
                        
                        Text(course.localizedDescription)
                            .font(.subheadline)
                            .foregroundColor(.white.opacity(0.9))
                            .multilineTextAlignment(.center)
                            .padding(.horizontal)
                    }
                }
                .padding(.horizontal)
                
                // Lessons
                VStack(alignment: .leading, spacing: 12) {
                    Text("课程列表")
                        .font(.title3)
                        .fontWeight(.bold)
                        .padding(.horizontal)
                    
                    ForEach(course.lessons) { lesson in
                        if lesson.isCompleted && !storeManager.isVipActive && course.isPremium {
                            LockedLessonRow(lesson: lesson)
                                .onTapGesture { showVIP = true }
                        } else {
                            NavigationLink(destination: LessonDetailView(lesson: lesson)) {
                                LessonRow(lesson: lesson, color: course.colorHex)
                            }
                        }
                    }
                }
            }
            .padding(.bottom)
        }
        .navigationBarTitleDisplayMode(.inline)
        .sheet(isPresented: $showVIP) { VIPShopView() }
    }
}

struct LessonRow: View {
    let lesson: Lesson
    let color: String
    
    var body: some View {
        HStack(spacing: 14) {
            ZStack {
                Circle()
                    .stroke(Color(hex: color).opacity(0.3), lineWidth: 3)
                    .frame(width: 36, height: 36)
                
                if lesson.isCompleted {
                    Image(systemName: "checkmark.circle.fill")
                        .foregroundColor(Color(hex: color))
                        .font(.title3)
                } else {
                    Text("\(lesson.order)")
                        .font(.subheadline)
                        .fontWeight(.bold)
                        .foregroundColor(Color(hex: color))
                }
            }
            
            VStack(alignment: .leading, spacing: 4) {
                Text(lesson.title)
                    .font(.subheadline)
                    .fontWeight(.medium)
                    .foregroundColor(.primary)
                
                if lesson.progress > 0 {
                    ProgressView(value: lesson.progress)
                        .tint(Color(hex: color))
                }
            }
            
            Spacer()
            
            Image(systemName: "play.circle.fill")
                .font(.title2)
                .foregroundColor(Color(hex: color))
        }
        .padding(.horizontal)
        .padding(.vertical, 6)
    }
}

struct LockedLessonRow: View {
    let lesson: Lesson
    
    var body: some View {
        HStack(spacing: 14) {
            ZStack {
                Circle()
                    .fill(Color.gray.opacity(0.2))
                    .frame(width: 36, height: 36)
                
                Image(systemName: "lock.fill")
                    .font(.caption)
                    .foregroundColor(.gray)
            }
            
            VStack(alignment: .leading, spacing: 4) {
                Text(lesson.title)
                    .font(.subheadline)
                    .fontWeight(.medium)
                    .foregroundColor(.gray)
                
                Text("开通VIP解锁")
                    .font(.caption)
                    .foregroundColor(.orange)
            }
            
            Spacer()
            
            Image(systemName: "lock.fill")
                .foregroundColor(.gray)
        }
        .padding(.horizontal)
        .padding(.vertical, 6)
    }
}
