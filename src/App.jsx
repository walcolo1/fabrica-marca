import { useMemo, useRef, useState } from "react";
import { catalog, findOption } from "./data/catalog";
import { CategoryPicker } from "./components/CategoryPicker";
import { OptionPicker } from "./components/OptionPicker";
import { ContentForm } from "./components/ContentForm";
import { DeckForm } from "./components/DeckForm";
import { PreviewPane } from "./components/PreviewPane";
import { DownloadBar } from "./components/DownloadBar";

function cloneDefaults(defaults) {
  return JSON.parse(JSON.stringify(defaults));
}

export default function App() {
  const [categoryId, setCategoryId] = useState(null);
  const [optionId, setOptionId] = useState(null);
  const [content, setContent] = useState(null);
  const previewRef = useRef(null);

  const { category, option } = useMemo(() => findOption(categoryId, optionId), [categoryId, optionId]);

  function goHome() {
    setCategoryId(null);
    setOptionId(null);
    setContent(null);
  }

  function selectCategory(id) {
    setCategoryId(id);
    setOptionId(null);
    setContent(null);
  }

  function selectOption(id) {
    const { option: opt } = findOption(categoryId, id);
    setOptionId(id);
    setContent(cloneDefaults(opt.defaults));
  }

  return (
    <div className="app-shell">
      <header className="app-header">
        <h1>Fábrica de Assets — Ministerio de Defensa Nacional</h1>
        <nav className="app-breadcrumbs">
          <button onClick={goHome}>Inicio</button>
          {category && (
            <>
              <span>/</span>
              <button onClick={() => selectCategory(category.id)}>{category.label}</button>
            </>
          )}
          {option && (
            <>
              <span>/</span>
              <span>{option.label}</span>
            </>
          )}
        </nav>
      </header>

      <main className="app-main">
        {!category && <CategoryPicker categories={catalog} onSelect={selectCategory} />}

        {category && !option && <OptionPicker category={category} onSelect={selectOption} />}

        {category && option && content && (
          <div className="editor-layout">
            <div className="form-panel">
              {option.exportType === "pdf-deck" ? (
                <DeckForm content={content} onChange={setContent} />
              ) : (
                <ContentForm fields={option.fields} content={content} onChange={setContent} />
              )}
            </div>

            <div className="preview-panel">
              <PreviewPane ref={previewRef} option={option} content={content} />
              <DownloadBar categoryId={category.id} option={option} content={content} previewRef={previewRef} />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
