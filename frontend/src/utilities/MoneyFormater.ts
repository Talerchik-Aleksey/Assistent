export function formatCurrencyMoney(currency: string, number: number): string {
  try {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
      currencyDisplay: "name",
      maximumFractionDigits: 2,
    }).format(number)
  } catch {
    return number.toString()
  }
}
