# HTML



## Link Bookmarks
First, create a bookmark with the id attribute:

```html
<h2 id="C4">Chapter 4</h2>
```

Then, add a link to the bookmark ("Jump to Chapter 4"), from within the same page:

```html
<a href="#C4">Jump to Chapter 4</a>
```

You can also add a link to a bookmark on another page:
```html
<a href="html_demo.html#C4">Jump to Chapter 4</a>
```

## Image Maps
You can use paint to get the coords of items or objects in an image.
```html
<img src="workplace.jpg" alt="Workplace" usemap="#workmap">

<map name="workmap">
  <area shape="rect" coords="34,44,270,350" alt="Computer" href="computer.htm">
  <area shape="rect" coords="290,172,333,250" alt="Phone" href="phone.htm">
  <area shape="circle" coords="337,300,44" alt="Coffee" href="coffee.htm">
</map>
```

- The only difference from other images is that you must add a `usemap` attribute
- The usemap value starts with a hash tag # followed by the name of the image map
- The `<map>` element is used to create an image map,  and is linked to the image by using the name attribute.
- The Areas - Then add the clickable areas.

**Shape** - You must define the shape of the area, and you can choose one of these values:

**rect** - defines a rectangular region
coords="34, 44, 270, 350" 
coords="left, top, right, bottom"


**circle** - defines a circular region
coords="337, 300, 44"
coords="x axis, y axis, radius"


**poly** - defines a polygonal region
**default** - defines the entire region

- Coordinates - You must define some coordinates to be able to place the clickable area onto the image.



## Background Images
```css 
  background-image: url('img_girl.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed; 
  background-size: cover; /* contain */
```
To make background image stretch set `background-size: 100% 100%;` 


## Picture Element
When to use the Picture Element
There are two main purposes for the <picture> element:

1. Bandwidth
If you have a small screen or device, it is not necessary to load a large image file. The browser will use the first <source> element with matching attribute values, and ignore any of the following elements.

```html
<picture>
  <source media="(min-width: 650px)" srcset="img_food.jpg">
  <source media="(min-width: 465px)" srcset="img_car.jpg">
  <img src="img_girl.jpg" style="width:auto;">
</picture>
```

2. Format Support
Some browsers or devices may not support all image formats. By using the <picture> element, you can add images of all formats, and the browser will use the first format it recognizes and ignore any of the following.

```html
<picture>
  <source srcset="img_avatar.png">
  <source srcset="img_girl.jpg">
  <img src="img_beatles.html" alt="Beatles" style="width:auto;">
</picture>
```
The picture element can be used when the image format is not supported by all devices. The device will use the first image format it supports, and ignore the rest of the images.



## Tables
- Use the HTML `<table>` element to define a table
- Use the HTML `<tr>` element to define a table row
- Use the HTML `<td>` element to define a table data
- Use the HTML `<th>` element to define a table heading
- Use the HTML `<caption>` element to define a table caption
- Use the CSS `border` property to define a border
- Use the CSS `border-collapse` property to collapse cell borders
- Use the CSS `padding` property to add padding to cells
- Use the CSS `text-align` property to align cell text
- Use the CSS `border-spacing` property to set the spacing between cells
- Use the `colspan` attribute to make a cell span many columns
- Use the rowspan attribute to make a cell span many rows
- Use the id attribute to uniquely define one table
- `<thead>`	Groups the header content in a table
- `<tbody>`	Groups the body content in a table
- `<tfoot>`	Groups the footer content in a table

```css
table#t01 {
  width: 100%;
  background-color: #f1f1c1;
}
table#t01 tr:nth-child(even) {
  background-color: #eee;
}
table#t01 tr:nth-child(odd) {
  background-color: #fff;
}
table#t01 th {
  color: white;
  background-color: black;
}
```

```html
<table>
  <caption>Monthly savings</caption>
  <thead>
    <tr>
      <th>Month</th>
      <th>Savings</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>January</td>
      <td>$100</td>
    </tr>
    <tr>
      <td>February</td>
      <td>$80</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Sum</td>
      <td>$180</td>
    </tr>
  </tfoot>
</table>
```



## Lists

### Unordered List
The CSS list-style-type property is used to define the style of the list item marker:


