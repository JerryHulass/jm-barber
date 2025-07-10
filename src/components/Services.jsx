export default function Services() {
    return (
        <div className="w-full bg-[url('/images/img.png')] bg-cover bg-top flex flex-col items-center justify-center">
            <div className="items-center justify-center flex flex-col mt-10 mb-14">
                <p className="text-[#E9C664] text-2xl" style={{ fontFamily: "Inter, serif" }}>Our Treatment</p>
                <h1 className="text-white font-{abril} text-5xl" style={{ fontFamily: "Abril Fatface, serif" }}>Services</h1>
            </div>
            {/* This wrapper controls the width for both grid and button */}
            <div className="w-full flex flex-col items-center">
                <div className="w-full md:w-3/5 flex flex-col items-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 p-10 md:gap-22 lg:gap-8 w-full">
                        {[1, 2, 3, 4].map((i) => (
                            <div
                                key={i}
                                className="flex flex-col items-center justify-center border-2 border-[#E9C664] bg-transparent min-w-[220px] min-h-[220px] max-w-[330px]"
                            >
                                {/* Replace with your SVG/icon */}
                                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                                    <path d="M15 15L45 45" stroke="#E9C664" strokeWidth="3" />
                                    <path d="M45 15L15 45" stroke="#E9C664" strokeWidth="3" />
                                </svg>
                                <h2 className="text-white font-bold text-xl mt-4 mb-2 text-center" style={{ fontFamily: "Abril Fatface, serif" }}>
                                    HAIRCUT & BEARD TRIM
                                </h2>
                                <p className="text-white text-center text-base pt-4 pb-6 px-6">
                                    Duis porta, ligula rhoncus euismod pretium, nisl tellus eleifend odio, luctus viverra sem.
                                </p>
                            </div>
                        ))}
                    </div>
                    <a
                        href="#_"
                        className="mt-4 relative items-center justify-center px-10 py-4 overflow-hidden inter tracking-tighter text-white group border-2"
                        style={{ borderColor: "#E9C664" }}
                    >
                        <span
                          className="absolute left-1/2 top-1/2 w-0 h-0 transition-all duration-500 ease-out bg-[#E9C664] rounded-full group-hover:w-56 group-hover:h-56 -translate-x-1/2 -translate-y-1/2"
                        />
                        <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent"></span>
                        <span className="relative">Load More</span>
                    </a>
                </div>
            </div>
        </div>
    );
}