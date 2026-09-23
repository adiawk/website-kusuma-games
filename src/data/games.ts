export type GameStatus = "in-development" | "prototype" | "jam" | "released";

export type Game = {
	slug: string;
	title: string;
	shortTitle: string;
	tagline: string;
	description: string;
	longDescription: string;
	genre: string;
	status: GameStatus;
	statusLabel: string;
	year: string;
	platforms: string[];
	featured: boolean;
	cover: string;
	screenshots: string[];
	promoImages?: string[];
	itchUrl?: string;
	playUrl?: string;
	youtubeId?: string;
	features: string[];
	credits: string[];
	ageRating: string;
	hasAccounts: boolean;
	googleSignIn: boolean;
	guestLogin: boolean;
	usesAds: boolean;
	usesAnalytics: boolean;
	usesFirebase: boolean;
	usesD1: boolean;
	usesIap: boolean;
	localStorage: boolean;
	privacyNotes: string[];
};

export const games: Game[] = [
	{
		slug: "stationery-defenders",
		title: "Stationery Defenders: TD Tycoon",
		shortTitle: "Stationery Defenders",
		tagline: "Merge stationery heroes and defend your desk from homework monsters.",
		description:
			"A merge tower-defense made for GameSeed 2026. Your pencil case becomes a base, your stationery comes alive, and a mountain of homework is trying to eat your free time.",
		longDescription:
			"Made for GameSeed 2026 — Mobile Category. Team: Kusuma Games (ID 22).\n\nBring a childhood daydream to life: every pen, eraser, and pencil is secretly a defender. Place heroes on a grid, drag them into position, and merge three of a kind to rank them up. Pick a level-up card, hold the line, and keep the homework monsters off your desk.\n\nStationery Defenders is the first mobile title from Kusuma Games. Play on itch.io while we prepare a store build.",
		genre: "Strategy · Tower Defense",
		status: "in-development",
		statusLabel: "In development",
		year: "2026",
		platforms: ["Mobile", "HTML5"],
		featured: true,
		cover: "/images/hero-stationery-defenders.png",
		screenshots: [],
		promoImages: [
			"/images/screens/stationery-itch-header.jpg",
			"/images/screens/stationery-itch-2.png",
			"/images/screens/stationery-itch-3.png",
			"/images/screens/stationery-itch-4.png",
		],
		itchUrl: "https://adiawk.itch.io/stationery-defender-td-tycoon",
		playUrl: "https://adiawk.itch.io/stationery-defender-td-tycoon",
		youtubeId: "jVSL5L3P6sw",
		features: [
			"Choose a level-up card and play it",
			"Defend your desk with stationery heroes",
			"Merge three of the same hero to rank them up",
			"Collect, upgrade, and awaken your squad",
			"Sign in with Google or play as a guest",
		],
		credits: [
			"Kusuma Games — GameSeed 2026, Mobile category (team ID 22)",
			"Adi Wijaya Kusuma — design & programming",
		],
		ageRating: "Everyone / 3+",
		hasAccounts: true,
		googleSignIn: true,
		guestLogin: true,
		usesAds: true,
		usesAnalytics: true,
		usesFirebase: true,
		usesD1: true,
		usesIap: true,
		localStorage: true,
		privacyNotes: [
			"Players can choose Google Sign-In or continue as a guest. Google Sign-In is handled by Google; we receive a user identifier and, when Google provides them, name and email so we can create or restore your game profile in our database.",
			"Guest play uses an anonymous player ID we create. Guest progress is stored in our Cloudflare D1 database and is tied to that ID (and this device) until you link a Google account.",
			"Login, player profile, progress, inventory, and purchase entitlements are stored on your device and in Cloudflare D1 (our game database) so you can restore them after reinstalling or switching devices when signed in.",
			"The game shows ads through Unity LevelPlay (an ad mediation platform). LevelPlay and the networks it fills ads from may use your device advertising ID and similar device signals to serve and measure ads. You can reset or limit ad tracking in your device settings.",
			"In-app purchases are processed by Google Play or the Apple App Store. We do not receive your full payment card number. We may store a purchase token or product ID in D1 so we can unlock what you bought.",
			"Firebase Analytics records gameplay events, device and app version, crash or performance data, and identifiers so we can run and improve the game. Firebase is not used to store your login or save data.",
			"An HTML5 build may still be hosted on itch.io. Playing in a browser is also subject to itch.io’s privacy policy.",
		],
	},
	{
		slug: "dungeon-deckbuilder",
		title: "Dungeon Deckbuilder",
		shortTitle: "Dungeon Deckbuilder",
		tagline: "A short dungeon run played with cards, block, and telegraphed enemy intents.",
		description:
			"A 2D turn-based deckbuilder prototype. Pick rooms on a chapter map, spend energy to play cards, and clear the boss — or fall at 0 HP.",
		longDescription:
			"You start with a small deck, choose rooms on a chapter map, and fight in turn-based combat. Each turn you draw a hand, spend energy, then end the turn so enemies resolve their intents. Cards deal damage, gain Block, heal, or draw. Block absorbs damage before HP; HP and the run deck persist between fights.\n\nA Windows prototype built in Unity 6. Win by clearing the boss room. After a win or a loss, start a new run.",
		genre: "Strategy · Deckbuilder",
		status: "prototype",
		statusLabel: "Prototype",
		year: "2026",
		platforms: ["Windows"],
		featured: false,
		cover: "/images/games/dungeon-deckbuilder.png",
		screenshots: [
			"/images/screens/dungeon-1.png",
			"/images/screens/dungeon-2.png",
		],
		itchUrl: "https://adiawk.itch.io/dungeon-deckbuilder",
		playUrl: "https://adiawk.itch.io/dungeon-deckbuilder",
		features: [
			"Turn-based card combat with energy, Block, and intents",
			"Chapter map with combat, elite, reward, and boss rooms",
			"Reward rooms: pick one card from a random offer of three",
			"Runs persist HP and deck between fights",
		],
		credits: ["Adi Wijaya Kusuma — design & programming (Unity 6, C#)"],
		ageRating: "Everyone / 10+",
		hasAccounts: false,
		googleSignIn: false,
		guestLogin: false,
		usesAds: false,
		usesAnalytics: false,
		usesFirebase: false,
		usesD1: false,
		usesIap: false,
		localStorage: true,
		privacyNotes: [
			"This is a downloadable Windows prototype. It does not require an account.",
			"Save or run data, if any, is stored locally on your computer.",
			"Downloading from itch.io is subject to itch.io’s privacy policy.",
		],
	},
	{
		slug: "kontrakan-kocak",
		title: "Kontrakan Kocak",
		shortTitle: "Kontrakan Kocak",
		tagline: "Prank your housemate. Don’t get caught.",
		description:
			"A Global Game Jam 2024 comedy puzzle: you are a student in a shared kontrakan, building traps for a birthday prank without being noticed.",
		longDescription:
			"Kontrakan Kocak is a comedy puzzle from Global Game Jam 2024. You play a mahasiswa sharing a kontrakan. The job is not only to set a trap — it is to set it without your friend noticing. Silly, local, and made in a weekend with a small art team.",
		genre: "Puzzle · Comedy",
		status: "jam",
		statusLabel: "Game jam",
		year: "2024",
		platforms: ["Windows", "HTML5"],
		featured: false,
		cover: "/images/games/kontrakan-kocak.png",
		screenshots: [],
		itchUrl: "https://adiawk.itch.io/kontrakan-kocak",
		playUrl: "https://adiawk.itch.io/kontrakan-kocak",
		youtubeId: "Yh0KiB7T1mQ",
		features: [
			"Place traps for a birthday prank",
			"Stay unseen while you set them up",
			"Short comedy puzzle from GGJ 2024",
		],
		credits: [
			"Adi Wijaya — programmer",
			"Kemal, Billa, Isah — 2D art",
			"Anam — UI art",
		],
		ageRating: "Everyone / 7+",
		hasAccounts: false,
		googleSignIn: false,
		guestLogin: false,
		usesAds: false,
		usesAnalytics: false,
		usesFirebase: false,
		usesD1: false,
		usesIap: false,
		localStorage: false,
		privacyNotes: [
			"A jam game hosted on itch.io. No accounts, ads, or analytics from Kusuma Games.",
			"Playing in the browser is subject to itch.io’s privacy policy.",
		],
	},
	{
		slug: "flappy-boo",
		title: "Flappy Boo Halloween",
		shortTitle: "Flappy Boo",
		tagline: "Flappy Bird, except the bird is Boo.",
		description:
			"A tiny Halloween tap game: same one-button timing, ghost instead of bird.",
		longDescription:
			"A short experimental build from 2020. Flappy Bird timing with a Boo. Made as a recruitment test and left up because it is still fun to tap through.",
		genre: "Survival",
		status: "jam",
		statusLabel: "Experiment",
		year: "2020",
		platforms: ["HTML5"],
		featured: false,
		cover: "/images/games/flappy-boo.jpg",
		screenshots: [],
		itchUrl: "https://adiawk.itch.io/flappy-boo-halloween",
		playUrl: "https://adiawk.itch.io/flappy-boo-halloween",
		youtubeId: "2v8LNHazS6o",
		features: ["One-button tap timing", "Halloween skin", "Play in the browser"],
		credits: ["Adi Wijaya Kusuma — programming"],
		ageRating: "Everyone / 3+",
		hasAccounts: false,
		googleSignIn: false,
		guestLogin: false,
		usesAds: false,
		usesAnalytics: false,
		usesFirebase: false,
		usesD1: false,
		usesIap: false,
		localStorage: false,
		privacyNotes: [
			"A small HTML5 experiment on itch.io. Kusuma Games does not collect personal data through this game.",
		],
	},
	{
		slug: "lompat-karung",
		title: "Lompat Karung",
		shortTitle: "Lompat Karung",
		tagline: "Sack-race timing for Indonesia’s Independence Day.",
		description:
			"A short puzzle-race made for HUT RI ke-75: time your lompat karung and go as far as you can.",
		longDescription:
			"Lompat Karung was made to celebrate Indonesia’s 75th Independence Day in 2019. A small, festive timing game around the classic sack race.",
		genre: "Puzzle",
		status: "jam",
		statusLabel: "Experiment",
		year: "2019",
		platforms: ["Windows"],
		featured: false,
		cover: "/images/games/lompat-karung.png",
		screenshots: [],
		itchUrl: "https://adiawk.itch.io/lompat-karung",
		playUrl: "https://adiawk.itch.io/lompat-karung",
		youtubeId: "FuToc-9ddWc",
		features: ["Independence Day theme", "Timing / sack-race fantasy"],
		credits: ["Adi Wijaya Kusuma — programming"],
		ageRating: "Everyone / 3+",
		hasAccounts: false,
		googleSignIn: false,
		guestLogin: false,
		usesAds: false,
		usesAnalytics: false,
		usesFirebase: false,
		usesD1: false,
		usesIap: false,
		localStorage: false,
		privacyNotes: [
			"A small downloadable experiment. No accounts or online services from Kusuma Games.",
		],
	},
];

export const featuredGame = games.find((game) => game.featured)!;

export function getGame(slug: string): Game | undefined {
	return games.find((game) => game.slug === slug);
}

export function gamePath(game: Game): string {
	return `/games/${game.slug}`;
}

export function supportPath(game: Game): string {
	return `/support/${game.slug}`;
}

export function privacyPath(game: Game): string {
	return `/privacy/${game.slug}`;
}
