import React, { createContext, useContext, useState, useCallback } from "react";

export interface Activity {
  id: string;
  title: string;
  description: string;
  type: "prayer" | "reading" | "challenge" | "video";
  content?: string; // URL para vídeos ou link
  week: number;
  day: number;
  createdAt: string;
}

export interface UserActivity {
  userId: string;
  activityId: string;
  completed: boolean;
  completedAt?: string;
}

export interface AdminUser {
  id: string;
  name: string;
  status: "casado" | "solteiro" | null;
  currentWeek: number;
  currentDay: number;
  totalPP: number;
  streak: number;
  completedDays: string[];
  earnedBadges: string[];
  joinedAt: string;
}

interface AdminContextType {
  isAdmin: boolean;
  adminPassword: string;
  activities: Activity[];
  userActivities: UserActivity[];
  users: AdminUser[];
  setAdminPassword: (password: string) => void;
  addActivity: (activity: Omit<Activity, "id" | "createdAt">) => void;
  updateActivity: (id: string, activity: Partial<Activity>) => void;
  deleteActivity: (id: string) => void;
  markActivityComplete: (userId: string, activityId: string) => void;
  markActivityIncomplete: (userId: string, activityId: string) => void;
  addUser: (user: Omit<AdminUser, "id" | "joinedAt">) => void;
  updateUser: (id: string, user: Partial<AdminUser>) => void;
  deleteUser: (id: string) => void;
  getActivitiesForWeekDay: (week: number, day: number) => Activity[];
  getUserActivities: (userId: string) => UserActivity[];
  getActivityCompletion: (activityId: string) => { completed: number; total: number };
}

const defaultAdminPassword = "admin123"; // Senha padrão (deve ser alterada)

const AdminContext = createContext<AdminContextType | null>(null);

export function AdminProvider({ children }: { children: React.ReactNode }) {
  const [adminPassword, setAdminPasswordState] = useState<string>(defaultAdminPassword);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [userActivities, setUserActivities] = useState<UserActivity[]>([]);
  const [users, setUsers] = useState<AdminUser[]>([]);

  const setAdminPassword = useCallback((password: string) => {
    setAdminPasswordState(password);
    localStorage.setItem("admin-password", password);
  }, []);

  const addActivity = useCallback((activity: Omit<Activity, "id" | "createdAt">) => {
    const newActivity: Activity = {
      ...activity,
      id: `activity-${Date.now()}`,
      createdAt: new Date().toISOString(),
    };
    setActivities(prev => [...prev, newActivity]);
    localStorage.setItem("activities", JSON.stringify([...activities, newActivity]));
  }, [activities]);

  const updateActivity = useCallback((id: string, activity: Partial<Activity>) => {
    setActivities(prev => prev.map(a => a.id === id ? { ...a, ...activity } : a));
    localStorage.setItem("activities", JSON.stringify(activities));
  }, [activities]);

  const deleteActivity = useCallback((id: string) => {
    setActivities(prev => prev.filter(a => a.id !== id));
    setUserActivities(prev => prev.filter(ua => ua.activityId !== id));
    localStorage.setItem("activities", JSON.stringify(activities));
  }, [activities, userActivities]);

  const markActivityComplete = useCallback((userId: string, activityId: string) => {
    const existing = userActivities.find(ua => ua.userId === userId && ua.activityId === activityId);
    if (existing) {
      setUserActivities(prev => prev.map(ua =>
        ua.userId === userId && ua.activityId === activityId
          ? { ...ua, completed: true, completedAt: new Date().toISOString() }
          : ua
      ));
    } else {
      setUserActivities(prev => [...prev, {
        userId,
        activityId,
        completed: true,
        completedAt: new Date().toISOString(),
      }]);
    }
    localStorage.setItem("user-activities", JSON.stringify(userActivities));
  }, [userActivities]);

  const markActivityIncomplete = useCallback((userId: string, activityId: string) => {
    setUserActivities(prev => prev.map(ua =>
      ua.userId === userId && ua.activityId === activityId
        ? { ...ua, completed: false, completedAt: undefined }
        : ua
    ));
    localStorage.setItem("user-activities", JSON.stringify(userActivities));
  }, [userActivities]);

  const addUser = useCallback((user: Omit<AdminUser, "id" | "joinedAt">) => {
    const newUser: AdminUser = {
      ...user,
      id: `user-${Date.now()}`,
      joinedAt: new Date().toISOString(),
    };
    setUsers(prev => [...prev, newUser]);
    localStorage.setItem("admin-users", JSON.stringify([...users, newUser]));
  }, [users]);

  const updateUser = useCallback((id: string, user: Partial<AdminUser>) => {
    setUsers(prev => prev.map(u => u.id === id ? { ...u, ...user } : u));
    localStorage.setItem("admin-users", JSON.stringify(users));
  }, [users]);

  const deleteUser = useCallback((id: string) => {
    setUsers(prev => prev.filter(u => u.id !== id));
    setUserActivities(prev => prev.filter(ua => ua.userId !== id));
    localStorage.setItem("admin-users", JSON.stringify(users));
  }, [users, userActivities]);

  const getActivitiesForWeekDay = useCallback((week: number, day: number) => {
    return activities.filter(a => a.week === week && a.day === day);
  }, [activities]);

  const getUserActivities = useCallback((userId: string) => {
    return userActivities.filter(ua => ua.userId === userId);
  }, [userActivities]);

  const getActivityCompletion = useCallback((activityId: string) => {
    const completed = userActivities.filter(ua => ua.activityId === activityId && ua.completed).length;
    const total = users.length;
    return { completed, total };
  }, [userActivities, users]);

  return (
    <AdminContext.Provider value={{
      isAdmin: false,
      adminPassword,
      activities,
      userActivities,
      users,
      setAdminPassword,
      addActivity,
      updateActivity,
      deleteActivity,
      markActivityComplete,
      markActivityIncomplete,
      addUser,
      updateUser,
      deleteUser,
      getActivitiesForWeekDay,
      getUserActivities,
      getActivityCompletion,
    }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const ctx = useContext(AdminContext);
  if (!ctx) throw new Error("useAdmin must be used within AdminProvider");
  return ctx;
}
