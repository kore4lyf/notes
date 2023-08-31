# Web Optimization Tips 

## 1. local font import 
Compress font to **.woff** format.


## 2. Performance Optimization

### Render Blocking CSSOM
By default, CSS is treated as a render blocking resource, which means that the browser won't render any processed content until the CSSOM is constructed. Make sure to keep your CSS lean, deliver it as quickly as possible, and use media types and queries to unblock rendering. 
In the render tree construction we saw that the critical rendering path requires both the DOM and the CSSOM to construct the render tree. This creates an important performance implication: both HTML and CSS are render blocking resources. The HTML is obvious, since without the DOM we would not have anything to render, but the CSS requirement may be less obvious. What would happen if we try to render a typical page without blocking rendering on CSS? 

- Media types and media queries allow us to mark some CSS resources as non-render blocking. 
- The browser downloads all CSS resources, regardless of blocking or non-blocking behavior.
- CSS is a render blocking resource. Get it to the client as soon and as quickly as possible to optimize the time to first render. 

However, what if we have some CSS styles that are only used under certain conditions, for example, when the page is being printed or being projected onto a large monitor? It would be nice if we didn’t have to block rendering on these resources.

CSS "media types" and "media queries" allow us to address these use cases:

```html
<link href="style.css" rel="stylesheet" />
<link href="print.css" rel="stylesheet" media="print" />
<link href="other.css" rel="stylesheet" media="(min-width: 40em)" />
``` 

our first stylesheet declaration doesn't provide a media type or query, so it applies in all cases; that is to say, it is always render blocking. On the other hand, the second stylesheet declaration applies only when the content is being printed---perhaps you want to rearrange the layout, change the fonts, and so on, and hence this stylesheet declaration doesn't need to block the rendering of the page when it is first loaded. Finally, the last stylesheet declaration provides a "media query," which is executed by the browser: if the conditions match, the browser blocks rendering until the style sheet is downloaded and processed. 

> When declaring your style sheet assets, pay close attention to the media type and queries; they greatly impact critical rendering path performance.


Let's consider some hands-on examples:
```html
<link href="style.css" rel="stylesheet" />
<link href="style.css" rel="stylesheet" media="all" />
<link href="portrait.css" rel="stylesheet" media="orientation:portrait" />
<link href="print.css" rel="stylesheet" media="print" />
``` 

- The first declaration is render blocking and matches in all conditions.
- The second declaration is also render blocking: "all" is the default type so if you don’t specify any type, it’s implicitly set to "all". Hence, the first and second declarations are actually equivalent.
- The third declaration has a dynamic media query, which is evaluated when the page is loaded. Depending on the orientation of the device while the page is loading, portrait.css may or may not be render blocking.
- The last declaration is only applied when the page is being printed so it is not render blocking when the page is first loaded in the browser.

Finally, note that "render blocking" only refers to whether the browser has to hold the initial rendering of the page on that resource. In either case, the browser still downloads the CSS asset, albeit with a lower priority for non-blocking resources.





### Critical Rendering Path  (CRP))
JavaScript is said to be parser block because it blocks DOM construction the script tag.

- CSS blocks DOM rendering and it also block JavaScript execution. It better it's optimised. 

- Inline CSS will load faster that a fetching and loading a CSS file.

- asyn attributes in script means the browser will download and run the script but it wont block the parser and CSS.

- async attributes don't work for inline script and it will always block CSSOM (CSS Object Model).

- The script tag can also take a defer attribute, in the same way that it can take an async attribute. The difference is that with defer, the script waits to execute until after the document has been parsed, whereas async lets the script run in the background while the document is being parsed.


#### General Strategies and CRP Diagram
i. Minify, Compress and Cache 
    HTML, CSS, JavaScript
  
ii. Minimize the use of Render Blocking CSS (CSS)
    - Use media queries on `<link>` to unblock redering.
    - Inline css 
    
iii. Minimize the use of parser Blocking resources (JS))
    - defer JavaScript execution
    - Use async attributes on `<script>` 
    

> NB: 
>> Minimize the number of bytes, the smaller the files, the faster the website.
>> Remove the number of critical resources. 
>> Shorten Critical Path length.


 
 


