// أنواع TypeScript لمشروع شاورما كيت

/** سعر الصنف - إما رقم واحد أو أحجام متعددة */
export type Price = number | { S: number; M: number; L: number };

/** سعرات حرارية - إما رقم أو أحجام أو null */
export type Calories = number | { S: number; M: number; L: number } | null;

/** صنف واحد في القائمة */
export interface MenuItem {
  id: string;
  name: string;
  /** سعر موحد */
  price?: number;
  /** أسعار متعددة الأحجام (S/M/L) */
  prices?: { S: number; M: number; L: number };
  /** السعرات الحرارية */
  calories?: number | { S: number; M: number; L: number } | null;
  /** مسار الصورة في /public/images/ */
  image: string;
  /** شارة مميزة (مثل "الأكثر طلباً") */
  badge?: string | null;
  /** هل هو صنف بارز */
  featured?: boolean;
  /** هل هو حجم عائلي */
  family?: boolean;
  /** هل هو صحي (خبز البر) */
  healthy?: boolean;
  /** هل هو حار (الصلصات) */
  spicy?: boolean;
  /** هل له أحجام متعددة */
  multiSize?: boolean;
}

/** قسم من أقسام القائمة */
export interface MenuSection {
  id: string;
  name: string;
  icon: string;
  bgClass: string;
  /** نوع خاص لعرض مختلف */
  type?: 'drinks' | 'sauces' | 'extras';
  /** هل هو قسم مميز (خبز البر) */
  special?: boolean;
  /** سعر موحد للقسم (مثل الصلصات 1 ريال) */
  price?: number;
  items: MenuItem[];
}

/** بيانات المطعم */
export interface RestaurantInfo {
  name: string;
  tagline: string;
  phone: string;
  phoneIntl: string;
  address: string;
  hours: {
    open: string;
    close: string;
    openTime: string;
    closeTime: string;
    label: string;
  };
  social: {
    whatsapp: string;
    phone: string;
    googleMaps: string;
    instagram: string;
    tiktok: string;
    keeta: string;
    hungerstation: string;
  };
}

/** بيانات المنيو الكاملة */
export interface MenuData {
  restaurant: RestaurantInfo;
  menu: MenuSection[];
}
