TypeScript Array Get Item Ignored Undefined Issue Demo
===========================

typescript会强行忽略`array[n]?.`中手动指定的undefined可能性，有点意外。

这种情况我们需要使用 `array.at(n)`


```
npm install
npm start
```
