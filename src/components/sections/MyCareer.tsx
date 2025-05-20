import * as React from "react";
import TextShaded from "../ui/TextShaded";

const MyCareer: React.FunctionComponent = () => {
	return (
		<section
			id="mycareer"
			className="w-full max-lg:h-fit h-dvh flex flex-col gap-10 container relative py-10"
		>
			<TextShaded
				backText={"Minha Carreira"}
				text={
					<>
						Minha <span className="text-accent">Carreira</span>
					</>
				}
			/>

			<div className="w-full h-full flex flex-col items-center text-white max-lg:px-5 gap-8 overflow-y-auto py-4">
				{/* Ensino Médio */}
				<div className="w-full max-w-3xl p-6 bg-gray-800 bg-opacity-50 rounded-lg shadow-md">
					<h3 className="text-xl font-semibold text-accent">Conclusão do Ensino Médio</h3>
					<p className="text-sm text-gray-400">Janeiro 2019 - Dezembro 2022</p>
					<p className="text-md text-gray-300 mt-1">Instituição: E.E. Fadlo Haidar</p>
					<p className="mt-2 text-gray-400">
						Esta etapa representa a finalização da sua educação básica, preparando o caminho para as formações técnicas e superiores subsequentes.
					</p>
				</div>

				{/* Curso Técnico */}
				<div className="w-full max-w-3xl p-6 bg-gray-800 bg-opacity-50 rounded-lg shadow-md">
					<h3 className="text-xl font-semibold text-accent">Curso Técnico em Desenvolvimento de Sistemas</h3>
					<p className="text-sm text-gray-400">Junho 2023 - Dezembro 2023</p>
					<p className="text-md text-gray-300 mt-1">Instituição: Instituto PROA/Senac, SP</p>
					<p className="mt-2 text-gray-400">
						Este curso foi focado no desenvolvimento de um conjunto de habilidades técnicas essenciais para a área de desenvolvimento, abrangendo front-end, back-end e banco de dados, além de competências comportamentais importantes para o mercado de trabalho.
					</p>
					<div className="mt-4 p-4 bg-gray-700 bg-opacity-50 rounded-md">
						<h4 className="text-lg font-semibold text-accent-light">Projeto de Conclusão: Parttida</h4>
						<p className="mt-1 text-gray-400">
							Como Tech Lead do projeto, liderei a equipe técnica, orientando as atividades e as decisões cruciais do projeto.
							Fui responsável pela definição da stack de tecnologias, escolhendo as linguagens e serviços mais adequados para a solução. Criei e implementei o Design System do projeto, garantindo consistência visual e de usabilidade. Tive participação ativa no desenvolvimento full-stack, contribuindo diretamente para a construção do front-end, back-end e do banco de dados da aplicação. O objetivo do "Parttida" era criar uma solução para o mundo real, conectando amantes de esportes (pessoas, profissionais e escolas) para incentivar o engajamento em atividades físicas e, consequentemente, melhorar a qualidade de vida dos usuários.
						</p>
					</div>
				</div>

				{/* Certificação Senac */}
				<div className="w-full max-w-3xl p-6 bg-gray-800 bg-opacity-50 rounded-lg shadow-md">
					<h3 className="text-xl font-semibold text-accent">Certificação Senac em Desenvolvimento Web</h3>
					<p className="text-sm text-gray-400">Dezembro 2023</p>
					<p className="mt-2 text-gray-400">
						Esta certificação valida suas habilidades e conhecimentos específicos em desenvolvimento para a web, complementando sua formação técnica.
					</p>
				</div>
				
				{/* Desenvolvedor Fullstack na Cloud Dog */}
				<div className="w-full max-w-3xl p-6 bg-gray-800 bg-opacity-50 rounded-lg shadow-md">
					<h3 className="text-xl font-semibold text-accent">Desenvolvedor Fullstack</h3>
					<p className="text-sm text-gray-400">Janeiro 2024 - Março 2025</p>
					<p className="text-md text-gray-300 mt-1">Empresa: Cloud Dog</p>
					<p className="mt-2 text-gray-400">
						Nesta função, você foi o responsável pelo setor de projetos, atuando como desenvolvedor Fullstack.
						Sua principal atividade envolveu o desenvolvimento de aplicações serverless, utilizando uma variedade de serviços da AWS, com destaque para Lambda e DynamoDB. Você demonstrou sólida experiência com AWS CDK (Cloud Development Kit), o que permitiu a criação e gerenciamento de infraestrutura como código. Um aspecto importante do seu trabalho foi a implementação de soluções de Inteligência Artificial. Isso incluiu o desenvolvimento de ChatBots com a técnica de RAG (Retrieval Augmented Generation) e a utilização de plataformas como AWS Bedrock, Gemini API e Google API. O foco dessas implementações era a otimização de processos internos e a resolução de problemas complexos. Você foi responsável pelo desenvolvimento de arquiteturas serverless completas, demonstrando uma visão integral dos projetos.
					</p>
				</div>

				{/* Graduação */}
				<div className="w-full max-w-3xl p-6 bg-gray-800 bg-opacity-50 rounded-lg shadow-md">
					<h3 className="text-xl font-semibold text-accent">Graduação em Análise e Desenvolvimento de Sistemas</h3>
					<p className="text-sm text-gray-400">Fevereiro 2024 - Dezembro 2025 (Cursando)</p>
					<p className="text-md text-gray-300 mt-1">Instituição: Braz Cubas, SP</p>
					<p className="mt-2 text-gray-400">
						Atualmente, você está aprimorando seus conhecimentos e obtendo uma formação de nível superior na área, o que certamente agregará ainda mais valor à sua carreira.
					</p>
				</div>

				{/* Certificações AWS */}
				<div className="w-full max-w-3xl p-6 bg-gray-800 bg-opacity-50 rounded-lg shadow-md">
					<h3 className="text-xl font-semibold text-accent">Certificações AWS</h3>
					<ul className="list-disc list-inside mt-2 text-gray-400">
						<li>AWS Certified Cloud Practitioner</li>
						<li>AWS Certified Developer - Associate</li>
					</ul>
					<p className="mt-2 text-gray-400">
						Estas conquistas demonstram sua expertise na plataforma AWS.
					</p>
				</div>
			</div>
		</section>
	);
};

export default MyCareer;