- `disc`	Sets the list item marker to a bullet (default)
- `circle`	Sets the list item marker to a circle
- `square`	Sets the list item marker to a square
- `none`	The list items will not be marked


### Ordered List
The type attribute of the `<ol>` tag, defines the type of the list item marker:

  - `type="1"`	The list items will be numbered with numbers (default)
- `type="A"`	The list items will be numbered with uppercase letters
- `type="a"`	The list items will be numbered with lowercase letters
- `type="I"`	The list items will be numbered with uppercase roman numbers
- `type="i"`	The list items will be numbered with lowercase roman numbers

### Control List Counting
use the `start` attribute:

Example
```html
<ol start="50">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>
```

## Iframes
An iframe is used to display a web page within a web page.
```html
<iframe src="demo_iframe.htm" height="200" width="300"></iframe>
```


### Target for a Link
An iframe can be used as the target frame for a link.

The target attribute of the link must refer to the name attribute of the iframe:

```html
<h2>Iframe - Target for a Link</h2>

<iframe height="300px" width="100%" src="demo_iframe.html" name="iframe_a"></iframe>

<p><a href="../index.html" target="iframe_a">W3Schools.com</a></p>

<p>When the target of a link matches the name of an iframe, the link will open in the iframe.</p>
```



## JavaScript
The HTML `<noscript>` Tag
The `<noscript>` tag is used to provide an alternate content for users that have disabled scripts in their browser or have a browser that doesn't support client-side scripts:
```html
<script>
document.getElementById("demo").innerHTML = "Hello JavaScript!";
</script>

<noscript>Sorry, your browser does not support JavaScript!</noscript>
```
> NOTE: Best Practice
It is best practice to use relative file paths (if possible).

When using relative file paths, your web pages will not be bound to your current base URL. All links will work on your own computer (localhost) as well as on your current public domain and your future public domains. 


## `<time>` Tag
The `<time>` tag defines a human-readable date/time.

This element can also be used to encode dates and times in a machine-readable way so that user agents can offer to add birthday reminders or scheduled events to the user's calendar, and search engines can produce smarter search results.



Example
How to define a time and a date:
```html
<p>We open at <time>10:00</time> every morning.</p>

<p>I have a date on <time datetime="2008-02-14 20:00">Valentines day</time>.</p>
```

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

## Encoding (Character Sets)
ASCII was the first character encoding standard aka  character set
- ASCII defined 128 different alphanumeric characters that could be used on the internet: numbers (0-9), English letters (A-Z), and some special characters like ! $ + - ( ) @ < > .
- ISO-8859-1 was the default character set for HTML 4
- ANSI is identical to ISO-8859-1 but it has 32 extra characters.
- Because ANSII and ISO-8859-1 were so limited HTML 4 also supported UTF-8

To display an HTML page correctly, a web browser must know the character set used in the page.

This is specified in the <meta> tag:

```html
<meta charset="UTF-8">
```

> If a browser detects ISO-8859-1 in a web page, it defaults to ANSI.

> The default character-set in HTML5 is UTF-8.

### @charset CSS Rule
You can use the CSS @charset rule to specify the character encoding used in a style sheet:

Example
Set the encoding of the style sheet to Unicode UTF-8:
```css
@charset "UTF-8";
```


## Uniform Resource Locators
A URL is another word for a web address.

A URL can be composed of words (w3schools.com), or an Internet Protocol (IP) address (192.68.20.50).

### URL - Uniform Resource Locator
Web browsers request pages from web servers by using a URL.

A Uniform Resource Locator (URL) is used to address a document (or other data) on the web.

syntax rules:
```
scheme://prefix.domain:port/path/filename
```

### Common URL Schemes
The table below lists some common schemes:

Scheme	Short for	Used for

**http**	- HyperText Transfer Protocol	- Common web pages. Not encrypted
**https** -	Secure HyperText Transfer Protocol -	Secure web pages. Encrypted
**ftp**-	File Transfer Protocol -	Downloading or uploading files
**file** - A file on your computer


### URL Encoding
**URLs can only be sent over the Internet using the ASCII character-set**. If a URL contains characters outside the ASCII set, the URL has to be converted.

URL encoding converts non-ASCII characters into a format that can be transmitted over the Internet.

