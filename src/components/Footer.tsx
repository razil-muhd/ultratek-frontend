import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-[#004575] text-white pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Column */}
                    <div>
                        <Link to="/" className="inline-block mb-6 bg-white p-2 rounded-lg">
                            <img
                                src="/logo.png"
                                alt="Ultratek Arabia"
                                className="h-12 w-auto object-contain"
                            />
                        </Link>
                        <p className="text-blue-100/80 leading-relaxed mb-6">
                            Leading provider of cold storage solutions, warehouse construction, and industrial optimization in Saudi Arabia. Building the future of logistics.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#004575] transition-all duration-300">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#004575] transition-all duration-300">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#004575] transition-all duration-300">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link to="/" className="text-blue-100/80 hover:text-white hover:pl-2 transition-all duration-300 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#239cf5]"></span> Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-blue-100/80 hover:text-white hover:pl-2 transition-all duration-300 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#239cf5]"></span> About Us
                                </Link>
                            </li>
                            <li>
                                <a href="/#services" className="text-blue-100/80 hover:text-white hover:pl-2 transition-all duration-300 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#239cf5]"></span> Our Services
                                </a>
                            </li>
                            <li>
                                <a href="/#contact" className="text-blue-100/80 hover:text-white hover:pl-2 transition-all duration-300 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#239cf5]"></span> Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">Our Services</h3>
                        <ul className="space-y-4">
                            <li className="text-blue-100/80 flex items-start gap-3">
                                <div className="mt-1.5 min-w-[6px] h-[6px] rounded-full bg-[#239cf5]" />
                                <span>Cold Room Construction</span>
                            </li>
                            <li className="text-blue-100/80 flex items-start gap-3">
                                <div className="mt-1.5 min-w-[6px] h-[6px] rounded-full bg-[#239cf5]" />
                                <span>Warehouse Racking Systems</span>
                            </li>
                            <li className="text-blue-100/80 flex items-start gap-3">
                                <div className="mt-1.5 min-w-[6px] h-[6px] rounded-full bg-[#239cf5]" />
                                <span>Loading Bay Equipment</span>
                            </li>
                            <li className="text-blue-100/80 flex items-start gap-3">
                                <div className="mt-1.5 min-w-[6px] h-[6px] rounded-full bg-[#239cf5]" />
                                <span>Industrial Doors</span>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">Contact Us</h3>
                        <div className="space-y-6">
                            <a href="tel:+966501417878" className="flex items-start gap-4 group">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#239cf5] transition-colors">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-blue-200">Call Us</p>
                                    <p className="font-semibold">+966 50 141 7878</p>
                                </div>
                            </a>

                            <a href="mailto:info@ultratekarabia.com" className="flex items-start gap-4 group">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#239cf5] transition-colors">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-blue-200">Email Us</p>
                                    <p className="font-semibold">info@ultratekarabia.com</p>
                                </div>
                            </a>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-blue-200">Location</p>
                                    <p className="font-semibold">Riyadh, Saudi Arabia</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-blue-200/60">
                    <p>© {new Date().getFullYear()} Ultratek Arabia. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
