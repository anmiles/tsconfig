export function allowUnreachableCode() {
	return;
	console.log('returned'); // warning
}

export function allowUnusedLabels(b: boolean) {
	if (b) {
		label: true; // warning
	}
}

export function noFallthroughCasesInSwitch(b: boolean) {
	switch (b) {
		case true: // warning
			console.log(true);
		default:
			console.log(false);
	}
}

export function noImplicitAny(a) { // error
	console.log(a);
}

export function noImplicitOverride() {
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

export function noImplicitReturns(b: boolean): string { // error
	if (b) {
		return "true";
	}
}

export function noImplicitThis() {
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

export function noPropertyAccessFromIndexSignature() {
	interface Prop {
		name: 'prop1' | 'prop2';
		[key: string]: string;
	}

	const a: Prop = { name: 'prop1', value: 'value' };

	console.log(a.name);
	console.log(a.value); // error
	console.log(a['value']);
}

export function noUncheckedIndexedAccess() {
	interface Prop {
		name: 'prop1' | 'prop2';
		[key: string]: string;
	}

	const a: Prop = { name: 'prop1', value: 'value' };

	const name: string = a.name;
	const value: string = a['value']; // error
	console.log(name, value);
}

export function noUnusedLocals() {
	const a = 5; // warning
}

export function noUnusedParameters(b: boolean) { // warning

}

export function strictBindCallApply() {
	function fn(a: string) {
		console.log(a);
	}

	fn.call(null, 5); // error
}

export function strictFunctionTypes() {
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

export function strictNullChecks() {
	const items = [ 1, 2, 3 ];
	const item = items.find((i) => i > 2);
	const found: number = item; // error
	console.log(found);
}

export function strictPropertyInitialization() {
	class Item {
		name: string;
		size: number; // error

		constructor(name: string) {
			this.name = name;
		}
	}

	console.log(Item);
}

export function useUnknownInCatchVariables() {
	try {
		console.log('try');
	} catch (ex) {
		console.error(ex.message); // error
	}
}
