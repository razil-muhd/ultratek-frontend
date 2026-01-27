import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function AboutPage() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    const fadeInUp = {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8, ease: "easeOut" as const }
    };

    const staggerContainer = {
        initial: {},
        whileInView: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const services = [
        {
            icon: '📐',
            title: 'Custom Layouts',
            description: 'Data-driven warehouse designs that maximize cubic capacity and throughput.'
        },
        {
            icon: '❄️',
            title: 'Cold Chain',
            description: 'Advanced thermal engineering for precise temperature-controlled environments.'
        },
        {
            icon: '⚡',
            title: 'Loading Efficiency',
            description: 'Automated docking systems designed to reduce turnaround times.'
        },
        {
            icon: '🏗️',
            title: 'Vertical Storage',
            description: 'High-density racking solutions engineered for stability and access.'
        }
    ];

    return (
        <div ref={containerRef} className="bg-slate-50 min-h-screen overflow-x-hidden">

            {/* Hero Section with Parallax */}
            <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                <motion.div
                    style={{ y }}
                    className="absolute inset-0 z-0"
                >
                    <img
                        src="/about-construction.png"
                        alt="Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/80 to-slate-900/40" />
                </motion.div>

                <div className="relative z-10 container mx-auto px-6 text-white pt-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                            Engineering the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                                Infrastructure of Tomorrow
                            </span>
                        </h1>
                        <p className="text-lg md:text-2xl text-slate-300 max-w-2xl leading-relaxed font-light">
                            ULTRATEK ARABIA combines two decades of expertise with cutting-edge technology to redefine industrial construction standards in Saudi Arabia.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Introduction / Mission Split */}
            <section className="py-24 md:py-32">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-blue-600 font-bold tracking-widest text-sm uppercase mb-4 block">Our Story</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                                More Than Just <br /> Construction
                            </h2>
                            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                                <p>
                                    Founded with a vision to transform the logistics landscape, ULTRATEK ARABIA has grown into a premier multi-disciplinary contractor. We don't simply erect steel structures; we engineer ecosystems that empower businesses to operate more efficiently.
                                </p>
                                <p>
                                    As experts in Cold Store, Heavy Structural Fabrication, and Electromechanical contracting, we bring a holistic approach to every project. Our integrated methodology ensures that civil works, refrigeration, and structural engineering work in perfect harmony.
                                </p>
                            </div>

                            <div className="mt-12 flex gap-12">
                                <div>
                                    <h3 className="text-4xl font-black text-blue-600 mb-1">22+</h3>
                                    <p className="text-slate-500 font-medium">Years Experience</p>
                                </div>
                                <div>
                                    <h3 className="text-4xl font-black text-blue-600 mb-1">150+</h3>
                                    <p className="text-slate-500 font-medium">Projects Delivered</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl z-10">
                                <img src="/about-warehouse.png" alt="Warehouse Interior" className="w-full h-auto object-cover" />
                                <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply" />
                            </div>
                            {/* Decorative Block */}
                            <div className="absolute top-10 -right-10 w-full h-full bg-slate-200 rounded-[2rem] -z-10" />
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-dots-pattern opacity-20" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values - Cards */}
            <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/about-construction.png')] opacity-10 bg-fixed bg-cover bg-center" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <motion.h2
                            className="text-3xl md:text-5xl font-bold mb-6"
                            {...fadeInUp}
                        >
                            Our Core <span className="text-blue-400">Values</span>
                        </motion.h2>
                        <motion.p
                            className="text-slate-400 text-lg"
                            {...fadeInUp}
                            transition={{ delay: 0.1 }}
                        >
                            The principles that guide every blueprint we draw and every beam we place.
                        </motion.p>
                    </div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                    >
                        {[
                            { title: "Precision Engineering", desc: "We believe that details define quality. Zero tolerance for errors in execution.", icon: "🎯" },
                            { title: "Sustainable Innovation", desc: "Building for the future using energy-efficient materials and smart technologies.", icon: "🌱" },
                            { title: "Client Partnership", desc: "We don't just work for you; we work with you to realize your operational goals.", icon: "🤝" }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-2xl hover:bg-white/10 transition-colors duration-300"
                                variants={fadeInUp}
                            >
                                <div className="text-4xl mb-6 bg-blue-500/20 w-16 h-16 rounded-xl flex items-center justify-center">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Expertise Grid */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div className="max-w-2xl">
                            <h2 className="text-4xl font-bold text-slate-900 mb-4">Comprehensive Solutions</h2>
                            <p className="text-slate-600 text-lg">From initial concept layout to final handover, we cover every aspect of industrial construction.</p>
                        </div>
                        <button className="px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-blue-600 transition-colors">
                            View Our Services
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="group p-8 rounded-3xl bg-slate-50 hover:bg-white border border-slate-100 hover:border-blue-100 hover:shadow-xl transition-all duration-300"
                            >
                                <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{service.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team / Founder Section */}
            <section className="py-24 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl border border-blue-100 flex flex-col lg:flex-row gap-12 items-center">
                        <div className="w-full lg:w-1/2 relative">
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
                                <img src="/about-team.png" alt="Engineering Team" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                                <div className="absolute bottom-6 left-6 text-white">
                                    <p className="font-bold text-lg">The Minds Behind UltraTek</p>
                                    <p className="text-sm opacity-80">Riyadh HQ Planning Session</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <svg className="w-12 h-12 text-blue-400 mb-6 opacity-50" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.0547 15.192 15.1543 14.8154 13.9746C14.321 12.3965 12.4497 12.4834 12.4497 9.8252C12.4497 7.50293 14.282 5.43359 16.7119 5.43359C19.3838 5.43359 21.4648 8.0166 21.4648 10.9756C21.4648 15.707 18.0645 21 14.017 21ZM4.91016 21L4.91016 18C4.91016 16.0547 6.08887 15.1543 5.71426 13.9746C5.2209 12.3965 3.32715 12.4834 3.32715 9.8252C3.32715 7.50293 5.37891 5.43359 7.82812 5.43359C10.5 5.43359 12.5811 8.0166 12.5811 10.9756C12.5811 15.707 9.17773 21 4.91016 21Z" /></svg>
                            <h3 className="text-2xl md:text-4xl font-bold text-slate-900 mb-8 leading-snug">
                                "Our commitment is not just to build structures, but to build <span className="text-blue-600">trust</span>. Every project is a promise kept."
                            </h3>
                            <div>
                                <h4 className="text-xl font-bold text-slate-900">Mohammed Al-Rashid</h4>
                                <p className="text-blue-500 font-medium tracking-wide text-sm uppercase">Founder & CEO</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-24 bg-slate-900 text-white border-t border-slate-800">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold mb-6"
                        >
                            Get in <span className="text-blue-400">Touch</span>
                        </motion.h2>
                        <p className="text-slate-400 text-lg">
                            Ready to start your next project? Reach out to our team of experts.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl text-center hover:bg-white/10 transition-all duration-300"
                        >
                            <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-4xl">
                                📍
                            </div>
                            <h3 className="text-xl font-bold mb-2">Visit Us</h3>
                            <p className="text-slate-400">AL BAGHDADIYAH, JEDDAH<br />22235, K.S.A</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl text-center hover:bg-white/10 transition-all duration-300"
                        >
                            <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-4xl">
                                📞
                            </div>
                            <h3 className="text-xl font-bold mb-2">Call Us</h3>
                            <p className="text-slate-400">+96 65014 17878</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl text-center hover:bg-white/10 transition-all duration-300"
                        >
                            <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-4xl">
                                ✉️
                            </div>
                            <h3 className="text-xl font-bold mb-2">Email Us</h3>
                            <p className="text-slate-400">info@ultratekcs.com</p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
