import { create } from "zustand";

type useTabs = {
	activeTab: HTMLButtonElement | null;
	setActiveTab: (tab: useTabs["activeTab"]) => void;
};

export const useTabs = create<useTabs>((set) => ({
	activeTab: null,
	setActiveTab(tab) {
		set({ activeTab: tab });
	},
}));
