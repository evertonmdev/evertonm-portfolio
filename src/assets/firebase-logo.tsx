import * as React from "react";

type FirebaseLogoProps = React.SVGProps<SVGSVGElement>;

const FirebaseLogo: React.FC<FirebaseLogoProps> = ({ ...rest }) => {
	return (
		// biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
		<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...rest}>
			<path
				d="M5.8 24.6l.17-.237 8.02-15.214.017-.161-3.535-6.64a.656.656 0 00-1.227.207z"
				fill="#ffc24a"
			/>
			<path
				d="M5.9 24.42l.128-.25 7.937-15.056-3.526-6.666a.6.6 0 00-1.133.206z"
				fill="#ffa712"
			/>
			<path
				d="M16.584 14.01l2.632-2.7-2.633-5.021a.678.678 0 00-1.195 0l-1.407 2.682V9.2z"
				fill="#f4bd62"
			/>
			<path
				d="M16.537 13.9l2.559-2.62-2.559-4.88a.589.589 0 00-1.074-.047l-1.414 2.729-.042.139z"
				fill="#ffa50e"
			/>
			<path
				fill="#f6820c"
				d="M5.802 24.601L5.879 24.523 6.158 24.41 16.418 14.188 16.548 13.834 13.989 8.956 5.802 24.601z"
			/>
			<path
				d="M16.912 29.756l9.288-5.179-2.654-16.331a.635.635 0 00-1.075-.346L5.8 24.6l9.233 5.155a1.927 1.927 0 001.878 0"
				fill="#fde068"
			/>
			<path
				d="M26.115 24.534L23.483 8.326a.557.557 0 00-.967-.353L5.9 24.569l9.131 5.1a1.912 1.912 0 001.863 0z"
				fill="#fcca3f"
			/>
			<path
				d="M16.912 29.6a1.927 1.927 0 01-1.878 0l-9.158-5.078-.076.078 9.233 5.155a1.927 1.927 0 001.878 0l9.289-5.178-.023-.14z"
				fill="#eeab37"
			/>
		</svg>
	);
};

export default FirebaseLogo;
