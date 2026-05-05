import type { MenuItem } from '@/lib/types';
import FoodImage from './FoodImage';

interface DrinksTableProps {
  items: MenuItem[];
}

/**
 * جدول المشروبات بـ 3 أعمدة سعرية (صغير / وسط / كبير)
 */
export default function DrinksTable({ items }: DrinksTableProps) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-line shadow-card">
      <table className="w-full text-sm" dir="rtl">
        {/* رأس الجدول */}
        <thead>
          <tr className="bg-primary text-white">
            <th className="text-right px-3 py-2.5 font-bold rounded-tr-2xl w-36">العصير</th>
            <th className="text-center px-2 py-2.5 font-bold">صغير</th>
            <th className="text-center px-2 py-2.5 font-bold">وسط</th>
            <th className="text-center px-2 py-2.5 font-bold rounded-tl-2xl">كبير</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-line">
          {items.map((drink, idx) => (
            <tr
              key={drink.id}
              className={`hover:bg-bgWarm transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-bg'}`}
            >
              {/* اسم المشروب + صورة مصغرة */}
              <td className="px-3 py-2">
                <div className="flex items-center gap-2">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden shrink-0">
                    <FoodImage
                      src={drink.image}
                      alt={drink.name}
                      categoryIcon="🥤"
                      className="w-8 h-8 rounded-full"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-ink text-xs">{drink.name}</p>
                    {drink.calories && (
                      <p className="text-muted text-[10px]">{drink.calories} سعرة</p>
                    )}
                  </div>
                </div>
              </td>
              {/* الأسعار */}
              {drink.prices ? (
                <>
                  <td className="text-center px-2 py-2 font-bold text-primary">{drink.prices.S}﷼</td>
                  <td className="text-center px-2 py-2 font-bold text-primary">{drink.prices.M}﷼</td>
                  <td className="text-center px-2 py-2 font-bold text-primary">{drink.prices.L}﷼</td>
                </>
              ) : (
                <td colSpan={3} className="text-center text-muted px-2 py-2">-</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
