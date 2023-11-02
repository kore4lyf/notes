# HTML Multimedia 

## 1. Multemedia
Multimedia on the web is sound, music, videos, movies, and animations.

Multimedia comes in many different formats. It can be almost anything you can hear or see.

Examples: Images, music, sound, videos, records, films, animations, and more.

### Browser Support
The first web browsers had support for text only, limited to a single font in a single color.

Later came browsers with support for colors and fonts, and images!

Audio, video, and animation have been handled differently by the major browsers. Different formats have been supported, and some formats require extra helper programs (plug-ins) to work.

Hopefully this will become history. HTML5 multimedia promises an easier future for multimedia.


### Multimedia Formats
Multimedia elements (like audio or video) are stored in media files.

The most common way to discover the type of a file, is to look at the file extension.

Multimedia files have formats and different extensions like: .swf, .wav, .mp3, .mp4, .mpg, .wmv, and .avi.


## 2. Video 
```html 
<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
  Your browser does not support the video tag.
</video>
``` 
The controls attribute adds video controls, like play, pause, and volume.

It is a good idea to always include width and height attributes. If height and width are not set, the page might flicker while the video loads.

The `<source>` element allows you to specify alternative video files which the browser may choose from. The browser will use the first recognized format.

The text between the `<video>` and `</video>` tags will only be displayed in browsers that do not support the `<video>` element.



**To start a video automatically use the autoplay attribute:**
```html 
<video width="320" height="240" autoplay>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
Your browser does not support the video tag.
</video>
```

### Controling Video with javascript 
```js 
<!DOCTYPE html> 
<html> 
<body> 

<div style="text-align:center"> 
  <button onclick="playPause()">Play/Pause</button> 
  <button onclick="makeBig()">Big</button>
  <button onclick="makeSmall()">Small</button>
  <button onclick="makeNormal()">Normal</button>
  <br><br>
  <video id="video1" width="420">
    <source src="mov_bbb.mp4" type="video/mp4">
    <source src="mov_bbb.ogg" type="video/ogg">
    Your browser does not support HTML5 video.
  </video>
</div> 

<script> 
var myVideo = document.getElementById("video1"); 

function playPause() { 
  if (myVideo.paused) 
    myVideo.play(); 
  else 
    myVideo.pause(); 
} 

function makeBig() { 
    myVideo.width = 560; 
} 

function makeSmall() { 
    myVideo.width = 320; 
} 

function makeNormal() { 
    myVideo.width = 420; 
} 
</script> 

<p>Video courtesy of <a href="https://www.bigbuckbunny.org/" target="_blank">Big Buck Bunny</a>.</p>

</body> 
```

### Track (Subtitle)
The `<track>` tag specifies text tracks for media elements (`<audio>` and `<video>`).

This element is used to specify subtitles, caption files or other files containing text, that should be visible when the media is playing.


**A video with two subtitle tracks:**
```html
<video width="320" height="240" controls>
  <source src="forrest_gump.mp4" type="video/mp4">
  <source src="forrest_gump.ogg" type="video/ogg">
  <track src="subtitles_en.vtt" kind="subtitles" srclang="en" label="English">
  <track src="subtitles_no.vtt" kind="subtitles" srclang="no" label="Norwegian">
</video>
```




## 3. Audio
Before HTML5, audio files could only be played in a browser with a plug-in (like flash).

The HTML5 `<audio>` element specifies a standard way to embed audio in a web page. 
```html 
<audio controls>
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
Your browser does not support the audio element.
</audio>
```


## Plug-ins 
The purpose of a plug-in is to extend the functionality of a web browser.

Helper applications (plug-ins) are computer programs that extend the standard functionality of a web browser.

Examples of well-known plug-ins are Java applets.

Plug-ins can be added to web pages with the `<object>` tag or the `<embed>` tag. 

Plug-ins can be used for many purposes: display maps, scan for viruses, verify your bank id, etc. 



###  The `<object>` Element
The `<object>` element is supported by all browsers.

The `<object>` element defines an embedded object within an HTML document.

It is used to embed plug-ins (like Java applets, PDF readers, Flash Players) in web pages.

Example
```html
<object width="400" height="50" data="bookmark.swf"></object>
``` 

The `<object>` element can also be used to include HTML in HTML:

Example
```html
<object width="100%" height="500px" data="snippet.html"></object>
```


Or images if you like:

Example
```html
<object data="audi.jpeg"></object>
```


### The `<embed>` Element
The `<embed>` element is supported in all major browsers.

The `<embed>` element also defines an embedded object within an HTML document.

Web browsers have supported the `<embed>` element for a long time. However, it has not been a part of the HTML specification before HTML5.

Example
```html 
<embed width="400" height="50" src="bookmark.swf">
```

Note that the `<embed>` element does not have a closing tag. It can not contain alternative text.

The `<embed>` element can also be used to include HTML in HTML:

Example
```html 
<embed width="100%" height="500px" src="snippet.html">
``` 

Or images if you like:

Example
```html 
<embed src="audi.jpeg">
``` 



## 4. YouTube Videos 
The easiest way to play videos in HTML, is to use YouTube.

Struggling with Video Formats?
Earlier in this tutorial, you have seen that you might have to convert your videos to different formats to make them play in all browsers.


Example - Using iFrame (recommended)
```html 
<iframe width="420" height="315"
src="https://www.youtube.com/embed/tgbNymZ7vqY">
</iframe>
```

### YouTube Autoplay
Value 0 (default): The video will not play automatically when the player loads.

Value 1: The video will play automatically when the player loads.

YouTube - Autoplay
```html 
<iframe width="420" height="315"
src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1">
</iframe>
```

### YouTube Mute
Value 0 (default): Don't Mute

Value 1: Mute

YouTube - Mute
```html 
<iframe width="420" height="315"
src="https://www.youtube.com/embed/tgbNymZ7vqY?playlist=tgbNymZ7vqY&mute=1">
</iframe>
```

### YouTube Playlist
A comma separated list of videos to play (in addition to the original URL).

#### YouTube Loop
Value 0 (default): The video will play only once.

Value 1: The video will loop (forever).

YouTube - Loop
<iframe width="420" height="315"
src="https://www.youtube.com/embed/tgbNymZ7vqY?playlist=tgbNymZ7vqY&loop=1">
</iframe>


### YouTube Controls
Value 0: Player controls does not display.

Value 1 (default): Player controls display.

YouTube - Controls
```html
<iframe width="420" height="315"
src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=0">
</iframe>
```



