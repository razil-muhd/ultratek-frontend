import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { servicesData } from '@/data/servicesData';
import { useEffect, useState } from 'react';

export default function ServiceDetail() {
    const { slug } = useParams<{ slug: string }>();
    const service = servicesData.find(s => s.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-950">
                <div className="text-center text-white">
                    <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
                    <Link to="/services" className="text-blue-400 hover:text-blue-300 transition-colors">
                        Back to Services
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen">
            {/* Immersive Hero Section */}
            <div className="relative h-[70vh] min-h-[500px]">
                <div className="absolute inset-0">
                    <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                        onError={(e) => { e.currentTarget.src = '/about-construction.png' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/40" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                </div>

                <div className="relative container mx-auto px-6 h-full flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <Link
                            to="/services"
                            className="inline-flex items-center text-blue-400 hover:text-white mb-8 transition-colors group"
                        >
                            <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3 group-hover:bg-blue-600 transition-colors">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                            </span>
                            <span className="font-medium tracking-wide">Back to Services</span>
                        </Link>

                        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
                            {service.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed border-l-4 border-blue-500 pl-6">
                            {service.shortDescription}
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="container mx-auto px-6 py-20 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Main Content */}
                    <motion.div
                        className="lg:col-span-8 bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="prose prose-lg prose-slate max-w-none">
                            <div className="flex items-center gap-4 mb-8">
                                <span className="text-5xl bg-blue-50 p-4 rounded-2xl">{service.icon}</span>
                                <h2 className="text-3xl font-bold text-slate-900 m-0">Service Overview</h2>
                            </div>

                            <div className="text-slate-600 leading-8 text-lg space-y-6">
                                {service.fullDescription.split('\n\n').map((paragraph, idx) => (
                                    <p key={idx}>{paragraph}</p>
                                ))}
                            </div>
                        </div>

                        <div className="w-full h-px bg-slate-200 my-12" />

                        {/* Modern Accordion FAQs */}
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-8">Frequently Asked Questions</h2>
                            <div className="space-y-4">
                                {service.faqs.map((faq, index) => (
                                    <FAQItem key={index} faq={faq} />
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Sticky Sidebar */}
                    <div className="lg:col-span-4 space-y-8">
                        {/* CTA Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="bg-slate-950 rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl sticky top-28"
                        >
                            <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/30 rounded-full blur-[80px]" />
                            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-900/20 to-transparent" />

                            <h3 className="text-2xl font-bold mb-4 relative z-10">Ready to Upgrade?</h3>
                            <p className="text-slate-400 mb-8 leading-relaxed relative z-10">
                                Get a comprehensive quote tailored to your specific industrial requirements today.
                            </p>

                            <a
                                href={`https://wa.me/966501417878?text=${encodeURIComponent(`Hello Ultratek, I am interested in your ${service.title} service. Could you please provide more information?`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 transition-all shadow-lg hover:shadow-blue-500/25 relative z-10 flex items-center justify-center group"
                            >
                                Request Consultation
                                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>

                            <div className="mt-8 pt-8 border-t border-white/10 relative z-10">
                                <p className="text-sm text-slate-500 mb-2 uppercase tracking-wider font-semibold">Other Services</p>
                                <div className="space-y-3">
                                    {servicesData.filter(s => s.id !== service.id).slice(0, 4).map(s => (
                                        <Link
                                            key={s.id}
                                            to={`/services/${s.slug}`}
                                            className="flex items-center text-slate-300 hover:text-white transition-colors py-2 group/item"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3 group-hover/item:scale-150 transition-transform" />
                                            <span className="truncate">{s.title}</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Helper component for Accordion
function FAQItem({ faq }: { faq: { question: string; answer: string } }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-blue-300 bg-slate-50 hover:bg-white">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 text-left"
            >
                <span className="font-bold text-slate-800 text-lg pr-8">{faq.question}</span>
                <span className={`flex-shrink-0 w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-blue-600 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-blue-50 border-blue-200' : ''}`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100/50">
                            {faq.answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
