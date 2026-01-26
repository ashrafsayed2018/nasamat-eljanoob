import Image from 'next/image';

export const metadata = {
  title: 'مشاريعنا | نسمات الجنوب',
  description: 'سابقة أعمال شركة نسمات الجنوب.',
}

export default function Portfolio() {
  return (
    <div className="py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">مشاريعنا</h1>
        <p className="text-slate-600">نفخر بكوننا جزءاً من نجاح هذه المشاريع المميزة</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100">
            {/* Project Image */}
            <div className="h-64 bg-slate-200 relative overflow-hidden">
                <Image
                  src={`/images/portfolio-${item}.jpg`}
                  alt={`مشروع ${item}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-slate-900">مشروع توريد محطة {item}</h3>
                <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-md font-bold">مكتمل</span>
              </div>
              <p className="text-slate-600 mb-4 text-sm">تم توريد كابلات الضغط المتوسط ومحولات التوزيع لهذا المشروع وفق الجدول الزمني المحدد.</p>
              <button className="text-blue-600 font-bold text-sm hover:underline">عرض التفاصيل &larr;</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
