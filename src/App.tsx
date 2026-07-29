import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from '@/lib/i18n';
import Index from './pages/Index';
import Groupe from './pages/Groupe';
import Portefeuille from './pages/Portefeuille';
import Metiers from './pages/Metiers';
import Scouts from './pages/Scouts';
import Journal from './pages/Journal';
import Approche from './pages/Approche';
import Rejoindre from './pages/Rejoindre';
import Engagements from './pages/Engagements';
import Contact from './pages/Contact';
import MentionsLegales from './pages/MentionsLegales';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';
import Venture from './pages/ventures/Venture';
import PageTransition from './components/PageTransition';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <PageTransition>
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
          </PageTransition>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
