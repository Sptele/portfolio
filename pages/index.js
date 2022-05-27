import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout.js";

import { ThemeContext } from "_app.js";

import { useState, useContext } from 'react';


// wow its a next app
export default function Home() {

	const [isDark, setIsDark] = useContext(ThemeContext);

	return (
		<>
			<div className={isDark ? "dark" : "light"}>
				<Layout home title="Gautam Khajuria" description="Portfolio for Gautam Khajuria" >
					<div className="p-2 bg-white dark:bg-slate-700 min-h-screen">
						<div className="">

						</div>
					</div>
				</Layout>
			</div>
		</>
	);
}