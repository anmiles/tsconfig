module.exports = {
	root    : true,
	extends : [
		'./node_modules/@anmiles/eslint-config/.eslintrc.js',
	],
	ignorePatterns : [
		'**/node_modules/',
		'dist/',
		'src/typeChecking.ts',
	],
};