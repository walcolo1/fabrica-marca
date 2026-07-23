import { forwardRef } from "react";
import { Wordmark } from "../Wordmark";
import s from "./slides.module.css";

export const SlideAgenda = forwardRef(function SlideAgenda({ content }, ref) {
  const { title, items } = content;
  return (
    <div ref={ref} className={s.agenda}>
      <div className={s.topRow} style={{ marginBottom: 52 }}>
        <Wordmark size={64} fontSize={22} gap={18} />
      </div>
      <h1 className={s.agendaTitle}>{title}</h1>
      <div className={s.agendaList}>
        {items.map((text, i) => (
          <div className={s.agendaItem} key={i}>
            <span className={s.agendaNum}>{String(i + 1).padStart(2, "0")}</span>
            <span className={s.agendaText}>{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
});

export const slideAgendaDefaults = {
  title: "Agenda",
  items: [
    "Contexto y objetivos",
    "Avances del periodo",
    "Cobertura territorial",
    "Retos y siguientes pasos",
    "Preguntas",
  ],
};
