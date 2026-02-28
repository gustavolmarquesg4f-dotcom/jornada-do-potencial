import React, { createContext, useContext, useState, useCallback } from "react";
import { LEVELS, BADGES } from "@/lib/data";

interface UserState {
  name: string;
  status: "casado" | "solteiro" | null;
  currentWeek: number;
  currentDay: number;
  totalPP: number;
  streak: number;
  completedDays: string[]; // "week-day" format
  completedWeeklyChallenges: number[];
  earnedBadges: string[];
  onboarded: boolean;
}

interface AppContextType {
  user: UserState;
  setUserName: (name: string) => void;
  setUserStatus: (status: "casado" | "solteiro") => void;
  completeDay: (week: number, day: number) => void;
  completeWeeklyChallenge: (week: number) => void;
  getCurrentLevel: () => { name: string; icon: string; progress: number; nextLevel: string | null };
  isDayCompleted: (week: number, day: number) => boolean;
  isWeeklyChallengeCompleted: (week: number) => boolean;
  finishOnboarding: () => void;
  resetProgress: () => void;
}

const defaultUser: UserState = {
  name: "",
  status: null,
  currentWeek: 1,
  currentDay: 1,
  totalPP: 0,
  streak: 0,
  completedDays: [],
  completedWeeklyChallenges: [],
  earnedBadges: [],
  onboarded: false,
};

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserState>(() => {
    try {
      const saved = localStorage.getItem("jornada-user");
      return saved ? JSON.parse(saved) : defaultUser;
    } catch {
      return defaultUser;
    }
  });

  const save = useCallback((newUser: UserState) => {
    setUser(newUser);
    localStorage.setItem("jornada-user", JSON.stringify(newUser));
  }, []);

  const setUserName = useCallback((name: string) => {
    save({ ...user, name });
  }, [user, save]);

  const setUserStatus = useCallback((status: "casado" | "solteiro") => {
    save({ ...user, status });
  }, [user, save]);

  const finishOnboarding = useCallback(() => {
    save({ ...user, onboarded: true });
  }, [user, save]);

  const completeDay = useCallback((week: number, day: number) => {
    const key = `${week}-${day}`;
    if (user.completedDays.includes(key)) return;

    const newBadges = [...user.earnedBadges];
    const newCompleted = [...user.completedDays, key];
    let ppGain = 15;

    // Check for first day badge
    if (newCompleted.length === 1 && !newBadges.includes("first_day")) {
      newBadges.push("first_day");
      ppGain += 50;
    }

    // Check for week perfect (all 7 days of a week)
    const weekDays = newCompleted.filter(d => d.startsWith(`${week}-`));
    if (weekDays.length === 7 && !newBadges.includes("week_perfect")) {
      newBadges.push("week_perfect");
      ppGain += 100;
    }

    // Check streak
    const newStreak = user.streak + 1;
    if (newStreak >= 30 && !newBadges.includes("streak_30")) {
      newBadges.push("streak_30");
      ppGain += 200;
    }

    // Check chapter complete
    if (weekDays.length === 7 && !newBadges.includes("chapter_complete")) {
      newBadges.push("chapter_complete");
      ppGain += 150;
    }

    // Check half journey
    const completedWeeks = new Set(newCompleted.map(d => d.split("-")[0]));
    if (completedWeeks.size >= 8 && !newBadges.includes("half_journey")) {
      newBadges.push("half_journey");
      ppGain += 300;
    }

    save({
      ...user,
      completedDays: newCompleted,
      totalPP: user.totalPP + ppGain,
      streak: newStreak,
      earnedBadges: newBadges,
      currentDay: day < 7 ? day + 1 : 1,
      currentWeek: day === 7 ? Math.min(week + 1, 16) : week,
    });
  }, [user, save]);

  const completeWeeklyChallenge = useCallback((week: number) => {
    if (user.completedWeeklyChallenges.includes(week)) return;

    const newBadges = [...user.earnedBadges];
    let ppGain = 50;

    if (user.status === "casado" && !newBadges.includes("family_warrior")) {
      newBadges.push("family_warrior");
      ppGain += 100;
    }

    save({
      ...user,
      completedWeeklyChallenges: [...user.completedWeeklyChallenges, week],
      totalPP: user.totalPP + ppGain,
      earnedBadges: newBadges,
    });
  }, [user, save]);

  const getCurrentLevel = useCallback(() => {
    let currentLevel = LEVELS[0];
    let nextLevel: typeof LEVELS[0] | null = LEVELS[1];

    for (let i = LEVELS.length - 1; i >= 0; i--) {
      if (user.totalPP >= LEVELS[i].minPP) {
        currentLevel = LEVELS[i];
        nextLevel = LEVELS[i + 1] || null;
        break;
      }
    }

    const progress = nextLevel
      ? ((user.totalPP - currentLevel.minPP) / (nextLevel.minPP - currentLevel.minPP)) * 100
      : 100;

    return {
      name: currentLevel.name,
      icon: currentLevel.icon,
      progress: Math.min(progress, 100),
      nextLevel: nextLevel?.name || null,
    };
  }, [user.totalPP]);

  const isDayCompleted = useCallback((week: number, day: number) => {
    return user.completedDays.includes(`${week}-${day}`);
  }, [user.completedDays]);

  const isWeeklyChallengeCompleted = useCallback((week: number) => {
    return user.completedWeeklyChallenges.includes(week);
  }, [user.completedWeeklyChallenges]);

  const resetProgress = useCallback(() => {
    save(defaultUser);
  }, [save]);

  return (
    <AppContext.Provider value={{
      user,
      setUserName,
      setUserStatus,
      completeDay,
      completeWeeklyChallenge,
      getCurrentLevel,
      isDayCompleted,
      isWeeklyChallengeCompleted,
      finishOnboarding,
      resetProgress,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
