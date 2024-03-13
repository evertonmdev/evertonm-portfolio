"use client";
import { cn } from "@/lib/utils/cn";
import { motion } from "framer-motion";
import * as React from "react";
import { MoveBottomToTop } from "./animations/move-bottom-to-top";

type ITextShadedProps = {
	backText: string | React.ReactNode;
	text: string | React.ReactNode;
	className?: string;
};

const TextShaded: React.FunctionComponent<ITextShadedProps> = ({
	text,
	backText,
	className,
}) => {
	return (
		<div
			className={cn(
				"w-full inline-flex justify-center items-center h-fit prose mx-auto relative",
				className,
			)}
		>
			<motion.h1
				variants={MoveBottomToTop}
				initial="initial"
				whileInView="start"
				transition={{
					duration: 0.5,
				}}
				className="font-bold text-zinc-200 z-10 mb-0 uppercase"
			>
				{text}
			</motion.h1>
			<motion.h1
				initial="initial"
				whileInView="start"
				transition={{
					duration: 0.5,
					delay: 0.25,
				}}
				className="absolute leading-none mb-0 text-[3.25em] uppercase text-zinc-800"
			>
				{backText}
			</motion.h1>
		</div>
	);
};

export default TextShaded;
