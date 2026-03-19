import {
	type InferEntrySchema,
	defineCollection,
	type getCollection,
	z,
} from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
	loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			summary: z.string(),
			available: z.boolean(),
			client: z.string(),
			timeline: z.number().int().positive(),
			endedAt: z.string().transform((str) => new Date(str)),
			color: z.string(),
			link: z.string().optional(),
			cover: image(),
			logo: image().optional(),
			services_provided: z.array(z.string()).optional().default([]),
		}),
});

const clients = defineCollection({
	loader: glob({ base: "./src/content/clients", pattern: "**/*.{md,mdx}" }),
	schema: ({ image }) =>
		z.object({
			client: z.string(),
			type: z.string(),
			tag: z.string(),
			metric: z.string(),
			metricLabel: z.string(),
			order: z.number().int().default(99),
			cover: image().optional(),
			logo: image().optional(),
			featured: z.boolean().default(true),
		}),
});

const blog = defineCollection({
	loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.string().transform((str) => new Date(str)),
			updatedDate: z
				.string()
				.transform((str) => new Date(str))
				.optional(),
			coverImage: image().optional(),
			tags: z.array(z.string()).optional(),
			author: z.string().default("cyberimpulsa"),
			draft: z.boolean().default(false),
		}),
});

export type Client = InferEntrySchema<"clients">;
export type ClientMetadata = Awaited<
	ReturnType<typeof getCollection<"clients">>
>[number];

export type Project = InferEntrySchema<"projects">;
export type ProjectMetadata = Awaited<
	ReturnType<typeof getCollection<"projects">>
>[number];

export type BlogPost = InferEntrySchema<"blog">;
export type BlogPostMetadata = typeof blog;

export const collections = { projects, blog, clients };
