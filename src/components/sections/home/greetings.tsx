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
					{...MoveBottomToTop(0.2)}
					className="flex gap-2 justify-start items-center max-h-fit"
				>
					<i className="h-1 bg-accent w-7 " />
					<h1 className="font-bold text-zinc-200 leading-none mb-0">
						Hello <WavingHand />, I&#39;m{" "}
						<span className="text-accent">Everton Matheus.</span>
					</h1>
				</motion.div>
				<motion.h2
					{...MoveBottomToTop(0.5)}
					className="text-zinc-300 mt-0"
					style={{ marginLeft: "calc(1.75rem + 0.5rem)" }}
				>
					FullStack Developer
				</motion.h2>
				<motion.p {...MoveBottomToTop(0.8)}>
					Sou um profissional dedicado, proativo e apaixonado pelo que faço.
					Acredito no poder da tecnologia para transformar o mundo e busco
					contribuir para projetos que façam a diferença.
				</motion.p>
			</article>
			<motion.div {...MoveBottomToTop(1)}>
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
