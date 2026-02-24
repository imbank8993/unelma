"use client";
import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
    return (
        <section className="relative py-40 overflow-hidden bg-[#000814]">
            {/* Vibrant Orange Gaussian blobs */}
            <div className="gaussian-blur w-[1000px] h-[600px] bg-orange-primary/30 bottom-[-10%] right-[-10%] rotate-45 opacity-40"></div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-5xl md:text-9xl font-black text-white mb-12 leading-[0.85] tracking-tighter">
                        THE FUTURE <br />
                        IS <span className="text-orange-primary italic underline decoration-white/20 underline-offset-[15px]">CALLING.</span>
                    </h2>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-16">
                        <button className="w-full md:w-auto bg-white text-navy font-black uppercase tracking-[0.2em] px-16 py-8 rounded-[2rem] hover:bg-orange-primary hover:text-white transition-all transform hover:-translate-y-2 active:scale-95 text-lg shadow-2xl">
                            JOIN NOW
                        </button>
                        <p className="text-white/40 font-bold uppercase tracking-widest px-8">
                            No credit card required. <br />
                            <span className="text-orange-primary font-black">24/7 SUPPORT.</span>
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
