# Wordpress Plugin - wrox

## 1 An Introduction to Plugins

### WHAT IS A PLUGIN?

A plugin in WordPress is a PHP‐based script that extends or alters the core functionality of WordPress. Each API, helps interact with WordPress in a different way.

#### How Plugins Interact with WordPress

WordPress features many different APIs for use in your plugin.

- **Plugin:** Provides a set of hooks that enable plugins access to specific parts of WordPress. WordPress contains two different types of hooks:
Actions and Filters. The Action hook enables you to trigger custom plugin code at specific points during execution. For example, you can trigger a custom function to run after a user registers a user account in WordPress. The Filter hook modifies text before adding it to or after retrieving it from the database.

- **Widgets:** Allows you to create and manage widgets in your plugin.
Widgets appear under the Appearance ➪ Widgets screen and are available to add to any registered sidebar in your theme. The API enables multiple instances of the same widget to be used throughout your sidebars.

- **Shortcode:** Adds shortcode support to your plugin. A shortcode is a simple hook that enables you to call a PHP function by adding something such as [shortcode] to a post or page.

- **HTTP:** Sends HTTP requests from your plugin. This API retrieves content from an external URL or for submitting content to a URL. Currently you have five different ways to send an HTTP request. This API standardizes that process and tests each method prior to executing.
Based on your server configuration, the API will use the appropriate method and make the request.

- **REST API:** Allows developers to interact with your WordPress website remotely by sending and receiving JavaScript Object Notation (JSON) objects. You can create, read, update, and delete (CRUD) content within WordPress.

- **Settings:** Inserts settings or a settings section for your plugin. The primary advantage to using the Settings API is security. All settings data is scrubbed, so you do not need to worry about cross‐site request forgery (CSRF) and cross‐site scripting (XSS) attacks when saving plugin settings.

- **Options:** Stores and retrieves options in your plugin. This API features the capability to create new options, update existing options, delete options, and retrieve any option already defined.

- **Dashboard Widgets:** Creates Dashboard widgets. Widgets
automatically appear on the WordPress Dashboard and contain all standard customization features including minimize, drag/drop, and screen options for hiding.

- **Rewrite:** Creates custom rewrite rules in your plugin. This API enables you to add static endpoints ( /custom‐page/), structure tags (%postname%), and feed links ( /feed/json/).

- **Transients:** Creates temporary options (cached data) in your plugins.
This API is similar to the Options API, but all options are saved with an expiration time.

- **Database:** Accesses the WordPress database. This includes creating, updating, deleting, and retrieving database records for use in your plugins.

- **Theme Customization (Customize) API:** Adds custom website and theme options to the WordPress Customizer. Theme customizations are displayed in a real‐time preview prior to publishing to the live website.

#### When are plugins loaded?

Plugins are loaded early in the process when a wordpress powered web page is called.

WordPress URL called
      |
wp-config Loaded
      |
Functions Loaded
      |
Plugins Loaded
      |
Pluggables Loaded
      |
Translations Loaded
      |
Theme Loaded
      |
Page Content

The flow changes slightly when loading an admin page. The differences are minor and primarily concern what theme is loaded: admin theme versus your website theme.

#### Advantages of Plugins

- Not modifying core - One of the main advantages to plugins is the ability to modify the behavior of wordpress without modifying any core files.
Core files refer to any file that is part of the default wordpress installation.

Hacking the core files can make it difficult to update wordpress when a new version is released. If you made any modifications to a core file, that modification can be overwritten when the update occurs.

- Reinventing the wheel - Many of the common features have already been developed and are ready for use in your plugin.

- Separating Plugins and Themes
A plugin can take control of the rendering process; therefore, the plugin can become a “theme.” Similarly, a theme can have plugin functionality included. Because of this, the difference between the two can sometimes
become blurred, so why not just include your plugin code directly in a theme? This is a common question and one that can have a few different
answers.
Should themes include plugin functionality? The short answer is no. The primary reason for this is because plugins are meant to add features and functionality to WordPress, regardless of the theme used. This creates a nice separation between your website design and the functionality of your website.
The reason this separation is needed is so your theme is not directly tied to the functionality required. 

