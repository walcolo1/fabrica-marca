function escapeHtml(str) {
  return String(str ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

export const landingCampanaDefaults = {
  navCta: "Línea de atención",
  heroEyebrow: "Campaña de prevención",
  heroTitle: "Hablemos: Salud Mental en la Fuerza Pública",
  heroSubtitle:
    "Una línea de escucha y acompañamiento profesional, disponible las 24 horas, para uniformados, veteranos y sus familias.",
  heroCta: "Conoce la línea de atención",
  section1Kicker: "Acompañamiento profesional",
  section1Title: "Atención sin estigmas, con total confidencialidad",
  section1Text:
    "Un equipo de psicólogos especializados en contexto militar y policial ofrece consejería individual y familiar, con protocolos de confidencialidad que protegen la carrera y la privacidad de quien consulta.",
  section2Kicker: "Cobertura nacional",
  section2Title: "Presencia en batallones y guarniciones de todo el país",
  section2Text:
    "La ruta de atención opera en puntos presenciales dentro de unidades militares y policiales, además de la línea telefónica nacional, para que el acompañamiento llegue sin importar la ubicación.",
  closingTitle: "Tu bienestar también es parte de la misión",
  closingSubtitle: "Si tú o alguien de tu familia necesita hablar con alguien, la línea está disponible todos los días del año.",
  closingCta: "Comunícate ahora — 018000 911 100",
};

export function renderLandingHtml(content) {
  const c = { ...landingCampanaDefaults, ...content };
  const t = (v) => escapeHtml(v);
  return `<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${t(c.heroTitle)}</title>
    <style>
      :root{
        --brand-blue:#3c87b4;
        --ink-gray:#414042;
        --panel-dark:#3f3f3f;
        --accent-gold:#c9a227;
        --white:#ffffff;
        --tint-blue: color-mix(in srgb, var(--brand-blue) 7%, white);
      }
      html,body{margin:0;padding:0;}
      a{color:var(--brand-blue);}
      a:hover{color:var(--panel-dark);}
      .page{
        font-family:-apple-system,"Segoe UI",Helvetica,Arial,sans-serif;
        color:var(--ink-gray);
        background:var(--white);
        min-height:100vh;
        display:flex;
        flex-direction:column;
      }
      .shield-ph{
        background:repeating-linear-gradient(45deg,#e6e6e6,#e6e6e6 6px,#f4f4f4 6px,#f4f4f4 12px);
        border:1px solid #cfcfcf;
        display:flex;align-items:center;justify-content:center;
        color:#8a8a8a;font-family:"Courier New",monospace;
        text-align:center;line-height:1.25;box-sizing:border-box;flex-shrink:0;
      }
      .img-ph{
        background:repeating-linear-gradient(135deg,#e6e6e6,#e6e6e6 10px,#f4f4f4 10px,#f4f4f4 20px);
        border:1px solid #cfcfcf;
        display:flex;align-items:center;justify-content:center;
        color:#8a8a8a;font-family:"Courier New",monospace;font-size:14px;
        text-align:center;line-height:1.4;box-sizing:border-box;
        width:100%;border-radius:4px;padding:24px;
      }
      .img-ph.light{
        background:repeating-linear-gradient(135deg,rgba(255,255,255,0.18),rgba(255,255,255,0.18) 10px,rgba(255,255,255,0.06) 10px,rgba(255,255,255,0.06) 20px);
        border-color:rgba(255,255,255,0.4);color:rgba(255,255,255,0.85);
      }
      .topbar{
        display:flex;align-items:center;justify-content:space-between;
        padding:22px 64px;border-bottom:1px solid #eaeaea;
      }
      .wordmark-row{display:flex;align-items:center;gap:12px;}
      .wordmark-text{display:flex;flex-direction:column;line-height:1.15;}
      .wordmark-text .l1,.wordmark-text .l2{font-size:13px;font-weight:700;letter-spacing:0.04em;}
      .btn{
        display:inline-block;
        background:var(--brand-blue);color:var(--white);
        font-size:15px;font-weight:700;letter-spacing:0.01em;
        padding:14px 28px;border-radius:3px;text-decoration:none;
        border:none;cursor:pointer;
      }
      .btn:hover{background:var(--panel-dark);color:var(--white);}
      .btn-outline{
        display:inline-block;background:transparent;color:var(--white);
        font-size:15px;font-weight:700;padding:13px 27px;border-radius:3px;
        border:2px solid var(--white);text-decoration:none;
      }
      .btn-outline:hover{background:var(--white);color:var(--panel-dark);}
      .hero{
        background:var(--brand-blue);color:var(--white);
        padding:88px 64px;
        display:grid;grid-template-columns:1.1fr 1fr;gap:64px;align-items:center;
      }
      .hero-eyebrow{font-size:14px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:var(--accent-gold);margin:0 0 18px 0;}
      .hero-title{font-size:48px;font-weight:700;line-height:1.12;margin:0 0 20px 0;text-wrap:pretty;}
      .hero-subtitle{font-size:19px;line-height:1.55;opacity:0.94;margin:0 0 32px 0;max-width:520px;}
      .hero-img{height:340px;}
      .section{padding:96px 64px;display:grid;grid-template-columns:1fr 1fr;gap:72px;align-items:center;}
      .section.tint{background:var(--tint-blue);}
      .section-img{height:320px;}
      .section-kicker{font-size:13px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:var(--brand-blue);margin:0 0 14px 0;}
      .section-title{font-size:32px;font-weight:700;line-height:1.2;margin:0 0 18px 0;color:var(--ink-gray);}
      .section-text{font-size:16.5px;line-height:1.65;color:var(--ink-gray);opacity:0.88;margin:0;}
      .closing{
        background:var(--panel-dark);color:var(--white);
        padding:96px 64px;text-align:center;
        display:flex;flex-direction:column;align-items:center;gap:28px;
      }
      .closing-title{font-size:38px;font-weight:700;max-width:760px;margin:0;line-height:1.2;}
      .closing-sub{font-size:17px;opacity:0.85;max-width:600px;margin:0;}
      .footer{
        padding:36px 64px;display:flex;align-items:center;justify-content:space-between;
        border-top:1px solid #eaeaea;
      }
      .footer-cpv{display:flex;align-items:center;gap:10px;}
      .footer-cpv-text{font-size:13px;font-weight:600;color:var(--ink-gray);}
      .footer-copy{font-size:13px;color:var(--ink-gray);opacity:0.65;}
      @media (max-width: 860px){
        .topbar{padding:18px 24px;}
        .hero{grid-template-columns:1fr;padding:56px 24px;gap:36px;}
        .hero-title{font-size:34px;}
        .hero-img{height:220px;order:-1;}
        .section{grid-template-columns:1fr;padding:56px 24px;gap:32px;}
        .section-img{height:220px;}
        .section.img-right .section-img{order:-1;}
        .closing{padding:64px 24px;}
        .closing-title{font-size:28px;}
        .footer{flex-direction:column;gap:16px;padding:28px 24px;text-align:center;}
      }
    </style>
  </head>
  <body>
    <div class="page">
      <div class="topbar">
        <div class="wordmark-row">
          <div class="shield-ph" style="width:44px;height:44px;font-size:6px;">[escudo]</div>
          <div class="wordmark-text">
            <span class="l1">MINISTERIO DE</span>
            <span class="l2">DEFENSA NACIONAL</span>
          </div>
        </div>
        <a class="btn" href="#contacto">${t(c.navCta)}</a>
      </div>

      <div class="hero">
        <div>
          <p class="hero-eyebrow">${t(c.heroEyebrow)}</p>
          <h1 class="hero-title">${t(c.heroTitle)}</h1>
          <p class="hero-subtitle">${t(c.heroSubtitle)}</p>
          <a class="btn-outline" href="#contacto">${t(c.heroCta)}</a>
        </div>
        <div class="img-ph light hero-img">[foto: acompañamiento<br/>psicosocial en unidad militar]</div>
      </div>

      <div class="section">
        <div class="img-ph section-img">[foto: sesión de<br/>consejería individual]</div>
        <div>
          <p class="section-kicker">${t(c.section1Kicker)}</p>
          <h2 class="section-title">${t(c.section1Title)}</h2>
          <p class="section-text">${t(c.section1Text)}</p>
        </div>
      </div>

      <div class="section tint img-right">
        <div>
          <p class="section-kicker">${t(c.section2Kicker)}</p>
          <h2 class="section-title">${t(c.section2Title)}</h2>
          <p class="section-text">${t(c.section2Text)}</p>
        </div>
        <div class="img-ph section-img">[foto: puesto de atención<br/>en guarnición militar]</div>
      </div>

      <div class="closing" id="contacto">
        <h2 class="closing-title">${t(c.closingTitle)}</h2>
        <p class="closing-sub">${t(c.closingSubtitle)}</p>
        <a class="btn-outline" href="tel:018000911100">${t(c.closingCta)}</a>
      </div>

      <div class="footer">
        <div class="footer-cpv">
          <div class="shield-ph" style="width:26px;height:26px;font-size:4px;">[ícono<br/>CPV]</div>
          <span class="footer-cpv-text">Colombia Potencia de la Vida</span>
        </div>
        <span class="footer-copy">© ${new Date().getFullYear()} Ministerio de Defensa Nacional de Colombia</span>
      </div>
    </div>
  </body>
</html>
`;
}
