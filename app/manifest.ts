import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'PT Permata Bangun Indo',
    short_name: 'Permata Bangun Indo',
    description: 'Konstruksi, sipil, serta mekanikal dan elektrikal di Indonesia.',
    start_url: '/id',
    display: 'standalone',
    background_color: '#f2f0eb',
    theme_color: '#b9ff4a',
    icons: [{ src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' }],
  };
}
