'use client';

import Image from 'next/image';
import { useState } from 'react';

interface FoodImageProps {
  src: string;
  alt: string;
  categoryIcon?: string;
  categoryLabel?: string;
  className?: string;
  priority?: boolean;
}

/**
 * مكوِّن الصورة الذكي
 * - يعرض الصورة الحقيقية إذا كانت موجودة في /public/images/
 * - يعرض placeholder احترافي إذا لم تكن الصورة موجودة
 */
export default function FoodImage({
  src,
  alt,
  categoryIcon = '🍽️',
  categoryLabel = '',
  className = '',
  priority = false,
}: FoodImageProps) {
  const [error, setError] = useState(false);
  const imagePath = `/images/${src}`;

  // عرض الـ placeholder إذا فشل تحميل الصورة
  if (error) {
    return (
      <PlaceholderImage
        icon={categoryIcon}
        label={categoryLabel}
        alt={alt}
        className={className}
      />
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={imagePath}
        alt={alt}
        fill
        sizes="(max-width: 480px) 50vw, 200px"
        className="object-cover"
        priority={priority}
        onError={() => setError(true)}
      />
    </div>
  );
}

/**
 * مكوِّن الـ Placeholder الاحترافي
 * يظهر عند غياب الصورة
 */
function PlaceholderImage({
  icon,
  label,
  alt,
  className = '',
}: {
  icon: string;
  label: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      title={alt}
      aria-label={alt}
    >
      {/* خلفية متدرجة */}
      <div className="absolute inset-0 bg-gradient-to-br from-bgWarm via-amber-100 to-orange-100" />

      {/* نمط النقاط */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle, #B04000 1px, transparent 1px)`,
          backgroundSize: '16px 16px',
        }}
      />

      {/* المحتوى المركزي */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
        {/* أيقونة SVG + emoji */}
        <div className="relative">
          <svg
            className="w-10 h-10 text-primary/20"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-2xl">
            {icon}
          </span>
        </div>

        {/* اسم الصنف مختصراً */}
        {label && (
          <span className="text-xs font-bold text-muted/70 text-center px-1 leading-tight max-w-full truncate">
            {label}
          </span>
        )}
      </div>

      {/* خط زخرفي سفلي */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/30 via-secondary/40 to-accent/30" />
    </div>
  );
}
