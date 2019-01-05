# SalesLoft
An unofficial Node client for the SalesLoft API.

## Installation:
Use npm to install the package:
```shell
$ npm install salesloft
```

## Example Usage:
```javascript
import { SalesLoft } from 'salesloft';
const sl = new SalesLoft('YOUR_API_KEY');
sl.Me.list().then((results) => {
  console.log(`Me results: ${results}`);
});
```
