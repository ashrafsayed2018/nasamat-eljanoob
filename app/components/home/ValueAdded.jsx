import Link from 'next/link';
import Image from 'next/image';

export default function ValueAdded() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-12">
        
        {/* Image */}
        <div className="lg:w-1/2">
           <div className="bg-slate-200 h-80 rounded-2xl w-full flex items-center justify-center relative overflow-hidden shadow-md">
              <Image 
                src="/images/filling.jpg" 
                alt="عملية تعبئة الوقود" 
                fill 
                className="object-cover"
              />
           </div>
        </div>

        {/* Content */}
        <div className="lg:w-1/2 text-right">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">قيمة مضافة لأعمالك</h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            أن تكون شريكا لنا يعني أن تحصل على أكثر من مجرد خدمة. نحن نضيف قيمة حقيقية لأعمالك من خلال:
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center text-slate-700">
              <span className="w-2 h-2 bg-blue-500 rounded-full ml-3"></span>
              حلول ابتكارية لتقليل التكاليف
            </li>
            <li className="flex items-center text-slate-700">
              <span className="w-2 h-2 bg-blue-500 rounded-full ml-3"></span>
              ضمان استمرارية الأعمال في أصعب الظروف
            </li>
            <li className="flex items-center text-slate-700">
              <span className="w-2 h-2 bg-blue-500 rounded-full ml-3"></span>
              تقارير دورية ومتابعة دقيقة
            </li>
          </ul>
          <Link href="/contact" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-bold transition inline-block">
            اطلب عرض سعر
          </Link>
        </div>

      </div>
    </section>
  );
}
