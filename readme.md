# pfx-animation [![Build Status](https://travis-ci.org/awcross/pfx-animation.svg?branch=master)](https://travis-ci.org/awcross/pfx-animation)

> Browser prefix helper for animation event


## Install

```
$ npm install --save pfx-animation
```


## Usage

```js
const animation = require('pfx-animation');

const obj = document.querySelector('.move-obj');
obj.addEventListener(animation.end, () => {
	// the animation has finished
}, false);
```


## API

### animation

Object containing three properties, `start`, `iteration`, and `end`, that map to [animationstart](https://developer.mozilla.org/en-US/docs/Web/Events/animationstart), [animationiteration](https://developer.mozilla.org/en-US/docs/Web/Events/animationiteration), and  [animationend](https://developer.mozilla.org/en-US/docs/Web/Events/animationend), respectively, and include the correct vendor animation prefix (if needed).


## License

MIT © [Alex Cross](https://alexcross.io)
