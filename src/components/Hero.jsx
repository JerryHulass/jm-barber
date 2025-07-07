export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Blurred background, slightly larger than the container */}
      <div className="absolute inset-0 -m-4 bg-[url('/images/barbershop-bg.jpg')] bg-cover bg-center grayscale blur-sm"></div>
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
      </div>
    </div>
  );
}