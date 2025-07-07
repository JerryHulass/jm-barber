import Navbar from "./Navbar";

export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Blurred background */}
      <div className="absolute inset-0 -m-4 bg-[url('/images/barbershop-bg.jpg')] bg-cover bg-center grayscale blur-sm"></div>
      {/* Content above background */}
      <div className="relative z-10 h-full flex flex-col">
        <Navbar />
        <div className="flex flex-1 items-center justify-center">
          <img src="/images/jm-logo3.svg" alt="JM Barber Lounge" className="w-48" />
        </div>
      </div>
    </div>
  );
}