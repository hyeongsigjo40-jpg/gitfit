"use client";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { generateCuration, type CurationAnswers } from "@/data/curation";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: EASE },
});

export default function CurationResultView() {
  const params = useSearchParams();

  const answers: CurationAnswers = {
    q1: params.get("q1") || "",
    q2: params.get("q2") || "",
    q3: params.get("q3") || "",
    q4: params.get("q4") || "",
  };

  const hasAnswers = Object.values(answers).some((v) => v !== "");

  if (!hasAnswers) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#FAF7F2",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px 24px",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: 16, color: "#7A7069", marginBottom: 24 }}>
          아직 답변이 없어요.
        </p>
        <Link
          href="/create"
          style={{
            display: "inline-block",
            background: "#C58A7A",
            color: "#FFFFFF",
            borderRadius: 50,
            padding: "14px 32px",
            fontSize: 15,
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          내 마음으로 선물 만들기
        </Link>
      </div>
    );
  }

  const result = generateCuration(answers);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#FAF7F2",
      }}
    >
      {/* Top bar */}
      <div
        style={{
          padding: "20px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: 680,
          width: "100%",
          margin: "0 auto",
        }}
      >
        <Link href="/" style={{ display: "flex", alignItems: "center" }}>
          <Image src="/logo.png" alt="Gifit" width={60} height={40} style={{ objectFit: "contain", height: 40, width: "auto" }} />
        </Link>
        <Link
          href="/create"
          style={{
            fontSize: 13,
            color: "#9C9189",
            textDecoration: "none",
          }}
        >
          ← 다시 답하기
        </Link>
      </div>

      <div
        style={{
          maxWidth: 680,
          width: "100%",
          margin: "0 auto",
          padding: "20px 24px 80px",
        }}
      >
        {/* Header */}
        <motion.div {...fadeUp(0)} style={{ marginBottom: 36 }}>
          <div
            style={{
              width: 44,
              height: 44,
              background: "#F0D8D1",
              borderRadius: 13,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 20,
              marginBottom: 20,
            }}
          >
            ✦
          </div>
          <h1
            style={{
              fontSize: "clamp(24px, 4vw, 32px)",
              fontWeight: 700,
              color: "#1F1B18",
              lineHeight: 1.3,
              letterSpacing: "-0.02em",
              marginBottom: 10,
            }}
          >
            당신의 마음으로
            <br />
            이렇게 큐레이션됐어요.
          </h1>
          <p style={{ fontSize: 15, color: "#7A7069", lineHeight: 1.7 }}>
            보내기 전에 한 번 확인해보세요.
          </p>
        </motion.div>

        {/* Answers summary strip */}
        <motion.div
          {...fadeUp(0.1)}
          style={{
            background: "#FFFFFF",
            border: "1px solid #E8DDD6",
            borderRadius: 16,
            padding: "16px 20px",
            marginBottom: 24,
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
          }}
        >
          {[answers.q1, answers.q2, answers.q3, answers.q4]
            .filter(Boolean)
            .map((ans, i) => (
              <span
                key={i}
                style={{
                  background: "#FAF7F2",
                  border: "1px solid #E8DDD6",
                  borderRadius: 20,
                  padding: "4px 12px",
                  fontSize: 12,
                  color: "#7A7069",
                  fontWeight: 500,
                }}
              >
                {ans}
              </span>
            ))}
        </motion.div>

        {/* Scent */}
        <motion.div {...fadeUp(0.15)} style={{ marginBottom: 16 }}>
          <div
            style={{
              background: "#FFFFFF",
              border: "1px solid #E8DDD6",
              borderRadius: 20,
              padding: "24px",
              boxShadow: "0 2px 12px rgba(31,27,24,0.05)",
            }}
          >
            <div className="flex items-start gap-4">
              <div
                style={{
                  width: 48,
                  height: 48,
                  background: "#FFF8F5",
                  borderRadius: 14,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 22,
                  flexShrink: 0,
                }}
              >
                🕯
              </div>
              <div style={{ flex: 1 }}>
                <div className="flex items-center gap-2 flex-wrap mb-2">
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      color: "#C58A7A",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    선택된 향
                  </span>
                  <span
                    style={{
                      fontSize: 11,
                      color: "#9C9189",
                      background: "#FAF7F2",
                      borderRadius: 10,
                      padding: "2px 8px",
                      border: "1px solid #E8DDD6",
                    }}
                  >
                    {result.scent.family}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: "#1F1B18",
                    marginBottom: 8,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {result.scent.name}
                </p>
                <p style={{ fontSize: 14, color: "#7A7069", lineHeight: 1.7 }}>
                  {result.scent.shortDescription}
                </p>
                <div
                  style={{
                    marginTop: 12,
                    background: "#FAF7F2",
                    borderRadius: 10,
                    padding: "10px 12px",
                    borderLeft: "3px solid #C58A7A",
                  }}
                >
                  <p style={{ fontSize: 13, color: "#7A7069", lineHeight: 1.7, fontStyle: "italic" }}>
                    {result.scent.reason}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Flower */}
        <motion.div {...fadeUp(0.22)} style={{ marginBottom: 16 }}>
          <div
            style={{
              background: "#FFFFFF",
              border: "1px solid #E8DDD6",
              borderRadius: 20,
              padding: "24px",
              boxShadow: "0 2px 12px rgba(31,27,24,0.05)",
            }}
          >
            <div className="flex items-start gap-4">
              <div
                style={{
                  width: 48,
                  height: 48,
                  background: "#F5FFF5",
                  borderRadius: 14,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 22,
                  flexShrink: 0,
                }}
              >
                🌿
              </div>
              <div style={{ flex: 1 }}>
                <div className="flex items-center gap-2 flex-wrap mb-2">
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      color: "#C58A7A",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    선택된 꽃
                  </span>
                  <span
                    style={{
                      fontSize: 11,
                      color: "#9C9189",
                      background: "#FAF7F2",
                      borderRadius: 10,
                      padding: "2px 8px",
                      border: "1px solid #E8DDD6",
                    }}
                  >
                    꽃말: {result.flower.meaning}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: "#1F1B18",
                    marginBottom: 8,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {result.flower.name}
                </p>
                <div
                  style={{
                    marginTop: 4,
                    background: "#FAF7F2",
                    borderRadius: 10,
                    padding: "10px 12px",
                    borderLeft: "3px solid #C58A7A",
                  }}
                >
                  <p style={{ fontSize: 13, color: "#7A7069", lineHeight: 1.7, fontStyle: "italic" }}>
                    {result.flower.reason}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Message Card */}
        <motion.div {...fadeUp(0.3)} style={{ marginBottom: 32 }}>
          <div
            style={{
              borderRadius: 20,
              overflow: "hidden",
              boxShadow: "0 4px 24px rgba(31,27,24,0.12)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/api/card?text=${encodeURIComponent(result.messageCard)}`}
              alt="메시지 카드"
              style={{ width: "100%", display: "block" }}
            />
          </div>
          <p style={{ fontSize: 12, color: "#9C9189", lineHeight: 1.6, marginTop: 12, textAlign: "center" }}>
            왜 이 향과 꽃을 골랐는지, 그 이유만 담겨 있어요.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div {...fadeUp(0.38)}>
          <div
            style={{
              background: "#1F1B18",
              borderRadius: 24,
              padding: "28px 28px",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: 18,
                fontWeight: 700,
                color: "#FAF7F2",
                marginBottom: 8,
                lineHeight: 1.4,
              }}
            >
              이 큐레이션으로 선물을 보낼까요?
            </p>
            <p style={{ fontSize: 14, color: "#7A7069", marginBottom: 24, lineHeight: 1.7 }}>
              패키지를 선택하고 주문하면
              프리저브드 플라워, 향, 메시지 카드가 함께 배송됩니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <motion.a
                href="#"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "inline-block",
                  background: "#C58A7A",
                  color: "#FFFFFF",
                  borderRadius: 50,
                  padding: "14px 32px",
                  fontSize: 15,
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                이 선물로 주문하기
              </motion.a>
              <Link
                href="/create"
                style={{
                  display: "inline-block",
                  background: "transparent",
                  color: "#7A7069",
                  borderRadius: 50,
                  padding: "14px 32px",
                  fontSize: 14,
                  fontWeight: 500,
                  textDecoration: "none",
                  border: "1.5px solid rgba(255,255,255,0.15)",
                }}
              >
                다시 답하기
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
