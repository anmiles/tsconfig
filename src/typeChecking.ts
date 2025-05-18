export function allowUnreachableCode() {
	return;
	// @ts-expect-error
	console.log('returned');
}

export function allowUnusedLabels(b: boolean) {
	if (b) {
		// @ts-expect-error
		label: true;
	}
}

export function noFallthroughCasesInSwitch(b: boolean) {
	switch (b) {
		// @ts-expect-error
		case true:
			console.log(true);
		default:
			console.log(false);
	}
}

// @ts-expect-error
export function noImplicitAny(a) {
	console.log(a);
}

export function noImplicitOverride() {
	class BaseClass {
		fn() {
		}
	}

	class OverrideClass extends BaseClass {
		// @ts-expect-error
		fn() {
		}
	}

	console.log(OverrideClass);
}

// @ts-expect-error
export function noImplicitReturns(b: boolean): string {
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
				// @ts-expect-error
				return this.name;
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
	// @ts-expect-error
	console.log(a.value);
	console.log(a['value']);
}

export function noUncheckedIndexedAccess() {
	interface Prop {
		name: 'prop1' | 'prop2';
		[key: string]: string;
	}

	const a: Prop = { name: 'prop1', value: 'value' };

	const name: string = a.name;
	// @ts-expect-error
	const value: string = a['value'];
	console.log(name, value);
}

export function strictBindCallApply() {
	function fn(a: string) {
		console.log(a);
	}

	// @ts-expect-error
	fn.call(null, 5);
}

export function strictFunctionTypes() {
	type Func = (a: number | string) => void;

	type Box = {
		fn(a: number | string): void;
	}

	function fn(s: string) {
		console.log(s);
	}

	// @ts-expect-error
	const func: Func = fn;
	func(5);

	const box: Box = { fn };
	box.fn(5);
}

export function strictNullChecks() {
	const items = [ 1, 2, 3 ];
	const item = items.find((i) => i > 2);
	// @ts-expect-error
	const found: number = item;
	console.log(found);
}

export function strictPropertyInitialization() {
	class Item {
		name: string;
		// @ts-expect-error
		size: number;

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
		// @ts-expect-error
		console.error(ex.message);
	}
}
