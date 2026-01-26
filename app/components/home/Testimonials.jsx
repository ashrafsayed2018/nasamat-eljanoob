export default function Testimonials() {
  return (
    <section className="py-20 bg-slate-50 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-900 mb-12">ماذا قالوا عن نسمات الجنوب</h2>
        
        <div className="bg-white max-w-2xl mx-auto p-8 rounded-2xl shadow-lg border border-slate-100 relative">
          <div className="absolute -top-6 right-1/2 transform translate-x-1/2 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl">
            
          </div>
          <p className="text-slate-600 text-lg leading-relaxed italic mb-6 pt-6">
            "تعامل راقي واحترافية عالية في التوريد. شركة نسمات الجنوب أثبتت أنها شريك يعتمد عليه في مشاريعنا الكبرى."
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 bg-slate-200 rounded-full"></div>
            <div className="text-right">
              <h4 className="font-bold text-slate-900">أ. محمد القحطاني</h4>
              <p className="text-xs text-slate-500">مدير مشاريع - شركة الإنشاءات</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
