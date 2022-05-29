import Layout from "../components/Layout.js";

// wow its a next app
export default function MyPage({ isDark, setIsDark }) {
	return (
		<>
			<Layout title="My Webpage" description="Portfolio for Gautam Khajuria" isDark={isDark} setIsDark={setIsDark} >
				<h1>Dude this my page</h1>
			</Layout>

		</>
	);
}