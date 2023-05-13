# CSS (from scrimba via freecodecamp)

> Nelify - allows you to deploy your apps (or web codes to a live server)

> Github repos can also be added on Netlify to make the live.

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





## Others
- text-rendering: optimizeSpeed
- clip: rect(0, 0, 0, 0);