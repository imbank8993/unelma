"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
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
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled ? 'py-4' : 'py-8'
                }`}
        >
            <div className="container mx-auto px-6">
                <div className={`flex justify-between items-center px-8 py-4 rounded-3xl transition-all duration-700 ${isScrolled ? 'glass-soft shadow-xl scale-[1.01]' : 'bg-transparent'
                    }`}>
                    <div className="flex items-center space-x-4 group cursor-pointer">
                        <div className="w-10 h-10 bg-orange-soft rounded-2xl flex items-center justify-center font-bold text-navy-soft shadow-lg transition-transform group-hover:rotate-6">
                            U
                        </div>
                        <span className="text-xl font-bold tracking-tight text-white/90">
                            unelma<span className="text-orange-soft">app</span>
                        </span>
                    </div>

                    <nav className="hidden md:flex items-center space-x-10">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-white/60 hover:text-white transition-all relative group"
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-orange-soft transition-all group-hover:w-full"></span>
                            </a>
                        ))}
                        <button className="btn-soft-orange px-8 py-2.5 rounded-xl text-sm tracking-wide">
                            Sign In
                        </button>
                    </nav>

                    <button
                        className="md:hidden text-white/70"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden glass-soft mt-4 mx-6 rounded-3xl p-8 border border-white/5"
                >
                    <div className="flex flex-col items-center space-y-6">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-lg font-medium text-white/80"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                        <button className="w-full btn-soft-orange py-4 rounded-2xl">
                            Sign In
                        </button>
                    </div>
                </motion.div>
            )}
        </motion.header>
    );
};

export default Header;
