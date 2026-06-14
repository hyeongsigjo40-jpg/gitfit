"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeUp from "./FadeUp";

const faqs = [
  {
    q: "메시지는 직접 써야 하나요?",
    a: "아니요. Gifit이 보내는 사람이 입력한 감정과 분위기를 바탕으로 메시지 카드를 자동으로 생성합니다. 보내는 사람은 큐레이션 결과를 확인하고 승인만 하면 됩니다. 원하시면 직접 수정도 가능합니다.",
  },
  {
    q: "너무 오글거리지 않게 보낼 수 있나요?",
    a: "Gifit의 메시지는 과하게 감성적이지 않도록 설계되어 있습니다. 상대의 분위기와 상황에 맞게 차분하고 진심 어린 톤으로 작성되며, 부담스럽지 않은 방식으로 마음을 전달합니다.",
  },
  {
    q: "꽃은 시들지 않나요?",
    a: "Gifit은 프리저브드 플라워를 사용합니다. 프리저브드 플라워는 특수 처리된 생화로 일반 환경에서 1~3년 유지됩니다. 생화의 질감과 색감을 그대로 유지하면서도 시들지 않아 오랫동안 곁에 둘 수 있습니다.",
  },
  {
    q: "향은 어떻게 고르나요?",
    a: "보내는 사람이 입력한 감정과 상대의 분위기를 바탕으로 Gifit이 자동으로 향을 선택합니다. 예를 들어 위로의 마음이라면 차분한 우디 머스크, 응원의 마음이라면 밝고 상쾌한 시트러스 계열의 향이 선택됩니다.",
  },
  {
    q: "받는 사람에게 가격이 보이나요?",
    a: "아니요. 받는 사람에게는 패키지 내용물과 메시지 카드만 전달됩니다. 가격 정보는 카드에도, 패키지 어디에도 포함되지 않습니다.",
  },
  {
    q: "배송은 얼마나 걸리나요?",
    a: "주문 확정 후 영업일 기준 2~3일 이내 발송됩니다. 일반 택배로 배송되며, 프리저브드 플라워의 특성상 안전 포장이 적용됩니다. 배송비는 모든 패키지에 무료로 포함됩니다.",
  },
];

function FAQItem({ faq, index }: { faq: { q: string; a: string }; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <FadeUp delay={index * 0.06}>
      <div
        style={{
          border: "1px solid #E8DDD6",
          borderRadius: 16,
          overflow: "hidden",
          background: "#FFFFFF",
          boxShadow: "0 1px 6px rgba(31,27,24,0.04)",
        }}
      >
        <button
          onClick={() => setOpen(!open)}
          className="w-full text-left flex items-center justify-between gap-4"
          style={{ padding: "20px 24px" }}
        >
          <span style={{ fontSize: 15, fontWeight: 600, color: "#1F1B18", lineHeight: 1.5 }}>
            {faq.q}
          </span>
          <motion.span
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.2 }}
            style={{
              fontSize: 20,
              color: "#C58A7A",
              flexShrink: 0,
              fontWeight: 300,
            }}
          >
            +
          </motion.span>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              style={{ overflow: "hidden" }}
            >
              <div
                style={{
                  padding: "0 24px 20px",
                  borderTop: "1px solid #F0D8D1",
                  marginTop: 0,
                }}
              >
                <p style={{ fontSize: 14, lineHeight: 1.8, color: "#7A7069", paddingTop: 16 }}>
                  {faq.a}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </FadeUp>
  );
}

export default function FAQSection() {
  return (
    <section id="faq" style={{ background: "#FAF7F2" }} className="py-28 md:py-36">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <FadeUp>
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: "#C58A7A" }}
            >
              FAQ
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2
              style={{
                fontSize: "clamp(26px, 3.5vw, 38px)",
                fontWeight: 700,
                lineHeight: 1.3,
                color: "#1F1B18",
                letterSpacing: "-0.02em",
              }}
            >
              자주 묻는 질문
            </h2>
          </FadeUp>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
