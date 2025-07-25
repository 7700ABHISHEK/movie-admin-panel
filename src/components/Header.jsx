import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Hamburger & close icons (install lucide-react if needed)

const Header = () => {
    const [isMobileView, setIsMobileView] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileView(!isMobileView);
    };

    const navItems = ["Home", "Movies", "TV Shows", "Audio books", "Blog"];

    return (
        <header className="fixed top-0 w-full z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="logo">
                    <a href="/">
                        <img src="/logo-white.png" alt="logo" className="w-14" />
                    </a>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-7 text-white">
                    {navItems.map((item, idx) => (
                        <li key={idx} className="list-none cursor-pointer hover:text-red-400 transition">{item}</li>
                    ))}
                </nav>

                {/* Login Button (Desktop) */}
                <div className="hidden md:block">
                    <button className="px-5 py-2 border bg-red-500 text-white rounded-xl hover:bg-red-600 transition">Login</button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden text-white">
                    <button onClick={toggleMobileMenu}>
                        {isMobileView ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMobileView && (
                <div className="md:hidden px-6 pb-4 text-white bg-indigo-600">
                    <ul className="flex flex-col gap-4 p-4 px-10">
                        {navItems.map((item, idx) => (
                            <li key={idx} className="cursor-pointer hover:text-red-400 transition">{item}</li>
                        ))}
                        <li>
                            <button className="w-full px-4 py-2 mt-2 bg-red-500 rounded-xl hover:bg-red-600 transition">Login</button>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;
