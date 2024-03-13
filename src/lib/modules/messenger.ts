import { FormContactSchema } from "@/components/sections/contact/form";
import { reportContact } from "../services/api/report-contact";

export interface Messenger {
	reportContact: (data: FormContactSchema) => Promise<boolean>;
}

export const Messenger: Messenger = {
	reportContact: reportContact,
};
