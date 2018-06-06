const path = require('path');
module.exports = (t, {modules, importFormat}) => {
	const actual = {};
	for (const file of Object.keys(modules)) {
		actual[path.relative(__dirname, file)] = true;
	}
	const expected = {
		[path.join('src', `input.${importFormat}.js`)]: true,
		[path.join('src', 'foo', 'a.js')]: true,
		[path.join('src', 'foo', 'b.js')]: true,
		[path.join('src', 'foo', 'bar', 'c.js')]: true,
		[path.join('src', 'foo', 'bar', 'd.js')]: true,
		[path.join('src', 'baz', 'e.js')]: true,
	};
	t.match(actual, expected);
};
