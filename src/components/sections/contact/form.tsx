"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as React from "react";
import { useForm } from "react-hook-form";
import { ReactTyped } from "react-typed";
import { z } from "zod";

import FormSubmitButton from "./form-submit-button";
import { InputForm } from "./input-form";

export const formContactSchema = z.object({
	name: z
		.string()
		.min(3, { message: "Por favor informe seu nome" })
		.max(100, { message: "O nome deve ter no máximo 100 caracteres" }),
	email: z.string().email({ message: "Email invalido!" }).optional(),
	message: z.string(),
});

export type FormContactSchema = z.infer<typeof formContactSchema>;

const Form: React.FunctionComponent = () => {
	const { control, handleSubmit } = useForm<FormContactSchema>({
		resolver: zodResolver(formContactSchema),
	});

	const onSubmit = (data: FormContactSchema) => {
		console.log(data);
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="w-full h-fit flex flex-col text-zinc-200 gap-4"
		>
			<InputForm control={control} name="name" label="Nome" type="text" />
			<InputForm control={control} name="email" label="E-mail" type="email" />
			<InputForm
				control={control}
				name="message"
				label="Mensagem"
				type="textarea"
			/>
			<FormSubmitButton />
		</form>
	);
};

export default Form;
