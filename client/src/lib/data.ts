// ============================================================
// DESIGN: "Forja do Caráter" — Dark Forge Theme
// Dark UI with ember/fire accents, metallic gold highlights
// Font: Oswald (display) + Roboto (body)
// ============================================================

export const IMAGES = {
  hero: "https://private-us-east-1.manuscdn.com/sessionFile/NPGFWSfSe92Te5pdO2nhYS/sandbox/i6yTYKEwd5HWjdTVnxbcwz-img-1_1772137079000_na1fn_aGVyby1mb3JnZQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTlBHRldTZlNlOTJUZTVwZE8ybmhZUy9zYW5kYm94L2k2eVRZS0V3ZDVIV2pkVFZueGJjd3otaW1nLTFfMTc3MjEzNzA3OTAwMF9uYTFmbl9hR1Z5YnkxbWIzSm5aUS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=vSBehIzFDlEG6SEv6V1wWbzCzepy4coLjzXaN1ZYqOA3PDeTbKPDeRIMKdvvGyrJ0TJWY-AcqbV5gC6R6pXvaJv8B7AQ8H-J94ljCk8wQvgcrdFKgOXBJV0jq8W1zciQCukNTgc7KhLqy20jNbwUB4lvOFt2eOlVmTIcXsazB1BvTh~IlhayhEfd1HkEgc-K2t9yKj3hmuUGVD70FH7i88kD1Fpll0h5hsnkKFeBP-W5sGXZJP7~C1Vv9lHa~mnjk7A1a8vV5yMoZqmYGLygA6Na03WpzowR2V~QSAqruKV-X8Q4jIx~rf235Fx-jVtYAW50zJVAp4Kg-gCx~w8osg__",
  tree: "https://private-us-east-1.manuscdn.com/sessionFile/NPGFWSfSe92Te5pdO2nhYS/sandbox/i6yTYKEwd5HWjdTVnxbcwz-img-2_1772137083000_na1fn_dHJlZS1wcm9ncmVzcw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTlBHRldTZlNlOTJUZTVwZE8ybmhZUy9zYW5kYm94L2k2eVRZS0V3ZDVIV2pkVFZueGJjd3otaW1nLTJfMTc3MjEzNzA4MzAwMF9uYTFmbl9kSEpsWlMxd2NtOW5jbVZ6Y3cucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=AnbDYK5G4zKnW83nLjw5eC7-hA43-1q41JsffBea3JOuH-OnXbFEBVfV8eDaOd46~2oKXkY0b3GI8vrhkh0swD6j-NpApIsPOk61XGWE3X3K1NQXcmY6QxCcSBy~w2RTQIZxmOHflm-TysJm54O75mFwON2Sul6ntufqL765PmpOffWXnciI7iAw5WomQqLRYQkd0wwLVJAQn9Gn237k~jMTG-NAY-kq9lJdOESOJrgogRrCr9ftdJbyI9DRvIfJ4GUzIRKDThLqgtVYC1UiXx4EJq8U3ijoi1yz90fo~6KFK1DnUThgtX7zeanPPjTCXoFhqwiOJo0AlrrVfwxoHg__",
  shield: "https://private-us-east-1.manuscdn.com/sessionFile/NPGFWSfSe92Te5pdO2nhYS/sandbox/i6yTYKEwd5HWjdTVnxbcwz-img-3_1772137084000_na1fn_c2hpZWxkLWJhZGdl.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTlBHRldTZlNlOTJUZTVwZE8ybmhZUy9zYW5kYm94L2k2eVRZS0V3ZDVIV2pkVFZueGJjd3otaW1nLTNfMTc3MjEzNzA4NDAwMF9uYTFmbl9jMmhwWld4a0xXSmhaR2RsLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=XXJ0PmSnBzFF1h8dlhEcOVX1DRz2bUp3FeP1P05KTOKrKW88i5E7uqs8QT3E7IGhARZrXmJKCHf6tkZJ9yxLuUOdsbGIZgNDcZKhxRY2qlf37LfZgjMmDOBnmW-B2SJAAG0pbiLeSFaNtGvmTpaqeONc9EHmsdtVCKbXgVEG7pWGRFda4X-tSxi7tyQl559Qoucawzxc2INKfMBEaWJ1C58tzLPi6h5vQv7MPWbZ7s~JlmYMaXG65NXL0rIZ7El2kymif0z04hbQ~whBTRWhIpXFfOEVwTRQKTQmzn-8gWaiJwVwzdYbTNmHe342K-7WHEzyOeBULIHSAvae7nC-EA__",
  sword: "https://private-us-east-1.manuscdn.com/sessionFile/NPGFWSfSe92Te5pdO2nhYS/sandbox/i6yTYKEwd5HWjdTVnxbcwz-img-4_1772137089000_na1fn_c3dvcmQtY29tcGxldGU.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTlBHRldTZlNlOTJUZTVwZE8ybmhZUy9zYW5kYm94L2k2eVRZS0V3ZDVIV2pkVFZueGJjd3otaW1nLTRfMTc3MjEzNzA4OTAwMF9uYTFmbl9jM2R2Y21RdFkyOXRjR3hsZEdVLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=cEMssKp0yOsU8e29eBu6yqog8~fuJZmLPJHpVJjRoqVo7NG1T9eKPkukLdMoZKn1xcrOMgB3F6IWrBMiU6who1x0EuqO8XxLOFtxO9BkFIhJCQC0vinSd6KIFZ6f-uqW3tXIyL2s63j6EVqScKLyks55Nuk-VLFAEzXyOK-ELPpA9KzXLARUmZeCU8O0Dzuzw-P2AKbEUFaCtYKDzgS2B6UqBxxocsnVcvku0Dn13dzmZ1MxYTeT1m4AvNtLaDhNdj8OlKjtSUNRqW5BaLZ0zqVr1JLml2E5yNyRGS38Bf0X8vOEJbT6QxH995rdPWkWGd3Ijhic3FvPOi~-LV8Piw__",
  dailyBg: "https://private-us-east-1.manuscdn.com/sessionFile/NPGFWSfSe92Te5pdO2nhYS/sandbox/i6yTYKEwd5HWjdTVnxbcwz-img-5_1772137074000_na1fn_ZGFpbHktZGV2b3Rpb25hbC1iZw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTlBHRldTZlNlOTJUZTVwZE8ybmhZUy9zYW5kYm94L2k2eVRZS0V3ZDVIV2pkVFZueGJjd3otaW1nLTVfMTc3MjEzNzA3NDAwMF9uYTFmbl9aR0ZwYkhrdFpHVjJiM1JwYjI1aGJDMWlady5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=KXgexCNBeS2E0dqhQCKyQY0vHDF-xycEiudfF2B8YCELVYltywnXWbdOoaaLRxhbQNUb8htmE3bmlZcUrVI7u9Blmntr8p-jFuI-RmRlOpyxD5mVbIVFZ9lNRXgPlbl7sHe6a4UO61Cbssl~OlPUSbdFRmTaSEus-OGql6b6XwDJZZ0TkcanXOxEEvJ89jMXSBYIU9jYzBwPoNhSdYNX11RzkEb~f86SqygG3XlgBZdy2NrDLkThYRikcL-V~uEUKqUCaI81L3d2XKIzilO6oZ8vs~bVwBAwPJEGDJHu0MfEjwSAqsYc4Xk2BOvWqd7asHEVhrwlYxztyuhPEHtc1g__",
};

