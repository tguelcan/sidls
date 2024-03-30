export default {
	".tab": {
		"@apply flex justify-between rounded-lg bg-light p-1.5 sm:p-2": {},
		"& button": {
			"@apply w-full inline-flex justify-center items-center text-center font-medium space-x-2":
				{},
			"&.active": {
				"@apply bg-white shadow hover:bg-white": {},
			},
		},
	},
};
