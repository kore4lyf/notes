# Web Optimization Tips 

## 1. local font import 
Compress font to **.woff** format.


## 2. Performance Optimization

### Critical Rendering Path  (CRP))
JavaScript is said to be parser block because it blocks DOM construction the script tag.

- CSS blocks DOM rendering and it also block JavaScript execution. It better it's optimised. 

- Inline CSS will load faster that a fetching and loading a CSS file.

- asyn attributes in script means the browser will download and run the script but it wont block the parser and CSS.

- async attributes don't work for inline script and it will always block CSSOM (CSS Object Model).

- The script tag can also take a defer attribute, in the same way that it can take an async attribute. The difference is that with defer, the script waits to execute until after the document has been parsed, whereas async lets the script run in the background while the document is being parsed.
