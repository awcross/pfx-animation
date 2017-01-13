const test = require('tape');
const m = require('./');

test(t => {
	const result = m('animation');

	t.is(typeof result, 'object');
	t.is(result.start, 'animationstart');
	t.is(result.iteration, 'animationiteration');
	t.is(result.end, 'animationend');
	t.end();
});
