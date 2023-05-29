# Bootstrap 5
- Bootstrap is a free front-end framework for faster and easier web development
- Bootstrap includes HTML and CSS based design templates for typography, forms, buttons, tables, navigation, modals, image carousels and many other, as well as optional JavaScript plugins
- Bootstrap also gives you the ability to easily create responsive designs


## Bootstrap Versions
The main differences between Bootstrap 5 and Bootstrap 3 & 4, is that Bootstrap 5 has switched to vanilla JavaScript instead of jQuery.




## Why Use Bootstrap?
Advantages of Bootstrap:
- Easy to use
- Mobile-first approach
- Responsive features: Bootstrap's responsive CSS adjusts to phones, tablets, and desktops
- Browser compatibility: Bootstrap 5 is compatible with all modern browsers (Chrome, Firefox, Edge, Safari, and Opera). Note that if you need support for IE11 and down, you must use either BS4 or BS3.




## Bootstrap Containers
Bootstrap requires a containing element to wrap site contents.

Containers are used to pad the content inside of them, and there are two container classes available:
- The `.container` class provides a responsive fixed width container
- The ``.container-fluid` class provides a full width container, spanning the entire width of the viewport


### Fixed Container
Use the `.container` class to create a responsive, fixed-width container.

Note that its width (max-width) will change on different screen sizes:

- Extra small < 576px	- 100%
- Small ≥ 576px	- 540px
- Medium ≥ 768px	- 720px
- Large ≥ 992px	- 960px
- Extra Large ≥ 1200px	- 1140px
- XXL ≥ 1400px - 1320px



### Fluid Container
Use the `.container-fluid` class to create a full width container, that will always span the entire width of the screen (width is always 100%):





## Grids
Bootstrap's grid system is built with flexbox and allows up to 12 columns across the page.

If you do not want to use all 12 columns individually, you can group the columns together to create wider columns. 

The grid system is responsive, and the columns will re-arrange automatically depending on the screen size.

Make sure that the sum adds up to 12 or fewer (it is not required that you use all 12 available columns).



### Grid Classes
The Bootstrap 5 grid system has 6 classes:

- .col- (extra small devices - screen width less than 576px)
- .col-sm- (small devices - screen width equal to or greater than 576px)
- .col-md- (medium devices - screen width equal to or greater than 768px)
- .col-lg- (large devices - screen width equal to or greater than 992px)
- .col-xl- (xlarge devices - screen width equal to or greater than 1200px)
- .col-xxl- (xxlarge devices - screen width equal to or greater than 1400px)



```html
<div class="row">
  <div class="col" style="background-color:lavender;">.col</div>
  <div class="col" style="background-color:orange;">.col</div>
  <div class="col" style="background-color:lavender;">.col</div>
</div>
```

### Responsive Columns
The following example shows how to create four equal-width columns starting at tablets and scaling to extra large desktops. On mobile phones or screens that are less than 576px wide, the columns will automatically stack on top of each other:

Example
```html
<div class="row">
  <div class="col-sm-3">.col-sm-3</div>
  <div class="col-sm-3">.col-sm-3</div>
  <div class="col-sm-3">.col-sm-3</div>
  <div class="col-sm-3">.col-sm-3</div>
</div>
```

By specifing .col-sm-X  each `col-sm` expands into a column on small screen. X represents the number of grids each `.col` within the `.row` will occupy

You can use `col` without sm, md, lg, xl, xxl. eg col 
Example
```html
<div class="row">
  <div class="col-1">.col-1</div>
  <div class="col-2">.col-2</div>
  <div class="col-3">.col-3</div>
  <div class="col-4">.col-4</div>
</div>
```





## Text/Typography


### Bootstrap Default Settings
Bootstrap 4 uses a default font-size of 16px, and its line-height is 1.5.

The default font-family is "Helvetica Neue", Helvetica, Arial, sans-serif.

In addition, all `<p>` elements have margin-top: 0 and margin-bottom: 1rem (16px by default).


### Display Headings
Display headings are used to stand out more than normal headings (larger font-size and lighter font-weight), and there are four classes to choose from: `.display-1`, `.display-2`, `.display-3`, `.display-4`.

```html
<div>
  <h1 class="display-1">Display 1</h1>
  <h1 class="display-2">Display 2</h1>
  <h1 class="display-3">Display 3</h1>
  <h1 class="display-4">Display 4</h1>
