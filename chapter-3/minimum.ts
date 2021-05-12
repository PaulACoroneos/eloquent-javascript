export const minimum = (a: number, b: number) => {
  if (a === b || a < b) return a;
  return b;
}