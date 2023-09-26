# SASS 
SASS - Syntactically Awesome Stylesheet 

## 1. SASS FUNDAMENTALS
### 1. Syntax Versions
a. SASS Format 
- .sass (indented). It has a .sass extension. And it is known as the **indented format**. 
- No punctuation or curly braces 
- Whitespace is meaningful. 

Example: 
```sass 
$bg: #ead2a8 

body 
  background:$bg
```


b. SCSS Format 
- .scss (aka sassy format). 
- 100% CSS compatible. 
- Most popular.

Example: 
```scss 
$bg: #ead2a8; 

body {
  background: $bg;
}
``` 

### 2. Using Variables 
sass variable -> $NAME 
- <variable> : <expression> 
- It will be compiled to CSS. 

#### Scope
- Variables can have a global scope or a local scope.

Example
```scss 
/* Global */
$primary-color: red; 

h1 {
  /* Local */
  $primary-color: yellow;
  color: $primary-color;
}

p {
  color: $primary-color;
}
```

- Local Variables can have the same name as a global variable, this is known as **shadowing**. 

- The **!global** variable can be used to reassign a global variable. 
- The **!global** variable can only be on an existing variable. i.e. It can't be used on a new variable.

Example
```scss 
/* Global */
$primary-color: red; 

h1 {
  /* Local */
  $primary-color: yellow !global;
  color: $$primary-color;
}

p {
  color: $primary-color;
}
```

#### Underscore vs Hyphens 
In variable names: _ equals - 

Example 
```scss 
$primary-color: red;
$primary_color: yellow;

h1 {
  color: $primary-color; /* yellow */
}
``` 

### 3. Nesting 
sass allows a rule to be place inside another rule. 

Example: 
```scss 
.box {
  padding: 1em 2em;
  h1 {
    color: red;
  }
}
```
- Rules can be combined.
- Combining rules can lead to extra CSS.
- Since sass is compiled alot of css will take longer to generate.


### 4. Partials 
A key feature is sass is that it allows snippets kf files to be imported into other files, these are **known as partials**.

- Start the name of a partial with **_**
- **@use** is used to import the code 
- Filename can be used to reference importrd file or **as** can be used to give the imported file an alias. 

```scss 
// _variable.scss 
$bg: #ead2a8; 
$primary: SlateBlue; 


// _base.scss
@use "variables";
body {
  background: Variables.$bg; 
  ...
}

// styles.scss 
@use "variables" as var; 
@use "base";
h1 {
  color: var.$primary;
}
```


### 5. Parent Selector 
The `&` ampersand is used to specify a parent selector.

Example 
```scss 
.btn {
  border: 0; 
  border-radius: 5px;
  background: #444; 
  
  &:hover {
    background: #800;
  }
  
  &-primary {
    background: #3ab5e9;
  }
  .container & {
    float: right;
  }
}
```
The `&` in the example above represents the parent `.btn`.
- &:hover - .btn:hover 
- &-primary -> .btn-primary 
- .container & -> .container .btn



### 6. Mixins  
Mixins are like functions in JavaScript.
- Created with `@mixin btn() {}`
- Used with `@include btn`
- Mixins when used, copies the code from source and pastes them in places they are applied to.

Syntax
```scss
@mixin <name>(<parameters>) {
  ...<css properties> 
}
```

Example: 
```scss 
@mixin btn($col: #444) {
  background: $col;
  border-radius: 5px; 
  ...
}

.btn {
  @include btn;
}

.btn-primary {
  @include btn(#3ab5e9);  // btn($col: #3ab5e9)
  color: yellow;
}
```


### Extend 
- Extend is used used to extend the properties of a sub-class.
- In the actual css, the sub-class is appended/listed with the super class and not copied into the sub-class unlike mixins. 

```scss 
.btn {
  border: 0;
  
  &-primary {
    @extend: btn;
    background: #3ab5e9;
  }
  
  &-seconary {
    @extend .btn;
    background: orange;
  }
}
```





## 2. Working with SASS Script

