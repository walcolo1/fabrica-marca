function slugify(text, maxLen = 40) {
  const slug = String(text ?? "")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return slug.slice(0, maxLen).replace(/-+$/g, "") || "sin-titulo";
}

function todayStamp() {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}${mm}${dd}`;
}

export function buildFilename({ categoryId, optionId, title, ext }) {
  return `${categoryId}-${optionId}-${todayStamp()}-${slugify(title)}.${ext}`;
}

function getByPath(obj, path) {
  return path.split(".").reduce((acc, key) => (acc == null ? acc : acc[key]), obj);
}

export function getShortTitle(option, content) {
  if (!option.titleKey) return "asset";
  const value = getByPath(content, option.titleKey);
  return typeof value === "string" ? value : "asset";
}
