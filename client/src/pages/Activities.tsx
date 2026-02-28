// DESIGN: Dark Forge — Activities Tracker
// Rastrear atividades completas e incompletas
import { useState } from "react";
import { motion } from "framer-motion";
import { useAdmin } from "@/contexts/AdminContext";
import { useApp } from "@/contexts/AppContext";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, Circle, ExternalLink, Video, BookOpen, Zap, Heart } from "lucide-react";

export default function Activities() {
  const admin = useAdmin();
  const { user } = useApp();
  const [selectedWeek, setSelectedWeek] = useState(user.currentWeek);

  // Simular um ID de usuário (em produção, viria da autenticação)
  const userId = "user-current";

  const activitiesForWeek = admin.activities.filter(a => a.week === selectedWeek);
  const userActivities = admin.getUserActivities(userId);

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "prayer":
        return <Heart className="w-5 h-5 text-[oklch(0.72_0.19_45)]" />;
      case "reading":
        return <BookOpen className="w-5 h-5 text-[oklch(0.80_0.14_80)]" />;
      case "video":
        return <Video className="w-5 h-5 text-[oklch(0.72_0.19_45)]" />;
      case "challenge":
        return <Zap className="w-5 h-5 text-[oklch(0.80_0.14_80)]" />;
      default:
        return <Circle className="w-5 h-5" />;
    }
  };

  const getActivityLabel = (type: string) => {
    switch (type) {
      case "prayer":
        return "Oração";
      case "reading":
        return "Leitura";
      case "video":
        return "Vídeo";
      case "challenge":
        return "Desafio";
      default:
        return type;
    }
  };

  const isActivityComplete = (activityId: string) => {
    return userActivities.some(ua => ua.activityId === activityId && ua.completed);
  };

  const handleToggleActivity = (activityId: string) => {
    if (isActivityComplete(activityId)) {
      admin.markActivityIncomplete(userId, activityId);
    } else {
      admin.markActivityComplete(userId, activityId);
    }
  };

  return (
    <div className="min-h-screen pb-24">
      <div className="px-4 py-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <h1 className="font-display text-3xl font-bold uppercase text-[oklch(0.95_0.02_80)]">
            Minhas Atividades
          </h1>
          <p className="text-sm text-[oklch(0.68_0.02_260)] mt-1">
            Rastreie suas atividades diárias
          </p>
        </motion.div>

        {/* Week Selector */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6"
        >
          <div className="flex gap-2 overflow-x-auto pb-2">
            {Array.from({ length: 16 }, (_, i) => i + 1).map((week) => (
              <button
                key={week}
                onClick={() => setSelectedWeek(week)}
                className={`px-4 py-2 rounded-lg font-semibold text-sm whitespace-nowrap transition-all ${
                  selectedWeek === week
                    ? "bg-[oklch(0.72_0.19_45)] text-[oklch(0.12_0.01_260)]"
                    : "bg-[oklch(0.18_0.01_260)] text-[oklch(0.68_0.02_260)] border border-[oklch(0.28_0.02_260)]"
                }`}
              >
                Semana {week}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Activities by Day */}
        <div className="space-y-6">
          {Array.from({ length: 7 }, (_, i) => i + 1).map((day) => {
            const dayActivities = activitiesForWeek.filter(a => a.day === day);
            const completedCount = dayActivities.filter(a => isActivityComplete(a.id)).length;

            return (
              <motion.div
                key={day}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: day * 0.05 }}
              >
                <div className="mb-3">
                  <div className="flex items-center justify-between">
                    <h2 className="font-display text-xl font-bold text-[oklch(0.95_0.02_80)]">
                      Dia {day}
                    </h2>
                    <span className="text-xs text-[oklch(0.68_0.02_260)]">
                      {completedCount}/{dayActivities.length}
                    </span>
                  </div>
                  {dayActivities.length > 0 && (
                    <div className="h-1 bg-[oklch(0.20_0.01_260)] rounded-full mt-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${dayActivities.length > 0 ? (completedCount / dayActivities.length) * 100 : 0}%` }}
                        transition={{ duration: 0.5 }}
                        className="h-full bg-gradient-to-r from-[oklch(0.72_0.19_45)] to-[oklch(0.80_0.14_80)]"
                      />
                    </div>
                  )}
                </div>

                {dayActivities.length > 0 ? (
                  <div className="space-y-3">
                    {dayActivities.map((activity) => {
                      const isComplete = isActivityComplete(activity.id);
                      return (
                        <motion.div
                          key={activity.id}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                        >
                          <Card
                            className={`p-4 border cursor-pointer transition-all ${
                              isComplete
                                ? "bg-[oklch(0.72_0.19_45/0.1)] border-[oklch(0.72_0.19_45/0.3)]"
                                : "bg-[oklch(0.18_0.01_260)] border-[oklch(0.28_0.02_260)] hover:border-[oklch(0.40_0.02_260)]"
                            }`}
                            onClick={() => handleToggleActivity(activity.id)}
                          >
                            <div className="flex items-start gap-4">
                              <button
                                className="mt-1 flex-shrink-0"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleToggleActivity(activity.id);
                                }}
                              >
                                {isComplete ? (
                                  <CheckCircle2 className="w-6 h-6 text-[oklch(0.72_0.19_45)]" />
                                ) : (
                                  <Circle className="w-6 h-6 text-[oklch(0.40_0.02_260)]" />
                                )}
                              </button>

                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                  {getActivityIcon(activity.type)}
                                  <span className="text-xs font-semibold text-[oklch(0.72_0.19_45)] uppercase">
                                    {getActivityLabel(activity.type)}
                                  </span>
                                </div>
                                <h3 className={`font-semibold ${isComplete ? "line-through text-[oklch(0.60_0.02_260)]" : "text-[oklch(0.95_0.02_80)]"}`}>
                                  {activity.title}
                                </h3>
                                {activity.description && (
                                  <p className="text-sm text-[oklch(0.68_0.02_260)] mt-1">
                                    {activity.description}
                                  </p>
                                )}
                                {activity.content && activity.type === "video" && (
                                  <a
                                    href={activity.content}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 mt-2 text-xs text-[oklch(0.80_0.14_80)] hover:text-[oklch(0.90_0.14_80)]"
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    Assistir <ExternalLink className="w-3 h-3" />
                                  </a>
                                )}
                              </div>
                            </div>
                          </Card>
                        </motion.div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-center py-4 text-[oklch(0.68_0.02_260)] text-sm">
                    Nenhuma atividade para este dia
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
