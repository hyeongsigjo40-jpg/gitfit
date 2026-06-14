"use client";
import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: EASE },
});

function CurationCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.4, ease: EASE }}
      style={{
        background: "#FFFFFF",
        border: "1px solid #E8DDD6",
        borderRadius: 28,
        boxShadow: "0 24px 60px rgba(31,27,24,0.10), 0 4px 16px rgba(31,27,24,0.06)",
        padding: "32px 28px",
        maxWidth: 380,
        width: "100%",
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-2.5 mb-6">
        <div
          style={{ background: "#F0D8D1", borderRadius: 8, width: 32, height: 32 }}
          className="flex items-center justify-center text-sm"
        >
          ✦
        </div>
        <div>
          <p className="text-xs text-muted font-medium tracking-widest uppercase">Gifit</p>
          <p className="text-sm font-semibold text-foreground">큐레이션 결과</p>
        </div>
      </div>

      {/* Input Summary */}
      <div
        style={{
          background: "#FAF7F2",
          border: "1px solid #E8DDD6",
          borderRadius: 14,
          padding: "14px 16px",
          marginBottom: 20,
        }}
      >
        <p className="text-xs text-muted mb-2 font-medium">보내는 마음</p>
        <div className="flex flex-wrap gap-2">
          {["조용하고 차분한", "위로", "시험기간 중인 친구에게"].map((tag) => (
            <span
              key={tag}
              style={{
                background: "#F0D8D1",
                color: "#C58A7A",
                borderRadius: 20,
                padding: "3px 10px",
                fontSize: 12,
                fontWeight: 500,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Items */}
      <div className="flex flex-col gap-4">
        {/* Candle */}
        <div style={{ borderBottom: "1px solid #E8DDD6", paddingBottom: 16 }}>
          <div className="flex items-center gap-2 mb-2">
            <span style={{ fontSize: 16 }}>🕯</span>
            <span className="text-sm font-semibold text-foreground">차분한 우디 머스크 향</span>
          </div>
          <p className="text-xs leading-relaxed" style={{ color: "#7A7069" }}>
            "위로의 마음이라서, 잠깐이라도 숨을 고를 수 있는 향을 골랐어요."
          </p>
        </div>

        {/* Flower */}
        <div style={{ borderBottom: "1px solid #E8DDD6", paddingBottom: 16 }}>
          <div className="flex items-center gap-2 mb-2">
            <span style={{ fontSize: 16 }}>🌿</span>
            <span className="text-sm font-semibold text-foreground">프리저브드 라벤더</span>
          </div>
          <p className="text-xs leading-relaxed" style={{ color: "#7A7069" }}>
            "라벤더의 꽃말은 기다림과 평온. 이 시간이 평온하게 지나가길 바라는 마음을 담았어요."
          </p>
        </div>

        {/* Message Card */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span style={{ fontSize: 16 }}>💌</span>
            <span className="text-sm font-semibold text-foreground">메시지 카드</span>
          </div>
          <p className="text-xs leading-relaxed" style={{ color: "#7A7069" }}>
            "요즘 네 하루가 많이 무거워 보였어. 오늘은 버티기만 해도 충분해."
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#FAF7F2" }}
    >
      {/* Background decorations */}
      <div
        className="absolute top-0 right-0 pointer-events-none"
        style={{
          width: 600,
          height: 600,
          background: "radial-gradient(circle, #F0D8D1 0%, transparent 70%)",
          opacity: 0.45,
          transform: "translate(20%, -20%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 pointer-events-none"
        style={{
          width: 400,
          height: 400,
          background: "radial-gradient(circle, #E8DDD6 0%, transparent 70%)",
          opacity: 0.4,
          transform: "translate(-30%, 30%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div>
            <motion.div {...fadeUp(0.1)}>
              <span
                style={{
                  background: "#F0D8D1",
                  color: "#C58A7A",
                  borderRadius: 20,
                  padding: "6px 14px",
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  display: "inline-block",
                  marginBottom: 28,
                }}
              >
                Emotional Gifting
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.2)}
              style={{
                fontSize: "clamp(36px, 5vw, 56px)",
                fontWeight: 700,
                lineHeight: 1.2,
                color: "#1F1B18",
                marginBottom: 24,
                letterSpacing: "-0.02em",
              }}
            >
              선물은 물건보다,
              <br />
              <span style={{ color: "#C58A7A" }}>나를 생각했다는</span>
              <br />
              흔적에서 오래 남습니다.
            </motion.h1>

            <motion.p
              {...fadeUp(0.3)}
              style={{
                fontSize: "17px",
                lineHeight: 1.75,
                color: "#7A7069",
                maxWidth: 440,
                marginBottom: 40,
              }}
            >
              Gifit은 보내는 사람이 답한 감정과 분위기를 바탕으로
              향과 꽃말, 메시지 카드를 큐레이션해
              상대에게 오래 남는 선물 경험을 만들어줍니다.
            </motion.p>

            <motion.div {...fadeUp(0.4)} className="flex flex-col sm:flex-row gap-3" id="hero-cta">
              <motion.a
                href="/create"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  background: "#C58A7A",
                  color: "#FFFFFF",
                  borderRadius: 50,
                  padding: "16px 32px",
                  fontSize: 15,
                  fontWeight: 600,
                  border: "none",
                  cursor: "pointer",
                  letterSpacing: "-0.01em",
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                내 마음으로 선물 만들기
              </motion.a>
              <motion.a
                href="#flow"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  background: "transparent",
                  color: "#1F1B18",
                  borderRadius: 50,
                  padding: "16px 32px",
                  fontSize: 15,
                  fontWeight: 500,
                  border: "1.5px solid #E8DDD6",
                  cursor: "pointer",
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                패키지 과정 보기
              </motion.a>
            </motion.div>

            {/* Social proof */}
            <motion.div {...fadeUp(0.5)} className="flex items-center gap-4 mt-10">
              <div className="flex -space-x-2">
                {["#C58A7A", "#D4A69A", "#E8C0B6", "#F0D8D1"].map((bg, i) => (
                  <div
                    key={i}
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      background: bg,
                      border: "2px solid #FAF7F2",
                    }}
                  />
                ))}
              </div>
              <p style={{ fontSize: 13, color: "#7A7069" }}>
                <strong style={{ color: "#1F1B18" }}>2,400+</strong>명이 이미 마음을 전했어요
              </p>
            </motion.div>
          </div>

          {/* Right: Product card */}
          <div className="flex justify-center lg:justify-end relative">
            {/* Floating label top */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: EASE }}
              style={{
                position: "absolute",
                top: -12,
                left: -20,
                background: "#FFFFFF",
                border: "1px solid #E8DDD6",
                borderRadius: 12,
                padding: "8px 14px",
                boxShadow: "0 4px 16px rgba(31,27,24,0.08)",
                zIndex: 10,
              }}
              className="hidden lg:flex items-center gap-2"
            >
              <span style={{ fontSize: 13 }}>🌸</span>
              <span style={{ fontSize: 12, fontWeight: 500, color: "#7A7069" }}>이 꽃을 고른 이유</span>
            </motion.div>

            {/* Floating label bottom */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.0, ease: EASE }}
              style={{
                position: "absolute",
                bottom: 24,
                right: -16,
                background: "#FFFFFF",
                border: "1px solid #E8DDD6",
                borderRadius: 12,
                padding: "8px 14px",
                boxShadow: "0 4px 16px rgba(31,27,24,0.08)",
                zIndex: 10,
              }}
              className="hidden lg:flex items-center gap-2"
            >
              <span style={{ fontSize: 13 }}>🕯</span>
              <span style={{ fontSize: 12, fontWeight: 500, color: "#7A7069" }}>이 향을 고른 이유</span>
            </motion.div>

            <CurationCard />
          </div>
        </div>
      </div>
    </section>
  );
}
