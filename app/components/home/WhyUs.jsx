import Image from 'next/image';

export default function WhyUs() {
  const features = [
    'سرعة استجابة فورية للطلبات',
    'تغطية جغرافية شاملة لكافة المناطق',
    'أسعار تنافسية وشفافة',
    'التزام صارم بمواعيد التسليم',
    'فريق عمل محترف ومدرب',
    'خدمة عملاء على مدار الساعة'
  ];

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        {/* Features List */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">لماذا تختار نسمات الجنوب لتوريد الديزل؟</h2>
          <div className="space-y-4">
            {features.map((feat, idx) => (
              <div key={idx} className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                <span className="text-blue-600 ml-4 text-xl">✓</span>
                <span className="font-semibold text-slate-700">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="lg:w-1/2">
           <div className="bg-slate-300 h-96 rounded-2xl w-full flex items-center justify-center relative overflow-hidden shadow-lg">
                <Image
                  src="/images/storage-tank.jpg"
                  alt="خزانات الوقود"
                  fill
                  className="object-cover"
                />
           </div>
        </div>
      </div>
    </section>
  );
}
