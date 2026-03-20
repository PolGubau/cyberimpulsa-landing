export const copy = {
	hero: {
		title: "Impulsamos el Crecimiento de tu empresa Tecnológica",
		subtitle:
			"A través de estrategias y sistemas de Marketing enfocadas al B2B.",
		cta: "Contactar",
		sectorsLabel: "Ayudamos a crecer Empresas de...",
		sectors: [
			"Cyberseguridad",
			"Desarrollo de software/app",
			"Inteligencia Artificial",
		],
	},

	method: {
		steps: [
			{
				title: "Análisis de tu empresa ideal y necesidades",
				description:
					"Analizamos tu mercado, tu cliente ideal y tus servicios. Identificamos los canales de captación más rentables para tu empresa tecnológica y definimos la oferta irresistible que necesitas.",
			},
			{
				title: "Implementación del proceso de venta",
				description:
					"Instalamos y configuramos tu sistema de captación: automatizaciones, CRM, campañas publicitarias y presencia digital. Todo listo para generar oportunidades de negocio desde el primer mes.",
			},
			{
				title: "Creación de contenido y puesta en marcha",
				description:
					"Realizamos sesiones de grabación, producimos contenido de valor para tu sector y activamos todos los canales. Tu empresa empieza a aparecer donde están tus clientes potenciales.",
			},
		],
	},

	finalCta: {
		question: "¿Listo para captar más clientes B2B?",
		description:
			"Agenda una consulta gratuita de 30 minutos. Analizamos tu situación y te mostramos exactamente cómo podemos ayudarte a crecer.",
		cta: "Agenda llamada",
	},

	nav: {
		home: "Inicio",
		about: "Nosotros",
		clients: "Clientes",
		system: "Nuestro Sistema",
		projects: "Proyectos",
		contact: "Agenda llamada",
	},

	footer: {
		tagline: "Captación B2B para empresas tecnológicas",
		copyright: "© Copyright 2026. Recurrev LLC. All rights reserved.",
	},
} as const;

export type Copy = typeof copy;
