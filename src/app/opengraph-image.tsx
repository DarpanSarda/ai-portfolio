import { ImageResponse } from "next/og";

export const alt = "Darpan Sarda — AI / GenAI Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, background: "#f5f2eb", color: "#17211d", border: "22px solid #c84232" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 26, fontWeight: 800 }}>
        <span>DARPAN SARDA</span>
        <span style={{ color: "#247b70" }}>AI / GENAI ENGINEER</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 930 }}>
        <span style={{ fontSize: 82, lineHeight: 1.02, fontWeight: 700 }}>AI systems that move from demo to dependable.</span>
        <span style={{ marginTop: 32, fontSize: 28, color: "#606963" }}>Agentic AI · RAG · NL2SQL · Full-stack engineering</span>
      </div>
      <div style={{ display: "flex", fontSize: 22, fontWeight: 700 }}>Ahmedabad, India</div>
    </div>,
    size,
  );
}