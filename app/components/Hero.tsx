"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-orange-primary/10 blur-[120px] rounded-full -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-navy-dark/40 blur-[100px] rounded-full -ml-10 -mb-10"></div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-orange-primary text-sm font-medium mb-8"
                >
                    <Sparkles size={16} />
                    <span>Sistem Akademik Terpadu & Modern</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6"
                >
                    Solusi Cerdas untuk <br />
                    <span className="text-gradient">Masa Depan Pendidikan</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    Mengintegrasikan manajemen sekolah, agenda akademik, dan sistem ujian online dalam satu platform yang elegan dan efisien.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
                >
                    <button className="btn-orange px-8 py-4 rounded-xl font-bold flex items-center space-x-2 w-full sm:w-auto justify-center">
                        <span>Mulai Sekarang</span>
                        <ArrowRight size={20} />
                    </button>
                    <button className="px-8 py-4 rounded-xl font-bold border border-white/20 text-white hover:bg-white/5 transition-colors w-full sm:w-auto">
                        Pelajari Selengkapnya
                    </button>
                </motion.div>
            </div>

            {/* Decorative Image/UI Placeholder */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="container mx-auto px-6 mt-20"
            >
                <div className="max-w-5xl mx-auto glass-effect rounded-[2rem] p-4 shadow-2xl relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-orange-primary/5 to-transparent rounded-[2rem]"></div>
                    <div className="bg-navy-dark rounded-xl overflow-hidden aspect-[16/9] border border-white/5 flex items-center justify-center group">
                        {/* Simulating a dashboard UI */}
                        <div className="w-full h-full p-8 flex flex-col space-y-6">
                            <div className="flex space-x-4">
                                <div className="w-32 h-8 bg-white/5 rounded-md animate-pulse"></div>
                                <div className="w-24 h-8 bg-white/5 rounded-md animate-pulse"></div>
                            </div>
                            <div className="grid grid-cols-3 gap-6">
                                <div className="h-40 bg-white/5 rounded-xl border border-white/10 flex flex-col items-center justify-center">
                                    <div className="w-12 h-12 bg-orange-primary/20 rounded-full mb-4"></div>
                                    <div className="w-20 h-4 bg-white/10 rounded"></div>
                                </div>
                                <div className="h-40 bg-white/5 rounded-xl border border-white/10 flex flex-col items-center justify-center">
                                    <div className="w-12 h-12 bg-orange-primary/20 rounded-full mb-4"></div>
                                    <div className="w-20 h-4 bg-white/10 rounded"></div>
                                </div>
                                <div className="h-40 bg-white/5 rounded-xl border border-white/10 flex flex-col items-center justify-center">
                                    <div className="w-12 h-12 bg-orange-primary/20 rounded-full mb-4"></div>
                                    <div className="w-20 h-4 bg-white/10 rounded"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
