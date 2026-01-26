import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative bg-slate-900 text-white h-[80vh] min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-truck.jpg"
          alt="شاحنة نقل وقود نسمات الجنوب"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-slate-900/70"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl lg:text-7xl font-extrabold mb-8 leading-tight">
            طاقة تصلك ... <br />
            <span className="text-blue-500">أينما كنت</span>
          </h1>
          <p className="text-slate-200 text-xl mb-10 leading-relaxed">
            نقدم حلولا لوجستية متكاملة لتوريد مواد الطاقة والوقود بأعلى معايير الأمان والجودة لجميع مناطق المملكة.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition shadow-lg hover:shadow-blue-500/30">
              تواصل معنا
            </Link>
            <Link href="/services" className="bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white hover:text-slate-900 text-white px-10 py-4 rounded-xl font-bold text-lg transition">
              خدماتنا
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
