"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import FadeUp from "./FadeUp";

export default function CurationExampleSection() {
  return (
    <section
      id="curation-example"
      style={{ background: "#1F1B18" }}
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
              Curation Example
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2
              style={{
                fontSize: "clamp(26px, 3.5vw, 40px)",
                fontWeight: 700,
                lineHeight: 1.3,
                color: "#FAF7F2",
                letterSpacing: "-0.02em",
              }}
            >
              실제로 이렇게 큐레이션됩니다
            </h2>
          </FadeUp>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Input card */}
          <FadeUp delay={0.15}>
            <div
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 24,
                overflow: "hidden",
              }}
            >
              {/* Product photo at top of input card */}
              <div style={{ position: "relative", width: "100%", aspectRatio: "4/3" }}>
                <Image
                  src="/images/package-open.png"
                  alt="Gifit 패키지 언박싱"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: "32px" }}>
              <p
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: "#C58A7A",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: 20,
                }}
              >
                보내는 사람의 입력
              </p>

              <div className="flex flex-col gap-5">
                {[
                  { label: "이 사람의 분위기는?", value: "조용하고 차분한" },
                  { label: "지금 전하고 싶은 마음은?", value: "위로" },
                  {
                    label: "이 선물을 보내는 계기가 있나요?",
                    value: "시험기간 내내 지쳐 보이는 친구에게",
                  },
                ].map((item) => (
                  <div key={item.label}>
                    <p
                      style={{
                        fontSize: 12,
                        color: "#7A7069",
                        marginBottom: 6,
                        fontWeight: 500,
                      }}
                    >
                      {item.label}
                    </p>
                    <div
                      style={{
                        background: "rgba(197,138,122,0.12)",
                        border: "1px solid rgba(197,138,122,0.2)",
                        borderRadius: 10,
                        padding: "10px 14px",
                        display: "inline-block",
                      }}
                    >
                      <p style={{ fontSize: 15, fontWeight: 600, color: "#F0D8D1" }}>
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              </div>
            </div>
          </FadeUp>

          {/* Curation result */}
          <div className="flex flex-col gap-5">
            {/* Candle */}
            <FadeUp delay={0.2}>
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                style={{
                  background: "#FFFFFF",
                  borderRadius: 20,
                  padding: "24px",
                  boxShadow: "0 4px 24px rgba(31,27,24,0.15)",
                }}
              >
                <div className="flex items-start gap-3">
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      background: "#FFF5F2",
                      borderRadius: 12,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 20,
                      flexShrink: 0,
                    }}
                  >
                    🕯
                  </div>
                  <div>
                    <p style={{ fontSize: 12, color: "#9C9189", marginBottom: 4 }}>선택된 향</p>
                    <p style={{ fontSize: 16, fontWeight: 700, color: "#1F1B18", marginBottom: 8 }}>
                      차분한 우디 머스크 향
                    </p>
                    <p style={{ fontSize: 13, lineHeight: 1.65, color: "#7A7069" }}>
                      "당신이 전하고 싶은 마음이 위로라서, 잠깐이라도 숨을 고를 수 있는 차분한 우디 머스크 향을 골랐어요."
                    </p>
                  </div>
                </div>
              </motion.div>
            </FadeUp>

            {/* Flower */}
            <FadeUp delay={0.3}>
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                style={{
                  background: "#FFFFFF",
                  borderRadius: 20,
                  padding: "24px",
                  boxShadow: "0 4px 24px rgba(31,27,24,0.15)",
                }}
              >
                <div className="flex items-start gap-3">
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      background: "#F5FFF5",
                      borderRadius: 12,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 20,
                      flexShrink: 0,
                    }}
                  >
                    🌿
                  </div>
                  <div>
                    <p style={{ fontSize: 12, color: "#9C9189", marginBottom: 4 }}>선택된 꽃</p>
                    <p style={{ fontSize: 16, fontWeight: 700, color: "#1F1B18", marginBottom: 8 }}>
                      프리저브드 라벤더
                    </p>
                    <p style={{ fontSize: 13, lineHeight: 1.65, color: "#7A7069" }}>
                      "라벤더의 꽃말은 기다림과 평온입니다. 지금의 시간을 무사히 지나가길 바라는 마음을 담았어요."
                    </p>
                  </div>
                </div>
              </motion.div>
            </FadeUp>

            {/* Message card */}
            <FadeUp delay={0.4}>
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                style={{
                  background: "linear-gradient(135deg, #FAF7F2 0%, #F0D8D1 100%)",
                  border: "1.5px solid #E8DDD6",
                  borderRadius: 20,
                  padding: "24px",
                  boxShadow: "0 4px 24px rgba(31,27,24,0.10)",
                }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span style={{ fontSize: 18 }}>💌</span>
                  <p style={{ fontSize: 12, color: "#9C9189", fontWeight: 600 }}>메시지 카드</p>
                </div>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.85,
                    color: "#1F1B18",
                    fontWeight: 500,
                  }}
                >
                  "요즘 네 하루가 많이 무거워 보였어.
                  <br />
                  이 향은 네가 잠깐이라도 숨을 고를 수 있었으면 해서,
                  <br />
                  이 꽃은 네 시간이 조금 더 평온해졌으면 해서 골랐어.
                  <br />
                  <br />
                  지금은 괜찮지 않아도 돼.
                  <br />
                  오늘은 버티기만 해도 충분해."
                </p>
              </motion.div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
