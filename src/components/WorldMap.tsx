import WorldMapSvg from '../assets/map-image.svg?react';
import styles from './WorldMap.module.css';

interface WorldMapProps {
  onSelect: (code: string) => void;
}

export default function WorldMap({ onSelect }: WorldMapProps) {
  const handleMapClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as Element;
    const path = target.closest('path');

    if (!path) return;
    const code = path.getAttribute('id') || path.getAttribute('name');

    if (code) {
      const container = e.currentTarget;
      container
        .querySelector('.selected-country')
        ?.classList.remove('selected-country');
      path.classList.add('selected-country');
      onSelect(code);
    }
  };

  return (
    <div
      className={`${styles.mapContainer} w-full h-auto border border-green-900 rounded-xl p-4 shadow-2xl overflow-hidden`}
      onClick={handleMapClick}
    >
      <WorldMapSvg className="w-full h-full block" />
    </div>
  );
}
