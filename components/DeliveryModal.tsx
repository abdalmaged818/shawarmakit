'use client';

import { useEffect } from 'react';
import { restaurant } from '@/lib/menu-data';

interface DeliveryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * مودال تطبيقات التوصيل
 * كيتا + هنقرستيشن
 */
export default function DeliveryModal({ isOpen, onClose }: DeliveryModalProps) {
  const { social } = restaurant;

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

  const apps = [
    {
      label: 'كيتا',
      href: social.keeta,
      icon: '🛵',
      bg: 'bg-[#FF6B00]',
      description: 'اطلب عبر تطبيق كيتا للتوصيل',
    },
    {
      label: 'هنقرستيشن',
      href: social.hungerstation,
      icon: '🍔',
      bg: 'bg-[#FF1744]',
      description: 'اطلب عبر تطبيق هنقرستيشن',
    },
  ];

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="تطبيقات التوصيل">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-5">
          <div>
            <h3 className="font-amiri font-bold text-xl text-ink">🛵 تطبيقات التوصيل</h3>
            <p className="text-muted text-xs mt-0.5">اختر التطبيق المفضل لديك</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-bgWarm text-muted hover:bg-line transition-colors"
            aria-label="إغلاق"
          >
            ✕
          </button>
        </div>

        <div className="flex flex-col gap-3">
          {apps.map((app) => (
            <a
              key={app.label}
              href={app.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${app.bg} text-white rounded-2xl p-4 flex items-center gap-4 hover:opacity-90 active:scale-95 transition-all shadow-sm`}
              onClick={onClose}
            >
              <span className="text-3xl w-12 h-12 flex items-center justify-center bg-white/20 rounded-xl">
                {app.icon}
              </span>
              <div>
                <p className="font-bold text-lg">{app.label}</p>
                <p className="text-sm opacity-80">{app.description}</p>
              </div>
              <svg className="w-5 h-5 opacity-60 mr-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
