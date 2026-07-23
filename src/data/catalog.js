import { PostCuadrado, postCuadradoDefaults } from "../templates/redes-sociales/PostCuadrado";
import { QuoteCard, quoteCardDefaults } from "../templates/redes-sociales/QuoteCard";
import { BannerHorizontal, bannerHorizontalDefaults } from "../templates/redes-sociales/BannerHorizontal";
import { HistoriaVertical, historiaVerticalDefaults } from "../templates/redes-sociales/HistoriaVertical";
import { OfertaPropuesta, ofertaPropuestaDefaults } from "../templates/comercial/OfertaPropuesta";
import { OnePagerServicio, onePagerServicioDefaults } from "../templates/comercial/OnePagerServicio";
import { Portada, portadaDefaults } from "../templates/presentaciones/Portada";
import { Deck, deckDefaults } from "../templates/presentaciones/Deck";
import { landingCampanaDefaults } from "../lib/landingTemplate";

export const catalog = [
  {
    id: "redes-sociales",
    label: "Redes Sociales",
    options: [
      {
        id: "post-cuadrado",
        label: "Post cuadrado",
        size: { w: 1080, h: 1080 },
        exportType: "png",
        Component: PostCuadrado,
        defaults: postCuadradoDefaults,
        titleKey: "title",
        fields: [
          { key: "title", label: "Título", type: "text" },
          { key: "copy", label: "Texto", type: "textarea" },
          { key: "tag", label: "Etiqueta (opcional)", type: "text" },
        ],
      },
      {
        id: "quote-card",
        label: "Quote card",
        size: { w: 1080, h: 1080 },
        exportType: "png",
        Component: QuoteCard,
        defaults: quoteCardDefaults,
        titleKey: "authorName",
        fields: [
          { key: "quoteText", label: "Cita", type: "textarea" },
          { key: "authorName", label: "Autor", type: "text" },
          { key: "authorRole", label: "Cargo / rol", type: "text" },
        ],
      },
      {
        id: "banner-horizontal",
        label: "Banner horizontal",
        size: { w: 1200, h: 628 },
        exportType: "png",
        Component: BannerHorizontal,
        defaults: bannerHorizontalDefaults,
        titleKey: "title",
        fields: [
          { key: "kicker", label: "Antetítulo", type: "text" },
          { key: "title", label: "Título", type: "text" },
        ],
      },
      {
        id: "historia-vertical",
        label: "Historia vertical",
        size: { w: 1080, h: 1920 },
        exportType: "png",
        Component: HistoriaVertical,
        defaults: historiaVerticalDefaults,
        titleKey: "title",
        fields: [
          { key: "kicker", label: "Antetítulo", type: "text" },
          { key: "title", label: "Título", type: "text" },
          { key: "copy", label: "Texto", type: "textarea" },
          { key: "ctaLabel", label: "Texto del botón / CTA", type: "text" },
        ],
      },
    ],
  },
  {
    id: "comercial",
    label: "Comercial",
    options: [
      {
        id: "oferta-propuesta",
        label: "Oferta / propuesta comercial",
        size: { w: 816, h: 1056 },
        exportType: "pdf",
        Component: OfertaPropuesta,
        defaults: ofertaPropuestaDefaults,
        titleKey: "offerTitle",
        fields: [
          { key: "eyebrow", label: "Antetítulo", type: "text" },
          { key: "offerTitle", label: "Título de la oferta", type: "text" },
          { key: "validity", label: "Vigencia", type: "text" },
          { key: "description", label: "Descripción", type: "textarea" },
          { key: "items", label: "Alcance y valores", type: "itemList" },
          { key: "totalValue", label: "Valor total", type: "text" },
          { key: "contactLine1", label: "Contacto — línea 1", type: "text" },
          { key: "contactLine2", label: "Contacto — línea 2", type: "text" },
        ],
      },
      {
        id: "one-pager-servicio",
        label: "One-pager de servicio",
        size: { w: 816, h: 1056 },
        exportType: "pdf",
        Component: OnePagerServicio,
        defaults: onePagerServicioDefaults,
        titleKey: "serviceName",
        fields: [
          { key: "serviceName", label: "Nombre del servicio", type: "text" },
          { key: "description", label: "Descripción", type: "textarea" },
          { key: "benefits", label: "Beneficios", type: "list" },
          { key: "contactLine1", label: "Contacto — línea 1", type: "text" },
          { key: "contactLine2", label: "Contacto — línea 2", type: "text" },
        ],
      },
    ],
  },
  {
    id: "presentaciones",
    label: "Presentaciones",
    options: [
      {
        id: "portada",
        label: "Portada de presentación",
        size: { w: 1920, h: 1080 },
        exportType: "pdf",
        Component: Portada,
        defaults: portadaDefaults,
        titleKey: "title",
        fields: [
          { key: "kicker", label: "Antetítulo", type: "text" },
          { key: "title", label: "Título", type: "text" },
          { key: "subtitle", label: "Subtítulo", type: "textarea" },
          { key: "metaLine1", label: "Línea meta 1", type: "text" },
          { key: "metaLine2", label: "Línea meta 2", type: "text" },
        ],
      },
      {
        id: "deck-corto",
        label: "Deck corto (5-8 slides)",
        size: { w: 1920, h: 1080 },
        exportType: "pdf-deck",
        Component: Deck,
        defaults: deckDefaults,
        titleKey: "portada.title",
      },
    ],
  },
  {
    id: "landing",
    label: "Landing Page de Campaña",
    options: [
      {
        id: "landing-campana",
        label: "Landing de campaña",
        size: { w: 1200, h: null },
        exportType: "html",
        defaults: landingCampanaDefaults,
        titleKey: "heroTitle",
        fields: [
          { key: "navCta", label: "Botón de navegación", type: "text" },
          { key: "heroEyebrow", label: "Antetítulo hero", type: "text" },
          { key: "heroTitle", label: "Título hero", type: "text" },
          { key: "heroSubtitle", label: "Subtítulo hero", type: "textarea" },
          { key: "heroCta", label: "CTA hero", type: "text" },
          { key: "section1Kicker", label: "Antetítulo sección 1", type: "text" },
          { key: "section1Title", label: "Título sección 1", type: "text" },
          { key: "section1Text", label: "Texto sección 1", type: "textarea" },
          { key: "section2Kicker", label: "Antetítulo sección 2", type: "text" },
          { key: "section2Title", label: "Título sección 2", type: "text" },
          { key: "section2Text", label: "Texto sección 2", type: "textarea" },
          { key: "closingTitle", label: "Título de cierre", type: "text" },
          { key: "closingSubtitle", label: "Subtítulo de cierre", type: "textarea" },
          { key: "closingCta", label: "CTA de cierre", type: "text" },
        ],
      },
    ],
  },
];

export function findOption(categoryId, optionId) {
  const category = catalog.find((c) => c.id === categoryId);
  const option = category?.options.find((o) => o.id === optionId);
  return { category, option };
}
