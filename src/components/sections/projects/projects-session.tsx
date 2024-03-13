import TextShaded from "@/components/ui/TextShaded";
import Projects from "@/components/ui/projects";
import * as React from "react";

const ProjectjsSession: React.FunctionComponent = () => {
	return (
		<section
			id="projetos"
			className="w-full min-h-dvh BackgroundGradient  flex flex-col items-center py-10"
		>
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
	);
};

export default ProjectjsSession;
