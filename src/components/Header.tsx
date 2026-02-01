import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Facebook, Linkedin, Phone, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const getLinkClass = (path: string) => {
        const isActive = location.pathname === path;
        const baseClasses = "text-sm font-bold uppercase tracking-wider hover:text-primary transition-colors pb-1 border-b-2 hover:border-primary";
        const activeClasses = "text-gray-800 border-primary";
        const inactiveClasses = "text-gray-600 border-transparent";
        return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
    }

    return (
        <>
            {/* Header */}
            <header
                className="fixed top-0 w-full z-50 transition-all duration-500 pointer-events-none bg-white/90 backdrop-blur-sm shadow-sm py-2"
            >
                <div className="container mx-auto px-6 flex items-center justify-between">
                    {/* Logo */}
                    {/* Logo - Home Link */}
                    <Link to="/" className="flex-shrink-0 relative z-50 pointer-events-auto">
                        <img
                            src="/logo.png"
                            alt="Ultratek Logo"
                            className="h-12 w-auto object-contain transition-all duration-300"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-12 transition-all duration-300 pointer-events-auto opacity-100 translate-y-0">
                        <Link to="/" className={getLinkClass("/")}>Home</Link>
                        <Link to="/about" className={getLinkClass("/about")}>About Us</Link>
                        <Link to="/services" className={getLinkClass("/services")}>Our Services</Link>
                        <Link to="/contact" className={getLinkClass("/contact")}>Contact Us</Link>
                    </nav>

                    {/* Desktop Social Icons & CTA */}
                    <div className="hidden lg:flex items-center gap-3 transition-opacity duration-300 pointer-events-auto opacity-100">
                        <a href="https://www.instagram.com/ultratek_arabia?igsh=OTF3bndqYnB6cHhl" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300" aria-label="Instagram">
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300" aria-label="Facebook">
                            <Facebook className="w-5 h-5" />
                        </a>
                        <a href="https://wa.me/966501417878" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300" aria-label="WhatsApp">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-[22px] h-[22px] pb-[1px]"
                            >
                                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                                <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/company/ultratekarabia/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300" aria-label="LinkedIn">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="tel:+966501417878" className="flex items-center justify-center w-10 h-10 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300" aria-label="Phone">
                            <Phone className="w-5 h-5" />
                        </a>
                    </div>

                    {/* Hamburger Button - Visible on Mobile */}
                    <button
                        className="p-2 rounded-md transition-all duration-300 hover:bg-gray-100 pointer-events-auto lg:hidden text-gray-700"
                        onClick={() => setIsMenuOpen(true)}
                        aria-label="Menu"
                    >
                        <Menu className="w-8 h-8" />
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="fixed inset-0 z-[60] bg-secondary"
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                        <div className="flex justify-end p-6">
                            <button className="text-white hover:bg-white/10 p-2 rounded-full transition-colors" onClick={() => setIsMenuOpen(false)}>
                                <X className="w-8 h-8" />
                            </button>
                        </div>

                        <div className="flex flex-col items-center justify-center h-[calc(100vh-100px)] gap-8">
                            <nav className="flex flex-col items-center gap-6 text-xl">
                                <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-white/90 hover:text-white font-medium tracking-wide">Home</Link>
                                <Link to="/about" onClick={() => setIsMenuOpen(false)} className="text-white/90 hover:text-white font-medium tracking-wide">About Us</Link>
                                <Link to="/services" onClick={() => setIsMenuOpen(false)} className="text-white/90 hover:text-white font-medium tracking-wide">Our Services</Link>
                                <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="text-white/90 hover:text-white font-medium tracking-wide">Contact Us</Link>
                            </nav>

                            <div className="flex items-center gap-6 mt-8">
                                <a href="https://www.instagram.com/ultratek_arabia?igsh=OTF3bndqYnB6cHhl" target="_blank" rel="noopener noreferrer" className="text-white/75 hover:text-white transition-colors" aria-label="Instagram">
                                    <Instagram className="w-6 h-6" />
                                </a>
                                <a href="#" className="text-white/75 hover:text-white transition-colors" aria-label="Facebook">
                                    <Facebook className="w-6 h-6" />
                                </a>
                                <a href="https://wa.me/966501417878" className="text-white/75 hover:text-white transition-colors" aria-label="WhatsApp">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="w-6 h-6 pb-[2px]"
                                    >
                                        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                                        <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
                                    </svg>
                                </a>
                                <a href="https://www.linkedin.com/company/ultratekarabia/" target="_blank" rel="noopener noreferrer" className="text-white/75 hover:text-white transition-colors" aria-label="LinkedIn">
                                    <Linkedin className="w-6 h-6" />
                                </a>
                                <a href="tel:+966501417878" className="text-white/75 hover:text-white transition-colors" aria-label="Phone">
                                    <Phone className="w-6 h-6" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
