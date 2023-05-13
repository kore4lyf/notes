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

