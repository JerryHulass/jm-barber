import Navbar from "../components/Navbar";

export default function ServicesPage() {
 return (
    <div className="bg-[url('/images/img.png')] bg-cover bg-top">
        <Navbar />
        <div className="min-h-screen w-full flex flex-col items-center justify-center">
        
            <div className="bg-[#212121]/90 rounded-2xl shadow-2xl px-8 py-16 flex flex-col items-center border-2 border-[#E9C664]">
            <img src="/images/jm-logo3.svg" alt="JM Barber Lounge" className="w-24 mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-[#E9C664] mb-4" style={{ fontFamily: 'Abril Fatface, serif' }}>
                Coming Soon
            </h1>
            <p className="text-white text-lg md:text-xl text-center mb-8 max-w-md" style={{ fontFamily: 'Inter, serif' }}>
            Our Services page is under construction.<br />Check back soon to learn more about JM Barber Lounge!
            </p>
            <div className="flex items-center gap-2 animate-pulse">
            <span className="inline-block w-3 h-3 rounded-full bg-[#E9C664]" />
            <span className="inline-block w-3 h-3 rounded-full bg-[#E9C664]/70" />
            <span className="inline-block w-3 h-3 rounded-full bg-[#E9C664]/40" />
            </div>
        </div>
        </div>
    </div>
  );
}