import Aside from "@/components/ui/aside";
import { cn } from "@/lib/utils/cn";
import { fonts } from "@/lib/utils/fonts";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Portfolio | Everton Matheus",
	description:
		"Meu Portfolio pessoal, aqui vou mostrar um pouco do meu trabalho e projetos que já participei. Me chamo Everton Matheus, sou desenvolvedor FullStack",
	keywords: [
		"Portfolio",
		"Everton Matheus",
		"Desenvolvedor FullStack",
		"Everton",
		"Matheus",
		"Desenvolvedor",
		"FullStack",
		"FreeLancer",
		"Everton Matheus Portfolio",
		"Everton Matheus Desenvolvedor FullStack",
		"Everton Matheus Desenvolvedor",
		"Everton Matheus FullStack",
		"Everton Matheus Desenvolvedor FullStack Portfolio",
		"Everton Matheus Desenvolvedor Portfolio",
		"Everton Matheus FullStack Portfolio",
		"NextJs",
		"ReactJs",
		"TailwindCss",
		"TypeScript",
		"JavaScript",
		"NodeJs",
		"ExpressJs",
	],
	creator: "Everton Matheus",
	publisher: "Everton Matheus",
	robots: "index, follow",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt" className={cn(fonts.primary.className)}>
			<body>
				{children}
				<Aside />
			</body>
		</html>
	);
}
