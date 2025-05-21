"use client";

import { motion } from "framer-motion";
import * as React from "react";
import { FaAward, FaBuilding, FaCertificate, FaCode, FaGraduationCap } from "react-icons/fa";
import TextShaded from "../ui/TextShaded";
import Accordion from "../ui/accordion";
import { Timeline } from "../ui/timeline";

const MyCareer: React.FunctionComponent = () => {
	const TimelineCard = ({ children, highlight = false }: { children: React.ReactNode, highlight?: boolean }) => (
		<motion.div
			className={`p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-md border 
				${highlight ? "border-accent/40" : "border-gray-700/50"} 
				hover:border-accent/60 transition-all duration-300`}
			whileHover={{
				scale: 1.02,
				boxShadow: highlight ? "0 0 15px rgba(240,176,0,0.15)" : "none",
				transition: { duration: 0.2 }
			}}
		>
			{children}
		</motion.div>
	);

	const timelineData = [
		{
			title: "Conclusão do Ensino Médio",
			subtitle: "Instituição: E.E. Fadlo Haidar",
			date: "Janeiro 2019 - Dezembro 2022",
			icon: <FaGraduationCap size={22} />,
			content: (
				<TimelineCard>
					<p className="text-gray-300">
						Esta etapa representa a finalização da minha educação básica, preparando o caminho para as minhas formações técnicas e superiores subsequentes.
					</p>
				</TimelineCard>
			)
		},
		{
			title: "Curso Técnico em Desenvolvimento de Sistemas",
			subtitle: "Instituição: Instituto PROA/Senac, SP",
			date: "Junho 2023 - Dezembro 2023",
			icon: <FaCode size={22} />,
			highlight: true,
			content: (
				<TimelineCard highlight>
					<p className="text-gray-300">
						Este curso foi focado no desenvolvimento de um conjunto de habilidades técnicas essenciais para a área de desenvolvimento, abrangendo front-end, back-end e banco de dados, além de competências comportamentais importantes para o mercado de trabalho.
					</p>
					<Accordion
						items={[{
							highlight: true,
							title: "Como atuei no Projeto?",
							content: `Como Tech Lead do projeto, liderei a equipe técnica, orientando as atividades e as decisões cruciais do projeto.
							Fui responsável pela definição da stack de tecnologias, escolhendo as linguagens e serviços mais adequados para a solução. Criei e implementei o Design System do projeto. Tive participação ativa no desenvolvimento full-stack, contribuindo diretamente para a construção do front-end, back-end e do banco de dados da aplicação. O objetivo do "Parttida" era criar uma solução para o mundo real, conectando amantes de esportes (pessoas, profissionais e escolas) para incentivar o engajamento em atividades físicas e, consequentemente, melhorar a qualidade de vida dos usuários.`
						}]}
					/>
				</TimelineCard>
			)
		},
		{
			title: "Certificação Senac em Desenvolvimento Web",
			date: "Dezembro 2023",
			icon: <FaCertificate size={22} />,
			content: (
				<TimelineCard>
					<p className="text-gray-300">
						Esta certificação valida minhas habilidades e conhecimentos específicos em desenvolvimento para a web, complementando minha formação técnica.
					</p>
				</TimelineCard>
			)
		},
		{
			title: "Desenvolvedor Fullstack",
			subtitle: "Empresa: Cloud Dog",
			date: "Janeiro 2024 - Março 2025",
			icon: <FaBuilding size={22} />,
			highlight: true,
			content: (
				<TimelineCard highlight>
					<p className="text-gray-300">

						Nesta função, fui o responsável pelo setor de projetos como desenvolvedor Fullstack.
						Minha principal atividade envolveu o desenvolvimento de aplicações serverless, utilizando uma variedade de serviços da AWS, com destaque para Lambda e DynamoDB. Demonstrei sólida experiência com AWS CDK (Cloud Development Kit), o que permitiu a criação e gerenciamento de infraestrutura como código. Um aspecto importante do meu trabalho foi a implementação de soluções de Inteligência Artificial. Isso incluiu o desenvolvimento de ChatBots com a técnica de RAG (Retrieval Augmented Generation) e a utilização de plataformas como AWS Bedrock, Gemini API e Google API. O foco dessas implementações era a otimização de processos e a resolução de problemas. Fui responsável pelo desenvolvimento de arquiteturas serverless completas.
					</p>
				</TimelineCard>
			)
		},
		{
			title: "Graduação em Análise e Desenvolvimento de Sistemas",
			subtitle: "Instituição: Braz Cubas, SP",
			date: "Fevereiro 2024 - junho 2026 (Cursando)",
			icon: <FaGraduationCap size={22} />,
			content: (
				<TimelineCard>
					<p className="text-gray-300">
						Atualmente, estou aprimorando meus conhecimentos e obtendo uma formação de nível superior na área, o que certamente agregará ainda mais valor à minha carreira.
					</p>
				</TimelineCard>
			)
		},
		{
			title: "Certificações AWS",
			date: "2024",
			icon: <FaAward size={22} />,
			content: (
				<TimelineCard>
					<ul className="list-disc list-inside text-gray-300">
						<li>AWS Certified Cloud Practitioner</li>
						<li>AWS Certified Developer - Associate</li>
					</ul>
					<p className="mt-2 text-gray-300">
						Estas conquistas demonstram minha expertise na plataforma AWS.
					</p>
				</TimelineCard>
			)
		}
	];

	return (
		<section
			id="mycareer"
			className="w-full max-lg:min-h-fit min-h-dvh flex flex-col gap-10 container relative py-10 overflow-hidden"
		>
			<TextShaded
				backText={"Minha Carreira"}
				text={
					<>
						Minha <span className="text-accent">Carreira</span>
					</>
				}
			/>

			<div className="w-full h-full overflow-visible">
				<Timeline data={timelineData} />
			</div>

			{/* Elemento decorativo */}
			<div className="absolute -right-20 top-40 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />
			<div className="absolute -left-20 bottom-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
		</section>
	);
};

export default MyCareer;
