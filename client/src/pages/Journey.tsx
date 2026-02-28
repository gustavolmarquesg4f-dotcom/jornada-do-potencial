// DESIGN: Dark Forge — Journey Map
// Vertical path showing all 16 weeks with progress
import { motion } from "framer-motion";
import { useApp } from "@/contexts/AppContext";
import { WEEK_THEMES, REMAINING_THEMES, IMAGES } from "@/lib/data";
import { useLocation } from "wouter";
import { Lock, Check, ChevronRight, Flame } from "lucide-react";

const ALL_THEMES = [
  ...WEEK_THEMES.map(w => ({ id: w.id, title: w.title, icon: w.icon, subtitle: w.subtitle })),
  ...REMAINING_THEMES,
];

export default function Journey() {
  const { user, isDayCompleted } = useApp();
  const [, navigate] = useLocation();

  const getWeekProgress = (weekId: number) => {
    let completed = 0;
    for (let d = 1; d <= 7; d++) {
      if (isDayCompleted(weekId, d)) completed++;
    }
    return completed;
  };

  return (
    <div className="min-h-screen pb-24">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.tree} alt="" className="w-full h-48 object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.10_0.01_260/0.3)] to-[oklch(0.10_0.01_260)]" />
        </div>
        <div className="relative z-10 pt-6 pb-4 px-4">
          <h1 className="font-display text-2xl font-bold uppercase tracking-wide text-[oklch(0.82_0.16_55)]">
            Mapa da Jornada
          </h1>
          <p className="text-sm text-[oklch(0.50_0.02_260)]">16 semanas de transformação</p>
        </div>
      </div>

      {/* Journey Path */}
      <div className="px-4 relative">
        {/* Vertical line */}
        <div className="absolute left-[2.25rem] top-0 bottom-0 w-0.5 bg-[oklch(0.20_0.01_260)]" />

        <div className="space-y-3">
          {ALL_THEMES.map((theme, index) => {
            const isUnlocked = theme.id <= user.currentWeek;
            const isCurrent = theme.id === user.currentWeek;
            const progress = getWeekProgress(theme.id);
            const isComplete = progress === 7;

            return (
              <motion.div
                key={theme.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <button
                  onClick={() => isUnlocked ? navigate(`/semana/${theme.id}`) : null}
                  disabled={!isUnlocked}
                  className={`w-full text-left flex items-start gap-4 relative ${!isUnlocked ? "opacity-40" : ""}`}
                >
                  {/* Node */}
                  <div className={`w-9 h-9 rounded-full shrink-0 flex items-center justify-center z-10 ${
                    isComplete
                      ? "ember-gradient glow-ember"
                      : isCurrent
                      ? "bg-[oklch(0.72_0.19_45/0.2)] border-2 border-[oklch(0.72_0.19_45)]"
                      : isUnlocked
                      ? "bg-[oklch(0.20_0.01_260)] border border-[oklch(0.30_0.02_260)]"
                      : "bg-[oklch(0.14_0.01_260)] border border-[oklch(0.22_0.02_260)]"
                  }`}>
                    {isComplete ? (
                      <Check className="w-4 h-4 text-[oklch(0.10_0.01_260)]" />
                    ) : isCurrent ? (
                      <Flame className="w-4 h-4 text-[oklch(0.72_0.19_45)]" />
                    ) : !isUnlocked ? (
                      <Lock className="w-3.5 h-3.5 text-[oklch(0.35_0.02_260)]" />
                    ) : (
                      <span className="text-xs font-bold text-[oklch(0.50_0.02_260)]">{theme.id}</span>
                    )}
                  </div>

                  {/* Content */}
                  <div className={`flex-1 rounded-xl p-4 transition-all ${
                    isCurrent
                      ? "forge-card border-[oklch(0.72_0.19_45/0.3)] glow-ember"
                      : isComplete
                      ? "bg-[oklch(0.72_0.19_45/0.08)] border border-[oklch(0.72_0.19_45/0.2)]"
                      : "forge-card"
                  }`}>
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-sm">{theme.icon}</span>
                          <span className="text-[10px] uppercase tracking-widest text-[oklch(0.50_0.02_260)]">
                            Semana {theme.id}
                          </span>
                        </div>
                        <h3 className={`font-display font-semibold uppercase text-sm ${
                          isCurrent ? "text-[oklch(0.82_0.16_55)]" : "text-[oklch(0.80_0.02_80)]"
                        }`}>
                          {theme.title}
                        </h3>
                        {isUnlocked && (
                          <div className="flex items-center gap-2 mt-2">
                            <div className="flex-1 h-1.5 bg-[oklch(0.20_0.01_260)] rounded-full overflow-hidden">
                              <div
                                className="h-full ember-gradient rounded-full transition-all"
                                style={{ width: `${(progress / 7) * 100}%` }}
                              />
                            </div>
                            <span className="text-[10px] text-[oklch(0.50_0.02_260)]">{progress}/7</span>
                          </div>
                        )}
                      </div>
                      {isUnlocked && (
                        <ChevronRight className="w-5 h-5 text-[oklch(0.40_0.02_260)] shrink-0 ml-2" />
                      )}
                    </div>
                  </div>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
