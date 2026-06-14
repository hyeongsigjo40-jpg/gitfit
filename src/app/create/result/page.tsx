import { Suspense } from "react";
import CurationResultView from "@/components/CurationResultView";

export const metadata = {
  title: "큐레이션 결과 — Gifit",
};

export default function ResultPage() {
  return (
    <Suspense
      fallback={
        <div
          style={{
            minHeight: "100vh",
            background: "#FAF7F2",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p style={{ fontSize: 15, color: "#9C9189" }}>큐레이션 중이에요...</p>
        </div>
      }
    >
      <CurationResultView />
    </Suspense>
  );
}
