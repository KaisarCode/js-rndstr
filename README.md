# RNDStr
[js] Random string.

### Install
```
npm install kc-rndstr
```

### Use
```js
var rndstr = require('kc-rndstr');
var len = 8; // String length (default: 8)
var char = 'ABCabc123'; // Characters to use (default: all alphanumeric)
var str = rndstr(len, char);
console.log(str);
```