> URL encoding replaces non-ASCII characters with a "%" followed by hexadecimal digits.

URLs cannot contain spaces. URL encoding normally replaces a space with a plus (+) sign, or %20.


## XHTML
XHTML is HTML written as XML.
- XHTML stands for EXtensible HyperText Markup Language
- XHTML is stricter than HTML
- XHTML is HTML defined as an XML application

### Why XHTML?
Many pages on the internet contain "bad" HTML.

This HTML code works fine in most browsers (even if it does not follow the HTML rules):

```html
<html>
<head>
  <title>This is bad HTML</title>

<body>
  <h1>Bad HTML
  <p>This is a paragraph
</body>
```

> XML is a markup language where documents must be marked up correctly (be "well-formed").

### The Most Important Differences from HTML:
1. Document Structure
- XHTML DOCTYPE is mandatory
```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">

<head>
  <title>Title of document</title>
</head>

<body>
  some content
</body>

</html>
```
- The xmlns attribute in <html> is mandatory 

- `<html>`, `<head>`, `<title>`, and `<body>` are mandatory



1. XHTML Elements
- XHTML elements must be properly nested
```html
In HTML, some elements can be improperly nested within each other, like this:
<b><i>This text is bold and italic</b></i>


In XHTML, all elements must be properly nested within each other, like this:
<b><i>This text is bold and italic</i></b>
```

- XHTML elements must always be closed
```html
This is wrong:
<p>This is a paragraph
<p>This is another paragraph

This is correct:
<p>This is a paragraph</p>
<p>This is another paragraph</p>
```

- XHTML elements must be in lowercase
```html
This is wrong:
A break: <br>
A horizontal rule: <hr>
An image: <img src="happy.gif" alt="Happy face">

This is correct:
A break: <br />
A horizontal rule: <hr />
An image: <img src="happy.gif" alt="Happy face" />
```

- XHTML documents must have one root element
- 
  
3. XHTML Attributes
- Attribute names must be in lower case
```html
This is wrong:
<BODY>
<P>This is a paragraph</P>
</BODY>

This is correct:
<body>
<p>This is a paragraph</p>
</body>
```


- Attribute values must be quoted
```html
This is wrong:

<table width=100%>

This is correct:

<table width="100%">
```

- Attribute minimization is forbidden
```html
Wrong:
<input type="checkbox" name="vehicle" value="car" checked />

Correct:
<input type="checkbox" name="vehicle" value="car" checked="checked" />

Wrong:
<input type="text" name="lastname" disabled />

Correct:
<input type="text" name="lastname" disabled="disabled" />
```


## Forms 

### Radio Button Input
`<input type="radio">` defines a radio button.


Example
```html
<form>
  <input type="radio" name="gender" value="male" checked> Male<br>
  <input type="radio" name="gender" value="female"> Female<br>
  <input type="radio" name="gender" value="other"> Other
</form>
```

### Grouping Form Data with `<fieldset>`
The `<fieldset>` element is used to group related data in a form.

The `<legend>` element defines a caption for the `<fieldset>` element.

Example
```html
<form action="/action_page.php">
  <fieldset>
    <legend>Personal information:</legend>
    First name:<br>
    <input type="text" name="firstname" value="Mickey"><br>
    Last name:<br>
    <input type="text" name="lastname" value="Mouse"><br><br>
    <input type="submit" value="Submit">
  </fieldset>
</form>
```

### Form attributes
Here is the list of all <form> attributes:

Attribute	Description

- **accept-charset**	Specifies the charset used in the submitted form (default: the page charset).
- **action**	Specifies an address (url) where to submit the form (default: the submitting page).
- **autocomplete**	Specifies if the browser should autocomplete the form (default: on).
- **enctype**	Specifies the encoding of the submitted data (default: is url-encoded).
- **method**	Specifies the HTTP method used when submitting the form (default: GET).
- **name**	Specifies a name used to identify the form (for DOM usage: document.forms.name).
- **novalidate**	Specifies that the browser should not validate the form.
- **target**	Specifies the target of the address in the action attribute (default: _self).

### Form Elements
#### The <select> Element
The `<select>` element defines a drop-down list:

Example
```html
<select name="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="fiat">Fiat</option>
  <option value="audi">Audi</option>
</select>
```


