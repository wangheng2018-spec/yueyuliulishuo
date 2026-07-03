import AsyncStorage from "@react-native-async-storage/async-storage";
import { LearningProgress, VipType } from "../models/types";

const PROGRESS_KEY = "learning_progress";
const VIP_TYPE_KEY = "vip_type";
const VIP_EXPIRY_KEY = "vip_expiry";
const DARK_MODE_KEY = "dark_mode";

export async function getProgress(): Promise<LearningProgress> {
  try {
    const data = await AsyncStorage.getItem(PROGRESS_KEY);
    if (data) return JSON.parse(data);
  } catch {}
  return {
    completedLessons: {}, lessonScores: {}, totalStudyTime: 0,
    currentStreak: 0, longestStreak: 0, xpPoints: 0, level: 1,
  };
}

export async function saveProgress(p: LearningProgress) {
  await AsyncStorage.setItem(PROGRESS_KEY, JSON.stringify(p));
}

export async function getVipStatus(): Promise<{ type: VipType; expiry?: string }> {
  const type = (await AsyncStorage.getItem(VIP_TYPE_KEY)) as VipType || "none";
  const expiry = (await AsyncStorage.getItem(VIP_EXPIRY_KEY)) || undefined;
  return { type, expiry };
}

export async function setVipStatus(type: VipType, expiry?: string) {
  await AsyncStorage.setItem(VIP_TYPE_KEY, type);
  if (expiry) await AsyncStorage.setItem(VIP_EXPIRY_KEY, expiry);
}

export async function getDarkMode(): Promise<boolean> {
  return (await AsyncStorage.getItem(DARK_MODE_KEY)) === "true";
}

export async function setDarkMode(v: boolean) {
  await AsyncStorage.setItem(DARK_MODE_KEY, v ? "true" : "false");
}

export async function markLessonComplete(lessonId: string, score: number) {
  const p = await getProgress();
  p.completedLessons[lessonId] = true;
  p.lessonScores[lessonId] = score;
  p.xpPoints += Math.floor(score * 10);
  p.level = Math.floor(p.xpPoints / 100) + 1;
  p.totalStudyTime += 600;
  const today = new Date().toDateString();
  const last = p.lastStudyDate ? new Date(p.lastStudyDate).toDateString() : null;
  if (last !== today) {
    if (last && new Date(p.lastStudyDate!).getTime() === new Date(today).getTime() - 86400000) {
      p.currentStreak += 1;
    } else if (last !== today) {
      p.currentStreak = 1;
    }
    p.longestStreak = Math.max(p.longestStreak, p.currentStreak);
  }
  p.lastStudyDate = new Date().toISOString();
  await saveProgress(p);
}
