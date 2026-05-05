import type { MenuItem } from '@/lib/types';
import FoodImage from './FoodImage';

interface SaucesGridProps {
  items: MenuItem[];
  price?: number;
}

/**
 * شبكة الصلصات 2×4
 * مع بانر "جميع الصلصات بـ 1 ريال"
 */
export default function SaucesGrid({ items, price = 1 }: SaucesGridProps) {
  return (
    <div className="space-y-3">
      {/* بانر السعر الموحد */}
      <div className="bg-gradient-to-l from-secondary to-accent rounded-xl px-4 py-2.5 flex items-center justify-between border border-secondary/30">
        <span className="font-black text-white text-sm">🫙 جميع الصلصات</span>
        <span className="bg-white text-primary font-black text-lg rounded-lg px-3 py-0.5 shadow-sm">
          {price} ﷼
        </span>
      </div>

      {/* شبكة الصلصات */}
      <div className="grid grid-cols-4 gap-2">
        {items.map((sauce) => (
          <div
            key={sauce.id}
            className="menu-card flex flex-col items-center gap-1.5 p-2 text-center"
          >
            {/* صورة الصلصة */}
            <FoodImage
              src={sauce.image}
              alt={sauce.name}
              categoryIcon="🫙"
              className="w-14 h-14 rounded-xl"
            />
            {/* الاسم */}
            <div className="flex items-center gap-0.5">
              <span className="text-ink font-bold text-xs leading-tight">{sauce.name}</span>
              {sauce.spicy && <span className="text-[10px]">🌶️</span>}
              {sauce.featured && <span className="text-[10px]">⭐</span>}
            </div>
            {/* السعرات */}
            {sauce.calories != null && (
              <span className="text-muted text-[9px]">{sauce.calories} سعرة</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
