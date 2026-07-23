export function CategoryPicker({ categories, onSelect }) {
  return (
    <div className="grid">
      {categories.map((c) => (
        <button key={c.id} className="card" onClick={() => onSelect(c.id)}>
          <h3>{c.label}</h3>
          <p>{c.options.length} tipo(s) de pieza</p>
        </button>
      ))}
    </div>
  );
}
