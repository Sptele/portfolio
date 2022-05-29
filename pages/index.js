import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout.js";

// wow its a next app
export default function Home({ isDark, setIsDark }) {
	return (
		<>
				<Layout home title="Gautam Khajuria" description="Portfolio for Gautam Khajuria" isDark={isDark} setIsDark={setIsDark} >
					<div className="p-2 bg-white dark:bg-slate-700 min-h-screen">
						<div className="">

						</div>
					</div>
				</Layout>
		</>
	);
}