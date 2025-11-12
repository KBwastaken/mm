/* MagicMirror² Config - Nederlandse versie
 * LET OP: Gebruik géén echte secrets in dit bestand als het gedeeld of gecommit wordt.
 * Maak desnoods een config.js.template + environment variables.
 */

let config = {
	// LAN toegang? Verander desgewenst naar "0.0.0.0" en pas ipWhitelist aan.
	address: "localhost",
	port: 8080,
	basePath: "/",

	// Leeg array [] = alle IP's toestaan (niet veilig buiten je eigen netwerk).
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],
	// ipWhitelist: [],

	useHttps: false,
	httpsPrivateKey: "",
	httpsCertificate: "",

	language: "nl",
	locale: "nl-NL",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"],
	timeFormat: 24,
	units: "metric",

	modules: [
		{ module: "alert" },

		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left",
			config: {
				dateFormat: "dddd D MMMM",
				showWeek: true,
				weekSymbol: "Week"
			}
		},
{
  module: "helloworld",
  position: "top_center", // or "upper_third" if you want it lower
  config: {
    text: '<img src="public/tcv.png" class="tcv-logo" alt="TCV Logo" />'
  }
},
		
		{
			module: "calendar",
			header: "Feestdagen (NL)",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-days",
						url: "https://calendar.google.com/calendar/ical/nl.dutch%23holiday%40group.v.calendar.google.com/public/basic.ics",
						fetchInterval: 6 * 60 * 60 * 1000
					}
				]
			}
		},
		{
			module: "compliments",
			position: "bottom_bar",
			classes: "thin xsmall",
			config: {
				updateInterval: 20000,
				fadeSpeed: 4000,
				compliments: {

					anytime: [
						"Je bent goed bezig.",
						"Vandaag wordt een mooie dag.",
						"Blijf lachen, dat staat je goed.",
						"Kleine stapjes zijn ook vooruitgang.",
						"You've got this.",
						"Wees trots op jezelf.",
						"PIE is de beste!",
						"Altijd iets nieuws om te leren hier.",
						"Je maakt iets moois, echt waar.",
						"Leren door te doen, dat is PIE.",
						"Samen sterk, samen slim.",
						"Elke dag iets beter, dat is de spirit.",
						"Fouten maken mag, zolang je blijft proberen.",
						"Zonder jou is het lokaal niet compleet.",
						"You're part of the team.",
						"PIE staat nooit stil.",
						"Even lachen hoort erbij.",
						"Blijf nieuwsgierig, dat is hoe dingen ontstaan.",
						"Iedere dag een stukje vakmanschap.",
						"Je doet meer dan je denkt."
					],

					weekday: [
						"PIE power vandaag!",
						"Je bent slimmer dan je denkt.",
						"Teamwork makes the dream work.",
						"Maak er samen iets moois van vandaag.",
						"Elke dag leer je iets nieuws.",
						"Leren is groeien, en groeien is mooi.",
						"Fouten zijn gewoon oefenmomenten.",
						"Vandaag is een kans om iets nieuws te proberen.",
						"Durf vragen te stellen, dat is kracht.",
						"Iedereen begint ergens, ook de besten.",
						"PIE draait om doen, niet alleen denken.",
						"Kijk eens hoe ver je al bent gekomen.",
						"Je hoeft het niet perfect te doen, als je maar probeert.",
						"We doen het samen, net als in de werkplaats.",
						"Hou vol, de pauze komt eraan.",
						"Elk idee telt.",
						"Wat jij vandaag maakt, inspireert morgen iemand anders.",
						"Vakmanschap = trots.",
						"Je mag best trots zijn op wat je bouwt.",
						"Ook docenten hebben koffie nodig 😉"
					],

					morning: [
						"Goedemorgen! Tijd om te knallen.",
						"Een nieuw begin, maak er iets moois van.",
						"Coffee first, dan de wereld aan.",
						"Rise and shine, het is een nieuwe dag!",
						"PIE staat klaar om te bouwen!"
					],

					afternoon: [
						"Goed bezig vandaag!",
						"Even ademhalen... je doet het goed.",
						"Hou vol, je bent er bijna.",
						"Een korte pauze doet wonderen.",
						"Wat een productie vandaag, PIE-team!"
					],

					evening: [
						"Wat een dag! Trots op je inzet.",
						"Geniet van je avond, dat heb je verdiend.",
						"Rust goed uit, morgen weer kansen.",
						"Vakmanschap kost energie, neem je rust."
					],

					// Dutch Holidays & Events
					"01-01": ["Gelukkig Nieuwjaar!", "Nieuw jaar, nieuwe kansen."],
					"14-02": ["Fijne Valentijnsdag!", "Liefde hangt in de lucht ❤️"],
					"27-04": ["Fijne Koningsdag!", "Oranje boven! 👑"],
					"05-05": ["Bevrijdingsdag!", "Vrijheid is iets om te vieren."],
					"04-05": ["Dodenherdenking", "Even stilstaan bij wat echt telt."],
					"31-10": ["Happy Halloween!", "Spooky vibes vandaag 👻", "Pas op voor de pompoenen..."],
					"05-12": ["Fijne Sinterklaasavond!", "Hopelijk zit er iets lekkers in je schoen 🎁"],
					"25-12": ["Fijne Kerst!", "Warme dagen, koude chocola ☕️", "Spread wat liefde vandaag."],
					"26-12": ["Tweede Kerstdag, relax en geniet."],
					"01-09": ["Nieuw schooljaar, nieuwe start!", "Welkom terug bij PIE!"],
					"10-07": ["Bijna vakantie!", "Nog even volhouden, je bent er bijna."],

					weekend: [
						"Weekend! Tijd om te ontspannen.",
						"Je hebt het verdiend, geniet van je vrije tijd.",
						"Rust goed uit, maandag weer bouwen 😉"
					]
				}
			}
		},
		{
			module: "weather",
			position: "top_right",
			config: {
				weatherProvider: "openmeteo",
				type: "current",
				lat: 52.4600,
				lon: 4.6150,
			}
		},
		{
			module: "weather",
			position: "top_right",
			header: "Weer Voorspelling",
			config: {
				weatherProvider: "openmeteo",
				type: "forecast",
				lat: 52.4600,
				lon: 4.6150,
				colored: true,
				maxNumberOfDays: 7,
				fadePoint: 0.75
				
				
			
			}
		},

		{
			module: "newsfeed",
			position: "bottom_bar",
			header: "Nieuws",
			config: {
				feeds: [
					{ title: "NU.nl", url: "https://www.nu.nl/rss/Algemeen" },
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true,
				updateInterval: 10 * 60 * 1000
			}
		}

		// Voeg later extra modules toe (bijv. MMM-Remote-Control, MMM-SystemStats, MMM-Traffic).
	]
};

/*************** NIET DE REGEL HIERONDER AANPASSEN ***************/
if (typeof module !== "undefined") { module.exports = config; }