### 1. Interpolation
Interpolation lets us work with variables defined in an expression.

Syntax
```scss 
#{$varName}
```
e.g. #{$varName + '--btn'}

- Interpolation can also be used to perform calculations.


Example 
```scss 
@mixin btn ($name: "", $bg: #444, $col: white) {
  .btn#{$name} {
    background: $bg; 
    color: $col; 
    // ...
  }
}

@include btn; 
@include btn("--primary", #3ab589)
```


### 2. Placeholder 
Placeholder are your to create a classes that doesn't compile but can be used to extend other classes.

- It begins with `%<name> { <css codes>}`
- To extend them `@extend %btn;`

```scss 
%btn {
  background; #444; 
  color: white;
  // ... 
}

.btn-primary {
  @extend %btn; 
  background: #52a8b2;
}
.btn-secondary {
  @extend %btn; 
  background: orange;
}
```



### 3. Comments  
```scss 
/* Regular CSS -- Published */ 
/* Multi Line 
     Comments Style -- Published */
// JavaScript Style -- Unpublished 
/*! Force publish this one */ 

$color: #3ab5e9;
/* Interpolate: #{$color} */
```

- Comments written in css are published except in compressed mode. 
- Comments written in JavaScript style are not published. 
- Comments that are force published are always published, even in commpressed mode. 
- Interpolation can be used in comments. 


### 4. Lists 
- A list can be separated by a space or commas. 
- **Brackets [] or Prathensis ()**: A list can be enclosed with curved or square bracket.
- **Quote when spaces**: It's recommended to quote a list item with a space in it. To prevent it from being splited
- **Indexed at 1**: In sass a list begins with index number if 1.
- **Negative Indexes (-1)**: Negative number counts list items backwards.
- **Immutable**: Lists are immutable, any attempt to modify them always leads to the creation of a new list.


```scss 
$myArray: primary secondary warning "item info"; 
/* #{nth($myArray, 1)} -> primary*/

$myArray: primary, secondary, warning, "item info"; 
/* #{nth($myArray, 2)} -> secondary*/

$myArray: (primary, secondary, warning, "item info"); 
/* #{nth($myArray, 3)} -> warning */

$myArray: [primary, secondary, warning, "item info"]; 
/* #{nth($myArray, 4)} -> item info */

$myArray: [primary, secondary, warning, "item info"]; 
/* #{nth($myArray, 5)} -> item info */
```



### List Methods 
- length($myList) 
- nth($myList, 2) 
- set-nth($myList, 2, newValue) 
- index($myList, orange) 
- append($myList, newValue, comma | space) 
- join($myList, $myList2, comma | space) 
- zip($myList1, $myList2) 
- is-bracketed($myList) 
- list-seperator($myList2)


Example: 
```scss 
$myList1: primary, secondary, warning;
$myList2: (red, orange, cyan);

/* length: #{length($myList1)} -> 3 */
/* nth: #{nth($myList1, 2)} -> secondary */
/* set-nth: #{set-nth($myList1, 2, dark)} -> (primary, dark, warning) */
/* index: #{index($myList2, orange)} -> 2 */
/* append: #{append($myList1, danger, comma)} -> primary, secondary, warning, danger */
/* join: #{join($myList1, $myList2, comma)} -> primary secondary warning red orange cyan */
/* zip: #{zip($myList1, $myList2)} -> primary red, secondary orange, warning cyan */
/* is-bracked: #{is-bracketed($myList2)} -> true */
/* list-seperator: #{list-seperator($myList2)} -> comma  */
```


### 5. each 
- It allows list items to be destructured.
Syntax:
```scss 
@each <var(s)> in <expression> {...}
```

```scss 
@mixin btn($name: "", $bg: #444, $col: white) {
  .btn#{$name} {
    background: $bg;
    color: $col;
    // ...
  }
}

$button:
  -primary #3ab5e9 hotpink, 
  -seconary green yellow; 
  
@each $name, $bg, $col in &button {
  #include btn($name, &bg, #col)
}
``` 


### 6. for 
`@for` is a way to iterate `to` or `through` a series of numbers.

