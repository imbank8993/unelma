"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden bg-bg-dark">
            {/* Soft Gaussian Backgrounds */}
            <div className="gaussian-blur-soft w-[800px] h-[800px] bg-navy-soft top-[-20%] left-[-10%] animate-pulse-gentle"></div>
            <div className="gaussian-blur-soft w-[600px] h-[600px] bg-orange-soft top-[20%] right-[-5%] opacity-10"></div>
            <div className="gaussian-blur-soft w-[400px] h-[400px] bg-navy-muted bottom-[-10%] left-[20%]"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-orange-soft text-xs font-semibold tracking-wider mb-8"
                    >
                        THE NEW ERA OF LEARNING
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] mb-8 tracking-tight"
                    >
                        Excellence through <br />
                        <span className="text-soft-gradient">Simplicity.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-xl text-white/40 max-w-2xl mx-auto mb-12 leading-relaxed font-medium"
                    >
                        A refined ecosystem for schools that value both performance and aesthetics. One platform, infinite possibilities.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                        <button className="w-full sm:w-auto btn-soft-orange px-10 py-4 rounded-2xl flex items-center justify-center gap-3">
                            Explore Now <ArrowRight size={20} />
                        </button>
                        <button className="w-full sm:w-auto px-10 py-4 rounded-2xl border border-white/10 text-white/60 font-semibold hover:bg-white/5 transition-all">
                            Learn More
                        </button>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="mt-24 relative max-w-5xl mx-auto"
                >
                    <div className="absolute inset-0 bg-navy-soft/20 blur-[120px] rounded-full"></div>
                    <div className="glass-soft rounded-[3rem] p-4 relative border border-white/5 shadow-3xl">
                        <div className="bg-[#131B2E] rounded-[2.5rem] aspect-[21/9] overflow-hidden border border-white/5 flex items-center justify-center group">
                            <div className="w-full h-full p-12 flex flex-col justify-between">
                                <div className="flex gap-4">
                                    <div className="w-40 h-3 bg-white/10 rounded-full"></div>
                                    <div className="w-24 h-3 bg-white/5 rounded-full"></div>
                                </div>
                                <div className="grid grid-cols-4 gap-8">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className="h-40 glass-soft rounded-3xl border-transparent animate-pulse-gentle" style={{ animationDelay: `${i * 0.5}s` }}></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
