# Web Accessiblity - Udacity

##  Accessiblity overview 
 Because web accessiblity is large we'd be referring to WCAG 2.0 (Web content accessibility guidelines) 

**WCAG** - is a set of guidelines and best practices, Which have been put together by accessiblity experts to try and answer the question of what accessibility really means.  

WCAG is organised around 4 core principles 
POUR 

1. Perceivable - this ensures thatusers can perceive content. Just because a content is perceivable woth one sense such as seight doesn't mean that all users can perceive it.

2. Operable - is it operable, can users use UI components, and navigate the content e.g. Something that requires using a hover reaction cannot be achieved by someone who isn't using a mouse and a touch screen. 

3. Understandable - Can all users understand the interface and is it consists enough to avoid confusion.

4. Robust - is the content robust enough to be consumed by a wide variety of people.



> The webaim check list is a compressed version of WCAG. 

### The remaining parts of the course is organised into 
- **Focus** - Focusing keyboard, making sure that we build things that is operable by the keyboard. 
- **operable** - Making ymsure that the UI is being expressed in a robust way that work with a variety of assistive technology.
- **Styling & Visual design** - Ensure the UI is as flexible and usable as possible.



## Focus 
WebAIM checklist items: 
2.1.1: http://webaim.org/standards/wcag/checklist#sc2.1.1


### What is tab focus
Move focus around the page using your keyboard:

- TAB will move focus forward
- SHIFT - TAB will move focus backwards
- Arrow keys can be used to navigate inside of a component

(Focus Management)[https://www.w3.org/TR/html5/editing.html#focus-management)


Operable
Interface forms, controls, and navigation are operable. 

Guideline 2.1
Make all functionality available from a keyboard. 

2.1.1 Keyboard
A 2.0
All page functionality is available using the keyboard, unless the functionality cannot be accomplished in any known way using a keyboard (e.g., free hand drawing).
Page-specified shortcut keys and accesskeys (accesskey should typically be avoided) do not conflict with existing browser and screen reader shortcuts. 

2.1.2 No Keyboard Trap
A 2.0
Keyboard focus is never locked or trapped at one particular page element. The user can navigate to and from all navigable page elements using only a keyboard 

2.1.3 Keyboard (No Exception)
AAA 2.0
All page functionality is available using the keyboard.

2.1.4 Character Key Shortcuts
A 2.1
If a keyboard shortcut uses printable character keys, then the user must be able to disable the key command, change the defined key to a non-printable key (Ctrl, Alt, etc.), or only activate the shortcut when an associated interface component or button is focused.



### DOM Order Matters 
The tab order corresponds to the DoM order. 

WebAIM checklist items: 
1.3.2: http://webaim.org/standards/wcag/checklist#sc1.3.sc2


1.3.2 Meaningful Sequence
A 2.0
The reading and navigation order (determined by code order) is logical and intuitive. 




### Using Tabindex 


#### Deciding whats in focus 
Only use Tabindex on interactive elements. We should typically only add tabindex attributes to interactive elements, and not to our site content. 


### Managing Focus

You can skip ahead to Lesson 6 to learn how to change or remove the focus ring from an element. In this case, since we're managing focus and headers are typically not interactive it's probably OK to remove their focus ring. However, you should never remove the focus indicator from an interactive element unless you're going to replace it with something else. Otherwise a keyboard user might have no idea which element is currently focused!

You can manage the focus of a page with a A large nav links by settings a tab-index = -1 on it's header and using JavaScript to focus on the element.
 
#### Linking within a page
Text heavy sites often interlink within the same page to help users quickly jump to important sections.

```html 
<!-- Table of Contents -->
<a href="#recipes">Recipes</a>
<a href="#ingredients">Ingredients</a>

<!-- Recipes Section -->
<h2 id="recipes">Recipes</h1>
<h3>Vegemite Cheesecake</h3>
<p>
    Vegemite cheesecake is delicious. We promise.
    <a href="cheesecake.html">Read More</a>
</p> 
```
 
 
### Skip links 
Skip links are invisible anchors which can only be reached via the keyboard. They allow users to “skip" navigation elements in order to jump straight into the content of a page and they can be extremely beneficial for keyboard and switch device users. 

Without some sort of system for bypassing the long list of links, some users are at a huge disadvantage. Consider users with no arm movement, who use computers by tapping their heads on a switch or that use a stick in their mouth to press keyboard keys. Requiring users to perform any action perhaps 100s of times before reaching the main content is simply unacceptable.

The idea is simple enough: provide a link at the top of the page that, when activated, jumps the user to the beginning of the main content area. 


The link is the first item in the page. The anchor or target for the link (where the link will jump the user to) is the main content region.

```html
<body>
<a href="#maincontent">Skip to main content</a>
...
<main id="maincontent">
<h1>Heading</h1>
<p>This is the first paragraph</p> 
``` 

The target is identified by its id attribute value matching the href value (minus the "#") of the skip link. When the skip link is activated, keyboard focus will go to the `<main>` element. Navigation and reading will proceed from this location in the page.


#### Which wording is best?
There are multiple ways that the skip link could be worded:

- Skip navigation
- Skip main navigation
- Skip navigation links
- Skip to main content
- Skip to content 

Any of these may be sufficient so long as the purpose of the link is clearly described. In general, we prefer "Skip to main content" as it explains where the user is navigating to versus what they are navigating past.

#### Multiple skip links are usually unnecessary
What if a page has multiple sections or multiple levels of navigational links? Should developers provide a skip navigation link to each of these sections or to skip over each level of navigational?

In most cases, a single skip link is sufficient.



### Offscreen Content 
To prevent Offscreen content from being focused, set it's `display to none` or `visibility to hidden` 

#### Hiding elements
There may be times when a user will be focused on an item that needs to be set to `visibility: hiddbe` or `display: none`. An example of this would be clickable items within a carousel. 



### Modals and Keyboard Traps 

2.1.2 No Keyboard Trap
A 2.0
Keyboard focus is never locked or trapped at one particular page element. The user can navigate to and from all navigable page elements using only a keyboard. 






















