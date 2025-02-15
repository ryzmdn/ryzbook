export function clss(...classes) {
  return classes.filter(Boolean).join(" ");
}
