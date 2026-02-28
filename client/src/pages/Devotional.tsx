// DESIGN: Dark Forge — Daily Devotional Screen
// 3 sections: Wisdom, Challenge, Prayer — each ~3 min
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useApp } from "@/contexts/AppContext";
import { WEEK_THEMES, IMAGES } from "@/lib/data";
import { useLocation, useParams } from "wouter";
import { ArrowLeft, BookOpen, Target, HandHeart, Check, ChevronRight, Flame } from "lucide-react";
import EmberParticles from "@/components/EmberParticles";

const STEPS = [
  { id: 0, label: "Sabedoria", icon: BookOpen, color: "oklch(0.80 0.14 80)" },
  { id: 1, label: "Desafio", icon: Target, color: "oklch(0.72 0.19 45)" },
  { id: 2, label: "Oração", icon: HandHeart, color: "oklch(0.75 0.12 60)" },
];

export default function Devotional() {
  const params = useParams<{ week: string; day: string }>();
  const week = parseInt(params.week || "1");
  const day = parseInt(params.day || "1");
  const { completeDay, isDayCompleted } = useApp();
  const [, navigate] = useLocation();
  const [currentStep, setCurrentStep] = useState(0);
  const [completed, setCompleted] = useState(isDayCompleted(week, day));

  const theme = WEEK_THEMES.find(w => w.id === week);
  if (!theme) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center">
          <p className="text-[oklch(0.60_0.02_260)] mb-4">Este conteúdo estará disponível em breve.</p>
          <button onClick={() => navigate("/")} className="ember-gradient px-6 py-3 rounded-xl font-display font-bold uppercase text-sm text-[oklch(0.10_0.01_260)]">
            Voltar
          </button>
        </div>
      </div>
    );
  }

  const dayContent = theme.days[day - 1];
  if (!dayContent) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center">
          <p className="text-[oklch(0.60_0.02_260)] mb-4">Dia não encontrado.</p>
          <button onClick={() => navigate("/")} className="ember-gradient px-6 py-3 rounded-xl font-display font-bold uppercase text-sm text-[oklch(0.10_0.01_260)]">
            Voltar
          </button>
        </div>
      </div>
    );
  }

  const handleComplete = () => {
    completeDay(week, day);
    setCompleted(true);
  };

  const handleNext = () => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const stepContent = [
    { title: "Pílula de Sabedoria", subtitle: "~3 minutos de leitura", content: dayContent.wisdom, icon: BookOpen },
    { title: "Desafio de Potencial", subtitle: "~5 minutos de ação", content: dayContent.challenge, icon: Target },
    { title: "Oração Focada", subtitle: "~2 minutos de conexão", content: dayContent.prayer, icon: HandHeart },
  ];

  return (
    <div className="min-h-screen pb-8 relative">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.dailyBg} alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.10_0.01_260/0.5)] to-[oklch(0.10_0.01_260)]" />
        </div>

        <div className="relative z-10 pt-4 pb-6 px-4">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-[oklch(0.60_0.02_260)] mb-4 hover:text-[oklch(0.82_0.16_55)] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm">Voltar</span>
          </button>

          <div className="flex items-center gap-2 mb-1">
            <span className="text-lg">{theme.icon}</span>
            <span className="text-[10px] uppercase tracking-widest text-[oklch(0.72_0.19_45)] font-semibold">
              Semana {week} — Dia {day}
            </span>
          </div>
          <h1 className="font-display text-xl font-bold uppercase tracking-wide text-[oklch(0.92_0.01_80)] mb-1">
            {dayContent.title}
          </h1>
          <p className="text-xs text-[oklch(0.50_0.02_260)]">{theme.title}</p>
        </div>
      </div>

      {/* Step Indicator */}
      <div className="px-4 py-4">
        <div className="flex items-center gap-2">
          {STEPS.map((step, i) => (
            <div key={step.id} className="flex items-center flex-1">
              <button
                onClick={() => setCurrentStep(i)}
                className={`flex items-center gap-1.5 flex-1 py-2 px-3 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
                  i === currentStep
                    ? "bg-[oklch(0.72_0.19_45/0.15)] text-[oklch(0.82_0.16_55)] border border-[oklch(0.72_0.19_45/0.3)]"
                    : i < currentStep
                    ? "text-[oklch(0.72_0.19_45)] opacity-60"
                    : "text-[oklch(0.40_0.02_260)]"
                }`}
              >
                <step.icon className="w-3.5 h-3.5 shrink-0" />
                <span className="hidden sm:inline">{step.label}</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="forge-card rounded-xl p-5 mb-4">
              <div className="flex items-center gap-3 mb-4">
                {(() => {
                  const Icon = stepContent[currentStep].icon;
                  return <Icon className="w-5 h-5 text-[oklch(0.72_0.19_45)]" />;
                })()}
                <div>
                  <h2 className="font-display font-bold uppercase text-sm text-[oklch(0.82_0.16_55)]">
                    {stepContent[currentStep].title}
                  </h2>
                  <p className="text-[10px] text-[oklch(0.50_0.02_260)]">
                    {stepContent[currentStep].subtitle}
                  </p>
                </div>
              </div>

              <p className="text-[oklch(0.80_0.02_80)] leading-relaxed text-[15px]">
                {stepContent[currentStep].content}
              </p>

              {currentStep === 0 && theme.verse && (
                <div className="mt-4 p-4 bg-[oklch(0.12_0.01_260)] rounded-lg border-l-2 border-[oklch(0.72_0.19_45)]">
                  <p className="text-sm italic text-[oklch(0.70_0.02_80)] leading-relaxed">
                    "{theme.verse}"
                  </p>
                  <p className="text-xs text-[oklch(0.50_0.02_260)] mt-2 font-semibold">
                    {theme.verseRef}
                  </p>
                </div>
              )}
            </div>

            {/* Navigation */}
            <div className="flex gap-3">
              {currentStep > 0 && (
                <button
                  onClick={handlePrev}
                  className="flex-1 forge-card rounded-xl py-3.5 font-display font-semibold uppercase text-sm text-[oklch(0.60_0.02_260)] hover:text-[oklch(0.82_0.16_55)] transition-colors"
                >
                  Anterior
                </button>
              )}

              {currentStep < 2 ? (
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  onClick={handleNext}
                  className="flex-1 ember-gradient rounded-xl py-3.5 font-display font-bold uppercase text-sm text-[oklch(0.10_0.01_260)] flex items-center justify-center gap-2"
                >
                  Próximo
                  <ChevronRight className="w-4 h-4" />
                </motion.button>
              ) : !completed ? (
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={handleComplete}
                  className="flex-1 ember-gradient rounded-xl py-3.5 font-display font-bold uppercase text-sm text-[oklch(0.10_0.01_260)] flex items-center justify-center gap-2 glow-ember"
                >
                  <Flame className="w-4 h-4" />
                  Completar Missão
                </motion.button>
              ) : (
                <div className="flex-1 bg-[oklch(0.72_0.19_45/0.15)] border border-[oklch(0.72_0.19_45/0.3)] rounded-xl py-3.5 font-display font-bold uppercase text-sm text-[oklch(0.72_0.19_45)] flex items-center justify-center gap-2">
                  <Check className="w-4 h-4" />
                  Missão Completa!
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Completion celebration */}
        {completed && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-center"
          >
            <EmberParticles count={20} />
            <div className="text-4xl mb-3">⚒️</div>
            <h3 className="font-display text-lg font-bold uppercase text-[oklch(0.82_0.16_55)] mb-1">
              +15 Pontos de Potencial!
            </h3>
            <p className="text-sm text-[oklch(0.50_0.02_260)] mb-4">
              Mais um golpe na forja do seu caráter
            </p>
            <button
              onClick={() => navigate("/")}
              className="text-sm text-[oklch(0.72_0.19_45)] underline underline-offset-4"
            >
              Voltar ao painel
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
