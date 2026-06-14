// ─── Scent Options ────────────────────────────────────────────────────────────

export interface ScentOption {
  id: string;
  name: string;
  family: string;
  mood: string;
  matchedQ1: string;
  subMatches: string[];
  reason: string;         // shown on landing page cards
  cardLineHalf: string;   // shown in message card (ends with comma — connects to flower line)
  shortDescription: string;
}

export const scentOptions: ScentOption[] = [
  {
    id: "vanilla-amber",
    name: "바닐라 앰버",
    family: "구르망 / 앰버",
    mood: "따뜻함, 포근함, 위로",
    matchedQ1: "괜히 마음이 따뜻해져요",
    subMatches: ["멀리 있어도 자꾸 생각나요"],
    reason: "당신과 함께 있을 때 느껴지는 온기를 닮은 바닐라 앰버 향을 골랐어요.",
    cardLineHalf: "너와 있으면 괜히 마음이 따뜻해져서, 포근한 바닐라 앰버 향을 골랐어.",
    shortDescription: "따뜻한 바닐라와 은은한 앰버가 포근하게 남는 향",
  },
  {
    id: "lavender-herb",
    name: "라벤더 허브",
    family: "허브 / 플로럴",
    mood: "평온, 휴식, 긴장 완화",
    matchedQ1: "걱정이 조금 가벼워져요",
    subMatches: ["편하게 숨 쉴 수 있어요"],
    reason: "걱정이 조금 내려앉는 느낌을 닮은 라벤더 허브 향을 골랐어요.",
    cardLineHalf: "너와 있으면 걱정이 조금 가벼워져서, 차분한 라벤더 허브 향을 골랐어.",
    shortDescription: "지친 마음을 천천히 가라앉히는 차분한 허브 향",
  },
  {
    id: "woody-musk",
    name: "우디 머스크",
    family: "우디 / 머스크",
    mood: "조용함, 안정감, 편안함",
    matchedQ1: "편하게 숨 쉴 수 있어요",
    subMatches: ["내가 나다워지는 느낌이에요"],
    reason: "그 편안함을 닮은 조용한 우디 머스크 향을 골랐어요.",
    cardLineHalf: "너와 있으면 편하게 숨 쉴 수 있어서, 조용한 우디 머스크 향을 골랐어.",
    shortDescription: "나무의 차분함과 머스크의 부드러움이 오래 남는 향",
  },
  {
    id: "citrus-bergamot",
    name: "시트러스 베르가못",
    family: "시트러스",
    mood: "밝음, 생기, 기분 전환",
    matchedQ1: "나도 모르게 웃게 돼요",
    subMatches: ["조금 더 용기 있는 사람이 돼요"],
    reason: "당신과 있으면 웃게 되는 순간을 닮은 시트러스 베르가못 향을 골랐어요.",
    cardLineHalf: "너와 있으면 나도 모르게 웃게 돼서, 밝은 시트러스 베르가못 향을 골랐어.",
    shortDescription: "밝고 산뜻하게 기분을 환기시키는 향",
  },
  {
    id: "sandalwood",
    name: "샌달우드",
    family: "우디",
    mood: "단단함, 차분함, 깊이",
    matchedQ1: "조금 더 용기 있는 사람이 돼요",
    subMatches: ["편하게 숨 쉴 수 있어요"],
    reason: "당신 곁에서 조금 더 단단해지는 마음을 닮은 샌달우드 향을 골랐어요.",
    cardLineHalf: "너와 있으면 조금 더 용기 있는 사람이 되는 것 같아서, 단단한 샌달우드 향을 골랐어.",
    shortDescription: "차분하지만 중심을 잡아주는 깊은 나무 향",
  },
  {
    id: "green-tea-woody",
    name: "그린티 우디",
    family: "그린 / 우디",
    mood: "자연스러움, 균형, 담백함",
    matchedQ1: "내가 나다워지는 느낌이에요",
    subMatches: ["걱정이 조금 가벼워져요"],
    reason: "꾸미지 않아도 편안한 나다움을 닮은 그린티 우디 향을 골랐어요.",
    cardLineHalf: "너와 있으면 내가 나다워지는 느낌이 들어서, 담백한 그린티 우디 향을 골랐어.",
    shortDescription: "맑은 그린티와 담백한 우디함이 균형 있게 남는 향",
  },
  {
    id: "rose-musk",
    name: "로즈 머스크",
    family: "플로럴 / 머스크",
    mood: "다정함, 그리움, 부드러운 애정",
    matchedQ1: "멀리 있어도 자꾸 생각나요",
    subMatches: ["괜히 마음이 따뜻해져요"],
    reason: "멀리 있어도 오래 남는 마음을 닮은 로즈 머스크 향을 골랐어요.",
    cardLineHalf: "너와 멀리 있어도 자꾸 생각나서, 다정한 로즈 머스크 향을 골랐어.",
    shortDescription: "부드러운 장미와 머스크가 잔잔하게 남는 향",
  },
  {
    id: "white-tea",
    name: "화이트 티",
    family: "티 / 클린",
    mood: "맑음, 정돈됨, 가벼움",
    matchedQ1: "걱정이 조금 가벼워져요",
    subMatches: ["내가 나다워지는 느낌이에요"],
    reason: "마음이 맑아지는 순간을 닮은 화이트 티 향을 골랐어요.",
    cardLineHalf: "너와 있으면 마음이 맑고 가벼워지는 것 같아서, 깨끗한 화이트 티 향을 골랐어.",
    shortDescription: "과하지 않고 깨끗하게 마음을 정리해주는 향",
  },
  {
    id: "cotton-linen",
    name: "코튼 린넨",
    family: "클린 / 파우더리",
    mood: "깨끗함, 담백함, 부담 없음",
    matchedQ1: "편하게 숨 쉴 수 있어요",
    subMatches: ["괜히 마음이 따뜻해져요"],
    reason: "과하지 않게 편안한 마음을 닮은 코튼 린넨 향을 골랐어요.",
    cardLineHalf: "너와 있으면 과하지 않게 편안해져서, 부드러운 코튼 린넨 향을 골랐어.",
    shortDescription: "깨끗한 이불처럼 담백하고 부담 없는 향",
  },
  {
    id: "jasmine-floral",
    name: "재스민 플로럴",
    family: "플로럴",
    mood: "환함, 생기, 부드러운 자신감",
    matchedQ1: "조금 더 용기 있는 사람이 돼요",
    subMatches: ["나도 모르게 웃게 돼요"],
    reason: "당신과 함께 있을 때 조금 더 환해지는 마음을 닮은 재스민 플로럴 향을 골랐어요.",
    cardLineHalf: "너와 있으면 조금 더 환해지는 사람이 되는 것 같아서, 은은한 재스민 플로럴 향을 골랐어.",
    shortDescription: "은은한 꽃향이 생기와 부드러운 자신감을 더하는 향",
  },
];

