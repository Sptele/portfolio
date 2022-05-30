import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout.js";

// wow its a next app
export default function Home() {
	return (
		<Layout
			home
			title="Gautam Khajuria"
			description="Portfolio for Gautam Khajuria"
		>
			<div className="bg-white dark:bg-slate-700 min-h-full flex flex-col">
				<div className="ml-auto mr-auto mt-4">
					<Image
						src="/main-banner.jpg"
						width={816}
						height={612}
						className="rounded-md"
					/>
				</div>
				<div className="text-center dark:text-white">
					<h1>Gautam Khajuria</h1>
					<p>
						I'm a high school freshman that loves everything related
						to CS!
					</p>
				</div>
			</div>
		</Layout>
	);
}
