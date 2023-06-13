# INTERMEDIATE CSS: FLEXBOX AND GRID

# CSS FLEXBOX
## Introduction
To use flexbox set the display property of a div to flex. The items inside that element will automatically become flex items, and you can then use the flexbox syntax in your CSS code.
Flexbox specializes in aligning and distributing elements with a parent element. The parent can be described as a container while each element within the container can be described as an item.

## Axis and Direction with Flexbox
The two major concepts involved with Flexbox are **axis** and **direction**. 
The flexbox model relies on two axis-
- The **main axis is defined by flex direction** which has four possible values: row, row-reverse, column and column-reverse.

## Ordering Elements with Flexbox
- There are three ways to explicitly set the order in which items will appear in a grid.
- Moving the HTML code for the elements themselves to reorder
- Appending -reverse to row or column will reverse the order in the specified row or column
- Using the order property of the individual items inside the grid

## Aligning Items & Justifying Content with Flexbox
To align items on the cross axis use align-items with the possible values: (VERTICALY)
- stretch
- flex-start
- flex-end
- center

To justify content on the main axis use justify-content, which has the possible values: (HORIZONTALY)
- flex-start
- flex-end
- center
- space-around
- space-between
- space-evenly



# CSS GRID

## Grid vs Flexbox
CSS grid excels at creating webpage layouts while flexbox is the master of how content flows.

> Flexbox is for how content flows, Grid is for how content is placed - i.e. grid works nicely for page layouts, flex works nicely for regions within the grid

** To use CSS Grid set the display property of the container element to grid. **
- CSS grid also uses **justy-content** to align its items.
- In CSS grid, the boxes within uses flexbox display.
- Grid is two dimensional, while Flex is one
- Grid is layout first, while Flexbox is content first
- Flex is for components of an app, Grid is for the app layout itself

CSS Grid does not replace Flexbox. Each can achieve things that the other is not capable of, and in fact, a true master can use Flexbox and CSS Grid together in harmony to create the ultimate webpage layout.

At the highest level CSS Grid excels at creating layouts for a webpage, while Flexbox is a master of content flow for each element that makes up the page layout.

## Rows and column 
After setting the display property of your container div to grid, the next step is to set the rows and columns in your grid which can be done with the CSS properties:

- grid-template-columns
- grid-template-rows
And to define gutters between rows and columns you can use the property grid-gap on the parent container that has the display property set to grid.

grid-template-columns is the property that defines the column layout of your grid - that is how many sections the page should be divided into vertically. The values for this property are the explicit value for each column and the number of columns is defined implicitly by the number of values entered. For example:
```csss
grid-template-columns: 60px 60px;
```
would create two columns of 60px each. If you had two items inside your grid and didn't set their position explicitly, the first item would be placed in the first column and the second item in the second. grid-template-rows follows the same logic, so that:
```css
grid-template-columns: 60px 60px;
grid-template-rows: 160px 60px;
```
would create a grid with two columns and two rows.


## Grid Area
The grid-area property specifies a particular area or set of rows and columns that a grid item occupies. It is applied to the grid item itself with CSS. Here is an example:
```css
.item{
    /* row start/column start/ row end/ column end */
    grid-area: 1/2/3/3;
}
```
Because grid-area is shorthand for the properties: grid-row-start, grid-column-start, grid-row-end and grid-column-end, the code above places the item from rows 1-3, and columns 2-3.

It allows you to create an actual grid in your code

## Grid Areas Summary
grid-template-areas is the property used to name the rows and columns of a grid and to set its layout. It could look like this:
```css
  .container {
      display:grid;
      grid-template-columns: 300px 300px 300px;
      grid-template-rows: 250px 600px;
      grid-template-areas: 
      "hd hd hd hd hd hd hd hd"
      "sd sd sd main main main main main"
      "ft ft ft ft ft ft ft ft";
  }
```
The named areas in the grid are then assigned to each element according to where you want them to be displayed in the grid:
```c
.header {
  grid-area: hd;
}
```
In the example above the element with the class header will stretch across the entire first row of columns because we have assigned it the grid-area hd, and we have defined the area hd with the value for grid-template-areas in the parent element.

