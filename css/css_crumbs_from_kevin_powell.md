# CSS Guide from Kevin Powell

## Css Tips from Kevin Powell
1. Use Josh css preset 
2. Use .flex-group utility 
3. Use Custom properties for colours 
4. Use Custom " in .grid-flex 
5. Use Bem to show relationship between a component and its content.
6. Use .sr-only to add more context to your documents for Screen readers.
7. Learn about :is, :where. &:has 
8. Use overflow-wrap: break-word;


## Responsive Tips And Tricks


### 1. Start Global
When you start writting your CSS start global first. Don't worry about layouts first, work on your typography, background, colors e.t.c. Work on responsiveness of the page later.

### 2. Avoid Fixed Sizes
When start working on your layouts, avoid fixed sizes (e.g. height: 100px; e.t.c). The element will begin to overflow when the screen gets smaller. 
- It's best to use `max-width`. 
- Don't set fixed heights. Use `min-height` instead. 

### Use Media Queries to Add Complexity
Example 1:
```css
.split {
    display: flex;
    gap: 2em;
}

@media (max-width: 40em) {
    .split {
        display: block;
    }
}
```

Example 2:
Example 1 can be simplified like this, instead of overidding a bunch of propertise.
```css 
@media (mix-width: 40em) {
    .split {
        display: flex;
        gap: 2em;
    }
}
```

> Try to avoid too many break points

> Avoid device specific breakpoints. Look at what you built and decide where there needs to be a breakpoint. 


### 3. Take Advantage Of Mordern CSS
Many try to avoid creating breakpoints. By using Mordern CSS we do not have to create break points.
```css 
font-size: clamp(3rem, 1rem + 10vw, 5rem);
```
clamp can also be use with other propertise like padding et..x



## Creating a Squishy Padding and Margin 
```css
padding-block: min(20vh, 10rem)
```



## Specificity
> Specificity is a weight that is applied to a given CSS declaration, determined by the number ofneach selector type in the matching selector. When multiple declaration have equal Specificity, the last declaration found in the CSSis applied to the element. Specificity only applies when the same element is targeted by multiple declarations. As per CSS rules, directly targeted elements will always take precedence over rules which an element inherits from its ancestors. - MDN Web Docs

- When you are not being any more or less specific, the last rule wins. (bodu may be styled twice, but when a property is assigned two different values, the last value assignment will be selected).
This also applies to inline, internal and external stylesheet. Internal stylesheet overides external stylesheets. Inline stylesheet overrides both internal and external stylesheet.

```css 
div p {
    color: pink;
}

p {
    color: blue;
}
```
In the example above, the style applied to all paragraphs within a div cannot be overriden by the styles applied to paragraphs. (div p) is more specific than (p).


```css 
.definition {
    color: black;
}
div p {
    color: pink;
}

p {
    color: blue;
}
```
Assuming all paragraphs have a class named definition, the class styles will override both (div p) and (p). 

- Class selector are more specific than Element selectors.
- Id selectors are more specific than Class selectors and Element selectors
- Inline styles are more specific if you want to overide any style at internal or external stylesheets. 
- Avoid using inline style styles
- You can also override styles with `!important`
```css
p {
    color: green !important;
}
```
- Avoid using !important
- If feel like you must use important see if you can find a better way. 
- Don't use element selectors
- Just stick to class selectors (Keep all selectors on the same level so you dont run into problems)


## Choosing The Right CSS Units

### 1. Are You Declaring A Font Size?
- You'll probably want to go with rem.
- rem is like em, but in the case of rem, it's a relative unit (Relative to the font-size of the root(html)).
- 1rem = 16px 
- Why not use px instead?. rem is better because it adapts to the users system and browser preferences. px overides the browser preferences.
- The reason people don't like using rem is because, spme find it difficult to set size wrt to 16. Like setting size in decimal points.
 

### 2. Are You Setting A Width
- For most part you'd want to go for a percentage (`%`) often coupled with a max width.
- (`ch`) unit, is equal to the width of a character of that font.  e.g max-width: 75ch i.e 75 character per line


### 3. Are You Setting A Height
- Use min-height
- A `%`, `rem`, `vh`(vh may cause problems on mobile)


### Are You Setting A Padding or A Margin
- `em` or `rem` is better, if you want to adjust based the elements font size.
- If you want it to be consistent us `px`.



## Outline & Outline-offset
```css
button {
    outline: 1px solid red;
    Outline-offset: 5px
}
```

## Transition
```css 
button {
transition: all ease-in-out 300ms;
}
```

## CSS Variables
```css
:root {
    --clr-primary: lightblue;
    --success: lightgreen;
}

p {
    background: var(--success);
}
```

