// DESIGN: Dark Forge — Week Detail Screen
// Shows 7 days of the week + weekly challenge
import { motion } from "framer-motion";
import { useApp } from "@/contexts/AppContext";
import { WEEK_THEMES } from "@/lib/data";
import { useLocation, useParams } from "wouter";
import { ArrowLeft, Check, Lock, Flame, Shield, Sword, ChevronRight } from "lucide-react";

export default function WeekDetail() {
  const params = useParams<{ week: string }>();
  const weekId = parseInt(params.week || "1");
  const { user, isDayCompleted, isWeeklyChallengeCompleted, completeWeeklyChallenge } = useApp();
  const [, navigate] = useLocation();

  const theme = WEEK_THEMES.find(w => w.id === weekId);
  if (!theme) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center">
          <p className="text-[oklch(0.60_0.02_260)] mb-4">Este conteúdo estará disponível em breve.</p>
          <button onClick={() => navigate("/jornada")} className="ember-gradient px-6 py-3 rounded-xl font-display font-bold uppercase text-sm text-[oklch(0.10_0.01_260)]">
            Voltar ao Mapa
          </button>
        </div>
      </div>
    );
  }

  const allDaysComplete = theme.days.every((_, i) => isDayCompleted(weekId, i + 1));
  const weeklyChallengeComplete = isWeeklyChallengeCompleted(weekId);
  const weeklyChallenge = user.status === "casado"
    ? theme.weeklyChallengeCasado
    : theme.weeklyChallengeSolteiro;

  return (
    <div className="min-h-screen pb-24">
      {/* Header */}
      <div className="pt-4 pb-6 px-4">
        <button
          onClick={() => navigate("/jornada")}
          className="flex items-center gap-2 text-[oklch(0.60_0.02_260)] mb-4 hover:text-[oklch(0.82_0.16_55)] transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm">Mapa da Jornada</span>
        </button>

        <div className="flex items-center gap-2 mb-1">
          <span className="text-xl">{theme.icon}</span>
          <span className="text-[10px] uppercase tracking-widest text-[oklch(0.72_0.19_45)] font-semibold">
            Semana {weekId}
          </span>
        </div>
        <h1 className="font-display text-xl font-bold uppercase tracking-wide text-[oklch(0.92_0.01_80)] mb-1">
          {theme.title}
        </h1>
        <p className="text-sm text-[oklch(0.50_0.02_260)]">{theme.subtitle}</p>

        {theme.verse && (
          <div className="mt-4 p-4 forge-card rounded-xl border-l-2 border-[oklch(0.72_0.19_45)]">
            <p className="text-sm italic text-[oklch(0.70_0.02_80)] leading-relaxed">
              "{theme.verse}"
            </p>
            <p className="text-xs text-[oklch(0.50_0.02_260)] mt-2 font-semibold">
              {theme.verseRef}
            </p>
          </div>
        )}
      </div>

      {/* Days List */}
      <div className="px-4 space-y-2">
        <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-[oklch(0.50_0.02_260)] mb-3">
          Missões Diárias
        </h2>

        {theme.days.map((dayContent, index) => {
          const dayNum = index + 1;
          const isCompleted = isDayCompleted(weekId, dayNum);
          const isAccessible = weekId <= user.currentWeek;

          return (
            <motion.button
              key={dayNum}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => isAccessible && navigate(`/devocional/${weekId}/${dayNum}`)}
              disabled={!isAccessible}
              className={`w-full text-left flex items-center gap-4 rounded-xl p-4 transition-all ${
                isCompleted
                  ? "bg-[oklch(0.72_0.19_45/0.08)] border border-[oklch(0.72_0.19_45/0.2)]"
                  : "forge-card hover:border-[oklch(0.72_0.19_45/0.3)]"
              } ${!isAccessible ? "opacity-40" : ""}`}
            >
              <div className={`w-10 h-10 rounded-lg shrink-0 flex items-center justify-center ${
                isCompleted
                  ? "ember-gradient"
                  : "bg-[oklch(0.20_0.01_260)]"
              }`}>
                {isCompleted ? (
                  <Check className="w-5 h-5 text-[oklch(0.10_0.01_260)]" />
                ) : (
                  <span className="font-display font-bold text-sm text-[oklch(0.50_0.02_260)]">{dayNum}</span>
                )}
              </div>

              <div className="flex-1">
                <h3 className={`font-display font-semibold uppercase text-sm ${
                  isCompleted ? "text-[oklch(0.72_0.19_45)]" : "text-[oklch(0.80_0.02_80)]"
                }`}>
                  {dayContent.title}
                </h3>
                <p className="text-xs text-[oklch(0.50_0.02_260)]">
                  Dia {dayNum} — ~10 min
                </p>
              </div>

              <ChevronRight className="w-5 h-5 text-[oklch(0.35_0.02_260)] shrink-0" />
            </motion.button>
          );
        })}
      </div>

      {/* Weekly Challenge */}
      <div className="px-4 mt-6">
        <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-[oklch(0.50_0.02_260)] mb-3 flex items-center gap-2">
          {user.status === "casado" ? (
            <><Shield className="w-4 h-4" /> Desafio da Aliança</>
          ) : (
            <><Sword className="w-4 h-4" /> Desafio do Desbravador</>
          )}
        </h2>

        <div className={`rounded-xl p-5 ${
          weeklyChallengeComplete
            ? "bg-[oklch(0.72_0.19_45/0.08)] border border-[oklch(0.72_0.19_45/0.2)]"
            : allDaysComplete
            ? "forge-card glow-ember border-[oklch(0.72_0.19_45/0.3)]"
            : "forge-card opacity-60"
        }`}>
          <p className="text-sm text-[oklch(0.80_0.02_80)] leading-relaxed mb-4">
            {weeklyChallenge}
          </p>

          {weeklyChallengeComplete ? (
            <div className="flex items-center gap-2 text-[oklch(0.72_0.19_45)]">
              <Check className="w-4 h-4" />
              <span className="font-display font-semibold uppercase text-sm">Desafio Completo! +50 PP</span>
            </div>
          ) : allDaysComplete ? (
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => completeWeeklyChallenge(weekId)}
              className="w-full ember-gradient rounded-xl py-3 font-display font-bold uppercase text-sm text-[oklch(0.10_0.01_260)] flex items-center justify-center gap-2"
            >
              <Flame className="w-4 h-4" />
              Marcar como Completo
            </motion.button>
          ) : (
            <p className="text-xs text-[oklch(0.40_0.02_260)] italic">
              Complete todos os 7 dias para desbloquear o desafio semanal
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
