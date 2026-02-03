import Image from 'next/image';

export default function Commitment() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Content */}
        <div className="lg:w-1/2 text-right">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">
            نسمات الجنوب للخدمات اللوجستية
          </h2>
          <h3 className="text-3xl font-bold text-blue-600 mb-6">شريكك الموثوق في الطاقة</h3>
          
          <div className="w-16 h-1 bg-orange-500 mb-6"></div>

          <p className="text-slate-600 leading-relaxed mb-6">
            تعتبر شركة نسمات الجنوب من الشركات الرائدة في مجال النقل البري وتوريد المواد البترولية (الديزل) في المملكة.
            نمتلك خبرة طويلة في تقديم حلول لوجستية متكاملة تضمن استمرارية أعمال عملائنا في مختلف القطاعات.
          </p>
          <p className="text-slate-600 leading-relaxed">
            أسطولنا الحديث وفريقنا المتخصص يعملون بتناغم تام لضمان وصول الوقود إلى موقعك، سواء كان مصنعاً، مشروعاً إنشائياً، أو منشأة تجارية، في الوقت المحدد وبأعلى معايير السلامة.
          </p>
        </div>

        {/* Image */}
        <div className="lg:w-1/2">
          <div className="relative rounded-xl overflow-hidden shadow-lg transform rotate-2 hover:rotate-0 transition duration-500 h-80 w-full">
            <Image
              src="/images/commitment-truck.jpg"
              alt="شاحناتنا في الموقع"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
