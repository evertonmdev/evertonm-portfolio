"use client";

import { create } from "zustand";

type GlobalStates = {
	scrollYProgress: number;
	setScrollY: (scrollY: number) => void;
};

export const useGlobalStates = create<GlobalStates>((set, get) => ({
	scrollYProgress: 0,
	setScrollY: (actual: number) => {
		if (window) set({ scrollYProgress: actual / window.innerHeight });
	},
}));
