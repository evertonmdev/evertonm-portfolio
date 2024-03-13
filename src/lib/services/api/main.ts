import { FormContactSchema } from "@/components/sections/contact/form";
import { Messenger } from "@/lib/modules/messenger";
import { swagger } from "@elysiajs/swagger";
import { Elysia, t } from "elysia";

const MainApi = new Elysia({
	prefix: "/api",
})
	.use(
		swagger({
			documentation: {
				info: {
					title: "My portfolio API",
					version: "1.0.0",
				},
				tags: [
					{
						name: "Messenger",
						description: "Endpoin para envio de mensagens/logs",
					},
				],
			},
		}),
	)
	.get("/", () => "Hello Next")
	.post(
		"/messenger/contactReport",
		async ({ body }) => {
			const response = await Messenger.reportContact(body);
			return response;
		},
		{
			body: t.Object({
				message: t.String(),
				name: t.String(),
				email: t.String(),
			}),
			detail: {
				tags: ["Messenger"],
			},
		},
	);

export type TAPI = typeof MainApi;
export default MainApi;