**WordPress is built so that you can easily change your design, or theme, at any point with just a couple clicks**.

If all plugin functionality existed in your theme and you switched themes, you will have lost all that functionality you required.

- Easy Updates - WordPress makes it easy to update a plugin to the latest version.

- Easier to Share and Reuse.

- Plugin Sandbox - When you activate a broken plugin in WordPress, it won't break your site. If the plugin triggers a fatal error, WordPress automatically deactivates the plugin before it has a chance to wreak havoc. This fail‐safe feature makes it less risky when activating and testing new plugins.

#### Plugin Directories
A lesser known fact is that WordPress actually features two plugin directories. The primary directory is located at wp‐content/plugins in a standard WordPress installation. The second, lesser known plugin directory is at wp‐content/mu‐plugins. The mu‐plugins directory, which stands for Must‐Use, is not automatically created by WordPress, so it must be manually created to be used.

The primary difference between the two is that the mu‐plugins directory is for plugins that are always executed.

> NOTE The mu‐plugins directory will not read plugins in a subfolder, so all plugins must be individual files or must include additional files that exist in a subdirectory. Any plugin files in a subfolder will be ignored unless included in the primary plugin file.

#### Types of Plugins

- **Active**: Plugin is active and running in WordPress.

- **Inactive**: Plugin is installed but not active. No code from the plugin is executed.

- **Recently Active**: A temporary status given to any plugin that has been recently deactivated.

- **Must‐Use**: All plugins installed in the wp‐content/mu‐plugins directory. All Must‐Use, or MU, plugins are loaded automatically. The only way to deactivate an MU plugin is to remove it completely from the directory.

- **Drop‐ins**: Core functionality of WordPress can be replaced by Drop‐in plugins. These plugins are specifically named PHP files located in the wp‐content directory. If WordPress detects one of these files, it will be automatically loaded and listed under the Drop‐in filter on the Plugin screen. Currently ten Drop‐in plugins are available.
  - **advanced‐cache.php**: Advanced caching plugin
  - **db.php**: Custom database class
  - **db‐error.php**: Custom database error message
  - **install.php**: Custom installation script
  - **maintenance.php**: Custom maintenance message
  - **object‐cache.php**: External object cache
  - **sunrise.php**: Advanced domain mapping
  - **blog‐deleted.php**: Custom blog deleted message
  - **blog‐inactive.php**: Custom blog inactive message
  - **blog‐suspended.php**: Custom blog suspended message

The last four Drop‐in plugins are specific to the WordPress Multisite feature. A standard WordPress installation will have no use for these plugins.

When developing a new plugin, determine what type of plugin you want to create before you start the development process. Most plugins will be standard WordPress plugins, but occasionally you might need to create a Must‐Use or Drop‐in plugin.

## 2 Plugin Framework


### REQUIREMENTS FOR PLUGINS

**Naming Your Plugin**: The most important thing when naming your plugin is for it to be something unique. It's also good practice for the name to reflect what the plugin actually does.

You also need to consider whether your plugin name is too generic. It's possible that the name has already been taken by another plugin developer.

Because there are thousands of existing plugins, some developers prefix their plugin name with their business name. For example, if your business name is “Super Duper,” you might name a potential forum plugin “Super Duper Forums.” This allows you to better attach your brand to your plugin and keep the name unique.

**Using a Folder**: While WordPress does allow plugins to be a single file, it is generally not good practice to use this method. Instead, it is standard practice to use a folder to contain your plugin. The vast majority of plugins will contain multiple files, such as PHP files, CSS and JavaScript assets, and other build files.

When creating a plugin, it should ideally match your plugin name. **Plugin folder names should be hyphenated and lowercase.** It should not contain spaces, underscores, uppercase letters, or nonalphanumeric characters.

Using the previous “Super Duper Forums” plugin as an example, its folder
name should be `super‐duper‐forums`.

### BEST PRACTICES