## CSS before & after psuedo element
1. Create a box before the paragraph
```css 
p::before {
    content: '';
    display: inline-block;
    width: 100px;
    height: 100px;
}
```

2. Using a psuedo class with psuedo element ::before & ::after
```css 
p:hover::before {
    content: '';
    display: inline-block;
    width: 100px;
    height: 100px;
}
```

3. 



## 5 CSS Mistakes I See Way Too Often 
- 1. Avoid Excesive Nesting
Don't do this.
```css
nav ul li a {
 ...   
}
```

Keep it simple and make it readable.
```css
nav a {
 ...   
}
```

- 2. Use classes, avoid ids (Readablity)

- 3. Use comments to Explain Complex selectors
Don't do this.
```css 
[type="checkbox"]:checked + label .custom-checkbox {
    ...
}
```

Do this.
```css 
/* Creates a check in my custom-checkbox 
to replace te actual hidden checkbox */
[type="checkbox"]:checked + label .custom-checkbox {
    ...
}
```

-  4. Format Your CSS Properly
Don't do this
```css 
.list { ... }
```

Do this.
```css 
.list { 
    ... 
}
```

- 4. Organise Your Code 
Use comments to describe a list of styles
```css 
/* Tabel Of Content 
    1. Global Styles
    
    2. Layouts
    
    3. Typography 
    
    4. Components
        4.1 Button
*/

/* ################
    Global Styles
    ############### */
nav { 
    ...
}

p { 
    ...
}

/* ##########
    Layouts
    ######### */


/* ################
    Typography
    ############### */
    

/* ################
    Components
    ############### */
    
    /* Button */ 
```

- 6. Refactor Your Code 
When your code gets messy, When you repeat some styles multiple times, and when you are done writting your CSS code. 


## 5 Important HTML concepts for beginers
- 1. Use only one `<h1>` tag on your page.
There should be only one primary heading on your webpage.

- 2. Put details (meta data) of your website at the top of your website.
Meta data on your website is used by search engines and social media.

- 3. Always start by using semantic tags first
Use semantic tags first, then you are not sure about what semantic tag to use, then you can fall back to non-semamtic tags.
We have two categories of semantic tags.

a. Content: We've had them before like `<h1> - <h6>, <p>, <a>, <ol>, <ul>, <li>, <figure>` e.t.c
b. Context: They give structural context to our page `<heading>, <main>, <footer>, <article>, <section>, <nav>`  e.t.c.

> You can only have one main per page.
 
> Sections are parts of a bigger content.

- 4. Attributes
The most common Global attributes are `class` and `id`. `id`s are best used for linking, while `class`es are best for styling elements.
a. `data-xxxxxx` is a custom Global attribute. Most of the time their content is used by javaScript.
b. Most attributes are related to specific tags.
c. ARIA attribute is for accessibility. ARIA(Accessible Rich Internet Application) is a specification from W3C and it was created to improve accessibility of applications by providing extra information to assistive technolog9es, such as screen readersm via attributes, which could be added to HTML.

> By using semantic tags, accessibility of our website is been taken care of, and there will be no need to worry about using ARIA


## CSS Units: vh, vw, vmax, vmin
- 1vh means 1% of device screen height, 100vh means 100% of device screen height.
- The difference between percentage and viewport metric is that viewport metric is always based on screen properties (i.e width and height), while percentage is dependent on its parent properties.
- `vmin` is a metric sets minimum viewport size on an element so that it doesn't get smaller than the minium viewport size (when the screen gets smaller).
- `vmax` is a metric sets maximum viewport size on an element so that it doesn't get bigger than the maxium viewport size (when the screen gets bigger).


## min(), max() and clamp()
ex 1:
```css 
p {
    width: 500px;
    max-width: 700px;
}
```

example 1 can be rewritten with max() 
```css
p {
    width: max(500px, 700px);
}
```

- You can set a min() if you intend to use min-width
- min() and max() can take multiple values. min() takes the smallest of all its value when the screen get smaller while max() takes the biggest. 
- clamp allow you set a min, prefered, and max value. The prefered value most be a relative unit like %, vh, vw rem, em e.t.c
```css
p {
    font-size: clamp(1rem, 1.5rem, 2.5rem);
}
```

## Feature Query
Not suppoted by edge and IE.
Usually used to seperate code that is not support by all browsers.

```css 
@support (text-stroke: 2px red) {
    p {
        -webkit-text-stroke: 2px red;
    }
}
```



## Transition height from 0 to auto (accordion)
This can be used on an accordion.
By setting grid-template-rows to 0fr you can hide the content of the div within the grid (Ensure the div has an overflow value of hidden).

