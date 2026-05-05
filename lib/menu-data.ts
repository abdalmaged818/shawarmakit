import type { MenuData, MenuSection, MenuItem } from './types';
import rawData from '../data.json';

// تحميل بيانات المنيو من data.json
const data = rawData as MenuData;

/** معلومات المطعم */
export const restaurant = data.restaurant;

/** جميع أقسام المنيو */
export const menuSections: MenuSection[] = data.menu;

/** الحصول على قسم بواسطة الـ ID */
export function getSectionById(id: string): MenuSection | undefined {
  return menuSections.find(s => s.id === id);
}

/** الحصول على صنف بواسطة الـ ID */
export function getItemById(itemId: string): MenuItem | undefined {
  for (const section of menuSections) {
    const item = section.items.find(i => i.id === itemId);
    if (item) return item;
  }
  return undefined;
}

/** إجمالي عدد الأصناف */
export const totalItems = menuSections.reduce((sum, s) => sum + s.items.length, 0);

export default data;
