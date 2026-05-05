import type { MenuItem } from '@/lib/types';
import FoodImage from './FoodImage';

interface ExtrasGridProps {
  items: MenuItem[];
}

/**
 * شبكة الإضافات بإطار dashed
 */
export default function ExtrasGrid({ items }: ExtrasGridProps) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {items.map((extra) => (
        <div
          key={extra.id}
          className="flex flex-col items-center gap-2 p-3 rounded-2xl border-2 border-dashed border-secondary/50 bg-bgWarm hover:border-secondary hover:-translate-y-1 transition-all duration-200"
        >
          {/* صورة الإضافة */}
          <FoodImage
            src={extra.image}
            alt={extra.name}
            categoryIcon="➕"
            className="w-16 h-16 rounded-xl"
          />
          {/* الاسم */}
          <p className="font-bold text-ink text-sm text-center">{extra.name}</p>
          {/* السعر */}
          {extra.price != null && (
            <span className="bg-primary text-white font-black text-sm px-3 py-1 rounded-full">
              +{extra.price}﷼
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
