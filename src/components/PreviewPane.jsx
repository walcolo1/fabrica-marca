import { forwardRef, useMemo } from "react";
import { renderLandingHtml } from "../lib/landingTemplate";

function ScaledBox({ width, height, maxWidth, children }) {
  const scale = Math.min(1, maxWidth / width);
  return (
    <div className="preview-box" style={{ width: width * scale, height: height * scale, overflow: "hidden" }}>
      <div style={{ width, height, transform: `scale(${scale})`, transformOrigin: "top left" }}>{children}</div>
    </div>
  );
}

export const PreviewPane = forwardRef(function PreviewPane({ option, content }, ref) {
  const { exportType, size, Component } = option;

  const landingHtml = useMemo(() => (exportType === "html" ? renderLandingHtml(content) : null), [exportType, content]);

  if (exportType === "html") {
    return (
      <div className="preview-surface">
        <iframe title="Vista previa" className="iframe-preview" srcDoc={landingHtml} />
      </div>
    );
  }

  if (exportType === "pdf-deck") {
    const slideCount = 3 + content.contentSlides.length;
    const totalHeight = slideCount * 1080 + (slideCount - 1) * 24;
    return (
      <div className="preview-surface deck">
        <ScaledBox width={1920} height={totalHeight} maxWidth={640}>
          <Component ref={ref} content={content} />
        </ScaledBox>
      </div>
    );
  }

  const maxWidth = size.h > size.w ? 420 : 560;

  return (
    <div className="preview-surface">
      <ScaledBox width={size.w} height={size.h} maxWidth={maxWidth}>
        <Component ref={ref} content={content} />
      </ScaledBox>
    </div>
  );
});
