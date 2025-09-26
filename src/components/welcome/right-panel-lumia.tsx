// right-panel-lumia.tsx
import React from "react";

/** ===== Props públicas ===== */
export type RightPanelLumiaProps = {
  screenSize: "mobile" | "tablet" | "notebook" | "desktop";
  mockupSrc: string;
  aspectRatio?: number;

  // controles de cor/luz (0..1)
  wineAmount?: number;
  coolAmount?: number;
  hazeAmount?: number;

  // posicionamento/escala do vinho do miolo
  wineX?: number;
  wineY?: number;
  wineScale?: number;

  // vinheta nas extremidades
  vignetteTop?: number;
  vignetteSides?: number;
  vignetteBottom?: number;

  // vinho sutil no topo (0..1)
  wineTop?: number;

  // halo/brilho ao redor do mockup (0..1)
  glowIntensity?: number;
};

const clamp01 = (n?: number) =>
  Math.max(0, Math.min(1, typeof n === "number" ? n : 0));
const pct = (n: number) => `${Math.round(clamp01(n) * 100)}%`;

/** ===== Componente principal ===== */
export default function RightPanelLumia({
  screenSize,
  mockupSrc,
  aspectRatio: _aspectRatio = 696 / 1024,

  wineAmount = 0.80,
  coolAmount = 0.00,
  hazeAmount: _hazeAmount = 0.70,

  wineX = 0.66,
  wineY = 0.86,
  wineScale: _wineScale = 1.10,

  vignetteTop = 0.36,
  vignetteSides = 0.46,
  vignetteBottom = 0.26,

  wineTop = 0.50,
  glowIntensity = 0.50,
}: RightPanelLumiaProps) {
  return (
    <div
      className="flex flex-col items-center justify-center"
      style={{
        width: "100%", // ocupa todo o espaço do container pai (696px)
        height: "100%", // ocupa toda a altura do container pai (1024px)
        gap: screenSize === "mobile" ? "24px" : "32px",
        order: 2,
        position: "relative",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "32px 0 0 32px", // border-radius exato do Figma
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Fundo controlado por props */}
        <BackgroundSmokyGradient
          wineAmount={wineAmount}
          coolAmount={coolAmount}
          hazeAmount={_hazeAmount}
          wineX={wineX}
          wineY={wineY}
          wineScale={_wineScale}
          vignetteTop={vignetteTop}
          vignetteSides={vignetteSides}
          vignetteBottom={vignetteBottom}
          wineTop={wineTop}
        />

        {/* Moldura externa responsiva */}
        <div
          style={{
            position: "absolute",
            top: "20.6%", // posição exata do Figma
            left: "15.9%", // posição exata do Figma
            transform: "none",
            width: "100%", // largura que estava funcionando
            height: "84.6%", // altura exata do Figma
            background: "transparent",
            border: "3px solid rgba(103,104,119,0.5)",
            borderRadius: "40px",
            padding: "40px",
            zIndex: 2,
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 0 1px rgba(255,255,255,0.06) inset, 0 8px 40px rgba(255,255,255,0.05)",
          }}
        >
          <MockupGlow intensity={glowIntensity} />

          {/* Wrapper que segura a imagem */}
          <div
            style={{
              width: "100%",
              height: "100%",
              background: "linear-gradient(-90deg, rgba(1, 3, 19, 1) 20%, rgba(66, 76, 95, 0) 80%)", // gradiente exato do Figma
              borderRadius: "16px 0", // border-radius do mockup no Figma
              position: "relative",
              overflow: "hidden",
              display: "flex",
              alignItems: "flex-start", // alinha no topo
              justifyContent: "flex-start", // alinha na esquerda
            }}
          >
            <img
              src={mockupSrc}
              alt="Mockup da Interface Lumia"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover", // preenche todo espaço
                objectPosition: screenSize === "mobile" ? "center center" : screenSize === "tablet" ? "left center" : "left top", // foco responsivo
                borderRadius: "16px 0",
                display: "block",
              }}
            />
          </div>
        </div>

      </div>
    </div>
  );
}

/** ===== Fundo ===== */
type GradientProps = {
  wineAmount?: number;
  coolAmount?: number;
  hazeAmount?: number;
  wineX?: number;
  wineY?: number;
  wineScale?: number;
  vignetteTop?: number;
  vignetteSides?: number;
  vignetteBottom?: number;
  wineTop?: number;
};

function BackgroundSmokyGradient({
  wineAmount = 0.65,
  coolAmount = 0.12,
  hazeAmount: _hazeAmount = 0.70,
  wineX = 0.66,
  wineY = 0.86,
  wineScale: _wineScale = 1.04,
  vignetteTop = 0.42,
  vignetteSides = 0.55,
  vignetteBottom = 0.36,
}: GradientProps) {
  const base = `linear-gradient(
    304.66deg,
    rgba(44,17,17,1) 14%, 
    rgba(12,12,14,1) 92%
  )`;

  return (
    <div className="absolute inset-0" style={{ background: base, isolation: "isolate" }}>
      {/* Bordô central */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(
            90% 75% at ${pct(wineX)} ${pct(wineY)},
            rgba(184,66,44,0.30) 0%,
            rgba(184,66,44,0) 80%
          )`,
          filter: "blur(38px)",
          opacity: wineAmount,
          mixBlendMode: "screen",
        }}
      />

      {/* Verde canto superior direito */}
      {coolAmount > 0 && (
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(
              40% 25% at 100% 0%,
              rgba(60,140,110,${0.55 * coolAmount}) 0%,
              rgba(60,140,110,${0.25 * coolAmount}) 25%,
              rgba(60,140,110,0) 75%
            )`,
            filter: "blur(55px)",
            opacity: coolAmount,
            mixBlendMode: "screen",
          }}
        />
      )}

      {/* Vinheta */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: [
            `linear-gradient(to bottom, rgba(0,0,0,${vignetteTop}) 0%, rgba(0,0,0,0) 30%)`,
            `linear-gradient(to right, rgba(0,0,0,${vignetteSides}) 0%, rgba(0,0,0,0) 20%, rgba(0,0,0,0) 80%, rgba(0,0,0,${vignetteSides}) 100%)`,
            `linear-gradient(to top, rgba(0,0,0,${vignetteBottom}) 0%, rgba(0,0,0,0) 30%)`,
          ].join(","),
          mixBlendMode: "multiply",
        }}
      />
    </div>
  );
}

/** ===== Halo ===== */
function MockupGlow({ intensity = 0.5 }: { intensity?: number }) {
  const I = clamp01(intensity);
  return (
    <div className="absolute inset-0 pointer-events-none" style={{ isolation: "isolate" }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: [
            "radial-gradient(90% 120% at 50% 48%, rgba(255,122,69,0.22) 0%, rgba(255,122,69,0.10) 40%, rgba(255,122,69,0) 80%)",
            "radial-gradient(120% 80% at 50% 0%, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0) 55%)",
          ].join(","),
          filter: "blur(34px)",
          mixBlendMode: "screen",
          opacity: I,
          borderRadius: "48px",
        }}
      />
    </div>
  );
}
