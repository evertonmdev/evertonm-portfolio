"use client";
import { motion } from "framer-motion";
import * as React from "react";
import { ITab, Tab } from "./Tab";
import { Tabs } from "./Tabs";

interface ITabsContentProps {
	ArrayTabs: ITab[];
	Contents: React.ReactNode[];
}

export type useTabs = {
	activeTab: HTMLButtonElement | null;
	tabLabel: string | null;
	setActiveTab: (tabRef: useTabs["activeTab"], tabLabel: string) => void;
};

const TabsContent: React.FunctionComponent<ITabsContentProps> = ({
	ArrayTabs,
	Contents,
}) => {
	const [states, setStates] = React.useState<useTabs>({
		activeTab: null,
		tabLabel: null,
		setActiveTab: (tabRef, tabLabel) => {
			setStates((prev) => ({ ...prev, activeTab: tabRef, tabLabel: tabLabel }));
		},
	});

	const indexes = ArrayTabs.map((tab) => tab.label);

	return (
		<div className="hiddenscroll z-20 max-lg:w-full w-1/2 max-h-[80vh] h-full text-zinc-200 rounded-3xl pb-5 max-md:px-2 px-8 flex flex-col items-start justify-start overflow-y-auto">
			<Tabs states={states}>
				{ArrayTabs.map((tab) => (
					<Tab
						key={`tab_${tab.label}`}
						isDefaultSelected={tab.isDefaultSelected}
						label={tab.label}
						states={states}
					/>
				))}
			</Tabs>
			<motion.div className="w-full h-full" key={states.tabLabel}>
				{Contents[indexes.indexOf(states.tabLabel as string)]}
			</motion.div>
		</div>
	);
};

export default TabsContent;
