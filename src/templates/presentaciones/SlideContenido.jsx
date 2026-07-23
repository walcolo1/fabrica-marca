import { forwardRef } from "react";
import { Wordmark } from "../Wordmark";
import shared from "../shared.module.css";
import s from "./slides.module.css";

export const SlideContenido = forwardRef(function SlideContenido({ content }, ref) {
  const { kicker, title, points, imageCaption } = content;
  return (
    <div ref={ref} className={s.contenido}>
      <div className={s.topRow} style={{ marginBottom: 44 }}>
        <Wordmark size={56} fontSize={20} gap={16} />
        <span className={s.contenidoKicker}>{kicker}</span>
      </div>
      <h1 className={s.contenidoTitle}>{title}</h1>
      <div className={s.contentRow}>
        <div className={s.pointList}>
          {points.map((text, i) => (
            <div className={s.pointItem} key={i}>
              <div className={s.pointDot} />
              <span className={s.pointText}>{text}</span>
            </div>
          ))}
        </div>
        <div className={`${shared.imgPh} ${s.contentImg}`}>{imageCaption}</div>
      </div>
    </div>
  );
});

export const slideContenidoDefaults = {
  kicker: "Avances del periodo",
  title: "Cobertura territorial 2025–2026",
  points: [
    "Presencia consolidada en las 8 regionales del país.",
    "Aumento del 18% en puntos de atención habilitados.",
    "Nuevas alianzas con gobernaciones y alcaldías.",
    "Fortalecimiento de la línea de atención nacional 24/7.",
  ],
  imageCaption: "[foto: despliegue en territorio]",
};
