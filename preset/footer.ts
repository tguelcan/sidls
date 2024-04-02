export default {
	".footer": {
		"@apply flex-col space-y-4 bg-white": {},
		"& .navigation": {
			"@apply flex flex-col items-start justify-start gap-3 text-sm sm:flex-row sm:gap-6":
				{},
			"& a": {
				"@apply text-primary/75": {},
				"&:hover": {
					"@apply text-primary": {},
				},
			},
		},

		"& .quote": {
			"@apply text-subtitle flex justify-start gap-5": {},
		},

		".center": {
			"@apply justify-center items-center text-center": {},
		},

		".right": {
			"@apply justify-end text-right": {},
		},
	},
};
