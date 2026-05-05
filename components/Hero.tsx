'use client';

import Image from 'next/image';
import { isOpenNow } from '@/lib/utils';
import { restaurant } from '@/lib/menu-data';

/**
 * قسم الـ Hero الرئيسي
 * يحتوي على شعار المطعم والاسم والشعار وحالة الفتح
 */
export default function Hero() {
  const isOpen = isOpenNow();

  return (
    <header className="relative w-full bg-gradient-to-b from-bgWarm to-bg pb-6 pt-8 px-4 overflow-hidden">
      {/* زخرفة خلفية */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              #B04000 0,
              #B04000 1px,
              transparent 0,
              transparent 50%
            )`,
            backgroundSize: '20px 20px',
          }}
        />
      </div>

      <div className="relative flex flex-col items-center text-center gap-4">
        {/* شعار المطعم */}
        <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-secondary shadow-lg bg-bgWarm flex items-center justify-center">
          <Image
            src="/logo.png"
            alt="شعار شاورما كيت"
            fill
            sizes="112px"
            className="object-contain p-2"
            priority
            onError={(e) => {
              // عند غياب الشعار، اعرض نص بديل
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
          {/* fallback نص الشعار */}
          <span className="font-amiri text-2xl font-bold text-primary">كيت</span>
        </div>

        {/* اسم المطعم بخط Amiri italic */}
        <div>
          <h1
            className="font-amiri italic leading-tight"
            style={{
              fontSize: '56px',
              color: '#F09000',
              textShadow: '0 2px 4px rgba(176, 64, 0, 0.2)',
            }}
          >
            {restaurant.name}
          </h1>

          {/* الشعار */}
          <p className="font-cairo text-muted text-sm mt-1 tracking-wide">
            {restaurant.tagline}
          </p>
        </div>

        {/* شارة حالة الفتح */}
        <div
          className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-bold border ${
            isOpen
              ? 'bg-green-50 border-green-200 text-green-700'
              : 'bg-red-50 border-red-200 text-red-700'
          }`}
        >
          {/* نقطة نابضة */}
          <span className="relative flex h-2.5 w-2.5">
            {isOpen && (
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            )}
            <span
              className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
                isOpen ? 'bg-green-500' : 'bg-red-400'
              }`}
            />
          </span>
          {isOpen ? 'مفتوح الآن' : 'مغلق حالياً'}
          {isOpen && (
            <span className="text-xs font-normal opacity-70">
              | {restaurant.hours.label}
            </span>
          )}
        </div>
      </div>
    </header>
  );
}