To define a pre-selected option, add the selected attribute to the option:

Example
```html
<option value="fiat" selected>Fiat</option>
```

Visible Values:
Use the size attribute to specify the number of visible values:

Example
```html
<select name="cars" size="3">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="fiat">Fiat</option>
  <option value="audi">Audi</option>
</select>
```

Allow Multiple Selections:
Use the multiple attribute to allow the user to select more than one value:

Example
```html
<select name="cars" size="4" multiple>
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="fiat">Fiat</option>
  <option value="audi">Audi</option>
</select>
```

The `<textarea>` Element
The `<textarea>` element defines a multi-line input field (a text area):

Example
```html
<textarea name="message" rows="10" cols="30">
The cat was playing in the garden.
</textarea>
```

#### HTML5 <datalist> Element
The `<datalist>` element specifies a list of pre-defined options for an `<input>` element.

Users will see a drop-down list of the pre-defined options as they input data.

The list attribute of the `<input>` element, must refer to the id attribute of the `<datalist>` element.

OperaSafariChromeFirefoxInternet Explorer
Example
```html
<form action="/action_page.php">
  <input list="browsers">
  <datalist id="browsers">
    <option value="Internet Explorer">
    <option value="Firefox">
    <option value="Chrome">
    <option value="Opera">
    <option value="Safari">
  </datalist>
</form>
```


#### HTML5 <output> Element
The `<output>` element represents the result of a calculation (like one performed by a script).

Example
Perform a calculation and show the result in an `<output>` element:

```html
<form action="/action_page.php"
  oninput="x.value=parseInt(a.value)+parseInt(b.value)">
  0
  <input type="range"  id="a" name="a" value="50">
  100 +
  <input type="number" id="b" name="b" value="50">
  =
  <output name="x" for="a b"></output>
  <br><br>
  <input type="submit">
</form>
```

### Input types
HTML Input Types
Here are the different input types you can use in HTML:
New input types that are not supported by older web browsers, will behave as `<input type="text">`.

```html
<input type="button">
<input type="checkbox">
<input type="color">
<input type="date">
<input type="datetime-local">
<input type="email">
<input type="file">
<input type="hidden">
<input type="image">
<input type="month">
<input type="number">
<input type="password">
<input type="radio">
<input type="range">
<input type="reset">
<input type="search">
<input type="submit">
<input type="tel">
<input type="text">
<input type="time">
<input type="url">
<input type="week">
```

#### Input Restrictions
Here is a list of some common input restrictions:

Attribute	Description
- **checked**	Specifies that an input field should be pre-selected when the page loads (for type="checkbox" or type="radio")
- **disabled**	Specifies that an input field should be disabled
- **max**	Specifies the maximum value for an input field
- **maxlength**	Specifies the maximum number of character for an input field
- **min**	Specifies the minimum value for an input field
- **pattern**	Specifies a regular expression to check the input value against
- **readonly**	Specifies that an input field is read only (cannot be changed)
- **required**	Specifies that an input field is required (must be filled out)
- **size**	Specifies the width (in characters) of an input field
- **step**	Specifies the legal number intervals for an input field
- **value**	Specifies the default value for an input field


```html
Telephone: <input type="tel" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required>
<input type="submit">
<span>Format: 123-45-678</span>
```

### HTML5 Attributes
HTML5 added the following attributes for <input>:

- autocomplete
- autofocus
The autofocus attribute specifies that the input field should automatically get focus when the page loads.

Example
Let the "First name" input field automatically get focus when the page loads:
```html
First name:<input type="text" name="fname" autofocus>
```

- form
The form Attribute
The form attribute specifies one or more forms an `<input>` element belongs to.

Example
An input field located outside the HTML form (but still a part of the form):
```html
<form action="/action_page.php" id="form1">
  First name: <input type="text" name="fname"><br>
  <input type="submit" value="Submit">
</form>

Last name: <input type="text" name="lname" form="form1">
```


- formaction
The formaction Attribute
The formaction attribute specifies the URL of a file that will process the input control when the form is submitted.

The formaction attribute overrides the action attribute of the `<form>` element.

