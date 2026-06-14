"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

// ─── Question data ────────────────────────────────────────────────────────────

type Option = { label: string };

interface Question {
  id: number;
  role: string;
  question: string;
  options: Option[];
  allowCustom?: boolean;
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    role: "향의 분위기를 결정해요",
    question: "이 사람과 함께 있으면,\n당신은 어떤 마음이 되나요?",
    options: [
      { label: "괜히 마음이 따뜻해져요" },
      { label: "걱정이 조금 가벼워져요" },
      { label: "편하게 숨 쉴 수 있어요" },
      { label: "나도 모르게 웃게 돼요" },
      { label: "조금 더 용기 있는 사람이 돼요" },
      { label: "내가 나다워지는 느낌이에요" },
      { label: "멀리 있어도 자꾸 생각나요" },
    ],
  },
  {
    id: 2,
    role: "꽃말과 메시지 방향을 결정해요",
    question: "이번에는 그 사람에게\n어떤 마음을 돌려주고 싶나요?",
    options: [
      { label: "네가 준 온기를 돌려주고 싶어요" },
      { label: "잠깐이라도 쉬게 해주고 싶어요" },
      { label: "다시 힘낼 수 있게 해주고 싶어요" },
      { label: "고마웠다는 말을 제대로 전하고 싶어요" },
      { label: "축하받아 마땅하다고 말해주고 싶어요" },
      { label: "늦었지만 미안하다고 말하고 싶어요" },
      { label: "보고 싶었다는 마음을 전하고 싶어요" },
    ],
  },
  {
    id: 3,
    role: "카드의 맥락을 결정해요",
    question: "왜 지금 이 마음을\n전하고 싶어졌나요?",
    options: [
      { label: "요즘 유난히 지쳐 보여서" },
      { label: "새로운 시작 앞에 서 있는 것 같아서" },
      { label: "말로는 자꾸 가볍게 넘어가게 돼서" },
      { label: "고마웠던 순간이 계속 떠올라서" },
      { label: "한동안 연락하지 못했지만 계속 생각나서" },
      { label: "미안한 마음이 오래 남아 있어서" },
      { label: "그냥 오늘, 문득 그 사람이 떠올라서" },
    ],
    allowCustom: true,
  },
  {
    id: 4,
    role: "메시지 카드의 문체를 결정해요",
    question: "이 마음이 어떤 온도로\n닿았으면 하나요?",
    options: [
      { label: "부담스럽지 않게, 담백하게" },
      { label: "평소보다 조금 더 다정하게" },
      { label: "장난스럽지만 진심은 보이게" },
      { label: "조심스럽고 부드럽게" },
      { label: "깊지만 무겁지는 않게" },
      { label: "오래 기억에 남을 만큼 진하게" },
    ],
  },
];

// ─── Types ────────────────────────────────────────────────────────────────────

type Answers = Record<number, string>;

// ─── Option button ────────────────────────────────────────────────────────────

function OptionButton({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.015 }}
      whileTap={{ scale: 0.985 }}
      style={{
        width: "100%",
        textAlign: "left",
        padding: "16px 20px",
        borderRadius: 14,
        fontSize: 15,
        fontWeight: selected ? 600 : 400,
        color: selected ? "#1F1B18" : "#7A7069",
        background: selected ? "#F0D8D1" : "#FFFFFF",
        border: selected ? "1.5px solid #C58A7A" : "1.5px solid #E8DDD6",
        cursor: "pointer",
        transition: "background 0.15s, border-color 0.15s, color 0.15s",
        lineHeight: 1.5,
      }}
    >
      <span style={{ marginRight: 10, opacity: selected ? 1 : 0.4 }}>
        {selected ? "●" : "○"}
      </span>
      {label}
    </motion.button>
  );
}

// ─── Progress bar ────────────────────────────────────────────────────────────

function ProgressBar({ current, total }: { current: number; total: number }) {
  return (
    <div style={{ display: "flex", gap: 6, marginBottom: 40 }}>
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          style={{
            flex: 1,
            height: 3,
            borderRadius: 99,
            background: i < current ? "#C58A7A" : "#E8DDD6",
            transition: "background 0.4s",
          }}
        />
      ))}
    </div>
  );
}

// ─── Step slide animation ─────────────────────────────────────────────────────

const variants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 60 : -60,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -60 : 60,
    opacity: 0,
  }),
};

// ─── Main component ───────────────────────────────────────────────────────────