- **Namespace Everything**: If you have a function named get_post(), it will conflict with WordPress’ own get_post() function and result in a fatal error. That's not a good user experience. Writing good code means making sure that your code doesn't conflict with other developers' code. The best way to ensure that is to prefix or namespace all your classes, functions, and anything else within the global namespace.

Namespaces allow you to group your code under a unique name so that it doesn't conflict with other developers' code. Therefore, a function named get_post() would become prefix_get_post(), and a class named Post would become Prefix_Post.

Namespaces must be the first code, excluding the opening <?php tag and inline comments, in a PHP file. In the following example, see how a custom class named Setup is handled. Because it is under the SuperDuperForums namespace, there's no need to prefix it.

```php
<?php
 namespace SuperDuperForums;
 class Setup {
   public function boot() {}
 }

```

Class and function names are not the only consideration when namespacing code. There are other times when you'll have things in the global namespace that might conflict with other plugins running in WordPress. Such cases may include storing options in the database or loading a JavaScript file. In such cases, it's generally best practice to prefix option names with your plugin name, such as super_duper_forums_ option_name, and prefix script handles similarly, such as super‐duper‐forums‐ script‐name.

You may have noticed that the option name used snake case (underscores) and the script handled used kebab case (hyphenated) in the previous example. The difference in practice has arisen over the years and can be confusing to new plugin developers. In general, anything referred to as a handle is in kebab case, and everything else is in snake case

- **File Organization**: The most important and only required file for any plugin to have is its primary PHP file. This file can be named anything and must sit in the root of your plugin folder. If your primary file is named plugin.php, it will be located at /super‐duper‐forums/plugin.php.

There are two common practices for naming the primary plugin file. Many plugin authors name this file the same as the folder, such as super‐duper‐ forums.php. The less‐common practice is to simply name this plugin.php.

- **Folder Structure**: Most plugin developers
will create separate folders to house their PHP code apart from resources, assets, or other front‐end code in a folder with a name such as `/src`, `/inc`, `/includes`, or `/app`. Within the larger PHP development community, it is standard practice to name this folder `/src` because this is the folder where your “source” code lives.

The naming of the assets or resources folder is also varied with plugins. Often this folder is named /assets, /dist, or /public. Most likely, you'll want to have separate development and production folders if you use a build system such as webpack to bundle your final asset files.

The following is an example of how a plugin folder structure may be organized.

|- plugin.php: Primary plugin file
|
|- uninstall.php: Uninstall file
|
|- /resources: Development asset files
|
|- /src: PHP source code
|  |- Activator.php: Activation class
|  |- Deactivator.php: Deactivation class
|  |-  Plugin.php: Primary plugin class
|  
|- /css: Development CSS
|  |- /js: Development JavaScript
|
|- /public: Production asset files
|  |- /css: Production CSS
|  |- /js: Production JavaScript

### PLUGIN HEADER

For wordpress to recognize a a plugin, the plugin's primary PHP file must have what's called a plugin header at the top of the file.
**This tells WordPress that this particular file is the file that it must load to your plugin.**

#### Creating the Header

```php
<?php
/**
 * Plugin Name: My Plugin
 * Plugin URI: https://example.com/plugins/pdev
 * Description: A short description of the plugin.
 * Version: 1.0.0
 * Requires at least: 5.3
 * Requires PHP: 5.6
 * Author: John Doe
 * Author URI: https://example.com
 * License: GPL v2 or later
 * License URI: https://www.gnu.org/licenses/gpl2.0.html
 * Text Domain: pdev
 * Domain Path: /public/lang
 */
```

- **Plugin Name:** The name for your plugin
- **Plugin URI:** A URI with more information about your plugin
- **Description:** A brief summary that describes what your plugin does
- **Version:** The current version of your plugin, which should be incremented with each update
- **Requires at least:** The minimum version of WordPress required for your plugin to work
- **Requires PHP:** The minimum version of PHP required for your plugin to work
- **Author:** Your or your team/business name
- **Author URI:** The link to your website
- **License:** The license that the plugin is distributed under
- **License URI:** A link to the full text of the license
- **Text Domain:** The text domain used for internationalizing your plugin
- **Domain Path:** The relative path to where translation files are located in your plugin
- **Network:** An optional field that can be set to true for plugins that can only be activated across the entire network on a multisite installation

