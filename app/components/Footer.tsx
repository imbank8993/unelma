import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-navy-dark pt-20 pb-10 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-orange-primary rounded flex items-center justify-center font-bold text-white uppercase text-sm">U</div>
                            <span className="text-xl font-bold text-white">Unelma<span className="text-orange-primary">App</span></span>
                        </div>
                        <p className="text-white/50 leading-relaxed">
                            Membangun masa depan pendidikan digital yang lebih cerdas, efisien, dan menyenangkan bagi semua pihak.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="p-2 bg-white/5 rounded-full text-white/60 hover:text-orange-primary transition-colors hover:bg-white/10">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="p-2 bg-white/5 rounded-full text-white/60 hover:text-orange-primary transition-colors hover:bg-white/10">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="p-2 bg-white/5 rounded-full text-white/60 hover:text-orange-primary transition-colors hover:bg-white/10">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Tautan Cepat</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-white/50 hover:text-orange-primary transition-colors">Beranda</a></li>
                            <li><a href="#" className="text-white/50 hover:text-orange-primary transition-colors">Tentang Kami</a></li>
                            <li><a href="#" className="text-white/50 hover:text-orange-primary transition-colors">Layanan</a></li>
                            <li><a href="#" className="text-white/50 hover:text-orange-primary transition-colors">Hubungi Kami</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Fitur Utama</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-white/50 hover:text-orange-primary transition-colors">Agenda Akademik</a></li>
                            <li><a href="#" className="text-white/50 hover:text-orange-primary transition-colors">Informasi Sekolah</a></li>
                            <li><a href="#" className="text-white/50 hover:text-orange-primary transition-colors">Sistem Ujian (CBT)</a></li>
                            <li><a href="#" className="text-white/50 hover:text-orange-primary transition-colors">Portal Siswa</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Kontak</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center space-x-3 text-white/50">
                                <Mail size={18} className="text-orange-primary" />
                                <span>info@unelma.app</span>
                            </li>
                            <li className="flex items-center space-x-3 text-white/50">
                                <Phone size={18} className="text-orange-primary" />
                                <span>+62 812 3456 7890</span>
                            </li>
                            <li className="flex items-center space-x-3 text-white/50 text-sm">
                                <MapPin size={18} className="text-orange-primary shrink-0" />
                                <span>Jl. Pendidikan No. 123, Jakarta Selatan, Indonesia</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:row justify-between items-center text-white/40 text-sm">
                    <p>© 2026 UnelmaApp. Hak Cipta Dilindungi.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Ketentuan Layanan</a>
                        <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
