import { useEffect, useState, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Transition inter-routes : fondu opacité seul, 200 ms.
 * Aucune translation, aucun voile. Navigation instantanée, non théâtrale.
 */
export const PageTransition = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [out, setOut] = useState(false);

  useEffect(() => {
    if (location.pathname === displayLocation.pathname) return;
    setOut(true);
    const t = window.setTimeout(() => {
      setDisplayLocation(location);
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
      setOut(false);
    }, 200);
    return () => window.clearTimeout(t);
  }, [location, displayLocation]);

  return (
    <div className={`page-transition-content ${out ? 'is-out' : ''}`}>
      {children}
    </div>
  );
};

export default PageTransition;
