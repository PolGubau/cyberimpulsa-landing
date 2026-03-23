import { getCollection } from "astro:content";

export const getClients = async (limit = Number.MAX_SAFE_INTEGER) =>
	(await getCollection("clients"))
		.filter((c) => c.data.featured === true)
		.sort((a, b) => a.data.order - b.data.order)
		.slice(0, limit);
