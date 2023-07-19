## <base> Element
The `<base>` element specifies the base URL and base target for all relative URLs in a page:

Example
```html
<base href="https://www.w3schools.com/images/" target="_blank">
```

> Setting a base URL is optional, and it won't work for a localhost or machine except via the specified route



## HTML Layouts
HTML offers several semantic elements that define the different parts of a web page:

HTML5 Semantic Elements	
`<header>` - Defines a header for a document or a section
`<nav>` - Defines a container for navigation links
`<section>` - Defines a section in a document
`<article>` - Defines an independent self-contained article
`<aside>` - Defines content aside from the content (like a sidebar)
`<footer>` - Defines a footer for a document or a section
`<details>` - Defines additional details
`<summary>` - Defines a heading for the `<details>` element



## Responsive Text Size
The text size can be set with a "vw" unit, which means the "viewport width".
That way the text size will follow the size of the browser window:

Example
```html
<h1 style="font-size:10vw">Hello World</h1>
```



## Computer Code Elements

### Code
```html
<code>
x = 5;<br>
y = 6;<br>
z = x + y;
</code>
```

### <kbd> For Keyboard Input
The HTML `<kbd>` element represents user input, like keyboard input or voice commands.

Text surrounded by `<kbd>` tags is typically displayed in a monospace font:

Example
```html 
<p>Save the document by pressing <kbd>Ctrl + S</kbd></p>
```


### <samp> For Program Output
The HTML `<samp>` element represents output from a program or computing system.

Text surrounded by `<samp>` tags is typically displayed in a monospace font:

Example
```html
<p>If you input wrong value, the program will return <samp>Error!</samp></p>
```


### <var> For Variables
The HTML <var> element defines a variable.

The variable could be a variable in a mathematical expression or a variable in programming context:

Example
```html 
Einstein wrote: <var>E</var> = <var>mc</var><sup>2</sup>.
```



## HTML Entities
Some characters are reserved in HTML.

If you use the less than (<) or greater than (>) signs in your text, the browser might mix them with tags.

Character entities are used to display reserved characters in HTML.

A character entity looks like this:
```html
&entity_name;
OR
&#entity_number;
```
To display a less than sign (<) we must write: `&lt;` or `&#60;`

**Advantage of using an entity name**: An entity name is easy to remember.
**Disadvantage of using an entity name**: Browsers may not support all entity names, but the support for numbers is good.


Result	Description	Entity Name	Entity Number
```html
non-breaking space	&nbsp;	&#160;
<	less than	&lt;	&#60;
>	greater than	&gt;	&#62;
&	ampersand	&amp;	&#38;
"	double quotation mark	&quot;	&#34;
'	single quotation mark (apostrophe)	&apos;	&#39;
¢	cent	&cent;	&#162;
£	pound	&pound;	&#163;
¥	yen	&yen;	&#165;
€	euro	&euro;	&#8364;
©	copyright	&copy;	&#169;
®	registered trademark	&reg;	&#174;
Note: Entity names are case sensitive.
```


### Combining Diacritical Marks
Mark	Character	Construct	Result
```html
 ̀	a	a&#768;	à
 ́	a	a&#769;	á
̂	a	a&#770;	â
 ̃	a	a&#771;	ã
 ̀	O	O&#768;	Ò
 ́	O	O&#769;	Ó
̂	O	O&#770;	Ô
 ̃	O	O&#771;	Õ
```

### Some Mathematical Symbols Supported by HTML
Char	Number	Entity	Description
```html
∀	&#8704;	&forall;	FOR ALL
∂	&#8706;	&part;	PARTIAL DIFFERENTIAL
∃	&#8707;	&exist;	THERE EXISTS
∅	&#8709;	&empty;	EMPTY SETS
∇	&#8711;	&nabla;	NABLA
∈	&#8712;	&isin;	ELEMENT OF
∉	&#8713;	&notin;	NOT AN ELEMENT OF
∋	&#8715;	&ni;	CONTAINS AS MEMBER
∏	&#8719;	&prod;	N-ARY PRODUCT
∑	&#8721;	&sum;	N-ARY SUMMATION
```


### Some Greek Letters Supported by HTML
Char	Number	Entity	Description
```html
Α	&#913;	&Alpha;	GREEK CAPITAL LETTER ALPHA
Β	&#914;	&Beta;	GREEK CAPITAL LETTER BETA
Γ	&#915;	&Gamma;	GREEK CAPITAL LETTER GAMMA
Δ	&#916;	&Delta;	GREEK CAPITAL LETTER DELTA
Ε	&#917;	&Epsilon;	GREEK CAPITAL LETTER EPSILON
Ζ	&#918;	&Zeta;	GREEK CAPITAL LETTER ZETA
```

### Some Other Entities Supported by HTML
Char	Number	Entity	Description
```html
©	&#169;	&copy;	COPYRIGHT SIGN
®	&#174;	&reg;	REGISTERED SIGN
€	&#8364;	&euro;	EURO SIGN
™	&#8482;	&trade;	TRADEMARK
←	&#8592;	&larr;	LEFTWARDS ARROW
↑	&#8593;	&uarr;	UPWARDS ARROW
→	&#8594;	&rarr;	RIGHTWARDS ARROW
↓	&#8595;	&darr;	DOWNWARDS ARROW
♠	&#9824;	&spades;	BLACK SPADE SUIT
♣	&#9827;	&clubs;	BLACK CLUB SUIT
♥	&#9829;	&hearts;	BLACK HEART SUIT
♦	&#9830;	&diams;	BLACK DIAMOND SUIT
```