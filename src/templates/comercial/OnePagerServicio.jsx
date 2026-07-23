import { forwardRef } from "react";
import { Wordmark, CpvFooter } from "../Wordmark";
import s from "./OnePagerServicio.module.css";

export const OnePagerServicio = forwardRef(function OnePagerServicio({ content }, ref) {
  const { serviceName, description, benefits, contactLine1, contactLine2 } = content;
  return (
    <div ref={ref} className={s.page}>
      <div className={s.header}>
        <Wordmark size={52} fontSize={13} gap={14} />
        <span className={s.docKicker}>Ficha de Servicio</span>
      </div>
      <div className={s.body}>
        <p className={s.eyebrow}>Programa institucional</p>
        <h1 className={s.serviceTitle}>{serviceName}</h1>
        <p className={s.serviceDesc}>{description}</p>
        <p className={s.benefitsTitle}>Beneficios</p>
        <div className={s.benefitList}>
          {benefits.map((b, i) => (
            <div className={s.benefitItem} key={i}>
              <div className={s.benefitDot} />
              <span className={s.benefitText}>{b}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={s.cpvRowWrap}>
        <CpvFooter size={30} fontSize={13} />
      </div>
      <div className={s.footer}>
        <Wordmark size={34} fontSize={12} gap={12} variant="light" />
        <div className={s.contactBlock}>
          <span className={s.contactLine}>{contactLine1}</span>
          <span className={s.contactLine}>{contactLine2}</span>
        </div>
      </div>
    </div>
  );
});

export const onePagerServicioDefaults = {
  serviceName: "Atención Psicosocial a Veteranos de las Fuerzas Militares",
  description:
    "Programa de acompañamiento integral para veteranos y sus familias, con enfoque en salud mental, reincorporación laboral y bienestar social, articulado con las direcciones de sanidad y bienestar de cada fuerza.",
  benefits: [
    "Acompañamiento psicológico individual y familiar sin costo.",
    "Rutas de reincorporación laboral con aliados del sector público y privado.",
    "Línea de atención telefónica disponible 24 horas, los 7 días de la semana.",
    "Talleres de bienestar comunitario en las regionales de cada fuerza.",
  ],
  contactLine1: "Línea gratuita 018000 911 100",
  contactLine2: "veteranos@mindefensa.gov.co · www.mindefensa.gov.co",
};
