/**
 * أيقونات الفئات
 * يُستخدم في العناوين والـ placeholders
 */
interface CategoryIconProps {
  sectionId: string;
  size?: number;
  className?: string;
}

const ICONS: Record<string, string> = {
  chicken: '🐔',
  meat: '🥩',
  barr: '🌾',
  drinks: '🥤',
  fries: '🍟',
  sauces: '🫙',
  extras: '➕',
};

export default function CategoryIcon({ sectionId, size = 24, className = '' }: CategoryIconProps) {
  const icon = ICONS[sectionId] || '🍽️';
  return (
    <span
      className={className}
      style={{ fontSize: size }}
      role="img"
      aria-label={sectionId}
    >
      {icon}
    </span>
  );
}

export { ICONS };
