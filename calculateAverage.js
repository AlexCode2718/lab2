export function calculateAverage(data) {
  if (!data || data.length === 0) return 0;
  const total = data.reduce((sum, s) => sum + s.score, 0);
  return Number((total / data.length).toFixed(2));
}