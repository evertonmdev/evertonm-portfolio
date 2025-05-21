import * as React from "react";
import { TabsContent } from "../modules/Tabs";
import TextShaded from "../ui/TextShaded";
import PersonalInformation from "../ui/personal-information";
import HardSkills from "./hard-skills";
import SoftSkills from "./soft-skill";

const AboutMe: React.FunctionComponent = () => {
	return (
		<section
			id="sobremim"
			className="w-full h-fit flex flex-col gap-10 container relative py-10"
		>
			<TextShaded
				backText={"Sobre mim"}
				text={
					<>
						Sobre <span className="text-accent">Mim</span>
					</>
				}
			/>

			<div className="w-full h-full flex flex-col gap-10 max-lg:px-5">
				<PersonalInformation />
				<TabsContent
					ArrayTabs={[
						{ label: "HardSkills", isDefaultSelected: true },
						{ label: "SoftSkills" },
					]}
					Contents={[
						<HardSkills key={"HardSkills"} />,
						<SoftSkills key={"SoftSkills"} />,
					]}
				/>
			</div>
		</section>
	);
};

export default AboutMe;
