"use client";
import FadeUp from "./FadeUp";

const painPoints = [
  {
    icon: "☕",
    text: "커피 쿠폰은 너무 가볍고",
  },
  {
    icon: "🎁",
    text: "비싼 선물은 오히려 과해 보이고",
  },
  {
    icon: "✉️",
    text: "긴 메시지는 부담스럽게 느껴질 때가 있습니다.",
  },
];

export default function ProblemSection() {
  return (
    <section
      id="problem"
      style={{ background: "#1F1B18" }}
      className="py-28 md:py-36"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <FadeUp>
          <p className="text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: "#C58A7A" }}>
            The Problem
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 700,
              lineHeight: 1.3,
              color: "#FAF7F2",
              letterSpacing: "-0.02em",
              marginBottom: 24,
            }}
          >
            우리는 선물을 고르지 못해서가 아니라,
            <br />
            <span style={{ color: "#C58A7A" }}>왜 이 선물을 골랐는지</span> 전하지 못해서
            <br />
            아쉬웠습니다.
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div
            style={{
              width: 48,
              height: 2,
              background: "#C58A7A",
              borderRadius: 2,
              margin: "0 auto 40px",
            }}
          />
        </FadeUp>

        {/* Pain points */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          {painPoints.map((point, i) => (
            <FadeUp key={i} delay={0.15 + i * 0.1}>
              <div
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 16,
                  padding: "20px 24px",
                  textAlign: "center",
                }}
              >
                <span style={{ fontSize: 28, display: "block", marginBottom: 10 }}>{point.icon}</span>
                <p style={{ fontSize: 14, color: "#9C9189", lineHeight: 1.6 }}>{point.text}</p>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Core insight */}
        <FadeUp delay={0.4}>
          <div
            style={{
              background: "rgba(197,138,122,0.08)",
              border: "1px solid rgba(197,138,122,0.2)",
              borderRadius: 20,
              padding: "36px 40px",
              maxWidth: 680,
              margin: "0 auto",
            }}
          >
            <p
              style={{
                fontSize: "clamp(16px, 2.5vw, 20px)",
                lineHeight: 1.7,
                color: "#FAF7F2",
                fontWeight: 500,
              }}
            >
              진짜 어려운 건 상품 선택이 아니라
              <br />
              상대가{" "}
              <span
                style={{
                  color: "#C58A7A",
                  fontWeight: 700,
                  fontStyle: "italic",
                }}
              >
                "나를 생각해서 골랐구나"
              </span>
              라고
              <br />
              느끼게 만드는 방식입니다.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
