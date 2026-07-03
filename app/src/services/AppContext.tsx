import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { getProgress, getVipStatus, getDarkMode, setDarkMode as setDarkStorage } from "./storage";
import { LearningProgress, VipType } from "../models/types";

interface AppState {
  progress: LearningProgress;
  vipType: VipType;
  isVip: boolean;
  darkMode: boolean;
  refreshProgress: () => Promise<void>;
  toggleDark: () => Promise<void>;
  setVip: (type: VipType) => void;
}

const AppContext = createContext<AppState>({} as AppState);

export function AppProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<LearningProgress>({
    completedLessons:{}, lessonScores:{}, totalStudyTime:0,
    currentStreak:0, longestStreak:0, xpPoints:0, level:1,
  });
  const [vipType, setVipType] = useState<VipType>("none");
  const [darkMode, setDark] = useState(false);

  const isVip = vipType !== "none";

  const refreshProgress = async () => {
    const p = await getProgress();
    setProgress(p);
    const v = await getVipStatus();
    setVipType(v.type);
    const d = await getDarkMode();
    setDark(d);
  };

  const toggleDark = async () => {
    const next = !darkMode;
    setDark(next);
    await setDarkStorage(next);
  };

  const setVip = (type: VipType) => setVipType(type);

  useEffect(() => { refreshProgress(); }, []);

  return (
    <AppContext.Provider value={{ progress, vipType, isVip, darkMode, refreshProgress, toggleDark, setVip }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}