// ─── Flower Options ───────────────────────────────────────────────────────────

export interface FlowerOption {
  id: string;
  name: string;
  meaning: string;
  matchedQ2: string;
  subMatches: string[];
  reason: string;
  cardLine: string;
}

export const flowerOptions: FlowerOption[] = [
  {
    id: "rose",
    name: "프리저브드 장미",
    meaning: "사랑, 애정, 존중, 감사",
    matchedQ2: "네가 준 온기를 돌려주고 싶어요",
    subMatches: ["보고 싶었다는 마음을 전하고 싶어요"],
    reason: "장미에는 오래 남는 애정과 따뜻한 마음을 담을 수 있어서 골랐어요.",
    cardLine: "장미의 꽃말이 오래 남는 애정과 따뜻한 사랑이어서, 이 꽃을 골랐어.",
  },
  {
    id: "carnation",
    name: "프리저브드 카네이션",
    meaning: "감사, 존경, 애정",
    matchedQ2: "고마웠다는 말을 제대로 전하고 싶어요",
    subMatches: ["네가 준 온기를 돌려주고 싶어요"],
    reason: "카네이션에는 말로 다 못 한 감사와 존중의 마음이 담겨 있어서 골랐어요.",
    cardLine: "카네이션의 꽃말이 감사와 존경이어서, 이 꽃을 골랐어.",
  },
  {
    id: "lavender",
    name: "프리저브드 라벤더",
    meaning: "평온, 기다림, 안정",
    matchedQ2: "잠깐이라도 쉬게 해주고 싶어요",
    subMatches: ["늦었지만 미안하다고 말하고 싶어요"],
    reason: "라벤더의 평온한 의미가 잠깐의 휴식과 잘 어울려서 골랐어요.",
    cardLine: "라벤더의 꽃말이 평온과 기다림이어서, 이 꽃을 골랐어.",
  },
  {
    id: "babys-breath",
    name: "프리저브드 안개꽃",
    meaning: "순수함, 진심, 오래가는 사랑",
    matchedQ2: "늦었지만 미안하다고 말하고 싶어요",
    subMatches: ["보고 싶었다는 마음을 전하고 싶어요"],
    reason: "안개꽃은 작지만 오래 남는 진심을 전하기 좋아서 골랐어요.",
    cardLine: "안개꽃의 꽃말이 순수한 진심과 오래가는 마음이어서, 이 꽃을 골랐어.",
  },
  {
    id: "hydrangea",
    name: "프리저브드 수국",
    meaning: "진심 어린 감정, 이해, 감사",
    matchedQ2: "고마웠다는 말을 제대로 전하고 싶어요",
    subMatches: ["늦었지만 미안하다고 말하고 싶어요"],
    reason: "수국에는 쉽게 말하지 못했던 깊은 감정을 담을 수 있어서 골랐어요.",
    cardLine: "수국의 꽃말이 진심 어린 감정과 이해여서, 이 꽃을 골랐어.",
  },
  {
    id: "sunflower",
    name: "프리저브드 해바라기",
    meaning: "응원, 존경, 밝음, 오래 바라봄",
    matchedQ2: "다시 힘낼 수 있게 해주고 싶어요",
    subMatches: ["축하받아 마땅하다고 말해주고 싶어요"],
    reason: "해바라기는 다시 밝은 쪽을 바라보게 하는 응원의 마음과 잘 어울려서 골랐어요.",
    cardLine: "해바라기의 꽃말이 응원과 밝은 희망이어서, 이 꽃을 골랐어.",
  },
  {
    id: "tulip",
    name: "프리저브드 튤립",
    meaning: "애정, 배려, 새로운 시작, 축하",
    matchedQ2: "축하받아 마땅하다고 말해주고 싶어요",
    subMatches: ["다시 힘낼 수 있게 해주고 싶어요"],
    reason: "튤립은 새로운 시작과 축하의 마음을 전하기 좋아서 골랐어요.",
    cardLine: "튤립의 꽃말이 새로운 시작과 축하의 마음이어서, 이 꽃을 골랐어.",
  },
  {
    id: "ranunculus",
    name: "프리저브드 라넌큘러스",
    meaning: "매력, 빛남, 우아함",
    matchedQ2: "축하받아 마땅하다고 말해주고 싶어요",
    subMatches: ["네가 준 온기를 돌려주고 싶어요"],
    reason: "라넌큘러스는 그 사람의 빛남을 축하하는 꽃으로 잘 어울려서 골랐어요.",
    cardLine: "라넌큘러스의 꽃말이 빛나는 매력과 축복이어서, 이 꽃을 골랐어.",
  },
  {
    id: "lisianthus",
    name: "프리저브드 리시안셔스",
    meaning: "감사, 변치 않는 마음, 우아함",
    matchedQ2: "고마웠다는 말을 제대로 전하고 싶어요",
    subMatches: ["보고 싶었다는 마음을 전하고 싶어요"],
    reason: "리시안셔스는 오래 말하지 못한 고마움을 조용히 전하기 좋아서 골랐어요.",
    cardLine: "리시안셔스의 꽃말이 변치 않는 감사와 우아한 마음이어서, 이 꽃을 골랐어.",
  },
  {
    id: "peony",
    name: "프리저브드 작약",
    meaning: "축복, 좋은 일, 따뜻한 바람",
    matchedQ2: "축하받아 마땅하다고 말해주고 싶어요",
    subMatches: ["네가 준 온기를 돌려주고 싶어요"],
    reason: "작약은 앞으로 좋은 일이 피어나길 바라는 마음과 잘 어울려서 골랐어요.",
    cardLine: "작약의 꽃말이 좋은 일과 따뜻한 축복이어서, 이 꽃을 골랐어.",
  },
];

