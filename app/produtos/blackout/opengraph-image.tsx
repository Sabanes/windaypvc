import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "Blackout | WINDAYPVC"
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 128,
        background: "#493F0B",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: "40px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo512-HPDGnR0lnrJcTTExXShblDPh50BU01.png"
          alt="WINDAYPVC Logo"
          width={200}
          height={200}
        />
        <div style={{ marginLeft: "40px", textAlign: "left", color: "white" }}>
          <div style={{ fontSize: "48px", fontWeight: "normal" }}>Sistemas</div>
          <div style={{ fontSize: "96px", fontWeight: "bold" }}>Blackout</div>
        </div>
      </div>
      <div style={{ fontSize: "32px", color: "white", marginTop: "20px" }}>
        Controle Total de Luz e Privacidade Absoluta
      </div>
    </div>,
    { ...size },
  )
}
