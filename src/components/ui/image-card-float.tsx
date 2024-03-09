"use client";

import { cn } from "@/lib/utils/cn";
import { AnimationProps, motion } from "framer-motion";
import Image from "next/image";
import * as React from "react";

type IImageCardFloatProps = {
	alt: string;
	src: string;
	fill: boolean;
	floating: boolean;
	className?: string;
	imageClassName?: string;
};

const ImageCardFloat: React.FunctionComponent<IImageCardFloatProps> = ({
	alt,
	fill,
	floating,
	src,
	imageClassName,
	className,
}) => {
	const animate: AnimationProps["animate"] = floating
		? {
				x: [5, -5, 2],
				y: [2, -5, 5],
				rotate: [0, 0.5, 0, -0.5],
				transition: {
					duration: 10,
					repeat: Infinity,
					repeatType: "reverse",
				},
		  }
		: {};

	return (
		<div className={cn("bg-accent relative", className)}>
			<motion.div animate={animate} className="relative w-full h-full">
				<Image
					className={cn(
						"w-full h-full object-cover rounded-2xl translate-x-5 -translate-y-5 shadow-xl",
						imageClassName,
					)}
					alt={alt}
					src={src}
					fill={fill}
				/>
			</motion.div>
		</div>
	);
};

export default ImageCardFloat;
