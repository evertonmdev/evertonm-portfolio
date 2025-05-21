"use client";
import { cn } from "@/lib/utils/cn";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import * as React from "react";

interface ISubmitButton {
	isDisbled: boolean;
}

export const FormSubmitButton: React.FC<ISubmitButton> = ({ isDisbled }) => {

	return (
		<motion.button
			disabled={isDisbled}
			className={cn(
				"relative w-[75px] flex justify-center text-xs items-center h-10 bg-secondary rounded-md px-3 py-1 mx-auto mt-3",
				isDisbled && "brightnes-75",
			)}
			initial={{
				border: "1px solid rgb(113 113 122)",
				boxShadow: "0 0 0px rgba(113,113,122,0.15)",
			}}
			whileHover={{
				scale: 1.1,
				border: "1px solid #ffa516",
				boxShadow: "0 0 15px rgba(240,176,0,0.15)",
			}}
			whileTap={{
				scale: 1,
			}}
		>
			{isDisbled ? <Loader2 className="animate-spin" size={15} /> : "Enviar"}
		</motion.button>
	);
};

export default FormSubmitButton;

/* HTML: <div class="loader"></div> */
// .loader {
// 	width: 50px;
// 	aspect-ratio: 1;
// 	border-radius: 50%;
// 	padding: 3px;
// 	background:
// 	  radial-gradient(farthest-side,#ffa516 95%,#0000) 50% 0/12px 12px no-repeat,
// 	  radial-gradient(farthest-side,#0000 calc(100% - 5px),#ffa516 calc(100% - 4px)) content-box;
// 	animation: l6 2s infinite ;
//   }
//   @keyframes l6 {to{transform: rotate(1turn)}}
