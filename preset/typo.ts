export default {
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
	a: {
		"@apply transition-colors": {},
		"&.underlined": {
			"@apply underline underline-offset-2": {},
		},
		"&:hover": {
			"@apply text-primary": {},
		},
	},
};
