export default {
	".info": {
		"@apply overflow-hidden rounded-lg bg-white ring-1 ring-light p-3 sm:px-6 sm:py-4":
			{},
		"& p": {
			"@apply text-sm": {},
		},
		"&.center": {
			"@apply flex justify-center items-center text-center": {},
		},
		"&.icon": {
			"@apply sm:flex items-start sm:space-x-4 space-y-1 sm:space-y-0":
				{},
			"& svg": {
				"@apply sm:mt-0.5 mx-2 sm:mx-0": {},
			},
		},
		"&.primary": {
			"@apply bg-primary text-light": {},
			"& .text-subtitle": {
				"@apply text-white/50": {},
			},
		},
		"&.alert": {
			"@apply text-alert ring-alert": {},
		},
		"&.success": {
			"@apply text-success ring-success": {},
		},
	},
};
