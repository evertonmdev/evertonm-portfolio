import { Poppins } from "next/font/google";

const poppins = Poppins({
	weight: ["100", "200", "300", "400", "500", "700"],
	subsets: ["latin"],
});

export const fonts = {
	primary: poppins,
};
