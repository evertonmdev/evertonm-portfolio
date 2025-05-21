
"use client";

import { cn } from "@/lib/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

interface AccordionItemProps {
    title: string;
    children: React.ReactNode;
    initiallyOpen?: boolean;
    highlight?: boolean;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
    title,
    children,
    initiallyOpen = false,
    highlight = false,
}) => {
    const [isOpen, setIsOpen] = useState(initiallyOpen);

    return (
        <div className="mb-4 overflow-hidden flex flex-col">
            <motion.button
                className={cn(
                    "w-full flex justify-between h-fit items-center text-left  bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-md border",
                    "hover:border-accent/60 transition-all duration-300 p-4",
                    highlight ? "border-accent/40" : "border-gray-700/50",
                    isOpen && "border-b-0 rounded-b-none overflow-hidden"
                )}
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{
                    scale: 1.01,
                    boxShadow: highlight ? "0 0 15px rgba(240,176,0,0.15)" : "none",
                    transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
            >
                <h3 className="text-sm font-medium text-white leading-none my-0 ">{title}</h3>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={cn(isOpen && highlight ? "text-accent" : "text-gray-400", "text-center ")}
                >
                    <FaChevronDown size={16} />
                </motion.div>
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                            height: "auto",
                            opacity: 1,
                            transition: {
                                height: { duration: 0.3 },
                                opacity: { duration: 0.3, delay: 0.1 }
                            }
                        }}
                        exit={{
                            height: 0,
                            opacity: 0,
                            transition: {
                                height: { duration: 0.3 },
                                opacity: { duration: 0.2 }
                            }
                        }}
                        className={`overflow-hidden border-x border-b rounded-b-lg
              ${highlight ? "border-accent/30" : "border-gray-700/50"}`}
                    >
                        <div className="p-4 bg-gray-800/30 backdrop-blur-sm text-gray-300">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

interface AccordionProps {
    items: {
        title: string;
        content: React.ReactNode;
        highlight?: boolean;
    }[];
    defaultOpenIndex?: number;
}

const Accordion: React.FC<AccordionProps> = ({
    items,
    defaultOpenIndex = -1
}) => {
    return (
        <div className="w-full">
            {items.map((item, index) => (
                <AccordionItem
                    key={`accordion-item-${index}`}
                    title={item.title}
                    initiallyOpen={index === defaultOpenIndex}
                    highlight={item.highlight}
                >
                    {item.content}
                </AccordionItem>
            ))}
        </div>
    );
};

export default Accordion;