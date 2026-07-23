import { forwardRef } from "react";
import { Wordmark, CpvFooter } from "../Wordmark";
import shared from "../shared.module.css";
import s from "./QuoteCard.module.css";

export const QuoteCard = forwardRef(function QuoteCard({ content }, ref) {
  const { quoteText, authorName, authorRole } = content;
  return (
    <div ref={ref} className={s.canvas}>
      <div className={s.header}>
        <Wordmark size={72} fontSize={16} />
      </div>
      <div className={s.quotePanel}>
        <div className={`${shared.shieldPh} ${s.quoteWatermark}`}>[escudo]</div>
        <p className={s.quoteMark}>&#8220;</p>
        <p className={s.quoteText}>{quoteText}</p>
        <div className={`${shared.goldRule} ${s.attributionRule}`} />
        <p className={s.authorName}>{authorName}</p>
        <p className={s.authorRole}>{authorRole}</p>
      </div>
      <div className={s.footer}>
        <CpvFooter />
      </div>
    </div>
  );
});

export const quoteCardDefaults = {
  quoteText:
    "La seguridad de Colombia se construye todos los días, con disciplina, vocación de servicio y compromiso con la vida.",
  authorName: "Ministro de Defensa Nacional",
  authorRole: "Gobierno de Colombia",
};
