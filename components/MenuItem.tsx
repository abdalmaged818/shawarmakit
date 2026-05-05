import type { MenuItem as MenuItemType } from '@/lib/types';
import FoodImage from './FoodImage';
import { formatPrice, formatCalories } from '@/lib/utils';

interface MenuItemProps {
  item: MenuItemType;
  sectionIcon?: string;
  sectionId?: string;
  sectionName?: string;
}

/**
 * بطاقة الصنف الواحد
 * تعرض صورة + اسم + سعر + سعرات + شارات
 */
export default function MenuItemCard({ item, sectionIcon = '🍽️', sectionId = '', sectionName = '' }: MenuItemProps) {
  const hasMultiSize = item.multiSize && item.prices;

  return (
    <article className="menu-card flex gap-3 p-3 bg-white relative">
      {/* صورة الصنف */}
      <div className="relative shrink-0">
        <FoodImage
          src={item.image}
          alt={item.name}
          categoryIcon={sectionIcon}
          categoryLabel={sectionName}
          className="w-20 h-20 rounded-xl"
          priority={false}
        />
        {/* شارة "الأكثر طلباً" أو "مميز" */}
        {item.featured && item.badge && (
          <span className="absolute -top-2 -right-2 bg-secondary text-white text-[9px] font-black px-1.5 py-0.5 rounded-full shadow-sm leading-tight">
            ⭐ {item.badge}
          </span>
        )}
        {/* شارة "عائلي" */}
        {item.family && item.badge && (
          <span className="absolute -top-2 -right-2 bg-primary text-white text-[9px] font-black px-1.5 py-0.5 rounded-full shadow-sm">
            👨‍👩‍👧‍👦 {item.badge}
          </span>
        )}
      </div>

      {/* تفاصيل الصنف */}
      <div className="flex-1 flex flex-col justify-between min-w-0">
        <div>
          {/* الاسم + شارة الصحة */}
          <div className="flex items-center gap-1 flex-wrap">
            <h3 className="font-bold text-ink text-sm leading-tight">{item.name}</h3>
            {item.healthy && (
              <span className="text-xs text-green-600" title="خبز البر الصحي">🌾</span>
            )}
            {item.spicy && (
              <span className="text-xs" title="حار">🌶️</span>
            )}
          </div>

          {/* السعرات الحرارية */}
          {item.calories != null && !hasMultiSize && (
            <p className="text-muted text-xs mt-0.5">
              {typeof item.calories === 'number'
                ? formatCalories(item.calories)
                : null}
            </p>
          )}
        </div>

        {/* السعر */}
        <div className="mt-1">
          {hasMultiSize && item.prices ? (
            // أسعار متعددة الأحجام
            <div className="flex gap-1.5 flex-wrap">
              {(['S', 'M', 'L'] as const).map((size) => (
                <span
                  key={size}
                  className="flex flex-col items-center bg-bgWarm border border-line rounded-lg px-2 py-1"
                >
                  <span className="text-[9px] font-bold text-muted">{size === 'S' ? 'صغير' : size === 'M' ? 'وسط' : 'كبير'}</span>
                  <span className="text-xs font-black text-primary">{item.prices![size]}﷼</span>
                </span>
              ))}
            </div>
          ) : item.price != null ? (
            // سعر موحد
            <span className="font-black text-primary text-base">
              {item.price}﷼
            </span>
          ) : null}
        </div>
      </div>
    </article>
  );
}