The formaction attribute is used with type="submit" and type="image".
```html
<form action="/action_page.php">
  First name: <input type="text" name="fname"><br>
  Last name: <input type="text" name="lname"><br>
  <input type="submit" value="Submit"><br>
  <input type="submit" formaction="/action_page2.php"
  value="Submit as admin">
</form>
```


- formenctype
The formenctype Attribute
The formenctype attribute specifies how the form data should be encoded when submitted (only for forms with method="post").

The formenctype attribute overrides the enctype attribute of the `<form>` element.

The formenctype attribute is used with type="submit" and type="image".

OperaSafariChromeFirefoxInternet Explorer
Example
Send form-data that is default encoded (the first submit button), and encoded as "multipart/form-data" (the second submit button):

```html
<form action="/action_page_binary.asp" method="post">
  First name: <input type="text" name="fname"><br>
  <input type="submit" value="Submit">
  <input type="submit" formenctype="multipart/form-data"
  value="Submit as Multipart/form-data">
</form>
```


- formmethod
The formmethod Attribute
The formmethod attribute defines the HTTP method for sending form-data to the action URL.

The formmethod attribute overrides the method attribute of the `<form>` element.

The formmethod attribute can be used with type="submit" and type="image".
```html
The second submit button overrides the HTTP method of the form:

<form action="/action_page.php" method="get">
  First name: <input type="text" name="fname"><br>
  Last name: <input type="text" name="lname"><br>
  <input type="submit" value="Submit">
  <input type="submit" formmethod="post" value="Submit using POST">
</form>
```


- formnovalidate
The formnovalidate attribute overrides the novalidate attribute of the `<form>` element.

The formnovalidate attribute can be used with type="submit".
```html
A form with two submit buttons (with and without validation):

<form action="/action_page.php">
  E-mail: <input type="email" name="userid"><br>
  <input type="submit" value="Submit"><br>
  <input type="submit" formnovalidate value="Submit without validation">
</form>
```


- formtarget
```html
<form action="/action_page.php">
  First name: <input type="text" name="fname"><br>
  Last name: <input type="text" name="lname"><br>
  <input type="submit" value="Submit as normal">
  <input type="submit" formtarget="_blank"
  value="Submit to a new window">
</form>
```
- height and width
The height and width attributes specify the height and width of an `<input type="image">` element.
```html
<input type="image" src="img_submit.gif" alt="Submit" width="48" height="48">
```


- list (not supported by safari)
```html
An <input> element with pre-defined values in a <datalist>:

<input list="browsers">

<datalist id="browsers">
  <option value="Internet Explorer">
  <option value="Firefox">
  <option value="Chrome">
  <option value="Opera">
  <option value="Safari">
</datalist>
```

  
- min and max
The min and max attributes specify the minimum and maximum values for an `<input>` element.

The min and max attributes work with the following input types: number, range, date, datetime-local, month, time and week.
```html
<input> elements with min and max values:

Enter a date before 1980-01-01:
<input type="date" name="bday" max="1979-12-31">

Enter a date after 2000-01-01:
<input type="date" name="bday" min="2000-01-02">

Quantity (between 1 and 5):
<input type="number" name="quantity" min="1" max="5">

```


- multiple
Example
```html

A file upload field that accepts multiple values:

Select images: <input type="file" name="img" multiple>
```


- pattern (regexp)
The pattern attribute specifies a regular expression that the `<input>` element's value is checked against.

The pattern attribute works with the following input types: text, search, url, tel, email, and password.

An input field that can contain only three letters (no numbers or special characters):
```html


Country code: <input type="text" name="country_code" pattern="[A-Za-z]{3}" title="Three letter country code">

```


- placeholder 
```html
An input field with a placeholder text:

<input type="text" name="fname" placeholder="First name">
```


- required
```html
Username: <input type="text" name="usrname" required>
```

- step
The step attribute specifies the legal number intervals for an <input> element.

Example: if step="3", legal numbers could be -3, 0, 3, 6, etc.

Tip: The step attribute can be used together with the max and min attributes to create a range of legal values.

The step attribute works with the following input types: number, range, date, datetime-local, month, time and week.

```html
An input field with a specified legal number intervals:

<input type="number" name="points" step="3">
```



