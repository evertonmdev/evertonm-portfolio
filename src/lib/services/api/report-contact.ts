import { Messenger } from "@/lib/modules/messenger";
import { telegramSendMessage } from "./telegram-send-message";

export const reportContact: Messenger["reportContact"] = async ({
	message,
	name,
	email,
}) => {
	try {
		await telegramSendMessage(`Olá Everton!, ${name} entrou em contato com você atraves do seu portfolio.
        A mensagem deixada foi: 
        ${message}
        
        Email: ${email}
        `);
		return true;
	} catch (e) {
		console.log(e);
		return false;
	}
};