#### Plugin License

When distributing your plugin to others, it's important to have a clear license so that you both protect your own copyright and make sure anyone who receives your plugin has a clear  nderstanding of what their rights are.
WordPress is licensed under the GNU General Public License (GPL), version 2 or later. Any plugins distributed should use a license that is compatible with the GPL.

Most plugins only place this after the
plugin header in the primary plugin file.

```php
<?php
/*
Copyright (C) <year> <name of author>
This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation; either version 2 of the License, or (at your option) any later version. 

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program; if not, write to the Free Software Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
*/
```

You need to replace the `<year>` and `<name of author>` snippets in that notice with the year the code was created and your name. Once you add the notification to your plugin file(s), it will then be licensed under the GPL.

If working with a client or employer and not distributing the plugin to the public in any way, your plugin may not need a license. Copyright and/or license should be determined by your contract and what you and your client/employer agree to.

### DETERMINING PATHS

### Plugin Paths

There are two types of paths that you might be concerned with when building WordPress plugins. The first is the local path to files on the server.
The second is URL paths, which may be necessary for loading JavaScript files, CSS stylesheets, or other assets. You may also need to link to a specific URL within the WordPress installation itself.
It's important to use the standard WordPress functions for determining the correct path.

**Local Paths**:

Local paths reference locations on the server. PHP provides easy methods for determining paths for almost every case needed. However, to be on the safe side, it's best to use WordPress functions where possible. The plugin_dir_path() function provides an easy way to get the filesystem directory path to your plugin.

```php
<?php $path = plugin_dir_path( $file ); ?>
```

Parameters:
`$file (string, required)`: The filename in the current directory path

The following example will print the path of the current directory of the file passed in with a trailing slash using PHP's `__FILE__` constant:

```php
<?php echo plugin_dir_path( __FILE__ ); ?>
```

result: /public_html/wp-content/plugins/pdev/

Assuming you needed to load a file named /src/functions.php from your plugin that houses some custom functions, use the following code:

```php
<?php include plugin_dir_path( __FILE__ ) .
'/src/functions.php'; ?>
```

It is common practice for plugin authors to store this path as a variable or constant in the plugin's primary file for quick access to the plugin's root folder path, as shown in the following example code:

```php
<?php define( 'PDEV_DIR', plugin_dir_path( __FILE__ ) ); ?>
```

**URL Paths**: The primary use case for getting a URL path will be determining the path to an asset (e.g., JavaScript, CSS, or image files) within your plugin.

WordPress provides the plugin_dir_url() function to handle this use case.

```php
<?php $url = plugin_dir_url( $file ); ?>
```

Parameters:
`$file (string, required)`: The filename in the current directory path

WordPress will automatically convert any filename passed in to an appropriate URL equivalent. See the following example of passing in the filename from within the primary plugin file:

```php
<?php echo plugin_dir_url( __FILE__ ); ?>
```

That code will output something like the  following URL with a trailing 

slash:
https://example.com/wp-content/plugins/pdev/

If you wanted to determine the path of a JavaScript file located at `/public/js/example.js` in your plugin, you'd use the following code:

```php
<?php $url = plugin_dir_url( __FILE__ ) . 'public/js/example.js'; ?>
```

You can use this to correctly get the URL path to any location in your
plugin.

WordPress also provides a `plugins_url()` function. `plugin_dir_url()` is a wrapper for this function. For most purposes, these two functions can almost be used interchangeably, but there are some important differences.

```php
<?php $url = plugins_url( $path = '', $plugin = '' ); ?>
```

Parameters:

- **$path (string, optional)**: A path to append to the end of the URL
- **$plugin (string, optional)**: The full path to a file within the plugin

If no parameters are provided, the function will return the URL to the plugin's directory for the WordPress installation. It also does not add a trailing slash to the end of the URL. For most cases, it's usually best to stick with `plugin_dir_url()`.

