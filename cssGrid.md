# CSS Grid



## Why Learn CSS Grid Layout
- Easier to create two dimensional layouts
- Simpler markup
- Flexible
- Skip Frameworks
- Browser Support



## Grid
```css
.list {
    padding-left: 0;
    display: grid;
    grid-gap: 2px;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 80px;
}
```

- In a case where one or more specific pixels is/are set for a specific grid, `auto` can be use to automatically allocate pixel sizes for the other elements.
For example:
```css
grid-template-columns: 100px auto 100px;
grid-template-rows: 50px 50px 200px;
```


- `span X` - span is used to set the amount of space an element should within a given grid template.
span is used on elements within a grid.
For Example:
```css
.content [
    grid-column: span 9; 
    // @grid container grid-template-columns: repeat(12, 1fr)
]
```



## Grid Template Shorthand
grid-template: L (column/vertical) then (row/horizontal)
```css
.container {
    display: grid;
    grid-template: repeat(2, 50px) / repeat(3, 1fr);
    grid-gap: 3px;
}
```

## grid-column-start, grid-column-end, grid-row-start and grid-row-end
```css
.body {
    display: grid;
    grid-template: repeat(2, 1fr);
    grid-gap: 40px 200px 40px;
}

.header {
    grid-column-start: 1;
    grid-column-end: 3;
}
```
The code above show that body has two columns.
`grid-column-start: 1` - means before the first column
`grid-column-start: 2` - means after the first column
`grid-column-start: 3` - means after the second column
This number describe the columns in terms of of 
  

`grid-column` is a short hand for `grid-column-start` and `grid-column-end`

Using `grid-column` .header style can therefore be rewritten as.
```css
.header {
    grid-column: 1/3
}
```

`span` allows us to describe columns in terms of columns rather than their edges.
i.e `span 3` span accros 3 columns
```css 
.header {
    grid-column: 1 / span 2
}
```

Another way of specifying the very last end of a grid row or grid column  to use `-1`
For example:
```css
.header {
    grid-column: 1 / -1
}
```

## grid-template area
It allows one to create prototypes of layout quickly.
```css 
.container {
    height: 100%;
    display: grid;
    grid-gap: 3px;
    /* grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 40px auto 40px; */
    grid-template-areas:
        "h h h h h h h h h h h h"
        "m c c c c c c c c c c c"
        "f f f f f f f f f f f f";
}

.header {
    grid-area: m;
}
.menu {
    grid-area: m;
}
.content {
    grid-area: c;
}
.footer {
    grid-area: f;
}
```

- period (.) can be used to represent blank cells
  
```css 
.container {
    height: 100%;
    display: grid;
    grid-gap: 3px;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 40px auto 40px;
    grid-template-areas:
        ". h h h h h h h h h h ."
        "m c c c c c c c c c c c"
        ". f f f f f f f f f f .";
}
```

- The areas will only be valid if they are rectangle.
**The grid area below breaks the entire layout.**
```css 
.container {
    height: 100%;
    display: grid;
    grid-gap: 3px;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 40px auto 40px;
    grid-template-areas:
        ". h h h h h h h h h h ."
        "m c c c c c c c c c f c"
        ". f f f f f f f f f f .";
}
```


## Auto-fit and minmax
Auto-fit and minmax makes grid responsive.
```css 
.container {
    height: 100%;
    display: grid;
    grid-gap: 3px;
    grid-template-columns: repeat(6, 100px );
    grid-template-rows: repeat(2, 100px);
}
```
The code above is restricted 6 columns and 2 rows.
In order to make it responsive, 6 (columns) will be replaced with auto-fit, doing this will make the number of colums increase depending on the size of the screen and the width of each column.


```css 
.container {
    height: 100%;
    display: grid;
    grid-gap: 3px;
    grid-template-columns: repeat(auto-fit, 100px );
    grid-template-rows: repeat(2, 100px);
}
```
By using auto-fit the column is varied with the width of the browser window.


```css 
.container {
    height: 100%;
    display: grid;
    grid-gap: 3px;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-template-rows: repeat(2, 100px);
}
```
minmax lets one set the minimum and maximum width of row or column. 
 