export interface WeekTheme {
  id: number;
  title: string;
  subtitle: string;
  icon: string;
  verse: string;
  verseRef: string;
  days: DayContent[];
  weeklyChallengeCasado: string;
  weeklyChallengeSolteiro: string;
}

export interface DayContent {
  day: number;
  title: string;
  wisdom: string;
  challenge: string;
  prayer: string;
}

export const LEVELS = [
  { name: "Aprendiz", minPP: 0, icon: "🔥" },
  { name: "Guerreiro", minPP: 200, icon: "⚔️" },
  { name: "Forjador", minPP: 500, icon: "🔨" },
  { name: "Líder", minPP: 1000, icon: "🛡️" },
  { name: "Mestre do Potencial", minPP: 2000, icon: "👑" },
];

export const BADGES = [
  { id: "first_day", name: "Primeira Faísca", desc: "Complete seu primeiro dia", icon: "✨" },
  { id: "week_perfect", name: "Semana Perfeita", desc: "Complete 7 dias seguidos", icon: "🔥" },
  { id: "family_warrior", name: "Guerreiro da Família", desc: "Complete um desafio em família", icon: "🏠" },
  { id: "chapter_complete", name: "Forjador de Caráter", desc: "Complete um tema inteiro", icon: "⚒️" },
  { id: "streak_30", name: "Fogo Inextinguível", desc: "30 dias de sequência", icon: "🌟" },
  { id: "half_journey", name: "Metade da Jornada", desc: "Complete 8 temas", icon: "⚡" },
];

