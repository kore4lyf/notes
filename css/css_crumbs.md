# CSS (from scrimba via freecodecamp)

> Nelify - allows you to deploy your apps (or web codes to a live server)

> Github repos can a !lso be added on Netlify to make the live.

> Ones git hub is linked to Netlify your projects or new repos become automatically deployed when you push them to git.

> .webp is a much more lighter version of Gif images which can be used on backgrounds.


## @font-face
Download font file to your local storage
```css
@font-face {
    src: url("typefaces/jumbo.tiff");
    font-family: "jumbo"; /* font-family is the name that will be used to identify the font */
}
```





## Background Image
```css 
background-image {
    src: url("images/myBackground.jpg");
}
```





## Using Multiple Background Images with CSS
CSS3 offers the ability to include multiple background images for a given element - use a comma-delimited list to specify as many as you like:

```css
background-image:url(img1.gif), url(img2.png), url(img3.gif)
```

> The order of the listed background images determines the position of the layer relative to the viewer, akin to the CSS z-index property: the first background image is on "top", the next below that, etc.

In similar fasion, specifying a comma-delimited list of background-position and/or background-repeat values assigns the position and repeat, respectively, for the multiple background images, as such:

```js
div {
	background-image:url(img1.gif), url(img2.png), url(img3.gif);
	background-position:center top, right top, center bottom;
	background-repeat:no-repeat, repeat-x, repeat-y;
}
```



### Background Position
```css
html {
  background-position: 100px 5px; 
}
```
> The first value is the horizontal position, second value is the vertical position. So 100px 5px will move the image 100px to the right and five pixels down.

It has three different types of values:
- Length values (e.g. 100px 5px)
- Percentages (e.g. 100% 5%)
- Keywords (e.g. top right)

When you specify three values, the browser interpets the “missing” fourth value as 0. Here’s an example of a three-value background-position:

```css
.three-values {
  background-position: right 45px bottom;
}
```

This positions the background image 45px from the right and 0px from the bottom of the container.

Here’s an example of a four-value background-position:
```css
.four-values {
  background-position: right 45px bottom 20px;
}
```

This puts the background image 45px from the right and 20px from the bottom of the container.





## text-rendering
The text-rendering CSS property provides information to the rendering engine about what to optimize for when rendering text. The browser makes trade-offs among speed, legibility, and geometric precision.!

> The text-rendering property is not defined in any CSS standard. It’s actually an SVG property. However, Gecko/WebKit/Blink browsers let you apply this property to HTML elements.

There are four possible values:
- **auto** (default) – The browser makes educated guesses about when to optimize for speed, legibility, and geometric precision while drawing text. Be aware that different browsers interpret this value differently.
- **optimizeSpeed** – The browser emphasizes rendering speed over legibility and geometric precision when drawing text. It disables kerning and ligatures.
- **optimizeLegibility** – The browser emphasizes legibility over rendering speed and geometric precision. This enables the use of special kerning and optional ligature information that may be contained in the font file for certain fonts.
- **geometricPrecision** – The browser emphasizes geometric precision over rendering speed and legibility. Certain aspects of fonts—such as kerning—don’t scale linearly, so geometricPrecision can make text using those fonts look good. When SVG font is scaled, the browser calculates pixel size, then rounds to the nearest integer. The geometricPrecision property allows for more fluid scaling. Note: Only WebKit browsers apply this fluid value, Gecko treats the value just like optimizeLegibility.





## .sr-only & sr-only-focusable 
According to bootstrap's documentation, the class is used to hide information intended only for screen readers from the layout of the rendered page.

Screen readers will have trouble with your forms if you don't include a label for every input. For these inline forms, you can hide the labels using the .sr-only class.

Here is an example styling used:
```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  border: 0;
}
```

**.sr-only-focusable** to show the element again when it’s focused (e.g. by a keyboard-only user)

```css 
.sr-only-focusable:focus {
    position: relative;
    width: auto;
    height: auto;
    clip: initial;
    margin: inherit;
    padding: inherit;
    border: initial;
}
```





## clip-path
The use of **clip** property is deprecated.

```css
clip-path: circle(40%);
clip-path: circle(20%);
clip-path: ellipse(25% 40% at 50% 50%);
clip-path: ellipse(25% 25% at 50% 50%);
clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
clip-path: inset(5% 20% 15% 10%);
```


```css 
.clip-me { 

  /* referencing path from an inline SVG  */
  clip-path: url(#c1); 

  /* referencing path from external SVG */
  clip-path: url(path.svg#c1);

  /* polygon */
  clip-path: polygon(5% 5%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%);

  /* circle */
  clip-path: circle(30px at 35px 35px);

  /* ellipse */
  clip-path: ellipse(65px 30px at 125px 40px);

  /* inset-rectangle() may replace inset() ? */
  /* rectangle() coming in SVG 2 */

  /* rounded corners... not sure if a thing anymore */
  clip-path: inset(10% 10% 10% 10% round 20%, 20%);
  
}
```




## Others
- text-rendering: optimizeSpeed
- clip: rect(0, 0, 0, 0);