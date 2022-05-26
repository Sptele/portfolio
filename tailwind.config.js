module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				title: ["Ubuntu", "serif"],
				body: ["Secular One", "sans-serif"]
			},
			gridTemplateColumns: {
				layout: "10wh 90wh"
			}
		},
	},
	plugins: [],
};
