import '../styles/globals.css';

import { useState } from 'react';

function MyApp({ Component, pageProps }) {
	const [isDark, setIsDark] = useState(false);

  	return <Component {...pageProps} isDark={isDark} setIsDark={setIsDark} />;
}

export default MyApp;
