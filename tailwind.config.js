module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			gridTemplateColumns: {
				layout: "10wh 90wh"
			}
		},
	},
	plugins: [],
};
