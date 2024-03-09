import * as React from "react";

type FramerMotionLogoProps = React.SVGProps<SVGSVGElement>;

const FramerMotionLogo: React.FC<FramerMotionLogoProps> = ({ ...rest }) => {
	return (
		// biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
		<svg
			fill="#000"
			viewBox="0 0 256 256"
			xmlns="http://www.w3.org/2000/svg"
			{...rest}
		>
			<path d="M200 108h-51.878l57.371 54.184A8 8 0 01200 176h-64v60a8 8 0 01-13.493 5.816l-72-68A8 8 0 0148 168v-68a8 8 0 018-8h51.878L50.507 37.816A8 8 0 0156 24h144a8 8 0 018 8v68a8 8 0 01-8 8z" />
		</svg>
	);
};

export default FramerMotionLogo;
