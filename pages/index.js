import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Layout from "../components/Layout.js";

function InfoBlock({ gridPos, children, appendClass }) {
	// if gridpos.x is odd, then use ml-16, mr-2
	// if gridpos.x is even, then use mr-16, ml-2

	return (
		<div
			className={
				`col-start-1 col-span-1 row-start-[${gridPos}] row-span-1
					 bg-black text-white rounded-md text p-4 ` + appendClass
			}
		>
			{children}
		</div>
	);
}

function Preference({ preferences, gridPos, label, type }) {
	/**
	 * Returns a collection of <li> elements from the server, given the type. THIS DOES NOT RETURN WITH A WRAPPING <ol> TAG, FOR FLEXIBILITY. YOU MUST WRITE THAT YOURSELF. List of valid types: {
		 "programmingLangs", "IDES", "computer"
	 }
	 * @param {String} type The type of data, according to the list above.
	 */
	const renderPreferencesData = (type) => {
		// Different logic for object
		if (type === "IDES") {
			return Object.keys(preferences.IDES).map((el, i) => {
				return (
					<li key={"api-about-ides-" + i}>
						{
							((el === "CPP") ? "C++" : (el === "CSharp" ? "C#" : (el === "HTMLCSS" ? "HTML/CSS" : el)))
						}: {preferences.IDES[el]}
					</li>
				);
			});
		}

		return preferences[type].map((el, i) => {
			return <li key={"api-about-" + type + "-" + i}>{el}</li>;
		});
	};

	return (
		<InfoBlock gridPos={gridPos} appendClass="tooltip">
			<h3>Preferences</h3>
			{type === "IDES" ? (
				<>
					<label htmlFor="p-ides">{label}</label>
					<ol id="p-ides" className={`list-inside list-none`}>
						{renderPreferencesData("IDES")}
					</ol>
				</>
			) : (
				<>
					<label htmlFor="p-langs">{label}</label>
					<ol
						id="p-langs"
						className="list-inside list-decimal"
						start="0"
					>
						{renderPreferencesData(type)}
					</ol>
				</>
			)}

			<div className="tooltip-text text-xs bg-gray-500">
				&#9432; This data was fetched from the{" "}
				<Link href="/api/about">
					<a className="underline">About API</a>
				</Link>
			</div>
		</InfoBlock>
	);
}

// wow its a next app
export default function Home({ preferences }) {
	const Learning = ({ image, label, md }) => {
		return (
			<li>
				<Image src={`/${image}`} width="16" height="16" className={md ? "rounded-md" : "rounded-full"} /> 
				{" "+label}
			</li>
		);
	};

	return (
		<Layout
			home
			title="Gautam Khajuria"
			description="Portfolio for Gautam Khajuria"
		>
			<div className="bg-white dark:bg-slate-700 min-h-full flex flex-col">
				{/* Image */}
				<div className="ml-auto mr-auto mt-4">
					<Image
						src="/main-banner.jpg"
						width={816}
						height={612}
						className="rounded-md"
					/>
				</div>
				{/* Small description */}
				<div className="text-center dark:text-white">
					<h1>Gautam Khajuria</h1>
					<h4>he/him/his</h4>
					<p>
						I'm a high school sophomore that loves everything
						related to CS!
					</p>
				</div>

				<div className="grid grid-cols-2 grid-rows-1 mt-8 mx-16 gap-2 mb-2">
					<InfoBlock gridPos={1}>
						<h3>Hello World!</h3>
						<p>
							I'm a student currently learning about CS. This
							year, I am taking AP Computer Science. Outside of
							school, I am passionate about learning about
							computers, new technology, and better ways to do
							things. Right now, I'm learning:
						</p>
						<ul>
							<Learning label="Rust" image="rust.png" />
							<Learning label="Next.js (That's what this website is built on!)" image="nextjs.png" />
							<Learning label="React.js (I also built this website with this)" image="react.png" md />
						</ul>

						For all my code and repositories:
						<br />
						<br />
						
						<Link href="https://github.com/Sptele">
							<a className="bg-gray-400 rounded-full p-4 mt-4 text-black">Check out my GitHub</a>
						</Link>
					</InfoBlock>

					<div className="grid grid-cols-1 grid-rows-1 mt-4 gap-2">
						<Preference
							preferences={preferences}
							gridPos={1}
							label="Programming Languages"
							type="programmingLangs"
						/>

						<Preference
							preferences={preferences}
							gridPos={2}
							label="IDES"
							type="IDES"
						/>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export async function getStaticProps() {
	const res = await fetch("http://localhost:3000/api/about"); // This link must be updated somewhere down the line
	const posts = await res.json();

	return {
		props: {
			preferences: {
				programmingLangs: posts.programmingLangs,
				IDES: posts.preferences.ides,
				computer: posts.preferences.computer,
			},
		},
	};
}
