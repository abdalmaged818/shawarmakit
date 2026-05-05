import type { MenuItem } from '@/lib/types';
import FoodImage from './FoodImage';

interface PizzaSizesItemProps {
  item: MenuItem;
  sectionIcon?: string;
  sectionName?: string;
}

/**
 * بطاقة خاصة لأصناف البيتزا ذات الأحجام المتعددة
 */
export default function PizzaSizesItem({ item, sectionIcon = '🍕', sectionName = '' }: PizzaSizesItemProps) {
  if (!item.prices) return null;

  const sizes = [
    { key: 'S' as const, label: 'صغير' },
    { key: 'M' as const, label: 'وسط' },
    { key: 'L' as const, label: 'كبير' },
  ];

  return (
    <article className="menu-card overflow-hidden">
      {/* صورة عرضية للبيتزا */}
      <div className="relative w-full h-32">
        <FoodImage
          src={item.image}
          alt={item.name}
          categoryIcon={sectionIcon}
          categoryLabel={sectionName}
          className="w-full h-32"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-2 right-3">
          <h3 className="text-white font-black text-base drop-shadow">{item.name}</h3>
        </div>
      </div>

      {/* الأحجام والأسعار */}
      <div className="p-3 grid grid-cols-3 gap-2">
        {sizes.map(({ key, label }) => (
          <div key={key} className="flex flex-col items-center bg-bgWarm border border-line rounded-xl p-2">
            <span className="text-[10px] font-bold text-muted">{label}</span>
            <span className="text-xs font-black text-primary mt-0.5">{item.prices![key]}﷼</span>
          </div>
        ))}
      </div>
    </article>
  );
}
