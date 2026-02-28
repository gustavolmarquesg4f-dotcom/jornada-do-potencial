// DESIGN: Dark Forge — Main Dashboard
// Shows daily progress, streak, level, and quick access to today's mission
import { motion } from "framer-motion";
import { useApp } from "@/contexts/AppContext";
import { WEEK_THEMES, REMAINING_THEMES, IMAGES } from "@/lib/data";
import { Flame, Zap, Trophy, ChevronRight, BookOpen } from "lucide-react";
import { useLocation } from "wouter";
import EmberParticles from "@/components/EmberParticles";
import { Progress } from "@/components/ui/progress";

export default function Dashboard() {
  const { user, getCurrentLevel, isDayCompleted } = useApp();
  const [, navigate] = useLocation();
  const level = getCurrentLevel();

  const currentTheme = WEEK_THEMES.find(w => w.id === user.currentWeek)
    || { ...REMAINING_THEMES.find(r => r.id === user.currentWeek)!, verse: "", verseRef: "" };

  const completedToday = isDayCompleted(user.currentWeek, user.currentDay);
  const totalCompleted = user.completedDays.length;
  const totalDays = 16 * 7;
  const overallProgress = (totalCompleted / totalDays) * 100;

  return (
    <div className="min-h-screen pb-24 relative">
      {/* Hero Section */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={IMAGES.hero}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.10_0.01_260)] via-[oklch(0.10_0.01_260/0.6)] to-transparent" />
        <EmberParticles count={8} />

        <div className="absolute bottom-0 left-0 right-0 p-5">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-[oklch(0.60_0.02_260)] text-sm">Bem-vindo de volta,</p>
            <h1 className="font-display text-2xl font-bold uppercase tracking-wide text-[oklch(0.92_0.01_80)]">
              {user.name}
            </h1>
          </motion.div>
        </div>
      </div>

      <div className="px-4 -mt-2 relative z-10 space-y-5">
        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-3 gap-3"
        >
          <div className="forge-card rounded-xl p-3 text-center">
            <Flame className="w-5 h-5 mx-auto mb-1 text-[oklch(0.72_0.19_45)]" />
            <div className="font-display font-bold text-lg text-[oklch(0.92_0.01_80)]">{user.streak}</div>
            <div className="text-[10px] text-[oklch(0.50_0.02_260)] uppercase tracking-wider">Sequência</div>
          </div>
          <div className="forge-card rounded-xl p-3 text-center">
            <Zap className="w-5 h-5 mx-auto mb-1 text-[oklch(0.80_0.14_80)]" />
            <div className="font-display font-bold text-lg text-[oklch(0.92_0.01_80)]">{user.totalPP}</div>
            <div className="text-[10px] text-[oklch(0.50_0.02_260)] uppercase tracking-wider">Pontos</div>
          </div>
          <div className="forge-card rounded-xl p-3 text-center">
            <Trophy className="w-5 h-5 mx-auto mb-1 text-[oklch(0.72_0.19_45)]" />
            <div className="font-display font-bold text-lg text-[oklch(0.92_0.01_80)]">{user.earnedBadges.length}</div>
            <div className="text-[10px] text-[oklch(0.50_0.02_260)] uppercase tracking-wider">Medalhas</div>
          </div>
        </motion.div>

        {/* Level Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="forge-card rounded-xl p-4"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{level.icon}</span>
              <div>
                <h3 className="font-display font-semibold uppercase text-sm text-[oklch(0.82_0.16_55)]">
                  {level.name}
                </h3>
                {level.nextLevel && (
                  <p className="text-[10px] text-[oklch(0.50_0.02_260)]">
                    Próximo: {level.nextLevel}
                  </p>
                )}
              </div>
            </div>
            <span className="text-xs text-[oklch(0.50_0.02_260)]">{Math.round(level.progress)}%</span>
          </div>
          <div className="h-2 bg-[oklch(0.20_0.01_260)] rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${level.progress}%` }}
              transition={{ duration: 1, delay: 0.6 }}
              className="h-full ember-gradient rounded-full"
            />
          </div>
        </motion.div>

        {/* Today's Mission Card */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          onClick={() => navigate(`/devocional/${user.currentWeek}/${user.currentDay}`)}
          className="w-full text-left"
        >
          <div className={`rounded-xl p-5 border transition-all ${
            completedToday
              ? "bg-[oklch(0.72_0.19_45/0.1)] border-[oklch(0.72_0.19_45/0.3)]"
              : "forge-card glow-ember"
          }`}>
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="w-4 h-4 text-[oklch(0.72_0.19_45)]" />
                  <span className="text-[10px] uppercase tracking-widest text-[oklch(0.72_0.19_45)] font-semibold">
                    {completedToday ? "Missão Completa" : "Missão de Hoje"}
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold uppercase text-[oklch(0.92_0.01_80)] mb-1">
                  Semana {user.currentWeek} — Dia {user.currentDay}
                </h3>
                <p className="text-sm text-[oklch(0.60_0.02_260)]">
                  {currentTheme?.title || `Tema ${user.currentWeek}`}
                </p>
              </div>
              <ChevronRight className="w-6 h-6 text-[oklch(0.50_0.02_260)]" />
            </div>
            {!completedToday && (
              <div className="mt-3 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[oklch(0.72_0.19_45)] animate-pulse" />
                <span className="text-xs text-[oklch(0.72_0.19_45)]">~10 minutos</span>
              </div>
            )}
          </div>
        </motion.button>

        {/* Overall Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="forge-card rounded-xl p-4"
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-display font-semibold uppercase text-sm text-[oklch(0.82_0.16_55)]">
              Progresso Geral
            </h3>
            <span className="text-xs text-[oklch(0.50_0.02_260)]">
              {totalCompleted}/{totalDays} dias
            </span>
          </div>
          <div className="h-2 bg-[oklch(0.20_0.01_260)] rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${overallProgress}%` }}
              transition={{ duration: 1.2, delay: 0.8 }}
              className="h-full rounded-full"
              style={{ background: "linear-gradient(90deg, oklch(0.72 0.19 45), oklch(0.80 0.14 80))" }}
            />
          </div>
          <p className="text-xs text-[oklch(0.50_0.02_260)] mt-2">
            Semana {user.currentWeek} de 16
          </p>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-center py-4"
        >
          <p className="text-sm italic text-[oklch(0.50_0.02_260)] leading-relaxed">
            "Os sonhos são a substância de toda grande conquista"
          </p>
          <p className="text-xs text-[oklch(0.40_0.02_260)] mt-1">— Edwin Louis Cole</p>
        </motion.div>
      </div>
    </div>
  );
}
