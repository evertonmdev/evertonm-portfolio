"use client";
import { cn } from "@/lib/utils/cn";
import { motion } from "framer-motion";
import * as React from "react";

interface ButtonProps {
	label: string;
	type: "href" | "submit" | "button";
	href?: string;
	onClick?: () => void;
	Icon: React.ReactNode;
	className?: string;
}

const Button: React.FunctionComponent<ButtonProps> = ({
	label,
	type,
	href,
	onClick,
	Icon,
	className,
}) => {
	const [isHovered, setIsHovered] = React.useState(false);

	const isHoverStart = () => setIsHovered(true);
	const isHoverEnd = () => setIsHovered(false);

	return (
		<motion.div
			animate={{
				scale: isHovered ? 1.05 : 1,
				transition: {
					duration: 0.3,
				},
			}}
			onHoverStart={isHoverStart}
			onHoverEnd={isHoverEnd}
			className={cn(
				"w-[200px] h-10 border border-accent rounded-full text-zinc-200 flex justify-between items-center pl-3",
				className,
			)}
		>
			<span className="text-center w-full text-sm select-none font-semibold text-zinc-300">
				{label}
			</span>
			{type === "href" ? (
				<motion.a
					animate={{
						borderRadius: isHovered ? "0% 50% 50% 0%" : "100% 100% 100% 100%",
						boxShadow: isHovered
							? "0 0 10px 0.05rem rgba(240,176,0, 1)"
							: "0 0 0px 0.125rem rgba(240,176,0, .5)",
						transition: {
							duration: 0.3,
						},
					}}
					href={href}
					className="w-auto h-full aspect-square bg-accent rounded-full flex justify-center items-center text-zinc-100"
				>
					{Icon}
				</motion.a>
			) : (
				<motion.button
					animate={{
						borderRadius: isHovered ? "0% 50% 50% 0%" : "100% 100% 100% 100%",
						boxShadow: isHovered
							? "0 0 10px 0.05rem rgba(240,176,0, 1)"
							: "0 0 0px 0.125rem rgba(240,176,0, .5)",
						transition: {
							duration: 0.3,
						},
					}}
					type={type}
					onClick={onClick}
					className="w-auto h-full aspect-square bg-accent rounded-full flex justify-center items-center text-zinc-100"
				>
					{Icon}
				</motion.button>
			)}
		</motion.div>
	);
};

export default Button;
