import DockerLogo from "@/assets/docker-logo";
import FigmaLogo from "@/assets/figma-logo";
import GithubLogo from "@/assets/github-logo";
import LinuxLogo from "@/assets/ubuntu-logo";
import VSCodeLogo from "@/assets/vscode-logo";
import { CardHardSkill, ICardHardSkill } from "@/components/ui/card-hardskill";
import * as React from "react";

const ToolsSkills: React.FunctionComponent = () => {
	const tools_skills: ICardHardSkill[] = [
		{
			label: "Linux",
			children: <LinuxLogo />,
			isStarred: true,
		},
		{
			label: "Docker",
			children: <DockerLogo />,
		},
		{
			label: "Github",
			children: <GithubLogo />,
		},
		{
			label: "Figma",
			children: <FigmaLogo />,
		},
		{
			label: "VSCode",
			children: <VSCodeLogo />,
			isStarred: true,
		},
	];

	return (
		<div className="flex flex-col gap-2">
			<h3 className="text-xl font-bold text-zinc-200">Ferramentas</h3>
			<div className="flex gap-2 items-start justify-start flex-wrap">
				{tools_skills.map((tool, index) => (
					<CardHardSkill key={tool.label + index} {...tool} />
				))}
			</div>
		</div>
	);
};

export default ToolsSkills;
