// DESIGN: Dark Forge — User Profile Screen
import { motion } from "framer-motion";
import { useApp } from "@/contexts/AppContext";
import { LEVELS } from "@/lib/data";
import { LogOut, RotateCcw, Flame, Zap, Trophy, Calendar } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export default function Profile() {
  const { user, getCurrentLevel, resetProgress } = useApp();
  const level = getCurrentLevel();

  const handleReset = () => {
    if (confirm("Tem certeza que deseja resetar todo o progresso? Esta ação não pode ser desfeita.")) {
      resetProgress();
      window.location.reload();
    }
  };

  return (
    <div className="min-h-screen pb-24">
      {/* Header */}
      <div className="pt-6 pb-4 px-4">
        <h1 className="font-display text-2xl font-bold uppercase tracking-wide text-[oklch(0.82_0.16_55)]">
          Seu Perfil
        </h1>
        <p className="text-sm text-[oklch(0.50_0.02_260)]">Guerreiro da Forja</p>
      </div>

      {/* Profile Card */}
      <div className="px-4 mb-6">
        <div className="forge-card rounded-xl p-6 text-center">
          <div className="w-20 h-20 rounded-full bg-[oklch(0.72_0.19_45/0.15)] flex items-center justify-center mx-auto mb-4 text-3xl">
            {level.icon}
          </div>
          <h2 className="font-display text-2xl font-bold uppercase text-[oklch(0.92_0.01_80)] mb-1">
            {user.name}
          </h2>
          <p className="text-sm text-[oklch(0.82_0.16_55)] mb-4">
            {level.name}
          </p>
          <div className="text-xs text-[oklch(0.50_0.02_260)] space-y-1">
            <p>Status: <span className="capitalize text-[oklch(0.80_0.02_80)]">{user.status === "casado" ? "Casado" : "Solteiro"}</span></p>
            <p>Membro desde: <span className="text-[oklch(0.80_0.02_80)]">Fevereiro 2026</span></p>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="px-4 mb-6">
        <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-[oklch(0.50_0.02_260)] mb-3">
          Estatísticas
        </h3>
        <div className="grid grid-cols-2 gap-3">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="forge-card rounded-xl p-4 text-center"
          >
            <Flame className="w-5 h-5 mx-auto mb-2 text-[oklch(0.72_0.19_45)]" />
            <div className="font-display font-bold text-lg text-[oklch(0.92_0.01_80)]">{user.streak}</div>
            <div className="text-[10px] text-[oklch(0.50_0.02_260)] uppercase">Sequência</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="forge-card rounded-xl p-4 text-center"
          >
            <Zap className="w-5 h-5 mx-auto mb-2 text-[oklch(0.80_0.14_80)]" />
            <div className="font-display font-bold text-lg text-[oklch(0.92_0.01_80)]">{user.totalPP}</div>
            <div className="text-[10px] text-[oklch(0.50_0.02_260)] uppercase">Pontos</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="forge-card rounded-xl p-4 text-center"
          >
            <Trophy className="w-5 h-5 mx-auto mb-2 text-[oklch(0.72_0.19_45)]" />
            <div className="font-display font-bold text-lg text-[oklch(0.92_0.01_80)]">{user.earnedBadges.length}</div>
            <div className="text-[10px] text-[oklch(0.50_0.02_260)] uppercase">Medalhas</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="forge-card rounded-xl p-4 text-center"
          >
            <Calendar className="w-5 h-5 mx-auto mb-2 text-[oklch(0.80_0.14_80)]" />
            <div className="font-display font-bold text-lg text-[oklch(0.92_0.01_80)]">{user.completedDays.length}</div>
            <div className="text-[10px] text-[oklch(0.50_0.02_260)] uppercase">Dias</div>
          </motion.div>
        </div>
      </div>

      {/* Level Progress */}
      <div className="px-4 mb-6">
        <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-[oklch(0.50_0.02_260)] mb-3">
          Progresso de Nível
        </h3>
        <div className="forge-card rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-[oklch(0.80_0.02_80)]">{level.name}</span>
            <span className="text-xs text-[oklch(0.50_0.02_260)]">{Math.round(level.progress)}%</span>
          </div>
          <div className="h-2 bg-[oklch(0.20_0.01_260)] rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${level.progress}%` }}
              transition={{ duration: 1 }}
              className="h-full ember-gradient rounded-full"
            />
          </div>
          {level.nextLevel && (
            <p className="text-xs text-[oklch(0.50_0.02_260)] mt-2">
              Próximo: <span className="text-[oklch(0.80_0.02_80)]">{level.nextLevel}</span>
            </p>
          )}
        </div>
      </div>

      {/* All Levels Reference */}
      <div className="px-4 mb-6">
        <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-[oklch(0.50_0.02_260)] mb-3">
          Todos os Níveis
        </h3>
        <div className="space-y-2">
          {LEVELS.map((lv, i) => (
            <div
              key={i}
              className={`rounded-lg p-3 flex items-center gap-3 ${
                lv.name === level.name
                  ? "bg-[oklch(0.72_0.19_45/0.15)] border border-[oklch(0.72_0.19_45/0.3)]"
                  : "bg-[oklch(0.14_0.01_260)]"
              }`}
            >
              <span className="text-lg">{lv.icon}</span>
              <div className="flex-1">
                <p className="text-xs font-semibold text-[oklch(0.80_0.02_80)]">{lv.name}</p>
                <p className="text-[10px] text-[oklch(0.50_0.02_260)]">{lv.minPP}+ PP</p>
              </div>
              {lv.name === level.name && (
                <span className="text-xs text-[oklch(0.72_0.19_45)]">●</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Danger Zone */}
      <div className="px-4">
        <button
          onClick={handleReset}
          className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-[oklch(0.58_0.24_27/0.3)] text-[oklch(0.58_0.24_27)] hover:bg-[oklch(0.58_0.24_27/0.1)] transition-colors font-semibold text-sm"
        >
          <RotateCcw className="w-4 h-4" />
          Resetar Progresso
        </button>
      </div>
    </div>
  );
}
