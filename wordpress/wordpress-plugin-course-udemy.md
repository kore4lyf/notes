# Wordpress Plugin

## Intro

- It is vital to ensure that debug mode is set to on when developing on wordpress.

```php
// define( 'WP_DEBUG', true );
```

### Helpful plugins

- Debug bar
- 
- Simply show hooks
- Show current template
- Query monintor

### Help

- hotexamples.com
Use `hotexamples` to search php code examples, e.g. you can search for get_metadata.

## Action and Filter hooks

Hooks are specific locations within the wordpress code. Hooks let you execute a function or modify existing content.
They are the basis of plugin creation, designed to modify the way wordpress behaves and perform a task it was not initially created for.

The Two Types of Hooks:

- Action
- Filters

To use either of these one needs to write a function, which is called a callback function and register.

```php
function test() {
  // Do something
}

add_action("hook", "test")
add_filter("filter", "test")
```

These callback functions are triggered or fired, within an action hook or a filter.

### Action Hook vs Filter

An **action hook** is used to add something at a certain point in the wordpress code execution.
e.g.

- `wp_enqueue_script` is widely used both in theme and plugin creation, it is used to add both javascript and css to the header of a webpage.

> In Wordpress, you don't add the HTML and CSS manually in the HTML head, but you use an action hook.

- `save_post` this hook marks a specific point in wordpress execution that allows you to write a function that will save information in the database.

**Filters**: They are used to modify some information in Wordpress that already exists in WordPress.
Filter can be used get some information from wordpress and it can be used to modify that information.
e.g.
Let say you want to write copyright info after every post on your site.
You can create a filter that returns the full post content.

In terms their difference in programming:

Action hooks only execute some additional code, they don't return anything to the function that called it.

- They interrupt the flow of the code at some point, perform some action and then exit without modifying anything, without changing any existing information.

Filters are required to return something back to the function that called it.

```php
function test($param) {
  $param = "New content";
  return $param;
}

add_filter("filter", "test")
```

> A priority of a plugin is 10 by default, 0 is the maximum priority. The higher the number the lower the priority.

### Action Hooks

Action hooks only work because of two functions that work with each other.

- do_action() - Do action is a point in the code where an action is available. Inserts an action hook.

- add_action() - Is where we hook callback functions.



You will find this hooks being called `/wp-setting.php`.

```php
do_action('plugin_loaded') // Executes after the theme is fully load

do_action('setup_theme') // Word press uses the setup_theme hook in case a developer wants to perform any action before a theme loads.

do_action('after_setup_theme') // Executes after the theme is fully load
```

### Filter Hooks

Unlike action hooks that don't return any value to the function that calls them, them the whole point of a filter function is to get a value, modify the value and returned the modified value.

Filters work through a pair of function that work together:

- applied_filters()
- add_filters()

```php
function the_content( $more_link_text = null, $strip_teaser = false ) {
  $content = get_the_content( $more_link_text, $strip_teaser);

  $content = apply_filters('the_content', $content);
  $content = str_replace(...);
  echo $content;
}

function modify_content( $content ) {
  $content = $content . 'Copyright 2025. All rights reserved';
  return  $content
}

add_filter ('the_content', 'modify_content')
```

**Taking a callback with more that one parameter**:

```php
function modify_body_classes($classes, $class) {
  $classes = apply_filters('body_class', $classes, $class);

  return array_unique( $classes );
}

add_filter('body_filter', 'modify_body_classes', 10, 2)

// The third parameter is the priority of the function
// The forth parameter is the number of parameters the filter is will is taking.
```

## Structuring the plugin

- Plugins are usually stored in `wp-content/plugins`.
- If your plugin only contains has one single file then you can drop it directly in the plugin folder. But if has many other files then it should be 


Lets create a new plugin called `mv-slider`
`wp-content/plugins/mv-slider`

Create a new folder called mv-slider with the following folder structure.

/mv-slider
|- assets
|    /css
|    /images
|
|- functions
|
|- languages
|
|- post-types
|
|- short-codes
|
|- vendor
|
|- views
||
|- index.php
|- mv-slider.php

mv-slider.php

```php
<?php

/**
 * Plugin Name: MV Slider
 * Plugin URI: https://www.wordpress.org/mv-slider
 * Description: My plugin's description
 * Version: 1.0
 * Requires at least: 5.6
 * Author: Korede Faleye
 * Author URI: https://www.github.com/kore4lyf
 * License: GPL v2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: mv-slider
 * Domain Path: /languages
 */

/*
MV Slider is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 2 of the License, or
any later version.
MV Slider is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.
You should have received a copy of the GNU General Public License
along with MV Slider. If not, see https://www.gnu.org/licenses/gpl-2.0.html.
*/

// Used to avoid direct access to the file.
if ( ! defined 'ABSPATH' ) {
  // You many leave a message use
  // die("You are not allowed to access the plugin directly.")
  exit;
}
```

The if condition tries to check if the ABSPATH variable exists. If it exits the wordpress is already installed if it doesn't 


**Security setting**:

**index.php**:

It ensures that no one will be able to list the plugin directly vie the URL.

```php
<?php
# Silence is golden
```

## 3 Events that plugins can trigger

- register_activation_hook()
- register_deactivation_hook()
- register_uninstall_hook()

## Creating Custom Post Types (CPT)

## Metabox API - What are Metaboxes