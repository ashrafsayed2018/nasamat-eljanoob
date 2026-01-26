export default function Stats() {
  const stats = [
    { num: '+1.5', label: 'مليون كم', sub: 'مسافات مقطوعة' },
    { num: '100%', label: 'تغطية شاملة', sub: 'لمناطق المملكة' },
    { num: '+200', label: 'مشروع', sub: 'تم إنجازه بنجاح' },
    { num: '+10', label: 'خبرة عريقة', sub: 'سنوات من التميز' },
  ];

  return (
    <section className="py-16 bg-slate-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-blue-400 mb-2">إنجازاتنا</h2>
        <h3 className="text-3xl font-bold mb-12">ثقة نعتز بها</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-slate-700/50 p-6 rounded-xl backdrop-blur-sm border border-slate-600">
              <div className="text-3xl lg:text-4xl font-bold text-orange-500 mb-2" dir="ltr">{stat.num}</div>
              <div className="text-xl font-bold mb-1">{stat.label}</div>
              <div className="text-slate-400 text-sm">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
