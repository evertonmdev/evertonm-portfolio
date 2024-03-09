import { Poppins } from "next/font/google";

const poppins = Poppins({
	weight: ["300", "400", "500", "700", "100"],
	subsets: ["latin"],
});

export const fonts = {
	primary: poppins,
};
