export default {
	label: {
		"@apply block text-sm leading-7": {},
	},
	"input[type='text'], [type='email'], input[type='password'], input[type='number'], input[type='url'], input[type='date'], input[type='datetime-local'], input[type='month'], input[type='week'], input[type='time'], input[type='search'], input[type='tel'], select, select[multiple], textarea":
		{
			"@apply block w-full border-primary/10 disabled:bg-light disabled:placeholder-primary/30 disabled:border-primary/10 disabled:text-primary/30  rounded-md py-1 text-primary ring-0 transition-colors placeholder:text-primary/50 focus:border-primary/25 focus:ring-2 focus:ring-light sm:text-sm sm:leading-6":
				{},
			"&.hint": {
				"@apply border-alert": {},
				"&.text-subtitle": {
					"@apply border-alert": {},
				},
			},
			"&.search": {
				"@apply border-0 bg-light": {},
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
	".icon-left": {
		"@apply pointer-events-none absolute inset-y-0 start-0 flex items-center ps-2 text-primary/50 peer-disabled:pointer-events-none peer-disabled:opacity-50":
			{},
	},
	".icon-right": {
		"@apply absolute inset-y-0 end-0 flex items-center pe-2 text-primary/50 peer-disabled:pointer-events-none peer-disabled:opacity-50":
			{},
	},
	".input-icon-left": {
		"@apply ps-8": {},
	},
	".input-icon-right": {
		"@apply pe-8": {},
	},
};
