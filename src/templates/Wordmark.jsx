import shared from "./shared.module.css";

export function Wordmark({ size = 72, fontSize = 16, gap = 16, variant = "dark", style }) {
  const shieldClass = variant === "light" ? shared.shieldPhLight : shared.shieldPh;
  const textColor = variant === "light" ? "var(--white)" : "var(--ink-gray)";
  return (
    <div className={shared.wordmarkRow} style={{ gap, ...style }}>
      <div className={shieldClass} style={{ width: size, height: size, fontSize: size * 0.125 }}>
        [escudo]
      </div>
      <div className={shared.wordmarkText}>
        <span className={shared.wordmarkTextLine} style={{ fontSize, letterSpacing: "0.04em", color: textColor }}>
          MINISTERIO DE
        </span>
        <span className={shared.wordmarkTextLine} style={{ fontSize, letterSpacing: "0.04em", color: textColor }}>
          DEFENSA NACIONAL
        </span>
      </div>
    </div>
  );
}

export function CpvFooter({ size = 36, fontSize = 15, variant = "dark", style }) {
  const shieldClass = variant === "light" ? shared.shieldPhLight : shared.shieldPh;
  const textColor = variant === "light" ? "var(--white)" : "var(--ink-gray)";
  return (
    <div className={shared.cpvRow} style={style}>
      <div className={shieldClass} style={{ width: size, height: size, borderRadius: 3, fontSize: size * 0.16 }}>
        [ícono
        <br />
        CPV]
      </div>
      <span className={shared.cpvText} style={{ fontSize, color: textColor, opacity: variant === "light" ? 0.9 : 1 }}>
        Colombia Potencia de la Vida
      </span>
    </div>
  );
}
