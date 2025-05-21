import * as React from "react";
import BackEndSkills from "./back-end";
import CloudSkills from "./cloud";
import FrontEndSkills from "./front-end";
import ToolsSkills from "./tools";

const HardSkills: React.FunctionComponent = () => {
	return (
		<div className="space-y-4 w-full">
			<FrontEndSkills />
			<BackEndSkills />
			<CloudSkills />
			<ToolsSkills />
		</div>
	);
};

export default HardSkills;
