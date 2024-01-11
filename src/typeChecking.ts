function allowUnreachableCode() {
	return;
	console.log('returned'); // warning
}

function allowUnusedLabels(b: boolean) {
	if (b) {
		label: true; // warning
	}
}

function noFallthroughCasesInSwitch(b: boolean) {
	switch (b) {
		case true: // warning
			console.log(true);
		default:
			console.log(false);
	}
}

function noImplicitAny(a) { // error
	console.log(a);
}

function noImplicitOverride() {
	class BaseClass {
		fn() {
		}
	}

	class OverrideClass extends BaseClass {
		fn() { // error
		}
	}

	console.log(OverrideClass);
}

function noImplicitReturns(b: boolean): string { // warning
	if (b) {
		return "true";
	}
}

function noImplicitThis() {
	class Item {
		name: string;

		constructor(name: string) {
			this.name = name;
		}

		getNameGetter() {
			return function () {
				return this.name; // error
			};
		}
	}

	console.log(Item);
}

function noPropertyAccessFromIndexSignature() {
	interface Prop {
		name: 'prop1' | 'prop2';
		[key: string]: string;
	}

	const a: Prop = { name: 'prop1', value: 'value' };

	console.log(a.name);
	console.log(a.value); // error
	console.log(a['value']);
}

function noUncheckedIndexedAccess() {
	interface Prop {
		name: 'prop1' | 'prop2';
		[key: string]: string;
	}

	const a: Prop = { name: 'prop1', value: 'value' };

	const name: string = a.name;
	const value: string = a['value']; // error
	console.log(name, value);
}

function noUnusedLocals() {
	const a = 5; // warning
}

function noUnusedParameters(b: boolean) { // warning

}

function strictBindCallApply() {
	function fn(a: string) {
		console.log(a);
	}

	fn.call(null, 5); // error
}

function strictFunctionTypes() {
	type Func = (a: number | string) => void;

	type Box = {
		fn(a: number | string): void;
	}

	function fn(s: string) {
		console.log(s);
	}

	const func: Func = fn; // error
	func(5);

	const box: Box = { fn };
	box.fn(5);
}

function strictNullChecks() {
	const items = [ 1, 2, 3 ];
	const item = items.find((i) => i > 2);
	const found: number = item; // error
	console.log(found);
}

function strictPropertyInitialization() {
	class Item {
		name: string;
		size: number; // error

		constructor(name: string) {
			this.name = name;
		}
	}

	console.log(Item);
}

function useUnknownInCatchVariables() {
	try {
		console.log('try');
	} catch (ex) {
		console.error(ex.message); // error
	}
}
