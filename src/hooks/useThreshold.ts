import { useEffect, useState } from 'react';

const KEY = 'owl:threshold-seen';

/**
 * Séquence de seuil d'accueil : jouée une seule fois par session.
 * Retourne `play = true` au premier chargement de session, `false` ensuite
 * (le hero est alors rendu directement en état final, sans rejeu).
 */
export const useThreshold = () => {
  // Décision synchrone : évite tout flash / rejeu après affichage.
  const [play] = useState(() => {
    if (typeof window === 'undefined') return false;
    try {
      return window.sessionStorage.getItem(KEY) === null;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    if (!play) return;
    try {
      window.sessionStorage.setItem(KEY, '1');
    } catch {
      /* stockage indisponible : la séquence se rejouera, sans incidence */
    }
  }, [play]);

  /** Classe à poser sur un élément de la séquence (rang 1, 2, 3...). */
  const step = (rank: number) => (play ? `threshold-step threshold-step-${rank}` : '');

  return { play, step };
};
