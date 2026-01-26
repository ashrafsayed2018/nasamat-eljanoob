import Image from 'next/image';
import Link from 'next/link';

export default function ContactCTA() {
  return (
    <section className="py-12 bg-slate-900 text-white border-t border-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/images/contact-side.jpg"
          alt="خلفية اتصل بنا"
          fill
          className="object-cover"
        />
      </div>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        <div className="flex items-center gap-6">
          <div className="text-5xl"></div>
          <div>
            <h2 className="text-2xl font-bold mb-2">نحن بانتظار تواصلكم</h2>
            <p className="text-slate-400 text-sm">جاهزون لخدمتكم وتلبية طلباتكم في أي وقت</p>
          </div>
        </div>
        
        <div className="flex gap-4">
           <a href="tel:0545829769" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold transition">
             اتصل بنا الآن
           </a>
           <a href="https://wa.me/966545829769" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-bold transition">
             واتساب
           </a>
        </div>
      </div>
    </section>
  );
}
