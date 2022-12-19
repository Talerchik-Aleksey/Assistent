import { formatCurrencyMoney } from "./MoneyFormater"
import calculateCrossCourse from "./СrossСourse"

type CurrencyType = {
  country: string | undefined,
  subCountry: string,
  ammount?: number,
  countrysCurrency: CurrencysTypes,
}

type CurrencysTypes = {
  [key: string]: { code: string, value: number },
}

function formatMoney({
  countrysCurrency,
  country,
  subCountry,
  ammount = 1,
}: CurrencyType): number | string {
  typeof country === "undefined" ? (country = "USD") : null
  return formatCurrencyMoney(
    countrysCurrency[subCountry].code,
    calculateCrossCourse(
      countrysCurrency[country].value,
      countrysCurrency[subCountry].value
    ) * ammount
  )
}

export default formatMoney
