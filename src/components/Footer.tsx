import Image from "next/image";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#1F1B18",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <Image
              src="/logo.png"
              alt="Gifit"
              width={80}
              height={54}
              style={{ objectFit: "contain", height: 54, width: "auto", filter: "brightness(0) invert(1)", marginBottom: 10 }}
            />
            <p
              style={{
                fontSize: 13,
                color: "#7A7069",
                lineHeight: 1.75,
              }}
            >
              보내는 사람의 마음을
              <br />
              향, 꽃말, 메시지 카드로 번역합니다.
            </p>
          </div>

          {/* Links */}
          <div>
            <p
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: "#9C9189",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: 14,
              }}
            >
              서비스
            </p>
            <ul className="flex flex-col gap-3">
              {["서비스 소개", "큐레이션 과정", "패키지 안내", "FAQ"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    style={{ fontSize: 14, color: "#7A7069" }}
                    className="hover:text-[#FAF7F2] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: "#9C9189",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: 14,
              }}
            >
              법적 고지
            </p>
            <ul className="flex flex-col gap-3">
              {["이용약관", "개인정보처리방침", "환불 정책"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    style={{ fontSize: 14, color: "#7A7069" }}
                    className="hover:text-[#FAF7F2] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            marginTop: 48,
            paddingTop: 24,
            display: "flex",
            flexDirection: "column",
            gap: 6,
          }}
        >
          <p style={{ fontSize: 12, color: "#544D48" }}>상호명: 주식회사 기핏 | 사업자등록번호: 000-00-00000</p>
          <p style={{ fontSize: 12, color: "#544D48" }}>통신판매업신고번호: 제0000-서울구로-0000호 | 대표자: 김기핏</p>
          <p style={{ fontSize: 12, color: "#544D48", marginTop: 4 }}>
            © 2026 Gifit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
