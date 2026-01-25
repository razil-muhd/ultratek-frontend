import { motion } from 'framer-motion';
import { servicesData } from '@/data/servicesData';
import { Link } from 'react-router-dom';

export default function ServicesPage() {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5 }
    };

    const staggerContainer = {
        initial: {},
        whileInView: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <div className="bg-slate-950 min-h-screen pt-20">
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/services/services-hero.png"
                        alt="Services Background"
                        className="w-full h-full object-cover opacity-30 scale-105"
                        onError={(e) => { e.currentTarget.src = '/about-construction.png' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/50 to-slate-950" />
                    {/* Abstract Blue Glow */}
                    <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[80%] bg-blue-600/20 blur-[120px] rounded-full mix-blend-screen" />
                </div>

                <div className="relative z-10 container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold tracking-widest uppercase mb-6 backdrop-blur-sm">
                            What We Do
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight">
                            Engineering <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-400">
                                Excellence
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
                            Delivering end-to-end industrial solutions that define the future of construction and logistics.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 container mx-auto px-6 relative z-10">
                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {servicesData.map((service) => (
                        <motion.div
                            key={service.id}
                            variants={fadeInUp}
                            className="group relative bg-slate-900/50 border border-white/5 rounded-3xl overflow-hidden hover:border-blue-500/30 transition-all duration-500"
                        >
                            {/* Card Image */}
                            <div className="h-64 overflow-hidden relative">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    onError={(e) => { e.currentTarget.src = '/about-warehouse.png' }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

                                {/* Floating Icon */}
                                <div className="absolute top-6 right-6 w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-blue-600 group-hover:border-blue-500 transition-colors duration-300">
                                    <span className="text-3xl">{service.icon}</span>
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="p-8 relative">
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-slate-400 mb-8 line-clamp-3 leading-relaxed">
                                    {service.shortDescription}
                                </p>

                                <Link
                                    to={`/services/${service.slug}`}
                                    className="inline-flex items-center text-sm font-bold text-white uppercase tracking-wider group/link"
                                >
                                    Explore Service
                                    <span className="ml-2 w-8 h-[1px] bg-blue-500 group-hover/link:w-12 transition-all duration-300" />
                                </Link>

                                {/* Decorative Gradient on Hover */}
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* CTA Section */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-900/10" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-[3rem] p-12 md:p-20 text-center shadow-2xl overflow-hidden relative">
                        {/* Background Patterns */}
                        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay" />
                        <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-400/30 rounded-full blur-3xl" />

                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
                                Have a Vision? <br className="hidden md:block" /> Let's Build It Together.
                            </h2>
                            <p className="text-xl text-blue-100 mb-10 font-light">
                                From concept to completion, our engineering expertise ensures your project is delivered with precision and quality.
                            </p>
                            <button className="px-10 py-5 bg-white text-blue-900 font-bold rounded-full hover:bg-slate-100 transition-all transform hover:scale-105 shadow-xl">
                                Schedule a Consultation
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
