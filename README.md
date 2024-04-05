<p>
  <a href="https://sidls.com" target="_blank">
      <img alt="Sidls" src="https://raw.githubusercontent.com/tguelcan/sidls_docs/master/static/img/header.png" width="100%" style="max-width: 100%;">
  </a>
</p>

Everything you need to build a solid tailwindcss apps, powered by [`sidls`](https://sidls.com).
Open Source, without javascript and in pure tailwindcss.

--

## Installation

Install the preset from npm:

```shell
# install via npm or yarn
npm install -D sidls
```

Then add the preset to your `tailwind.config.js` file:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
	// Customizations specific colors to this project
	theme: {
		extend: {
			colors: {
				light: "#f4f4f5",
				primary: "#111927",
				alert: "#ef4444",
			},
		},
	},
	preset: [
		require("sidls"),
		// ...
	],
};
```

## Basic usage

You can now use simple css commands to use the components:

```html
<button class="btn primary">Primary Button</button>
```
