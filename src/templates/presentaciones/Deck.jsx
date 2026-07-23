import { forwardRef } from "react";
import { Portada } from "./Portada";
import { SlideAgenda } from "./SlideAgenda";
import { SlideContenido } from "./SlideContenido";
import { SlideCierre } from "./SlideCierre";

export const Deck = forwardRef(function Deck({ content }, ref) {
  const { portada, agendaTitle, agendaItems, contentSlides, cierre } = content;
  return (
    <div ref={ref} style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <div data-slide="0">
        <Portada content={portada} />
      </div>
      <div data-slide="1">
        <SlideAgenda content={{ title: agendaTitle, items: agendaItems }} />
      </div>
      {contentSlides.map((sc, i) => (
        <div data-slide={2 + i} key={i}>
          <SlideContenido content={sc} />
        </div>
      ))}
      <div data-slide={2 + contentSlides.length}>
        <SlideCierre content={cierre} />
      </div>
    </div>
  );
});

export const deckDefaults = {
  portada: {
    kicker: "Informe de gestión",
    title: "Balance de Resultados 2025–2026",
    subtitle: "Avances estratégicos, cobertura territorial y proyección del sector Defensa para la vigencia siguiente.",
    metaLine1: "Bogotá D.C., julio de 2026",
    metaLine2: "Oficina Asesora de Planeación",
  },
  agendaTitle: "Agenda",
  agendaItems: ["Contexto y objetivos", "Avances del periodo", "Cobertura territorial", "Siguientes pasos"],
  contentSlides: [
    {
      kicker: "Avances del periodo",
      title: "Cobertura territorial 2025–2026",
      points: [
        "Presencia consolidada en las 8 regionales del país.",
        "Aumento del 18% en puntos de atención habilitados.",
        "Nuevas alianzas con gobernaciones y alcaldías.",
        "Fortalecimiento de la línea de atención nacional 24/7.",
      ],
      imageCaption: "[foto: despliegue en territorio]",
    },
    {
      kicker: "Resultados",
      title: "Impacto en la comunidad",
      points: [
        "Más de 40.000 personas atendidas durante el periodo.",
        "Reducción del tiempo de respuesta en un 22%.",
        "Nuevos convenios con el sector salud regional.",
      ],
      imageCaption: "[foto: jornada de atención comunitaria]",
    },
  ],
  cierre: {
    title: "Gracias",
    subtitle: "Colombia Potencia de la Vida",
    contactLine1: "Oficina Asesora de Planeación",
    contactLine2: "www.mindefensa.gov.co",
  },
};
