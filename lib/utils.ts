/**
 * دوال مساعدة لمشروع شاورما كيت
 */

/**
 * تحقق من أن المطعم مفتوح الآن
 * ساعات العمل: 4:30 عصراً → 4:30 فجراً (بتوقيت السعودية UTC+3)
 */
export function isOpenNow(): boolean {
  // الحصول على الوقت الحالي بتوقيت السعودية
  const now = new Date();
  const saudiTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Riyadh' }));
  
  const hours = saudiTime.getHours();
  const minutes = saudiTime.getMinutes();
  
  // تحويل الوقت إلى دقائق من منتصف الليل
  const currentMinutes = hours * 60 + minutes;
  
  // وقت الفتح: 16:30 = 990 دقيقة
  const openMinutes = 16 * 60 + 30;
  // وقت الإغلاق: 4:30 صباحاً = 270 دقيقة (اليوم التالي)
  const closeMinutes = 4 * 60 + 30;
  
  // المطعم مفتوح من 16:30 إلى نهاية اليوم (00:00) + من 00:00 إلى 04:30
  // أي: currentMinutes >= 990 أو currentMinutes < 270
  return currentMinutes >= openMinutes || currentMinutes < closeMinutes;
}

/**
 * تنسيق السعر بالريال السعودي
 */
export function formatPrice(price: number): string {
  return `${price} ر.س`;
}

/**
 * تنسيق السعرات الحرارية
 */
export function formatCalories(cal: number | null | undefined): string {
  if (cal == null) return '';
  return `${cal} سعرة`;
}

/**
 * الحصول على نص الفئة بالعربي
 */
export function getCategoryLabel(id: string): string {
  const labels: Record<string, string> = {
    chicken: 'دجاج',
    meat: 'لحم',
    barr: 'خبز البر',
    drinks: 'مشروبات',
    fries: 'بطاطس',
    sauces: 'صلصات',
    extras: 'إضافات',
  };
  return labels[id] || id;
}

/**
 * بناء رابط واتساب مع رسالة
 */
export function buildWhatsappLink(message?: string): string {
  const phone = '966566102425';
  const text = message || 'مرحباً، أريد الطلب من شاورما كيت';
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}
