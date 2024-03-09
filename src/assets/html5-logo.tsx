import * as React from "react";

type Html5LogoProps = React.SVGProps<SVGSVGElement>;

const Html5Logo: React.FC<Html5LogoProps> = ({ ...rest }) => {
	return (
		// biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
		<svg
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...rest}
		>
			<path d="M6 28L4 3h24l-2 25-10 3-10-3z" fill="#E44D26" />
			<path d="M26 5H16v24.5l8-2.5 2-22z" fill="#F16529" />
			<path
				d="M9.5 17.5L8.5 8H24l-.5 3h-12l.5 3.5h11L22 24l-6 2-6-2-.5-5h3l.5 2.5 3 1 3-1 .5-4h-10z"
				fill="#fff"
			/>
		</svg>
	);
};

export default Html5Logo;
