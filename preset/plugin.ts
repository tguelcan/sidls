import plugin from "tailwindcss/plugin";
import button from "./button";
import badge from "./badge";
import info from "./info";
import tab from "./tab";
import card from "./card";
import island from "./island";
import utilities from "./utilities";
import typo from "./typo";
import form from "./form";
import avatar from "./avatar";
import navigation from "./navigation";
import footer from "./footer";
import chat from "./chat";
import table from "./table";
import layout from "./layout";

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
	addComponents(form);
	addComponents(avatar);
	addComponents(navigation);
	addComponents(footer);
	addComponents(chat);
	addComponents(table);
	addComponents(layout);
});
