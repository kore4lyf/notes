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
and edit it. 

```json 
{
  "name": "lesson2",
  "version": "1.0.0",
  "main": "tailwind.config.js",
  "scripts": {
    "tailwind": "npx tailwindcss -i ./src/input.css -o ./build/css/style.css --watch",
    "prettier": "npx prettier --write **/*.html"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "devDependencies": {
    "prettier-plugin-tailewindcss": "^0.5.2"
  }
}
```


**RUN TAILWIND** 
```sh 
npm run tailwind
```

## 8. Link your generated style to your webpage 
```sh 
<link href="css/style.css" rel="stylesheet">
```


## Install prettier-plugin-tailwindcss 
```sh 
npm -i -D prettier-plugin-tailwindcss
``` 
It will be listed as a dev dependency in the package.json 

Prettier is used for arranging the class order. Tailwindcss provided the plug-in, because they recommended the order that classes will be listed in. 

When prettier is run, it will automatically format the class in the appropriate order.

If prettier-plugin-tailwindcss was installed as a dev dependency it will be automatically add in package.json.

You can also install globally but you have to manually type it as a dev dependency.
```json
devDependencies": {
    "prettier-plugin-tailewindcss": "^0.5.2"
  }
``` 



## Organize classes 
When you are done with your project you shoild run prettier, to help you organise the classes.

```sh
npm run prettier
```