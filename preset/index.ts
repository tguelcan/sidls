import { zinc } from "tailwindcss/colors";

import plugin from "./plugin";

export default {
	theme: {
		extend: {
			colors: {
				light: zinc["100"],
				primary: zinc["900"],
			},
		},
	},
	plugins: [plugin],
};
