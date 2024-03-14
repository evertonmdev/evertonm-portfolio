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
	const ref = React.useRef<HTMLDivElement>(null);
	const { activated, setAtualActive } = useCardHardSkill();

	const isActivated = React.useCallback(() => {
		if (activated.current === ref.current && activated.current !== null)
			return true;
		return false;
	}, [activated, ref]);

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
				onHoverStart={() => setAtualActive(ref)}
				className="w-[80px] h-auto aspect-square rounded-lg bg-secondary shadow-lg p-3 flex flex-col justify-start items-center relative"
				initial={{ filter: "brightness(1) grayscale(1)" }}
				animate={{
					filter: isActivated()
						? "brightness(1.2) grayscale(0)"
						: "brightness(1) grayscale(1)",
					transition: {
						duration: 0.2,
					},
				}}
			>
				{children}
				<motion.span
					initial={{ opacity: 0, y: 0 }}
					animate={{
						height: isActivated() ? undefined : 0,
						opacity: isActivated() ? 1 : 0,
						y: isActivated() ? 5 : 0,
						transition: {
							duration: 0.2,
						},
					}}
					className="text-sm font-semibold"
				>
					{label}
				</motion.span>
			</motion.div>
		</div>
	);
};
