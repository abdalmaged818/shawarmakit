'use client';

import { useEffect } from 'react';
import { restaurant } from '@/lib/menu-data';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * مودال "اطلب الآن"
 * 4 خيارات: واتساب / كيتا / هنقرستيشن / اتصال
 */
export default function OrderModal({ isOpen, onClose }: OrderModalProps) {
  const { social } = restaurant;

  // إغلاق المودال بضغط Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  // منع التمرير عند فتح المودال
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  const options = [
    {
      label: 'واتساب',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      ),
      href: social.whatsapp,
      bg: 'bg-[#25D366]',
      text: 'text-white',
      sub: 'تواصل مباشر',
    },
    {
      label: 'كيتا',
      icon: <span className="text-2xl">🛵</span>,
      href: social.keeta,
      bg: 'bg-[#FF6B00]',
      text: 'text-white',
      sub: 'توصيل سريع',
    },
    {
      label: 'هنقرستيشن',
      icon: <span className="text-2xl">🍔</span>,
      href: social.hungerstation,
      bg: 'bg-[#FF1744]',
      text: 'text-white',
      sub: 'توصيل للباب',
    },
    {
      label: 'اتصال',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
        </svg>
      ),
      href: social.phone,
      bg: 'bg-primary',
      text: 'text-white',
      sub: restaurant.phone,
    },
  ];

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="خيارات الطلب">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* رأس المودال */}
        <div className="flex items-center justify-between mb-5">
          <div>
            <h3 className="font-amiri font-bold text-xl text-ink">اطلب الآن</h3>
            <p className="text-muted text-xs mt-0.5">اختر طريقة الطلب المناسبة</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-bgWarm text-muted hover:bg-line transition-colors"
            aria-label="إغلاق"
          >
            ✕
          </button>
        </div>

        {/* خيارات الطلب */}
        <div className="grid grid-cols-2 gap-3">
          {options.map((opt) => (
            <a
              key={opt.label}
              href={opt.href}
              target={opt.href.startsWith('tel') ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className={`${opt.bg} ${opt.text} rounded-2xl p-4 flex flex-col items-center gap-2 hover:opacity-90 active:scale-95 transition-all shadow-sm`}
              onClick={onClose}
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20">
                {opt.icon}
              </div>
              <span className="font-bold text-sm">{opt.label}</span>
              <span className="text-xs opacity-80">{opt.sub}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
