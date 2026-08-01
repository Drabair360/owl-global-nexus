import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail } from 'lucide-react';
import { useI18n } from '@/lib/i18n';

/**
 * FOOTER - béton coffré (G2.3).
 * C'est le socle du bâtiment : matière la plus dense du site, banches
 * visibles, grain commun. Le cachet de registre (signature M7 n°2) y scelle
 * chaque page, et la mention de vérifiabilité y devient gravure.
 */
const Footer = () => {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  const scrollTop = () => window.scrollTo(0, 0);

  const link =
    'transition-colors mat-ink-2 hover:text-[hsl(var(--mat-accent-beton))]';

  return (
    <footer className="mat-beton-2 mat-grain mat-coffrage">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <picture>
                <source
                  type="image/webp"
                  srcSet="/assets/owl-international-logo-96.webp 96w, /assets/owl-international-logo-192.webp 192w"
                  sizes="36px"
                />
                <img
                  src="/assets/owl-international-logo-96.png"
                  srcSet="/assets/owl-international-logo-96.png 96w, /assets/owl-international-logo-192.png 192w"
                  sizes="36px"
                  width={96}
                  height={98}
                  loading="lazy"
                  decoding="async"
                  alt="Owl International"
                  className="w-9 h-9 brightness-0 invert"
                />
              </picture>
              <span className="text-lg font-brand tracking-wide mat-ink-1">OWL INTERNATIONAL</span>
            </div>
            <p className="text-sm leading-relaxed max-w-md mat-ink-2">{t('footer.tagline')}</p>
            <div className="mt-6 space-y-2 text-sm mat-ink-2">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: 'hsl(var(--mat-laiton-lit))' }} />
                <span>47 boulevard de Courcelles, 75008 Paris, France</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 flex-shrink-0" style={{ color: 'hsl(var(--mat-laiton-lit))' }} />
                <a href="mailto:contact@internationalowl.com" className={link}>
                  contact@internationalowl.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/approche" onClick={scrollTop} className={link}>{t('footer.approche')}</Link></li>
              <li><Link to="/rejoindre" onClick={scrollTop} className={link}>{t('footer.rejoindre')}</Link></li>
              <li><Link to="/engagements" onClick={scrollTop} className={link}>{t('footer.engagements')}</Link></li>
            </ul>
          </div>

          <div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy" onClick={scrollTop} className={link}>{t('footer.privacy')}</Link></li>
              <li><Link to="/mentions-legales" onClick={scrollTop} className={link}>{t('footer.mentions')}</Link></li>
              <li><Link to="/terms" onClick={scrollTop} className={link}>{t('footer.terms')}</Link></li>
            </ul>
          </div>
        </div>

        {/* Gravure : la mention de vérifiabilité est creusée dans le béton */}
        <p className="mt-14 mb-8 mat-gravure font-display text-lg md:text-xl max-w-2xl">
          {t('footer.verifiable')}
        </p>

        {/* Cachet de registre - signature M7 n°2, il scelle chaque page */}
        <div className="mat-cachet mat-ink-2">
          <span className="mat-cachet-seal">RCS Paris 978 849 230</span>
          <span>OWL INTERNATIONAL</span>
          <span>{t('footer.form')}</span>
          <span>{t('footer.siege')} : 47 boulevard de Courcelles, 75008 Paris</span>
          <span>{t('footer.president')} : Arthur Draber</span>
          <span className="mat-tnum">© {year}</span>
          <span>{t('footer.rights')}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
