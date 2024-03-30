import plugin from "tailwindcss/plugin";
import button from "./button";
import badge from "./badge";
import info from "./info";
import tab from "./tab";
import card from "./card";
import island from "./island";
import utilities from "./utilities";
import typo from "./typo";

export default plugin(function ({
	addComponents,
	addBase,
	config,
	addUtilities,
}) {
	addBase(typo);
	addUtilities(utilities);
	addComponents(button);
	addComponents(badge);
	addComponents(info);
	addComponents(tab);
	addComponents(card);
	addComponents(island);
});