- autocomplete
```html
<form action="https://www.w3schools.com/action_page.php" autocomplete="on">
  First name:<input type="text" name="fname"><br>
  Last name: <input type="text" name="lname"><br>
  E-mail: <input type="email" name="email" autocomplete="off"><br>
  <input type="submit">
</form>
```


- novalidate

## progress
```html
Downloading progress:
<progress value="50" max="100" style="">
</progress>
```

## Meter
```html
<p>Display a gauge:</p>
<meter value="2" min="0" max="10">2 out of 10</meter><br>
<meter value="0.8">80%</meter>
```


## Main
The <main> tag specifies the main content of a document.

The content inside the <main> element should be unique to the document. It should not contain any content that is repeated across documents such as sidebars, navigation links, copyright information, site logos, and search forms.

Note: There must not be more than one <main> element in a document. The <main> element must NOT be a descendant of an <article>, <aside>, <footer>, <header>, or <nav> element.
```html
<main>
  <h1>Web Browsers</h1>
  <p>Google Chrome, Firefox, and Internet Explorer are the most used browsers today.</p>

  <article>
    <h1>Google Chrome</h1>
    <p>Google Chrome is a free, open-source web browser developed by Google,
    released in 2008.</p>
  </article>

  <article>
    <h1>Internet Explorer</h1>
    <p>Internet Explorer is a free web browser from Microsoft, released in 1995.</p>
  </article>

  <article>
    <h1>Mozilla Firefox</h1>
    <p>Firefox is a free, open-source web browser from Mozilla, released in 2004.</p>
  </article>
</main>
```






## HTML5 
### What is New in HTML5?
The DOCTYPE declaration for HTML5 is very simple:
`<!DOCTYPE html>`

The character encoding (charset) declaration is also very simple:
`<meta charset="UTF-8">`

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Title of the document</title>
</head>

<body>
Content of the document......
</body>

</html>
```

### New HTML5 Elements
The most interesting new HTML5 elements are: 

- New **semantic elements** like `<header>`, `<footer>`, `<article>`, and `<section>`.
```html
<article>	Defines an article in a document
<aside>	Defines content aside from the page content
<bdi>	Isolates a part of text that might be formatted in a different direction from other text outside it
<details>	Defines additional details that the user can view or hide
<dialog>	Defines a dialog box or window
<figcaption>	Defines a caption for a <figure> element
<figure>	Defines self-contained content
<footer>	Defines a footer for a document or section
<header>	Defines a header for a document or section
<main>	Defines the main content of a document
<mark>	Defines marked/highlighted text
<meter>	Defines a scalar measurement within a known range (a gauge)
<nav>	Defines navigation links
<progress>	Represents the progress of a task
<rp>	Defines what to show in browsers that do not support ruby annotations
<rt>	Defines an explanation/pronunciation of characters (for East Asian typography)
<ruby>	Defines a ruby annotation (for East Asian typography)
<section>	Defines a section in a document
<summary>	Defines a visible heading for a <details> element
<time>	Defines a date/time
<wbr> Defines a possible line-break
```



- New **attributes of form elements** like number, date, time, calendar, and range.
```
<datalist>	Specifies a list of pre-defined options for input controls
<output>	Defines the result of a calculation
```

New Input Types	
```
date
datetime
datetime-local
email
month
number
range
search
tel
time
url
week
color
```

New Input Attributes
```
autocomplete
autofocus
form
formaction
formenctype
formmethod
formnovalidate
formtarget
height and width
list
min and max
multiple
pattern (regexp)
placeholder
required
step
```


- New Attribute Syntax
HTML5 allows four different syntaxes for attributes.

This example demonstrates the different syntaxes used in an `<input>` tag:

Type	Example
```html
Empty	<input type="text" value="John" disabled>
Unquoted	<input type="text" value=John>
Double-quoted	<input type="text" value="John Doe">
Single-quoted	<input type="text" value='John Doe'>
```


- New **graphic element**s: `<svg>` and `<canvas>`.
```html
<canvas>	Draw graphics, on the fly, via scripting (usually JavaScript)
<picture>	Defines a container for multiple image resources
<svg>	Draw scalable vector graphics
```


- New **multimedia elements**: `<audio>` and `<video>`.
```html
<audio>	Defines sound content
<embed>	Defines a container for an external (non-HTML) application
<picture>	Defines a container for multiple image resources
<source>	Defines multiple media resources for media elements (<video> and <audio>)
<track>	Defines text tracks for media elements (<video> and <audio>)
<video>	Defines video or movie
```



### New HTML5 APIs (Application Programming Interfaces)
The most interesting new APIs in HTML5 are:

- HTML Geolocation
- HTML Drag and Drop
- HTML Local Storage
- HTML Application Cache
- HTML Web Workers
- HTML SSE

> Tip: HTML Local storage is a powerful replacement for cookies.


### Removed Elements in HTML5
The following HTML4 elements have been removed in HTML5:

```html
Removed Element	Use Instead
<acronym>	- use <abbr>
<applet>	use <object> instead
<basefont>	use CSS instead
<big>	use CSS instead
<center>	use CSS instead
<dir>	use <ul> instead
<font>	use CSS instead
<frame>	 
<frameset>	 
<noframes>	 
<strike>	use CSS, <s>, or <del> instead
<tt>	use CSS instead
```


## Semantic Elements
Semantics is the study of the meanings of words and phrases in a language.

Semantic elements = elements with a meaning.

What are Semantic Elements?
A semantic element clearly describes its meaning to both the browser and the developer.

Examples of non-semantic elements: `<div>` and `<span>` - Tells nothing about its content.

Examples of semantic elements: `<form>`, `<table>`, and `<article>` - Clearly defines its content.


> HTML5 semantic elements are supported in all modern browsers.


### New Semantic Elements in HTML5
Many web sites contain HTML code like: <div id="nav"> <div class="header"> <div id="footer">
to indicate navigation, header, and footer.

HTML5 offers new semantic elements to define different parts of a web page:  

```html
<article>
<aside>
<details>
<figcaption>
<figure>
<footer>
<header>
<main>
<mark>
<nav>
<section>
<summary>
<time>
```


### Section
Defines a section in a document.

According to W3C's HTML5 documentation: "A section is a thematic grouping of content, typically with a heading."

```html
<section>
  <h1>WWF</h1>
  <p>The World Wide Fund for Nature (WWF) is....</p>
