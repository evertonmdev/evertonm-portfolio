import Aside from "@/components/ui/aside";
import { cn } from "@/lib/utils/cn";
import { fonts } from "@/lib/utils/fonts";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Toaster } from "sonner";
import "./globals.css";


export const metadata: Metadata = {
	title: "Everton Mendes - Desenvolvedor Fullstack GenAI/ML | Especialista AWS Serverless",
	description:
		"Portfólio de Everton Mendes, Desenvolvedor Fullstack com sólida experiência em GenAI/ML e arquiteturas serverless na AWS (Lambda, DynamoDB, CDK). [cite: 1] Conheça meus projetos envolvendo ChatBots com RAG, AWS Bedrock, Gemini API e otimização de processos. [cite: 2, 9]",
	keywords: [
		"Everton Mendes",
		"Everton Matheus Rodrigues Mendes",
		"Everton Matheus",
		"Desenvolvedor Fullstack",
		"Desenvolvedor GenAI/ML",
		"Engenheiro de Machine Learning",
		"Especialista AWS",
		"Arquiteto Serverless",
		"AWS Lambda",
		"AWS DynamoDB",
		"AWS CDK",
		"AWS Bedrock",
		"Gemini API",
		"Google API",
		"RAG",
		"ChatBots",
		"Inteligência Artificial",
		"TypeScript",
		"ReactJS",
		"NextJS",
		"NodeJS",
		"Python",
		"Java",
		"Docker",
		"Linux",
		"MySQL",
		"PostgreSQL",
		"Portfolio",
		"Desenvolvedor",
		"FullStack",
		"FreeLancer",
		"Tech Lead",
		"Desenvolvimento de Software",
		"Everton M. Mendes", "Mendes, Everton"
	],
	creator: "Everton Mendes",
	publisher: "Everton Mendes",
	robots: "index, follow",
	alternates: {
		canonical: "https://evertonm-portfolio.vercel.app",
	},
	openGraph: {
		title: "Everton Mendes - Desenvolvedor Fullstack GenAI/ML | Especialista AWS Serverless",
		description: "Portfólio de Everton Mendes, Desenvolvedor Fullstack com especialização em GenAI/ML e arquiteturas serverless AWS.",
		url: "https://evertonm-portfolio.vercel.app",
		siteName: "Portfólio Everton Mendes",
		locale: 'pt_BR',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: "Everton Mendes - Desenvolvedor Fullstack GenAI/ML | Especialista AWS Serverless",
		description: "Portfólio de Everton Mendes, Desenvolvedor Fullstack com especialização em GenAI/ML e arquiteturas serverless AWS.",
	},
};
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt" className={cn(fonts.primary.className, "bg-primary")}>
			<body>
				{children}
				<Aside />
				<Toaster />
				<Analytics />
			</body>
		</html>
	);
}