- **site_url()**: URL path to where WordPress is installed
- **home_url()**: URL path to the site's homepage
- **admin_url()**: URL path to the WordPress admin
- **rest_url()**: URL path the REST API endpoint
- **includes_url()**: URL path to the WordPress includes directory
- **content_url()**: URL path to the WordPress content directory

All of these URL functions accept an optional first parameter of $path, which is appended to the end of the URL if provided.

The following
example shows how to retrieve the URL path to the General Settings page
in the admin:

```php
<?php $url = admin_url( 'options-general.php' ); ?>
```

With the exception of the `content_url()` function, each of these functions also accepts an optional second parameter of $scheme, which allows you to manually set the protocol, such as 'http' or 'https'. In almost all cases, you should not set this parameter and should instead allow WordPress to automatically determine the appropriate URL scheme.

First‐time WordPress developers will also sometimes confuse `site_url()` and `home_url()`.
WordPress can be installed in a subdirectory on the server while allowing the actual site to be located elsewhere.

The trick is to remember that the “home” in `home_url()` refers to the URL of the site, and the “site” in `site_url()` refers to the URL of the WordPress installation.

If WordPress is installed in a subdirectory, site_url() might point to a URL like https://example.com/wordpress, while home_url() points to https://example.com.

### ACTIVATE/DEACTIVATE FUNCTIONS

#### Plugin Activation Function

WordPress provides standard activation and deactivation hooks that allow any plugin to run code when it is activated or deactivated, respectively.

When building plugins, you'll often need to execute some code when the user first activates it.

WordPress provides the `register_activation_hook()` function that allows you to pass in a callback for handling any activation code you need to run.

```php
<?php register_activation_hook( string $file, callable $function ); ?>
```

Parameters:
**$file (string, required)**: Filesystem path to the primary plugin file
**$function (callable, required)**: The PHP callable to be executed when the plugin is activated.

The following example shows how to register an activation hook that points to a class located at
src/Activation.php in your plugin and executes its activate() method:

```php
<?php
namespace PDEV;
register_activation_hook( __FILE__, function() {
 require_once plugin_dir_path( __FILE__ ) .
'src/Activation.php';
 Activation::activate();
});
```

With the activation hook callback registered, you need to figure out what things you need to set upon activation. The following example gets the administrator role object and adds a custom capability to it:

```php
<?php
  namespace PDEV;

  class Activation {
    public static function activate() {
      $role = get_role( 'administrator' );
      if ( ! empty( $role ) ) {
      $role->add_cap( 'pdev_manage' );
      }
    }
  }
```

If your plugin needs to create custom database tables, this would be the time to do it.
While it is common practice with some plugin authors, you usually shouldn't set plugin database options at this point. It's almost always better to use sane defaults for any options your plugin has and not clutter the database until the end user has explicitly decided to save on your plugin settings screen

#### Plugin Deactivation Function

WordPress also allows you to execute code
from a registered deactivation callback via the
`register_deactivation_hook()` function. The following example includes the `src/Deactivation.php` class and executes its `deactivate()` method:

```php
<?php
  namespace PDEV;
  register_deactivation_hook( __FILE__, function() {
    require_once plugin_dir_path( __FILE__ ) . 'src/Deactivation.php';
    Deactivation::deactivate();
  } );
```

The following is an example of how to set up your

Deactivation class:

```php
<?php
  namespace PDEV;
  class Deactivation {
  public static function deactivate() {
  // Run your deactivation code here.
  }
  }
```

### UNINSTALL METHODS

Cleaning up anything left behind when a user uninstalls your plugin is an important aspect of developing plugins professionally. Running an uninstall procedure takes little work on your part but makes sure that users can trust that they can use your plugins without those plugins leaving unwanted data behind.

WordPress provides two different methods for uninstalling a plugin: the `uninstall.php` file and the uninstall hook.

#### Uninstall.php

The first method of uninstalling a plugin is by creating an uninstall.php file in the root of your plugin folder. This is the method that you'll most likely be using and is the recommended route to take.