// ─── Context Lines (Q3) ───────────────────────────────────────────────────────

export interface ContextLine {
  input: string;
  line: string;
}

export const contextLines: ContextLine[] = [
  {
    input: "요즘 유난히 지쳐 보여서",
    line: "요즘 네 하루가 유난히 무거워 보였어.",
  },
  {
    input: "새로운 시작 앞에 서 있는 것 같아서",
    line: "네가 새로운 시작 앞에 서 있는 것 같았어.",
  },
  {
    input: "말로는 자꾸 가볍게 넘어가게 돼서",
    line: "말로 하면 자꾸 가볍게 넘어가게 돼서, 이번엔 조금 더 남는 방식으로 전하고 싶었어.",
  },
  {
    input: "고마웠던 순간이 계속 떠올라서",
    line: "네가 해줬던 고마운 순간들이 계속 떠올랐어.",
  },
  {
    input: "한동안 연락하지 못했지만 계속 생각나서",
    line: "한동안 자주 연락하지 못했지만, 이상하게 계속 네 생각이 났어.",
  },
  {
    input: "미안한 마음이 오래 남아 있어서",
    line: "미안하다는 말을 제대로 하지 못한 마음이 오래 남아 있었어.",
  },
  {
    input: "그냥 오늘, 문득 그 사람이 떠올라서",
    line: "그냥 오늘, 문득 네가 떠올랐어.",
  },
];

