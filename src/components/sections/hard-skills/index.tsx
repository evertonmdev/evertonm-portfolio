import * as React from "react";
import BackEndSkills from "./back-end";
import FrontEndSkills from "./front-end";
import ToolsSkills from "./tools";

const HardSkills: React.FunctionComponent = () => {
	return (
		<div className="space-y-4">
			<FrontEndSkills />
			<BackEndSkills />
			<ToolsSkills />
		</div>
	);
};

export default HardSkills;
