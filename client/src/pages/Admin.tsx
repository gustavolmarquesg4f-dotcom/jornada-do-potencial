// DESIGN: Dark Forge — Admin Panel
// Gerenciar usuários, atividades e rastreamento
import { useState } from "react";
import { motion } from "framer-motion";
import { useAdmin, Activity, AdminUser } from "@/contexts/AdminContext";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Users, Activity as ActivityIcon, Plus, Trash2, Edit2, Check, X } from "lucide-react";

export default function Admin() {
  const admin = useAdmin();
  const [activeTab, setActiveTab] = useState("users");
  const [showAddUser, setShowAddUser] = useState(false);
  const [showAddActivity, setShowAddActivity] = useState(false);
  const [newUser, setNewUser] = useState<{ name: string; status: "casado" | "solteiro" }>({ name: "", status: "solteiro" });
  const [newActivity, setNewActivity] = useState({
    title: "",
    description: "",
    type: "prayer" as const,
    content: "",
    week: 1,
    day: 1,
  });

  const handleAddUser = () => {
    if (newUser.name.trim()) {
      admin.addUser({
        name: newUser.name,
        status: newUser.status as "casado" | "solteiro",
        currentWeek: 1,
        currentDay: 1,
        totalPP: 0,
        streak: 0,
        completedDays: [],
        earnedBadges: [],
      });
      setNewUser({ name: "", status: "solteiro" });
      setShowAddUser(false);
    }
  };

  const handleAddActivity = () => {
    if (newActivity.title.trim()) {
      admin.addActivity({
        title: newActivity.title,
        description: newActivity.description,
        type: newActivity.type,
        content: newActivity.content,
        week: newActivity.week,
        day: newActivity.day,
      });
      setNewActivity({
        title: "",
        description: "",
        type: "prayer",
        content: "",
        week: 1,
        day: 1,
      });
      setShowAddActivity(false);
    }
  };

  return (
    <div className="min-h-screen pb-24">
      <div className="px-4 py-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <h1 className="font-display text-3xl font-bold uppercase text-[oklch(0.95_0.02_80)]">
            Painel Admin
          </h1>
          <p className="text-sm text-[oklch(0.68_0.02_260)] mt-1">
            Gerencie usuários, atividades e rastreamento
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 gap-3 mb-6"
        >
          <Card className="bg-[oklch(0.18_0.01_260)] border-[oklch(0.28_0.02_260)] p-4">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-4 h-4 text-[oklch(0.72_0.19_45)]" />
              <span className="text-xs text-[oklch(0.68_0.02_260)]">Usuários</span>
            </div>
            <div className="text-2xl font-bold text-[oklch(0.95_0.02_80)]">
              {admin.users.length}
            </div>
          </Card>
          <Card className="bg-[oklch(0.18_0.01_260)] border-[oklch(0.28_0.02_260)] p-4">
            <div className="flex items-center gap-2 mb-2">
              <ActivityIcon className="w-4 h-4 text-[oklch(0.80_0.14_80)]" />
              <span className="text-xs text-[oklch(0.68_0.02_260)]">Atividades</span>
            </div>
            <div className="text-2xl font-bold text-[oklch(0.95_0.02_80)]">
              {admin.activities.length}
            </div>
          </Card>
        </motion.div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-[oklch(0.18_0.01_260)] border border-[oklch(0.28_0.02_260)]">
            <TabsTrigger value="users">Usuários</TabsTrigger>
            <TabsTrigger value="activities">Atividades</TabsTrigger>
          </TabsList>

          {/* Users Tab */}
          <TabsContent value="users" className="space-y-4 mt-4">
            <Dialog open={showAddUser} onOpenChange={setShowAddUser}>
              <DialogTrigger asChild>
                <Button className="w-full bg-[oklch(0.72_0.19_45)] hover:bg-[oklch(0.80_0.19_45)]">
                  <Plus className="w-4 h-4 mr-2" />
                  Adicionar Usuário
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-[oklch(0.18_0.01_260)] border-[oklch(0.28_0.02_260)]">
                <DialogHeader>
                  <DialogTitle>Novo Usuário</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-[oklch(0.68_0.02_260)]">Nome</label>
                    <Input
                      value={newUser.name}
                      onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                      placeholder="Nome do usuário"
                      className="bg-[oklch(0.22_0.01_260)] border-[oklch(0.28_0.02_260)] text-[oklch(0.95_0.02_80)]"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-[oklch(0.68_0.02_260)]">Status</label>
                    <select
                      value={newUser.status}
                      onChange={(e) => setNewUser({ ...newUser, status: (e.target.value as any) as "casado" | "solteiro" })}
                      className="w-full bg-[oklch(0.22_0.01_260)] border border-[oklch(0.28_0.02_260)] rounded px-3 py-2 text-[oklch(0.95_0.02_80)]"
                    >
                      <option value="solteiro">Solteiro</option>
                      <option value="casado">Casado</option>
                    </select>
                  </div>
                  <Button onClick={handleAddUser} className="w-full bg-[oklch(0.72_0.19_45)]">
                    Adicionar
                  </Button>
                </div>
              </DialogContent>
            </Dialog>

            {/* Users List */}
            <div className="space-y-3">
              {admin.users.map((user) => (
                <motion.div
                  key={user.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <Card className="bg-[oklch(0.18_0.01_260)] border-[oklch(0.28_0.02_260)] p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-[oklch(0.95_0.02_80)]">{user.name}</h3>
                        <div className="text-xs text-[oklch(0.68_0.02_260)] mt-1 space-y-1">
                          <p>Status: {user.status === "casado" ? "Casado" : "Solteiro"}</p>
                          <p>Semana: {user.currentWeek} | Dia: {user.currentDay}</p>
                          <p>Pontos: {user.totalPP} | Sequência: {user.streak}</p>
                          <p>Dias Completos: {user.completedDays.length}</p>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => admin.deleteUser(user.id)}
                        className="text-red-500 hover:bg-red-500/10"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
              {admin.users.length === 0 && (
                <div className="text-center py-8 text-[oklch(0.68_0.02_260)]">
                  Nenhum usuário adicionado ainda
                </div>
              )}
            </div>
          </TabsContent>

          {/* Activities Tab */}
          <TabsContent value="activities" className="space-y-4 mt-4">
            <Dialog open={showAddActivity} onOpenChange={setShowAddActivity}>
              <DialogTrigger asChild>
                <Button className="w-full bg-[oklch(0.72_0.19_45)] hover:bg-[oklch(0.80_0.19_45)]">
                  <Plus className="w-4 h-4 mr-2" />
                  Adicionar Atividade
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-[oklch(0.18_0.01_260)] border-[oklch(0.28_0.02_260)]">
                <DialogHeader>
                  <DialogTitle>Nova Atividade</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-[oklch(0.68_0.02_260)]">Título</label>
                    <Input
                      value={newActivity.title}
                      onChange={(e) => setNewActivity({ ...newActivity, title: e.target.value })}
                      placeholder="Título da atividade"
                      className="bg-[oklch(0.22_0.01_260)] border-[oklch(0.28_0.02_260)] text-[oklch(0.95_0.02_80)]"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-[oklch(0.68_0.02_260)]">Descrição</label>
                    <Input
                      value={newActivity.description}
                      onChange={(e) => setNewActivity({ ...newActivity, description: e.target.value })}
                      placeholder="Descrição"
                      className="bg-[oklch(0.22_0.01_260)] border-[oklch(0.28_0.02_260)] text-[oklch(0.95_0.02_80)]"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-[oklch(0.68_0.02_260)]">Tipo</label>
                    <select
                      value={newActivity.type}
                      onChange={(e) => setNewActivity({ ...newActivity, type: e.target.value as any })}
                      className="w-full bg-[oklch(0.22_0.01_260)] border border-[oklch(0.28_0.02_260)] rounded px-3 py-2 text-[oklch(0.95_0.02_80)]"
                    >
                      <option value="prayer">Oração</option>
                      <option value="reading">Leitura</option>
                      <option value="challenge">Desafio</option>
                      <option value="video">Vídeo</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm text-[oklch(0.68_0.02_260)]">Link/Conteúdo</label>
                    <Input
                      value={newActivity.content}
                      onChange={(e) => setNewActivity({ ...newActivity, content: e.target.value })}
                      placeholder="URL ou conteúdo"
                      className="bg-[oklch(0.22_0.01_260)] border-[oklch(0.28_0.02_260)] text-[oklch(0.95_0.02_80)]"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-[oklch(0.68_0.02_260)]">Semana</label>
                      <Input
                        type="number"
                        min="1"
                        max="16"
                        value={newActivity.week}
                        onChange={(e) => setNewActivity({ ...newActivity, week: parseInt(e.target.value) })}
                        className="bg-[oklch(0.22_0.01_260)] border-[oklch(0.28_0.02_260)] text-[oklch(0.95_0.02_80)]"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-[oklch(0.68_0.02_260)]">Dia</label>
                      <Input
                        type="number"
                        min="1"
                        max="7"
                        value={newActivity.day}
                        onChange={(e) => setNewActivity({ ...newActivity, day: parseInt(e.target.value) })}
                        className="bg-[oklch(0.22_0.01_260)] border-[oklch(0.28_0.02_260)] text-[oklch(0.95_0.02_80)]"
                      />
                    </div>
                  </div>
                  <Button onClick={handleAddActivity} className="w-full bg-[oklch(0.72_0.19_45)]">
                    Adicionar
                  </Button>
                </div>
              </DialogContent>
            </Dialog>

            {/* Activities List */}
            <div className="space-y-3">
              {admin.activities.map((activity) => {
                const completion = admin.getActivityCompletion(activity.id);
                return (
                  <motion.div
                    key={activity.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <Card className="bg-[oklch(0.18_0.01_260)] border-[oklch(0.28_0.02_260)] p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-[oklch(0.95_0.02_80)]">{activity.title}</h3>
                          <div className="text-xs text-[oklch(0.68_0.02_260)] mt-1 space-y-1">
                            <p>{activity.description}</p>
                            <p>Tipo: {activity.type} | Semana {activity.week}, Dia {activity.day}</p>
                            <p>Completo: {completion.completed}/{completion.total}</p>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => admin.deleteActivity(activity.id)}
                          className="text-red-500 hover:bg-red-500/10"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
              {admin.activities.length === 0 && (
                <div className="text-center py-8 text-[oklch(0.68_0.02_260)]">
                  Nenhuma atividade adicionada ainda
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
