import plugin from "tailwindcss/plugin";
import buttons from "./buttons";
import info from "./info";
import card from "./card";
import utilities from "./utilities";

export default plugin(function ({
	addComponents,
	addBase,
	config,
	addUtilities,
}) {
	addBase({
		h1: {
			"@apply text-2xl leading-none": {},
		},
		h2: {
			"@apply text-xl leading-none": {},
		},
		h3: {
			"@apply text-lg font-medium leading-none": {},
		},
		h4: {
			"@apply text-base leading-none": {},
		},
	});
	addUtilities(utilities);
	addComponents(buttons);
	addComponents(info);
	addComponents(card);
});
