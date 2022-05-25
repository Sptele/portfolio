import Head from "next/head";

function PageLayout({ navBorderColor }) {
	let navbarLink = "hover:bg-black hover:text-white p-8";

	let navStyles = `bg-gray-500 border-b-8 border-b-solid grid grid-cols-layout`;

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
				className="col-span-1 col-start-1 row-start-1 row-span-1 bg-gray-400 py-8 text-center hover:bg-gray-600"
			>
				<h1>Gautam Khajuria</h1>
			</a>
			<div
				className="col-span-1 col-start-2 row-start-1 row-span-1
					flex flex-row justify-center gap-16"
			>
				<a className={navbarLink} href="/my-page">My Page</a>
				<a className={navbarLink}>Link 2</a>
				<a className={navbarLink} href="/api/guide">API</a>
			</div>
		</nav>
	);
}

function HomeLayout() {
	return <PageLayout />;
}

function Layout({ title, description, home, children, navBorderColor }) {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta title={title} description={description} />
			</Head>
			<PageLayout navBorderColor={navBorderColor} />
			{children}
		</>
	);
}

export default Layout;
