const MIN_CONTENT_SLIDES = 2;
const MAX_CONTENT_SLIDES = 5;

function TextField({ label, value, onChange, area }) {
  return (
    <div className="field">
      <label>{label}</label>
      {area ? (
        <textarea value={value ?? ""} onChange={(e) => onChange(e.target.value)} />
      ) : (
        <input type="text" value={value ?? ""} onChange={(e) => onChange(e.target.value)} />
      )}
    </div>
  );
}

function PointsField({ label, value, onChange }) {
  const items = value ?? [];
  return (
    <div className="field">
      <label>{label}</label>
      {items.map((item, i) => (
        <div className="list-row" key={i}>
          <input
            type="text"
            value={item}
            onChange={(e) => {
              const next = [...items];
              next[i] = e.target.value;
              onChange(next);
            }}
          />
          <button
            type="button"
            className="btn-remove"
            onClick={() => onChange(items.filter((_, idx) => idx !== i))}
            aria-label="Eliminar"
          >
            ×
          </button>
        </div>
      ))}
      <button type="button" className="btn btn-secondary btn-small" onClick={() => onChange([...items, ""])}>
        + Agregar punto
      </button>
    </div>
  );
}

export function DeckForm({ content, onChange }) {
  const total = 3 + content.contentSlides.length;

  function setPortada(key, value) {
    onChange({ ...content, portada: { ...content.portada, [key]: value } });
  }
  function setCierre(key, value) {
    onChange({ ...content, cierre: { ...content.cierre, [key]: value } });
  }
  function setContentSlide(i, key, value) {
    const next = [...content.contentSlides];
    next[i] = { ...next[i], [key]: value };
    onChange({ ...content, contentSlides: next });
  }
  function addContentSlide() {
    if (content.contentSlides.length >= MAX_CONTENT_SLIDES) return;
    onChange({
      ...content,
      contentSlides: [...content.contentSlides, { kicker: "", title: "", points: [""], imageCaption: "[foto]" }],
    });
  }
  function removeContentSlide(i) {
    if (content.contentSlides.length <= MIN_CONTENT_SLIDES) return;
    onChange({ ...content, contentSlides: content.contentSlides.filter((_, idx) => idx !== i) });
  }

  return (
    <>
      <p style={{ fontSize: 12, color: "#8a8a8a", margin: 0 }}>
        Total de slides: <strong>{total}</strong> (portada + agenda + {content.contentSlides.length} de contenido +
        cierre)
      </p>

      <fieldset style={{ border: "1px solid #e2e4e8", borderRadius: 6, padding: 12 }}>
        <legend style={{ fontSize: 12, fontWeight: 700, color: "#666" }}>Portada</legend>
        <TextField label="Antetítulo" value={content.portada.kicker} onChange={(v) => setPortada("kicker", v)} />
        <TextField label="Título" value={content.portada.title} onChange={(v) => setPortada("title", v)} />
        <TextField label="Subtítulo" area value={content.portada.subtitle} onChange={(v) => setPortada("subtitle", v)} />
        <TextField label="Línea meta 1" value={content.portada.metaLine1} onChange={(v) => setPortada("metaLine1", v)} />
        <TextField label="Línea meta 2" value={content.portada.metaLine2} onChange={(v) => setPortada("metaLine2", v)} />
      </fieldset>

      <fieldset style={{ border: "1px solid #e2e4e8", borderRadius: 6, padding: 12 }}>
        <legend style={{ fontSize: 12, fontWeight: 700, color: "#666" }}>Agenda</legend>
        <TextField label="Título" value={content.agendaTitle} onChange={(v) => onChange({ ...content, agendaTitle: v })} />
        <PointsField
          label="Ítems de agenda"
          value={content.agendaItems}
          onChange={(v) => onChange({ ...content, agendaItems: v })}
        />
      </fieldset>

      {content.contentSlides.map((slide, i) => (
        <fieldset key={i} style={{ border: "1px solid #e2e4e8", borderRadius: 6, padding: 12 }}>
          <legend style={{ fontSize: 12, fontWeight: 700, color: "#666" }}>Slide de contenido {i + 1}</legend>
          <TextField label="Antetítulo" value={slide.kicker} onChange={(v) => setContentSlide(i, "kicker", v)} />
          <TextField label="Título" value={slide.title} onChange={(v) => setContentSlide(i, "title", v)} />
          <PointsField label="Puntos" value={slide.points} onChange={(v) => setContentSlide(i, "points", v)} />
          <TextField
            label="Descripción de imagen"
            value={slide.imageCaption}
            onChange={(v) => setContentSlide(i, "imageCaption", v)}
          />
          {content.contentSlides.length > MIN_CONTENT_SLIDES && (
            <button type="button" className="btn btn-secondary btn-small" onClick={() => removeContentSlide(i)}>
              Quitar slide
            </button>
          )}
        </fieldset>
      ))}

      {content.contentSlides.length < MAX_CONTENT_SLIDES && (
        <button type="button" className="btn btn-secondary" onClick={addContentSlide}>
          + Agregar slide de contenido
        </button>
      )}

      <fieldset style={{ border: "1px solid #e2e4e8", borderRadius: 6, padding: 12 }}>
        <legend style={{ fontSize: 12, fontWeight: 700, color: "#666" }}>Cierre</legend>
        <TextField label="Título" value={content.cierre.title} onChange={(v) => setCierre("title", v)} />
        <TextField label="Subtítulo" value={content.cierre.subtitle} onChange={(v) => setCierre("subtitle", v)} />
        <TextField
          label="Contacto — línea 1"
          value={content.cierre.contactLine1}
          onChange={(v) => setCierre("contactLine1", v)}
        />
        <TextField
          label="Contacto — línea 2"
          value={content.cierre.contactLine2}
          onChange={(v) => setCierre("contactLine2", v)}
        />
      </fieldset>
    </>
  );
}
