import * as React from "react";

type Css3LogoProps = React.SVGProps<SVGSVGElement>;

const Css3Logo: React.FC<Css3LogoProps> = ({ ...rest }) => {
	return (
		// biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
		<svg
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...rest}
		>
			<path d="M6 28L4 3h24l-2 25-10 3-10-3z" fill="#1172B8" />
			<path d="M26 5H16v24.5l8-2.5 2-22z" fill="#3AD" />
			<path
				d="M19.5 17.5h-10L9 14l8-2.5H9l-.5-3H24l-.5 3.5-6.5 2.5h6L22 24l-6 2-6-2-.5-5h3l.5 2.5 3 1 3-1 .5-4z"
				fill="#fff"
			/>
		</svg>
	);
};

export default Css3Logo;
