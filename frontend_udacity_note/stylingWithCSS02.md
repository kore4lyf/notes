# STYLING Styling CSS

## Introduction
CSS - Cascading Style Sheets(CSS)
is a language for describing the visual appearance if web pages, including properties such as their layout, colors and fonts. 

## Developer Tools
Allows you to inspect HTML elements and their css properties including javascript codes.
**Google Chrome** - 
Open the Chrome menu at the top right of the browser window (the three vertical dots) and **select Tools > Developer Tools**.
You can also simply right-click on any page element and select Inspect or ** CTRL + SHIFT + I **.

## Text to Trees
Every thing on a webpage can described in the form of a tree structure. 
The tree structure the browser builds out if a web page is called the **DOM (Document Object Model)**. The DOM has a tree structure for each HTML element.

## Tree Structure 
A tree is not a diagram, it's a data structure a way that information can be organized.
- A tree is made up of parts called the nodes and the connection between them called branches.
- A tree always have a root. In the case of a web documenr, the root is the html element. The nodes that decends from  the html element are the child node (e.g. head and body). We can also say that html element is a parent to the body element.

##### Ruls for Trees
1. A tree has a root node.
2. Each node can have branches that lead to other nodes (its children).
3. Each node has only one parent (except the root).

when you inspect you HTML Code on a browser you will notice that some missing closed tags in your original code can be seen. This is because a new cide is being generated tmfrom the DOM tree.

## Trees to Boxes
HTML -> Tree structure -> Boxes (with margin, border and padding)

## Styling HTML Directly
The first way is to use the style attribute to apply style directly to an HTML element. The problem with this approach is that it's repetitious.
```html
<p style="color: blue">I'm blue</p>
```

The second way is to use the style element along with a ruleset.
```html 
<style>
  p { color: blue }
</style>
<p>I'm blue!</p>
```
Note that when we only have one property, the semicolon is optional—we can either include it or not and it won't make a difference. In other words, we can do this:
```html 
<p style="color: blue;">Hello world!</p>
<!--Or this:-->
<p style="color: blue">Hello world </p>
```
But in the case below you must add a semi colomn:
```html 
<p style="color: blue; text-align: center;">Hello world!</p>
```

When you are writting an inline style **with out puting the style within a quote, only the first attribute will if there is a list of attributes except there is no space between each attribute. If there a space the rest of the attribute will be assumed to be an html attribute just like href or style.

## CSS Syntax
##### CSS Rulesets
A CSS ruleset is made up of **a selector and a declaration block**.

##### Selectors
Selectors indicate which HTML elements the ruleset will apply to. For example, consider this ruleset:
```css
li {
  color: green;
}
```
In this example, li is the selector—meaning that whatever we put between the curly braces { } will be applied to all list item li elements on the page.

##### Declaration Blocks
A declaration block describes how the ruleset will modify the elements. In the above example, the declaration block is saying that all li elements will be modified by changing their font colors to green.

A declaration block can have multiple declarations inside of it. For example, consider this ruleset:
```c
p {
  background-color: blue;
  font-size: 20px; 
}
```
The declaration block is everything other than the selecter p:
```c
{
  background-color: blue;
  font-size: 20px; 
}
```
And this declaration block contains two individual declarations. One is:
background-color: blue;
And the other is
font-size: 20px;

##### Properties and Values
You can break the syntax of a declaration down even further. A declaration is made up of a property and a value. For example, in this declaration…
```css
background-color: blue;
```
…the property would be background-color and the value would be blue.


## Selectors: Type
##### CSS Selectors
CSS selector. Tell the browser which elements the rule will affect.

##### CSS Selectors: Type
One example of a type of CSS selector is called type. If you want to use type selector to style all h1 elements, this is how you would write your CSS:

h1 {
   font-family: serif;
}
e.g p, em, body
type selector is useful for adding style widely accross a webpage.

## CSS Selectors: Class and ID
The distinction between a class and an ID can be a bit confusing.

##### Class
A class is a group of things with the same characteristics. To create a class, you need to use the attribute "class" in the HTML opening tag. Then in your CSS, you use the same name you gave the class attribute in your HTML, except you place a . in front of it.

