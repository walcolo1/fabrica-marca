const EXT_LABEL = { png: "PNG", pdf: "PDF", "pdf-deck": "PDF", html: "HTML" };

export function OptionPicker({ category, onSelect }) {
  return (
    <div className="grid">
      {category.options.map((o) => (
        <button key={o.id} className="card" onClick={() => onSelect(o.id)}>
          <span className="card-badge">{EXT_LABEL[o.exportType]}</span>
          <h3>{o.label}</h3>
          <p>
            {o.size.w}×{o.size.h || "auto"}
          </p>
        </button>
      ))}
    </div>
  );
}
