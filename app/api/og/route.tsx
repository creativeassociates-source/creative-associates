/* /app/api/og/route.tsx */
import { ImageResponse } from "next/og";

export const runtime = "edge"; // optional, but recommended

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const title = searchParams.get("title") ?? "Creative Associates";
  const category = searchParams.get("category") ?? "";
  const url = "https://creative-associates.jp";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #2563EB, #1D4ED8)",
          color: "white",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {category && (
          <div
            style={{
              fontSize: 32,
              opacity: 0.9,
              marginBottom: 10,
            }}
          >
            {category}
          </div>
        )}

        <div
          style={{
            fontSize: 64,
            fontWeight: "bold",
            lineHeight: 1.2,
            maxWidth: "1000px",
          }}
        >
          {title}
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 50,
            left: 80,
            fontSize: 28,
            opacity: 0.85,
          }}
        >
          {url}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