</section>

<section>
  <h1>IDK</h1>
  <p>The World Wide Fund for Nature (IDK) is....</p>
</section>
```


### Article
The `<article>` element specifies independent, self-contained content.

An article should make sense on its own, and it should be possible to read it independently from the rest of the web site.

Examples of where an `<article>` element can be used:

- Forum post
- Blog post
- Newspaper article

Example
```html
<article>
  <h1>What Does WWF Do?</h1>
  <p>WWF's mission is to stop the degradation of our planet's natural environment,
  and build a future in which humans live in harmony with nature.</p>
</article>
```
One may Nest `<article>` in `<section>` or Vice Versa?
The `<article>` element specifies independent, self-contained content.

The `<section>` element defines section in a document.

Example for a newspaper: The sport `<article>` in the sport section, may have a technical section in each `<article>`.


### Header
The `<header>` element specifies a header for a document or section.

The `<header>` element should be used as a container for introductory content.

You can have several `<header>` elements in one document.

```html
<article>
  <header>
    <h1>What Does WWF Do?</h1>
    <p>WWF's mission:</p>
  </header>
  <p>WWF's mission is to stop the degradation of our planet's natural environment,
  and build a future in which humans live in harmony with nature.</p>
</article>
```


### footer
The `<footer>` element specifies a footer for a document or section.

A footer typically contains the author of the document, copyright information, links to terms of use, contact information, etc.

```html
<footer>
  <p>Posted by: Hege Refsnes</p>
  <p>Contact information: <a href="mailto:someone@example.com">
  someone@example.com</a>.</p>
</footer>
```


### nav
The `<nav>` element defines a set of navigation links.
```html
<nav>
  <a href="/html/">HTML</a> |
  <a href="/css/">CSS</a> |
  <a href="/js/">JavaScript</a> |
  <a href="/jquery/">jQuery</a>
</nav>
```


### aside
The `<aside>` element defines some content aside from the content it is placed in (like a sidebar).
```html
<p>My family and I visited The Epcot center this summer.</p>

