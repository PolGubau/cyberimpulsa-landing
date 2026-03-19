import { getCollection } from "astro:content";
import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ site }) => {
	const baseUrl = site?.toString() || "https://cyberimpulsa.com";

	// Obtener proyectos y clientes
	const projects = await getCollection(
		"projects",
		({ data }) => data.available,
	);

	// Páginas estáticas con prioridad y metadata SEO
	const staticPages = [
		{
			url: "",
			priority: "1.0",
			changefreq: "weekly",
			lastmod: new Date().toISOString().split("T")[0],
		},
		{
			url: "nosotros",
			priority: "0.9",
			changefreq: "monthly",
			lastmod: new Date().toISOString().split("T")[0],
		},
		{
			url: "clientes",
			priority: "0.9",
			changefreq: "monthly",
			lastmod: new Date().toISOString().split("T")[0],
		},
		{
			url: "sistema",
			priority: "0.9",
			changefreq: "monthly",
			lastmod: new Date().toISOString().split("T")[0],
		},
		{
			url: "projects",
			priority: "0.8",
			changefreq: "monthly",
			lastmod: new Date().toISOString().split("T")[0],
		},
		{ url: "legal", priority: "0.3", changefreq: "yearly" },
		{ url: "privacy", priority: "0.3", changefreq: "yearly" },
		{ url: "cookies", priority: "0.3", changefreq: "yearly" },
	];

	// Generar URLs de proyectos
	const projectUrls = projects.map((project) => ({
		url: `projects/${project.id}`,
		priority: "0.8",
		changefreq: "monthly",
		lastmod:
			project.data.endedAt instanceof Date
				? project.data.endedAt.toISOString().split("T")[0]
				: project.data.endedAt,
	}));

	// Combinar todas las URLs
	const allUrls = [...staticPages, ...projectUrls];

	// Generar XML
	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
	.map(
		(page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    ${page.lastmod ? `<lastmod>${page.lastmod}</lastmod>` : ""}
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`,
	)
	.join("\n")}
</urlset>`;

	return new Response(sitemap, {
		headers: {
			"Content-Type": "application/xml; charset=utf-8",
		},
	});
};
