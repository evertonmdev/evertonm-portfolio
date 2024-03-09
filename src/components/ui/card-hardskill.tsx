"use client";
import { useCardHardSkill } from "@/lib/utils/useCardHardSkill";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import * as React from "react";

export interface ICardHardSkill {
	label: string;
	children: React.ReactNode;
	isStarred?: boolean;
}

export const CardHardSkill: React.FC<ICardHardSkill> = ({
	children,
	label,
	isStarred,
}) => {
	const [isHovered, setIsHovered] = React.useState<boolean>(false);
	const ref = React.useRef<HTMLDivElement>(null);
	const { activated, setAtualActive } = useCardHardSkill();

	React.useEffect(() => {
		if (activated.current === ref.current) setIsHovered(true);
		else setIsHovered(false);
	}, [activated, ref, setIsHovered]);

	return (
		<div className="relative">
			{isStarred && (
				<div className="z-10 absolute -top-[5%] -right-[5%] ring-1 ring-zinc-200/30  p-[2px] rounded-full ">
					<Star className="text-accent fill-accent-400" size={10} />
				</div>
			)}
			<motion.div
				ref={ref}
				onTap={() => setAtualActive(ref)}
				onHoverStart={() => setIsHovered(true)}
				onHoverEnd={() => setIsHovered(false)}
				className="w-[80px] h-auto aspect-square rounded-lg bg-secondary shadow-lg p-3 flex flex-col justify-start items-center relative"
				initial={{ filter: "brightness(1) grayscale(1)" }}
				animate={{
					filter: isHovered
						? "brightness(1.2) grayscale(0)"
						: "brightness(1) grayscale(1)",
					transition: {
						duration: 0.2,
					},
				}}
			>
				{children}
				<motion.span
					initial={{ height: "0px", opacity: 0, y: 0 }}
					animate={{
						height: isHovered ? "auto" : 0,
						opacity: isHovered ? 1 : 0,
						y: isHovered ? 5 : 0,
						transition: {
							duration: 0.2,
						},
					}}
					className="text-sm font-semibold h-0"
				>
					{label}
				</motion.span>
			</motion.div>
		</div>
	);
};
