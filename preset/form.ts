export default {
	label: {
		"@apply block text-sm leading-7": {},
	},
	"input[type='text'], [type='email'], input[type='password'], input[type='number'], input[type='url'], input[type='date'], input[type='datetime-local'], input[type='month'], input[type='week'], input[type='time'], input[type='search'], input[type='tel'], select, select[multiple], textarea":
		{
			"@apply block w-full disabled:bg-light disabled:placeholder-primary/30 disabled:cursor-not-allowed disabled:text-primary/30  rounded-md py-1 text-primary ring-0 transition-colors placeholder:text-primary/50 focus:border-primary/25 focus:ring-2 focus:ring-light sm:text-sm sm:leading-6":
				{},
			"&.hint": {
				"@apply border-alert": {},
				"&.text-subtitle": {
					"@apply border-alert": {},
				},
			},
		},
	"input[type='radio'], input[type='checkbox']": {
		"@apply h-4 w-4 border-primary text-primary focus:ring-primary": {},
	},
	"input[type='checkbox']": {
		"@apply rounded": {},
	},
	".input-horizontal": {
		"@apply flex space-x-2 items-start": {},
		"& label": {
			"@apply leading-none": {},
		},
	},
	".input-uniform": {
		"@apply space-y-4 sm:space-y-6": {},
	},
};
