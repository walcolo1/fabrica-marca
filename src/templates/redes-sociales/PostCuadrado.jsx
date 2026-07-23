import { forwardRef } from "react";
import { Wordmark, CpvFooter } from "../Wordmark";
import shared from "../shared.module.css";
import s from "./PostCuadrado.module.css";

export const PostCuadrado = forwardRef(function PostCuadrado({ content }, ref) {
  const { title, copy, tag } = content;
  return (
    <div ref={ref} className={s.canvas}>
      <div className={s.header}>
        <Wordmark size={72} fontSize={16} />
        {tag ? <div className={s.tagPill}>{tag}</div> : null}
      </div>
      <div className={s.heroPanel}>
        <div className={`${shared.shieldPh} ${s.heroWatermark}`}>[escudo]</div>
        <h1 className={s.heroTitle}>{title}</h1>
        <p className={s.heroCopy}>{copy}</p>
      </div>
      <div className={s.footer}>
        <CpvFooter />
      </div>
    </div>
  );
});

export const postCuadradoDefaults = {
  title: "Súmate a la Fuerza que Protege a Colombia",
  copy: "Inscripciones abiertas para la convocatoria de reclutamiento 2026. Conoce los requisitos y postúlate en los puntos de atención de tu región.",
  tag: "CONVOCATORIA 2026",
};
