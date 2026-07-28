import { useEffect, useState, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * W7 - Transitions institutionnelles entre routes.
 * Voile encre + trait or qui balaie l'écran, contenu qui s'estompe en douceur.
 */
export const PageTransition = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [stage, setStage] = useState<'idle' | 'out' | 'in'>('idle');

  useEffect(() => {
    if (location.pathname === displayLocation.pathname) return;
    setStage('out');
    const t1 = window.setTimeout(() => {
      setDisplayLocation(location);
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
      setStage('in');
    }, 420);
    const t2 = window.setTimeout(() => setStage('idle'), 900);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [location, displayLocation]);

  return (
    <>
      <div
        aria-hidden
        className={`page-transition-veil ${stage !== 'idle' ? 'is-active' : ''} ${stage === 'in' ? 'is-leaving' : ''}`}
      >
        <span className="page-transition-rule" />
      </div>
      <div className={`page-transition-content ${stage === 'out' ? 'is-out' : ''}`}>
        {children}
      </div>
    </>
  );
};

export default PageTransition;
