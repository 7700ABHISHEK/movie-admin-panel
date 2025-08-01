import { Menu, X } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ isLogin, setIsLogin }) => {
    const [isMobileView, setIsMobileView] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileView(!isMobileView);
    };

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.setItem("isLoggedIn", JSON.stringify(false));
        setIsLogin(false);
        navigate("/");
    };

    const handleNavClick = (path) => {
        setIsMobileView(false);
        if (path) navigate(path);
    };

    return (
        <header className="fixed top-0 w-full z-50 backdrop-blur-md border border-cyan-400/10 rounded-2xl shadow-[0_0_40px_rgba(0,255,255,0.05)]">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="logo">
                    <Link to="/">
                        <img src="/logo-white.png" alt="logo" className="w-14" />
                    </Link>
                </div>

                <nav className="hidden md:flex gap-7 text-white">
                    <li className="list-none cursor-pointer hover:text-red-400 transition">
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li className="list-none cursor-pointer hover:text-red-400 transition" onClick={() => { handleNavClick("/tv-show") }}>TV Shows</li>
                    <li className="list-none cursor-pointer hover:text-red-400 transition" onClick={() => { handleNavClick("/audio-book") }}>Audio Books</li>
                    {
                        isLogin && <li className="list-none cursor-pointer hover:text-red-400 transition" onClick={() => { handleNavClick("/dashboard") }}>DashBoard</li>
                    }
                    {
                        isLogin && <li className="list-none cursor-pointer hover:text-red-400 transition" onClick={() => { handleNavClick("/add-movie") }}>Add Movie</li>
                    }
                </nav>


                <div className="hidden md:block">
                    {isLogin ? (
                        <button
                            onClick={handleLogout}
                            className="border text-white px-4 py-2 rounded-lg text-sm transition"
                        >
                            Log Out
                        </button>
                    ) : (
                        <button
                            onClick={() => navigate("/login")}
                            className="border text-white px-4 py-2 rounded-lg text-sm transition"
                        >
                            Login
                        </button>
                    )}
                </div>

                <div className="md:hidden text-white">
                    <button onClick={toggleMobileMenu}>
                        {isMobileView ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {isMobileView && (
                <div className="md:hidden fixed top-16 left-0 w-full mt-5 z-40 bg-cyan-950 text-white rounded-b-2xl border-t animate-fade-slide">
                    <div className="flex flex-col gap-6 px-6 py-6">
                        <ul className="flex flex-col gap-4 text-lg font-semibold">
                            <li className="list-none cursor-pointer hover:text-red-400 transition" onClick={() => { handleNavClick("/") }}>
                                <Link to={"/"}>Home</Link>
                            </li>
                            <li className="list-none cursor-pointer hover:text-red-400 transition" onClick={() => { handleNavClick("/tv-show") }}>TV Shows</li>
                            <li className="list-none cursor-pointer hover:text-red-400 transition" onClick={() => { handleNavClick("/audio-book") }}>Audio Books</li>
                            {
                                isLogin && <li className="list-none cursor-pointer hover:text-red-400 transition" onClick={() => { handleNavClick("/dashboard") }}>
                                    <Link to={"/dashboard"}>DashBoard</Link>
                                </li>
                            }
                            {
                                isLogin && <li className="list-none cursor-pointer hover:text-red-400 transition" onClick={() => { handleNavClick("/add-movie") }}>Add Movie</li>
                            }
                        </ul>

                        <div className="pt-2">
                            {isLogin ? (
                                <button
                                    onClick={handleLogout}
                                    className="w-full border bg-gradient-to-t from-black via-[#0f172a] to-[#020617] text-white px-4 py-2 rounded-lg text-sm transition"
                                >
                                    Log Out
                                </button>
                            ) : (
                                <button
                                    onClick={() => handleNavClick("/login")}
                                    className="w-full border bg-gradient-to-t from-black via-[#0f172a] to-[#020617] text-white px-4 py-2 rounded-lg text-sm transition"
                                >
                                    Login
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header