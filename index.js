'use strict';

const pfx = require('pfx');

const prefixedEvents = {
	WebkitAnimation: {
		start: 'webkitAnimationStart',
		iteration: 'webkitAnimationIteration',
		end: 'webkitAnimationEnd'
	},

	MozAnimation: {
		start: 'animationstart',
		iteration: 'animationiteration',
		end: 'animationend'
	},

	OAnimation: {
		start: 'animationstart',
		iteration: 'animationiteration',
		end: 'animationend'
	},

	MsAnimation: {
		start: 'MSAnimationStart',
		iteration: 'MSAnimationIteration',
		end: 'MSAnimationEnd'
	},

	animation: {
		start: 'animationstart',
		iteration: 'animationiteration',
		end: 'animationend'
	}
};

module.exports = () => prefixedEvents[pfx('animation')];
