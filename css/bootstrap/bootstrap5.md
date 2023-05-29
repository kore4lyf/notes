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





## Image Shapes 
Rounded corners, circle and thumbnail

### Rounded Corners
The `.rounded` class adds rounded corners to an image:

Example
```html
<img src="cinqueterre.jpg" class="rounded" alt="Cinque Terre">
```


### Circle
The `.rounded-circle` class shapes the image to a circle:

Example
```html
<img src="cinqueterre.jpg" class="rounded-circle" alt="Cinque Terre">
```


### Thumbnail
The `.img-thumbnail` class shapes the image to a thumbnail (bordered):

Example
```html
<img src="cinqueterre.jpg" class="img-thumbnail" alt="Cinque Terre">
```


### Aligning Images
Float an image to the right with the `.float-end` class or to the left with `.float-start`:

 
Example
```html
<img src="paris.jpg" class="float-start">
<img src="paris.jpg" class="float-end">
```


### Centered Image
Center an image by adding the utility classes `.mx-auto` (margin:auto) and `.d-block` (display:block) to the image:


Example
```html
<img src="paris.jpg" class="mx-auto d-block">
```


### Responsive Images
Images come in all sizes. So do screens. Responsive images automatically adjust to fit the size of the screen.

Create responsive images by adding an .img-fluid class to the <img> tag. The image will then scale nicely to the parent element.

The .img-fluid class applies max-width: 100%; and height: auto; to the image:

Example
```html
<img class="img-fluid" src="img_chania.jpg" alt="Chania">
```





## Jumbotron

Jumbotron was introduce in bootstrap 3 as a big padded box for calling extra attention to some spectial content or information. 


> Jumbotrons are no longer supported in bootstrap 5.

But you can use div use div and add some special helper classes with a color class to achieve the same effect.

```html
<div class="container bg-secondary text-white rounded mt-4 p-3">
    <h1>Bootstrap Tutorial</h1>
    <p>Bootstrap is the most popular HTML, CSS...</p>
  </div>
</div>
```





## Alert
Bootstrap provides an easy way to create predefined alert messages.
Alerts are created with the .alert class, followed by one of the contextual classes 
- .alert-success
- .alert-info
- .alert-warning
- .alert-danger
- .alert-primary
- .alert-secondary
- .alert-light
- .alert-dark


```html
<div class="alert alert-success">
  <strong>Success!</strong> Indicates a successful or positive action.
</div>
```


### Alert Links
Add the alert-link class to any links inside the alert box to create "matching colored links".

```html
<div class="alert alert-success">
  <strong>Success!</strong> You should <a href="#" class="alert-link">read this message</a>.
</div>
```


### Closing Alerts
× Click on the "x" symbol to the right to close me.
To close the alert message, add a `.alert-dismissible `class to the alert container. Then add `class="close" and data-dismiss="alert"` to a link or a button element (when you click on this the alert box will disappear).

Example
```html
<div class="alert alert-success alert-dismissible">
  <button type="button" class="btn-close" data-bs-dismiss="alert">&times;</button>
  <strong>Success!</strong> Indicates a successful or positive action.
</div>
```

> Tip: `&times;` (×) is an HTML entity that is the preferred icon for close buttons, rather than the letter "x".



### Animated Alerts
× Click on the "x" symbol to the right to close me. I will "fade" out.
The `.fade` and `.show` classes adds a fading effect when closing the alert message:

Example
```js
<div class="alert alert-danger alert-dismissible fade show">
```





## Buttons 
Button Styles
Bootstrap 5 provides different styles of buttons:
- btn-primary
- btn-secondary
- btn-info
- btn-success
- btn-warning
- btn-danger
- btn-dark
- btn-light 
- btn-link 

Example
```html
<button type="button" class="btn">Basic</button>
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-dark">Dark</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-link">Link</button>
```

> The button classes can be used on <a>, <button>, or <input> elements.

```html 
<a href="#" class="btn btn-success">Link Button</a>
<button type="button" class="btn btn-success">Button</button>
<input type="button" class="btn btn-success" value="Input Button">
<input type="submit" class="btn btn-success" value="Submit Button">
<input type="reset" class="btn btn-success" value="Reset Button">
```



### Button Outline
Bootstrap 5 also provides eight outline/bordered buttons.
Move the mouse over them to see an additional "hover" effect.
- btn-outline-primary
- btn-outline-secondary
- btn-outline-info
- btn-outline-success
- btn-outline-warning
- btn-outline-danger
- btn-outline-dark
- btn-outline-light 
- btn-outline-link 

Example
```html
<button type="button" class="btn btn-outline-primary">Primary</button>
<button type="button" class="btn btn-outline-secondary">Secondary</button>
<button type="button" class="btn btn-outline-success">Success</button>
<button type="button" class="btn btn-outline-info">Info</button>
<button type="button" class="btn btn-outline-warning">Warning</button>
<button type="button" class="btn btn-outline-danger">Danger</button>
<button type="button" class="btn btn-outline-dark">Dark</button>
<button type="button" class="btn btn-outline-light text-dark">Light</button>
``` 



### Button Sizes
Use the .btn-lg class for large buttons or .btn-sm class for small buttons:
- btn-sm
- btn-lg 
  

Example
```html
<button type="button" class="btn btn-primary btn-lg">Large</button>
<button type="button" class="btn btn-primary">Default</button>
<button type="button" class="btn btn-primary btn-sm">Small</button>
``` 


### Block Level Buttons
To create a block level button that spans the entire width of the parent element, use the `.d-grid` "helper" class on the parent element:

