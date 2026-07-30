import { useEffect, useState, ReactNode } from 'react';
import { flushSync } from 'react-dom';
import { useLocation } from 'react-router-dom';

type DocWithVT = Document & {
  startViewTransition?: (cb: () => void) => { finished: Promise<void> };
};

/**
 * Transition inter-routes : fondu 200 ms.
 * - Utilise ::view-transition (fondu natif) quand le navigateur le supporte.
 * - Dégradation propre : fondu opacité JS identique sinon.
 */
export const PageTransition = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [out, setOut] = useState(false);

  useEffect(() => {
    if (location.pathname === displayLocation.pathname) return;

    const doc = document as DocWithVT;
    const commit = () => {
      setDisplayLocation(location);
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
      setOut(false);
    };

    if (typeof doc.startViewTransition === 'function') {
      doc.startViewTransition(() => {
        flushSync(commit);
      });
      return;
    }

    setOut(true);
    const t = window.setTimeout(commit, 200);
    return () => window.clearTimeout(t);
  }, [location, displayLocation]);

  return (
    <div className={`page-transition-content ${out ? 'is-out' : ''}`}>
      {children}
    </div>
  );
};

export default PageTransition;
