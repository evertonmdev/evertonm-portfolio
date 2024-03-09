import { cn } from "@/lib/utils/cn";
import React from "react";
import { useTabs } from "./TabsContent";

export interface ITab {
	label: string;
	isDefaultSelected?: boolean;
}

interface ITabProps extends ITab {
	states: useTabs;
}

export const Tab: React.FC<ITabProps> = ({
	label,
	isDefaultSelected,
	states,
}) => {
	const { setActiveTab } = states;
	const ref = React.useRef<HTMLButtonElement>(null);
	const onClick = () => setActiveTab(ref.current, label);

	React.useEffect(() => {
		if (isDefaultSelected && ref.current) setActiveTab(ref.current, label);
	}, [isDefaultSelected, setActiveTab, label, ref]);

	return (
		<button
			type="button"
			ref={ref}
			onClick={onClick}
			className={cn(
				"flex-1 flex justify-center items-center px-2 py-[.2em] rounded-lg cursor-pointer",
			)}
		>
			<h2 className="uppercase text-xl text-zinc-200 font-bold">{label}</h2>
		</button>
	);
};
