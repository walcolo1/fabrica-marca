import { forwardRef } from "react";
import { Wordmark, CpvFooter } from "../Wordmark";
import shared from "../shared.module.css";
import s from "./HistoriaVertical.module.css";

export const HistoriaVertical = forwardRef(function HistoriaVertical({ content }, ref) {
  const { kicker, title, copy, ctaLabel } = content;
  return (
    <div ref={ref} className={s.canvas}>
      <div className={`${shared.shieldPh} ${s.watermark}`}>[escudo]</div>
      <Wordmark size={68} fontSize={20} variant="light" gap={16} style={{ position: "relative", zIndex: 1 }} />
      <div className={s.mainBlock}>
        <p className={s.kicker}>{kicker}</p>
        <h1 className={s.title}>{title}</h1>
        <p className={s.copy}>{copy}</p>
      </div>
      <div className={s.bottomBlock}>
        <div className={s.ctaPill}>{ctaLabel}</div>
        <CpvFooter size={40} fontSize={22} variant="light" />
      </div>
    </div>
  );
});

export const historiaVerticalDefaults = {
  kicker: "Convocatoria 2026",
  title: "Súmate a la Fuerza que Protege a Colombia",
  copy: "Inscripciones abiertas. Desliza para conocer los requisitos y postularte hoy mismo.",
  ctaLabel: "Desliza hacia arriba",
};
