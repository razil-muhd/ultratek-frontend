import { motion } from 'framer-motion';

export default function OurClients() {
    // Client logos - logo1.png to logo14.png
    const clients = Array.from({ length: 14 }, (_, i) => ({
        id: i + 1,
        logo: `/logo${i + 1}.png`,
        name: `Client ${i + 1}`
    }));

    // Duplicate for infinite scroll effect
    const duplicatedClients = [...clients, ...clients];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#004575] mb-6 hover-text-effect">
                        {"Our Clients".split("").map((char, i) => (
                            <span key={i} className="char-zoom">{char === " " ? "\u00A0" : char}</span>
                        ))}
                    </h2>

                    <motion.p
                        className="text-xl text-gray-600"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Trusted by leading companies in cold storage and warehousing
                    </motion.p>
                </div>

                {/* Logo Marquee - Row 1 */}
                <div className="relative w-full overflow-hidden mb-8">
                    {/* Gradient Masks for smooth fade edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                    <motion.div
                        className="flex gap-12 w-max"
                        animate={{
                            x: [0, -1920] // Adjusted generic width estimation, can tune if specific width known
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 40,
                                ease: "linear"
                            }
                        }}
                    >
                        {duplicatedClients.map((client, index) => (
                            <div key={`${client.id}-${index}`} className="flex-shrink-0 w-40 h-24 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center p-4 hover:shadow-md transition-shadow">
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Logo Marquee - Row 2 (Reverse Direction) */}
                <div className="relative w-full overflow-hidden">
                    {/* Gradient Masks */}
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                    <motion.div
                        className="flex gap-12 w-max"
                        animate={{
                            x: [-1920, 0]
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 40,
                                ease: "linear"
                            }
                        }}
                    >
                        {duplicatedClients.map((client, index) => (
                            <div key={`reverse-${client.id}-${index}`} className="flex-shrink-0 w-40 h-24 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center p-4 hover:shadow-md transition-shadow">
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
