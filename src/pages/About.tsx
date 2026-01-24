import { motion } from 'framer-motion';

export default function AboutPage() {
    const fadeInUp = {
        initial: { opacity: 0, y: 60 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
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
            title: 'Custom Warehouse Layouts',
            description: 'We design layouts that maximize productivity and streamline operations'
        },
        {
            icon: '❄️',
            title: 'Cold Storage Solutions',
            description: 'Specialized designs for temperature-controlled environments, ensuring product integrity'
        },
        {
            icon: '🚚',
            title: 'Loading Bay Optimization',
            description: 'Efficient docking systems to improve material handling'
        },
        {
            icon: '🏗️',
            title: 'Racking Systems Design',
            description: 'Optimized storage solutions utilizing vertical space efficiently'
        }
    ];

    const values = [
        {
            title: 'Specialized Professionals',
            description: 'Resolute and well-trained professionals committed to excellence',
            icon: '👥'
        },
        {
            title: 'Best Service in Industry',
            description: 'Providing the highest standard of service and support',
            icon: '⭐'
        },
        {
            title: 'Highest Quality Control',
            description: 'Rigorous quality assurance at every stage',
            icon: '✓'
        }
    ];

    return (
        <div className="bg-white min-h-screen pt-20"> {/* pt-20 to account for fixed header */}
            {/* Hero Section */}
            <motion.section
                className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-[#239cf5] to-[#004575] py-32 px-12 overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-30 pointer-events-none" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }} />

                <div className="relative z-10 max-w-7xl mx-auto text-center">
                    <motion.h1
                        className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight tracking-tight"
                        {...fadeInUp}
                    >
                        Maximizing Through the <span className="bg-clip-text text-transparent bg-gradient-to-br from-white to-white/70 drop-shadow-lg">Strategic</span>
                    </motion.h1>
                    <motion.p
                        className="text-base md:text-xl leading-relaxed text-white/95 max-w-4xl mx-auto"
                        {...fadeInUp}
                        transition={{ delay: 0.2 }}
                    >
                        ULTRATEK ARABIA is a company which is actively involved in the Cold store, heavy structuring
                        fabrication & Erection of all types of steel, civil & Electromechanical contracting,
                        Refrigeration materials services and human resource development in the kingdom of Saudi Arabia.
                    </motion.p>
                </div>
            </motion.section>

            {/* Values Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                    >
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                className="bg-white border-2 border-[#239cf5]/10 rounded-3xl p-12 text-center transition-all duration-300 shadow-sm hover:border-[#239cf5] hover:shadow-xl"
                                variants={fadeInUp}
                                whileHover={{ y: -10, scale: 1.02 }}
                            >
                                <div className="text-6xl mb-6">{value.icon}</div>
                                <h3 className="text-2xl font-bold text-[#004575] mb-4">{value.title}</h3>
                                <p className="text-gray-700 leading-relaxed">{value.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Mission Statement */}
            <motion.section
                className="py-24 bg-gradient-to-br from-[#239cf5]/5 to-[#004575]/5"
                {...fadeInUp}
            >
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <div className="mission-content">
                        <h2 className="text-4xl md:text-6xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-br from-[#239cf5] to-[#004575]">Our Commitment</h2>
                        <p className="text-lg md:text-xl leading-loose text-gray-700">
                            We are providing quality service to the clients based on professional engineering excellence.
                            We provide superior performance, Quality work and are committed to making a positive difference
                            for our clients, community, and in the lives of our employees.
                        </p>
                    </div>
                </div>
            </motion.section>

            {/* What We Offer */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <motion.h2
                        className="text-4xl md:text-5xl font-black text-center mb-12 text-[#004575]"
                        {...fadeInUp}
                    >
                        What We <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#239cf5] to-[#004575]">Offer</span>
                    </motion.h2>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                    >
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                className="bg-white border border-gray-100 rounded-3xl p-8 text-center transition-all duration-300 hover:shadow-2xl"
                                variants={fadeInUp}
                                whileHover={{
                                    y: -10,
                                    boxShadow: '0 20px 40px rgba(35, 156, 245, 0.2)'
                                }}
                            >
                                <div className="text-5xl mb-6">{service.icon}</div>
                                <h3 className="text-xl font-bold text-[#004575] mb-3">{service.title}</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">{service.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Founder's Word */}
            <motion.section
                className="py-24 bg-gradient-to-br from-[#004575] to-[#239cf5]"
                {...fadeInUp}
            >
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 items-center bg-white/10 backdrop-blur-xl border border-white/20 rounded-[32px] p-10 md:p-16">
                        <div className="flex justify-center">
                            <div className="w-60 h-60 rounded-full bg-gradient-to-br from-white/20 to-white/5 border-4 border-white/30 flex items-center justify-center shadow-2xl">
                                <span className="text-7xl font-bold text-white">CEO</span>
                            </div>
                        </div>
                        <div className="text-white text-center lg:text-left">
                            <span className="inline-block text-sm font-bold tracking-[0.2em] uppercase text-white/80 mb-4">Founder's Word</span>
                            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">Building the Future of Logistics</h2>
                            <p className="text-lg md:text-xl leading-relaxed text-white/95 italic mb-8">
                                "At ULTRATEK ARABIA, we don't just build warehouses – we create strategic solutions
                                that maximize efficiency and drive success. Our commitment to excellence, combined with
                                cutting-edge technology and a dedicated team, ensures that every project we undertake
                                sets new standards in the industry."
                            </p>
                            <div className="border-t border-white/20 pt-6">
                                <p className="text-xl font-bold mb-1">Mohammed Al-Rashid</p>
                                <p className="text-white/80">Founder & CEO, ULTRATEK ARABIA</p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Client Testimonials */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <motion.h2
                        className="text-4xl md:text-6xl font-black text-center mb-20 text-[#004575]"
                        {...fadeInUp}
                    >
                        What Our <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#239cf5] to-[#004575]">Clients Say</span>
                    </motion.h2>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                    >
                        {[
                            {
                                name: 'Ahmed Al-Mansouri',
                                position: 'Operations Director',
                                company: 'Saudi Logistics Corp',
                                text: 'ULTRATEK delivered our cold storage facility on time and exceeded all expectations. Their attention to detail and professional approach is unmatched.'
                            },
                            {
                                name: 'Fatima Hassan',
                                position: 'Supply Chain Manager',
                                company: 'Gulf Distribution Co.',
                                text: 'The warehouse layout optimization by ULTRATEK increased our operational efficiency by 40%. Truly exceptional engineering work.'
                            },
                            {
                                name: 'Khalid Ibrahim',
                                position: 'CEO',
                                company: 'Modern Trade Solutions',
                                text: 'Professional, reliable, and innovative. ULTRATEK is our trusted partner for all cold storage and warehousing projects.'
                            }
                        ].map((testimonial, index) => (
                            <motion.div
                                key={index}
                                className="bg-white border-2 border-[#239cf5]/10 rounded-3xl p-10 transition-all duration-300 hover:border-[#239cf5] hover:shadow-xl hover:-translate-y-2"
                                variants={fadeInUp}
                                whileHover={{ y: -5 }}
                            >
                                <div className="flex gap-1 mb-5">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className="text-yellow-400 text-xl">★</span>
                                    ))}
                                </div>
                                <p className="text-gray-700 italic leading-relaxed mb-6">{testimonial.text}</p>
                                <div className="border-t border-gray-100 pt-5">
                                    <p className="text-lg font-bold text-[#004575] mb-1">{testimonial.name}</p>
                                    <p className="text-sm text-gray-500 mb-0.5">{testimonial.position}</p>
                                    <p className="text-sm font-semibold text-[#239cf5]">{testimonial.company}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