##### Example:
```html
<div class="container">
    <p> I'm inside a container! </p>
</div>
```

```css 
//CSS 
.container {
   border: 1px solid black; 
}
``` 

#####ID
An ID is when you'd apply characteristics to one element. To create an ID, you need to use the attribute id in the HTML opening tag. Then in your CSS, you use the same name you gave the id attribute in your HTML, except you place a # in front of it.

#### Example:

```html
<h1 id="main-heading"> Welcome to My Page! </h1>
```
```css
//CSS 
#main-heading {
   background-color: orange;
}
```
> If you want to apply a style to more than one element, you should always use a class. You should only use an ID to style one element. IDs are unique.


## What's So "Cascading" About CSS?
##### Cascading and Specificity
The term "cascading" in Cascading Style Sheets refers to the way that style properties "cascade" down the DOM tree, starting at the top. A style applied to the body element will affect the entire document. A style applied to a lower-level element will affect that element and all its descendants.
A style applied at a lower level can override a style at a higher level. For instance, if the body has color: red but a paragraph within the body has color: blue, the blue will apply to that paragraph and to any elements inside it.

## Units
px - pixel 
A pixel is a single dot of color on your screen, but computer dont have the same pixels e.g. Resolution of a desktop computer can be 2800 x 1800 and that of a mobile can be 630 x 1136.

1 inch = 96 pixels
therefore 1 cm = 37.8 pixels

pt - points
points are used for font-size.
72 pt = 1 inch 

##### NB
```css
p { font_size: 12pt }
/* 1em = 12pt */

li { font-size: 18pt}
/* 1em = 18pt */
```
this was the normal setting when css was being standardized.

## Boxes
div
**It's used to divide up the page**. The name div is short for division, because that's what this element is for—you can use it to divide up the page into different sections.

**It has an "invisible box" around it**. Like the paragraph p element, the division div element has an invisible box around it—and just like p, it can have a border, a margin, a width, a height, and so on.

**It is a generic container**. A p element is specifically meant to contain text. In contrast, the div

## Fonts
##### Font vs Typeface 
Technically, "Times New Roman" is not a font—it is a typeface. Font Families
Another term we can use for a typeface (or group of related fonts) is a font family. That's the term that CSS uses.

In other words, to change the typeface of our text, we can use the font-family property. Like this:
```css
font-family: Helvetica;
```
Or here's another example:
```css
font-family: "Times New Roman";
```
If you include multiple fonts in font-family, css will try to access them in the order that they were listed. If the first font family is found by css the remaining ones are ignored, or if it's can't be found it move to the next font family until it find the one that is accessible to the computer, but if none of the listed font family is accessible it uses browser default.
Fonts are listed in the font-family value in such a way that the last typeface in the list is font types such as 
- serif
- sans-serif
- cursive
- fantasy
- monospace
So if css can find the listed font before the last font on the list. The last item in the list, is used to tell css to select any typeface of a font type that is accessible to the computer. 
EXAMPLE:
```css
p {font-family: Constantia, Georgia, serif;} 
```

There is a css property called font that lets you style multiple propertice of a font.
{font: font-style font-variant, font-weight, font-size, line-height font-family;}

EXAMPLE: font shorthand
```css
p { font: bold 14pt Georgia, serif;}
```

##### Generic Font Families
That's where generic font families come in. There are five, each named for a general kind of typeface:
- Serif
- Sans-serif
- Cursive
- Fantasy
- Monospace

##### Font Stacks
Since we don't know what font will be available to each user, it's a good idea to give multiple options. CSS allows us to do this by using a font stack, like this:
`font-family: Courier, "Courier New";`
A common (and very good) practice is to put the generic font family at the end of the list, like this:
`font-family: Courier, "Courier New", monospace;`

> When you need to know what font families to use in a stack, you can check out [cssfontstack.com](cssfontstack.com). When you click on a font family, it will tell you what other fonts you might want to put in the same stack, and it even shows the CSS you would use for each one.






