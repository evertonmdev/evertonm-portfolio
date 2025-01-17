"use client";

import { MoveBottomToTop } from "@/components/ui/animations/move-bottom-to-top";
import WavingHand from "@/components/ui/animations/waving-hand";
import Button from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import * as React from "react";

const Greetings: React.FunctionComponent = () => {
	return (
		<>
			<article className="prose text-zinc-200 h-[fit] w-full">
				<motion.div
					initial="initial"
					animate="start"
					transition={{
						duration: 0.5,
					}}
					variants={MoveBottomToTop}
					className="flex gap-2 justify-start items-center max-h-fit"
				>
					<i className="h-1 bg-accent w-7 " />
					<h1 className="font-bold text-zinc-200 leading-none mb-0">
						Hello <WavingHand />, I&#39;m{" "}
						<span className="text-accent">Everton Matheus.</span>
					</h1>
				</motion.div>
				<motion.h2
					initial="initial"
					animate="start"
					transition={{
						duration: 0.5,
						delay: 0.5,
					}}
					variants={MoveBottomToTop}
					className="text-zinc-300 mt-0"
					style={{ marginLeft: "calc(1.75rem + 0.5rem)" }}
				>
					FullStack Developer
				</motion.h2>
				<motion.p
					initial="initial"
					animate="start"
					transition={{
						duration: 0.5,
						delay: 0.8,
					}}
					variants={MoveBottomToTop}
				>
					E aí! Chegou até aqui? Que bom! 😉 Prazer, sou desenvolvedor FullStack desde 2019 e tô sempre na correria pra aprender e criar coisas novas. Ultimamente, tenho me divertido bastante com AWS Serverless e AWS Bedrock, mas também manjo de React, Next.js, Node.js, Firebase... e por aí vai! Quer saber mais sobre mim e meus projetos? É só dar um scroll pra baixo! 👇
				</motion.p>
			</article>
			<motion.div
				initial="initial"
				animate="start"
				transition={{
					duration: 0.5,
					delay: 1,
				}}
				variants={MoveBottomToTop}
			>
				<Button
					label="Mais sobre mim"
					type="href"
					href="#sobremim"
					Icon={<ChevronRight />}
				/>
			</motion.div>
		</>
	);
};

export default Greetings;
