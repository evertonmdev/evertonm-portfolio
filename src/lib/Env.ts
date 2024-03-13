interface IENV {
	TELEGRAM_BOT_TOKEN: string;
	TELEGRAM_CHAT_ID: string;
	DEV?: string;
}

export const ENV: IENV = {
	TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN as string,
	TELEGRAM_CHAT_ID: process.env.TELEGRAM_CHAT_ID as string,
	DEV: process.env.DEV,
};
