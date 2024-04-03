export default {
	button: {
		"&:hover": {
			"@apply bg-transparent text-primary/70": {},
		},
	},
	".btn": {
		"@apply py-2 px-4 rounded-md transition-colors text-sm text-primary/70":
			{},
		"&.small": {
			"@apply py-1 px-2": {},
		},

		"&.active, &:hover": {
			"@apply bg-light text-primary disabled:bg-transparent disabled:text-primary/70":
				{},
		},

		"&.primary": {
			"@apply bg-primary text-white shadow-sm disabled:bg-primary/70": {},
			"&:hover": {
				"@apply bg-primary/90 disabled:bg-primary/70 disabled:text-white":
					{},
			},
		},
		"&.secondary": {
			"@apply bg-light shadow-sm": {},
			"&:hover": {
				"@apply bg-light/50 disabled:bg-light disabled:text-primary/70":
					{},
			},
		},
		"&.alert": {
			"@apply bg-alert text-white shadow-sm disabled:text-white/70": {},
			"&:hover": {
				"@apply bg-alert/80 disabled:bg-alert disabled:text-white/70":
					{},
			},
		},
		"&.bordered": {
			"@apply ring-1 ring-light ring-inset shadow-sm": {},
			"&:hover": {
				"@apply bg-light/50": {},
			},
		},
		"&.cta": {
			"@apply rounded-full": {},
		},
		"&.circle": {
			"@apply rounded-full flex items-center justify-center p-0 w-9 h-9 shrink-0 overflow-hidden":
				{},
		},
	},
};
