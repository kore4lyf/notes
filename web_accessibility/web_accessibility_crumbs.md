# Web Accessiblity 

## Web accessiblity with Ashlee Boyer by Kevin Powel
### Resources to improve yourself on accessibility 
- (a11yproject.com)[a11yproject.com] - Learn the fundamental principles behind accessible design.
- Find more links in videos description 
- Follow ashlee boyer on twitter 

### 4 Categories of Disability
- Visual - Color Blindness, Actual Blindness or Vision
- Motor - People without a motor skill e.g. people who can't use the mouse or keyboard 
- Auditory - hearing 
- Cognative - Brain problems

> Think about the kind of people you are trying you make something accessble to and how you can serve it to them. 

#### Visual 
- Color contrast 
- Text over the top of Images / in Images
- Font Sizes 
- Semantic HTML - for Screen Readers


> In videos, transcripts makes the video content accessible, to viewer who can hear. 

#### Motor 
- Keyboard navigation - Hidden content

> You need to think about how much work people need to do to access your content because disabled people have less energy. 

NB: Spoon Theory: is something that is used to describe energy levels. e.g. I am out of spoons. 

Some peoples habd shake while working on something, so you want to ensure that you have big buttons. 

- Timing - iTry not to have timed actions because some people only type woth one hand .

### Cognatuve
- Text Density - e.g. Amazon is dense 
Links have underline 
buttons have Outline 
etc 

- Auto playing videos - people can get easily distracted by auto playing video. 
If yiur website has one you should allow you iser disable them in case they don't like it.

- Animation can be a real headache for people or it can make some people nauseous and it can cause s seizure.

  - disable animation by default: 
  - There are CSS properties that supports reduced motion: `prefers-reduced-motion`. 
  - Only turn animations on for people that really wants it.

### What is ARIA 
ARIA - stand for Accessible Rich Internet Applications.

- No ARIA is better than bad ARIA 
- Always Use symantic elements
- Dark mode is an accessiblity consideration.


## Accessibility Fundamentals with Rob Dodson
What is accessiblity - Given users with disabilities or impairment access to content.

There are a lot of way to make a website accessible, but one is a Screen Reader access. 

When you think about screen reader access, have this notion of affordance in you head.

AFFORDANCE - is anything that offers a person the opportunity to perform an action. 
e.g. Teapot don't come with instructions manual, but you just know that you can hold it by it handle.
Door handles -  provide affordance with their physical structure.

We also try to add these affordances to our design too e.g 3 dimensional button.
Id a user is non sighted how do we apply the same visual affordances. 

### How chrome talks to a screen reader 
1. HTML 
|
| Parse  
|
2. DOM 
| 
3. Accessiblity Tree 

accessibility Tree - is similar to the DOM, but with only node that are only semantically interesting. e.g. DIVs are pruned out, button, likes e.t.c are added. 

Accessiblity tree is accessible in chrome dev mode.


WAI-ARIA - Web accessibility initiative - Accessible Tich Internet Applications specifications adds the ability **modify and enhance** the **semantic meaning of elements** in the DOM.  

WAI-ARIA lets you add semantics to an element. 
- ARIA dosen't change an elements behaviour, it changes what a screen reader is going to announce when your user.
- ARIA lets you fill in the gaps(or missing pieces) in the accessibility tree. 


### How can I lean ARIA 
1. ARIA Specifications Manual 
2. WAI-ARIA authoring Practices (ARIA Guide)[bit.ly/aria-guide] 


Labels - Labels help users understand the purpose of a control. 
- aria-label - overides any other native labelling mechanism m

- aria-labelledby - a reference to an element (or elements) which will act as an accessible label. Overrides any other labelling mechanism including aria-label. 
For example: 
```html 
<h2 id="lbl">  Men's Outerwear</h2>
<button id="btn" aria-labelledby="lbl  btn"> Shop Now</button>
``` 
Mens outerwear, shop now, button 

### Tools & resource  
a11y - means accessibility (11 letters in between) 
- Webaim.com 
- allycasts - (a11ycasts)[bit.ly/a11ycasts] on YouTube 
- (Web accessiblity by Google)[bit.ly/web-a11y]  - on  Udacity 
- A text versions of the course "Web accessiblity by Google" is available. (Accessibility Fundamentals)[bit.ly/a11y-fundamentals].








## Building Accessible forms 
- Your form should always have an header 

```html 
<h1>  Contact Us </h1> 
<form> 
  <label for="name"> Name </label>
  <input id="name" type="text"/>
</form>
```


## Link with SVGs or Images 
To make them accessible use `aria-label`.
```html 
<a href="./Facebook.com/idk" aria-label="Click to visit our Facebook page">
  <svg> </svg>
</a>
```



## Others 

###  Buttons must have a name
The button-name rule has five markup patterns that pass test criteria:
```html
<button id="text">Name</button>

<button id="al" aria-label="Name"></button>

<button id="alb" aria-labelledby="labeldiv"></button>
<div id="labeldiv">Button label</div>

<button id="combo" aria-label="Aria Name">Name</button>

<button id="buttonTitle" title="Title"></button> 
```
Ensure that each button element and elements with role="button" have one of the following characteristics:

Inner text that is discernible to screen reader users.
Non-empty aria-label attribute.
aria-labelledby pointing to element with text which is discernible to screen reader users.
role="presentation" or role="none" (ARIA 1.1) and is not in tab order (tabindex="-1"). 



