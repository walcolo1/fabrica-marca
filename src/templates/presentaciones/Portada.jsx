import { forwardRef } from "react";
import { Wordmark } from "../Wordmark";
import shared from "../shared.module.css";
import s from "./slides.module.css";

export const Portada = forwardRef(function Portada({ content }, ref) {
  const { kicker, title, subtitle, metaLine1, metaLine2 } = content;
  return (
    <div ref={ref} className={s.portada}>
      <div className={`${shared.shieldPhLight} ${s.portadaWatermark}`}>[escudo]</div>
      <div className={s.topRow}>
        <Wordmark size={64} fontSize={22} variant="light" gap={18} />
        <div className={`${shared.goldRule} ${s.goldRule96}`} />
      </div>
      <div className={s.mainBlock}>
        <p className={s.kicker}>{kicker}</p>
        <h1 className={s.title}>{title}</h1>
        <p className={s.subtitle}>{subtitle}</p>
      </div>
      <div className={s.bottomRow}>
        <div className={s.metaBlock}>
          <span className={s.metaLine}>{metaLine1}</span>
          <span className={s.metaLine}>{metaLine2}</span>
        </div>
        <div className={shared.shieldPhLight} style={{ width: 44, height: 44, fontSize: 6 }}>
          [ícono
          <br />
          CPV]
        </div>
      </div>
    </div>
  );
});

export const portadaDefaults = {
  kicker: "Informe de gestión",
  title: "Balance de Resultados 2025–2026",
  subtitle: "Avances estratégicos, cobertura territorial y proyección del sector Defensa para la vigencia siguiente.",
  metaLine1: "Bogotá D.C., julio de 2026",
  metaLine2: "Oficina Asesora de Planeación",
};
