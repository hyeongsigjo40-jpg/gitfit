"use client";
import { motion } from "framer-motion";
import FadeUp from "./FadeUp";
import { generateCuration } from "@/data/curation";

const EXAMPLE_ANSWERS = {
  q1: "편하게 숨 쉴 수 있어요",
  q2: "잠깐이라도 쉬게 해주고 싶어요",
  q3: "요즘 유난히 지쳐 보여서",
  q4: "부담스럽지 않게, 담백하게",
};

const RESULT = generateCuration(EXAMPLE_ANSWERS);

const QA_ITEMS = [
  { label: "이 사람과 함께 있으면?", answer: EXAMPLE_ANSWERS.q1, role: "향의 분위기" },
  { label: "그 사람에게 돌려주고 싶은 마음?", answer: EXAMPLE_ANSWERS.q2, role: "꽃말 방향" },
  { label: "왜 지금 전하고 싶어졌나요?", answer: EXAMPLE_ANSWERS.q3, role: "카드 맥락" },
  { label: "어떤 온도로 닿았으면 하나요?", answer: EXAMPLE_ANSWERS.q4, role: "메시지 문체" },
];

export default function CurationLogicSection() {
  return (
    <section
      id="curation-logic"
      style={{ background: "#FAF7F2" }}
      className="py-28 md:py-36"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeUp>
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: "#C58A7A" }}
            >
              How It Works
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2
              style={{
                fontSize: "clamp(26px, 3.5vw, 42px)",
                fontWeight: 700,
                lineHeight: 1.3,
                color: "#1F1B18",
                letterSpacing: "-0.02em",
                marginBottom: 14,
              }}
            >
              질문에 답하면,
              <br />
              향과 꽃말이 하나의 메시지가 됩니다.
            </h2>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.75,
                color: "#7A7069",
                maxWidth: 520,
                margin: "0 auto",
              }}
            >
              Gifit은 보내는 사람의 답변을 바탕으로 향의 분위기와 꽃말을 고르고,
              그 선택의 이유를 메시지 카드로 엮어 전달합니다.
            </p>
          </FadeUp>
        </div>

        {/* Two-panel layout */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left: Q&A */}
          <div className="flex flex-col gap-4">
            <FadeUp delay={0.05}>
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: "#9C9189",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: 4,
                }}
              >
                보내는 사람의 답변
              </p>
            </FadeUp>

            {QA_ITEMS.map((item, i) => (
              <FadeUp key={i} delay={0.1 + i * 0.08}>
                <div
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #E8DDD6",
                    borderRadius: 16,
                    padding: "18px 20px",
                    display: "flex",
                    gap: 14,
                    alignItems: "flex-start",
                    boxShadow: "0 1px 6px rgba(31,27,24,0.04)",
                  }}
                >
                  {/* Step number */}
                  <div
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: 8,
                      background: "#F0D8D1",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 12,
                      fontWeight: 700,
                      color: "#C58A7A",
                      flexShrink: 0,
                      marginTop: 1,
                    }}
                  >
                    Q{i + 1}
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: 12, color: "#9C9189", marginBottom: 4 }}>
                      {item.label}
                    </p>
                    <p style={{ fontSize: 15, fontWeight: 600, color: "#1F1B18", lineHeight: 1.4 }}>
                      {item.answer}
                    </p>
                    <span
                      style={{
                        display: "inline-block",
                        marginTop: 6,
                        fontSize: 11,
                        color: "#C58A7A",
                        background: "#F0D8D1",
                        borderRadius: 20,
                        padding: "2px 8px",
                        fontWeight: 500,
                      }}
                    >
                      → {item.role}
                    </span>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Right: Result */}
          <div className="flex flex-col gap-4">
            <FadeUp delay={0.05}>
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: "#9C9189",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: 4,
                }}
              >
                Gifit 큐레이션 결과
              </p>
            </FadeUp>

            {/* Scent card */}
            <FadeUp delay={0.18}>
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E8DDD6",
                  borderRadius: 16,
                  padding: "20px",
                  boxShadow: "0 2px 12px rgba(31,27,24,0.05)",
                }}
              >
                <div className="flex items-start gap-3">
                  <div
                    style={{
                      width: 38,
                      height: 38,
                      background: "#FFF8F5",
                      borderRadius: 10,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 18,
                      flexShrink: 0,
                    }}
                  >
                    🕯
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <p style={{ fontSize: 11, color: "#9C9189", fontWeight: 500 }}>선택된 향</p>
                      <span
                        style={{
                          fontSize: 10,
                          color: "#9C9189",
                          background: "#FAF7F2",
                          borderRadius: 10,
                          padding: "1px 7px",
                          border: "1px solid #E8DDD6",
                        }}
                      >
                        {RESULT.scent.family}
                      </span>
                    </div>
                    <p style={{ fontSize: 16, fontWeight: 700, color: "#1F1B18", marginBottom: 6 }}>
                      {RESULT.scent.name}
                    </p>
                    <p style={{ fontSize: 13, color: "#7A7069", lineHeight: 1.65 }}>
                      {RESULT.scent.reason}
                    </p>
                  </div>
                </div>
              </motion.div>
            </FadeUp>

            {/* Flower card */}
            <FadeUp delay={0.26}>
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E8DDD6",
                  borderRadius: 16,
                  padding: "20px",
                  boxShadow: "0 2px 12px rgba(31,27,24,0.05)",
                }}
              >
                <div className="flex items-start gap-3">
                  <div
                    style={{
                      width: 38,
                      height: 38,
                      background: "#F5FFF5",
                      borderRadius: 10,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 18,
                      flexShrink: 0,
                    }}
                  >
                    🌿
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <p style={{ fontSize: 11, color: "#9C9189", fontWeight: 500 }}>선택된 꽃</p>
                      <span
                        style={{
                          fontSize: 10,
                          color: "#9C9189",
                          background: "#FAF7F2",
                          borderRadius: 10,
                          padding: "1px 7px",
                          border: "1px solid #E8DDD6",
                        }}
                      >
                        꽃말: {RESULT.flower.meaning}
                      </span>
                    </div>
                    <p style={{ fontSize: 16, fontWeight: 700, color: "#1F1B18", marginBottom: 6 }}>
                      {RESULT.flower.name}
                    </p>
                    <p style={{ fontSize: 13, color: "#7A7069", lineHeight: 1.65 }}>
                      {RESULT.flower.reason}
                    </p>
                  </div>
                </div>
              </motion.div>
            </FadeUp>

            {/* Message card */}
            <FadeUp delay={0.34}>
              <div
                style={{
                  borderRadius: 16,
                  overflow: "hidden",
                  boxShadow: "0 4px 24px rgba(31,27,24,0.12)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/api/card?text=${encodeURIComponent(RESULT.messageCard)}`}
                  alt="메시지 카드"
                  style={{ width: "100%", display: "block" }}
                />
              </div>
            </FadeUp>
          </div>
        </div>

        {/* Bottom CTA */}
        <FadeUp delay={0.4}>
          <div className="text-center mt-16">
            <p style={{ fontSize: 14, color: "#9C9189", marginBottom: 16 }}>
              위 결과는 예시입니다. 당신의 답변에 따라 다른 향과 꽃이 선택됩니다.
            </p>
            <motion.a
              href="/create"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-block",
                background: "#C58A7A",
                color: "#FFFFFF",
                borderRadius: 50,
                padding: "14px 36px",
                fontSize: 15,
                fontWeight: 600,
                textDecoration: "none",
                letterSpacing: "-0.01em",
              }}
            >
              내 마음으로 직접 만들어보기
            </motion.a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