export const WEEK_THEMES: WeekTheme[] = [
  {
    id: 1,
    title: "Sonhando o Impossível",
    subtitle: "Descubra os sonhos que Deus colocou em seu coração",
    icon: "💫",
    verse: "Ora, àquele que é poderoso para fazer infinitamente mais do que tudo quanto pedimos ou pensamos...",
    verseRef: "Efésios 3:20",
    days: [
      {
        day: 1,
        title: "O Poder de Sonhar",
        wisdom: "Edwin Cole ensina que os sonhos são a substância de toda grande conquista. Deus plantou em você sementes de grandeza que precisam ser regadas com fé e ação. Muitos homens abandonaram seus sonhos por medo do fracasso, mas o verdadeiro fracasso é nunca tentar.",
        challenge: "Escreva 3 sonhos que você abandonou ao longo da vida. Para cada um, escreva por que desistiu e o que mudaria se tentasse novamente.",
        prayer: "Pai, reacende em mim os sonhos que o Senhor plantou no meu coração. Dá-me coragem para sonhar grande e fé para perseverar. Em nome de Jesus, amém."
      },
      {
        day: 2,
        title: "Sonhos vs. Fantasias",
        wisdom: "Há uma diferença crucial entre sonhos e fantasias. Sonhos vêm acompanhados de disposição para trabalhar; fantasias são apenas desejos sem ação. Ed Cole nos desafia a transformar nossos sonhos em planos concretos.",
        challenge: "Escolha um dos sonhos que escreveu ontem e crie 3 passos práticos que você pode começar esta semana para se aproximar dele.",
        prayer: "Senhor, dá-me sabedoria para distinguir os sonhos que vêm de Ti das fantasias do meu coração. Guia meus passos. Amém."
      },
      {
        day: 3,
        title: "Superando o Medo",
        wisdom: "O medo é o maior assassino de sonhos. Cole afirma que a coragem não é a ausência de medo, mas a decisão de que algo é mais importante que o medo. Deus não nos deu espírito de covardia.",
        challenge: "Identifique o maior medo que está impedindo você de avançar. Compartilhe com alguém de confiança hoje.",
        prayer: "Deus, o Senhor não me deu espírito de covardia, mas de poder, amor e domínio próprio. Ajuda-me a vencer o medo. Amém."
      },
      {
        day: 4,
        title: "A Fé que Move Montanhas",
        wisdom: "Sonhar o impossível requer fé sobrenatural. Abraão creu contra toda esperança. Davi enfrentou Golias quando todos fugiram. Sua fé é o combustível que transforma sonhos em realidade.",
        challenge: "Leia Hebreus 11 e escolha um herói da fé que mais inspira você. Escreva o que pode aprender com ele para aplicar hoje.",
        prayer: "Senhor, aumenta a minha fé. Que eu creia como Abraão, que eu enfrente como Davi, que eu persevere como Moisés. Amém."
      },
      {
        day: 5,
        title: "Declarando o Impossível",
        wisdom: "As palavras têm poder criativo. Cole ensina que devemos declarar nossos sonhos em voz alta, pois a confissão da boca alinha o coração com a fé. Declare o que Deus disse sobre você.",
        challenge: "Escreva uma declaração de fé sobre o seu maior sonho e leia em voz alta 3 vezes hoje — de manhã, à tarde e à noite.",
        prayer: "Pai, que as palavras da minha boca e a meditação do meu coração sejam agradáveis diante de Ti. Declaro que sou mais que vencedor. Amém."
      },
      {
        day: 6,
        title: "Perseverança nos Sonhos",
        wisdom: "Todo sonho passa por um vale de provação. José foi vendido como escravo antes de se tornar governador. A perseverança é a ponte entre o sonho e a realização.",
        challenge: "Reflita sobre uma dificuldade atual. Escreva 3 razões pelas quais vale a pena perseverar mesmo quando é difícil.",
        prayer: "Senhor, dá-me forças para não desistir. Sei que a perseverança produz caráter, e o caráter produz esperança. Amém."
      },
      {
        day: 7,
        title: "Revisão e Celebração",
        wisdom: "Hoje é dia de olhar para trás e celebrar cada passo dado. Cada pequena vitória é uma faísca na forja do seu caráter. Deus se alegra com o seu progresso.",
        challenge: "Releia tudo o que escreveu esta semana. Marque o que mais impactou você e compartilhe com o grupo.",
        prayer: "Obrigado, Senhor, por esta semana de crescimento. Que os sonhos que o Senhor plantou em mim continuem ardendo como fogo. Amém."
      }
    ],
    weeklyChallengeCasado: "Reserve 1 hora neste fim de semana para conversar com sua esposa sobre os 'sonhos impossíveis' de vocês como casal e família. Orem juntos sobre eles e escrevam pelo menos 3 sonhos compartilhados.",
    weeklyChallengeSolteiro: "Convide um amigo para um café e compartilhe seus 3 maiores sonhos. Peça que ele ore por você e se comprometa a ser seu parceiro de prestação de contas nesta jornada."
  },
  {
    id: 2,
    title: "Marchando num Passo Diferente",
    subtitle: "Tenha coragem de ser diferente do mundo",
    icon: "🥾",
    verse: "Não se amoldem ao padrão deste mundo, mas transformem-se pela renovação da sua mente.",
    verseRef: "Romanos 12:2",
    days: [
      { day: 1, title: "Nadando Contra a Corrente", wisdom: "Ser um homem de Deus significa marchar num passo diferente do mundo. Cole ensina que a maioria segue a multidão, mas os líderes verdadeiros têm coragem de andar no caminho estreito.", challenge: "Identifique uma área da sua vida onde você está seguindo a multidão em vez de seguir a Deus. Escreva o que precisa mudar.", prayer: "Senhor, dá-me coragem para ser diferente. Que eu não me conforme com este mundo, mas seja transformado. Amém." },
      { day: 2, title: "O Custo de Ser Diferente", wisdom: "Marchar diferente tem um custo. Você pode ser ridicularizado, incompreendido ou rejeitado. Mas o preço de se conformar é muito maior — é perder quem Deus criou você para ser.", challenge: "Pense em alguém que você admira por ser diferente. O que essa pessoa sacrificou? Escreva o que você está disposto a sacrificar.", prayer: "Pai, que eu valorize mais a Tua aprovação do que a aprovação dos homens. Amém." },
      { day: 3, title: "Identidade em Cristo", wisdom: "Sua identidade não vem do que o mundo diz sobre você, mas do que Deus diz. Você é filho do Rei, criado com propósito único. Quando você sabe quem é, não precisa se encaixar.", challenge: "Escreva 5 verdades que Deus diz sobre você na Bíblia. Cole no espelho do banheiro e leia toda manhã.", prayer: "Senhor, que minha identidade esteja firmada em Ti e não nas opiniões do mundo. Amém." },
      { day: 4, title: "Renovação da Mente", wisdom: "A transformação começa na mente. O que você alimenta sua mente determina quem você se torna. Cole desafia: troque o lixo mental por verdades eternas.", challenge: "Faça um inventário do que você consumiu nas redes sociais nas últimas 24h. Substitua 30 minutos de scroll por leitura bíblica.", prayer: "Renova minha mente, Senhor. Que eu pense no que é verdadeiro, nobre, justo e puro. Amém." },
      { day: 5, title: "Influência Positiva", wisdom: "Quando você marcha diferente, outros começam a seguir. Sua vida é uma carta aberta que todos leem. Seja a influência que você gostaria de ter tido.", challenge: "Hoje, faça algo positivo por alguém sem que ninguém saiba. Pratique a bondade secreta.", prayer: "Que minha vida seja luz no meio das trevas, Senhor. Usa-me como instrumento. Amém." },
      { day: 6, title: "Disciplina do Diferente", wisdom: "Ser diferente não é um momento, é um estilo de vida. Requer disciplina diária nas pequenas escolhas. A excelência é um hábito, não um ato isolado.", challenge: "Escolha um hábito novo e saudável para incorporar à sua rotina a partir de hoje. Comprometa-se por 21 dias.", prayer: "Senhor, ajuda-me a ser disciplinado nas pequenas coisas para ser fiel nas grandes. Amém." },
      { day: 7, title: "Revisão e Celebração", wisdom: "Outra semana forjando caráter. Cada dia de obediência é um golpe de martelo moldando quem você está se tornando.", challenge: "Compartilhe com o grupo a maior mudança que você fez esta semana. Celebrem juntos.", prayer: "Obrigado, Pai, por me ajudar a marchar diferente. Continua me moldando. Amém." }
    ],
    weeklyChallengeCasado: "Planeje uma noite especial com sua esposa — sem celular, sem TV. Conversem sobre como vocês podem, juntos, ser uma família que marcha diferente na vizinhança e no trabalho.",
    weeklyChallengeSolteiro: "Identifique um grupo ou ambiente onde você costuma 'se encaixar' para ser aceito. Esta semana, seja autenticamente você mesmo nesse ambiente e observe o que acontece."
  },
  {
    id: 3, title: "Sua Vida Tem Potencial", subtitle: "Descubra o potencial que Deus depositou em você", icon: "⚡",
    verse: "Pois somos criação de Deus, criados em Cristo Jesus para boas obras, as quais Deus preparou antes para nós.", verseRef: "Efésios 2:10",
    days: [
      { day: 1, title: "Potencial Escondido", wisdom: "Dentro de cada semente há uma floresta inteira. Dentro de você há um potencial que ainda não foi revelado. Cole ensina que Deus nunca cria algo sem propósito.", challenge: "Liste 5 talentos ou habilidades que você tem mas não está usando plenamente.", prayer: "Senhor, revela o potencial que o Senhor colocou em mim. Amém." },
      { day: 2, title: "Barreiras ao Potencial", wisdom: "Medo, preguiça, conformismo e descrença são as maiores barreiras ao seu potencial. Identifique-as para poder destruí-las.", challenge: "Para cada talento listado ontem, escreva qual barreira está impedindo você de usá-lo.", prayer: "Pai, remove as barreiras que me impedem de ser tudo que o Senhor planejou. Amém." },
      { day: 3, title: "Investindo no Potencial", wisdom: "Potencial sem investimento é desperdício. Assim como ouro bruto precisa ser refinado, seu potencial precisa de estudo, prática e dedicação.", challenge: "Escolha uma habilidade e dedique 30 minutos hoje para desenvolvê-la (leitura, curso, prática).", prayer: "Senhor, dá-me disciplina para investir no que o Senhor me deu. Amém." },
      { day: 4, title: "O Ambiente Certo", wisdom: "Uma semente precisa do solo certo para germinar. Cerque-se de pessoas que acreditam no seu potencial e fogem da mediocridade.", challenge: "Avalie seus 5 relacionamentos mais próximos. Eles impulsionam ou limitam seu potencial?", prayer: "Pai, coloca pessoas certas no meu caminho e me dá sabedoria nos relacionamentos. Amém." },
      { day: 5, title: "Potencial no Trabalho", wisdom: "Seu trabalho é um campo de expressão do seu potencial. Cole ensina que devemos trabalhar como para o Senhor, não para os homens.", challenge: "Identifique uma área no trabalho onde você pode dar mais de si. Faça algo extra hoje.", prayer: "Senhor, que meu trabalho glorifique o Teu nome. Amém." },
      { day: 6, title: "Potencial Espiritual", wisdom: "Além do potencial natural, você tem potencial espiritual ilimitado. O Espírito Santo em você é a maior força do universo.", challenge: "Dedique 15 minutos extras hoje em oração, pedindo a Deus que revele dons espirituais que você ainda não explorou.", prayer: "Espírito Santo, revela os dons que o Senhor depositou em mim. Amém." },
      { day: 7, title: "Revisão e Celebração", wisdom: "Você está descobrindo tesouros escondidos dentro de si. Continue cavando!", challenge: "Compartilhe com o grupo uma descoberta sobre seu potencial que fez esta semana.", prayer: "Obrigado, Senhor, pelo potencial que o Senhor colocou em mim. Ajuda-me a usá-lo para Tua glória. Amém." }
    ],
    weeklyChallengeCasado: "Sente-se com sua esposa e filhos e peça que cada um diga um talento que vê em você. Faça o mesmo por cada membro da família. Orem juntos agradecendo pelos potenciais da família.",
    weeklyChallengeSolteiro: "Faça um 'mapa de potencial': desenhe ou escreva todas as suas habilidades, talentos e sonhos em uma folha. Identifique conexões entre eles e um possível propósito unificador."
  },
];

