import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);

    const testimonials = [
        {
            id: 1,
            name: "Shiyad Ali",
            position: "CEO",
            company: "Sealand Food",
            content: "For the past eight years, Ultratek Arabia has been a valued partner in constructing and maintaining our cold storage facilities. We highly recommend them for their professionalism, expertise, and commitment to excellence.",
            stars: 5
        },
        {
            id: 2,
            name: "Sayed Idris",
            position: "CEO",
            company: "Arabian Rose Trading Company",
            content: "We've been partnering with Ultratech for our cold storage needs, and the experience has been phenomenal.",
            stars: 5
        },
        {
            id: 3,
            name: "Ahmed Hassan",
            position: "Operations Manager",
            company: "Fresh Logistics Co.",
            content: "The warehouse layout they designed has significantly improved our operational efficiency. The team was professional and delivered quality work within the agreed timeline.",
            stars: 4
        },
        {
            id: 4,
            name: "Fatima Al-Rashid",
            position: "Supply Chain Director",
            company: "Gulf Distribution Services",
            content: "Excellent service and attention to detail. Their cold storage solutions have helped us maintain product quality and reduce energy costs. Highly recommended for any warehousing needs.",
            stars: 4
        }
    ];

    const nextTestimonial = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const getPrevIndex = () => {
        return (activeIndex - 1 + testimonials.length) % testimonials.length;
    };

    const getNextIndex = () => {
        return (activeIndex + 1) % testimonials.length;
    };

    const current = testimonials[activeIndex];
    const prev = testimonials[getPrevIndex()];
    const next = testimonials[getNextIndex()];

    return (
        <section className="py-24 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-6">
                {/* Section Heading - Center */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#004575] hover-text-effect">
                        {"Client Testimonial".split("").map((char, i) => (
                            <span key={i} className="char-zoom">{char === " " ? "\u00A0" : char}</span>
                        ))}
                    </h2>
                </div>

                <div className="relative flex items-center justify-center gap-4 md:gap-8 min-h-[450px]">

                    {/* Left Arrow */}
                    <button
                        onClick={prevTestimonial}
                        className="hidden md:flex absolute left-0 z-30 p-4 rounded-full bg-white shadow-lg text-primary hover:bg-gray-50 transition-colors"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </button>

                    {/* Previous Card - Left Side (Visible on Tablet/Desktop) */}
                    <div
                        className="hidden lg:flex flex-col justify-between w-[320px] h-[320px] p-8 bg-white/50 backdrop-blur-sm rounded-3xl border border-gray-100 shadow-sm opacity-40 scale-90 cursor-pointer hover:opacity-60 transition-all duration-300"
                        onClick={prevTestimonial}
                    >
                        {/* Stars Top */}
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <span key={i} className={`text-xl ${i < prev.stars ? "text-yellow-400" : "text-gray-300"}`}>★</span>
                            ))}
                        </div>

                        {/* Content */}
                        <p className="text-gray-500 italic line-clamp-4">
                            "{prev.content}"
                        </p>

                        {/* Author */}
                        <div>
                            <h4 className="font-bold text-gray-700">{prev.name}</h4>
                            <p className="text-sm text-gray-500">{prev.position}, {prev.company}</p>
                        </div>
                    </div>

                    {/* Active Card - Center */}
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, scale: 0.9, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="w-full max-w-2xl h-auto min-h-[350px] p-8 md:p-10 bg-white rounded-[2rem] shadow-2xl border border-blue-50 z-20 flex flex-col justify-between"
                    >
                        {/* Stars Top */}
                        <div className="flex gap-1 mb-6">
                            {[...Array(5)].map((_, i) => (
                                <span key={i} className={`text-2xl ${i < current.stars ? "text-yellow-400" : "text-gray-200"}`}>★</span>
                            ))}
                        </div>

                        {/* Content */}
                        <p className="text-xl md:text-2xl text-[#004575] font-medium leading-relaxed mb-8">
                            "{current.content}"
                        </p>

                        {/* Author */}
                        <div className="border-t pt-6 border-gray-100">
                            <h4 className="text-lg font-bold text-gray-900">{current.name}</h4>
                            <p className="text-gray-500">{current.position}, {current.company}</p>
                        </div>
                    </motion.div>

                    {/* Next Card - Right Side (Visible on Tablet/Desktop) */}
                    <div
                        className="hidden lg:flex flex-col justify-between w-[320px] h-[320px] p-8 bg-white/50 backdrop-blur-sm rounded-3xl border border-gray-100 shadow-sm opacity-40 scale-90 cursor-pointer hover:opacity-60 transition-all duration-300"
                        onClick={nextTestimonial}
                    >
                        {/* Stars Top */}
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <span key={i} className={`text-xl ${i < next.stars ? "text-yellow-400" : "text-gray-300"}`}>★</span>
                            ))}
                        </div>

                        {/* Content */}
                        <p className="text-gray-500 italic line-clamp-4">
                            "{next.content}"
                        </p>

                        {/* Author */}
                        <div>
                            <h4 className="font-bold text-gray-700">{next.name}</h4>
                            <p className="text-sm text-gray-500">{next.position}, {next.company}</p>
                        </div>
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={nextTestimonial}
                        className="hidden md:flex absolute right-0 z-30 p-4 rounded-full bg-white shadow-lg text-primary hover:bg-gray-50 transition-colors"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </button>

                    {/* Mobile Navigation controls */}
                    <div className="flex md:hidden absolute -bottom-12 gap-4">
                        <button onClick={prevTestimonial} className="p-3 bg-white rounded-full shadow-md text-primary hover:bg-gray-50 transition-colors"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg></button>
                        <button onClick={nextTestimonial} className="p-3 bg-white rounded-full shadow-md text-primary hover:bg-gray-50 transition-colors"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg></button>
                    </div>

                </div>
            </div>
        </section>
    );
}
