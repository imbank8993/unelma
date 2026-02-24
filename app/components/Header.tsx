"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', href: '#' },
        { name: 'Agenda', href: '#' },
        { name: 'Informasi', href: '#' },
        { name: 'CBT', href: '#' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-v2 py-2 shadow-lg' : 'bg-transparent py-4'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-orange-primary rounded-lg flex items-center justify-center font-bold text-white text-xl">U</div>
                    <span className="text-2xl font-bold tracking-tight text-white">
                        Unelma<span className="text-orange-primary">App</span>
                    </span>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-10">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-white/90 hover:text-orange-primary font-medium transition-colors"
                        >
                            {item.name}
                        </a>
                    ))}
                    <button className="btn-orange px-6 py-2 rounded-full font-semibold">
                        Login
                    </button>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isMobileMenuOpen && (
                <div className="md:hidden glass-v2 absolute top-full left-0 right-0 py-6 border-t border-white/10">
                    <div className="flex flex-col items-center space-y-6">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-white text-lg font-medium"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                        <button className="btn-orange px-8 py-3 rounded-full font-semibold">
                            Login
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
