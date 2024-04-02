import plugin from "./plugin";
import forms from "@tailwindcss/forms";

export default {
	theme: {
		extend: {
			colors: {
				light: "#f4f4f5",
				primary: "#111927",
				alert: "#ef4444",
			},
		},
	},
	plugins: [forms, plugin],
};
