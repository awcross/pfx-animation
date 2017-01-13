const test = require('tape');
const m = require('./');

test(t => {
	t.is(typeof m, 'object');
	t.is(m.start, 'animationstart');
	t.is(m.iteration, 'animationiteration');
	t.is(m.end, 'animationend');
	t.end();
});
