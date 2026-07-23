import { forwardRef } from "react";
import { Wordmark, CpvFooter } from "../Wordmark";
import s from "./OfertaPropuesta.module.css";

export const OfertaPropuesta = forwardRef(function OfertaPropuesta({ content }, ref) {
  const { eyebrow, offerTitle, validity, description, items, totalValue, contactLine1, contactLine2 } = content;
  return (
    <div ref={ref} className={s.page}>
      <div className={s.header}>
        <Wordmark size={52} fontSize={13} gap={14} />
        <span className={s.docKicker}>Propuesta Comercial</span>
      </div>
      <div className={s.body}>
        <p className={s.eyebrow}>{eyebrow}</p>
        <h1 className={s.offerTitle}>{offerTitle}</h1>
        <p className={s.validity}>{validity}</p>
        <p className={s.offerDesc}>{description}</p>
        <p className={s.scopeTitle}>Alcance y valores</p>
        <table className={s.scopeTable}>
          <tbody>
            {items.map((it, i) => (
              <tr className={s.scopeRow} key={i}>
                <td className={s.itemLabel}>{it.label}</td>
                <td className={s.itemValue}>{it.value}</td>
              </tr>
            ))}
            <tr className={s.totalRow}>
              <td>Valor total</td>
              <td className={s.itemValue}>{totalValue}</td>
            </tr>
          </tbody>
        </table>
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

export const ofertaPropuestaDefaults = {
  eyebrow: "Convenio interinstitucional",
  offerTitle: "Capacitación en Ciberseguridad para Entidades del Sector Defensa",
  validity: "Válida hasta el 30 de septiembre de 2026",
  description:
    "Programa de formación dirigido a personal técnico y administrativo, con módulos presenciales y virtuales sobre protección de infraestructura crítica y respuesta a incidentes.",
  items: [
    { label: "Diagnóstico inicial de madurez en ciberseguridad", value: "$8.500.000" },
    { label: "40 horas de formación presencial y virtual", value: "$22.000.000" },
    { label: "Simulacro de respuesta a incidentes", value: "$6.800.000" },
  ],
  totalValue: "$37.300.000",
  contactLine1: "Línea gratuita 018000 911 100",
  contactLine2: "contrataciones@mindefensa.gov.co · www.mindefensa.gov.co",
};
