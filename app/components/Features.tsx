"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Info, ShieldCheck, Zap } from 'lucide-react';

const features = [
    {
        title: 'Academic Agenda',
        desc: 'Structured planning for academic excellence.',
        icon: <Calendar size={28} />,
        color: 'bg-navy-muted/50'
    },
    {
        title: 'Information Hub',
        desc: 'Unified communication for the entire school.',
        icon: <Info size={28} />,
        color: 'bg-orange-soft/20'
    },
    {
        title: 'Secure Testing',
        desc: 'Reliable CBT environments with high integrity.',
        icon: <ShieldCheck size={28} />,
        color: 'bg-navy-muted/50'
    },
    {
        title: 'Modern Core',
        desc: 'Blazing fast performance on every device.',
        icon: <Zap size={28} />,
        color: 'bg-orange-soft/20'
    },
];

const Features = () => {
    return (
        <section className="relative py-32 bg-bg-dark overflow-hidden">
            {/* Background Soft Blurs */}
            <div className="gaussian-blur-soft w-[600px] h-[600px] bg-orange-soft top-[-10%] right-[-10%] opacity-5"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Everything you need. <br />
                        <span className="text-orange-soft font-light italic">Nothing you don't.</span>
                    </h2>
                    <p className="text-white/40 text-lg">
                        A curated set of features designed to streamline education management without the clutter.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -8 }}
                            className="glass-soft border-white/5 rounded-[2.5rem] p-10 hover:border-orange-soft/30 transition-all duration-500"
                        >
                            <div className={`w-14 h-14 ${f.color} rounded-2xl flex items-center justify-center text-orange-soft mb-8`}>
                                {f.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4 tracking-tight">
                                {f.title}
                            </h3>
                            <p className="text-white/40 leading-relaxed font-medium text-sm">
                                {f.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
