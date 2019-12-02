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

	it('with nested array', () => {
		const t = [
			'abc',
			123,
			null,
			{
				ABC: 'abc',
				EoF: {
					Inner: 'inner',
				},
				Comments: [],
				Fields: [
					{
						Name: 'name1',
					},
					{ Name: 'name2' },
				],
			},
		];
		expect(deep(t, vf, kf)).toEqual([
			'abc',
			123,
			null,
			{
				abc: 'abc',
				eof: {
					inner: 'inner',
				},
				comments: [],
				fields: [
					{
						name: 'name1',
					},
					{ name: 'name2' },
				],
			},
		]);
	});
});
