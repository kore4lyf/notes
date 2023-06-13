# Introduction to WEB and HTML

## 1.Meet Your Instructors
- Karl Krueger - Site Reliability Engineer (SRE) at Google for eight years (building automation and monitoring to keep the world's busiest web services online).
- Kelly Howard - non CS student
- Abe Feinberg - Non  CS student, Udacity course graduate, worked in siloicon valley.

## 2.Course (section) Outline
This course is divided into four parts. Here's a brief outline so you'll know what to expect:

1. The Web and HTML
2. Lab: Basic HTML Page
3. Intro to CSS
4. Project: Animal Trading Cards

## 3. Introduction to the Web and HTML
> Take notes on:
The Web. 
Tools for Editing. 
HTML. 
URLs. 

- HTML Stand for Hyper Text Markup Language.
- HTML Is the main language that we use to write web pages.


## Web Pages and Servers
- A browser gets web pages by communicating with servers over the internet.
- Servers are computers that have programs running on them which answer a browser’s requests.

> HTML is the language that provudes the structure and text of web pages.

- When you type udacity.com into your browser, your browser communicates with Udacity's server using HTTP (or HTTPS).
- Udacity's web server returns an HTML file to your browser.
- Based on information contained in the HTML, your browser requests other files from Udacity's web server and from other web servers.
- The difference between addresses with http: and https: is whether the browser uses encryption to keep your data private (the S stands for Secure).

## HTML PROGRAMMING
Concepts to watch out for:
- **Syntax**. Grammar rules of a computer language.
- **Formalism**. Computers take code literally, and will only do exactly what you tell it to do.
- **Nesting**. Bits of code going inside other bits of code in an orderly way.
- There's a lot of help! Make sure to use tools like documentation, or your favorite search engine if you need to.
> The Mozilla Developer Network is a major resource for web developers. Find it here:
[developer.mozilla.org](https://developer.mozilla.org/)

## Breaks and Empty Elements
when the browser renders HTML all white spaces are collapsed into a single space.
**<br>** (aka line break) can be added to the text to break lone where ever it os necessary. `<br>` is a **void element** or an **empty element** i.e An HTML element with no contents and no closing tag.

## Paragraphs
Each Paragraphs are seperated from other elements or text by a little margin.
A line breaks are used for adding line breaks to poems, but when you want to write an article, story or an essay its better to use paragraphs because each piece of the writting is splitted into paragraphs.
`<p> content </p>`

## Typographic elements
`<mark> </mark>` - for high lighting text.
`<sub> </sub>` and `<sup> </sup>` - jheh

## Nesting
Elements can be with another element.
e.g 
```html 
<p>
  These are some 
  <em>important</em>
  words.
</p>
```
You can have a text that is both emphasizee and highligted. 
```html 
<mark><em>important</em></mark>
```
- Elements cannot overlap, one has to go into the other.

## Headings
Heading elements can be used for headlines, or section headings. There are actually six of these heading elements: h1 through h6.
```
<h1> I'm an h1 heading</h1>

<h2>I'm an h2 heading</h2>

<h3>I'm an h3 heading</h3>

<h4>I'm an h4 heading</h4>

<h5> I'm an h5 heading</h5>

<h6> I'm an h6 heading</h6>
```
h1 is used for the main heading on a page, while the rest are used for subheadings. We use a smaller heading to show that one section is inside another section.

In contrast, if one section simply comes after the other then we use the same level of heading.
Just like with the p element, heading elements create a little bit of space (margin) around themselves.

## Lists 
Types of Lists
1. Ordered list
```html
<ol>
  <li> Lettuce </li>
  <li> Tomatoes </li>
</ol>
```
2. Unordered list
```html 
<ul>
  <li> Lettuce </li>
  <li> Tomatoes </li>
</ul>
```
HTML does not require us to write closing tags for `<li>` because they cannot be embedded in each other.


## Block and Inline Elements
Block-level element occupies the entire horizontal space of its parent element (container), and vertical space equal to the height of its contents, thereby creating a "block".
eg <ul>, <diV> etc
- Block-level elements begin on new lines, but inline elements can start anywhere in a line.

- Implied Tags 
A list `<li>` tag does not require a closing tag, and this is because a list tag cannot be nested in another list tag. 
A paragraph `<p>` tag does not alsp require a closing tag.

> An Unordered list tag requires an opening and closing tag, but a list tag does not require a closing tag, and this is because a list tag cannot nested in another list tag.
A paragraph does not also require a closing tag.

> Without the closing paragrapgh tag, the browser will still close the element automatically—but not until it sees the next p element starting. So all of the text up until that point gets included in the contents of the blue p element.

> Why doesn't the br element require a closing tag? because it doesn't have a content.

## Web addresses
- https://www.simons-rock.edu is a fully qualified URL that takes you to the main page of a web site.

- github.com is not a fully qualified URL. It's something you can type into your browser, but you can't use it in HTML … unless what you meant was "a file called github.com in the same directory as this HTML file", which you probably didn't.

http:///Users/karl/index.html is a mess! It's an http URL, but it doesn't have a domain name on it. The browser won't know what to do with this since it's http, but there's no server to connect to!

And file:///home/kelly/photos/Scotland1.jpg is a perfectly fine file URL for referring to a file on your own computer ... if you happen to be Kelly on a Linux computer. But keep in mind, if you give a file:// URL to someone else, they probably can't access it because they don't have that file in the exact same location.

For Example:
<a href="https://github.com/">GitHub</a>

## Adding Image
<img src="https://placebear.com/800/600" alt="Bear">

## Image Placeholder
Sometimes when you're working on a Web page, you don't know what images you're going to use, but you still want a picture to use as a place holder.

Websites like placebear.com and placekitten.com are designed to make this super easy. All you have to do to get an image of any given size is put the width and height of the image at the end of the URL, as in https://placebear.com/200/300.

If you enjoyed playing with those, you can find other similar sites by doing a search for "image placeholder" and you'll find that there are gazillions more of them out there—like Lorem Picsum and FillMurray.com

## DOCTYPE
html5 doctype tag `<DOCTYPE html>`
Every HTML document requires the DOCTYPE tag. Tells the browser treat the browser as a mordern HTML or a particular version. Without the DOCTYPE tag, the browser will enter quirks mode, so that your code can be compatable with older forms of HTML.

**Quirks Mode**: quirks mode is a technique used by some web browsers for the sake of maintaining backward compatibility with web pages designed for old web pages designed for old web browsers instead of strictly complying with W3C and IETF standards in standards mode.

`<html lang='en'>` - used to specify the language the document is written in (english, french etc). Used by programs such as screen readers for visually impared people.

The head of an html document can contain - title, style, script and meta data `<meta name="descrption" content="Notes on HTML">`.
> The title is the only required part of the head tag.

## Validating HTML

[Validator](https://validator.w3.org)
- Put a URL
- Upload the file
- Paste code





