import { branding } from "~/config/branding";

export const baseUrl = branding.url;

export function getMetadata() {
	return {
		title: `${branding.name} | Captación B2B para Cyberseguridad, Software e IA`,

		description: `${branding.name} ayuda a crecer empresas de Cyberseguridad, Desarrollo de software/app e Inteligencia Artificial. Sistema de captación B2B con resultados en los primeros 2 meses.`,

		name: branding.name,

		longName: `${branding.name} | Marketing B2B para Empresas Tecnológicas`,

		slogan: branding.slogan,

		picture: branding.assets.logo,

		getInTouch: {
			label: "Agenda una consulta",

			short_label: "Agenda llamada",

			href: branding.contact.calendlyUrl,
		},

		tags: [
			branding.name,

			"Marketing B2B",

			"Captación de Clientes",

			"Cyberseguridad Marketing",

			"Software Marketing",

			"Inteligencia Artificial Marketing",

			"Agencia Marketing Tecnológico",

			"Lead Generation B2B",

			"Estrategia B2B",

			"CRM",

			"Automatización Marketing",

			"Campañas Publicitarias B2B",

			"Empresas Tecnológicas",

			branding.location.city,

			branding.location.country,
		],

		links: {
			website: branding.url,

			twitter: branding.social.twitter,

			linkedin: branding.social.linkedin,

			email: `mailto:${branding.contact.email}`,
		},

		homeOgImage: branding.assets.thumbnail,
	};
}

export const defaultLocale = "es";
