function useRandom(min=0, max=1, options=null) {

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

export default useRandom;