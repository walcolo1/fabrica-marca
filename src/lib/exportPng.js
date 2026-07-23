import { toPng } from "html-to-image";

export async function exportNodeAsPng(node, { width, height, filename }) {
  const dataUrl = await toPng(node, { width, height, pixelRatio: 2, cacheBust: true });
  const link = document.createElement("a");
  link.href = dataUrl;
  link.download = filename;
  link.click();
}
