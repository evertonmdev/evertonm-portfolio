"use client";
import { cn } from "@/lib/utils/cn";
import { motion } from "framer-motion";
import Image from "next/image";
import * as React from "react";

type ISoftSkillCardProps = {
	title: string;
	image: string | React.ReactNode;
	className?: string;
};
export function SoftSkillCard({
	image,
	title,
	className,
}: ISoftSkillCardProps) {
	const [isHovered, setIsHovered] = React.useState(false);

	return (
		<motion.div
			onHoverStart={() => setIsHovered(true)}
			onHoverEnd={() => setIsHovered(false)}
			onTap={() => setIsHovered(!isHovered)}
			className={cn(
				"w-full max-w-[300px] z-20 h-fit relative isolate flex flex-col p-3 justify-center gap-3 items-center overflow-hidden rounded-lg",
				className,
			)}
		>
			<motion.div
				initial={{
					width: "0%",
					opacity: 0,
				}}
				animate={{
					opacity: 1,
					width: isHovered ? "70%" : "0%",
					transition: { duration: 0.6, ease: "backInOut" },
				}}
				className="absolute top-0 bg-accent shadow-[0_0_30px_5px] shadow-accent-600 h-[1px]  mx-auto"
			/>
			<motion.div
				animate={{
					scale: isHovered ? 1.05 : 1,
					filter: isHovered ? "brightness(1) " : "brightness(.5) ",
					transition: { duration: 0.3 },
				}}
				className="w-[80%] max-w-[180px] h-auto aspect-square p-3 relative flex justify-center items-center"
			>
				{typeof image === "string" ? (
					<Image
						src={image}
						alt={title}
						fill
						className="object-cover rounded-lg"
					/>
				) : (
					image
				)}
			</motion.div>

			<motion.div
				className={cn(
					"font-medium text-sm transition-colors duration-500 drop-shadow-[0_0_5px]",
					!isHovered && "text-zinc-200/30",
				)}
			>
				{title}
			</motion.div>
		</motion.div>
	);
}
