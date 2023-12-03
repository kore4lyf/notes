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



