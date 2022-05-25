import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout.js";

// wow its a next app
export default function Home({ navBorderColor }) {
	return (
		<>
			<Layout home title="Gautam Khajuria" description="Portfolio for Gautam Khajuria" navBorderColor={navBorderColor} >
				<h1>Welcome to my portfolio!</h1>
			</Layout>

		</>
	);
}


function random(min=0, max=1, options=null) {

	max += 1; // Allow inclusive max

	const rawExpr = (Math.random() * (max-min)) + min;
	let optionedExpr = rawExpr;

	if (!options) return rawExpr;

	if (options.integer) {
		optionedExpr = Math.floor(optionedExpr);
	} 

	if (options.scale) {
		optionedExpr *= options.scale;
	}

	return optionedExpr;
}

export async function getServerSideProps() {
	const result = random(1, 6, { integer: true, scale: 100 });
	console.log(result);

	return { props: { navBorderColor: result } };
}