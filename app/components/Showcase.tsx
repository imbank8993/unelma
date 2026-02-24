"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Showcase = () => {
    return (
        <section className="relative py-32 bg-bg-dark overflow-hidden">
            <div className="gaussian-blur-soft w-[800px] h-[800px] bg-navy-muted bottom-[-20%] left-[-10%] opacity-10 animate-pulse-gentle"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="glass-soft border-white/5 rounded-[4rem] p-10 md:p-20 overflow-hidden">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-10 tracking-tight">
                                Refined Performance. <br />
                                <span className="text-white/30">Built for you.</span>
                            </h2>

                            <div className="grid grid-cols-2 gap-12">
                                {[
                                    { label: 'Latency', value: '2ms', color: 'text-orange-soft' },
                                    { label: 'Uptime', value: '100%', color: 'text-white' },
                                    { label: 'Scalable', value: 'Yes', color: 'text-white' },
                                    { label: 'Secured', value: 'L10', color: 'text-orange-soft' },
                                ].map((s, i) => (
                                    <div key={i}>
                                        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20 mb-2">{s.label}</div>
                                        <div className={`text-4xl font-bold tracking-tighter ${s.color}`}>{s.value}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="aspect-square bg-white/[0.02] rounded-[3rem] border border-white/5 p-10">
                                <div className="w-full h-full flex flex-col gap-4">
                                    <div className="h-12 w-full glass-soft rounded-2xl border-white/5"></div>
                                    <div className="flex-1 flex gap-4">
                                        <div className="flex-1 glass-soft rounded-3xl border-transparent bg-white/[0.05]"></div>
                                        <div className="w-20 glass-soft rounded-3xl border-white/5"></div>
                                    </div>
                                    <div className="h-20 w-full glass-soft rounded-3xl border-white/5"></div>
                                </div>
                            </div>
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute -top-6 -right-6 w-32 h-32 border-2 border-dashed border-orange-soft/20 rounded-full"
                            ></motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Showcase;
