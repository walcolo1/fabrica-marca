# Fábrica de Assets — Ministerio de Defensa Nacional

App web de producción (sin login, sin base de datos) para generar piezas de marca desde un solo lugar: se elige una categoría, se llena el contenido, se ve una vista previa en vivo y se descarga el archivo final (PNG, PDF o HTML según el tipo de pieza).

## Categorías y piezas

- **Redes Sociales** (PNG): post cuadrado, quote card, banner horizontal, historia vertical.
- **Comercial** (PDF): oferta / propuesta comercial, one-pager de servicio.
- **Presentaciones** (PDF): portada de presentación, deck corto (5–8 slides armados a partir de portada + agenda + slides de contenido + cierre).
- **Landing Page de Campaña** (HTML): página standalone descargable, autocontenida.

## Diseño y design system

Las piezas están diseñadas en Claude Design ("Fábrica de Assets MDN - Demo", ligado al design system "Ministerio de Defensa Nacional"), usando los tokens de marca extraídos de la página 75 del manual (`Marca.png`). Cada componente en `src/templates/` es un puerto 1:1 del `.dc.html` correspondiente en Claude Design — mismo HTML, mismas clases, mismos valores por defecto — para que la app nunca dibuje algo distinto a lo aprobado ahí.

Varios valores del design system siguen marcados como **placeholder/estimado** hasta tener más páginas del manual: tipografía institucional, gris exacto del wordmark, dorado del título, y las ilustraciones reales del escudo de Colombia / ícono "Colombia Potencia de la Vida" (hoy representadas con placeholders rayados). Ver `src/styles/tokens.css` y `guidelines/logo-usage.md` del design system en Claude Design.

Toda pieza generada recuerda en pantalla que su uso requiere aprobación de la Secretaría para las Comunicaciones y Prensa antes de publicarse externamente.

## Estructura

```
src/
  data/catalog.js        # categorías, opciones, tamaños, campos de formulario
  templates/              # componentes React portados 1:1 de los .dc.html
  components/              # UI de la app (pickers, formulario, preview, descarga)
  lib/                     # export a PNG / PDF / HTML, nombre de archivo
```

Nombres de archivo generados: `[categoria]-[tipo]-[fecha]-[titulo-corto].ext`.

## Desarrollo

```bash
npm install
npm run dev
```

```bash
npm run build   # build de producción
```
