"use client";
import { SoftSkillCard } from "@/components/ui/card-softskill";
import { cn } from "@/lib/utils/cn";
import { HandshakeIcon, Lightbulb, LucideIcon, ShieldCheck } from "lucide-react";
import * as React from "react";
import { FaArrowsTurnToDots, FaBrain, FaClipboardCheck, FaComments, FaPuzzlePiece, FaSitemap } from "react-icons/fa6";
import { IconType } from "react-icons/lib";


// biome-ignore lint/complexity/noBannedTypes: <explanation>
type ISoftSkillsProps = {};

const SoftSkills: React.FunctionComponent<ISoftSkillsProps> = (props) => {
	const softSkills: {
		title: string;
		Icon: LucideIcon | IconType;
		className: string;
	}[] = [
			{ title: "Proatividade", Icon: Lightbulb, className: "text-yellow-500" },
			{
				title: "Trabalho em equipe",
				Icon: HandshakeIcon,
				className: "text-blue-500",
			},
			{
				title: "Flexibilidade",
				Icon: FaArrowsTurnToDots,
				className: "text-green-500",
			},
			{
				title: "Resiliência",
				Icon: ShieldCheck, // Import from react-icons/fa6
				className: "text-orange-500",
			},
			{
				title: "Comunicação",
				Icon: FaComments, // Import from react-icons/fa
				className: "text-purple-500",
			},
			{
				title: "Resolução de problemas",
				Icon: FaPuzzlePiece, // Import from react-icons/fa
				className: "text-red-500",
			},
			{
				title: "Tomada de decisão",
				Icon: FaSitemap, // Import from react-icons/fa
				className: "text-teal-500",
			},
			{
				title: "Adaptabilidade",
				Icon: FaArrowsTurnToDots,
				className: "text-blue-400",
			},
			{
				title: "Pensamento Crítico",
				Icon: FaBrain, // Import from react-icons/fa
				className: "text-indigo-500",
			},
			{
				title: "Responsabilidade",
				Icon: FaClipboardCheck, // Import from react-icons/fa
				className: "text-green-600",
			}
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
