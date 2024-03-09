"use client";
import Image from "next/image";
import * as React from "react";
import { PinContainer } from "./3d-pin-card";

const Projects: React.FunctionComponent = (props) => {
	return (
		<div className="md:hiddenscroll w-full h-fit py-10 flex justify-start items-start  overflow-x-auto">
			<ProjectContainer
				title="Parttida"
				href="https://parttida.vercel.app"
				description="A web app for managing and tracking your personal finances."
				image="/projetos/parttida.png"
			/>
			<ProjectContainer
				title="Sound Type Lab"
				href="https://sound-type-lab.vercel.app/"
				description="A web app for managing and tracking your personal finances."
				image="/projetos/soundtypelab.png"
			/>
			<ProjectContainer
				title="ToDo Tasks"
				href="https://my-todo-list-ebon.vercel.app/"
				description="A web app for managing and tracking your personal finances."
				image="/projetos/mgtkTasks.png"
			/>
		</div>
	);
};

type ProjectContainerProps = {
	title: string;
	href: string;
	description: string;
	image: string;
};

function ProjectContainer({
	description,
	href,
	title,
	image,
}: ProjectContainerProps) {
	return (
		<PinContainer title={title} href={href}>
			<div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
				<h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
					{title}
				</h3>
				<div className="text-base !m-0 !p-0 font-normal">
					<span className="text-slate-500 ">{description}</span>
				</div>
				<div className="flex flex-1 w-full rounded-lg mt-4 relative">
					<Image
						src={image}
						className="object-contain w-full h-full"
						alt={`${title} Project`}
						fill
					/>
				</div>
			</div>
		</PinContainer>
	);
}

export default Projects;