export default function GiftFlow() {
  const router = useRouter();
  const [step, setStep] = useState(0); // 0-indexed
  const [dir, setDir] = useState(1);
  const [answers, setAnswers] = useState<Answers>({});
  const [customText, setCustomText] = useState("");
  const [showCustomInput, setShowCustomInput] = useState(false);

  const q = QUESTIONS[step];
  const selected = answers[q.id];
  const canNext =
    !!selected || (showCustomInput && customText.trim().length > 0);

  function selectOption(label: string) {
    if (label === "직접 입력하기") {
      setShowCustomInput(true);
      setAnswers((prev) => ({ ...prev, [q.id]: "직접 입력하기" }));
    } else {
      setShowCustomInput(false);
      setAnswers((prev) => ({ ...prev, [q.id]: label }));
    }
  }

  function goNext() {
    if (!canNext) return;
    const finalAnswer =
      showCustomInput && customText.trim()
        ? customText.trim()
        : selected;
    setAnswers((prev) => ({ ...prev, [q.id]: finalAnswer ?? "" }));

    if (step < QUESTIONS.length - 1) {
      setDir(1);
      setStep((s) => s + 1);
      setShowCustomInput(false);
    } else {
      // Navigate to result page with all answers as query params
      const finalAnswers = { ...answers, [q.id]: finalAnswer ?? "" };
      const params = new URLSearchParams({
        q1: finalAnswers[1] || "",
        q2: finalAnswers[2] || "",
        q3: finalAnswers[3] || "",
        q4: finalAnswers[4] || "",
      });
      router.push(`/create/result?${params.toString()}`);
    }
  }

  function goBack() {
    if (step === 0) return;
    setDir(-1);
    setStep((s) => s - 1);
    setShowCustomInput(false);
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#FAF7F2",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Top bar */}
      <div
        style={{
          padding: "20px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: 640,
          width: "100%",
          margin: "0 auto",
        }}
      >
        <Link
          href="/"
          style={{
            fontSize: 20,
            fontWeight: 800,
            color: "#1F1B18",
            textDecoration: "none",
            letterSpacing: "-0.02em",
          }}
        >
          Gifit
        </Link>
        <span style={{ fontSize: 13, color: "#9C9189" }}>
          {step + 1} / {QUESTIONS.length}
        </span>
      </div>

      {/* Main content */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 24px 40px",
          maxWidth: 640,
          width: "100%",
          margin: "0 auto",
        }}
      >
        <ProgressBar current={step + 1} total={QUESTIONS.length} />

        <div style={{ overflow: "hidden" }}>
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={step}
              custom={dir}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: EASE }}
            >
              {/* Role tag */}
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: "#C58A7A",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: 14,
                }}
              >
                {q.role}
              </p>

              {/* Question */}
              <h2
                style={{
                  fontSize: "clamp(24px, 5vw, 32px)",
                  fontWeight: 700,
                  lineHeight: 1.35,
                  color: "#1F1B18",
                  letterSpacing: "-0.02em",
                  marginBottom: 32,
                  whiteSpace: "pre-line",
                }}
              >
                {q.question}
              </h2>

              {/* Options */}
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {q.options.map((opt) => (
                  <OptionButton
                    key={opt.label}
                    label={opt.label}
                    selected={selected === opt.label && !(showCustomInput && selected === "직접 입력하기" && opt.label !== "직접 입력하기")}
                    onClick={() => selectOption(opt.label)}
                  />
                ))}

                {/* "직접 입력하기" option for Q3 */}
                {q.allowCustom && (
                  <OptionButton
                    label="직접 입력하기"
                    selected={selected === "직접 입력하기"}
                    onClick={() => selectOption("직접 입력하기")}
                  />
                )}

                {/* Inline text input */}
                {showCustomInput && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.25 }}
                  >
                    <textarea
                      autoFocus
                      value={customText}
                      onChange={(e) => setCustomText(e.target.value)}
                      placeholder="어떤 계기인지 편하게 적어주세요."
                      rows={3}
                      style={{
                        width: "100%",
                        marginTop: 8,
                        padding: "14px 16px",
                        borderRadius: 14,
                        border: "1.5px solid #C58A7A",
                        background: "#FFFFFF",
                        fontSize: 15,
                        color: "#1F1B18",
                        resize: "none",
                        outline: "none",
                        lineHeight: 1.6,
                        fontFamily: "inherit",
                      }}
                    />
                  </motion.div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div
          style={{
            display: "flex",
            gap: 12,
            marginTop: 36,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {step > 0 ? (
            <motion.button
              onClick={goBack}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: "14px 24px",
                borderRadius: 50,
                background: "transparent",
                border: "1.5px solid #E8DDD6",
                color: "#7A7069",
                fontSize: 14,
                fontWeight: 500,
                cursor: "pointer",
              }}
            >
              ← 이전
            </motion.button>
          ) : (
            <div />
          )}

          <motion.button
            onClick={goNext}
            disabled={!canNext}
            whileHover={canNext ? { scale: 1.03 } : {}}
            whileTap={canNext ? { scale: 0.97 } : {}}
            style={{
              padding: "14px 36px",
              borderRadius: 50,
              background: canNext ? "#C58A7A" : "#E8DDD6",
              border: "none",
              color: canNext ? "#FFFFFF" : "#B0A59E",
              fontSize: 15,
              fontWeight: 600,
              cursor: canNext ? "pointer" : "not-allowed",
              transition: "background 0.2s, color 0.2s",
              letterSpacing: "-0.01em",
            }}
          >
            {step === QUESTIONS.length - 1 ? "큐레이션 시작하기" : "다음"}
          </motion.button>
        </div>
      </div>
    </div>
  );
}
