"use client";
import { cn } from "@/lib/utils/cn";
import { useGlobalStates } from "@/lib/utils/useGlobalStates";
import { useMotionValueEvent, useScroll } from "framer-motion";
import * as React from "react";
import { FaHome, FaTerminal, FaUser } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import { MdEmail } from "react-icons/md";

const Aside: React.FunctionComponent = (props) => {
	const [hovered, setHovered] = React.useState<boolean>(false);
	const [interval, setInterval] = React.useState<NodeJS.Timeout | null>(null);
	const [visible, setVisible] = React.useState<boolean>(true);

	const { setScrollY } = useGlobalStates();
	const { scrollY } = useScroll();

	const handleHover = {
		enter: () => {
			if (interval) clearInterval(interval);
			setVisible(true);
			setHovered(true);
		},
		leave: () => {
			setHovered(false);
			handleInterval();
		},
	};

	const handleInterval = () => {
		if (interval) {
			if (hovered || interval) clearInterval(interval);
		}
		setInterval(
			setTimeout(() => {
				setVisible(false);
			}, 2000),
		);
	};

	useMotionValueEvent(scrollY, "change", (latest) => {
		setScrollY(latest);
		setVisible(true);
		handleInterval();
	});

	return (
		<aside
			onMouseEnter={handleHover.enter}
			onMouseLeave={handleHover.leave}
			className={cn(
				"fixed h-fit w-fit right-5 transform -translate-y-1/2 top-1/2 rounded-full p-1 py-2 transition-all duration-150 z-[999]",
				!visible && "opacity-0",
			)}
		>
			<ul className="flex flex-col justify-center items-center gap-3">
				<LiComponent scope={[0, 1]} href="#home" Icon={FaHome} />
				<LiComponent scope={[1, 2]} href="#sobremim" Icon={FaUser} />
				<LiComponent scope={[2, 3]} href="#projetos" Icon={FaTerminal} />
				<LiComponent scope={[3, 5]} href="#contato" Icon={MdEmail} />
			</ul>
		</aside>
	);
};

interface LiComponentProps {
	href: string;
	Icon: IconType;
	scope?: [number, number] | undefined;
}

const LiComponent: React.FunctionComponent<LiComponentProps> = ({
	href,
	Icon,
	scope,
}) => {
	const { scrollYProgress } = useGlobalStates();
	// verifica se existe o scope e se o scrollYProgress está entre o scope -> true || false
	const isActive =
		scope && scrollYProgress >= scope[0] && scrollYProgress <= scope[1];
	return (
		<li className="flex justify-center items-center text-zinc-200 group">
			<a
				href={href}
				className={cn(
					"bg-secondary p-3 rounded-full group-hover:bg-accent transition-all",
					isActive && "bg-accent",
				)}
			>
				<Icon size={15} />
			</a>
		</li>
	);
};

export default Aside;
