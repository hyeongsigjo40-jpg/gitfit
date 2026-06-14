"use client";
import FadeUp from "./FadeUp";

const translationSteps = [
  {
    from: "조용하고 차분한 분위기",
    arrow: "→",
    to: "우디 머스크 향",
    icon: "🕯",
  },
  {
    from: "위로의 마음",
    arrow: "→",
    to: "라벤더의 꽃말 — 기다림과 평온",
    icon: "🌿",
  },
  {
    from: "그 고민의 흔적",
    arrow: "→",
    to: "메시지 카드 한 장",
    icon: "💌",
  },
];

export default function SolutionSection() {
  return (
    <section id="solution" style={{ background: "#FAF7F2" }} className="py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Copy */}
          <div>
            <FadeUp>
              <p
                className="text-xs font-semibold tracking-widest uppercase mb-6"
                style={{ color: "#C58A7A" }}
              >
                The Solution
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
                  marginBottom: 24,
                }}
              >
                Gifit은 보내는 사람의 마음을
                <br />
                <span style={{ color: "#C58A7A" }}>향, 꽃말, 메시지 카드</span>로
                <br />
                번역합니다.
              </h2>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p
                style={{
                  fontSize: 17,
                  lineHeight: 1.75,
                  color: "#7A7069",
                  marginBottom: 32,
                }}
              >
                보내는 사람이 상대의 분위기와 전하고 싶은 마음을 입력하면
                Gifit은 그 마음에 맞는 향과 프리저브드 플라워를 고르고,
                그 선택의 이유를 하나의 메시지 카드로 엮어 전달합니다.
              </p>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div
                style={{
                  background: "#F0D8D1",
                  borderRadius: 16,
                  padding: "20px 24px",
                  display: "inline-block",
                }}
              >
                <p
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: "#C58A7A",
                    lineHeight: 1.6,
                    fontStyle: "italic",
                  }}
                >
                  "캔들과 꽃이 아니라,
                  <br />
                  당신을 떠올린 이유를 보냅니다."
                </p>
              </div>
            </FadeUp>
          </div>

          {/* Right: Translation visual */}
          <div className="flex flex-col gap-4">
            {translationSteps.map((step, i) => (
              <FadeUp key={i} delay={0.1 + i * 0.12}>
                <div
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #E8DDD6",
                    borderRadius: 20,
                    padding: "22px 24px",
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    boxShadow: "0 2px 12px rgba(31,27,24,0.05)",
                  }}
                >
                  <span style={{ fontSize: 28, flexShrink: 0 }}>{step.icon}</span>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: 13, color: "#9C9189", marginBottom: 6 }}>{step.from}</p>
                    <div className="flex items-center gap-2">
                      <span style={{ fontSize: 12, color: "#C58A7A", fontWeight: 700 }}>
                        {step.arrow}
                      </span>
                      <p style={{ fontSize: 15, fontWeight: 600, color: "#1F1B18" }}>{step.to}</p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}

            <FadeUp delay={0.5}>
              <div
                style={{
                  background: "linear-gradient(135deg, #F0D8D1 0%, #FAF7F2 100%)",
                  border: "1px solid #E8DDD6",
                  borderRadius: 20,
                  padding: "22px 24px",
                  marginTop: 4,
                }}
              >
                <p style={{ fontSize: 13, color: "#7A7069", marginBottom: 6, fontWeight: 500 }}>
                  받는 사람이 느끼는 것
                </p>
                <p style={{ fontSize: 16, fontWeight: 700, color: "#1F1B18", lineHeight: 1.5 }}>
                  "이 사람이 나를 이렇게 생각했구나."
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
