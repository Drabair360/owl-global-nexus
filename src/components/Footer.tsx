import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail } from 'lucide-react';
import { useI18n } from '@/lib/i18n';

const Footer = () => {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  const scrollTop = () => window.scrollTo(0, 0);

  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/lovable-uploads/4d7f9a85-a58b-4911-9097-b446f027e04a.png"
                alt="Owl International"
                className="w-9 h-9 brightness-0 invert"
              />
              <span className="text-lg font-brand tracking-wide text-white">OWL INTERNATIONAL</span>
            </div>
            <p className="text-sm leading-relaxed max-w-md text-slate-400">{t('footer.tagline')}</p>
            <div className="mt-6 space-y-2 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-amber-400 flex-shrink-0" />
                <span>47 boulevard de Courcelles, 75008 Paris, France</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a href="mailto:contact@internationalowl.com" className="hover:text-white transition-colors">
                  contact@internationalowl.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/approche" onClick={scrollTop} className="hover:text-white transition-colors">{t('footer.approche')}</Link></li>
              <li><Link to="/rejoindre" onClick={scrollTop} className="hover:text-white transition-colors">{t('footer.rejoindre')}</Link></li>
              <li><Link to="/engagements" onClick={scrollTop} className="hover:text-white transition-colors">{t('footer.engagements')}</Link></li>
            </ul>
          </div>

          <div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy" onClick={scrollTop} className="hover:text-white transition-colors">{t('footer.privacy')}</Link></li>
              <li><Link to="/mentions-legales" onClick={scrollTop} className="hover:text-white transition-colors">{t('footer.mentions')}</Link></li>
              <li><Link to="/terms" onClick={scrollTop} className="hover:text-white transition-colors">{t('footer.terms')}</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-xs text-slate-500 flex flex-col md:flex-row gap-2 md:justify-between">
          <div>
            OWL INTERNATIONAL — {t('footer.form')} · {t('footer.siege')} : 47 boulevard de Courcelles, 75008 Paris ·
            RCS Paris 978 849 230 · {t('footer.president')} : Arthur Draber
          </div>
          <div>© Owl International {year}. {t('footer.rights')}</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
