// use case useDecimalNumber(5)
//5.00
export function useDecimalNumber(value) {
  const toDecimal = ((value * 100) / 100).toFixed(2);
  return toDecimal;
}

// use case useDecimalCurency(5)
//€ 5.00
export function useDecimalCurency(value) {
  const euroSymbol = '€';
  const toDecimal = ((value * 100) / 100).toFixed(2);
  const result = euroSymbol + ' ' + toDecimal;

  return result;
}
