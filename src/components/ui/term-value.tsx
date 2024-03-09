import { cn } from "@/lib/utils/cn";
import * as React from "react";

interface TermValueProps {
	term: string;
	value: React.ReactNode | string;
	className?: string;
}

const TermValue: React.FC<TermValueProps> = ({ term, value, className }) => {
	return (
		<div className="text-zinc-400 font-medium flex gap-2">
			<dt>{term}:</dt>
			<dd className={cn("text-zinc-200", className)}>{value}</dd>
		</div>
	);
};

export default TermValue;
