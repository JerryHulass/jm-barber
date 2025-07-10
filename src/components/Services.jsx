export default function Services() {
    return (
        <div className="w-full min-h-full bg-[url('/images/img.png')] bg-cover bg-top flex flex-col ">
            <div className="items-center justify-center flex flex-col mt-10 mb-14">
                <p className="text-[#E9C664] text-2xl" style={{ fontFamily: "Inter, serif" }}>Our Treatment</p>
                <h1 className="text-white font-{abril} text-5xl" style={{ fontFamily: "Abril Fatface, serif" }}>Services</h1>
            </div>
            {/* This wrapper controls the width for both grid and button */}
            <div className="w-full flex flex-col items-center md:items-start">
                <div className="w-full md:w-3/5 lg:w-2/5 md:p-16 flex flex-col items-center md:items-start">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-96 md:max-w-md md:mx-auto justify-center items-center md:justify-start md:items-start">
                        {cards.map((card, i) => (
                            <div
                                key={i}
                                className="flex flex-col items-center justify-center border-2 border-[#E9C664] bg-transparent min-w-[220px] min-h-[220px] max-w-[330px] 
                                md:min-w-[330px]"
                            >
                                {/* Replace with your SVG/icon */}
                                <img src={card.icon} alt={card.title} className="h-14 w-14 pt-4" />
                                <h2 className="text-white font-bold text-xl mt-4 mb-2 text-center" style={{ fontFamily: "Abril Fatface, serif" }}>
                                    {card.title}
                                </h2>
                                <p className="text-white text-center text-base pt-4 pb-6 px-6">
                                    {card.description}
                                </p>
                            </div>
                        ))}
                    </div>
                    
                </div>
               
            </div>
            <div className="pt-12 pb-44 items-center justify-center flex">
                    <a
                        href="#_"
                        className="relative items-center justify-center px-10 py-4 overflow-hidden inter tracking-tighter text-white group border-2"
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
    );
}

const cards = [
    {
        title: "FULL HAIRCUT WITHOUT SHAVE",
        description: "Duis porta, ligula rhoncus euismod pretium, nisl tellus eleifend odio, luctus viverra sem.",
        icon: "/images/icon-scissors.svg",
    },
    {
        title: "FULL HAIRCUT WITH SHAVE",
        description: "Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod.",
        icon: "/images/icon razor.svg", 
    },
    {
        title: "KIDS CUT",
        description: "Aenean lacinia bibendum nulla sed consectetur. Sed posuere consectetur est at lobortis.",
        icon: "/images/icon-scissors.svg",
    },
    {
        title: "SHAVE",
        description: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla.",
        icon: "/images/icon beard.svg",
    }
];