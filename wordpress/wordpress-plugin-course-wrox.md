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

### AVAILABLE PLUGINS

### ADVANTAGES OF PLUGINS

### INSTALLING AND MANAGING PLUGINS

## 2 Plugin Framework

### REQUIREMENTS FOR PLUGINS

### BEST PRACTICES

### PLUGIN HEADER

### DETERMINING PATHS

### ACTIVATE/DEACTIVATE FUNCTIONS

### UNINSTALL METHODS

### CODING STANDARDS

### SUMMARY

## 3 Dashboard and Settings

### ADDING MENUS AND SUBMENUS

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