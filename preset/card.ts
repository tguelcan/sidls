export default {
	".card": {
		"@apply overflow-hidden rounded-lg bg-white shadow flex flex-col": {},
		"&.bordered": {
			"@apply bg-white shadow-none ring-1 ring-light": {},
		},
		"&.center": {
			"@apply flex justify-center items-center": {},
		},
		"& .header": {
			"@apply pt-4 px-4 sm:px-6 sm:pt-6": {},
		},
		"&.plane": {
			"@apply shadow-none": {},
		},
		"& .body": {
			"@apply p-4 sm:p-6": {},
		},
		"& .bottom": {
			"@apply pb-4 px-4 sm:px-6 sm:pb-6 mt-auto": {},
		},
	},
};
