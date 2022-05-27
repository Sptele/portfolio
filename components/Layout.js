import Head from "next/head";
import Image from "next/image";
import useRandom from "../hooks/use-random.js";

import { ThemeContext } from "_app.js";
import { useState, useContext } from 'react';

function toNavStyle(borderColor) {
	let navStyles = "";

	switch (borderColor) {
		case 100:
			navStyles += " hover:text-green-100";
			break;
		case 200:
			navStyles += " hover:text-green-200";
			break;
		case 300:
			navStyles += " hover:text-green-300";
			break;
		case 400:
			navStyles += " hover:text-green-400";
			break;
		case 500:
			navStyles += " hover:text-green-500";
			break;
		case 600:
			navStyles += " hover:text-green-600";
			break;
		case 700:
			navStyles += " hover:text-green-700";
			break;
		case 800:
			navStyles += " hover:text-green-800";
			break;
		case 900:
			navStyles += " hover:text-green-900";
			break;
	}

	return navStyles;
}

function Link({ href, children }) {
	let navbarLink = "self-center hover:bg-black hover:text-white p-8 table h-[100%]";

	return (
		<a className={navbarLink} href={href}>
			<h1 className="table-cell align-middle text-2xl">{children}</h1>
		</a>
	);
}

function NavigationBar({ home, isDark, setIsDark }) {
	const navBorderColor = useRandom(1, 6, { integer: true, scale: 100 });

	const [isDark, setIsDark] = useContext(ThemeContext);

	return (
		<nav className={`bg-gray-500 grid grid-cols-2 align-center items-stretch flex`}>
			<a
				href={"/"}
				className={
					`col-span-1 col-start-1 row-start-1 row-span-1 flex flex-row justify-evenly bg-gray-500 text-center hover:bg-gray-600 py-2` + toNavStyle(navBorderColor)
				}
			>
				{home ? (
					<Image
						src={"/me.jpg"}
						alt="My Photo"
						width={128}
						height={128}
						className="rounded-full"
					/>
				) : null}
				<h1 className="self-center text-4xl">Gautam Khajuria</h1>
			</a>
			<div
				className="col-span-1 col-start-2 row-start-1 row-span-1
					flex flex-row justify-center gap-16 items-stretch"
			>
				<Link href="/my-page">My Page</Link>
				<Link href="/api/">API</Link>
			</div>
			<button className="bg-slate-800 p-1 text-white float-right col-span-1 col-start-3 row-span-1 row-start-1" onClick={() => setIsDark(!isDark)} >{!isDark ? "🌚" : "🌞"}</button>

		</nav>
	);
}

function Layout({ title, description, home, children, navBorderColor }) {

	const [isDark, setIsDark] = useContext(ThemeContext);

	return (
		<>
			<Head>
				<title>{title}</title>
				<link rel="shortcut icon" href="https://avatars.githubusercontent.com/u/79765399?v=4" />
				<meta title={title} description={description} />
			</Head>
			<NavigationBar home={home} navBorderColor={navBorderColor} />
			<div className={(isDark ? "dark" : "light")} >
				{children}
			</div>
		</>
	);
}

export default Layout;
