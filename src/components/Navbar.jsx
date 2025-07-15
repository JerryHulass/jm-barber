import CornerNav from "./CornerNav";
import { Link } from "react-router-dom";

export default function Navbar() {

    return (
        <nav className="flex items-center pt-8 pr-8 pl-8 justify-end md:justify-between relative">
            {/* Mobile menu icon */}
            <div className="flex-1 flex justify-end md:justify-start md:hidden">
                <CornerNav />
            </div>
            {/* Centered navbar links (desktop only) */}
            <div className="hidden md:flex flex-1 justify-center">
                <ul className="flex flex-row gap-10 text-white inter whitespace-nowrap">
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                </ul>
            </div>
            {/* Book Appointment button (desktop only) */}
            <div className="flex-1 hidden md:flex justify-end sm:pl-5">
                <Link
                    to="/about"
                    className="relative items-center justify-center px-10 py-4 overflow-hidden inter tracking-tighter text-white group border-2"
                    style={{ borderColor: "#E9C664" }}
                >
                    <span
                      className="absolute left-1/2 top-1/2 w-0 h-0 transition-all duration-500 ease-out bg-[#E9C664] rounded-full group-hover:w-56 group-hover:h-56 -translate-x-1/2 -translate-y-1/2"
                    />
                    <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent"></span>
                    <span className="relative">Book Appointment</span>
                </Link>
            </div>
        
        </nav>
    );
}

