import { cn } from "@/lib/utils/cn";
import { TargetAndTransition } from "framer-motion";
import { motion } from "framer-motion";
import * as React from "react";
import { UseControllerProps, useController } from "react-hook-form";
import { FormContactSchema } from "./form";

interface InputFormProps extends UseControllerProps<FormContactSchema> {
	name: keyof FormContactSchema;
	label: string;
	type: string;
}

export function InputForm({ label, type, ...props }: InputFormProps) {
	const {
		field: { name, onChange, ref, ...field },
		fieldState: { error },
	} = useController<FormContactSchema>(props);

	const [hasValue, setHasValue] = React.useState("");
	const [isFocused, setIsFocused] = React.useState(false);
	const refElement = React.useRef<
		HTMLInputElement | HTMLTextAreaElement | null
	>(null);

	const onChangeX = (
		e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
	) => setHasValue(e.target.value);

	const onClick = () => {
		setIsFocused(true);
		refElement.current?.focus();
	};
	const onBlur = () => hasValue.length <= 0 && setIsFocused(false);
	const inputVariants: {
		unfocused: TargetAndTransition;
		focused: TargetAndTransition;
	} = {
		focused: {
			left: "0.5rem",
			scale: 0.9,
			top: "3px",
		},
		unfocused: {
			scale: 1,
			left: "0.5rem",
			top: undefined,
		},
	};

	const borderVariants: {
		unfocused: TargetAndTransition;
		focused: TargetAndTransition;
	} = {
		unfocused: {
			left: "0.5rem",
			width: "0%",
		},
		focused: {
			left: "0.5rem",
			width: "100%",
		},
	};

	return (
		<div>
			{error?.message && (
				<span className="text-red-500 text-xs pl-2">{error?.message}</span>
			)}
			{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
			<div
				onClick={onClick}
				onBlur={onBlur}
				className={cn(
					"cursor-text hover:bg-secondary/40 transition-all duration-200 flex justify-start items-center gap-[3px] relative py-2 rounded-xl h-12 overflow-hidden",
					isFocused && "bg-secondary/40",
					type === "textarea" && "h-[200px]",
					error?.message && "border border-red-500",
				)}
			>
				{type === "textarea" ? (
					<>
						<label
							className="absolute font-medium text-sm top-2 left-2"
							htmlFor={name}
						>
							{label}
						</label>
						<textarea
							onChange={(e) => {
								onChange(e);
								onChangeX(e);
							}}
							ref={(e) => {
								ref(e);
								refElement.current = e;
							}}
							className="resize-none absolute h-[80%] bottom-0 w-full bg-transparent border-none outline-none px-2 text-xs"
							{...field}
						/>
					</>
				) : (
					<>
						<motion.i
							variants={borderVariants}
							className="mx-auto bg-accent-500 h-[1px] absolute bottom-0 rounded-2xl"
							initial={"unfocused"}
							animate={isFocused ? "focused" : "unfocused"}
						/>
						<motion.label
							className="absolute font-medium text-sm"
							variants={inputVariants}
							initial="unfocused"
							animate={isFocused ? "focused" : "unfocused"}
							transition={{ duration: 0.15 }}
							htmlFor={name}
						>
							{label}

							<span className="text-red-500"> *</span>
						</motion.label>
						<input
							onChange={(e) => {
								onChange(e);
								onChangeX(e);
							}}
							ref={(e) => {
								ref(e);
								refElement.current = e;
							}}
							className="pointer-events-none bg-transparent left-3 absolute bottom-1 h-5 outline-none w-[90%] text-xs"
							type={type}
							{...field}
						/>
					</>
				)}
			</div>
		</div>
	);
}
