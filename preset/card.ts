export default {
	".card": {
		"@apply overflow-hidden rounded-lg bg-white shadow flex flex-col": {},
		"&.bordered": {
			"@apply bg-light shadow-none border": {},
		},
		"&.center": {
			"@apply flex justify-center items-center": {},
		},
		"& .header": {
			"@apply px-4 py-2 sm:px-6 sm:py-4": {},
		},
		"& .body": {
			"@apply px-4 sm:px-6": {},
		},
		"& .footer": {
			"@apply p-4 sm:p-6 mt-auto": {},
		},
	},
};
