export default function Solutions() {
  const solutions = [
    { title: 'إمدادات مستمرة', desc: 'ضمان تدفق الإمدادات دون توقف لضمان استمرارية أعمالكم.', icon: '' },
    { title: 'أسطول نقل حديث', desc: 'نمتلك أسطولا مجهزا بأحدث التقنيات لضمان النقل الآمن.', icon: '' },
    { title: 'جودة لا تضاهى', desc: 'منتجات خاضعة لأدق فحوصات الجودة والمواصفات القياسية.', icon: '' },
    { title: 'رقابة للجودة', desc: 'نظام صارم لمراقبة الجودة في جميع مراحل التوريد.', icon: '' },
    { title: 'دعم فني واستشارات', desc: 'فريق خبراء جاهز لتقديم المشورة الفنية لأفضل الحلول.', icon: '' },
    { title: 'حلول توفير طاقة', desc: 'نساعدك في اختيار الحلول الأكثر كفاءة لتقليل التكاليف.', icon: '' },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">حلول متكاملة لإمدادات الطاقة</h2>
        <p className="text-slate-600 max-w-2xl mx-auto mb-16">
          في نسمات الجنوب نقدم مجموعة شاملة من الخدمات التي تلبي كافة احتياجاتكم
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300 border border-slate-100">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
