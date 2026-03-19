import { getCollection } from "astro:content";

export const getClients = async (limit = Number.MAX_SAFE_INTEGER) =>
	(await getCollection("clients"))
		.filter((c) => c.data.featured === true)
		.sort((a, b) => a.data.order - b.data.order)
		.slice(0, limit);

export const getProjects = async (limit = Number.MAX_SAFE_INTEGER) =>
	(await getCollection("projects"))
		.filter((project) => project.data.available === true)
		.slice(0, limit)
		.sort((a, b) => {
			const aEnded = a.data.endedAt;
			const bEnded = b.data.endedAt;
			return bEnded.valueOf() - aEnded.valueOf();
		});
