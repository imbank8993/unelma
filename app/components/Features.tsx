"use client";
import React from 'react';
import { Calendar, Info, ShieldCheck, Zap } from 'lucide-react';

const features = [
    {
        title: 'Manajemen Agenda',
        description: 'Atur jadwal akademik dan kegiatan sekolah secara terpusat dan teroganisir.',
        icon: <Calendar className="text-orange-primary" size={28} />,
    },
    {
        title: 'Pusat Informasi',
        description: 'Berikan pengumuman dan berita terbaru ke seluruh komunitas sekolah secara instan.',
        icon: <Info className="text-orange-primary" size={28} />,
    },
    {
        title: 'Sistem CBT Aman',
        description: 'Pelaksanaan ujian online dengan tingkat keamanan tinggi dan antarmuka yang nyaman.',
        icon: <ShieldCheck className="text-orange-primary" size={28} />,
    },
    {
        title: 'Akses Cepat',
        description: 'Performa aplikasi yang ringan dan responsif untuk semua perangkat.',
        icon: <Zap className="text-orange-primary" size={28} />,
    },
];

const Features = () => {
    return (
        <section className="relative py-24 bg-navy-dark/30">
            {/* Sublte Gaussian Blurs for Features */}
            <div className="gaussian-blur w-[400px] h-[400px] bg-orange-primary/5 top-[10%] right-[5%]"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Fitur Utama <span className="text-orange-primary">Unggulan</span>
                    </h2>
                    <p className="text-white/60 text-lg">
                        Kami menyediakan alat yang komprehensif untuk mendukung ekosistem pendidikan digital Anda.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="glass-v2 p-8 rounded-2xl hover:border-orange-primary/40 transition-all duration-300 group"
                        >
                            <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                            <p className="text-white/60 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
