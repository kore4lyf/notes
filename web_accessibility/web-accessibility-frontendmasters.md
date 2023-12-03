# Web Accessiblity 

## 1. Introduction 
### Accessiblity 
When website and web tools are properly designed and coded, people with disabilities can use them. However, currently many site and tools are developed with accessibility barriers tbat make them difficult and impossible for some people to use. Making the web accessible benefits individuals, businesses and society. 

> Web accessiblity means that people with disabilities can use the web.


#### Similar Fields 
- Web performance 
- Internalization - Process of making your your app translated, then usable in people's native languages. 
- UI design 

. More specifically, web accessiblity means that people with disabilities can perceive, understand navigate and interact with the web and they can make contributions to the web.


#### Types of Disabilities 
- Mobility and physical
- Cognitive and neurological
- Visual 
- Hearing 


### Amazing ways people use the web
- Keyboard Only
- Head Wand
- Mouth Stick
- Single Switch
- Screen Reader


### Curb Cut Effect
The Curb-Cut Effect, in its essence, asserts that an investment in one group can cascade out and up and be a substantial investment in the broader well-being of a nation -- one whose policies and practices create an equitable economy, a healthy community of opportunity, and just society. 


### Accessibility Standards
#### Web Content Accessibility Guidelines (WCAG)
WCAG specifies three different conformance levels they are:
- A (lowest)
- AA (mid range)
- and AAA (highest) 

Level A sets a minimum level of accessibility and does not achieve broad accessibility for many situations. University of California commendsds AA conformance for all Web-based information.


#### WebAIM
WebAIM provides a handy checklist with their recommendations.

WebAIM specifies that accessible websites should be:

- Perceivable
- Operable
- Understandable
- Robust



## 2. Screen Readers 

### How they work
Screen readers convert digital text into synthesized speech. They empower users to hear content and navigate with the keyboard. The technology helps people who are blind or who have low vision to use information technology with the same level of independence and privacy as anyone else.
 
#### What they all let you do
1. Display a list of links
2. Display a list of headings
3. List of popular screen readers 

#### Screenreader user share
1. Jaws - 50% 
2. NVDA 
3. Voice over 
4. Zoom Text 
5. System Access 
6. Window Eye 
7. Chrome Vox 
8. Narrator
9. other


#### Voiceover for Mac
How to enable VoiceOver for Mac
1. System Preferences
2. Accessibility
3. VoiceOver
4. Enable VoiceOver
5. cmd + f5 

#### Chrome screen reader 
Google offers a free screen reader built into the browser which you can download as an extension.

#### NVDA for Windows
The most popular free screen reader for Windows is NVDA and can be found here. 




### Alternate Text and Caption 
By default, when a screen reader encounters an image, if it can't find alt text it will read aloud the file's name.

This gets especially tricky for user generated images which often get hashed file names. 

Adding an alt attribute will override that behavior. Screenreaders will read the alternative text instead of the file name.

```html 
<img src="https://pbs.twimg.com/media/KSJHECKJH983er.jpg" alt="A puppy in the park" /> 
``` 

#### Skipping over images
Sometimes your website will have images that are strictly for decorative purposes. In that case, an empty alt attribute will force the screen reader to skip over the image.
```html 
<img src="https://pbs.twimg.com/media/KSJHECKJH983er.jpg" alt="" />
``` 


#### A note on SEO
Search engines also make use of alternative text. For years SEO shops have suggested stuffing the keywords you want to rank for into alt text wherever possible. This provides a very bad accessibility experience.

WebAIM's Recommendations
- **1.1.1 Non-text Content (Level A)** - 
  - Images, form image buttons, and image map hot spots have appropriate, equivalent alternative text. 
  - Images that do not convey content, are decorative, or contain content that is already conveyed in text are given empty alternative text (alt="") or implemented as CSS backgrounds. All linked images have descriptive alternative text. 
  - Equivalent alternatives to complex images are provided in context or on a separate linked page. 
  - Form buttons have a descriptive value. 
  - Form inputs have associated text labels. 
  - Embedded multimedia is identified via accessible text. 
  - Frames and iframes are appropriately titled.


#### Captions for audio
Remember not all content on the web is visual! If your application has video content, be sure to use a captioning service to add closed captioning.

