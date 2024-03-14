import { Telegraf } from "telegraf";
import { ENV } from "../../Env";

const BOT_TOKEN = ENV.TELEGRAM_BOT_TOKEN;
const CHAT_ID = ENV.TELEGRAM_CHAT_ID;

const Sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const telegramSendMessage: (
	msg: string,
) => Promise<"success" | "error" | "failed"> = async (msg) => {
	let tentativas = 10;

	while (tentativas >= 0) {
		try {
			const bot = new Telegraf(BOT_TOKEN);

			const response = await bot.telegram.sendMessage(CHAT_ID, msg).then(() => {
				return "success" as const;
			});

			return response;
		} catch (e) {
			tentativas--;
			await Sleep(1500);
			console.log("Erro, tentando denovo...");
			telegramSendMessage(msg);
			return "error" as const;
		}
	}

	return "error" as const;
};
