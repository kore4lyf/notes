# Tailwind CSS

## Installation using vite

Installing Tailwind CSS as a Vite plugin is the most seamless way to integrate it with frameworks like Laravel, SvelteKit, React Router, Nuxt, and SolidJS.

01 Install Tailwind CSS
Install tailwindcss and @tailwindcss/vite via npm.

```sh
npm install tailwindcss @tailwindcss/vite
```

02 Configure the Vite plugin

Add the @tailwindcss/vite plugin to your Vite configuration.

vite.config.ts

```ts
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```

03 Import Tailwind CSS
Add an @import to your CSS file that imports Tailwind CSS.

```css
@import "tailwindcss";
```

04 Start your build process
Run your build process with npm run dev or whatever command is configured in your package.json file.

```sh
npm run dev
```

05 Start using Tailwind in your HTML
Make sure your compiled CSS is included in the `<head>` (your framework might handle this for you), then start using Tailwind’s utility classes to style your content.

```html
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="/src/styles.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>
```

## Using PostCSS

01 Install Tailwind CSS
Install tailwindcss, @tailwindcss/postcss, and postcss via npm.

```sh
npm install tailwindcss @tailwindcss/postcss postcss
```

02 Add Tailwind to your PostCSS configuration
Add @tailwindcss/postcss to your postcss.config.mjs file, or wherever PostCSS is configured in your project.

```mjs
postcss.config.mjs
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  }
}
```

03 Import Tailwind CSS
Add an @import to your CSS file that imports Tailwind CSS.

```css
@import "tailwindcss";
```

04 Start your build process
Run your build process with npm run dev or whatever command is configured in your package.json file.

```sh
npm run dev
```

05 Start using Tailwind in your HTML
Make sure your compiled CSS is included in the `<head>` (your framework might handle this for you), then start using Tailwind’s utility classes to style your content.

```html
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="/src/styles.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>
```

## Media Queries and Responsive Design

Tailwindcss make web design easy by using Mobile first approach.

It also provides a set of width (sm, md, lg, xl, 2xl etc) by default they use min-width to style large screens not smaller. (max-sm, max-md, max-lg e.t.c) can be used to target smaller screens if compulsory (or if you are using a desktop first approach).
sm should not be thought of a small screen, but as a break point.

You can also provide custom media queries.
like min-[300px] to target screen larger than 300px

```html
<p class="min-[300px]:bg-red-500">
```

### Customize your breakpoint

```css
import "tailwindcss";

@theme {
  --breakpoint-xs: 30rem;
  --breakpoint-2xs: 100rem;
  --breakpoint-3xs: 120rem;
}
```

### Custom Style & Reusability (Theme Variables)

Hard coding custom color in HTML

```html
<p class="text-[#a3422a]"> HELLO WORLD!</p>
```

Another approach. Tailwindcss 4 allow you to configure you style in css instead of in JavaScript.

```css
import "tailwindcss";

body {
  background-color: #10172a;
}

@theme {
  --color-chestnut: #973F29;
}
```

```html
<p class="text-chestnut"> HELLO WORLD!</p>
```

All variable have a format in which they must appear.
Colors are defined by prefixing them with --color-.

--font-*
e.g. font-sans

--text-*
e.g. text-xl

--font-weight-*
e.g. font-bold

--tracking-*
e.g. tracking-wide

--leading-*
e.g. leading-tight

--breakpoint-*
e.g. sm:*

--container-*
e.g. container query variants like `@sm:*` and size utilities like `max-w-md`

--spacing-*
e.g px-4, max-h-16

--radius-*
e.g. rounded-sm

--shadow-*
e.g. shadow-md

--inset-shadow-*
e.g. inset-shadow-xs

--drop-shadow-*
e.g. drop-shadow-md

--blur-*
e.g. blur-md

--perspective-*
e.g. perspective-near

--aspect-*
e.g. aspect-video

--ease-*
e.g. ease-out

--animate-*
e.g. animate-spin

#### Using Directives

- base
- components
- utilities

base applies styles globally across a project.

```css
@layer base {
  h1: {
    color: green
  }
}
```

e.g. p, pre, a e.t.c.

components is used to style specific components like footer, card e.t.c.