Using uninstall.php is the preferred method of uninstalling a plugin because it isolates your uninstall code from the rest of your plugin and doesn't allow arbitrary code to run from your other plugin files. Ideally, your plugin should be structured such that arbitrary code is never run.

It's also important to check that `WP_UNINSTALL_PLUGIN` is set before executing your uninstall code.

In the following example, you can see that the uninstall procedure checks
the constant and removes the pdev_manage capability added in the “Plugin
Activation Hook” section earlier in this chapter:

```php
<?php
  if ( ! defined( 'WP_UNINSTALL_PLUGIN' ) ) {
    wp_die( sprintf(
    __( '%s should only be called when uninstalling
    the plugin.', 'pdev' ),
    __FILE__
    ) );
    exit;
  }
  
  $role = get_role( 'administrator' );
  
  if ( ! empty( $role ) ) {
    $role->remove_cap( 'pdev_manage' );
  }
```

#### Uninstall Hook

If `no uninstall.php` file exists for the plugin, WordPress will look for a callback registered via the `register_uninstall_hook()` function.

Parameters:
$file (string, required): The primary plugin file
$callback (callable, required): A function to execute during the uninstall process


```php
<?php
  register_uninstall_hook( __FILE__, 'pdev_uninstall' );
  function pdev_uninstall() {
    $role = get_role( 'administrator' );
    if ( ! empty( $role ) ) {
      $role->remove_cap( 'pdev_manage' );
    }
  }
```

### CODING STANDARDS

#### Document Your Code

WordPress uses PHPDoc for adding documentation to code. PHPDoc is a standard for documenting files, functions, classes, and any other code written in PHP. The following is an example of using PHPDoc to document a function:

```php
<?php
/**
 * Short Description.
 *
 * Longer and more detailed description.
 *
 * @param type $param_a Description.
 * @param type $param_b Description.
 * @return type         Description.
 */
function pdev_function( $param_a, $param_b ) {
 // Do stuff.
}
```

##### Naming Variables and Functions

Variables and functions should always be written in snake case. All characters should be written in lowercase, and multiple words should be separated with an underscore. Functions and variables in the global namespace should also be preceded with a unique prefix for your plugin, such as pdev_. The following example is the correct way to write a function:

```php
<?php
  function pdev_function( $param_a ) {
  // Do stuff.
  }
```

`$param_a` isn't in the global scope there, so it doesn't need a prefix. While it's considered bad practice to use global variables, if you do use them, make sure to prefix

##### Naming Classes and Methods

Class and method naming is one area where the core WordPress coding standards don't align with the PHP community. The PHP standard is to write class names in PascalCase where the first character of each word is uppercase and there are no separators between words. The standard for class methods is to write words in camelCase where the difference is that the first character of the first word is lowercase.

```php
<?php
  class PDEVSetup {
    public function setupActions() {
    }
  }
```

As you can see, the WordPress method uses underscores to separate class names and uses snake case for method names. You'll need to decide the best direction for your own plugins.

##### Naming Files

WordPress has a strict guideline on how it names files. The standard is to write each character in lowercase and separate multiple words with hyphens. For example, you might have a group of user‐related functions in your plugin. You'd want to name that file something like functions‐ users.php.

WordPress also prefixes class filenames with `class‐`. The `PDEVSetup` or `PDEV_Setup` class from the previous section in this chapter would be named `class‐pdev‐setup.php` following the WordPress standard.

##### Single and Double Quotes

PHP allows you to use single or double quotes when defining strings. With WordPress, it's recommended to always use single quotes when possible.
This makes it easy to use double quotes within the string without escaping them. The following is an example of echoing a link that has double quotes within the single‐quoted string:

```php
<?php
echo '<a href="https://example.com">Visit Example.com</a>';
```

You can also use double quotes when you need to insert a variable within the string. The following example grabs the current site's name and echoes a message with the variable:

```php
<?php
  $pdev_site_name = get_bloginfo( 'name', 'display' );
  echo "You are viewing {$pdev_site_name}.";
```

##### Indentation

The WordPress standard is to indent all code with tabs. Consider the following example of an if/else statement:

