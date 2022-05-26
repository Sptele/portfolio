/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
};

module.exports = {
	async redirects() {
		return [
			{
				source: "/api/guide",
				destination: "/api/",
				permanent: true,
			},
		];
	},
	nextConfig
};
