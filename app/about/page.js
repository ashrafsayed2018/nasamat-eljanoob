import Image from 'next/image';

export const metadata = {
  title: 'من نحن | نسمات الجنوب',
  description: 'تعرف على شركة نسمات الجنوب ورؤيتها في مجال الطاقة.',
}

export default function About() {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="bg-slate-900 p-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <Image 
                src="/images/about-main.jpg" 
                alt="خلفية من نحن" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="relative z-10">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">من نحن</h1>
              <p className="text-blue-300">قصة نجاح وتميز في عالم الطاقة</p>
            </div>
        </div>
        
        <div className="p-8 md:p-12 space-y-8 text-lg leading-relaxed text-slate-700">
          <div className="prose prose-lg max-w-none">
            <p className="font-semibold text-slate-900">
              شركة <span className="text-blue-600">نسمات الجنوب التجاريه</span> لتوريد مواد الطاقة.
            </p>
            <p>
              نحن شركة وطنية رائدة تتخذ من المملكة العربية السعودية مقراً لها، متخصصة في تقديم حلول التوريد المتكاملة لقطاع الطاقة والكهرباء. 
              منذ تأسيسنا، ونحن نعمل بجد لتلبية احتياجات السوق المتنامية من المواد الكهربائية ذات الجودة العالية.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-slate-50 p-6 rounded-xl border-r-4 border-blue-500">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">رؤيتنا</h2>
              <p>أن نكون الشريك الاستراتيجي الأول لقطاع المقاولات والصناعة في مجال حلول الطاقة، من خلال تقديم منتجات مبتكرة ومستدامة.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border-r-4 border-blue-500">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">رسالتنا</h2>
              <p>توفير مواد طاقة عالية الجودة بأسعار تنافسية، مع الالتزام التام بمواعيد التسليم ورضا العملاء.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
