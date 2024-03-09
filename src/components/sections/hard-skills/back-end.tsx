import BunLogo from "@/assets/bun-logo";
import FirebaseLogo from "@/assets/firebase-logo";
import MySqlLogo from "@/assets/mysql-logo";
import NodeJSLogo from "@/assets/nodejs-logo";
import PrismaLogo from "@/assets/prisma-logo";
import RustLogo from "@/assets/rust-logo";
import TypeScriptLogo from "@/assets/typescript-logo";
import { CardHardSkill, ICardHardSkill } from "@/components/ui/card-hardskill";
import * as React from "react";

const BackEndSkills: React.FunctionComponent = () => {
	const backend_skills: ICardHardSkill[] = [
		{ label: "Bun", children: <BunLogo />, isStarred: true },
		{ label: "NodeJS", children: <NodeJSLogo /> },
		{ label: "TypeScript", children: <TypeScriptLogo />, isStarred: true },
		{
			label: "Prisma",
			children: <PrismaLogo className="fill-blue-500" />,
			isStarred: true,
		},
		{ label: "MySql", children: <MySqlLogo className="invert" /> },
		{ label: "firebase", children: <FirebaseLogo /> },
		{ label: "Rust", children: <RustLogo className="invert" /> },
	];

	return (
		<div className="flex flex-col gap-2">
			<h3 className="text-xl font-bold text-zinc-200">Back-End</h3>
			<div className="flex gap-2 items-start justify-start flex-wrap">
				{backend_skills.map((skill, index) => (
					<CardHardSkill key={skill.label + index} {...skill} />
				))}
			</div>
		</div>
	);
};

export default BackEndSkills;
