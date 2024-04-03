export default {
	".chat": {
		"@apply mb-2 flex flex-col space-y-4 overflow-y-scroll scroll-smooth focus:scroll-auto":
			{},

		"& .entrance": {
			"@apply py-4 px-3 sm:px-12 text-sm text-primary/75": {},
		},

		"& .out": {
			"@apply flex flex-col": {},
			"& span": {
				"@apply self-end text-primary py-1 text-sm": {},
			},
			"& time": {
				"@apply text-primary/50": {},
			},
			"& p": {
				"@apply self-end rounded-lg bg-primary text-light p-3 text-left sm:ml-6 text-sm font-semibold":
					{},
			},
			"& .image": {
				"@apply rounded-md object-cover": {},
			},
		},

		"& .in": {
			"@apply flex flex-col": {},
			"& span": {
				"@apply self-start text-primary py-1 text-sm": {},
			},
			"& p": {
				"@apply self-start rounded-lg bg-light p-3 text-left text-sm sm:mr-6 font-semibold":
					{},
			},
			"& time": {
				"@apply text-primary/50": {},
			},
		},
	},
	".chatbox": {
		"@apply mt-3 relative": {},
	},
};
