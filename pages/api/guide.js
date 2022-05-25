export default function handler(req, res) {
	res.status(200).json({
		protip: "Everything smushed together, and hard to read? Use FireFox, or download a JSON extension.",
		guide: `This is the API page for Gautam Khajuria. Here, you can find a multitude of APIs that I provide, for any usecase.
				Below is an object containing several objects. Each object inside will be named for what the api route provides,
				and inside each inner object will be a description of the API route as well as a link.`,
		links: {
			about: {
				desc: "A route containg several attributes about me.",
				link: "/api/about"
			}
		}

	})
}