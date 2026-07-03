export type VipType = "none" | "trial" | "monthly" | "lifetime";
export type TargetLevel = "beginner" | "elementary" | "intermediate" | "advanced" | "fluent";
export type AppLanguage = "chinese" | "english" | "cantonese";
export type CourseCategory =
  | "pronunciation" | "social" | "daily" | "workplace"
  | "school" | "travel" | "phone" | "culture" | "slang" | "grammar";
export type ScenarioType = "free" | "restaurant" | "shopping" | "travel" | "work" | "phone" | "friend";

export interface Course {
  id: string; title: string; titleEn: string; titleYue: string;
  description: string; descriptionEn: string; iconName: string; colorHex: string;
  category: CourseCategory; difficulty: TargetLevel; lessons: Lesson[];
  isPremium: boolean; order: number;
}

export interface Lesson {
  id: string; title: string; titleEn: string; titleYue: string;
  dialogues: Dialogue[]; vocabulary: VocabularyItem[]; grammarTips: string[];
  practiceSentences: PracticeSentence[]; isCompleted: boolean; progress: number; order: number;
}

export interface Dialogue {
  id: string; speaker: string; speakerEn: string;
  cantonese: string; jyutping: string; chinese: string; english: string;
}

export interface VocabularyItem {
  id: string; cantonese: string; jyutping: string;
  chinese: string; english: string; exampleSentence: string;
}

export interface PracticeSentence {
  id: string; cantonese: string; jyutping: string; chinese: string;
}

export interface ChatMessage {
  id: string; content: string; isUser: boolean; voiceType?: "male" | "female";
}

export interface LearningProgress {
  completedLessons: Record<string, boolean>;
  lessonScores: Record<string, number>;
  totalStudyTime: number;
  currentStreak: number;
  longestStreak: number;
  lastStudyDate?: string;
  xpPoints: number;
  level: number;
}

export const CourseCategories: CourseCategory[] = [
  "pronunciation","social","daily","workplace","school",
  "travel","phone","culture","slang","grammar"
];

export const CategoryDisplayNames: Record<CourseCategory, string> = {
  pronunciation:"发音训练", social:"社交礼仪", daily:"生活用语",
  workplace:"职场粤语", school:"校园粤语", travel:"旅行粤语",
  phone:"电话聊天", culture:"香港文化", slang:"俚语俗语", grammar:"语法基础",
};

export const CategoryIcons: Record<CourseCategory, string> = {
  pronunciation:"🎙", social:"🤝", daily:"🏠", workplace:"💼",
  school:"📚", travel:"✈️", phone:"📞", culture:"⭐", slang:"💬", grammar:"📝",
};

export const ScenarioDisplayNames: Record<ScenarioType, string> = {
  free:"自由对话", restaurant:"茶餐厅", shopping:"购物",
  travel:"旅行", work:"职场", phone:"电话", friend:"朋友聊天",
};

export const VipPlans = [
  { type:"trial" as VipType, price:"¥1.00", display:"1元试用", desc:"3天试用全部课程和AI陪练", days:3 },
  { type:"monthly" as VipType, price:"¥9.90", display:"9.9元/月", desc:"月度订阅·解锁全部课程+AI陪练", days:30 },
  { type:"lifetime" as VipType, price:"¥99.00", display:"99元永久", desc:"一次性购买·永久解锁全部内容", days:36500 },
];
