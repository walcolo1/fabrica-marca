function ListField({ label, value, onChange }) {
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
        + Agregar
      </button>
    </div>
  );
}

function ItemListField({ label, value, onChange }) {
  const items = value ?? [];
  return (
    <div className="field">
      <label>{label}</label>
      {items.map((item, i) => (
        <div className="item-list-row" key={i}>
          <input
            type="text"
            placeholder="Descripción"
            value={item.label}
            onChange={(e) => {
              const next = [...items];
              next[i] = { ...next[i], label: e.target.value };
              onChange(next);
            }}
          />
          <input
            type="text"
            placeholder="Valor"
            value={item.value}
            onChange={(e) => {
              const next = [...items];
              next[i] = { ...next[i], value: e.target.value };
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
      <button
        type="button"
        className="btn btn-secondary btn-small"
        onClick={() => onChange([...items, { label: "", value: "" }])}
      >
        + Agregar ítem
      </button>
    </div>
  );
}

export function ContentForm({ fields, content, onChange }) {
  function setField(key, value) {
    onChange({ ...content, [key]: value });
  }

  return (
    <>
      {fields.map((f) => {
        if (f.type === "list") {
          return <ListField key={f.key} label={f.label} value={content[f.key]} onChange={(v) => setField(f.key, v)} />;
        }
        if (f.type === "itemList") {
          return (
            <ItemListField key={f.key} label={f.label} value={content[f.key]} onChange={(v) => setField(f.key, v)} />
          );
        }
        if (f.type === "textarea") {
          return (
            <div className="field" key={f.key}>
              <label>{f.label}</label>
              <textarea value={content[f.key] ?? ""} onChange={(e) => setField(f.key, e.target.value)} />
            </div>
          );
        }
        return (
          <div className="field" key={f.key}>
            <label>{f.label}</label>
            <input type="text" value={content[f.key] ?? ""} onChange={(e) => setField(f.key, e.target.value)} />
          </div>
        );
      })}
    </>
  );
}
