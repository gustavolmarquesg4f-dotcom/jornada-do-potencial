# 📖 Guia de Uso - Jornada do Potencial

## 🚀 Início Rápido

### Acessar o Aplicativo
- **URL:** https://3000-ij7672gsdp7qq7fe4q056-9cc792af.us1.manus.computer
- **Navegador:** Chrome, Firefox, Safari ou Edge (mobile-first)

---

## 📱 Funcionalidades Principais

### 1. **Painel Principal** (`/`)
- Dashboard com estatísticas do usuário
- Sequência de dias completos
- Pontos acumulados
- Medalhas conquistadas
- Acesso rápido à missão do dia

### 2. **Painel Admin** (`/admin`)

#### Gerenciar Usuários
1. Clique em "Adicionar Usuário"
2. Preencha:
   - **Nome:** Nome do usuário
   - **Status:** Solteiro ou Casado
3. Clique em "Adicionar"
4. Para remover, clique no ícone de lixeira

#### Gerenciar Atividades
1. Clique em "Adicionar Atividade"
2. Preencha:
   - **Título:** Nome da atividade
   - **Descrição:** Detalhes
   - **Tipo:** Oração, Leitura, Vídeo ou Desafio
   - **Link/Conteúdo:** URL para vídeos ou indicação
   - **Semana:** 1-16
   - **Dia:** 1-7
3. Clique em "Adicionar"
4. Para remover, clique no ícone de lixeira

### 3. **Rastreamento de Atividades** (`/atividades`)

#### Ver Atividades
1. Selecione a semana desejada (1-16)
2. Veja as atividades organizadas por dia
3. Clique no círculo para marcar como completa/incompleta
4. Acompanhe o progresso em tempo real

#### Tipos de Atividades
- 🙏 **Oração:** Atividades de oração
- 📖 **Leitura:** Leitura bíblica ou devocional
- 🎥 **Vídeo:** Links para vídeos com botão "Assistir"
- ⚡ **Desafio:** Desafios semanais

### 4. **Jornada** (`/jornada`)
- Visualize o progresso geral da jornada
- Veja as semanas completadas
- Acompanhe a evolução

### 5. **Desafios** (`/desafios`)
- Desafios semanais específicos
- Diferenciados por status (casado/solteiro)
- Rastreamento de conclusão

### 6. **Medalhas** (`/medalhas`)
- Badges conquistadas
- Requisitos para cada medalha
- Histórico de conquistas

### 7. **Perfil** (`/perfil`)
- Informações do usuário
- Estatísticas pessoais
- Opções de configuração

---

## 🎨 Melhorias de Acessibilidade

### Cores Otimizadas
- ✅ Fundo mais claro (não tão escuro)
- ✅ Letras brancas com melhor contraste
- ✅ Scrollbar mais visível
- ✅ Modo escuro confortável para os olhos

### Navegação
- ✅ Menu inferior com 5 abas principais
- ✅ Ícones intuitivos
- ✅ Transições suaves
- ✅ Design mobile-first

---

## 💾 Dados e Armazenamento

### Onde os Dados são Salvos?
Todos os dados são salvos localmente no navegador (localStorage):

| Dados | Chave |
|-------|-------|
| Usuários Admin | `admin-users` |
| Atividades | `activities` |
| Progresso do Usuário | `user-activities` |
| Dados do Usuário | `jornada-user` |
| Senha Admin | `admin-password` |

### Exportar Dados
Para exportar os dados, abra o console do navegador (F12) e execute:

```javascript
// Exportar usuários
console.log(JSON.parse(localStorage.getItem('admin-users')));

// Exportar atividades
console.log(JSON.parse(localStorage.getItem('activities')));

// Exportar progresso
console.log(JSON.parse(localStorage.getItem('user-activities')));
```

---

## 🔧 Troubleshooting

### O app não carrega
- Limpe o cache do navegador (Ctrl+Shift+Delete)
- Atualize a página (Ctrl+F5)
- Tente em outro navegador

### Dados desapareceram
- Verifique se o localStorage está habilitado
- Não limpe os dados do navegador
- Os dados são específicos por navegador/dispositivo

### Atividades não aparecem
- Verifique se adicionou atividades no painel admin
- Confirme a semana e o dia selecionados
- Atualize a página

---

## 📊 Estatísticas e Métricas

### Dashboard Admin
- **Total de Usuários:** Número de usuários cadastrados
- **Total de Atividades:** Número de atividades criadas
- **Taxa de Conclusão:** Porcentagem de atividades completas por usuário

### Rastreamento Individual
- **Dias Completos:** Total de dias com atividades concluídas
- **Sequência:** Dias consecutivos de atividades
- **Pontos:** Pontuação acumulada
- **Medalhas:** Badges conquistadas

---

## 🎯 Dicas de Uso

1. **Comece adicionando usuários** no painel admin
2. **Crie atividades** para cada semana/dia
3. **Compartilhe o link** com os usuários
4. **Acompanhe o progresso** no painel admin
5. **Incentive a conclusão** de atividades

---

## 📞 Suporte

Se encontrar problemas ou tiver dúvidas:
- Verifique este guia
- Teste em outro navegador
- Limpe o cache e tente novamente

---

**Versão:** 1.0.0  
**Última Atualização:** Fevereiro 2026  
**Status:** ✅ Pronto para Produção
