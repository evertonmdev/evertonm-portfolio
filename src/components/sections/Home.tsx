"use client";

import { motion } from "framer-motion";
import * as React from "react";
import ImageCardFloat from "../ui/image-card-float";
import Greetings from "./home/greetings";

const Home: React.FunctionComponent = () => {
	return (
		<section
			id="home"
			className="w-full h-dvh flex gap-20 items-center container max-lg:px-4"
		>
			<motion.div
				className=" max-lg:hidden"
				initial={{
					x: "-100%",
					opacity: 0,
				}}
				animate={{
					x: "0%",
					opacity: [0, 1],
					transition: {
						duration: 0.45,
						type: "spring",
					},
				}}
			>
				<ImageCardFloat
					alt="Everton Matheus"
					src="/imagens/me.jpg"
					fill={true}
					floating={true}
					className="w-[30vw] h-[70vh]"
				// imageClassName="
				/>
			</motion.div>
			<div className="h-[60vh] flex flex-col gap-10">
				<Greetings />
			</div>
		</section>
	);
};

export default Home;