It's hard to follow the logical structure of the code with no indentation.
Instead, you should indent each line within the brackets of the conditions, as shown in the following example:

```php
<?php
  if ( $condition ) {
  echo 'Yes';
  } else {
  echo 'No';
  }
```

The one exception that WordPress makes to its tab preference is when
aligning multiple lines of similar items. Take note of the spacing usage in
the following snippet:

```php
  <?php
  $some_var = 'ABC';
  $another_var = 'JKL';
  $yet_another_var = 'XYZ';
```

As you can see, the operators and values assigned to the variables are clearly lined up and easy to read.

##### Space Usage

When building your plugin, you should always add spaces after commas
and on each side of logical, comparison, and other operators. The following
code snippet shows several basic PHP examples and how they should be
spaced:

```php
<?php
if ( $foo === 'bar' ) {
 // Do something.
} elseif ( ! $foo ) {
 // Do something else.
}
foreach ( $foo as $bar ) {
 // Do something.
}
function pdev_function( $param_a = 'foo', $param_b = 'bar' )
{
 // Do something.
}
$foo = range( 10, 100, 10 );
```

##### Shorthand PHP

You should never use shorthand PHP tags ( `<? and ?>` ) when developing plugins. Shorthand tags must be enabled on the server to work. As a plugin developer, you typically won't have access to the server, so there's no guarantee they'll work for your users. Always use the full PHP opening and closing tags ( `<?php and ?>` ).

The one exception to this rule is for the short echo tag, as shown in the following example:

```php
<?= 'Hello, World!'; ?>
```

##### SQL Statements

When writing SQL statements in WordPress to make a direct database call, always capitalize the SQL part of the statement. Most statements should be written on a single line, but it's OK to break the statement into multiple lines if the statement is complex.

```php
SELECT ID FROM wp_users WHERE user_login = 'example'
```

## 3 Dashboard and Settings

### ADDING MENUS AND SUBMENUS

#### Creating a Top‐Level Menu

A top‐level menu is common practice for any plugin that needs multiple option pages.  To register a top‐level menu, you use the `add_menu_page()` function.

```php
<?php add_menu_page( page_title, menu_title, capability, menu_slug, function, icon_url, position ); ?>
```

The `add_menu_page()` function accepts the following parameters:

- **page_title**: Title of the page as shown in the `<title>` tags.
- **menu_title**: Name of your menu displayed on the Dashboard.
- **capability**: Minimum capability required to view the menu.
- **menu_slug**: Slug name to refer to the menu; should be a unique name.
- **function**: Function to be called to display the page content for the item.
- **icon_url**: URL to a custom image to use as the menu icon. Also supports the dashicons helper class to use a font icon (e.g. dashicons‐chart‐pie).
- **position**: Location in the menu order where it should appear.

wp-content/plugin/mv-plugin/mv-plugin.php

```php
<?php
/**
 * Plugin Name: MV Plugin
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

  add_action( 'admin_menu', 'pdev_create_menu' );

  function pdev_create_menu() {
    //create custom top-level menu
    add_menu_page( 
      'MV Plugin Settings Page', 
      'MV Settings', 'manage_options', 
      'mv-options', 'mv_settings_page',
      'dashicons-smiley', 99 );

```

#### Adding a Submenu

```php
<?php add_submenu_page( parent_slug, page_title, menu_title,
capability,
 menu_slug, function ); ?>
```

The add_submenu_page() function accepts the following parameters:

- **parent_slug**: Slug name for the parent menu (menu_slug previously defined)
- **page_title**: Title of the page as shown in the `<title>` tags
- **menu_title**: Name of your submenu displayed on the Dashboard
- **capability**: Minimum capability required to view the submenu
- **menu_slug**: Slug name to refer to the submenu; should be a unique name
- **function**: Function to be called to display the page content for the item

