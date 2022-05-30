import Layout from "../components/Layout.js";

// wow its a next app
export default function MyPage() {

	return (
		<>
			<Layout title="My Webpage" description="Portfolio for Gautam Khajuria" >
				<div className="p-2 bg-white dark:bg-slate-700 min-h-screen">
					<h1>Dude this my page</h1>
				</div>
			</Layout>

		</>
	);
}