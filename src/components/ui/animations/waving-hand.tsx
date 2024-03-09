"use client";

import { motion } from "framer-motion";
import * as React from "react";

const WavingHand: React.FunctionComponent = () => {
	return (
		<motion.span
			className="inline-block"
			animate={{
				rotateZ: [0, 20, 0, 20, 0, 20, 0, 20, 0, 10, 0],
				transition: {
					duration: 2.6,
					repeat: Infinity,
					repeatType: "loop",
					repeatDelay: 1.2,
				},
			}}
		>
			👋🏻
		</motion.span>
	);
};

export default WavingHand;
