"use client";
import { motion } from "framer-motion";
import FadeUp from "./FadeUp";

const steps = [
  {
    number: "01",
    title: "감정 입력",
    description:
      "상대의 분위기, 전하고 싶은 마음, 선물을 보내는 계기를 입력합니다.",
    detail: "밝고 활기찬 / 위로 / 시험기간 중인 친구에게",
    icon: "✍️",
  },
  {
    number: "02",
    title: "큐레이션",
    description:
      "Gifit이 그 감정을 분석해 향과 꽃말을 연결하고, 선택 이유를 생성합니다.",
    detail: "\"위로의 마음이라서, 이 향을 골랐어요.\"",
    icon: "✦",
  },
  {
    number: "03",
    title: "승인과 주문",
    description:
      "큐레이션 결과를 확인하고 보내는 사람이 직접 최종 승인 후 주문합니다.",
    detail: "메시지 카드 미리보기 포함",
    icon: "✓",
  },
  {
    number: "04",
    title: "수령",
    description:
      "받는 사람은 향, 프리저브드 플라워, 메시지 카드를 한 패키지로 받습니다.",
    detail: "선택의 이유가 담긴 카드와 함께",
    icon: "🎁",
  },
];

export default function ServiceFlowSection() {
  return (
    <section id="flow" style={{ background: "#FDFAF7" }} className="py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <FadeUp>
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: "#C58A7A" }}
            >
              Service Flow
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2
              style={{
                fontSize: "clamp(28px, 3.5vw, 42px)",
                fontWeight: 700,
                lineHeight: 1.25,
                color: "#1F1B18",
                letterSpacing: "-0.02em",
              }}
            >
              네 단계로 완성되는
              <br />
              나만의 선물
            </h2>
          </FadeUp>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <FadeUp key={step.number} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E8DDD6",
                  borderRadius: 24,
                  padding: "28px 24px",
                  height: "100%",
                  boxShadow: "0 2px 12px rgba(31,27,24,0.05)",
                  cursor: "default",
                }}
              >
                {/* Step number + icon */}
                <div className="flex items-center justify-between mb-5">
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      color: "#C58A7A",
                      letterSpacing: "0.08em",
                    }}
                  >
                    STEP {step.number}
                  </span>
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      background: "#F0D8D1",
                      borderRadius: 10,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 16,
                    }}
                  >
                    {step.icon}
                  </div>
                </div>

                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: "#1F1B18",
                    marginBottom: 10,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {step.title}
                </h3>

                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.7,
                    color: "#7A7069",
                    marginBottom: 16,
                  }}
                >
                  {step.description}
                </p>

                <div
                  style={{
                    background: "#FAF7F2",
                    borderRadius: 10,
                    padding: "10px 12px",
                  }}
                >
                  <p
                    style={{
                      fontSize: 13,
                      color: "#9C9189",
                      fontFamily: step.number === "02" || step.number === "03" ? "var(--font-gowun)" : undefined,
                      fontStyle: step.number === "02" ? "italic" : undefined,
                      lineHeight: 1.7,
                    }}
                  >
                    {step.detail}
                  </p>
                </div>
              </motion.div>
            </FadeUp>
          ))}
        </div>

        {/* Connector line (desktop only) */}
        <FadeUp delay={0.5}>
          <div className="hidden lg:flex justify-center mt-10">
            <p style={{ fontSize: 14, color: "#9C9189" }}>
              보내는 사람의 마음 → 큐레이션 → 승인 → 받는 사람의 기억
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
