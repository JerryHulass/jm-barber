export default function Navbar() {
    return (
        <nav>
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">JM Barber Lounge</div>
                <ul className="flex space-x-4">
                    <li><a href="#home" className="text-white hover:text-gray-400">Home</a></li>
                    <li><a href="#services" className="text-white hover:text-gray-400">Services</a></li>
                    <li><a href="#about" className="text-white hover:text-gray-400">About</a></li>
                    <li><a href="#contact" className="text-white hover:text-gray-400">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}