- It can either count up or down through a series of umbers 
- `@for <var> to|through <expression> {...}` 
- Use to if you want the loop to end use `through`. To loop before the end use `to`.

Example: 
```scss 
$font-sizes: (3rem, 2.5rem, 2rem)

@for $i from 1 through length($font-size) {
  h#{$1} {
    font-size: nth($font-size);
  }
}
```



### Maps 
- Maps are used to store key value pairs. 
- Maps are not automatically included in sass, in order to be able to use a map in sass you have `@use "sass.map";`.
- Maps are immutable, to modify a map, an operation that modifys the map must be reassigned to it. 

```scss 
@use "sass.map";

$colorList: (
  "primary": RoyalBlue,
  "secondary": Tomato,
  "accent": YellowGreen
)
``` 

/* #{map.get($colorList, "primary")}

#### Map methods 
- A dot or an hypen can be used on all map methods except set e.g. map.get() or map-get(), but map.set() is an exception.
- map.merge() 
- map.deep-merge() - for maps in a map.
- map.remove() 
- map.deep-remove() 
- map.keys()  - returns a list of keus in the the.
- map.values() - returns a list of values in the map.

```sass
@use "sass:map"; 

$buttons: (
  "-primary": (
    RoyalBlue,
    #3ab5e9
  ),
  "-secondary": (
    green,
    yellow
  )
)

@mixin btn($name: "", $bg: #444, $col: white) {
  .btn#{$name} {
    background: $bg;
    ...
  }
}

@include btn("");
@each $key, $values in $buttons {
  @includes btn($key, $values...);
}
``` 
 

### 6. Operators

#### Operators 
- + Plus 
- - Subtract
- / Divide or list. 
To be certain use `math.div()`
For list use `list.slash()`
- = Equal 
- % Modulus 
- Math.$e // 2.71... 
- math.$pi // 3.14159... 
- math.ceil() // math.ceil(4.2) -> 5 
- math.clamp($min, $number, $max) 

Clamp restricts number to range between $min ans $max. If $number is less than $min this returns $min, and it's greater than $max this returns $max. 
math.clamp(-1, 0, 1) -> 0 
math.clamp(1px, -1px, 10px) -> 1px
math.clamp(-1in, 1cm, 10mm) -> 10mm

- math.ceil() // math.ceil(4.2) -> 5 
- math.floor() // math.floor(4.9) -> 4
- math.round() // math.round(4.9) -> 5
- math.max($number...)
- math.min($number...)
- math.hypot(3,4)
- math.tan()
- math.atan()
- math.atan2()
- math.sin()
- math.asin()
- math.cos()
- math.acos()
- math.abs()
- math.pow()
- math.sqrt()



### 7. Conditionals 
- `@if` and `@else`
- `==` and `!=`
- >, <=, >, >= 
- and, or


```scss 
$oval: false;

@if $oval {
  border-radius: 50%;
} @else {
  border-radius: 5px;
} 
```


### 8. Color Utilities
It provides ways to modify colors.
- To use color utilities declare `@use "sass:color"` 
- color.adjust(); 
- darken(), ligten() 
- transparentize() 

```scss 
@use "sass:color";
$color: cyan; 
/* #{ color.adjust($color, $lightness: -20, $alpha: .4)} -> #009999*/ 
/* #{ transparentize($color, .9)} -> rgba(0, 255, 255, .1)*/
/* #{ lighten($color, 30%)} -> #99ffff */
/* #{ darken($color, 20%)} -> #806666 */
```


## Compile SASS to CSS 
```sh 
sass style.scss style.css
```


## Making SASS compile automatically  
```sh
sass --watch stylesheet.scss:stylesheet.css
``` 
When saving your .scss file, it'll automatically update the .css file.

You might also consider 
```sh 
sass --watch stylesheet.scss:stylesheet.css --style expanded --sourcemap=none 
``` 
to keep the .css file readable.  

To compress 
```sh  
sass ./sass/main.scss:./public/css/style.css -w --style compressed
```