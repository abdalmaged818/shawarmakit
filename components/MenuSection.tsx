import type { MenuSection as MenuSectionType } from '@/lib/types';
import MenuItemCard from './MenuItem';
import DrinksTable from './DrinksTable';
import SaucesGrid from './SaucesGrid';
import ExtrasGrid from './ExtrasGrid';

interface MenuSectionProps {
  section: MenuSectionType;
}

/**
 * قسم كامل من أقسام المنيو
 * يختار المكوِّن المناسب حسب نوع القسم
 */
export default function MenuSection({ section }: MenuSectionProps) {
  const isBrr = section.id === 'barr';
  const isDrinks = section.type === 'drinks';
  const isSauces = section.type === 'sauces';
  const isExtras = section.type === 'extras';

  return (
    <section
      id={`section-${section.id}`}
      className={`w-full px-4 py-5 ${
        isBrr
          ? 'bg-amber-50 border-y-2 border-amber-200'
          : 'bg-bg'
      }`}
    >
      {/* عنوان القسم */}
      <div className="flex items-center gap-2 mb-4">
        {/* خط زخرفي */}
        <div className="h-8 w-1 rounded-full bg-gradient-to-b from-primary to-secondary" />

        <div className="flex items-center gap-2 flex-1">
          <span className="text-2xl">{section.icon}</span>
          <h2 className="font-amiri font-bold text-ink text-xl">{section.name}</h2>
          {/* شارة "بر" للقسم المميز */}
          {isBrr && (
            <span className="bg-amber-100 text-amber-800 border border-amber-300 text-xs font-bold px-2 py-0.5 rounded-full">
              🌾 خبز البر
            </span>
          )}
        </div>

        {/* عدد الأصناف */}
        <span className="text-muted text-xs bg-bgWarm border border-line px-2 py-1 rounded-full">
          {section.items.length} صنف
        </span>
      </div>

      {/* محتوى القسم حسب النوع */}
      {isDrinks ? (
        <DrinksTable items={section.items} />
      ) : isSauces ? (
        <SaucesGrid items={section.items} price={section.price} />
      ) : isExtras ? (
        <ExtrasGrid items={section.items} />
      ) : (
        // عرض القائمة العادية
        <div className="grid grid-cols-1 gap-3">
          {section.items.map((item) => (
            <MenuItemCard
              key={item.id}
              item={item}
              sectionIcon={section.icon}
              sectionId={section.id}
              sectionName={section.name}
            />
          ))}
        </div>
      )}
    </section>
  );
}
