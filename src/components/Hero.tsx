import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play } from 'lucide-react';

export default function Hero() {
    const [activeService, setActiveService] = useState(0);

    const services = [
        { id: '01', title: 'Custom Warehouse Layouts', icon: '📐' },
        { id: '02', title: 'Cold Storage Solutions', icon: '❄️' },
        { id: '03', title: 'Loading Bay Optimization', icon: '🚚' },
        { id: '04', title: 'Racking Systems Design', icon: '📦' },
    ];

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/hero.jpg"
                    alt="Cold Storage Warehouse"
                    className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/20" />
            </div>

            {/* Content Container */}
            <div className="container mx-auto px-6 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Left Content */}
                    <div className="lg:col-span-7 xl:col-span-8">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.2
                                    }
                                }
                            }}
                        >


                            {/* Headline */}
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-foreground mb-6">
                                <span className="block animate-text anim-seven mb-2">
                                    {/* Helper to split text */}
                                    {"Smart, Scalable Solutions for".split("").map((char, i) => (
                                        <span key={i}>{char === " " ? "\u00A0" : char}</span>
                                    ))}
                                </span>
                                <span className="block animate-text anim-two bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                                    {"Warehousing & Cold Storage".split("").map((char, i) => (
                                        <span key={i} className="text-primary">{char === " " ? "\u00A0" : char}</span>
                                    ))}
                                </span>
                            </h1>

                            {/* Description */}
                            <motion.p
                                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                                className="text-lg text-muted-foreground max-w-lg mb-10 leading-relaxed"
                            >
                                Industry-leading temperature-controlled storage solutions designed to preserve
                                your products with precision and efficiency.
                            </motion.p>

                            {/* CTA Button */}
                            <motion.div
                                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            >
                                <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full text-sm font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25 group">
                                    <Play className="w-4 h-4 fill-current" />
                                    <span>Explore More</span>
                                </button>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Right Content - Services Sidebar */}
                    <div className="hidden lg:flex lg:col-span-5 xl:col-span-4 flex-col gap-4 items-start pl-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                className={`
                                    relative flex items-center p-3 rounded-3xl cursor-pointer overflow-hidden
                                    ${activeService === index
                                        ? 'bg-[#3b82f6] shadow-2xl z-10'
                                        : 'bg-white/90 backdrop-blur-md shadow-lg hover:bg-white z-0'
                                    }
                                `}
                                initial={{ y: -100, opacity: 0, rotate: -15 }}
                                animate={{
                                    y: 0,
                                    opacity: 1,
                                    rotate: 0,
                                    width: activeService === index ? 360 : 80,
                                    height: 80
                                }}
                                transition={{
                                    // Custom spring for entrance
                                    y: { type: "spring", stiffness: 60, damping: 12, delay: 0.6 + (index * 0.15) },
                                    rotate: { type: "spring", stiffness: 60, damping: 12, delay: 0.6 + (index * 0.15) },
                                    opacity: { duration: 0.5, delay: 0.6 + (index * 0.15) },
                                    // Layout transition
                                    width: { type: "spring", stiffness: 300, damping: 30 },
                                    height: { type: "spring", stiffness: 300, damping: 30 }
                                }}
                                onHoverStart={() => setActiveService(index)}
                            >
                                {/* Icon Container */}
                                <div className={`
                                    flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-2xl text-3xl overflow-hidden
                                    ${activeService === index ? 'bg-white/20' : 'bg-transparent'}
                                `}>
                                    {service.id === '03' ? (
                                        // Truck Animation: Drive in from right
                                        <motion.span
                                            initial={{ x: 50, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: 0.6 + (index * 0.15) + 0.4, type: "spring", stiffness: 100 }}
                                            className="block"
                                        >
                                            {service.icon}
                                        </motion.span>
                                    ) : service.id === '04' ? (
                                        // Box Animation: Fall from top with bounce
                                        <motion.span
                                            initial={{ y: -40, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ delay: 0.6 + (index * 0.15) + 0.4, type: "spring", bounce: 0.5 }}
                                            className="block"
                                        >
                                            {service.icon}
                                        </motion.span>
                                    ) : (
                                        // Standard Fade In for others
                                        <motion.span
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ delay: 0.6 + (index * 0.15) + 0.2 }}
                                        >
                                            {service.icon}
                                        </motion.span>
                                    )}
                                </div>

                                {/* Text Content */}
                                <AnimatePresence mode="popLayout">
                                    {activeService === index && (
                                        <motion.div
                                            initial={{ opacity: 0, x: 10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -10 }}
                                            transition={{ duration: 0.2, delay: 0.1 }}
                                            className="flex flex-col ml-4 whitespace-nowrap"
                                        >
                                            <div className="flex items-center gap-3">
                                                <span className="text-blue-100 font-bold text-sm tracking-widest opacity-80">{service.id}</span>
                                                <span className="text-white font-bold text-lg">{service.title}</span>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>

            {/* Floating Ice Particles */}
            <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-blue-400/30 rounded-full animate-pulse blur-sm" />
            <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-blue-300/20 rounded-full animate-bounce delay-300 blur-sm" />
            <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-blue-200/40 rounded-full animate-pulse delay-700 blur-sm" />
        </section>
    );
}
