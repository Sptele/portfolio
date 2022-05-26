import Head from "next/head";
import Image from "next/image";
import useRandom from "../hooks/use-random.js";

function Link({ href, children }) {
	let navbarLink = "self-center hover:bg-black hover:text-white p-8 table h-[100%]";

	return (
		<a className={navbarLink} href={href}>
			<h1 className="table-cell align-middle text-2xl">{children}</h1>
		</a>
	);
}

function NavigationBar({ home }) {
	const navBorderColor = useRandom(1, 6, { integer: true, scale: 100 });

	let navStyles = `bg-gray-500 border-b-8 border-b-solid grid grid-cols-2 align-center items-stretch flex`;

	switch (navBorderColor) {
		case 100:
			navStyles += " border-b-green-100";
			break;
		case 200:
			navStyles += " border-b-green-200";
			break;
		case 300:
			navStyles += " border-b-green-300";
			break;
		case 400:
			navStyles += " border-b-green-400";
			break;
		case 500:
			navStyles += " border-b-green-500";
			break;
		case 600:
			navStyles += " border-b-green-600";
			break;
		case 700:
			navStyles += " border-b-green-700";
			break;
		case 800:
			navStyles += " border-b-green-800";
			break;
		case 900:
			navStyles += " border-b-green-900";
			break;
	}

	return (
		<nav className={navStyles}>
			<a
				href={"/"}
				className={
					"col-span-1 col-start-1 row-start-1 row-span-1 flex flex-row justify-evenly bg-gray-400 text-center hover:bg-gray-600 py-2"
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
		</nav>
	);
}

function Layout({ title, description, home, children, navBorderColor }) {
	return (
		<>
			<Head>
				<title>{title}</title>
				<link rel="shortcut icon" href="https://avatars.githubusercontent.com/u/79765399?v=4" />
				<meta title={title} description={description} />
			</Head>
			<NavigationBar home={home} navBorderColor={navBorderColor} />
			{children}
		</>
	);
}

export default Layout;
