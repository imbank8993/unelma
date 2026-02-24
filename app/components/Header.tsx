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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-3' : 'py-6'
                }`}
        >
            <div className="container mx-auto px-6">
                <div className={`flex justify-between items-center px-8 py-3 rounded-2xl transition-all duration-500 ${isScrolled ? 'glass-v2 shadow-2xl scale-[1.02]' : 'bg-transparent'
                    }`}>
                    <div className="flex items-center space-x-3 group cursor-pointer">
                        <div className="w-10 h-10 bg-orange-primary rounded-xl flex items-center justify-center font-black text-white text-xl shadow-[0_0_20px_rgba(255,140,0,0.3)] transition-transform group-hover:rotate-12">
                            U
                        </div>
                        <span className="text-2xl font-black tracking-tighter text-white">
                            UNELMA<span className="text-orange-primary">APP</span>
                        </span>
                    </div>

                    <nav className="hidden md:flex items-center space-x-12">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-sm font-bold tracking-widest uppercase text-white/70 hover:text-orange-primary transition-all hover:tracking-[0.2em] relative group"
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-primary transition-all group-hover:w-full"></span>
                            </a>
                        ))}
                        <button className="bg-orange-primary hover:bg-orange-dark text-white text-xs font-black uppercase tracking-widest px-8 py-3 rounded-xl transition-all hover:shadow-[0_0_30px_rgba(255,140,0,0.4)] active:scale-95">
                            Login
                        </button>
                    </nav>

                    <button
                        className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="md:hidden glass-v2 mt-4 mx-6 rounded-2xl p-8 border border-white/10"
                >
                    <div className="flex flex-col items-center space-y-8">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-lg font-bold text-white uppercase tracking-widest"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                        <button className="w-full bg-orange-primary text-white font-black uppercase tracking-widest py-4 rounded-xl">
                            Login
                        </button>
                    </div>
                </motion.div>
            )}
        </motion.header>
    );
};

export default Header;
