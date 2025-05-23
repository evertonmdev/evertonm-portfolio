import { CardHardSkill, ICardHardSkill } from "@/components/ui/card-hardskill";
import * as React from "react";

import AngularJSLogo from "@/assets/angularjs-logo";
import FramerMotionLogo from "@/assets/framer-motion-logo";
import NextJSLogo from "@/assets/nextjs-logo";
import ReactJSLogo from "@/assets/reactjs-logo";
import TailwindCssLogo from "@/assets/tailwindcss-logo";

const FrontEndSkills: React.FunctionComponent = () => {
	const frontend_skills: ICardHardSkill[] = [
		{
			label: "NextJS",
			children: <NextJSLogo className="invert" />,
			isStarred: true,
		},
		{
			label: "ReactJS",
			children: <ReactJSLogo />,
		},
		{
			label: "Framer Motion",
			children: <FramerMotionLogo className="fill-violet-800" />,
		},
		{
			label: "Angular JS",
			children: <AngularJSLogo key={"ok"} />
		},
		{
			label: "Tailwind Css",
			isStarred: true,
			children: <TailwindCssLogo className="w-full h-full" />,
		},
		// {
		// 	label: "Html5",
		// 	children: <Html5Logo />,
		// },
		// {
		// 	label: "Css3",
		// 	children: <Css3Logo />,
		// },
	];

	return (
		<div className="flex flex-col gap-2">
			<h3 className="text-xl font-bold text-zinc-200">Front-End</h3>
			<div className="flex gap-2 items-start justify-start flex-wrap">
				{frontend_skills.map((skill, index) => (
					<CardHardSkill key={skill.label + index} {...skill} />
				))}
			</div>
		</div>
	);
};

export default FrontEndSkills;
