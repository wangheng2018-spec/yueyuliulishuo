import Foundation

class ContentService {
    static let shared = ContentService()
    private init() {}
    
    func getAllCourses() -> [Course] {
        return CourseDataProvider.courses
    }
    
    func getCourse(by id: String) -> Course? {
        return CourseDataProvider.courses.first { $0.id == id }
    }
    
    func getLesson(courseId: String, lessonId: String) -> Lesson? {
        return getCourse(by: courseId)?.lessons.first { $0.id == lessonId }
    }
}
