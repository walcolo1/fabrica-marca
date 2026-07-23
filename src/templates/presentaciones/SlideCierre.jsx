import { forwardRef } from "react";
import { Wordmark } from "../Wordmark";
import shared from "../shared.module.css";
import s from "./slides.module.css";

export const SlideCierre = forwardRef(function SlideCierre({ content }, ref) {
  const { title, subtitle, contactLine1, contactLine2 } = content;
  return (
    <div ref={ref} className={s.cierre}>
      <div className={`${shared.shieldPhLight} ${s.cierreWatermark}`}>[escudo]</div>
      <div className={s.cierreWordmark}>
        <Wordmark size={64} fontSize={22} variant="light" gap={18} style={{ justifyContent: "center" }} />
      </div>
      <div className={`${shared.goldRule} ${s.cierreGoldRule}`} />
      <h1 className={s.cierreTitle}>{title}</h1>
      <p className={s.cierreSubtitle}>{subtitle}</p>
      <div className={s.contactRow}>
        <span className={s.contactLine}>{contactLine1}</span>
        <span className={s.contactLine}>{contactLine2}</span>
      </div>
    </div>
  );
});

export const slideCierreDefaults = {
  title: "Gracias",
  subtitle: "Colombia Potencia de la Vida",
  contactLine1: "Oficina Asesora de Planeación",
  contactLine2: "www.mindefensa.gov.co",
};
