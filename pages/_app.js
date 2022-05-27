import '../styles/globals.css'

import { createContext, useState } from 'react';

export const ThemeContext = createContext();

function MyApp({ Component, pageProps }) {

	const [isDark, setIsDark] = useState(false);

  return (
	<ThemeContext.Provider value={[isDark, setIsDark]}>
		<Component {...pageProps} />
	</ThemeContext.Provider>
  );
}

export default MyApp
