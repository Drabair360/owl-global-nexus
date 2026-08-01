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
    <aside className="border-t border-slate-300 pt-6" aria-label={t('notice.title')}>
      <div className="text-xs font-subtitle tracking-[0.28em] uppercase text-gold-ink mb-6">
        {t('notice.title')}
      </div>
      <dl className="divide-y divide-slate-200">
        {rows.map((f) => (
          <div
            key={f.label}
            className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-6 py-3"
          >
            <dt className="text-xs font-subtitle tracking-[0.18em] uppercase text-slate-500 sm:pt-1">
              {f.label}
            </dt>
            <dd className="sm:col-span-2 text-slate-800 font-body">{f.value}</dd>
          </div>
        ))}
      </dl>
    </aside>
  );
};

export default VentureNotice;
