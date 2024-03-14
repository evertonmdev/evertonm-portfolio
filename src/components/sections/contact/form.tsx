"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { ApiClient } from "@/lib/utils/eden-client";
import { toast } from "sonner";
import FormSubmitButton from "./form-submit-button";
import { InputForm } from "./input-form";

export const formContactSchema = z.object({
	name: z
		.string()
		.min(3, { message: "Por favor informe seu nome" })
		.max(100, { message: "O nome deve ter no máximo 100 caracteres" }),
	email: z.string().email({ message: "Email invalido!" }),
	message: z.string(),
});

export type FormContactSchema = z.infer<typeof formContactSchema>;

const Form: React.FunctionComponent = () => {
	const [isDisabled, setButtonDisabled] = React.useState<boolean>(false);
	const { control, handleSubmit } = useForm<FormContactSchema>({
		resolver: zodResolver(formContactSchema),
	});

	const onSubmit = async (data: FormContactSchema) => {
		setButtonDisabled(true);
		ApiClient("/api/messenger/contactReport", {
			method: "POST",
			body: data,
		})
			.then((r) => {
				if (r) {
					setButtonDisabled(false);
					toast.success("Mensagem enviada com sucesso!");
				}
			})
			.catch((e) => {
				toast.error("Falha ao enviar mensagem, por favor me mande um email!");
				setButtonDisabled(false);
			});
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="w-full h-fit flex flex-col text-zinc-200 gap-4 "
		>
			<InputForm control={control} name="name" label="Nome" type="text" />
			<InputForm control={control} name="email" label="E-mail" type="email" />
			<InputForm
				control={control}
				name="message"
				label="Mensagem"
				type="textarea"
			/>

			<FormSubmitButton isDisbled={isDisabled} />
		</form>
	);
};

export default Form;
