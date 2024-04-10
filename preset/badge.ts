export default {
	".badge": {
		"@apply inline-flex w-auto rounded-md bg-light px-2.5 py-1 text-xs font-medium cursor-default":
			{},
		"&.icon": {
			"@apply inline-flex w-auto items-center space-x-1": {},
		},
		"&.primary": {
			"@apply bg-primary text-white": {},
		},
		"&.alert": {
			"@apply bg-alert text-white": {},
		},
		"&.success": {
			"@apply bg-success text-white": {},
		},
		"&.bordered": {
			"@apply bg-transparent ring-1 ring-light text-primary/80 ring-inset":
				{},
		},
	},
};
