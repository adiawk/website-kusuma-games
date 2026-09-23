export type CreditGame = {
	title: string;
	year: string;
	role: string;
	genre: string;
	blurb: string;
	cover: string;
	itchUrl?: string;
};

export type CreditStudio = {
	studio: string;
	years: string;
	engagement: string;
	games: CreditGame[];
};

export const creditStudios: CreditStudio[] = [
	{
		studio: "Kajewdev",
		years: "2024–2026",
		engagement: "Remote · gameplay & systems programming",
		games: [
			{
				title: "Me The Gravekeeper",
				year: "2025",
				role: "Lead programmer",
				genre: "Simulation",
				blurb:
					"Cemetery management sim. Gameplay logic, UI, Google Play Games, AdMob, and mobile performance.",
				cover: "/images/credits/me-the-gravekeeper.jpg",
				itchUrl: "https://adiawk.itch.io/me-the-gravekeeper",
			},
			{
				title: "Aku Si Juragan Kosan",
				year: "2024",
				role: "Support gameplay programmer",
				genre: "Simulation",
				blurb: "Run a boarding house. Support work on gameplay systems.",
				cover: "/images/credits/juragan-kosan.jpg",
				itchUrl: "https://adiawk.itch.io/aku-si-juragan-kosan-2024-support-gameplay-programmer",
			},
			{
				title: "Catfish Breeder Life",
				year: "2024",
				role: "Programmer",
				genre: "Simulation",
				blurb:
					"Lele breeding tycoon. Ads, IAP, skins, quests, dual currency, and decoration placement — mobile and a show-floor PC build.",
				cover: "/images/credits/catfish-breeder.jpg",
				itchUrl: "https://adiawk.itch.io/catfish-breeder-life",
			},
			{
				title: "Aku Si Peternak Dinosaurus",
				year: "2024",
				role: "Programmer",
				genre: "Simulation",
				blurb: "First Kajewdev title: a dinosaur ranch sim.",
				cover: "/images/credits/peternak-dinosaurus.jpg",
				itchUrl: "https://adiawk.itch.io/aku-si-peternak-dinosaurus-game-pertama-di-kajewdev",
			},
		],
	},
	{
		studio: "AimToMite",
		years: "2022–2023",
		engagement: "Remote · programmer",
		games: [
			{
				title: "Berandal Sekolah",
				year: "2023",
				role: "Programmer",
				genre: "Action",
				blurb:
					"A rebellious Indonesian high-school slice of chaos. Programming on the shipped title.",
				cover: "/images/credits/berandal-sekolah.jpg",
				itchUrl: "https://adiawk.itch.io/berandal-sekolah",
			},
			{
				title: "GameDev LiTuber Simulator",
				year: "2022",
				role: "Programmer",
				genre: "Simulation",
				blurb:
					"3D sim where you play a game developer who is also a YouTuber.",
				cover: "/images/credits/gamedev-lituber.jpg",
				itchUrl: "https://adiawk.itch.io/gamedev-lituber-simulator",
			},
		],
	},
	{
		studio: "Artbid Studio",
		years: "2020–2022",
		engagement: "On-site · programmer",
		games: [
			{
				title: "Super Rumble: Future Champions",
				year: "2022",
				role: "Programmer",
				genre: "Action · Platformer",
				blurb:
					"Android action compilation: 16 playable fighters, 200+ enemies, combat, AI, and arenas across seven mini-games into one title.",
				cover: "/images/credits/super-rumble.png",
				itchUrl: "https://adiawk.itch.io/super-rumble-future-champions",
			},
			{
				title: "Heroes vs Aliens: Defenders of Light",
				year: "2021",
				role: "Programmer",
				genre: "Strategy",
				blurb:
					"Plants vs Zombies-style lane defense with heroes, villains, and aliens. Unity programming for Android.",
				cover: "/images/credits/heroes-vs-aliens.jpg",
				itchUrl: "https://adiawk.itch.io/heroes-vs-aliens-defenders-of-light",
			},
		],
	},
];

export const awards = [
	{
		title: "Selected — GameSeed 2026 Top 3 Mobile Category",
		year: "2026",
		work: "Stationery Defenders: TD Tycoon",
	},
	{
		title: "1st place — Lomba Cipta Aplikasi Game Kepemiluan, KPU RI",
		year: "2020",
		work: "Yuk Ke TPS",
	},
	{
		title: "Top 13 — Police Game Development Championship",
		year: "2019",
		work: "Ride Lur",
	},
];
