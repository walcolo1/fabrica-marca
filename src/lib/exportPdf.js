import { toPng } from "html-to-image";
import { jsPDF } from "jspdf";

export async function exportNodeAsPdf(node, { width, height, filename }) {
  const dataUrl = await toPng(node, { width, height, pixelRatio: 2, cacheBust: true });
  const orientation = width >= height ? "landscape" : "portrait";
  const pdf = new jsPDF({ orientation, unit: "px", format: [width, height], hotfixes: ["px_scaling"] });
  pdf.addImage(dataUrl, "PNG", 0, 0, width, height);
  pdf.save(filename);
}

export async function exportDeckAsPdf(containerNode, { width, height, filename }) {
  const slideNodes = Array.from(containerNode.querySelectorAll("[data-slide]")).sort(
    (a, b) => Number(a.dataset.slide) - Number(b.dataset.slide)
  );
  const pdf = new jsPDF({ orientation: "landscape", unit: "px", format: [width, height], hotfixes: ["px_scaling"] });
  for (let i = 0; i < slideNodes.length; i++) {
    const slideRoot = slideNodes[i].firstElementChild;
    const dataUrl = await toPng(slideRoot, { width, height, pixelRatio: 2, cacheBust: true });
    if (i > 0) pdf.addPage([width, height], "landscape");
    pdf.addImage(dataUrl, "PNG", 0, 0, width, height);
  }
  pdf.save(filename);
}
