import { useI18n } from '@/lib/i18n';

/**
 * Notice institutionnelle d'une société du groupe.
 * Doctrine : uniquement les champs réels et sourcés.
 * Un champ sans valeur n'est pas rendu - jamais de « N/A », jamais de tiret vide.
 * Interdits ici : siège, effectif, chiffres d'activité (sociétés en formation).
 */
export interface NoticeField {
  label: string;
  value: string;
}

const VentureNotice = ({ fields }: { fields: NoticeField[] }) => {
  const { t } = useI18n();
  const rows = fields.filter((f) => f.value && f.value.trim().length > 0);

  if (rows.length === 0) return null;

  return (
    <aside className="border-t pt-6 border-[hsl(var(--mat-on-gres-1)/0.25)]" aria-label={t('notice.title')}>
      <div className="mat-mention font-subtitle tracking-[0.28em] uppercase mat-ink-accent mb-6">
        {t('notice.title')}
      </div>
      <dl className="divide-y divide-[hsl(var(--mat-on-gres-1)/0.16)]">
        {rows.map((f) => (
          <div
            key={f.label}
            className="grid grid-cols-1 sm:grid-cols-[minmax(0,9rem)_minmax(0,1fr)] gap-1 sm:gap-6 py-3"
          >
            <dt className="mat-mention font-subtitle tracking-[0.18em] uppercase mat-ink-2 sm:pt-1 min-w-0 break-words">
              {f.label}
            </dt>

            <dd className="min-w-0 break-words mat-ink-1 font-body mat-tnum">{f.value}</dd>
          </div>
        ))}
      </dl>
    </aside>
  );
};

export default VentureNotice;