- 1.2.1 Prerecorded Audio-only and Video-only (Level A) 
   - A transcript of relevant content is provided for non- live audio-only (audio podcasts, MP3 files, etc.). 
   - A transcript or audio description of relevant content is provided for non-live video-only, unless the video is decorative.

- 1.2.2 Captions (Prerecorded) (Level A) 
  - Synchronized captions are provided for non-live video (YouTube videos, etc.). 

- 1.2.3 Audio Description or Media Alternative | (Prerecorded) (Level A)
  - A transcript or audio description is provided for non- live video.
NOTE: Only required if there is relevant visual content that is not presented in the audio.





## Accessible HTML
### Semantic Elements
Some elements have semantic meaning but no special functionality. Examples are:
```html 
<aside>
<footer>
<header>
``` 

Other's provide a lot of built-in functionality such as:
```html 
<button>
<input>
<textarea> 
``` 

- 1.3.1 Info and Relationships (Level A) 
  - Semantic markup is used to designate headings (`<h1>`), regions/landmarks, lists (`<ul>, <ol>, and <di>`), emphasized or special text (`<strong>, <code>, <abbr>, <blockquote>`, for example), etc. Semantic markup is used appropriately.
  - Tables are used for tabular data and data cells are associated with their headers. Data table captions, if present, are associated to data tables. 
  - Text labels are associated with form input elements. Related form elements are grouped with fieldset/legend. ARIA labelling may be used when standard HTML is insufficient.


##  Accessible Form Field Labels 
### Labels
Form fields can be confusing for screen reader users. There are many ways to label form fields so the label is read out loud whenever the field has focus.


### Visual only labels
A common pattern is using div's or paragraph tags to label form fields.


### HTML labels
A better option is to use the HTML label tag which will allow screen readers to recite the label when the field is focused.

```html 
<form>
  <label for="first">First Name</label>
  <input id="first" type="text" />
  <label for="last">Last Name</label>
  <input id="last" type="text" />
  <label for="password">Password</label>
  <input id="password" type="password" />
  <input type="submit" value="Submit" />
</form> 
``` 

### Implicit HTML labels
Another cool trick you can do is wrap your inputs with the label tag. This is called implicit labelling.

```html 
<form>
  <label>
    First Name
    <input id="first" type="text" />
  </label>
  <label>
    Last Name
    <input id="last" type="text" />
  </label>
  <label>
    Password
    <input id="password" type="password" />
  </label>
  <input type="submit" value="Submit" />
</form>
``` 


### Limitations with the <label> tag
The label tag can only works with "labelable" elements. Those include:
```html 
<button>
<input>
<keygen>
<meter>
<output>
<progress>
<select>
<textarea> 
```
If you ever need to label an element not on that list, use aria-label instead.

```html 
<div aria-label="Interactive div">Hello</div>
```


### Screenreader only content
Sometimes you'll want to communicate with a screen reader directly! One cool example is announcing to screen reader users that you offer accessibility features! In that case you can make some HTML and wrap it in a visually hidden class.

```css 
.visuallyhidden {
  position: absolute;
  left: 0;
  top: -500px;
  width: 1px;
  height: 1px;
  overflow: hidden;
} 
``` 


### The life of a button
Let's take a regular button like the one below:

This is generated by the following code:
```html 
<button onclick="alert('hello')">Click me!</button>
``` 

This looks like a simple piece of markup but there is a lot of functionality behind that button tag!

Let's start with a different element, say a div tag.

1. We start with a div
```html 
  <div 
    onclick="alert('hello')"> 
    Click me!
  </div> 
```
        
2. We could give it an ARIA role - (more on ARIA later)
This will let screen readers know the element can be clicked.
```html 
<div 
  role="button" 
  onclick="alert('hello')"> 
  Click me! 
</div>
``` 

3. We could give it a tabindex. This will allow keyboard only users to tab to it.
```html 
<div 
  tabindex="0" 
  role="button" 
  onclick="alert('hello')"> 
  Click me! 
</div>  
```
        
4. Don't forget about keyboard only users!
```html 
  <div 
    tabindex="0" 
    role="button" 
    onclick="alert('hello')" 
    onkeyup="alert('hello')"> 
    Click me! 
  </div> 
```
        
5. Don't forget about screen reader users either! 
```html
<div 
  aria-label="Alert the word hello" 
  tabindex="0" role="button" 
  onclick="alert('hello')" 
  onkeyup="alert('hello')"> 
  Click me! 
</div> 
```





























