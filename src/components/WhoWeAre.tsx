import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function WhoWeAre() {
    // Content Data
    const tabs = [
        {
            id: 'mission',
            label: "OUR MISSION",
            description: "Our mission is to provide high-quality, end-to-end construction services for cold rooms and warehouses, combining over 22 years of expertise with skilled workmanship, modern equipment, and dedicated manpower. Whether delivering complete turnkey projects or executing specialized scopes, we are committed to reliability, safety, and long-term client satisfaction in every project we undertake.",
            image: "/mission.jpg"
        },
        {
            id: 'vision',
            label: "OUR VISION",
            description: "To be a trusted leader in cold storage and warehouse construction, recognized for delivering innovative, efficient, and sustainable turnkey solutions that exceed client expectations across the region.",
            image: "/vision.jpg"
        },
        {
            id: 'approach',
            label: "OUR APPROACH",
            description: "We specialize in creating efficient, customized warehouse designs tailored to your business’s needs. Our approach combines advanced engineering, cutting-edge technology, and a deep understanding of logistics to deliver optimal storage, workflow, and space utilization.",
            image: "/approach.jpg"
        }
    ];

    const [selectedTab, setSelectedTab] = useState(tabs[0]);

    return (
        <section className="py-24 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-6">

                {/* Intro */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#004575] hover-text-effect">
                        {"WHO WE ARE".split("").map((char, i) => (
                            <span key={i} className="char-zoom">{char === " " ? "\u00A0" : char}</span>
                        ))}
                    </h2>
                    <motion.div
                        className="text-xl text-gray-600 block"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={{
                            visible: { transition: { staggerChildren: 0.01 } }
                        }}
                    >
                        {"We Offer Warehouse Solutions, Cold Storage Solutions & Loading Bay Optimization".split("").map((char, i) => (
                            <motion.span
                                key={i}
                                variants={{
                                    hidden: { opacity: 0, y: 10 },
                                    visible: { opacity: 1, y: 0 }
                                }}
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </motion.div>
                </div>

                {/* Tab Navigation */}
                <div className="max-w-4xl mx-auto mb-12">
                    <nav className="p-2 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-100 shadow-sm">
                        <ul className="flex items-center justify-between md:justify-center gap-2 md:gap-8 overflow-x-auto">
                            {tabs.map((item) => (
                                <motion.li
                                    key={item.id}
                                    className={`
                                        relative px-6 py-3 cursor-pointer rounded-lg text-sm md:text-base font-bold uppercase tracking-wider transition-colors
                                        ${item.id === selectedTab.id ? 'text-primary' : 'text-gray-500 hover:text-gray-700'}
                                    `}
                                    onClick={() => setSelectedTab(item)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {item.label}
                                    {item.id === selectedTab.id && (
                                        <motion.div
                                            className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-full"
                                            layoutId="underline"
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                </motion.li>
                            ))}
                        </ul>
                    </nav>
                </div>

                {/* Tab Content */}
                <div className="max-w-6xl mx-auto min-h-[500px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedTab ? selectedTab.id : "empty"}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row h-full"
                        >
                            {/* Image Side */}
                            <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-[500px]">
                                <img
                                    src={selectedTab.image}
                                    alt={selectedTab.label}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply" />
                            </div>

                            {/* Text Side */}
                            <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <h3 className="text-3xl md:text-4xl font-extrabold text-[#004575] mb-8">
                                        {selectedTab.label}
                                    </h3>
                                    <p className="text-lg text-gray-600 leading-relaxed font-medium">
                                        {selectedTab.description}
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
}
