import * as React from "react";

type ReactJSLogoProps = React.SVGProps<SVGSVGElement>;

const ReactJSLogo: React.FC<ReactJSLogoProps> = ({ ...rest }) => {
	return (
		// biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
		<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...rest}>
			<g fill="#00d8ff">
				<circle cx={16} cy={15.974} r={2.5} />
				<path d="M16 21.706a28.385 28.385 0 01-8.88-1.2 11.3 11.3 0 01-3.657-1.958A3.543 3.543 0 012 15.974c0-1.653 1.816-3.273 4.858-4.333A28.755 28.755 0 0116 10.293a28.674 28.674 0 019.022 1.324 11.376 11.376 0 013.538 1.866A3.391 3.391 0 0130 15.974c0 1.718-2.03 3.459-5.3 4.541a28.8 28.8 0 01-8.7 1.191zm0-10.217a27.948 27.948 0 00-8.749 1.282c-2.8.977-4.055 2.313-4.055 3.2 0 .928 1.349 2.387 4.311 3.4A27.21 27.21 0 0016 20.51a27.6 27.6 0 008.325-1.13C27.4 18.361 28.8 16.9 28.8 15.974a2.327 2.327 0 00-1.01-1.573 10.194 10.194 0 00-3.161-1.654A27.462 27.462 0 0016 11.489z" />
				<path d="M10.32 28.443a2.639 2.639 0 01-1.336-.328c-1.432-.826-1.928-3.208-1.327-6.373a28.755 28.755 0 013.4-8.593 28.676 28.676 0 015.653-7.154 11.376 11.376 0 013.384-2.133 3.391 3.391 0 012.878 0c1.489.858 1.982 3.486 1.287 6.859a28.806 28.806 0 01-3.316 8.133 28.385 28.385 0 01-5.476 7.093 11.3 11.3 0 01-3.523 2.189 4.926 4.926 0 01-1.624.307zm1.773-14.7a27.948 27.948 0 00-3.26 8.219c-.553 2.915-.022 4.668.75 5.114.8.463 2.742.024 5.1-2.036a27.209 27.209 0 005.227-6.79 27.6 27.6 0 003.181-7.776c.654-3.175.089-5.119-.713-5.581a2.327 2.327 0 00-1.868.089A10.194 10.194 0 0017.5 6.9a27.464 27.464 0 00-5.4 6.849z" />
				<path d="M21.677 28.456c-1.355 0-3.076-.82-4.868-2.361a28.756 28.756 0 01-5.747-7.237 28.676 28.676 0 01-3.374-8.471 11.376 11.376 0 01-.158-4A3.391 3.391 0 018.964 3.9c1.487-.861 4.01.024 6.585 2.31a28.8 28.8 0 015.39 6.934 28.384 28.384 0 013.41 8.287 11.3 11.3 0 01.137 4.146 3.543 3.543 0 01-1.494 2.555 2.59 2.59 0 01-1.315.324zm-9.58-10.2a27.949 27.949 0 005.492 6.929c2.249 1.935 4.033 2.351 4.8 1.9.8-.465 1.39-2.363.782-5.434A27.212 27.212 0 0019.9 13.74a27.6 27.6 0 00-5.145-6.64c-2.424-2.152-4.39-2.633-5.191-2.169a2.327 2.327 0 00-.855 1.662 10.194 10.194 0 00.153 3.565 27.465 27.465 0 003.236 8.1z" />
			</g>
		</svg>
	);
};

export default ReactJSLogo;
