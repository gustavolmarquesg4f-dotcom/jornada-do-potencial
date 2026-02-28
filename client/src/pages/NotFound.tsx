import { useLocation } from "wouter";
import { motion } from "framer-motion";

export default function NotFound() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div className="text-6xl mb-4">🔥</div>
        <h1 className="font-display text-3xl font-bold uppercase text-[oklch(0.82_0.16_55)] mb-2">
          Página Não Encontrada
        </h1>
        <p className="text-[oklch(0.60_0.02_260)] mb-6">
          Esta trilha não existe na forja. Volte ao caminho certo.
        </p>
        <button
          onClick={() => navigate("/")}
          className="ember-gradient px-6 py-3 rounded-xl font-display font-bold uppercase text-sm text-[oklch(0.10_0.01_260)]"
        >
          Voltar ao Painel
        </button>
      </motion.div>
    </div>
  );
}