```php
<?php
/**
 * Plugin Name: MV Plugin
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

  add_action( 'admin_menu', 'pdev_create_menu' );

  function pdev_create_menu() {
    //create custom top-level menu
    add_menu_page( 
      'MV Plugin Settings Page', 
      'MV Settings', 'manage_options', 
      'mv-options', 'mv_settings_page',
      'dashicons-smiley', 99 );

    //create submenu items
    add_submenu_page( 'mv-options', 'About The MV
      Plugin', 'About', 'manage_options', 'mv-about', 'mv_about_page' );
    add_submenu_page( 'mv-options', 'Help With The MV
      Plugin', 'Help', 'manage_options', 'mv-help', 'mv_help_page' );
    add_submenu_page( 'mv-options', 'Uninstall The MV Plugin', 'Uninstall', 'manage_options', 'mv-uninstall', 'mv_uninstall_page' );
}
```

### PLUGIN SETTINGS

### THE OPTIONS API

### THE SETTINGS API

### KEEPING IT CONSISTENT

### SUMMARY

## 4 Security and Performance
### SECURITY OVERVIEW
### USER PERMISSIONS
### NONCES
### DATA VALIDATION AND SANITIZATION
### FORMATTING SQL STATEMENTS
### SECURITY GOOD HABITS
### PERFORMANCE OVERVIEW
### CACHING
### TRANSIENTS
### SUMMARY

## 5 Hooks
UNDERSTANDING HOOKS
ACTIONS
FILTERS
USING HOOKS FROM WITHIN A CLASS
USING HOOKS WITH ANONYMOUS FUNCTIONS
CREATING CUSTOM HOOKS
FINDING HOOKS
SUMMARY
6 JavaScript
REGISTERING SCRIPTS
ENQUEUEING SCRIPTS
LIMITING SCOPE

LOCALIZING SCRIPTS
INLINE SCRIPTS
OVERVIEW OF BUNDLED SCRIPTS
POLYFILLS
YOUR CUSTOM SCRIPTS
jQuery
BACKBONE/UNDERSCORE
REACT
SUMMARY
7 Blocks and Gutenberg
WHAT IS GUTENBERG?
TOURING GUTENBERG
PRACTICAL EXAMPLES
TECHNOLOGY STACK OF GUTENBERG
“HELLO WORLD!” BLOCK
WP‐CLI SCAFFOLDING
CREATE‐GUTEN‐BLOCK TOOLKIT
BLOCK DIRECTORY
SUMMARY
8 Content
CREATING CUSTOM POST TYPES
POST METADATA
META BOXES
CREATING CUSTOM TAXONOMIES
USING CUSTOM TAXONOMIES
A POST TYPE, POST METADATA, AND TAXONOMY
PLUGIN
SUMMARY
9 Users and User Data

WORKING WITH USERS
ROLES AND CAPABILITIES
LIMITING ACCESS
CUSTOMIZING ROLES
SUMMARY
10 Scheduled Tasks
WHAT IS CRON?
SCHEDULING CRON EVENTS
TRUE CRON
PRACTICAL USE
SUMMARY
11 Internationalization
INTERNATIONALIZATION AND LOCALIZATION
CREATING TRANSLATION FILES
SUMMARY
12 REST API
WHAT THE REST API IS
WHAT YOU CAN DO WITH THE REST API
ACCESSING THE WORDPRESS REST API
THE HTTP API
WORDPRESS’ HTTP FUNCTIONS
BRINGING IT ALL TOGETHER
SUMMARY
13 Multisite
TERMINOLOGY
ADVANTAGES OF MULTISITE
ENABLING MULTISITE IN WORDPRESS
MULTISITE FUNCTIONS
DATABASE SCHEMA

QUERY CLASSES
OBJECT CLASSES
SUMMARY
14 The Kitchen Sink
QUERYING AND DISPLAYING POSTS
SHORTCODES
WIDGETS
DASHBOARD WIDGETS
REWRITE RULES
THE HEARTBEAT API
SUMMARY
15 Debugging
COMPATIBILITY
DEBUGGING
ERROR LOGGING
QUERY MONITOR
SUMMARY
16 The Developer Toolbox
CORE AS REFERENCE
PLUGIN DEVELOPER HANDBOOK
CODEX
TOOL WEBSITES
COMMUNITY RESOURCES
TOOLS
SUMMARY