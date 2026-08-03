/* PARTITION §4 — Matière v3 (gel du 01/08/2026)
   Approche — grès dominant + visuel de SIGNATURE (ton laiton, pièce
   d'orfèvrerie : ni vignettage ni halation appuyés). Béton au hero seul. */
import React from 'react';
import Vignette from '@/components/gravure/Vignette';
import Registre from '@/components/Registre';
import PageShell from '@/components/PageShell';
import InstitutionalHero from '@/components/InstitutionalHero';
import { Eyebrow, EditorialSection, Rule } from '@/components/editorial';
import ChapterRail from '@/components/ChapterRail';
import SplitText from '@/components/SplitText';
import { useI18n } from '@/lib/i18n';
import Reveal from '@/components/Reveal';
import Duotone from '@/components/Duotone';
import Legende from '@/components/Legende';
import { textures, SIZES } from '@/assets/textures';

const Approche = () => {
  const { t } = useI18n();
  const principles = [
    { n: '01', tKey: 'approche.p1.t', bKey: 'approche.p1.b' },
    { n: '02', tKey: 'approche.p2.t', bKey: 'approche.p2.b' },
    { n: '03', tKey: 'approche.p3.t', bKey: 'approche.p3.b' },
  ];

  return (
    <PageShell
      title={t('seo.approche.title')}
      description={t('seo.approche.desc')}
      keywords="doctrine investissement, approche Owl International, holding long terme, France Afrique"
      breadcrumbs={[{ name: t('approche.title'), path: '/approche' }]}
    >

      <InstitutionalHero
        eyebrow={t('approche.eyebrow')}
        title={t('approche.title')}
      />

      <EditorialSection className="mat-gres mat-grain">
        <ChapterRail
          ariaLabel={t('approche.title')}
          chapters={principles.map((p) => ({
            id: `principe-${p.n}`,
            number: p.n,
            label: `Principe ${p.n}`,
            title: t(p.tKey),
            content: (
              <SplitText
                as="p"
                text={t(p.bKey)}
                className="text-xl md:text-2xl font-body leading-relaxed mat-ink-2 block"
                stagger={18}
              />
            ),
          }))}
        />
      </EditorialSection>


      <EditorialSection className="mat-beton-2 mat-grain mat-coffrage mat-ink-1">
        <div className="max-w-3xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-6">{t('approche.not.title')}</h2>
          <Rule />
          <p className="text-lg font-body leading-relaxed mat-ink-2">{t('approche.not.body')}</p>
        </div>
      </EditorialSection>

      <section className="mat-gres mat-grain py-16 border-t border-[hsl(var(--mat-on-gres-1)/0.22)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-7 order-2 md:order-1 text-right md:text-left">
            <p className="font-heading text-xl mat-ink-1">{t('approche.sig.name')}</p>
            <p className="text-sm mat-ink-2 font-subtitle tracking-wider uppercase mt-1">
              {t('approche.sig.role')}
            </p>
          </div>
          <div className="md:col-span-5 order-1 md:order-2">
            <Reveal>
              <Legende>
                <Duotone
                  src={textures.signature.src}
                  sources={textures.signature.sources}
                  sizes={SIZES.column}
                  alt={textures.signature.alt}
                  tone="laiton"
                  width={textures.signature.width}
                  height={textures.signature.height}
                  className="aspect-[4/5] w-full"
                />
              </Legende>
            </Reveal>
          </div>
        </div>
      </section>
    
      {/* CABINET §6 - planche XI posée en situation, préversion seulement */}
      <EditorialSection className="mat-gres mat-grain">
        <div className="mb-10"><Vignette id="approche" size={40} /></div>
        <Registre id="approche" />
      </EditorialSection>

    </PageShell>
  );
};

export default Approche;
