import { useState } from 'react';
import type { Country, WorldBankResponse, IndicatorResponse } from '../types';

const BASE_URL = 'https://api.worldbank.org/v2';

export function useCountry() {
  const [country, setCountry] = useState<Country | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function fetchCountry(countryCode: string) {
    setLoading(true);
    setError(null);

    const urls = [
      `${BASE_URL}/country/${countryCode}?format=json`,
      `${BASE_URL}/country/${countryCode}/indicator/SP.POP.TOTL?format=json&date=2022:2023&per_page=1`,
      `${BASE_URL}/country/${countryCode}/indicator/NY.GDP.MKTP.CD?format=json&date=2022:2023&per_page=1`,
    ];

    try {
      const responses = await Promise.all(
        urls.map((url) => fetch(url).then((r) => r.json())),
      );

      const countryData: WorldBankResponse = responses[0][1]?.[0];
      const popData: IndicatorResponse = responses[1][1]?.[0];
      const gdpData: IndicatorResponse = responses[2][1]?.[0];

      if (!countryData) throw new Error('Country data not found');

      setCountry({
        name: countryData.name,
        capital: countryData.capitalCity,
        region: countryData.region?.value,
        incomeLevel: countryData.incomeLevel?.value,
        population: popData?.value ?? 0,
        gdp: gdpData?.value ?? 0,
        countryCode: countryData.id,
      });
    } catch (err) {
      console.error(err);
      setError('Failed to load country data.');
    } finally {
      setLoading(false);
    }
  }

  return { country, loading, error, fetchCountry };
}
