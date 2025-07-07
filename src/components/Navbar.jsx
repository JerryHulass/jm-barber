export default function Navbar() {
    return (
        <nav className="flex sm:items-row sm:justify-between pt-8 pr-8 justify-end">
            <div>
                <a href="index.html">
                    <img src="/images/menu-icon.svg" alt="JM Barber Lounge" className="w-11 block sm:hidden" />
                </a>
            </div>
            <div>
                <ul className=" flex-row gap-10 text-white inter hidden md:inline-flex">
                    <li>
                        <a href="index.html">Home</a>
                    </li>
                    <li>
                        <a href="index.html">Services</a>
                    </li>
                    <li>
                        <a href="index.html">About Us</a>
                    </li>
                    <li>
                        <a href="index.html">Contact Us</a>
                    </li>
                </ul>
            </div>
            <div>
                <a href="#_" class="relative items-center justify-center px-10 py-4 overflow-hidden inter tracking-tighter text-white group border-2 hidden md:inline-flex"
                style={{ borderColor: "#E9C664" }}>
                <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#E9C664] rounded-full group-hover:w-56 group-hover:h-56"></span>
                <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent"></span>
                <span class="relative">Book Appointment</span>
                </a>
            </div>
        </nav>
    );
}

