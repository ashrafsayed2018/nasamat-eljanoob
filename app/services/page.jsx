import Image from 'next/image';

export const metadata = {
  title: 'خدماتنا ومنتجاتنا – كابلات ومحولات وأنظمة طاقة',
  description:
    'خدمات شركة نسمات الجنوب: توريد الكابلات الكهربائية، أنظمة الإنارة LED، المحولات والمولدات، لوحات التوزيع، مواد التأريض، والمواد الاستهلاكية الكهربائية في السعودية.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'خدماتنا ومنتجاتنا – نسمات الجنوب',
    description:
      'توريد الكابلات الكهربائية، أنظمة الإنارة LED، المحولات والمولدات، لوحات التوزيع وجميع مواد الطاقة في المملكة العربية السعودية.',
    url: '/services',
    images: [
      {
        url: '/images/services-main.jpg',
        width: 1200,
        height: 630,
        alt: 'خدمات نسمات الجنوب – مواد الطاقة والكهرباء',
      },
    ],
  },
  twitter: {
    title: 'خدماتنا ومنتجاتنا – نسمات الجنوب',
    description:
      'توريد الكابلات الكهربائية، أنظمة الإنارة LED، المحولات والمولدات وجميع مواد الطاقة في السعودية.',
    images: ['/images/services-main.jpg'],
  },
}

export default function Services() {
  const services = [
    { icon: "", title: "الكابلات والموصلات", desc: "توريد جميع أنواع الكابلات (جهد منخفض متوسط عالي) والأسلاك المعزولة وموصلات الربط." },
    { icon: "", title: "أنظمة الإنارة", desc: "حلول إنارة الشوارع الإنارة الصناعية والإنارة الديكورية بتقنيات LED الموفرة للطاقة." },
    { icon: "", title: "المحولات والمولدات", desc: "توفير محولات التوزيع ومولدات الطاقة بقدرات مختلفة لتلبية احتياجات المشاريع." },
    { icon: "", title: "لوحات التوزيع", desc: "تصميم وتجميع وتوريد لوحات التوزيع والتحكم الكهربائية وفق المواصفات المعتمدة." },
    { icon: "", title: "مواد التأريض", desc: "أنظمة التأريض والحماية من الصواعق لضمان سلامة المنشآت والمعدات." },
    { icon: "📦", title: "المواد الاستهلاكية", desc: "كافة مواد التأسيس الكهربائي، المفاتيح، الأفياش، وأنابيب التمديد." }
  ];

  return (
    <div className="py-8">
      <div className="relative h-64 md:h-80 rounded-3xl overflow-hidden mb-12 mx-4 md:mx-0 shadow-xl">
        <Image 
          src="/images/services-main.jpg" 
          alt="خدماتنا" 
          fill 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/40 flex items-center justify-center">
            <div className="text-center p-6">
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">خدماتنا ومنتجاتنا</h1>
                <p className="text-blue-200 text-lg md:text-xl max-w-2xl mx-auto">نغطي كافة احتياجاتك من مواد الطاقة والكهرباء تحت سقف واحد</p>
            </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 group">
            <div className="text-4xl mb-6 bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">{service.title}</h3>
            <p className="text-slate-600 leading-relaxed">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
