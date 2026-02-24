"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Info, ShieldCheck, Zap } from 'lucide-react';

const features = [
    {
        title: 'ACADEMIC AGENDA',
        desc: 'Precision control over every academic milestone.',
        icon: <Calendar size={32} />,
        color: 'bg-orange-primary'
    },
    {
        title: 'INFO CENTER',
        desc: 'Instant synchronization for school-wide updates.',
        icon: <Info size={32} />,
        color: 'bg-navy'
    },
    {
        title: 'SECURE CBT',
        desc: 'Uncompromising integrity for digital assessments.',
        icon: <ShieldCheck size={32} />,
        color: 'bg-orange-primary'
    },
    {
        title: 'INSTANT SYNC',
        desc: 'Lag-free performance across all device eco-systems.',
        icon: <Zap size={32} />,
        color: 'bg-navy'
    },
];

const Features = () => {
    return (
        <section className="relative py-32 overflow-hidden bg-[#000814]">
            {/* Even Section: Orange Gaussian blobs */}
            <div className="gaussian-blur w-[700px] h-[700px] bg-orange-primary/20 top-[-20%] right-[-10%] animate-pulse-slow opacity-30"></div>
            <div className="gaussian-blur w-[400px] h-[400px] bg-orange-dark/10 bottom-[10%] left-[5%] animate-float"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-6xl font-black text-white leading-none mb-6 tracking-tighter">
                            CRAFTED FOR <br />
                            <span className="text-orange-primary">EXCELLENCE.</span>
                        </h2>
                        <p className="text-lg text-white/40 font-light">
                            We don't just build features; we engineer experiences that define the new standard in educational technology.
                        </p>
                    </div>
                    <div className="hidden md:block w-32 h-1 bg-white/10 rounded-full mb-4"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            className="group glass-v2 border-white/5 rounded-3xl p-10 hover:bg-white/[0.05] transition-all duration-500 overflow-hidden relative"
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 bg-orange-primary/5 blur-2xl group-hover:bg-orange-primary/20 transition-all"></div>

                            <div className={`w-16 h-16 ${f.color} rounded-2xl flex items-center justify-center text-white mb-8 group-hover:rotate-12 transition-transform shadow-2xl`}>
                                {f.icon}
                            </div>

                            <h3 className="text-xl font-black text-white mb-4 tracking-tight group-hover:text-orange-primary transition-colors">
                                {f.title}
                            </h3>
                            <p className="text-white/40 leading-relaxed group-hover:text-white/70 transition-colors">
                                {f.desc}
                            </p>

                            <div className="mt-8 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white/20 group-hover:text-orange-primary transition-colors">
                                EXPLORE <div className="w-8 h-px bg-white/10 group-hover:bg-orange-primary transition-all"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