Example
```html
<div class="d-grid">
  <button type="button" class="btn btn-primary btn-block">Full-Width Button</button>
</div>
```
If you have many block-level buttons, you can control the space between them with the `.gap-*` class:

Example
```html
<div class="d-grid gap-3">
  <button type="button" class="btn btn-primary btn-block">Full-Width Button</button>
  <button type="button" class="btn btn-primary btn-block">Full-Width Button</button>
  <button type="button" class="btn btn-primary btn-block">Full-Width Button</button>
</div>
```


### Active/Disabled Buttons
A button can be set to an active (appear pressed) or a disabled (unclickable) state:

The class `.active` makes a button appear pressed, and the disabled attribute makes a button unclickable. Note that `<a>` elements do not support the disabled attribute and must therefore use the `.disabled` class to make it visually appear disabled.

Example
```html
<button type="button" class="btn btn-primary active">Active Primary</button>
<button type="button" class="btn btn-primary" disabled>Disabled Primary</button>
<a href="#" class="btn btn-primary disabled">Disabled Link</a>
```



### Spinner Buttons
You can also add "spinners" to a button, which you will learn more about in our BS5 Spinners Tutorial:

   
Example
```html
<button class="btn btn-primary">
  <span class="spinner-border spinner-border-sm"></span>
</button>

<button class="btn btn-primary">
  <span class="spinner-border spinner-border-sm"></span>
  Loading..
</button>

<button class="btn btn-primary" disabled>
  <span class="spinner-border spinner-border-sm"></span>
  Loading..
</button>

<button class="btn btn-primary" disabled>
  <span class="spinner-grow spinner-grow-sm"></span>
  Loading..
</button>
```





## Button Groups
Bootstrap 5 allows you to group a series of buttons together (on a single line) in a button group:

Use a `<div>` element with class `.btn-group` to create a button group:

Example
```html
<div class="btn-group">
  <button type="button" class="btn btn-primary">Apple</button>
  <button type="button" class="btn btn-primary">Samsung</button>
  <button type="button" class="btn btn-primary">Sony</button>
</div>
```
Tip: Instead of applying button sizes to every button in a group, use class `.btn-group-lg` for a large button group or the `.btn-group-sm` for a small button group.



### Vertical Button Groups
Bootstrap 5 also supports vertical button groups:

Use the class `.btn-group-vertical` to create a vertical button group:

Example
```html
<div class="btn-group-vertical">
  <button type="button" class="btn btn-primary">Apple</button>
  <button type="button" class="btn btn-primary">Samsung</button>
  <button type="button" class="btn btn-primary">Sony</button>
</div>
```



### Button Groups Side by Side
Button groups are "inline" by default, which makes them appear side by side when you have multiple groups:
 
Example
```html
<div class="btn-group">
  <button type="button" class="btn btn-primary">Apple</button>
  <button type="button" class="btn btn-primary">Samsung</button>
  <button type="button" class="btn btn-primary">Sony</button>
</div>

<div class="btn-group">
  <button type="button" class="btn btn-primary">BMW</button>
  <button type="button" class="btn btn-primary">Mercedes</button>
  <button type="button" class="btn btn-primary">Volvo</button>
</div>
```



### Nesting Button Groups & Dropdown Menus
Nest button groups to create dropdown menus (you will learn more about dropdowns in a later chapter):

Example
```html
<div class="btn-group">
  <button type="button" class="btn btn-primary">Apple</button>
  <button type="button" class="btn btn-primary">Samsung</button>
  <div class="btn-group">
    <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">Sony</button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Tablet</a>
      <a class="dropdown-item" href="#">Smartphone</a>
    </div>
  </div>
</div>
```





## Badges 

Badges are used to add additional information to any content. 

Use the `.badge` class together with a contextual class (like `.bg-secondary`) within `<span>` elements to create rectangular badges. Note that badges scale to match the size of the parent element (if any):

```html 
<h1>Example heading <span class="badge bg-secondary">New</span></h1>
<h2>Example heading <span class="badge bg-secondary">New</span></h2>
<h3>Example heading <span class="badge bg-secondary">New</span></h3>
<h4>Example heading <span class="badge bg-secondary">New</span></h4>
<h5>Example heading <span class="badge bg-secondary">New</span></h5>
<h6>Example heading <span class="badge bg-secondary">New</span></h6>
```





## Contextual Badges
Use any of the contextual classes (`.bg-*`) to change the color of a badge:

Example
```html
<span class="badge bg-primary">Primary</span>
<span class="badge bg-secondary">Secondary</span>
<span class="badge bg-success">Success</span>
<span class="badge bg-danger">Danger</span>
<span class="badge bg-warning">Warning</span>
<span class="badge bg-info">Info</span>
<span class="badge bg-light">Light</span>
<span class="badge bg-dark">Dark</span>
```




### Pill Badges
Primary Secondary Success Danger Warning Info Light Dark
Use the` .rounded-pill` class to make the badges more round:

Example
```html
<span class="badge rounded-pill bg-primary">Primary</span>
<span class="badge rounded-pill bg-secondary">Secondary</span>
<span class="badge rounded-pill bg-success">Success</span>
<span class="badge rounded-pill bg-danger">Danger</span>
<span class="badge rounded-pill bg-warning">Warning</span>
<span class="badge rounded-pill bg-info">Info</span>
<span class="badge rounded-pill bg-light">Light</span>
<span class="badge rounded-pill bg-dark">Dark</span>
``` 



### Badge inside an Element
An example of using a badge inside a button:

Example
```html
<button type="button" class="btn btn-primary">
  Messages <span class="badge bg-danger">4</span>
</button>
```






