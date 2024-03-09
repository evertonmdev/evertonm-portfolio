import * as React from "react";

type UbuntuLogoProps = React.SVGProps<SVGSVGElement>;

const UbuntuLogo: React.FC<UbuntuLogoProps> = ({ ...rest }) => {
	return (
		// biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
		<svg
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...rest}
		>
			<path
				d="M30 16c0 7.728-6.265 14-14 14S2 23.728 2 16C2 8.265 8.265 2 16 2s14 6.265 14 14z"
				fill="#E95420"
			/>
			<path
				d="M6.822 14.156c-1.01 0-1.822.83-1.822 1.847s.819 1.848 1.822 1.848c1.002 0 1.821-.83 1.821-1.848a1.834 1.834 0 00-1.821-1.847zm13.01 8.392a1.867 1.867 0 00-.669 2.525 1.807 1.807 0 002.49.678 1.867 1.867 0 00.669-2.525c-.512-.878-1.624-1.183-2.49-.678zm-9.054-6.544a5.4 5.4 0 012.265-4.414l-1.33-2.263a8.057 8.057 0 00-3.275 4.663c.573.478.942 1.204.942 2.013 0 .81-.369 1.536-.942 2.014a8.027 8.027 0 003.275 4.663l1.33-2.263a5.4 5.4 0 01-2.264-4.414zm5.322-5.397c2.783 0 5.062 2.159 5.3 4.92l2.6-.042a8.036 8.036 0 00-2.354-5.203 2.538 2.538 0 01-2.183-.18 2.592 2.592 0 01-1.248-1.833 7.927 7.927 0 00-2.115-.29c-1.262 0-2.45.297-3.507.83l1.27 2.296a5.254 5.254 0 012.237-.498zm0 10.793a5.31 5.31 0 01-2.245-.498l-1.269 2.296a7.778 7.778 0 003.507.83c.73 0 1.44-.103 2.115-.29a2.586 2.586 0 011.248-1.833 2.516 2.516 0 012.184-.18 8.07 8.07 0 002.353-5.203l-2.6-.041c-.231 2.753-2.51 4.919-5.293 4.919zm3.725-11.948a1.807 1.807 0 002.49-.678 1.86 1.86 0 00-.669-2.525 1.807 1.807 0 00-2.49.678 1.873 1.873 0 00.669 2.525z"
				fill="#fff"
			/>
		</svg>
	);
};

export default UbuntuLogo;