To display the content set grid-template-rows of the container to be 1fr.
```html
<style>
  .quick-example {
    background: darkslategray;
    color white;
    margin: 1rem;
    padding: 1rem;
    border-radius: .5rem;
    
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows ease 3000ms;
  }
  
  .quick-example > div {
    overflow: hidden;
  }
  
  .quick-example:hover {
    grid-template-rows: 1fr;
  }
</style>

<div>
  <div class="quick-example">
    This is amazing!
  </div>
</div>
```

> JavaScript can be use to enable click events to effect the changes instead of using the hover effect in css


## Steps to take before writting css code
- Scan through the design
- Identify the layout
- Look for the common css properties each elements and sections share.




## Before and After Psuedo Element

If you are using the before and after psuedo element, use must use the content property or else it will default to none.



### Content


#### Text
```css
p::before {
  content: "Hello";
}
```


#### Image
```css
p::before {
  content: url(//unsplash.it/100/100);
}
```


#### Open and Close quote
```css
p::before {
  content: open-quote;
}

p::before {
  content: close-quote;
}
```


#### Fetch attribute's data
```css
p::before {
  content: attr(data-tool-tip);
}
```
The content of data-tool-tip is fetched into content. 


#### You can use fontawesome content code
```css
p::before {
  content: "f35d";
}
```
You must import/link font awesome first


### Tooltip
You can use the before or after as a tooltip, set position to absolute e.t.c


### Counters
You can turn anything into an order list

- `counter-reset: name` - You need to give the your counter reset a name. 

The reason you'd want to use a counter reset is that, every time it encounters a particular selector (maybe a container).
e.g. 
```css
.counters {
  counter-reset: my-counter-name; 
}
```

  
```css
.subhead::before {
  counter-increment: my-counter-name;
  content: counter(my-counter-name) ". ";
}
```


### box-sizing
```css
*, *::after, *::before {
  box-sizing: border-box; 
}
```



## inset
Inset is a short for top, left, bottom and right. 
```css 
p::before {
  inset: 0;
  position: absolute;
}
```


## Psuedo Elements
A CSS psuedo element is a keyword added to a selector that lets you style a specific part of the selected element(s).

Syntax
```css 
seletor::psuedo-element {
  property: value;
}
```

### Common Psuedo Element
- ::after
- ::before
- ::cue
- ::first-letter
- ::first-line
- ::placeholder
- ::selection


## CSS Responsive Design Concepts 

### 1. Meta viewport
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
```


### 2. Media Queries
#### You can check widths (min-width, max-width)
```css
@media (min-width: 400px) {
 body {
  background: red;
 }
}
```

#### You can check orientations (orientation: landscape, orientation: portrait)
```css 
@media (orientation: landscape) {
 body {
  background: red;
 }
}
```

#### You can check aspect-ratio
```css 
@media (min-aspect-ratio: 1/2) {
 body {
  background: red;
 }
}
```


#### Using <=, >=, <, > (71% browser support)
```css 
@media (min-width: 400px) {
 body {
  background: red;
 }
}
```

The code above can be rewritten as:
```css 
@media (width >= 400px) {
 body {
  background: red;
 }
}
```

Example 2
```css 
@media (max-width: 400px) and (min-width: 600px) {
 body {
  background: red;
 }
}
```


This media query works when we are between 100px and 400px
```css 
@media (100 <= width >= 400px) {
 body {
  background: red;
 }
}
```


### Container Queries
Example: 
```css
.box, .card {
  container-type: inline-size;
}

@container (width >= 400px) {
  .box {
    background: red;
  }
}

```

### Custom Media Queries (No Browser Support Yet)

```css 
@custom-media --medium (width >= 400);

@media (--medium) {
 body {
  background: red;
 }
}
```


> YOU CAN USE POST CSS TO CONVERT NON COMPATIBLE CSS PROPERTISE, THE ONES THAT ARE COMPTIBLE





## Some uncommon CSS properties 

### ::maker 
Is used to style a list's bullet or number (i.e. `<ol>`, `<ul>`).

```css
::marker {
  color: red;
}
``` 
The code above will change the color of the bullets of an unordered list or the numbers of an ordered list to red.

```css 
ol li::marker {
  content: "📌";
}
```
The code above will change the bullets of an unordered list or an ordered list to the 📌 emoji.

> ::marker is targeted on lists 


### caret-color 
Is used to change the color of the beeping cursor in a form.

```css
form {
  caret-color: red;
}
```



### accent-color 
This will change the color of checkboxes and select options
```css 
::root {
accent-color: crimson;
}
```


## Search
- padding-block ✅
- Logical property (Kevin Powell)
- CSS custom property
- min() ✅
- max() ✅
- clamp() ✅
- ARIA attribute
- box-sizing: border-box✅
- isolation : Isolate ✅
- Feature Selction - `@supports` 
- mix-blend-mode ✅
- Check out dvh, svh, lvh