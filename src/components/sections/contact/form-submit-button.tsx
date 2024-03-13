"use client";
import { animate, motion } from "framer-motion";
import * as React from "react";

export const FormSubmitButton: React.FC = () => {
	const [isHovered, setIsHovered] = React.useState(false);
	const leftBorder = React.useRef<HTMLDivElement>(null);
	const rightBorder = React.useRef<HTMLDivElement>(null);
	const bottomBorder = React.useRef<HTMLDivElement>(null);
	const topBoder = React.useRef<HTMLDivElement>(null);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	React.useEffect(() => {
		if (
			leftBorder.current &&
			topBoder.current &&
			rightBorder.current &&
			bottomBorder.current
		) {
			if (isHovered)
				animate(
					[
						[leftBorder.current, { height: "100%" }],
						[topBoder.current, { width: "100%" }],
						[rightBorder.current, { height: "100%" }],
						[bottomBorder.current, { width: "100%" }],
					],
					{
						defaultTransition: {
							ease: "linear",
							duration: 0.15,
						},
					},
				);
			else if (!isHovered)
				animate(
					[
						[bottomBorder.current, { width: "0%" }],
						[rightBorder.current, { height: "0%" }],
						[topBoder.current, { width: "0%" }],
						[leftBorder.current, { height: "0%" }],
					],
					{
						defaultTransition: {
							ease: "linear",
							duration: 0.15,
						},
					},
				);
		}
	}, [isHovered]);

	return (
		<motion.button
			onHoverStart={() => setIsHovered(true)}
			onHoverEnd={() => setIsHovered(false)}
			className="relative w-fit h-fit bg-secondary rounded-md px-3 py-1 mx-auto mt-3"
			whileHover={{
				scale: 1.1,
			}}
			whileTap={{
				scale: 1,
			}}
		>
			Enviar
			<motion.div
				ref={leftBorder}
				initial={{ height: "0%" }}
				className="mx-auto bg-accent shadow-[0_0_10px] shadow-accent w-[1px] absolute left-0 bottom-0"
			/>
			<motion.div
				ref={topBoder}
				initial={{ width: "0%" }}
				className="mx-auto bg-accent shadow-[0_0_10px] shadow-accent h-[1px] absolute left-0 top-0"
			/>
			<motion.div
				ref={rightBorder}
				initial={{ height: "0%" }}
				className="mx-auto bg-accent shadow-[0_0_10px] shadow-accent w-[1px]  absolute right-0 top-0"
			/>
			<motion.div
				ref={bottomBorder}
				initial={{ width: "0%" }}
				className="mx-auto bg-accent shadow-[0_0_10px] shadow-accent h-[1px]  absolute right-0 bottom-0"
			/>
		</motion.button>
	);
};

export default FormSubmitButton;
