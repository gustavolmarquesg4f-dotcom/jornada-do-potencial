// DESIGN: Dark Forge — Bottom Navigation
// Mobile-first navigation with 5 main sections
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Home, Map, Trophy, User, Flame, CheckSquare } from "lucide-react";

const NAV_ITEMS = [
  { path: "/", icon: Home, label: "Painel", id: "home" },
  { path: "/jornada", icon: Map, label: "Jornada", id: "journey" },
  { path: "/atividades", icon: CheckSquare, label: "Atividades", id: "activities" },
  { path: "/desafios", icon: Flame, label: "Desafios", id: "challenges" },
  { path: "/medalhas", icon: Trophy, label: "Medalhas", id: "achievements" },
];

export default function BottomNav() {
  const [location, navigate] = useLocation();

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-0 left-0 right-0 z-50 bg-[oklch(0.12_0.01_260)] border-t border-[oklch(0.24_0.02_260)] backdrop-blur-md"
    >
      <div className="flex items-center justify-around max-w-2xl mx-auto">
        {NAV_ITEMS.map((item) => {
          const isActive = location === item.path;
          const Icon = item.icon;

          return (
            <motion.button
              key={item.id}
              whileTap={{ scale: 0.9 }}
              onClick={() => navigate(item.path)}
              className={`flex-1 flex flex-col items-center justify-center py-2 px-1 transition-colors relative ${
                isActive ? "text-[oklch(0.72_0.19_45)]" : "text-[oklch(0.40_0.02_260)] hover:text-[oklch(0.60_0.02_260)]"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[oklch(0.72_0.19_45)] to-[oklch(0.80_0.14_80)]"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <Icon className="w-5 h-5 mb-0.5" />
              <span className="text-[8px] font-semibold uppercase tracking-wider">{item.label}</span>
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
}
