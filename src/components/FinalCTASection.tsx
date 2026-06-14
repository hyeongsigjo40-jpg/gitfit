"use client";
import { motion } from "framer-motion";
import FadeUp from "./FadeUp";

export default function FinalCTASection() {
  return (
    <section
      id="cta"
      style={{ background: "#1F1B18" }}
      className="py-32 md:py-44"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {/* Decorative element */}
        <FadeUp>
          <div
            style={{
              width: 48,
              height: 48,
              background: "rgba(197,138,122,0.15)",
              border: "1px solid rgba(197,138,122,0.3)",
              borderRadius: 14,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 28px",
              fontSize: 22,
            }}
          >
            ✦
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2
            style={{
              fontSize: "clamp(30px, 5vw, 52px)",
              fontWeight: 700,
              lineHeight: 1.25,
              color: "#FAF7F2",
              letterSpacing: "-0.02em",
              marginBottom: 20,
            }}
          >
            그냥 선물이 아니라,
            <br />
            <span style={{ color: "#C58A7A" }}>당신이 그 사람을 떠올린 이유</span>를
            <br />
            보내세요.
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.75,
              color: "#7A7069",
              maxWidth: 480,
              margin: "0 auto 40px",
            }}
          >
            단 세 가지 질문에 답하면
            Gifit이 그 마음을 향, 꽃말, 메시지 카드로 번역합니다.
          </p>
        </FadeUp>

        <FadeUp delay={0.3}>
          <motion.a
            href="/create"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: "inline-block",
              background: "#C58A7A",
              color: "#FFFFFF",
              borderRadius: 50,
              padding: "18px 48px",
              fontSize: 16,
              fontWeight: 700,
              letterSpacing: "-0.01em",
              boxShadow: "0 8px 32px rgba(197,138,122,0.35)",
              textDecoration: "none",
            }}
          >
            내 마음으로 선물 만들기
          </motion.a>
        </FadeUp>

        <FadeUp delay={0.4}>
          <div className="flex items-center justify-center gap-8 mt-14">
            {[
              { icon: "🌿", text: "프리저브드 플라워" },
              { icon: "🕯", text: "캔들 / 향" },
              { icon: "💌", text: "메시지 카드" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2">
                <span style={{ fontSize: 16 }}>{item.icon}</span>
                <span style={{ fontSize: 13, color: "#7A7069" }}>{item.text}</span>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