// Weeks 4-16 simplified for prototype
export const REMAINING_THEMES = [
  { id: 4, title: "Transformando o Negativo em Positivo", icon: "🔄", subtitle: "Aprenda a ver oportunidades nas adversidades" },
  { id: 5, title: "Os Pilares do Caráter", icon: "🏛️", subtitle: "Construa uma fundação inabalável" },
  { id: 6, title: "As Imagens em Nossa Mente", icon: "🧠", subtitle: "Renove seus pensamentos e visões" },
  { id: 7, title: "Para Ser Grande, É Preciso Servir", icon: "🤲", subtitle: "A grandeza vem através do serviço" },
  { id: 8, title: "O Poder da Confissão", icon: "💬", subtitle: "Suas palavras moldam seu destino" },
  { id: 9, title: "Basta Falar", icon: "📢", subtitle: "A coragem de declarar a verdade" },
  { id: 10, title: "Domine Suas Paixões", icon: "🎯", subtitle: "Autocontrole é a marca do homem forte" },
  { id: 11, title: "Será que Deus Está com Raiva de Você?", icon: "❓", subtitle: "Entenda o verdadeiro caráter de Deus" },
  { id: 12, title: "Quando os Justos Sofrem", icon: "💪", subtitle: "Encontre propósito no sofrimento" },
  { id: 13, title: "Estabeleça Prioridades", icon: "📋", subtitle: "Organize sua vida pelo que importa" },
  { id: 14, title: "Você Está Pronto para Prosperar?", icon: "📈", subtitle: "Prepare-se para a abundância de Deus" },
  { id: 15, title: "Culpa pra Quê?", icon: "🕊️", subtitle: "Liberte-se do peso da culpa" },
  { id: 16, title: "O Preço da Paz", icon: "☮️", subtitle: "Conquiste a paz que excede o entendimento" },
];
