"use client";
import { SoftSkillCard } from "@/components/ui/card-softskill";
import { cn } from "@/lib/utils/cn";
import { HandshakeIcon, Lightbulb, LucideIcon } from "lucide-react";
import * as React from "react";
import { FaArrowsTurnToDots } from "react-icons/fa6";
import { IconType } from "react-icons/lib";

// biome-ignore lint/complexity/noBannedTypes: <explanation>
type ISoftSkillsProps = {};

const SoftSkills: React.FunctionComponent<ISoftSkillsProps> = (props) => {
	const softSkills: {
		title: string;
		Icon: LucideIcon | IconType;
		className: string;
	}[] = [
		{ title: "Proatividade", Icon: Lightbulb, className: "text-green-500" },
		{
			title: "Trabalho em equipe",
			Icon: HandshakeIcon,
			className: "text-blue-500",
		},
		{
			title: "Flexibilidade",
			Icon: FaArrowsTurnToDots,
			className: "text-violet-500",
		},
	];

	return (
		<div className="w-full h-full gridSoftSkills">
			{softSkills.map(({ Icon, className, title }) => (
				<SoftSkillCard
					key={`${title}_softSkill`}
					className={cn(className)}
					image={<Icon size={60} className="drop-shadow-[0_0_5px]" />}
					title={title}
				/>
			))}
		</div>
	);
};

export default SoftSkills;
