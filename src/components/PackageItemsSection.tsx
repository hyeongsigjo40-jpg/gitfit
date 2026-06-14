"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import FadeUp from "./FadeUp";

const items = [
  {
    icon: "🌿",
    image: "/images/flower.png",
    title: "프리저브드 플라워",
    subtitle: "시들지 않는 생화",
    color: "#F0F7F0",
    accentColor: "#7DB87D",
    features: [
      "시들지 않는 생화로 1~3년 유지 가능",
      "일반 택배로 안전하게 배송 가능",
      "꽃말을 통해 선택 이유를 담을 수 있음",
      "오래 곁에 남는 감정적 오브제",
    ],
    quote: "받는 사람의 공간에 오래 남아 보내는 사람을 기억하게 합니다.",
  },
  {
    icon: "🕯",
    image: "/images/candle.png",
    title: "캔들 / 향",
    subtitle: "감정과 기억을 자극하는 매체",
    color: "#FFF5F2",
    accentColor: "#C58A7A",
    features: [
      "향은 가장 강력한 감각 기억 매체",
      "상대의 분위기를 닮은 향을 선택",
      "보내는 사람이 직접 고른 느낌",
      "사용할 때마다 그 사람이 떠오름",
    ],
    quote: "\"당신의 분위기를 닮은 향\"이라는 문장이 가능한 이유.",
  },
  {
    icon: "💌",
    image: "/images/message-card2.png",
    title: "메시지 카드",
    subtitle: "패키지의 감정적 핵심",
    color: "#FAF7F2",
    accentColor: "#9C8A7A",
    features: [
      "상품 설명이 아닌 선택 이유를 담음",
      "향과 꽃을 고른 이유가 한 문장으로",
      "보내는 사람의 고민 흔적이 담긴 카드",
      "\"이 사람이 나를 이렇게 생각했구나\"",
    ],
    quote: "카드가 없으면 그냥 꽃과 캔들. 카드가 있으면 그 사람의 마음.",
  },
];

export default function PackageItemsSection() {
  return (
    <section
      id="package"
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
              Fixed Package
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2
              style={{
                fontSize: "clamp(26px, 3.5vw, 40px)",
                fontWeight: 700,
                lineHeight: 1.3,
                color: "#1F1B18",
                letterSpacing: "-0.02em",
                marginBottom: 12,
              }}
            >
              세 가지 고정 패키지
            </h2>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p style={{ fontSize: 16, color: "#7A7069", lineHeight: 1.7 }}>
              각 아이템은 단독으로도 의미 있지만,
              세 가지가 함께할 때 비로소 완성됩니다.
            </p>
          </FadeUp>
        </div>

        {/* Featured package photo */}
        <FadeUp delay={0.2}>
          <div
            style={{
              position: "relative",
              width: "100%",
              borderRadius: 24,
              overflow: "hidden",
              aspectRatio: "16 / 7",
              marginBottom: 48,
              boxShadow: "0 8px 40px rgba(31,27,24,0.12)",
            }}
          >
            <Image
              src="/images/package-full.png"
              alt="Gifit 패키지 전체"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </FadeUp>

        {/* Items */}
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <FadeUp key={item.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E8DDD6",
                  borderRadius: 28,
                  overflow: "hidden",
                  boxShadow: "0 2px 16px rgba(31,27,24,0.06)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Top colored area */}
                <div
                  style={{
                    background: item.color,
                    padding: item.image ? 0 : "32px 28px 24px",
                    textAlign: "center",
                    position: "relative",
                  }}
                >
                  {item.image ? (
                    <>
                      <div style={{ position: "relative", width: "100%", aspectRatio: "4/3", overflow: "hidden" }}>
                        <Image src={item.image} alt={item.title} fill style={{ objectFit: "cover" }} />
                      </div>
                      <div style={{ padding: "20px 28px 18px" }}>
                        <h3 style={{ fontSize: 20, fontWeight: 700, color: "#1F1B18", marginBottom: 4 }}>
                          {item.title}
                        </h3>
                        <p style={{ fontSize: 13, color: "#7A7069" }}>{item.subtitle}</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div style={{ fontSize: 44, marginBottom: 12 }}>{item.icon}</div>
                      <h3 style={{ fontSize: 20, fontWeight: 700, color: "#1F1B18", marginBottom: 4 }}>
                        {item.title}
                      </h3>
                      <p style={{ fontSize: 13, color: "#7A7069" }}>{item.subtitle}</p>
                    </>
                  )}
                </div>

                {/* Features */}
                <div style={{ padding: "24px 28px", flex: 1 }}>
                  <ul className="flex flex-col gap-3 mb-5">
                    {item.features.map((feature, fi) => (
                      <li key={fi} className="flex items-start gap-2.5">
                        <span
                          style={{
                            color: item.accentColor,
                            fontWeight: 700,
                            fontSize: 14,
                            marginTop: 1,
                            flexShrink: 0,
                          }}
                        >
                          ✓
                        </span>
                        <span style={{ fontSize: 13, color: "#7A7069", lineHeight: 1.6 }}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div
                    style={{
                      background: "#FAF7F2",
                      borderRadius: 12,
                      padding: "14px 16px",
                      borderLeft: `3px solid ${item.accentColor}`,
                    }}
                  >
                    <p style={{ fontSize: 12, color: "#9C9189", lineHeight: 1.65, fontStyle: "italic" }}>
                      {item.quote}
                    </p>
                  </div>
                </div>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
