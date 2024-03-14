"use client";
import { cn } from "@/lib/utils/cn";
import { animate, motion } from "framer-motion";
import * as React from "react";

interface ISubmitButton {
	isDisbled: boolean;
}

export const FormSubmitButton: React.FC<ISubmitButton> = ({ isDisbled }) => {
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
			disabled={isDisbled}
			onHoverStart={() => setIsHovered(true)}
			onHoverEnd={() => setIsHovered(false)}
			className={cn(
				"relative w-[75px] flex justify-center items-center h-10 bg-secondary rounded-md px-3 py-1 mx-auto mt-3",
				isDisbled && "brightnes-75",
			)}
			whileHover={{
				scale: 1.1,
			}}
			whileTap={{
				scale: 1,
			}}
		>
			{isDisbled ? <div className="loader h-full" /> : "Enviar"}
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

/* HTML: <div class="loader"></div> */
// .loader {
// 	width: 50px;
// 	aspect-ratio: 1;
// 	border-radius: 50%;
// 	padding: 3px;
// 	background:
// 	  radial-gradient(farthest-side,#ffa516 95%,#0000) 50% 0/12px 12px no-repeat,
// 	  radial-gradient(farthest-side,#0000 calc(100% - 5px),#ffa516 calc(100% - 4px)) content-box;
// 	animation: l6 2s infinite ;
//   }
//   @keyframes l6 {to{transform: rotate(1turn)}}
