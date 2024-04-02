export default {
	".navigation": {
		"@apply flex items-center justify-between bg-white": {},
		"&.round": {
			"@apply  rounded-full p-4 shadow-sm": {},
		},
		"&.blurry": {
			"@apply bg-white/85 backdrop-blur-sm": {},
		},
		".brand": {
			"@apply text-lg font-extrabold tracking-tight": {},
		},

		".items": {
			"@apply flex items-center space-x-1": {},
		},
		".item": {
			"@apply btn": {},
		},
	},
};