</div>
```



### More Typography Classes

| Class |	Description |
| :--- | :--- |
| .lead | Makes a paragraph stand out	 |
| .small | Indicates smaller text (set to 80% of the size of the parent)	 |
| .text-start | Indicates left-aligned text	 |
| .text-break | Prevents long text from breaking layout	 |
| .text-center | Indicates center-aligned text	 |
| .text-decoration-none | Removes the underline from a link	 |
| .text-end |	Indicates right-aligned text	 |
| .text-nowrap | Indicates no wrap text	 |
| .text-lowercase | Indicates lowercased text	 |
| .text-uppercase | Indicates uppercased text	 |
| .text-capitalize | Indicates capitalized text	 |
| .initialism | Displays the text inside an `<abbr>`element in a slightly smaller font size	 |
| .list-unstyled | Removes the default list-style and left margin on list items (works on both `<ul>` and `<ol>`). This class only applies to immediate children list items (to remove the default list-style from any nested lists, apply this class to any nested lists as well) |	
| .list-inline | Places all list items on a single line (used together with .list-inline-item on each `<li>` elements)	 |
| .pre-scrollable | Makes a `<pre>` element scrollable |





## Colors

### Text Colors
Bootstrap 4 has some contextual classes that can be used to provide "meaning through colors".

The classes for text colors are: 
- .text-muted
- .text-primary 
- .text-success
- .text-info 
- .text-warning 
- .text-danger 
- .text-secondary
- .text-white 
- .text-dark 
- .text-body (default body color/often black)
- .text-light


### Background Colors
The classes for background colors are: 
- .bg-primary 
- .bg-success 
- .bg-info 
- .bg-warning 
- .bg-danger 
- .bg-secondary 
- .bg-dark 
- .bg-light


> The class above don't work well with text except you specify a color you prefer using .text-color 





## Tables



### Basic Table
A basic bootstrap has a light padding and horizontal dividers
- .table

### Striped Rows
The `.table-striped` class adds zebra-stripes to a table.

### Bordered Table
The `.table-bordered` class adds borders on all sides of the table and cells.

### Hover Rows
The `.table-hover` class adds a hover effect (grey background color) on table rows.

### Black/Dark Table
The `.table-dark` class adds a black background to the table.

### Dark Striped Table
Combine `.table-dark` and `.table-striped` to create a dark, striped table.
  
### Hoverable Dark Table
The `.table-hover` class adds a hover effect (grey background color) on table rows.
- .table-hover

### Borderless Table
The `.table-borderless` class removes borders from the table.

### Contextual Classes
Contextual classes can be used to color the whole table (`<table>`),  the table rows (`<tr>`) or table cells (`<td>`).

The contextual classes that can be used are:

| Class |	Description |
| :--- | :--- |
| .table-primary |	Blue: Indicates an important action |
| .table-success |	Green: Indicates a successful or positive action |
| .table-danger |	Red: Indicates a dangerous or potentially negative action |
| .table-info |	Light blue: Indicates a neutral informative change or action |
| .table-warning |	Orange: Indicates a warning that might need attention |
| .table-active |	Grey: Applies the hover color to the table row or table cell |
| .table-secondary |	Grey: Indicates a slightly less important action |
| .table-light |	Light grey table or table row background |
| .table-dark |	Dark grey table or table row background |



### Small table
The `.table-sm` class makes the table smaller by cutting cell padding in half.

### Responsive Tables
The `.table-responsive` class adds a scrollbar to the table when needed (when it is big horizontally).



| Class	Screen | width |
| :--- | :--- |
| .table-responsive-sm |	< 576px |
| .table-responsive-md |	< 768px |
| .table-responsive-lg |	< 992px |
| .table-responsive-xl |	< 1200px |
| .table-responsive-xxl | < 1400px |












