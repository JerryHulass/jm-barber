import Shuffle from "./Shuffle";
import { FiCloudLightning } from "react-icons/fi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Services() {
    return (
        <div className="w-full min-h-full bg-[url('/images/img.png')] bg-cover bg-top flex flex-col ">
            <div className="items-center justify-center flex flex-col mt-10 mb-14">
                <p className="text-[#E9C664] text-2xl" style={{ fontFamily: "Inter, serif" }}>Our Treatment</p>
                <h1 className="text-white font-{abril} text-5xl" style={{ fontFamily: "Abril Fatface, serif" }}>Services</h1>
            </div>
            {/* Mobile: show ShuffleCards, hide gold cards */}
            <div className="sm:hidden w-full">
                <Shuffle />
            </div>
            {/* Desktop: show gold cards, hide ShuffleCards */}
            <div className="hidden sm:flex w-full flex-col items-center md:items-start">
                <div className="w-full md:w-3/5 lg:w-2/5 md:p-16 flex flex-col items-center md:items-start">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-96 md:max-w-md md:mx-auto justify-center items-center md:justify-start md:items-start">
                        {cards.map((card, i) => (
                          <div key={i} className="group relative mx-auto w-full max-w-[330px] min-w-[220px] min-h-[220px] md:min-w-[330px] overflow-hidden rounded-lg bg-transparent p-0.5 transition-all duration-500 hover:scale-[1.01] hover:bg-[#E9C664]/10">
                            <div className="relative z-10 flex flex-col items-center justify-center overflow-hidden rounded-[7px] bg-transparent p-0 transition-colors duration-500 group-hover:bg-[#E9C664]/5">
                              <img src={card.icon} alt={card.title} className="h-14 w-14 pt-4" />
                              <h2 className="text-white font-bold text-xl mt-4 mb-2 text-center" style={{ fontFamily: 'Abril Fatface, serif' }}>
                                {card.title}
                              </h2>
                              <p className="text-white text-center text-base pt-4 pb-6 px-6">
                                {card.description}
                              </p>
                            </div>
                            <motion.div
                              initial={{ rotate: "0deg" }}
                              animate={{ rotate: "360deg" }}
                              style={{ scale: 1.75 }}
                              transition={{
                                repeat: Infinity,
                                duration: 3.5,
                                ease: "linear",
                              }}
                              className="absolute inset-0 z-0 bg-gradient-to-br from-[#E9C664] via-[#E9C664]80 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                            />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="pt-12 pb-44 items-center justify-center flex">
                <Link
                    to="/services"
                    className="relative items-center justify-center px-10 py-4 overflow-hidden inter tracking-tighter text-white group border-2"
                    style={{ borderColor: "#E9C664" }}
                >
                    <span
                        className="absolute left-1/2 top-1/2 w-0 h-0 transition-all duration-500 ease-out bg-[#E9C664] rounded-full group-hover:w-56 group-hover:h-56 -translate-x-1/2 -translate-y-1/2"
                    />
                    <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent"></span>
                    <span className="relative">Load More</span>
                </Link>
            </div>
        </div>
    );
}

const cards = [
    {
        title: "FULL HAIRCUT WITHOUT SHAVE",
        description: "Duis porta, ligula rhoncus euismod pretium, nisl tellus eleifend odio, luctus viverra sem.",
        icon: "/images/scissors.svg",
    },
    {
        title: "FULL HAIRCUT WITH SHAVE",
        description: "Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod.",
        icon: "/images/razor.svg", 
    },
    {
        title: "KIDS CUT",
        description: "Aenean lacinia bibendum nulla sed consectetur. Sed posuere consectetur est at lobortis.",
        icon: "/images/facial.svg",
    },
    {
        title: "SHAVE",
        description: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla.",
        icon: "/images/beard.svg",
    }
];













const ShimmerBorderCard = () => {
  return (
    <div className="group relative mx-auto w-full max-w-sm overflow-hidden rounded-lg bg-slate-800 p-0.5 transition-all duration-500 hover:scale-[1.01] hover:bg-slate-800/50">
      <div className="relative z-10 flex flex-col items-center justify-center overflow-hidden rounded-[7px] bg-slate-900 p-8 transition-colors duration-500 group-hover:bg-slate-800">
        <FiCloudLightning className="relative z-10 mb-10 mt-2 rounded-full border-2 border-indigo-500 bg-slate-900 p-4 text-7xl text-indigo-500" />

        <h4 className="relative z-10 mb-4 w-full text-3xl font-bold text-slate-50">
          Go faster
        </h4>
        <p className="relative z-10 text-slate-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est ipsum
          sed blanditiis iste molestias nemo nobis repellendus nisi dolorum
          itaque optio impedit cum voluptatem facilis minima, quasi laborum.
          Nihil, quaerat.
        </p>
      </div>

      <motion.div
        initial={{ rotate: "0deg" }}
        animate={{ rotate: "360deg" }}
        style={{ scale: 1.75 }}
        transition={{
          repeat: Infinity,
          duration: 3.5,
          ease: "linear",
        }}
        className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-200 via-indigo-200/0 to-indigo-200 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
    </div>
  );
};
