import { Suspense, lazy } from 'react';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from '@/lib/i18n';
import Index from './pages/Index';
import PageTransition from './components/PageTransition';

// Découpage par route : seule l'accueil est dans le bundle initial (LCP).
const Groupe = lazy(() => import('./pages/Groupe'));
const Portefeuille = lazy(() => import('./pages/Portefeuille'));
const Metiers = lazy(() => import('./pages/Metiers'));
const Scouts = lazy(() => import('./pages/Scouts'));
const Journal = lazy(() => import('./pages/Journal'));
const Approche = lazy(() => import('./pages/Approche'));
const Rejoindre = lazy(() => import('./pages/Rejoindre'));
const Engagements = lazy(() => import('./pages/Engagements'));
const Contact = lazy(() => import('./pages/Contact'));
const MentionsLegales = lazy(() => import('./pages/MentionsLegales'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Venture = lazy(() => import('./pages/ventures/Venture'));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <PageTransition>
          <Suspense fallback={<div className="min-h-screen bg-background" aria-busy="true" />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/groupe" element={<Groupe />} />
            <Route path="/portefeuille" element={<Portefeuille />} />
            <Route path="/portefeuille/:slug" element={<Venture />} />
            <Route path="/metiers" element={<Metiers />} />
            <Route path="/scouts" element={<Scouts />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/approche" element={<Approche />} />
            <Route path="/rejoindre" element={<Rejoindre />} />
            <Route path="/engagements" element={<Engagements />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />

            {/* Redirections des anciennes routes (préservent le référencement) */}
            <Route path="/about" element={<Navigate to="/groupe" replace />} />
            <Route path="/portfolio" element={<Navigate to="/portefeuille" replace />} />
            <Route path="/solutions" element={<Navigate to="/metiers" replace />} />
            <Route path="/investors" element={<Navigate to="/contact" replace />} />
            <Route path="/careers" element={<Navigate to="/rejoindre" replace />} />
            <Route path="/news" element={<Navigate to="/journal" replace />} />
            <Route path="/impact" element={<Navigate to="/engagements" replace />} />
            <Route path="/cookies" element={<Navigate to="/privacy" replace />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
          </Suspense>
          </PageTransition>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
