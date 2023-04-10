# Flexbox 
```css 
.container {
    display: flex;
}
```

## Main Axis and Cross Axis
A flexbox item always have a direction. By default the direction is horizontal (row). 
**MAIN AXIS** - from Left to Right (`flex-direction: row;`)
**CROSS AXIS** - from Top to Bottom (`flex-direction: column;`)


```css
.container {
    flex-direction: row;
}
```
**OR**
```css 
.container {
    flex-direction: column;
}
```


## (Justify Content) Positioning Items Along the Main Axis
By default `justify-content` is set to `flex-start` 

- `flex-start` - Moves all element to the left (positions them together edge to edge from left to the right.)
- `flex-end` - Moves all element to the right (postions them together edge to edge from right to the left.)
- `center` - Center all element (side to side)
- `space-around` - Gives all elements an equal amount of space on the left and right hand side, but the space between elements is larger.
- `space-between` - Creates space between each elements.
- `space-evenly` - Gives all element an equal amount of space on the left and right hand side.

```css 
.container {
    justify-content: space-around;
}
```

### Margin: auto
In a case where justify content is set to `flex-start` or  `flex-end`, `margin-left` or `margin-right` can be used to 

## The Flex Property
It allow you to set the width of the item according the width of the container. It is applied directly to specific containter elements
```css
.container > div {
    flex: 1
}
```
The css code above will allow all the elements in the the container to take up the whole space.

**flex** is a shorthand for `flex-grow, flex-shrink, flex-basis`

> CSS prioritize a more specific selector than a less specific selector. e.g. `.contain > .search`  is more specific than `.search`



## Align Items
> To make the height of elements on the a webpage responsive, set `body` and `html` to 100% the height of the element to a particular percentage.

By default `align-items` is set to `stretch`.

- `stretch` - expands the element(s) to fit the containers height.
- `flex-start` - element(s) retains its/their actual height and element(s) is/are placeed at the start/top of the container.
- - `flex-end` - element(s) retains its/their actual height and elements is/are placed at the end/botton of the container.
- `center` - centers element(s) or places it/them in between the containers height.


> `align-items` and `justify-content` can be used to center an element in a container.


### Aligning a single item/element at a time 
`align-self` is used on a specific item or element.
It works exactly like `align-items`, but it is used for targeting a particular element within a flex container.



## Flex Direction Column
`flex-direction: column` - changes the direction of elements or items within a container to be aligned vertically.

In `flex-direction-colum`, `align-items` controls the horizontal positioning of elements, while `justify-content` controls the vertical positioning of elements.



## Wrapping Up
By default `flex-wrap` is set to `nowrap` by default.
`flex-wrap` allows elements or items to move to the next line when the screen size get smaller than the size of the entire element.

`flex-wrap` - `wrap` or `nowrap`



## Flex, grow, shrink, basis
 `flex` is a shorthand propertity for 3 other propertise which are:
 - `flex-grow`
 - `flex-shrink`
 - `flex-basis`

Therefore:
```css 
.item1 {
    flex: 1 1 0; 
}

/* Is the same as */

.item2 {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0;
}
```


### flex-basis
`flex-basis` - sets the base width (the min width) of an item or element 
For Example:
```css
.item1 {
    flex-basis: 200px;
}
```

### flex-grow
`flex-grow` allows the width of an item or element to strecth beyound its `flex-basis` (If `flex-shrink` is not set).
```css
.item1 {
    flex-grow: 1
    flex-basis: 200px;
}
```


## flex-shrink
`flex-shrink` - alters the minimum width set by flex-basis on an item/element, when screen size is gets smaller than the item(s) width.
```css
.item1 {
    flex-grow: 1;
    flex-basis: 200px;
    flex-shrink:0;
}
.item2 {
    flex-grow: 1;
    flex-basis: 200px;
    flex-shrink: 1;
}
```
item1 remiains 200px while item2 shrink below 200px when the screen size or window gets smaller than 400px.



## Order
`order` is used to specify the position of an item between other items in a flexbox.
The order of an item begins from 0 to total number of items - 1
When the order of an item is set to 1 it is placed at the end of all the items  within the flexbox.
```css 
.item2 {
    order: -1
}
```
The code above places item2 at the begining of all other items within the flex box.

> By default order count begins from index zero.



## Example on a nav bar
```css
@media all and (max-width: 600px) {
    .container{
        flex-wrap: wrap;
    }
    .container > div {
        flex: 1 1 50%
    } 
}
```