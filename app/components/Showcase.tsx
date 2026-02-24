"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Showcase = () => {
    return (
        <section className="relative py-32 overflow-hidden bg-[#000814]">
            {/* Vibrant Navy Gaussian blurs */}
            <div className="gaussian-blur w-[800px] h-[800px] bg-navy top-[50%] left-[-20%] translate-y-[-50%] opacity-30 animate-pulse-slow"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="glass-v2 border-white/5 rounded-[4rem] p-12 md:p-24 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-navy/20 pointer-events-none"></div>

                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-4xl md:text-7xl font-black text-white leading-none mb-10 tracking-tighter">
                                ELEGANCE <br />
                                MEETS <br />
                                <span className="text-gradient">EFFICIENCY.</span>
                            </h2>

                            <div className="space-y-12">
                                {[
                                    { label: 'Uptime', value: '99.9%', color: 'text-green-400' },
                                    { label: 'Latency', value: '<2ms', color: 'text-orange-primary' },
                                    { label: 'Security', value: 'Lvl. 10', color: 'text-blue-400' },
                                ].map((stat, i) => (
                                    <div key={i} className="flex items-center gap-8">
                                        <div className="text-sm font-black uppercase tracking-[0.3em] text-white/30 rotate-180 [writing-mode:vertical-lr]">
                                            {stat.label}
                                        </div>
                                        <div className={`text-6xl md:text-8xl font-black ${stat.color} tracking-tighter`}>
                                            {stat.value}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <motion.div
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                                className="aspect-[4/5] bg-navy-accent rounded-[3.5rem] overflow-hidden border border-white/10 shadow-3xl"
                            >
                                <div className="w-full h-full bg-gradient-to-br from-white/5 to-transparent p-12 flex flex-col justify-end">
                                    <div className="w-2/3 h-2 bg-orange-primary mb-4 rounded-full"></div>
                                    <div className="w-1/2 h-2 bg-white/10 rounded-full"></div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Showcase;
