"use client";
import { SoftSkillCard } from "@/components/ui/card-softskill";
import { cn } from "@/lib/utils/cn";
import { motion } from "framer-motion";
import { HandshakeIcon, Lightbulb } from "lucide-react";
import Image from "next/image";
import * as React from "react";

import { FaArrowsTurnToDots } from "react-icons/fa6";

// biome-ignore lint/complexity/noBannedTypes: <explanation>
type ISoftSkillsProps = {};

const SoftSkills: React.FunctionComponent<ISoftSkillsProps> = (props) => {
	return (
		<div className="w-full h-full gridSoftSkills">
			<SoftSkillCard
				className="from-green-700 text-green-500"
				image={
					<Lightbulb
						size={60}
						style={{
							filter: "drop-shadow(0px 0px 5px rgba(34,197, 94,1))",
						}}
					/>
				}
				title="Proatividade"
			/>
			<SoftSkillCard
				className="from-blue-700 text-blue-500"
				image={
					<HandshakeIcon
						size={60}
						style={{
							filter: "drop-shadow(0px 0px 5px rgba(59,130,246,1))",
						}}
					/>
				}
				title="Trabalho em equipe"
			/>
			<SoftSkillCard
				className="from-violet-700 text-violet-500"
				image={
					<FaArrowsTurnToDots
						size={60}
						style={{
							filter: "drop-shadow(0px 0px 5px rgba(139, 92, 246,1))",
						}}
					/>
				}
				title="Flexibilidade"
			/>
		</div>
	);
};

export default SoftSkills;
