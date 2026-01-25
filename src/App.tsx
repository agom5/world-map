import WorldMap from './components/WorldMap';
import CountryInfo from './components/CountryInfo';
import { useCountry } from './hooks/useCountry';

export default function App() {
  const { country, loading, fetchCountry } = useCountry();

  return (
    <main className="min-h-screen background-color: #171717 text-white p-8">
      <h1 className="text-4xl text-gray-400 mb-8 font-light tracking-wide">
        Global Data Map
      </h1>

      <div className="flex flex-col md:flex-row gap-6 items-start">
        <section className="flex-2 w-full min-h-100">
          <WorldMap onSelect={fetchCountry} />
        </section>

        <aside className="flex-1 w-full min-w-75 sticky top-8">
          <CountryInfo data={country} loading={loading} />
        </aside>
      </div>
    </main>
  );
}