```css
@layer components {
 .card {
  background-color: var(--color-white);
  boder-radius: var(--ronded-lg);
 }
}
```

utilities are atomic style for margins, padding, typography and colors.

```css
@utility content-auto {
  content-visible: auto;
}
```

@apply is another directive that apply tailwindcss styles into css.

Using both the @layer and @apply we can use create custom styles with tailwind like it's done in css.

```css
@import "tailwindcss"

@custom-variant dark (&:where(.dark, .dark *))

body {
  background-color: #10172a;
}

@theme {
  --color-black: #000000;
}

@layer base {
  h1 {
    @apply text-base font-medium tracking-tight dark:text-blue-900;
  }

  p {
    @apply mt-2 text-sm text-slate-900 dark: text-blue-100;
  }
}

@layer components {
  .card {
    @apply m-10 rounded-lg bg-white;
  }
}

@utilities flex-center {
  @apply flex justify-center items-center;
}
```

## Tailwindcss Tips and Tricks

### Change the default accent color for checkboxes, radio, range slider and progress element

```html
<input type="checkbox" class="accent-green-400"/>
```

### Fluid Text

For example assuming you want to set a large font size for a you website on large screens and small font size on small screens.

A traditional approach

```html
<p class="sm:text-7xl text-5xl">Message</p>
```

Trick

```html
<p class="text-[min(10vw, 70px)]"> Something Fluid </p>
```

### Style File Upload

Use file prefix

```html
<input type="file" class="file:rounded-ful file: border-0 file:bg-violet-50 file:px-4 file:py-2 file:text-sm">
```

### Style Text Highlight color

```html
<div class-"selection:bg-green-400 selection:text-white">
```

### Style Caret

```html
<textarea class="w-full caret-pink-500git">
```

### Change the style of an element based on the state of another element

- group (parent)
- peer (sibling)

By adding the word `group` to the class of the parent and `group-hover:` to the child's class.

```html
<div class="group grid place-content-center h-20 w-20 bg-blue-400 ">
  <div class="w-5 h-5 bg-black group-hover:bg-red-500"></div>
  <div class="w-5 h-5 bg-black group-hover:bg-green-500"></div>
</div>
```

To style a sibling

```html
<div class="peer w-20 h-20 bg-black black"> Hover </div>
<div class="w-20 h-20 bg-black peer-hover:bg-red-500"></div>
```

You can also create a name for them incase you want to use multiple groups and peer
e.g. group/some-name, peer/other-name

usage

```html
<div class="group/some-name grid place-content-center h-20 w-20 bg-blue-400 ">
  <div class="peer/other-name w-5 h-5 bg-black group-hover/some-name:bg-red-500"></div>
  <div class="w-5 h-5 bg-black group-hover/some-name:bg-green-500 peer-hover/other-name:bg-red-500"></div>
</div>
```

### Less Javascript

#### Accordion

Using the `open` attribute.

```html
<div class="max-w-lg mx-auto p-8">
  <details class="open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg" open>
    <summary class="text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none">
      Why do they call it Ovaltime?
    </summary>
    <div class="mt-3 text-sm leading-0 text-slate-600 dark:text-slate-400">
      <p> The mug is round. The jar is round. They should call it RoundTime. </p>
    </div>
  </details>
</div>
```

## Accessibility in Tailwind

It provides nifty utilities like
`sr-only` and `not-sr-only` classes to ensure a seamless
experience for all users.

Imagine an `<a>` tag with an SVG icon and a hidden text for
screen readers.

```html
<a href="">
<span class="sr-only"> User profile </span>
</a>
```

The sr-only class does the magic – it makes the "User Profile" text invisible to the naked eye but still there for those who rely on screen readers.

Hiding on Demand: Class `not-sr-only`.

Let’s say you want to show the text for larger screens but keep it hidden for smaller ones. The`sm:not-sr-only` class combo is your ticket to this flex.

## Animation

Spin Animation

```html
<div class="animate-spin h-6 w-6"></div>
```

Ping Animation

```html
<div class="animate-ping h-6 w-6"></div>
```

Pulse Animation

```html
<div class="animate-pulse h-6 w-6"></div>
```

Bounce

```html
<div class="animate-bounce h-6 w-6"></div>
```