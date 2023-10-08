```json 
{
// sass 
  "sass": "sass ./sass/main.scss:./public/css/style.css -w --style compressed", 
   "watch-sass": "sass --watch ./style.scss ../css/style.css",
    "compile-sass": "sass style.scss ../css/style.css"
  },





// postcss & autoprefixer
  "prefix": "postcss ./public/css/style.css --use autoprefixer -d ./public/css/prefixed/"
  }, 
 
 
 
 
  
// Tailwindcss 
  "tailwind": "npx tailwindcss -i ./src/input.css -o ./build/css/style.css --watch", 
  
  "prettier": "npx prettier --write **/*.html" 
  
}

```json 
"scripts": {
        "compile:sass": "node-sass sass/main.scss css/style.comp.css",
        "concat:css": "concat -o css/style.concat.css css/style.comp.css css/any-other-file.css",
        "prefix:css": "postcss --use autoprefixer -b \"last 10 versions\" css/style.comp.css -o css/style.prefix.css",
        "compress:css": "node-sass css/style.prefix.css css/style.css --output-style compressed",
        "build:css": "npm-run-all compile:sass concat:css prefix:css compress:css"
    }
``` 



1️⃣ compile:sass (optional)
It's only if you write in Sass, you need this step otherwise skip it.🏂 This will just compile your sass code to browser readable css.

node-sass: 📌 package name
sass/main.scss : ☑ address of our manually written sass file
css/style.comp.css: ✅ address where the resulting output of css file will be stored


2️⃣ concat:css (optional)
If you have your css in more than one file, then you'd probably want to combine them into one css file which is better for your browser which only would have to make one HTTP request instead of two.

concat : 📌 package name
-o / --output : denotes the output file
css/style.concat.css: ✅ address of output file where all combined css is going to be stored
css/style.comp.css: ☑ file returned from step 1
css/any-other-file.css: ☑ any other css file which needs to be combined in the final
P.S.: If you have just one file this step doesn't make any sense. So skip, but make sure your keep track of the trail i.e. which file is returned from which step and which one is being put.


3️⃣ prefix:css
This is the command with which your css is going to have vendor prefixes like -webkit-, -moz, -ms- and -o-, which otherwise you'd have to add manually.

Vendor prefixing is a way for browser makers to add support for new CSS features before those features are fully supported in all browsers.

How and why you would want to use CSS vendor prefixes in your website?

postcss : 📌 package name (autoprefixer is a part of postcss)
--use : list of postcss plugins to use (i.e autoprefixer, here)
autoprefixer : package name which prefixes our css
-b : b is for browsers so we can specify which browsers to make our css compatible for
"last 10 versions" : this fetches last 10 versions of all major broswers from caniuse.com
css/style.concat.css : ☑ address of file we're going to put
-o : option for output
css/style.prefix.css : ✅ address of output file
P.S.: While writing last 10 versions I faced an issue, which was because of the double quotes as it is included inside another double quote, so we need to escape this using \ before every double quote inside the main double-quotes.


4️⃣ compress:css
This will reduce your css file size to a great extent resulting in faster page loads.

node-sass : 📌 package name
css/style.prefix.css : ☑ file containing the input for this command (uncompressed css)
css/style.css : ✅ address of the output file (compressed css)
--output-style compressed : command to make the compression
P.S.: You can choose to output the compressed css into another css file, like style.min.css which is alright, but you'll then need to add a link tag to your HTML to include this.


5️⃣️ build:css
At last, you want to run all of this by running just one command.

npm-run-all : 📌 package name
compile:sass concat:css prefix:css compress:css : list of commands in order of their sequence for execution
FunFact: 😉 You can add --parallel after the package name in this to run all the processes simultaneously which is helpful in some places, but not here. Why? Because here, each script is like a function that takes a file as input and its output file is required in the next function/script, which isn't possible if they run simultaneously. 



