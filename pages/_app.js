import "../styles/globals.css";
import { ThemeContext } from "../components/ThemeContext.js"; 
import { useState } from "react";

function MyApp({ Component, pageProps }) {
	const [isDark, setIsDark] = useState(false);

	console.log("App.js: " + (isDark ? "dark mode" : "light mode"));

	return (
		<ThemeContext.Provider value={[isDark, setIsDark]}>
			<Component {...pageProps} />
		</ThemeContext.Provider>
	);
}

export default MyApp;
