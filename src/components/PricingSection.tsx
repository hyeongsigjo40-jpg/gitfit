"use client";
import { motion } from "framer-motion";
import FadeUp from "./FadeUp";

const tiers = [
  {
    name: "Basic",
    nameKr: "기본 패키지",
    price: "19,900",
    highlight: false,
    features: [
      "프리저브드 플라워",
      "메시지 카드",
      "기본 감정 큐레이션",
    ],
    note: "마음을 전하는 첫 번째 선택",
  },
  {
    name: "Standard",
    nameKr: "스탠다드 패키지",
    price: "29,900",
    highlight: true,
    recommended: true,
    features: [
      "프리저브드 플라워",
      "캔들 / 향",
      "메시지 카드",
      "감정별 패키지 포장",
    ],
    note: "향과 꽃이 함께할 때 완성되는 경험",
  },
  {
    name: "Premium",
    nameKr: "프리미엄 패키지",
    price: "39,900",
    highlight: false,
    features: [
      "프리저브드 플라워",
      "프리미엄 캔들 / 향",
      "메시지 카드",
      "선택 이유 카드",
      "프리미엄 포장",
    ],
    note: "고민의 흔적까지 정성스럽게",
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" style={{ background: "#FAF7F2" }} className="py-28 md:py-36">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeUp>
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: "#C58A7A" }}
            >
              Pricing
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
              세 가지 패키지 중에서 선택하세요
            </h2>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p style={{ fontSize: 15, color: "#7A7069" }}>
              모든 패키지에 감정 큐레이션이 포함됩니다.
            </p>
          </FadeUp>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <FadeUp key={tier.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                style={{
                  background: tier.highlight ? "#1F1B18" : "#FFFFFF",
                  border: tier.highlight ? "1.5px solid #C58A7A" : "1px solid #E8DDD6",
                  borderRadius: 28,
                  padding: "32px 28px",
                  position: "relative",
                  boxShadow: tier.highlight
                    ? "0 20px 48px rgba(197,138,122,0.2)"
                    : "0 2px 16px rgba(31,27,24,0.05)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Recommended badge */}
                {tier.recommended && (
                  <div
                    style={{
                      position: "absolute",
                      top: -12,
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "#C58A7A",
                      color: "white",
                      borderRadius: 20,
                      padding: "4px 16px",
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.05em",
                      whiteSpace: "nowrap",
                    }}
                  >
                    MOST POPULAR
                  </div>
                )}

                {/* Tier name */}
                <div style={{ marginBottom: 20 }}>
                  <p
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      color: tier.highlight ? "#C58A7A" : "#9C9189",
                      textTransform: "uppercase",
                      marginBottom: 4,
                    }}
                  >
                    {tier.name}
                  </p>
                  <p
                    style={{
                      fontSize: 15,
                      fontWeight: 600,
                      color: tier.highlight ? "#FAF7F2" : "#1F1B18",
                    }}
                  >
                    {tier.nameKr}
                  </p>
                </div>

                {/* Price */}
                <div style={{ marginBottom: 24 }}>
                  <div className="flex items-end gap-1">
                    <span
                      style={{
                        fontSize: 38,
                        fontWeight: 800,
                        color: tier.highlight ? "#FAF7F2" : "#1F1B18",
                        letterSpacing: "-0.03em",
                        lineHeight: 1,
                      }}
                    >
                      {tier.price}
                    </span>
                    <span
                      style={{
                        fontSize: 15,
                        color: tier.highlight ? "#9C8A7A" : "#7A7069",
                        marginBottom: 4,
                      }}
                    >
                      원
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: 12,
                      color: tier.highlight ? "#7A7069" : "#9C9189",
                      marginTop: 4,
                    }}
                  >
                    배송비 포함 · 무료 배송
                  </p>
                </div>

                {/* Features */}
                <ul className="flex flex-col gap-3 mb-6 flex-1">
                  {tier.features.map((feature, fi) => (
                    <li key={fi} className="flex items-center gap-2.5">
                      <span
                        style={{
                          color: tier.highlight ? "#C58A7A" : "#C58A7A",
                          fontWeight: 700,
                          fontSize: 14,
                        }}
                      >
                        ✓
                      </span>
                      <span
                        style={{
                          fontSize: 14,
                          color: tier.highlight ? "#E8DDD6" : "#7A7069",
                        }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Note */}
                <p
                  style={{
                    fontSize: 12,
                    color: tier.highlight ? "#7A7069" : "#9C9189",
                    marginBottom: 20,
                    fontStyle: "italic",
                    lineHeight: 1.6,
                  }}
                >
                  {tier.note}
                </p>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    width: "100%",
                    padding: "14px 0",
                    borderRadius: 14,
                    fontSize: 14,
                    fontWeight: 600,
                    background: tier.highlight ? "#C58A7A" : "transparent",
                    color: tier.highlight ? "#FFFFFF" : "#1F1B18",
                    border: tier.highlight ? "none" : "1.5px solid #E8DDD6",
                    cursor: "pointer",
                  }}
                >
                  이 패키지로 선물하기
                </motion.button>
              </motion.div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.4}>
          <p className="text-center mt-10" style={{ fontSize: 13, color: "#9C9189" }}>
            모든 패키지는 보내는 사람의 감정 입력을 기반으로 큐레이션됩니다.
            <br />
            가격에 상관없이 선택의 이유는 항상 카드에 담깁니다.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
