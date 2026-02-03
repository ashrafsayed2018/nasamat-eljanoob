export default function Solutions() {
  const solutions = [
    { title: 'توريد للمواقع النائية', desc: 'نصل إلى أصعب المواقع والمشاريع الإنشائية البعيدة بكفاءة عالية.', icon: '🚚' },
    { title: 'عقود توريد مرنة', desc: 'خيارات تعاقد يومية، أسبوعية، وشهرية تناسب حجم أعمالكم.', icon: '📝' },
    { title: 'جودة وقود مضمونة', desc: 'ديزل عالي الجودة مطابق لمواصفات أرامكو السعودية.', icon: '⭐' },
    { title: 'أسطول نقل متخصص', desc: 'شاحنات وصهاريج حديثة بمختلف الأحجام لتلبية كافة الطلبات.', icon: '🚛' },
    { title: 'خدمة طوارئ 24/7', desc: 'فريق جاهز لتلبية طلبات التوريد الطارئة في أي وقت.', icon: '🚨' },
    { title: 'حلول تخزين آمنة', desc: 'توفير خزانات وقود متنقلة وثابتة مطابقة لمعايير السلامة.', icon: '🛢️' },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">خدماتنا في توريد ونقل الديزل</h2>
        <p className="text-slate-600 max-w-2xl mx-auto mb-16">
          نقدم باقة متكاملة من الخدمات اللوجستية لضمان استمرارية أعمالكم دون انقطاع
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
