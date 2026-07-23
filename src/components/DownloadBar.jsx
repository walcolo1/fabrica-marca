import { useState } from "react";
import { buildFilename, getShortTitle } from "../lib/filename";
import { exportNodeAsPng } from "../lib/exportPng";
import { exportNodeAsPdf, exportDeckAsPdf } from "../lib/exportPdf";
import { exportHtmlString } from "../lib/exportHtml";
import { renderLandingHtml } from "../lib/landingTemplate";

const EXT_BY_TYPE = { png: "png", pdf: "pdf", "pdf-deck": "pdf", html: "html" };

export function DownloadBar({ categoryId, option, content, previewRef }) {
  const [busy, setBusy] = useState(false);

  const ext = EXT_BY_TYPE[option.exportType];
  const filename = buildFilename({
    categoryId,
    optionId: option.id,
    title: getShortTitle(option, content),
    ext,
  });

  async function handleDownload() {
    const previewNode = previewRef?.current;
    if (option.exportType !== "html" && !previewNode) return;
    setBusy(true);
    try {
      if (option.exportType === "png") {
        await exportNodeAsPng(previewNode, { width: option.size.w, height: option.size.h, filename });
      } else if (option.exportType === "pdf") {
        await exportNodeAsPdf(previewNode, { width: option.size.w, height: option.size.h, filename });
      } else if (option.exportType === "pdf-deck") {
        await exportDeckAsPdf(previewNode, { width: option.size.w, height: option.size.h, filename });
      } else if (option.exportType === "html") {
        exportHtmlString(renderLandingHtml(content), filename);
      }
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="download-bar">
      <div>
        <div className="download-filename">{filename}</div>
        <div className="approval-note" style={{ marginTop: 8 }}>
          Recuerda: el uso de esta pieza requiere aprobación de la Secretaría para las Comunicaciones y Prensa antes
          de publicarse externamente.
        </div>
      </div>
      <button className="btn" onClick={handleDownload} disabled={busy}>
        {busy ? "Generando…" : "Descargar"}
      </button>
    </div>
  );
}
