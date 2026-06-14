"use client";
import FadeUp from "./FadeUp";

const rows = [
  {
    label: "시작점",
    kakao: "상품 선택에서 시작",
    gifit: "감정과 분위기 입력에서 시작",
  },
  {
    label: "중심 가치",
    kakao: "빠른 전달 중심",
    gifit: "선택 이유 전달 중심",
  },
  {
    label: "메시지",
    kakao: "메시지는 부가 요소",
    gifit: "메시지 카드가 핵심",
  },
  {
    label: "구성",
    kakao: "단일 상품 중심",
    gifit: "향 + 꽃 + 카드의 고정 패키지",
  },
  {
    label: "받는 사람이 받는 것",
    kakao: "상품을 받음",
    gifit: "고민의 흔적을 받음",
  },
];

export default function DifferentiationSection() {
  return (
    <section
      id="comparison"
      style={{ background: "#1F1B18" }}
      className="py-28 md:py-36"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <FadeUp>
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: "#C58A7A" }}
            >
              Why Gifit
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2
              style={{
                fontSize: "clamp(22px, 3vw, 36px)",
                fontWeight: 700,
                lineHeight: 1.4,
                color: "#FAF7F2",
                letterSpacing: "-0.02em",
              }}
            >
              카카오 선물하기가 "무엇을 보낼까?"를 해결한다면,
              <br />
              <span style={{ color: "#C58A7A" }}>Gifit은 "왜 이 선물을 골랐는지"까지</span>
              <br />
              함께 전합니다.
            </h2>
          </FadeUp>
        </div>

        {/* Comparison table */}
        <FadeUp delay={0.2}>
          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 24,
              overflow: "hidden",
            }}
          >
            {/* Table header */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div style={{ padding: "16px 24px" }}>
                <p style={{ fontSize: 12, color: "#7A7069", fontWeight: 600 }}>구분</p>
              </div>
              <div
                style={{
                  padding: "16px 24px",
                  borderLeft: "1px solid rgba(255,255,255,0.08)",
                  background: "rgba(255,255,255,0.03)",
                }}
              >
                <p style={{ fontSize: 13, color: "#9C9189", fontWeight: 600 }}>기존 선물하기</p>
              </div>
              <div
                style={{
                  padding: "16px 24px",
                  borderLeft: "1px solid rgba(197,138,122,0.3)",
                  background: "rgba(197,138,122,0.08)",
                }}
              >
                <p style={{ fontSize: 13, color: "#C58A7A", fontWeight: 700 }}>Gifit ✦</p>
              </div>
            </div>

            {/* Rows */}
            {rows.map((row, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  borderBottom:
                    i < rows.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                }}
              >
                <div style={{ padding: "18px 24px" }}>
                  <p style={{ fontSize: 13, color: "#7A7069", fontWeight: 500 }}>{row.label}</p>
                </div>
                <div
                  style={{
                    padding: "18px 24px",
                    borderLeft: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <p style={{ fontSize: 13, color: "#7A7069", lineHeight: 1.6 }}>{row.kakao}</p>
                </div>
                <div
                  style={{
                    padding: "18px 24px",
                    borderLeft: "1px solid rgba(197,138,122,0.2)",
                    background: "rgba(197,138,122,0.05)",
                  }}
                >
                  <p style={{ fontSize: 13, color: "#F0D8D1", fontWeight: 600, lineHeight: 1.6 }}>
                    {row.gifit}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FadeUp>

        {/* Core claim */}
        <FadeUp delay={0.35}>
          <div className="text-center mt-12">
            <p
              style={{
                fontSize: "clamp(15px, 2vw, 18px)",
                lineHeight: 1.75,
                color: "#9C9189",
              }}
            >
              받는 사람은 캔들과 꽃을 받는 게 아니라,
              <br />
              <span style={{ color: "#F0D8D1", fontWeight: 600 }}>
                보내는 사람이 자신을 생각하며 거친 고민의 흔적
              </span>
              을 받는 것.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
