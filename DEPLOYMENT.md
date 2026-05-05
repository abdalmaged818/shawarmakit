# 🚀 دليل النشر على Vercel — شاورما كيت

## الخطوات الكاملة للنشر

### 1️⃣ ادخل Vercel

اذهب إلى: https://vercel.com/new

### 2️⃣ سجّل دخول بـ GitHub

استخدم نفس الحساب: abdalmaged818

### 3️⃣ استورد المشروع

- ستظهر قائمة مستودعاتك
- - جنب shawarmakit اضغط Import
 
  - ### 4️⃣ اضبط الإعدادات
 
  - في صفحة "Configure Project":
 
  - | الحقل | القيمة |
  - |---|---|
  - | Project Name | shawarmakit |
  - | Framework Preset | Next.js (يكتشفها تلقائياً) |
  - | Root Directory | ./ |
  - | Build Command | اتركها فارغة |
  - | Output Directory | اتركها فارغة |
  - | Install Command | اتركها فارغة |
  - | Environment Variables | لا تضف شيء |
 
  - ### 5️⃣ اضغط Deploy
 
  - الزر الأزرق في الأسفل. انتظر 2-3 دقائق.
 
  - ### 6️⃣ الرابط النهائي
 
  - https://shawarmakit.vercel.app
 
  - ## بعد النشر — إعدادات احترافية
 
  - ### تفعيل Analytics
 
  - 1. ادخل Vercel Dashboard
    2. 2. اختر مشروع shawarmakit
       3. 3. Tab: Analytics > Enable
         
          4. ### تفعيل Speed Insights
         
          5. 1. Tab: Speed Insights > Enable
            
             2. ### ربط نطاق مخصص (لاحقاً)
            
             3. 1. Tab: Settings > Domains
                2. 2. اضغط Add
                   3. 3. أدخل النطاق (مثل shawarmakit.com)
                      4. 4. اتبع تعليمات DNS
                        
                         5. ## التحديث التلقائي
                        
                         6. بعد الإعداد الأول، أي push إلى main = نشر تلقائي خلال 30 ثانية.
                        
                         7. ## استكشاف الأخطاء
                        
                         8. | الخطأ | الحل |
                         9. |---|---|
                         10. | Build failed | افتح Build Logs، انسخ الخطأ، أرسله لـ Claude |
                         11. | الصور لا تظهر | تأكد من وجودها في public/images/ بأسماء عربية |
                         12. | Module not found | شغّل npm install محلياً وارفع package-lock.json |
