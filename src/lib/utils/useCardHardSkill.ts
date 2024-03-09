import React from "react";
import { create } from "zustand";

type CardHardSkill = {
	activated: React.RefObject<HTMLDivElement>;
	setAtualActive: (hardSkill: CardHardSkill["activated"]) => void;
};

export const useCardHardSkill = create<CardHardSkill>((set) => ({
	activated: React.createRef(),
	setAtualActive(hardSkill) {
		set({ activated: hardSkill });
	},
}));
