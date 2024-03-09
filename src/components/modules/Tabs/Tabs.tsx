"use client";
import { motion } from "framer-motion";
import * as React from "react";
import { useTabs } from "./TabsContent";

export type ITabProps = {
	children: React.ReactNode;
	states: useTabs;
};

export const Tabs: React.FunctionComponent<ITabProps> = ({
	children,
	states,
}) => {
	const { activeTab } = states;
	return (
		<div className="sticky top-0 py-4 z-20 backdrop-blur-sm rounded-xl w-full  mx-auto mb-5">
			<div className="w-full max-w-[400px] mx-auto relative flex justify-between py-1 max-md:px-3 px-10 gap-3 ">
				{children}
				<motion.span
					className="border border-accent absolute rounded-lg mix-blend-screen top-0 z-10"
					animate={{
						left: activeTab?.offsetLeft,
						width: activeTab?.offsetWidth,
						height: "100%",
					}}
				/>
			</div>
		</div>
	);
};
