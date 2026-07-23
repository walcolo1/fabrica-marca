import { forwardRef } from "react";
import { Wordmark, CpvFooter } from "../Wordmark";
import shared from "../shared.module.css";
import s from "./BannerHorizontal.module.css";

export const BannerHorizontal = forwardRef(function BannerHorizontal({ content }, ref) {
  const { kicker, title } = content;
  return (
    <div ref={ref} className={s.canvas}>
      <div className={`${shared.shieldPh} ${s.watermark}`}>[escudo]</div>
      <div className={s.topRow}>
        <Wordmark size={52} fontSize={16} variant="light" gap={14} />
        <div className={`${shared.goldRule} ${s.goldRule}`} />
      </div>
      <div className={s.mainBlock}>
        <p className={s.kicker}>{kicker}</p>
        <h1 className={s.title}>{title}</h1>
      </div>
      <div className={s.bottomRow}>
        <CpvFooter size={32} fontSize={15} variant="light" />
      </div>
    </div>
  );
});

export const bannerHorizontalDefaults = {
  kicker: "Convocatoria 2026",
  title: "Súmate a la Fuerza que Protege a Colombia",
};