## Advance Grid
CSS Grid includes advanced capabilities for creating large and complex grids. Some of these are:

- the **fr** Unit
- Track listings with **repeat()** notation
- Track sizing and **minmax()**

##### Advanced Grid Recap
The fr unit represents a fraction of the available space in the grid container.

The repeat() notation can be used to quickly layout many tracks for large grids. For example:
```css
grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
```
Could be written with repeat notation like this:
```css
grid-template-columns: repeat(7, 1fr);
```
The grid-auto-rows property can be used to generate the number of rows based on the content and available space. The following code:
```css
grid-auto-rows: minmax(100px, auto);
```
Would create rows that are at least 100px tall.


# Creating Responsive Websites
##### Media Queries
While media queries can be used for a variety of things and in a number of ways, we are going to focus on what are called **breakpoints**, which are the viewport width at which we want our design to change. We then write the code inside that media query, with a set breakpoint, that we want to go into effect only when the viewport width that the app is being viewed on is at least the breakpoint width. Only the CSS that we want to change needs to go here - the original CSS rules will all still apply, and only the new CSS rules written inside the media query will override any pre-existing rules.

##### Key Term
viewport - the area of the window in which web content can be seen. We use the dimensions of the viewport (usually the width, but sometimes the height) as the basis of our media queries.

##### Adding Media Queries in Code
Media queries are used to set different style rules for different devices or sized screens. We use breakpoints to set the condition of a media query. The logic is:
```css
@media(feature:value)
```
Here media features are aspects of the device that our media (website) is being viewed on. width feature allows us to evaluate the viewport width of the browser and set conditions based on that evaluation. We actually write this feature min-width (or max-width) because width is one of many media features that are range features, which means they can be prefixed with min- or max- to express constraints, which is what we're looking for with our breakpoints! If the constraint of the breakpoint (viewport width being in the range below our breakpoint) is broken (the width is larger than the breakpoint) the new CSS rule takes effect. Here is an example of how that could look in action:
```css
@media(min-width:900px) {
  body{
   background:red;
 }
}
```
In this example if the viewport width is greater than 900px the background of the webpage would turn red.

Media queries are used to create responsive layouts using breakpoints. Below is an example of the syntax that is used for creating media queries:
```css
@media(min-width:1100px) {
  body{
    font-size: 27px;
  }
}
```
In the example above, if the browser width of the webpage being viewed is above 1100px wide, then the font-size would become 27px.

##### Multiple Breakpoints
We have seen how to set a breakpoint and use Media Queries to create different layouts for smaller screens and larger screens, but there are some development moments that will call for 3 possible layouts.


A simple example would be creating 2 different breakpoints so that up to x width one set of CSS rules apply, then between x and y width a second set would apply, and then for anything beyond a width of y a third set of CSS rules would apply.


Here is an example of what that code could look like:
```css
/* Anything smaller than first breakpoint 600px */
.container {
  // rules for small screen
}

/* Medium Screens */
@media (min-width: 600px) and (max-width:900px) {
  .container {
    // rules for medium-sized screen
  }
}

/* Large Screens */
@media (min-width:901px) {
  .container {
    // rules for large screen
  }
}
```
In this example, the medium screens media query is new, and we use the keyword and to build a complex media query that evaluates both a min and max to create a range for the CSS rules to apply, in this case if the width of the viewport is between 600px-900px.

##### Building Responsive Layouts with Flexbox & Grid

One of the most useful features of CSS grid is that you can easily nest grids inside each other to create elegant, complex layouts. To nest CSS grids simply set the display property of the container element to grid and then select the child grid item you want to make the nested grid and set the display property of that element to grid as well!











