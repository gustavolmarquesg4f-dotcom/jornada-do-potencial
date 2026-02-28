// DESIGN: Dark Forge — Challenges Screen
// Shows active challenges and leaderboard
import { motion } from "framer-motion";
import { useApp } from "@/contexts/AppContext";
import { Flame, Users } from "lucide-react";

export default function Challenges() {
  const { user } = useApp();

  return (
    <div className="min-h-screen pb-24">
      {/* Header */}
      <div className="pt-6 pb-4 px-4">
        <h1 className="font-display text-2xl font-bold uppercase tracking-wide text-[oklch(0.82_0.16_55)]">
          Desafios Ativos
        </h1>
        <p className="text-sm text-[oklch(0.50_0.02_260)]">Compita com seu grupo</p>
      </div>

      {/* Coming Soon */}
      <div className="px-4 flex flex-col items-center justify-center min-h-[60vh]">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="text-5xl mb-4">🔥</div>
          <h2 className="font-display text-xl font-bold uppercase text-[oklch(0.82_0.16_55)] mb-2">
            Em Breve
          </h2>
          <p className="text-[oklch(0.60_0.02_260)] mb-4">
            Os desafios em grupo e leaderboard estarão disponíveis em breve!
          </p>
          <p className="text-sm text-[oklch(0.50_0.02_260)]">
            Continue completando suas missões diárias para se preparar.
          </p>
        </motion.div>
      </div>

      {/* Teaser */}
      <div className="px-4 space-y-3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="forge-card rounded-xl p-4 opacity-60"
        >
          <div className="flex items-center gap-3 mb-2">
            <Flame className="w-5 h-5 text-[oklch(0.72_0.19_45)]" />
            <h3 className="font-display font-semibold uppercase text-sm text-[oklch(0.82_0.16_55)]">
              Desafios Semanais
            </h3>
          </div>
          <p className="text-xs text-[oklch(0.50_0.02_260)]">
            Compete com outros membros do grupo para ganhar pontos extras
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="forge-card rounded-xl p-4 opacity-60"
        >
          <div className="flex items-center gap-3 mb-2">
            <Users className="w-5 h-5 text-[oklch(0.80_0.14_80)]" />
            <h3 className="font-display font-semibold uppercase text-sm text-[oklch(0.82_0.16_55)]">
              Leaderboard
            </h3>
          </div>
          <p className="text-xs text-[oklch(0.50_0.02_260)]">
            Veja o ranking dos guerreiros mais consistentes
          </p>
        </motion.div>
      </div>
    </div>
  );
}
