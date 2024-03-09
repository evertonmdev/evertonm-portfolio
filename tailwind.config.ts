import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{ts,tsx}",
		"./src/components/**/*.{ts,tsx}",
		"./src/app/**/*.{ts,tsx}",
	],
	theme: {
		extend: {
			backgroundColor: {
				primary: "#101010",
				secondary: "#2C2C2C",
			},
			colors: {
				accent: {
					DEFAULT: "#F0B000",
					100: "#fcefcc",
					200: "#f9df99",
					300: "#f6d066",
					400: "#f3c033",
					500: "#f0b000",
					600: "#c08d00",
					700: "#906a00",
					800: "#604600",
					900: "#302300",
				},
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
export default config;
