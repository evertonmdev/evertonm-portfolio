"use server";

import { Download } from "lucide-react";
import Link from "next/link";
import * as React from "react";
import Button from "./button";
import TermValue from "./term-value";

const PersonalInformation: React.FC = () => {
	return (
		<article className="max-lg:w-full w-1/2 h-fit text-zinc-200 z-20">
			<h2 className="uppercase text-xl text-zinc-200 font-bold mb-5 pt-5">
				Informações Pessoais
			</h2>
			<div className="flex gap-5 max-lg:flex-col">
				<dl className="max-lg:w-full w-1/2 flex flex-col gap-2 overflow-hidden">
					<TermValue term="Nome" value="Everton" />
					<TermValue term="Idade" value="19" />
					<TermValue
						term="Celular"
						value={
							<Link target="_blank" href="tel:+5511964677083">
								+55 11 96467-7083
							</Link>
						}
					/>
					<TermValue
						term="Email"
						value={
							<Link target="_blank" href="mailto:mgtk.me@gmail.com">
								mgtk.me@gmail.com
							</Link>
						}
					/>
				</dl>

				<dl className="max-lg:w-full w-1/2 flex flex-col gap-2">
					<TermValue term="Sobrenome" value="Matheus" />
					<TermValue term="Endereço" value="São Paulo, SP" />
					<TermValue term="Cursando" value="Braz Cubas, ADS" />
					<TermValue
						term="GitHub"
						value={
							<Link target="_blank" href="https://github.com/evertonmdev">
								@evertondev
							</Link>
						}
					/>
					<TermValue term="Hobbies" value="Programação, Música, Esportes" />
				</dl>
			</div>

			<Button
				label="Download CV"
				className="mt-5"
				type="href"
				href="/curriculo/curriculo.pdf"
				Icon={<Download />}
			/>
		</article>
	);
};

export default PersonalInformation;
