import * as React from "react";

type ITextShadedProps = {
	backText: string | React.ReactNode;
	text: string | React.ReactNode;
};

const TextShaded: React.FunctionComponent<ITextShadedProps> = ({
	text,
	backText,
}) => {
	return (
		<div className="w-full inline-flex justify-center items-center h-fit prose mx-auto relative">
			<h1 className="font-bold text-zinc-200 z-10 mb-0 uppercase">{text}</h1>
			<h1 className="absolute leading-none mb-0 text-[3.25em] uppercase text-zinc-800">
				{backText}
			</h1>
		</div>
	);
};

export default TextShaded;