## Implicit Rows
```css 
.container {
    height: 100%;
    display: grid;
    grid-gap: 3px;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    grid-template-rows: repeat(2, 100px);
    grid-auto-rows: 100px;
}
```
When auto-fit or auto-fill is used the number of columns can vary depending on the width of the browser window or the size of the screen.
If the browser window or the width of the screen becomes smaller (the height of the element increases), the `grid-template-rows` rule specified here only works for two rows. 
In order to make the rule extend beyound 2 row or beyond the given rule specified in `grid-template-rows`, `grid-auto-rows` was used to automatically set rule for all number of rows.


## MORE (Image Gallery)
For Example: 
In a gallery app, which has a grid display, assuming all are square up and images which are wider shrink up. Assuming some of the images that were shrinked have a class of `horizontal` and you want to expand such class on your grid.

```css
.horizontal {
    grid-column: 1/ span 2;
}
```
This is not a valid solution, although we have made them wide by spanning them across two columns, but we have also forced them to span from the beginning, which also force gaps to be created in their initial position.

```css
.horizontal {
    grid-column: auto/ span 2;
}
```
By using `auto` instead of specifing a particular place to begin, `.horizontal` elements can retain their initial position or column line and their width.

```css
.horizontal {
    grid-column: span 2;
}
```
Another way we can solve this problem is to remove the us


Assuming some images were shrinked by height and some are 2 times bigger than than the original sqaured images. The images that were shrinked by height have a class name of `vertical` and images that were big have a class name of `big`.

```css
.horizontal {
    grid-row: span 2;
}
```

```css
.big {
    grid-column: span 2;
    grid-row: span 2;
}
```
The code above solved the problem of size and leaves out some spaces in the grid, to solve this problem, `grid-auto-flow` which is by default set to `row`, must be set to `dense`. 
`grid-auto-flow` is set to the container of the images.

```css
.container {
    ...
    ...
    ...
    grid-auto-flow: dense; 
}
```



## Labeling Template Spots
```css 
.container {
    height: 100%;
    display: grid;
    grid-gap: 3px;
    grid-template-columns: 1fr 5fr;
    grid-template-rows: 40px auto 40px;
}

.header {
    grid-column: 1 / 3;
}

.menu {}

.content {
    grid-column: 2 / 3;
}

.footer {
    grid-column: 1 / 3;
}
```

The code above can be labeled and used as follows
```css 
.container {
    height: 100%;
    display: grid;
    grid-gap: 3px;
    grid-template-columns: [main-start] 1fr [content-start] 5fr [content-end main-end];
    grid-template-rows: [main-start] 40px  [content-start] auto [content-end] 40px [main-end];
}

.header {
    grid-column: main-start / main-end;
}

.menu {}

.content {
    grid-column: content-start / content-end;
}

.footer {
    grid-column: main-start / main-end;
}
```

The - (dash) between the names also allow them to be used in simplified way. The code above can be written as follows: 
```css 
.container {
    height: 100%;
    display: grid;
    grid-gap: 3px;
    grid-template-columns: [main-start] 1fr [content-start] 5fr [content-end main-end];
    grid-template-rows: [main-start] 40px  [content-start] auto [content-end] 40px [main-end];
}

.header {
    grid-column: main;
}

.menu {}

.content {
    grid-column: content;
}

.footer {
    grid-column: main;
}
```


 
## justify-content & align-content
`justify-content` & `align-content` can also be applied on a grid container. It works exactly like it does in flex-box.
`Justify-content` works on the horizontal axis, while  `align-content` works on the vertical axis.



## justify-items & align-items
`justify-items` &  `align-items` can be applied on a grid container. It works exactly like it does in flex-box.
`Justify-items` works on the horizontal axis, while  `align-items` works on the vertical axis.



## justify-self & align-self
`justify-self` & `align-self` can be applied directly on elements within a grid display.



## auto-fit VS auto-fill
```css 
.container {
    height: 100%;
    display: grid;
    grid-gap: 3px;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-template-rows: repeat(2, 100px);
}
```

```css 
.container {
    height: 100%;
    display: grid;
    grid-gap: 3px;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    grid-template-rows: repeat(2, 100px);
}
```
auto-fit stretches when minmax is set and there are no more columns to fit into new spaces as the screen expands.
auto-fill doesn't stretch even when minmax is set, when the screen or browser window expands beyound the number of columns available, which creates an empty space after the last column.