// ─── Tone Options (Q4) ────────────────────────────────────────────────────────

export interface ToneOption {
  input: string;
  style: string;
  closingLines: [string, string];
}

export const toneOptions: ToneOption[] = [
  {
    input: "부담스럽지 않게, 담백하게",
    style: "short, restrained, sincere, not overly sentimental",
    closingLines: ["지금 당장 괜찮아지지 않아도 돼.", "오늘은 버티기만 해도 충분해."],
  },
  {
    input: "평소보다 조금 더 다정하게",
    style: "warm, soft, affectionate, gentle",
    closingLines: ["정말 오늘 하루도 잘 버텼어.", "나 여기 있어, 언제든."],
  },
  {
    input: "장난스럽지만 진심은 보이게",
    style: "light, friendly, slightly playful, sincere ending",
    closingLines: ["근데 이거 진심이야, 진짜로.", "잘 지내 — 명령이야."],
  },
  {
    input: "조심스럽고 부드럽게",
    style: "careful, gentle, apologetic or emotionally cautious",
    closingLines: ["이 마음이 조금이라도 닿았으면 해.", "괜찮아, 천천히 가도."],
  },
  {
    input: "깊지만 무겁지는 않게",
    style: "deep but not burdensome, emotional but restrained",
    closingLines: ["무겁게 받지 않아도 돼.", "그냥 오늘 하루, 조금만 쉬어."],
  },
  {
    input: "오래 기억에 남을 만큼 진하게",
    style: "memorable, literary, emotional, long-lasting",
    closingLines: ["이 선물이 오래도록 네 곁에 남았으면 해.", "나는 항상, 네 편이야."],
  },
];

// ─── Curation Result ──────────────────────────────────────────────────────────

export interface CurationAnswers {
  q1: string;
  q2: string;
  q3: string;
  q4: string;
}

export interface CurationOutput {
  scent: ScentOption;
  flower: FlowerOption;
  contextLine: string;
  tone: ToneOption;
  messageCard: string;
}

export function generateCuration(answers: CurationAnswers): CurationOutput {
  // Q1 → scent
  const scent =
    scentOptions.find((s) => s.matchedQ1 === answers.q1) ||
    scentOptions.find((s) => s.subMatches.includes(answers.q1)) ||
    scentOptions[2]; // fallback: woody-musk

  // Q2 → flower
  const flower =
    flowerOptions.find((f) => f.matchedQ2 === answers.q2) ||
    flowerOptions.find((f) => f.subMatches.includes(answers.q2)) ||
    flowerOptions[2]; // fallback: lavender

  // Q3 → context line (support custom text)
  const contextEntry = contextLines.find((c) => c.input === answers.q3);
  const contextLine = contextEntry ? contextEntry.line : answers.q3;

  // Q4 → tone
  const tone =
    toneOptions.find((t) => t.input === answers.q4) || toneOptions[0];

  // Assemble message card
  const messageCard = [
    contextLine,
    "",
    scent.cardLineHalf,
    flower.cardLine,
    "",
    tone.closingLines[0],
    tone.closingLines[1],
  ].join("\n");

  return { scent, flower, contextLine, tone, messageCard };
}
