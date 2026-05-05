'use client';

import { useEffect } from 'react';
import { restaurant } from '@/lib/menu-data';
import { isOpenNow } from '@/lib/utils';

interface HoursModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * مودال ساعات العمل
 */
export default function HoursModal({ isOpen, onClose }: HoursModalProps) {
  const isOpenStatus = isOpenNow();

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  const days = [
    'السبت', 'الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة'
  ];

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="ساعات العمل">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* الرأس */}
        <div className="flex items-center justify-between mb-5">
          <div>
            <h3 className="font-amiri font-bold text-xl text-ink">🕐 ساعات العمل</h3>
            <p className="text-muted text-xs mt-0.5">مفتوح طوال أيام الأسبوع</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-bgWarm text-muted hover:bg-line transition-colors"
            aria-label="إغلاق"
          >
            ✕
          </button>
        </div>

        {/* حالة الفتح */}
        <div
          className={`flex items-center gap-2 px-4 py-3 rounded-xl mb-4 ${
            isOpenStatus ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
          }`}
        >
          <span className="relative flex h-3 w-3">
            {isOpenStatus && (
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            )}
            <span className={`relative inline-flex rounded-full h-3 w-3 ${isOpenStatus ? 'bg-green-500' : 'bg-red-400'}`} />
          </span>
          <span className={`font-bold text-sm ${isOpenStatus ? 'text-green-700' : 'text-red-700'}`}>
            {isOpenStatus ? 'مفتوح الآن' : 'مغلق حالياً'}
          </span>
        </div>

        {/* توقيت الفتح */}
        <div className="bg-gradient-to-l from-primary to-primaryDark rounded-xl p-4 mb-4 text-white">
          <div className="flex items-center justify-between">
            <div className="text-center">
              <p className="text-xs opacity-75">يفتح</p>
              <p className="font-black text-xl">4:30 م</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-px flex-1 w-16 bg-white/30" />
              <span className="text-secondary font-bold text-xl">←</span>
              <div className="h-px flex-1 w-16 bg-white/30" />
            </div>
            <div className="text-center">
              <p className="text-xs opacity-75">يغلق</p>
              <p className="font-black text-xl">4:30 ص</p>
            </div>
          </div>
          <p className="text-center text-xs opacity-70 mt-2">12 ساعة يومياً</p>
        </div>

        {/* جدول الأيام */}
        <div className="space-y-2">
          {days.map((day) => (
            <div key={day} className="flex items-center justify-between px-3 py-2 rounded-xl bg-bgWarm border border-line">
              <span className="font-bold text-ink text-sm">{day}</span>
              <span className="text-muted text-xs">4:30 م — 4:30 ص</span>
            </div>
          ))}
        </div>

        {/* العنوان */}
        <div className="mt-4 pt-4 border-t border-line">
          <p className="text-muted text-xs text-center">{restaurant.address}</p>
          <div className="flex justify-center mt-3">
            <a
              href={restaurant.social.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-primary text-white text-sm font-bold px-4 py-2 rounded-xl hover:bg-primaryDark active:scale-95 transition-all"
              onClick={onClose}
            >
              📍 افتح في خرائط جوجل
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
