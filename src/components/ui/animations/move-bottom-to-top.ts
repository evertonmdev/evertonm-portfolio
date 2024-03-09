import { AnimationProps } from "framer-motion";

export const MoveBottomToTop: (delay: number) => AnimationProps = (number) => ({
	initial: {
		y: 10,
		opacity: 0,
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.5,
			delay: number,
		},
	},
});
