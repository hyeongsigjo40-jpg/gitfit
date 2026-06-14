import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gifit — 보내는 사람의 마음을 담은 선물",
  description:
    "Gifit은 보내는 사람이 답한 감정과 분위기를 바탕으로 향과 꽃말, 메시지 카드를 큐레이션해 상대에게 오래 남는 선물 경험을 만들어줍니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
