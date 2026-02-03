'use client'
import { useState } from 'react'

export default function FAQ() {
  const faqs = [
    {
      question: 'ما هي أقل كمية يمكن طلبها لتوريد الديزل؟',
      answer:
        'نحن في نسمات الجنوب نتميز بالمرونة العالية. يمكننا توريد كميات تبدأ من 1000 لتر وحتى عقود التوريد الضخمة للمصانع والمشاريع الكبرى.',
    },
    {
      question: 'هل توفرون خزانات لحفظ الديزل في الموقع؟',
      answer:
        'نعم، نوفر حلول تخزين متكاملة تشمل خزانات بأحجام مختلفة مع مضخات وعدادات، مطابقة لاشتراطات الدفاع المدني والسلامة.',
    },
    {
      question: 'هل تصل خدماتكم للمناطق النائية والوعرة؟',
      answer:
        'بالتأكيد. أسطولنا مجهز بشاحنات قادرة على الوصول إلى المواقع الإنشائية والمحاجر والمزارع في المناطق البعيدة والوعرة في جميع أنحاء المملكة.',
    },
    {
      question: 'كيف تضمنون جودة الديزل المورد؟',
      answer:
        'نحن نورد الديزل مباشرة من محطات أرامكو، ونلتزم بمعايير صارمة في النقل والتخزين لضمان وصول المنتج لكم نقيًا وخاليًا من أي شوائب.',
    },
    {
      question: 'هل تتوفر لديكم خدمة التوريد الطارئ؟',
      answer:
        'نعم، لدينا فريق طوارئ يعمل على مدار 24 ساعة لتلبية الاحتياجات العاجلة والمفاجئة لعملائنا لضمان عدم توقف أعمالهم.',
    },
  ]

  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className='py-20 bg-white'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl font-bold text-slate-900 mb-4'>
            الأسئلة الشائعة
          </h2>
          <div className='w-20 h-1 bg-blue-600 mx-auto rounded-full'></div>
        </div>

        <div className='max-w-3xl mx-auto'>
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className='mb-4 border-b border-slate-200 last:border-0'
            >
              <button
                className='w-full text-right py-4 flex items-center justify-between focus:outline-none'
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
              >
                <span className='text-lg font-bold text-slate-800'>
                  {faq.question}
                </span>
                <span
                  className={`text-2xl text-blue-600 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}
                >
                  {openIndex === idx ? '−' : '+'}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${openIndex === idx ? 'max-h-40 opacity-100 pb-4' : 'max-h-0 opacity-0'}`}
              >
                <p className='text-slate-600 leading-relaxed pr-4 border-r-2 border-blue-100 mr-2'>
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
