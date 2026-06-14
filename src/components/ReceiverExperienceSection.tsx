"use client";
import Image from "next/image";
import FadeUp from "./FadeUp";

export default function ReceiverExperienceSection() {
  return (
    <section
      id="receiver"
      style={{
        background: "linear-gradient(160deg, #F0D8D1 0%, #FAF7F2 50%, #E8DDD6 100%)",
      }}
      className="py-28 md:py-36"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Quote and copy */}
          <div>
            <FadeUp>
              <p
                className="text-xs font-semibold tracking-widest uppercase mb-6"
                style={{ color: "#C58A7A" }}
              >
                Receiver Experience
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
                  marginBottom: 20,
                }}
              >
                받는 사람은 상품이 아니라,
                <br />
                <span style={{ color: "#C58A7A" }}>선택의 이유</span>를 받습니다.
              </h2>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p
                style={{
                  fontSize: 16,
                  lineHeight: 1.8,
                  color: "#7A7069",
                  marginBottom: 32,
                }}
              >
                카드에는 상품 설명이 적히지 않습니다.
                <br />
                보내는 사람이 어떤 마음으로 답했고,
                <br />
                Gifit이 왜 이 향과 꽃을 골랐는지,
                <br />
                그 고민의 흔적이 하나의 문장으로 담깁니다.
              </p>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                {[
                  "향을 피울 때마다 그 사람이 생각나는 이유",
                  "꽃이 시들지 않는 것처럼 마음도 오래 남는 이유",
                  "받은 카드를 몇 번이고 다시 읽게 되는 이유",
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span
                      style={{
                        width: 20,
                        height: 20,
                        background: "#C58A7A",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: 2,
                      }}
                    >
                      <span style={{ color: "white", fontSize: 11, fontWeight: 700 }}>✓</span>
                    </span>
                    <p style={{ fontSize: 14, color: "#1F1B18", lineHeight: 1.6 }}>{text}</p>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>

          {/* Right: Receiver moment card */}
          <FadeUp delay={0.2}>
            <div
              style={{
                background: "#FFFFFF",
                border: "1px solid #E8DDD6",
                borderRadius: 28,
                padding: "36px 32px",
                boxShadow: "0 16px 48px rgba(31,27,24,0.10)",
              }}
            >
              {/* Message card photo */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  borderRadius: 18,
                  overflow: "hidden",
                  aspectRatio: "4 / 3",
                  marginBottom: 20,
                }}
              >
                <Image
                  src="/images/message-card.png"
                  alt="메시지 카드를 받는 순간"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* Reaction */}
              <div
                style={{
                  background: "linear-gradient(135deg, #F0D8D1 0%, #FAF7F2 100%)",
                  borderRadius: 16,
                  padding: "20px 22px",
                  marginBottom: 20,
                }}
              >
                <p
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    color: "#1F1B18",
                    lineHeight: 1.6,
                    fontStyle: "italic",
                  }}
                >
                  "이 사람이 나를
                  <br />
                  이렇게 생각했구나."
                </p>
              </div>

              <div
                style={{
                  borderTop: "1px solid #E8DDD6",
                  paddingTop: 16,
                }}
              >
                <p style={{ fontSize: 13, color: "#9C9189", lineHeight: 1.65 }}>
                  선물이 상품이 아니라 마음으로 기억될 때,
                  <br />
                  그 경험은 오래 남습니다.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
