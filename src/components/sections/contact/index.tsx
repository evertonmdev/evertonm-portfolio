import TextShaded from "@/components/ui/TextShaded";
import * as React from "react";
import Form, { FormContactSchema } from "./form";

const Contact: React.FunctionComponent = () => {
	return (
		<section
			id="contato"
			className="w-full h-dvh  flex flex-col py-10 space-y-5"
		>
			<TextShaded
				className="mx-auto"
				backText="Contato"
				text={
					<>
						<span className="text-accent">Contato</span>
					</>
				}
			/>

			<div className="flex flex-col items-center justify-center w-full h-full max-md:px-3">
				<div className="flex items-center justify-center  backdrop-blur-sm max-w-[500px] h-fit py-5 px-3 w-full rounded-xl">
					<Form />
				</div>
			</div>
		</section>
	);
};

export default Contact;
