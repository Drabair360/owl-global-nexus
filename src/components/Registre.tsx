import React from 'react';
import { REGISTRES, NOTES } from '@/content/registres';
import { REGISTRES_EN, NOTES_EN } from '@/content/registres.en';
import { useI18n } from '@/lib/i18n';
import Reveal from '@/components/Reveal';

/**
 * CABINET §4 — LE REGISTRE DE SAVOIR, EN PRODUCTION.
 *
 * Gabarit arrêté : notes de marge en colonne d'appel (1-3), deux au plus
 * par écran, registre en colonne de contenu (4-12). Trois temps, aucun
 * chiffre. FR et EN, l'anglais en réécriture de registre.
 */
const Registre = ({ id, className = '' }: { id: string; className?: string }) => {
  const { locale } = useI18n();
  const r = REGISTRES.find((x) => x.id === id);
  if (!r) return null;
  const en = locale === 'en' ? REGISTRES_EN[id] : undefined;
  const titre = en?.titre ?? r.titre;
  const temps = en?.temps ?? r.temps;

  return (
    <Reveal>
      <section className={`grid grid-cols-1 md:grid-cols-12 gap-10 items-start ${className}`}>
        {/* colonne d'appel : deux notes au plus par écran */}
        <aside className="md:col-span-3 space-y-8">
          {r.notes.slice(0, 2).map((nid) => {
            const n = NOTES.find((x) => x.id === nid);
            if (!n) return null;
            const ne = locale === 'en' ? NOTES_EN[nid] : undefined;
            return (
              <div key={nid} className="border-t pt-3" style={{ borderColor: 'hsl(var(--mat-on-gres-1) / 0.22)' }}>
                <div className="mat-mention font-subtitle tracking-[0.22em] uppercase mat-ink-accent">
                  {ne?.terme ?? n.terme}
                </div>
                <p className="mt-2 text-sm mat-ink-2 font-body leading-relaxed">{ne?.texte ?? n.texte}</p>
              </div>
            );
          })}
        </aside>

        <div className="md:col-span-9">
          <h2 className="font-heading text-2xl md:text-3xl mat-ink-1 mb-6">{titre}</h2>
          <div className="space-y-5 max-w-2xl">
            {temps.map((p, i) => (
              <p key={i} className="mat-prose mat-ink-2">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
};

export default Registre;
