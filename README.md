# @anmiles/tsconfig

Base tsconfig for all projects

----

## Installation

`npm install --save-dev @anmiles/tsconfig`

## Usage examples

`tsconfig.json`
```js
{
	"extends": "./node_modules/@anmiles/tsconfig/tsconfig.json",

	"compilerOptions": {
		"rootDir": "./src",
		"outDir": "./dist",
	},

	"include": [
		"src",
	],
}
```

`tsconfig.build.json`
```js
{
	"extends": "./tsconfig.json",

	"exclude": [
		"**/__tests__/",
	],
}
```
