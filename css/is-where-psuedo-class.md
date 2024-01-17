# :is(), :where() and :has()

```css 
h1 > b, h2 > b, h3 > b, h4 > b, h5 > b, h6 > b {
  color: hotpink;
}
``` 

Instead, you could use :is() and improve legibility while avoiding a long selector:

```css
:is(h1,h2,h3,h4,h5,h6) > b {
  color: hotpink;
}
```  


```css 
button.focus ,button:focus {
  color: hotpink;
}

/* Same as */
button:is(.focus,:focus) {
  color: hotpink;
}
``` 


```css 
article > h1,
article > h2, 
article > h3, 
article > h4, 
article > h5, 
article > h6 {
  color: hotpink;
}

/* Same as */
article > :is(h1, h2, h3, h4, h5, h6) {
  color: hotpink;
}
``` 


:is() & :where(),  When writing CSS, they give you a way to group elements together in the middle, beginning or end of a selector. They also can change specificity, giving you power to nullify or increase specificity. 

## Selector grouping #
Anything that :is() can do regarding grouping, so can :where(). This includes being used anywhere in the selector, nesting, and stacking them. Full CSS flexibility you know and love. Here's a few examples:

```css
/* at the beginning */
:where(h1,h2,h3,h4,h5,h6) > b {
  color: hotpink;
}

/* in the middle */
article :is(header,footer) > p {
  color: gray;
}

/* at the end */
.dark-theme :where(button,a) {
  color: rebeccapurple;
}

/* multiple */
:is(.dark-theme, .dim-theme) :where(button,a) {
  color: rebeccapurple;
}

/* stacked */
:is(h1,h2):where(.hero,.subtitle) {
  text-transform: uppercase;
}

/* nested */
.hero:is(h1,h2,:is(.header,.boldest)) {
  font-weight: 900;
} 


article:is(.dark-theme:not(main .hero)) {
  font-size: 2rem;
}
```  

Each of the above selector examples demonstrates the flexibility of these two functional pseudo-classes. To find areas of your code that could benefit from :is() or :where(), look for selectors with multiple commas and selector repetition.


## The difference between :is() and :where() 
- :where() has no specificity.
:where() squashes all the specificity in the selector list passed as functional parameters. This is a first of its kind selector feature.
- :is() takes the specificity of its most specific selector.
:is(a,div,#id) has a specificity score of an ID, 100 points.
Taking on the highest specificity selector from the list has only been a gotcha for me when I was getting too excited about grouping. I was always able to improve legibility by moving the high specificity selector to it's own selector where it wouldn't have so much impact. Here's an example of what I mean:

```css 
article > :is(header, #nav) {
  background: white;
}

/* better as */
article > header,
article > #nav {
  background: white;
}
```


> `:is()` is a pseudo-class that allow us to simplify groupings fo selectors.
>> If a selector in `:is()` is invalid, it doesn't affect the entire list.


> `:where()` is similar to `:is()` but is a specificity killer, it has no specificity.
>> `:where()` will not work for an element that has been styled already, due to its low specificity. 
>> You would want to use where on an element that will be easy to restyle later.
>> You might want to have some levels of specifity before you use `:where()` to prevent an existing style from overiding your new style. 

```css 
/* This has more specficity */ 
.hero :where(p, h1, h2, h3) {

}


/* Than this */ 
:where(p, h1, h2, h3)

```



## :has() 
Some call it the parent selector while some call it the family selector.

### As a parent selector and as a family selector
If there are two divs with a class name of example-3
- A summing one has a link and the other doesn't, but the other has an image.

```css 
/* This selects the .element-3 that has an image */
.example-3:has(img) {

}


/* This selects the .element-3 that has a link */
.example-3:has(a) {

}


/* This selects the .element-3 that has a link has a direct child */
.example-3:has(> a) {

}


/* This selects the .element-3 that has an empty paragraph */
.example-3:has(p:empty) {

}




/* Other Examples */ 

/* This selects elements with .card class that a have an element with a .media class */
.card:has(.media) {
  display: grid;
  grid-template-columns: 150px 1fr;
}


/* This selects elements with .card class that a have an element with a .icon class */
.icon:has(.icon) {

}

```


Using :has() with adjacent selector to select an element instead of its parent  
```css 
/* Selects an article title that has an adjacent subtitles */
.article__title:has(+ . articles__subtitle) {
  
} 

/* Selects an article title that doesn't have an adjacent subtitles */
.article__title:not(:has(+ .articles__subtitle)) {
  
}
```