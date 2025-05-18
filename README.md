# @anmiles/tsconfig

Base tsconfig for all projects

----

## Installation

`npm install --save-dev @anmiles/tsconfig`

## Usage examples

### Config for server TS module

`tsconfig.json`
```json
{
	"extends" : "./node_modules/@anmiles/tsconfig/tsconfig.json",

	"include" : [
		"src",
	],
}
```

`tsconfig.build.json`
```json
{
	"extends" : "./tsconfig.json",

	"exclude" : [
		"**/__tests__/",
		"**/__mocks__/",
	],

	"compilerOptions" : {
		"rootDir" : "./src",
		"outDir" : "./dist",
	},
}
```

### Config for client TS+React+Vite module

`tsconfig.json`
```json
{
	"extends" : "./node_modules/@anmiles/tsconfig/tsconfig.client.json",

	"include" : [
		"src",
		"vite.config.mts",
	],

	"compilerOptions" : {
		"types" : [ "vite/client" ],
	},
}
```

### Config for shared workspace (in monorepo)

`tsconfig.json`
```json
{
	"extends" : "../node_modules/@anmiles/tsconfig/tsconfig.json",

	"include" : [
		"src",
	],
}
```

`tsconfig.build.server.json`
```json
{
	"extends" : "./tsconfig.json",

	"exclude" : [
		"**/__tests__/",
		"**/__mocks__/",
	],

	"compilerOptions" : {
		"rootDir" : "./src",
		"outDir" : "./dist/server",
	},
}
```

`tsconfig.build.client.json`
```json
{
	"extends" : "../node_modules/@anmiles/tsconfig/tsconfig.client.json",

	"include" : [
		"src",
	],

	"exclude" : [
		"**/__tests__/",
		"**/__mocks__/",
	],

	"compilerOptions" : {
		"rootDir" : "./src",
		"outDir" : "./dist/client",
	},
}
```
