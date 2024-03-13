import { Telegraf } from "telegraf";
import { ENV } from "../../Env";

const BOT_TOKEN = ENV.TELEGRAM_BOT_TOKEN;
const CHAT_ID = ENV.TELEGRAM_CHAT_ID;

export const telegramSendMessage: (
	msg: string,
) => Promise<"success" | "error" | "failed"> = async (msg) => {
	try {
		const bot = new Telegraf(BOT_TOKEN);

		return bot.telegram
			.sendMessage(CHAT_ID, msg)
			.then(() => {
				return "success" as const;
			})
			.catch((err) => {
				console.log(err);
				return "failed" as const;
			});
	} catch (e) {
		console.log(e);
		return "error" as const;
	}
};
