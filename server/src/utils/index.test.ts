import { deep } from './index';
const kf = (k: string) => k.toLowerCase();
const vf = (v: any) => v;
describe('deep', () => {
	it('with simple object', () => {
		const t = { ABC: 'abc', dEF: 123, GHI: {}, k: [] };
		expect(deep(t, vf, kf)).toEqual({
			abc: 'abc',
			def: 123,
			ghi: {},
			k: [],
		});
	});

	it('with simple array', () => {
		const t = ['abc', 123, null];
		expect(deep(t, vf, kf)).toEqual(['abc', 123, null]);
	});
});
