"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#000814]">
            {/* Vibrant Gaussian Backgrounds */}
            <div className="gaussian-blur w-[600px] h-[600px] bg-navy top-[-10%] left-[-10%] animate-pulse-slow"></div>
            <div className="gaussian-blur w-[500px] h-[500px] bg-navy-accent bottom-[-5%] right-[-5%] animate-float"></div>
            <div className="gaussian-blur w-[300px] h-[300px] bg-orange-primary/30 top-[20%] right-[10%] opacity-30"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-orange-primary text-xs font-black uppercase tracking-widest mb-6">
                            Next-Gen Education System
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] mb-8 tracking-tighter">
                            BEYOND <br />
                            <span className="text-gradient drop-shadow-[0_0_30px_rgba(255,140,0,0.3)]">LIMITS.</span>
                        </h1>
                        <p className="text-xl text-white/50 max-w-lg mb-12 leading-relaxed font-light">
                            Transforming traditional education into a digital masterpiece. Seamlessly integrated, elegantly designed, and professionally built for the future of learning.
                        </p>

                        <div className="flex flex-wrap gap-6">
                            <button className="bg-orange-primary hover:bg-orange-dark text-white font-black uppercase tracking-widest px-10 py-5 rounded-2xl transition-all shadow-xl hover:shadow-orange-primary/20 hover:-translate-y-1 active:scale-95 flex items-center gap-3 group">
                                GET STARTED <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                            </button>
                            <button className="flex items-center gap-3 text-white font-bold hover:text-orange-primary transition-colors py-4 group">
                                <PlayCircle size={32} className="text-orange-primary" />
                                <span>WATCH DEMO</span>
                            </button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-orange-primary/15 blur-[100px] animate-pulse-slow"></div>
                        <div className="glass-v2 border-white/10 rounded-[3rem] p-4 scale-105 rotate-3 hover:rotate-0 transition-transform duration-700 shadow-2xl overflow-hidden group">
                            <div className="bg-[#000D20] rounded-[2.5rem] aspect-square overflow-hidden border border-white/5 p-8">
                                <div className="w-full h-full flex flex-col gap-6">
                                    <div className="h-1/5 glass-v2 rounded-2xl flex items-center px-6 justify-between border-white/5">
                                        <div className="flex gap-3">
                                            <div className="w-12 h-2 bg-white/20 rounded-full"></div>
                                            <div className="w-8 h-2 bg-white/10 rounded-full"></div>
                                        </div>
                                        <div className="w-4 h-4 rounded-full bg-orange-primary/40"></div>
                                    </div>
                                    <div className="flex-1 grid grid-cols-2 gap-6">
                                        <div className="glass-orange rounded-3xl border-transparent animate-float"></div>
                                        <div className="glass-v2 rounded-3xl border-white/5" style={{ animationDelay: '1s' }}></div>
                                    </div>
                                    <div className="h-1/4 glass-v2 rounded-3xl border-white/5 animate-pulse-slow"></div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
