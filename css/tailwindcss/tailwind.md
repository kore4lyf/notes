# Tailwind CSS 

## 1. Installation 
```sh 
npm install tailwindcss postcss autoprefixer
``` 

## 2. New dir 
```sh  
mkdir my_tailwind_project
cd my_tailwind_project
``` 


## 3. New dir for html
```sh 
mkdir build
touch build/index.html
```

## 4. Initialize config 
```sh 
npx tailwindcss init
```
The command above will create a **tailwind.config.js** file in your project’s root directory


## 5. Configure tailwind.config.js 
```sh 
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {},
  },
  plugins: [],
}
```


## 6. Create & Setup input css

```sh 
mkdir src 
touch src/input.css 
```

**/src/input.css**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
``` 


## 7. Generate css by setting up watcher 
```sh 
npx tailwindcss -i ./src/input.css -o ./build/style.css --watch
 ``` 

or 

```sh 
npm init -y 
``` 
create a package.

## 8. Link your generated style to your webpage 
```sh 
<link href="css/style.css" rel="stylesheet">
```


## Install prettier-plugin-tailwindcss 
```sh 
npm -i -D prettier-plugin-tailwindcss
``` 
It will be listed as a dev dependency in the package.json 

Prettier is used for arrange the class order. Tailwindcss provided the plug-in, because they gave recommended order that class order of classes.