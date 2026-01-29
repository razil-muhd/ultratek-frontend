import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    return (
        <div className="min-h-screen pt-20">
            {/* Header Section */}
            <div className="bg-slate-900 text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-600/10" />
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.h1
                        className="text-4xl md:text-6xl font-black mb-6"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Get in <span className="text-blue-500">Touch</span>
                    </motion.h1>
                    <motion.p
                        className="text-xl text-slate-300 max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        Have a project in mind? We'd love to hear from you. Let's build something great together.
                    </motion.p>
                </div>
            </div>

            <div className="container mx-auto px-6 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={fadeIn}
                    >
                        <h2 className="text-3xl font-bold text-slate-900 mb-8">Contact Information</h2>
                        <div className="space-y-8">
                            <div className="flex items-start gap-6 group">
                                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-1">Head Office</h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        AL BAGHDADIYAH, JEDDAH<br />
                                        22235, K.S.A
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-1">Phone</h3>
                                    <p className="text-slate-600">+966 50 141 7878</p>

                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-1">Email</h3>
                                    <p className="text-slate-600">info@ultratekcs.com</p>
                                    <p className="text-slate-500 text-sm mt-1">We reply within 24 hours</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Map */}
                    <motion.div
                        className="h-[500px] w-full rounded-3xl overflow-hidden bg-slate-100 relative shadow-lg"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59392.686520556205!2d39.1979705!3d21.5168865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d01fb1137e59%3A0xe059579737b118db!2sJeddah%2C%20Saudi%20Arabia!5e0!3m2!1sen!2sid!4v1709400000000!5m2!1sen!2sid"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="filter grayscale hover:grayscale-0 transition-all duration-500"
                        ></iframe>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