<aside>
  <h4>Epcot Center</h4>
  <p>The Epcot Center is a theme park in Disney World, Florida.</p>
</aside>
```

### Why Semantic Elements?
With HTML4, developers used their own id/class names to style elements: header, top, bottom, footer, menu, navigation, main, container, content, article, sidebar, topnav, etc.

This made it impossible for search engines to identify the correct web page content.

With the new HTML5 elements (`<header> <footer> <nav> <section> <article>`), this will become easier.

According to the W3C, a Semantic Web: "Allows data to be shared and reused across applications, enterprises, and communities."



## HTML5 Migration
Typical HTML4
```html
<div id="header">	
<div id="menu">	
<div id="content">	
<div class="article">	
<div id="footer">	
```

Typical HTML5
```html
<header>
<nav>
<section>
<article>  
<footer>
```

### The Difference Between <article> <section> and <div>
There is a confusing (lack of) difference in the HTML5 standard, between `<article>` `<section>` and `<div>`.

In the HTML5 standard, the `<section>` element is defined as a block of related elements.

The `<article>` element is defined as a complete, self-contained block of related elements.

The `<div>` element is defined as a block of children elements.

How to interpret that?

In the example above, we have used `<section>` as a container for related `<article>`.

But, we could have used `<article>` as a container for articles as well.




## tabindex atribute  (Make an element focusable + via tab button)
To make any element focusable. Set tabindex attribute to the element. 

```html 
<p>Click anywhere in this pane, then try tabbing through the elements.</p>
<label>First in tab order:<input type="text" /></label>
<div tabindex="0">Tabbable due to tabindex.</div>
<div>Not tabbable: no tabindex.</div>
<label>Third in tab order:<input type="text" /></label>
``` 


It accepts an integer as a value, with different results depending on the integer's value: 

1. A negative value (the exact negative value doesn't actually matter, usually tabindex="-1") means that the element is not reachable via sequential keyboard navigation. 

> Note: tabindex="-1" may be useful for elements that should not be navigated to directly using the Tab key, but need to have keyboard focus set to them. Examples include an off-screen modal window that should be focused when it comes into view, or a form submission error message that should be immediately focused when an errant form is submitted.

2. tabindex="0" means that the element should be focusable in sequential keyboard navigation. 

3. A positive value means the element should be focusable in sequential keyboard navigation, with its order defined by the value of the number. That is, tabindex="4" is focused before tabindex="5" and tabindex="0", but after tabindex="3". If multiple elements share the same positive tabindex value, their order relative to each other follows their position in the document source. The maximum value for tabindex is 32767.

4. If the tabindex attribute is included with no value set, whether the element is focusable is determined by the user agent.


**Accessibility concerns**
Avoid using the tabindex attribute in conjunction with non-interactive content to make something intended to be interactive focusable by keyboard input. An example of this would be using a `<div>` element to describe a button, instead of the `<button>` element.

Interactive components authored using non-interactive elements are not listed in the accessibility tree. This prevents assistive technology from being able to navigate to and manipulate those components. The content should be semantically described using interactive elements (`<a>`, `<button>`, `<details>`, `<Input>`, `<select>`, `<textarea>`, etc.) instead. These elements have built-in roles and states that communicate status to the accessibility that would otherwise have to be managed by ARIA. 





## contenteditable (attribute)
Make an elements content editable. 
```html 
<blockquote contenteditable="true">
  <p>Edit this content to add your own quote</p>
</blockquote>
<cite contenteditable="true">-- Write your own name here</cite>
``` 

The attribute must take one of the following values:
- true or an empty string, which indicates that the element is editable.
- false, which indicates that the element is not editable.
- plaintext-only, which indicates that the element's raw text is editable, but rich text formatting is disabled.  


If the attribute is given without a value, like `<label contenteditable>Example Label</label>`, its value is treated as an empty string.

If this attribute is missing or its value is invalid, its value is inherited from its parent element: so the element is editable if its parent is editable.

Note that although its allowed values include true and false, this attribute is an enumerated one and not a Boolean one.

You can set the color used to draw the text insertion caret with the CSS caret-color property.



### Using contentEditable  in JavaScript
```js 
Elem.contentEditable = true
```

### Checking if content is editable in JavaScript
```js 
let status = Elem.isContentEditable
```