import type { Country } from '../types';

interface CountryInfoProps {
  data: Country | null;
  loading: boolean;
}

export default function CountryInfo({ data, loading }: CountryInfoProps) {
  const panelStyles =
    'p-6  rounded-xl border-l-4 border-green-600 shadow-2xl text-gray-100 min-h-60 flex flex-col justify-center transition-all duration-200';

  if (loading) return <SkeletonLoader className={panelStyles} />;
  if (!data) return <EmptyState className={panelStyles} />;

  return (
    <div className={panelStyles.replace('justify-center', '')}>
      <header className="mb-5 border-b border-gray-700 pb-3">
        <h2 className="text-3xl text-green-400 font-bold tracking-tight">
          {data.name}
        </h2>
      </header>

      <div className="space-y-3 text-lg">
        <InfoRow label="Capital" value={data.capital} />
        <InfoRow label="Region" value={data.region} />
        <InfoRow label="Income" value={data.incomeLevel} />
        <InfoRow label="Population" value={data.population.toLocaleString()} />
        <InfoRow label="GDP" value={formatCurrency(data.gdp)} />
      </div>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="flex justify-between items-center border-b border-gray-700 pb-2 border-dotted hover:bg-gray-800/50 transition-colors px-1 rounded">
      <span className="font-semibold text-gray-400">{label}</span>
      <span className="font-medium text-white text-right">{value}</span>
    </div>
  );
}

function EmptyState({ className }: { className: string }) {
  return (
    <div className={`${className} items-center text-center opacity-60`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-16 h-16 mb-2 mx-auto text-green-600/50"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.055 11H5a2 2 0 0 1 2 2v1a2 2 0 0 0 2 2 2 2 0 0 1 2 2v2.945M8 3.935V5.5A2.5 2.5 0 0 0 10.5 8h.5a2 2 0 0 1 2 2 2 2 0 1 0 4 0 2 2 0 0 1 2-2h1.064M15 20.488V18a2 2 0 0 1 2-2h3.064M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
      <p className="text-lg font-light">Select a country to explore</p>
    </div>
  );
}

function SkeletonLoader({ className }: { className: string }) {
  return (
    <div className={className}>
      <div className="h-9 w-2/3 bg-gray-700/50 rounded animate-pulse mb-6" />
      <div className="space-y-4">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="flex justify-between pb-2 border-b border-gray-700/50"
          >
            <div className="h-4 w-1/4 bg-gray-700/50 rounded animate-pulse" />
            <div className="h-4 w-1/3 bg-gray-700/50 rounded animate-pulse" />
          </div>
        ))}
      </div>
    </div>
  );
}

const formatCurrency = (val: number) => {
  if (val >= 1e12) return `$${(val / 1e12).toFixed(2)} Trillion`;
  if (val >= 1e9) return `$${(val / 1e9).toFixed(2)} Billion`;
  if (val >= 1e6) return `$${(val / 1e6).toFixed(2)} Million`;
  return `$${val.toLocaleString()}`;
};
