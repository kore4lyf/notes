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







