export const branding = {
	// Información de marca
	name: "Cyberimpulsa",
	slogan: "Captación B2B para empresas de Cyberseguridad, Software e IA",
	legalName: "Cyberimpulsa LLC",
	domain: "cyberimpulsa.com",
	url: "https://cyberimpulsa.com",

	// Contacto
	contact: {
		calendlyUrl:
			"https://calendly.com/klientify/consulta-saas-marketing-gratuito",
		phones: [
			{ number: "34633857457", display: "+34 633 857 457" },
			{ number: "376332902", display: "+376 332 902" },
		],
		email: "cyberimpulsa@gmail.com",
	},

	// Redes sociales
	social: {
		twitter: "https://twitter.com/cyberimpulsa",
		linkedin: "https://www.linkedin.com/company/cyberimpulsa",
		instagram: "https://instagram.com/cyberimpulsa",
		youtube: "https://youtube.com/@cyberimpulsa",
	},

	// Ubicación
	location: {
		city: "Barcelona",
		country: "España",
	},

	// Assets
	assets: {
		logo: "/assets/media/branding/iso.svg",
		thumbnail: "/assets/media/branding/og-image.png",
	},
} as const;

// Tipo derivado para TypeScript
export type Branding = typeof branding;
