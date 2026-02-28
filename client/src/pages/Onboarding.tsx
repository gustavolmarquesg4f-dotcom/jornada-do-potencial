// DESIGN: Dark Forge — Onboarding flow
// Oswald display font, ember accents, dark immersive background
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useApp } from "@/contexts/AppContext";
import { IMAGES } from "@/lib/data";
import EmberParticles from "@/components/EmberParticles";
import { Shield, Sword, Heart, User } from "lucide-react";

export default function Onboarding() {
  const { setUserName, setUserStatus, finishOnboarding, user } = useApp();
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");

  const handleNameSubmit = () => {
    if (name.trim().length < 2) return;
    setUserName(name.trim());
    setStep(1);
  };

  const handleStatusSelect = (status: "casado" | "solteiro") => {
    setUserStatus(status);
    setStep(2);
  };

  const handleStart = () => {
    finishOnboarding();
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center px-4">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.hero}
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.10_0.01_260)] via-[oklch(0.10_0.01_260/0.85)] to-[oklch(0.10_0.01_260/0.7)]" />
      </div>

      <EmberParticles count={15} />

      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div
            key="step0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 w-full max-w-sm text-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-8"
            >
              <img
                src={IMAGES.shield}
                alt="Escudo"
                className="w-28 h-28 mx-auto rounded-2xl glow-ember"
              />
            </motion.div>

            <h1 className="font-display text-3xl font-bold tracking-wide uppercase text-[oklch(0.82_0.16_55)] mb-2">
              Jornada do Potencial
            </h1>
            <p className="text-[oklch(0.60_0.02_260)] text-sm mb-8">
              Forjando caráter, um dia de cada vez
            </p>

            <div className="space-y-4">
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[oklch(0.50_0.02_260)]" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleNameSubmit()}
                  placeholder="Seu nome, guerreiro"
                  className="w-full bg-[oklch(0.16_0.01_260)] border border-[oklch(0.28_0.02_260)] rounded-xl py-4 pl-12 pr-4 text-[oklch(0.92_0.01_80)] placeholder:text-[oklch(0.40_0.02_260)] focus:outline-none focus:border-[oklch(0.72_0.19_45)] focus:glow-ember transition-all"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleNameSubmit}
                disabled={name.trim().length < 2}
                className="w-full ember-gradient text-[oklch(0.10_0.01_260)] font-display font-bold text-lg uppercase tracking-wider py-4 rounded-xl disabled:opacity-40 transition-opacity"
              >
                Continuar
              </motion.button>
            </div>
          </motion.div>
        )}

        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 w-full max-w-sm text-center"
          >
            <h2 className="font-display text-2xl font-bold tracking-wide uppercase text-[oklch(0.82_0.16_55)] mb-2">
              Bem-vindo, {user.name}!
            </h2>
            <p className="text-[oklch(0.60_0.02_260)] text-sm mb-8">
              Escolha sua trilha de desafios semanais
            </p>

            <div className="space-y-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleStatusSelect("casado")}
                className="w-full forge-card rounded-xl p-5 flex items-center gap-4 text-left hover:border-[oklch(0.72_0.19_45)] transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-[oklch(0.72_0.19_45/0.15)] flex items-center justify-center shrink-0">
                  <Heart className="w-7 h-7 text-[oklch(0.72_0.19_45)]" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold uppercase text-[oklch(0.92_0.01_80)]">
                    Trilha da Aliança
                  </h3>
                  <p className="text-[oklch(0.50_0.02_260)] text-sm">
                    Casado — Desafios com esposa e filhos
                  </p>
                </div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleStatusSelect("solteiro")}
                className="w-full forge-card rounded-xl p-5 flex items-center gap-4 text-left hover:border-[oklch(0.72_0.19_45)] transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-[oklch(0.80_0.14_80/0.15)] flex items-center justify-center shrink-0">
                  <Sword className="w-7 h-7 text-[oklch(0.80_0.14_80)]" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold uppercase text-[oklch(0.92_0.01_80)]">
                    Trilha do Desbravador
                  </h3>
                  <p className="text-[oklch(0.50_0.02_260)] text-sm">
                    Solteiro — Desafios pessoais de superação
                  </p>
                </div>
              </motion.button>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 w-full max-w-sm text-center"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="mb-6"
            >
              <img
                src={IMAGES.sword}
                alt="Espada"
                className="w-40 h-56 mx-auto object-cover rounded-2xl glow-ember"
              />
            </motion.div>

            <h2 className="font-display text-2xl font-bold tracking-wide uppercase text-[oklch(0.82_0.16_55)] mb-3">
              A Forja Está Acesa
            </h2>
            <p className="text-[oklch(0.60_0.02_260)] text-sm mb-2 leading-relaxed">
              São 16 semanas de jornada, 7 dias por semana.
            </p>
            <p className="text-[oklch(0.60_0.02_260)] text-sm mb-2 leading-relaxed">
              Cada dia leva apenas <span className="text-[oklch(0.72_0.19_45)] font-semibold">10 minutos</span>.
            </p>
            <p className="text-[oklch(0.60_0.02_260)] text-sm mb-8 leading-relaxed">
              Seu caráter será forjado no fogo da Palavra de Deus.
            </p>

            <div className="flex gap-3 mb-6">
              <div className="flex-1 forge-card rounded-xl p-3 text-center">
                <div className="text-2xl mb-1">🔥</div>
                <div className="text-xs text-[oklch(0.50_0.02_260)]">Pontos</div>
                <div className="font-display font-bold text-[oklch(0.82_0.16_55)]">PP</div>
              </div>
              <div className="flex-1 forge-card rounded-xl p-3 text-center">
                <div className="text-2xl mb-1">⚔️</div>
                <div className="text-xs text-[oklch(0.50_0.02_260)]">Níveis</div>
                <div className="font-display font-bold text-[oklch(0.82_0.16_55)]">5</div>
              </div>
              <div className="flex-1 forge-card rounded-xl p-3 text-center">
                <div className="text-2xl mb-1">🏆</div>
                <div className="text-xs text-[oklch(0.50_0.02_260)]">Medalhas</div>
                <div className="font-display font-bold text-[oklch(0.82_0.16_55)]">6</div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleStart}
              className="w-full ember-gradient text-[oklch(0.10_0.01_260)] font-display font-bold text-lg uppercase tracking-wider py-4 rounded-xl"
            >
              Iniciar Jornada
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
