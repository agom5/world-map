export interface Country {
  name: string;
  capital: string;
  region: string;
  incomeLevel: string;
  population: number;
  gdp: number;
  countryCode: string;
}

export interface WorldBankResponse {
  id: string;
  name: string;
  capitalCity: string;
  region: { value: string };
  incomeLevel: { value: string };
}

export interface IndicatorResponse {
  value: number | null;
}
