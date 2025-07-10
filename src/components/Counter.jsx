export default function Counter() {
    return (
        <div className="bg-[#212121]">
            <div className="">
                        {counters.map((counters, i) => (
                            <div
                                key={i}
                                className=""
                            >
                                {/* Replace with your SVG/icon */}
                                <img src={counters.icon} alt={counters.title} className="h-14 w-14 pt-4" />
                                <h2 className="text-white font-bold text-xl mt-4 mb-2 text-center" style={{ fontFamily: "Abril Fatface, serif" }}>
                                    {counters.title}
                                </h2>
                                <p className="text-white text-center text-base pt-4 pb-6 px-6">
                                    {counters.description}
                                </p>
                            </div>
                        ))}
                    </div>
        </div>
    );
}

const counters = [
    {
        title: "Total Haircuts",
        count: 1200,
        icon: "/images/icon-haircut.svg",
    },
    {
        title: "Total Shaves",
        count: 800,
        icon: "/images/icon-shave.svg",
    },
    {
        title: "Total Customers",
        count: 500,
        icon: "/images/icon-customers.svg",
    }
];
