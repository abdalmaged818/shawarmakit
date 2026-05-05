'use client';

import { useState } from 'react';
import { restaurant } from '@/lib/menu-data';
import OrderModal from './OrderModal';
import DeliveryModal from './DeliveryModal';
import HoursModal from './HoursModal';

/**
 * تذييل الصفحة
 * يحتوي على 4 CTAs + زر "اطلب الآن" الكبير
 */
export default function Footer() {
  const [showOrder, setShowOrder] = useState(false);
  const [showDelivery, setShowDelivery] = useState(false);
  const [showHours, setShowHours] = useState(false);

  const { social, address } = restaurant;

  return (
    <>
      <footer className="w-full bg-ink text-white" dir="rtl">
        {/* 4 أزرار CTA */}
        <div className="grid grid-cols-2 gap-3 px-4 pt-5 pb-3">
          {/* اتصال */}
          <a
            href={social.phone}
            className="flex flex-col items-center gap-1.5 bg-white/10 hover:bg-white/20 rounded-2xl p-3 active:scale-95 transition-all border border-white/10"
          >
            <span className="text-2xl">📞</span>
            <span className="font-bold text-sm">اتصال</span>
            <span className="text-xs opacity-60">{restaurant.phone}</span>
          </a>

          {/* الموقع على الخريطة */}
          <a
            href={social.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1.5 bg-white/10 hover:bg-white/20 rounded-2xl p-3 active:scale-95 transition-all border border-white/10"
          >
            <span className="text-2xl">📍</span>
            <span className="font-bold text-sm">الموقع</span>
            <span className="text-xs opacity-60">خرائط جوجل</span>
          </a>

          {/* تطبيقات التوصيل */}
          <button
            onClick={() => setShowDelivery(true)}
            className="flex flex-col items-center gap-1.5 bg-secondary/20 hover:bg-secondary/30 rounded-2xl p-3 active:scale-95 transition-all border border-secondary/30"
          >
            <span className="text-2xl">🛵</span>
            <span className="font-bold text-sm text-secondary">تطبيقات التوصيل</span>
            <span className="text-xs opacity-60">كيتا • هنقرستيشن</span>
          </button>

          {/* ساعات العمل */}
          <button
            onClick={() => setShowHours(true)}
            className="flex flex-col items-center gap-1.5 bg-white/10 hover:bg-white/20 rounded-2xl p-3 active:scale-95 transition-all border border-white/10"
          >
            <span className="text-2xl">🕐</span>
            <span className="font-bold text-sm">ساعات العمل</span>
            <span className="text-xs opacity-60">4:30م — 4:30ص</span>
          </button>
        </div>

        {/* زر "اطلب الآن" الكبير */}
        <div className="px-4 pb-4">
          <button
            onClick={() => setShowOrder(true)}
            className="w-full bg-gradient-to-l from-secondary to-primary text-white font-black text-lg py-4 rounded-2xl shadow-lg hover:opacity-90 active:scale-95 transition-all"
          >
            🛍️ اطلب الآن
          </button>
        </div>

        {/* العنوان + الشعار */}
        <div className="border-t border-white/10 px-4 py-4">
          <p className="text-center text-muted/80 text-xs leading-relaxed">
            📍 {address}
          </p>
          <p className="text-center text-white/30 text-[10px] mt-2">
            شاورما كيت © {new Date().getFullYear()} | ينتقي بعناية مذاق الأصالة
          </p>
        </div>
      </footer>

      {/* المودالات */}
      <OrderModal isOpen={showOrder} onClose={() => setShowOrder(false)} />
      <DeliveryModal isOpen={showDelivery} onClose={() => setShowDelivery(false)} />
      <HoursModal isOpen={showHours} onClose={() => setShowHours(false)} />
    </>
  );
}
