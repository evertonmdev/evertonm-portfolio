import { CardHardSkill, ICardHardSkill } from "@/components/ui/card-hardskill";
import * as React from "react";

import AwsLogo from "@/assets/aws-logo";
import DockerLogo from "@/assets/docker-logo";
import FirebaseLogo from "@/assets/firebase-logo";
import { default as LinuxLogo } from "@/assets/ubuntu-logo";

const CloudSkills: React.FunctionComponent = () => {
    const cloud_skills: ICardHardSkill[] = [
        {
            label: "AWS",
            isStarred: true,
            children: <AwsLogo />
        },
        {
            label: "Linux",
            isStarred: true,
            children: <LinuxLogo />
        },
        {
            label: "Firebase",
            children: <FirebaseLogo />,
        },
        {
            label: "Docker",
            children: <DockerLogo />,
            isStarred: true,
        }
    ];

    return (
        <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold text-zinc-200">Cloud</h3>
            <div className="flex gap-2 items-start justify-start flex-wrap">
                {cloud_skills.map((skill, index) => (
                    <CardHardSkill key={skill.label + index} {...skill} />
                ))}
            </div>
        </div>
    );
};

export default CloudSkills;