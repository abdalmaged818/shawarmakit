/**
 * الصفحة الرئيسية - منيو شاورما كيت
 * Mobile-first - max-width 480px
 */

import Hero from '@/components/Hero';
import SocialRow from '@/components/SocialRow';
import MenuSection from '@/components/MenuSection';
import Footer from '@/components/Footer';
import { menuSections } from '@/lib/menu-data';

export default function HomePage() {
  return (
    <main
      className="min-h-screen bg-bg"
      dir="rtl"
      style={{ maxWidth: '480px', margin: '0 auto' }}
    >
      {/* Hero: الشعار + الاسم + الشعار + حالة الفتح */}
      <Hero />

      {/* صف التواصل الاجتماعي */}
      <SocialRow />

      {/* أقسام المنيو */}
      <div className="divide-y divide-line">
        {menuSections.map((section) => (
          <MenuSection key={section.id} section={section} />
        ))}
      </div>

      {/* التذييل */}
      <Footer />
    </main>
  );
}
