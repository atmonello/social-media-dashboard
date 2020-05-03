export default function formatNumber(value: number) {
  if (value < 10000) {
    return value;
  }

  const valueStr = String(value);
  return `${valueStr.slice(0, 2)}k`;
}
