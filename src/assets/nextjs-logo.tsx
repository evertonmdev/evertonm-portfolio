import * as React from "react";

type NextJSLogoProps = React.SVGProps<SVGSVGElement>;

const NextJSLogo: React.FC<NextJSLogoProps> = ({ ...rest }) => {
	return (
		// biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
		<svg
			viewBox="0 0 15 15"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...rest}
		>
			<path
				d="M4.5 4.5l.405-.293A.5.5 0 004 4.5h.5zm3 9.5A6.5 6.5 0 011 7.5H0A7.5 7.5 0 007.5 15v-1zM14 7.5A6.5 6.5 0 017.5 14v1A7.5 7.5 0 0015 7.5h-1zM7.5 1A6.5 6.5 0 0114 7.5h1A7.5 7.5 0 007.5 0v1zm0-1A7.5 7.5 0 000 7.5h1A6.5 6.5 0 017.5 1V0zM5 12V4.5H4V12h1zm-.905-7.207l6.5 9 .81-.586-6.5-9-.81.586zM10 4v6h1V4h-1z"
				fill="#000"
			/>
		</svg>
	);
};

export default NextJSLogo;
