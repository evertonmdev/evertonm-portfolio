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
					E aí, beleza? Que ótimo ver você por aqui! 😉

					Sou desenvolvedor FullStack desde 2022, sempre buscando aprender e criar soluções que façam a diferença. Meu foco atual está em automações inteligentes e soluções especializadas com IA vertical, tornando processos mais ágeis e produtivos. Tenho duas certificações AWS, sendo uma delas a Developer Associate, além de experiência sólida em React, Next.js, Node.js e Firebase.

					Quer conhecer mais sobre meus projetos ou trocar uma ideia sobre tecnologia e inovação? É só clicar aqui! 👇
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
