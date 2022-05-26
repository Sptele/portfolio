import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout.js";

// wow its a next app
export default function Home() {
	return (
		<>
			<Layout home title="Gautam Khajuria" description="Portfolio for Gautam Khajuria" >
				<div className="m-2">
					<div className="">

					</div>
				</div>
			</Layout>

		</>
	);
}