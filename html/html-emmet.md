# HTML Emmet

1. `!` - auto generates init tags for an HTML file
2. To include any tag just type the tag and press enter.

```html
h1
```

Gets converted to

```html
<h1></h1>
```

3. Adding class with `.`

```
h1.heading

.para
```

Gets converted to

```html
<h1 class="heading"></h1>

<div class="para"></div>
```

4. Add id with `#`

```
h1.heading

#city
```

Gets converted to

```html
<h1 id="heading"></h1>

<div id="city"></div>
```

5. Parent `>` child  relationship

```
div>span
```

Gets converted to

```html
<div><span></span></div>
```

6. Multiply the number of created element with `*`

```
ul>li*3
```

Gets converted to

```html
<ul>
  <li></li>
  <li></li>
  <li></li>
</ul>
```

7. Sibling with `+`

```
div+p+div
```

Gets converted to

```html
<ul>
  <li></li>
  <li></li>
  <li></li>
</ul>
```

8. link

```
link:css
```

Gets converted to

```html
<link rel="stylesheet" href="style.css">
```