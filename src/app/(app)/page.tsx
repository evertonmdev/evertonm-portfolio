import AboutMe from "@/components/sections/AboutMe";
import Home from "@/components/sections/Home";
import Contact from "@/components/sections/contact";
import ProjectjsSession from "@/components/sections/projects/projects-session";
import Divider from "@/components/ui/divider";
import { SparklesCore } from "@/components/ui/sparkles";
import * as React from "react";

export default function App() {
	return (
		<main className="flex w-full min-h-dvh flex-col items-center justify-between bg-primary">
			<SparklesCore
				background="transparent"
				minSize={0.4}
				maxSize={1}
				particleDensity={10}
				className="pointer-events-none w-full h-screen fixed top-0 left-0"
				particleColor="#F0B000"
			/>
			<Home />
			<Divider />
			<AboutMe />
			<Divider />
			<ProjectjsSession />
			<Divider />
			<Contact />
		</main>
	);
}
