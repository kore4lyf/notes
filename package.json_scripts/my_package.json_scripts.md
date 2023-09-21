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