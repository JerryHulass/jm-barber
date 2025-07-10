export default function Counter() {
    return (
        <div className="bg-[#212121]">
            <div className="md:grid md:grid-cols-3 p-8 px-14">
                        {counters.map((counters, i) => (
                            <div
                                key={i}
                                className=""
                            >
                                {/* Replace with your SVG/icon */}
                                <img src={counters.icon} alt={counters.title} className="h-28 w-28 pt-4 mx-auto" />
                                <h2 className="text-[#E9C664] font-bold text-4xl mt-4 mb-2 text-center" style={{ fontFamily: "Abril Fatface, serif" }}>
                                    {counters.count}
                                </h2>
                                <p className="text-white text-center text-lg pt-4 pb-6 px-6" style={{ fontFamily: "Abril Fatface, serif" }}>
                                    {counters.title}
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
        icon: "/images/scissors.svg",
    },
    {
        title: "Total Shaves",
        count: 800,
        icon: "/images/razor2.svg",
    },
    {
        title: "Total Customers",
        count: 500,
        icon: "/images/hair.svg",
    }
];
