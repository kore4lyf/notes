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

