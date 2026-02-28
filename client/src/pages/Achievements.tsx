// DESIGN: Dark Forge — Achievements Screen
// Display all badges and unlocked achievements
import { motion } from "framer-motion";
import { useApp } from "@/contexts/AppContext";
import { BADGES } from "@/lib/data";
import { Lock } from "lucide-react";

export default function Achievements() {
  const { user } = useApp();

  return (
    <div className="min-h-screen pb-24">
      {/* Header */}
      <div className="pt-6 pb-4 px-4">
        <h1 className="font-display text-2xl font-bold uppercase tracking-wide text-[oklch(0.82_0.16_55)]">
          Medalhas & Conquistas
        </h1>
        <p className="text-sm text-[oklch(0.50_0.02_260)]">
          {user.earnedBadges.length} de {BADGES.length} desbloqueadas
        </p>
      </div>

      {/* Progress Bar */}
      <div className="px-4 mb-6">
        <div className="h-2 bg-[oklch(0.20_0.01_260)] rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${(user.earnedBadges.length / BADGES.length) * 100}%` }}
            transition={{ duration: 1 }}
            className="h-full ember-gradient rounded-full"
          />
        </div>
      </div>

      {/* Badges Grid */}
      <div className="px-4 space-y-3">
        {BADGES.map((badge, index) => {
          const isEarned = user.earnedBadges.includes(badge.id);

          return (
            <motion.div
              key={badge.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`rounded-xl p-4 flex items-center gap-4 transition-all ${
                isEarned
                  ? "forge-card border-[oklch(0.72_0.19_45/0.3)] glow-ember"
                  : "forge-card opacity-50"
              }`}
            >
              <div className={`w-12 h-12 rounded-lg shrink-0 flex items-center justify-center text-2xl ${
                isEarned
                  ? "bg-[oklch(0.72_0.19_45/0.15)]"
                  : "bg-[oklch(0.14_0.01_260)]"
              }`}>
                {isEarned ? badge.icon : <Lock className="w-5 h-5 text-[oklch(0.35_0.02_260)]" />}
              </div>

              <div className="flex-1">
                <h3 className={`font-display font-semibold uppercase text-sm ${
                  isEarned ? "text-[oklch(0.82_0.16_55)]" : "text-[oklch(0.50_0.02_260)]"
                }`}>
                  {badge.name}
                </h3>
                <p className="text-xs text-[oklch(0.40_0.02_260)]">{badge.desc}</p>
              </div>

              {isEarned && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.05 + 0.2, type: "spring" }}
                  className="text-[oklch(0.72_0.19_45)] text-lg"
                >
                  ✓
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Motivational Message */}
      <div className="px-4 mt-8 text-center">
        <p className="text-sm italic text-[oklch(0.50_0.02_260)]">
          {user.earnedBadges.length === BADGES.length
            ? "🏆 Você desbloqueou todas as medalhas! Parabéns, Mestre!"
            : `Você está a ${BADGES.length - user.earnedBadges.length} medalhas de completar a coleção!`}
        </p>
      </div>
    </div>
  );
}
