import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  const text = new URL(request.url).searchParams.get("text") ?? "";

  const [fontData, imgData] = await Promise.all([
    readFile(join(process.cwd(), "public/fonts/GowunBatang-Regular.ttf")),
    readFile(join(process.cwd(), "public/images/message-card-bg.png")),
  ]);

  const imgSrc = `data:image/png;base64,${imgData.toString("base64")}`;

  return new ImageResponse(
    (
      // Root must have explicit px dimensions for Satori to resolve child positions correctly
      <div style={{ width: 1254, height: 1254, display: "flex", position: "relative" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imgSrc}
          alt=""
          style={{ position: "absolute", top: 0, left: 0, width: 1254, height: 1254 }}
        />
        {/* Text safe zone: inset from the visible white paper, above the flower. */}
        <div
          style={{
            position: "absolute",
            top: 238,
            left: 238,
            width: 840,
            height: 700,
            fontFamily: "Gowun Batang",
            fontSize: 42,
            lineHeight: 1.75,
            color: "#3A3330",
            whiteSpace: "pre-wrap",
            overflow: "hidden",
            display: "flex",
            alignItems: "flex-start",
          }}
        >
          {text}
        </div>
      </div>
    ),
    {
      width: 1254,
      height: 1254,
      fonts: [
        {
          name: "Gowun Batang",
          data: fontData,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
