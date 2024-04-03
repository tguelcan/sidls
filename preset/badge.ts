export default {
	".badge": {
		"@apply inline-flex w-auto rounded-md bg-light px-2.5 py-1 text-xs font-medium cursor-default":
			{},
		"&.primary": {
			"@apply bg-primary text-white": {},
		},
		"&.alert": {
			"@apply bg-alert text-white": {},
		},
		"&.bordered": {
			"@apply bg-transparent ring-1 ring-light text-primary/80 ring-inset":
				{},
		},
	},
};
