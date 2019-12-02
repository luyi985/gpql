interface IValueFun {
	(args: any): number | string | null;
}

interface IKeyFun {
	(args: any): string;
}
export const deep = (tree: any, vCallback: IValueFun, kCallBack: IKeyFun): any => {
	if (!tree) return tree;

	if (Array.isArray(tree)) {
		return tree.length ? tree.map(child => deep(child, vCallback, kCallBack)) : [];
	}

	if (typeof tree === 'object') {
		const entries = Object.entries(tree);

		return entries.length
			? entries.reduce((acc: object, entry: [string, any]): object => {
					const [k, v] = entry;
					if (typeof v === 'object') return { ...acc, [kCallBack(k)]: deep(v, vCallback, kCallBack) };
					return { ...acc, [kCallBack(k)]: vCallback(v) };
			  }, {})
			: {};
	}

	return tree;
};
