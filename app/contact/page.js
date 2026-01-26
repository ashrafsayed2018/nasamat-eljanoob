import Image from 'next/image';

export const metadata = {
  title: 'اتصل بنا | نسمات الجنوب',
  description: 'تواصل مع شركة نسمات الجنوب.',
}

export default function Contact() {
  return (
    <div className="py-8 max-w-5xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">تواصل معنا</h1>
      
      <div className="grid md:grid-cols-5 gap-8 bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
        
        {/* Contact Info Sidebar */}
        <div className="md:col-span-2 bg-slate-900 text-white p-8 md:p-10 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
             <Image
               src="/images/contact-side.jpg"
               alt="تواصل معنا"
               fill
               className="object-cover"
             />
          </div>
          <div className="relative z-10">
            <div>
            <h2 className="text-2xl font-bold mb-6">بيانات الاتصال</h2>
            <p className="text-slate-300 mb-8 text-sm leading-relaxed">يسعدنا تواصلكم معنا لأي استفسار أو طلب عرض سعر. فريقنا جاهز لخدمتكم.</p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="text-blue-400 text-xl">📍</span>
                <div>
                  <h3 className="font-bold text-sm text-slate-200">العنوان</h3>
                  <p className="text-slate-400 text-sm">المملكة العربية السعودية<br/>المنطقة الجنوبية</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="text-blue-400 text-xl"></span>
                <div dir="ltr" className="text-right">
                  <h3 className="font-bold text-sm text-slate-200">الهاتف</h3>
                  <a href="tel:0545829769" className="block text-slate-400 hover:text-white transition text-sm">054 582 9769</a>
                  <a href="tel:+966530305352" className="block text-slate-400 hover:text-white transition text-sm">+966 53 030 5352</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-blue-400 text-xl"></span>
                <div>
                  <h3 className="font-bold text-sm text-slate-200">البريد الإلكتروني</h3>
                  <a href="mailto:asdqlan2@gmail.com" className="text-slate-400 hover:text-white transition text-sm break-all">asdqlan2@gmail.com</a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10">
             <a href="https://wa.me/966530305352" target="_blank" className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl transition font-bold">
               <span>تواصل عبر واتساب</span>
               <span className="text-xl"></span>
             </a>
          </div>
        </div>
      </div>

        {/* Contact Form */}
        <div className="md:col-span-3 p-8 md:p-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">أرسل رسالة</h2>
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">الاسم</label>
                    <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" placeholder="الاسم الكريم" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">رقم الجوال</label>
                    <input type="tel" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" placeholder="05xxxxxxxx" />
                </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">الموضوع</label>
              <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" placeholder="عنوان الرسالة" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">الرسالة</label>
              <textarea rows="4" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" placeholder="اكتب تفاصيل استفسارك هنا..."></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-900 text-white font-bold py-4 rounded-xl hover:bg-blue-800 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              إرسال الطلب
            </button>
          </form>
        </div>

      </div>
    </div>
  )
}
