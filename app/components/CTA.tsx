"use client";
import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
    return (
        <section className="relative py-40 bg-bg-dark overflow-hidden">
            <div className="gaussian-blur-soft w-[1000px] h-[600px] bg-orange-soft bottom-[-10%] right-[-10%] opacity-5 rotate-12"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-4xl md:text-7xl font-bold text-white mb-10 tracking-tight leading-none">
                        Join the Next Generation <br />
                        <span className="text-orange-soft italic">Today.</span>
                    </h2>
                    <p className="text-lg text-white/40 mb-12 max-w-xl mx-auto font-medium">
                        Start your digital transformation with a partner that understands the delicate balance of technology and experience.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <button className="w-full sm:w-auto btn-soft-orange px-12 py-5 rounded-2xl text-lg shadow-xl">
                            Get Started for Free
                        </button>
                        <button className="text-white/60 font-bold hover:text-white transition-colors">
                            Talk to Sales
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
