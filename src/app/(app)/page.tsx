import AboutMe from "@/components/sections/AboutMe";
import Home from "@/components/sections/Home";
import TextShaded from "@/components/ui/TextShaded";
import Divider from "@/components/ui/divider";
import Projects from "@/components/ui/projects";
import { SparklesCore } from "@/components/ui/sparkles";
import * as React from "react";

export default function App() {
	return (
		<main className="flex w-full min-h-dvh flex-col items-center justify-between bg-primary">
			<Home />
			<SparklesCore
				background="transparent"
				minSize={0.4}
				maxSize={1}
				particleDensity={10}
				className="pointer-events-none w-full h-screen fixed top-0 left-0"
				particleColor="#F0B000"
			/>
			<Divider />
			<AboutMe />
			<Divider />
			<section className="w-full min-h-dvh BackgroundGradient  flex flex-col items-center py-10">
				<div className="container flex flex-col gap-5">
					<TextShaded
						backText={"Meus Projetos"}
						text={
							<>
								Meus <span className="text-accent">Projetos</span>
							</>
						}
					/>
					<Projects />
				</div>
			</section>
		</main>
	);
}
