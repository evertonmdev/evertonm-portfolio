"use client";
import {
    motion,
    useScroll,
    useTransform
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
    title: string;
    subtitle?: string;
    date: string;
    content: React.ReactNode;
    icon?: React.ReactNode;
    highlight?: boolean;
}

export const Timeline = ({ data, showHeader = false, title, description }: {
    data: TimelineEntry[];
    showHeader?: boolean;
    title?: React.ReactNode;
    description?: React.ReactNode;
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setHeight(rect.height);
        }
    }, [ref]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 50%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        <div
            className="w-full bg-transparent font-sans"
            ref={containerRef}
        >
            {showHeader && (
                <div className="max-w-7xl mx-auto py-6 px-4">
                    {title && <h2 className="text-lg md:text-4xl mb-4 text-white max-w-4xl">
                        {title}
                    </h2>}
                    {description && <p className="text-gray-300 text-sm md:text-base max-w-sm">
                        {description}
                    </p>}
                </div>
            )}

            <div ref={ref} className="relative max-w-7xl mx-auto pb-10">
                {data.map((item, idx) => (
                    <div
                        key={`timeline-item-${idx}-${item.title}`}
                        className="flex justify-start pt-10 md:pt-24 md:gap-10"
                    >
                        <div className="sticky max-md:top-60 flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 20,
                                    delay: idx * 0.1
                                }}
                                className={`h-14 absolute left-3 md:left-3 w-14 rounded-full flex items-center justify-center 
                                ${item.highlight
                                        ? "bg-accent shadow-[0_0_15px_rgba(240,176,0,0.5)]"
                                        : "bg-gray-800 border border-gray-700"}`}
                            >
                                {item.icon ? (
                                    <span className="text-white">{item.icon}</span>
                                ) : (
                                    <div className="h-5 w-5 rounded-full bg-accent border border-accent-300 p-2" />
                                )}
                            </motion.div>
                            <motion.h3
                                initial={{ x: -30, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: idx * 0.1 + 0.2
                                }}
                                className="hidden md:block text-xl md:pl-24 md:text-3xl font-bold text-accent"
                            >
                                {item.title}
                            </motion.h3>
                        </div>

                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: idx * 0.1 + 0.3
                            }}
                            className="relative pl-20 pr-4 md:pl-4 w-full"
                        >
                            <h3 className="md:hidden block text-2xl mb-2 text-left font-bold text-accent">
                                {item.title}
                            </h3>
                            <p className="text-sm text-gray-400 mb-2">{item.date}</p>
                            {item.subtitle && <p className="text-md text-gray-300 mb-3">{item.subtitle}</p>}

                            <div className="prose prose-invert max-w-none text-gray-300">
                                {item.content}
                            </div>
                        </motion.div>
                    </div>
                ))}
                <div
                    style={{
                        height: `${height}px`,
                    }}
                    className="absolute md:left-10 left-10 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-gray-600 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
                >
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                        }}
                        className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-accent via-accent/70 to-transparent from-[0%] via-[15%] rounded-full shadow-[0_0_8px_rgba(240,176,0,0.6)]"
                    />
                </div>
            </div>
        </div>
    );
};
