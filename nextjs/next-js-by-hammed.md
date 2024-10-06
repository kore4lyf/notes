# Next Js

## Intro to Next Js
Installing NextJs
```sh
npx create-next-app@latest my-app
```

### Installing Prettier pluggin
It sorts tailwind classes as recommended by tailwind
```sh
npm install -D prettier prettier-plugin-tailwindcss
```

For it to work we have to create a `.prettierrc` file

Add the following configuration to the file..
.prettierc 
```json
{
    "arrowParens": "avoid",
    "singleQuote": true,
    "jsxSingleQuote": true,
    "tabWidth": 2,
    "trailingComma": "none",
    "semi": false,
    "proseWrap": "always",
    "printWidth": 80,
    "plugins": ["prettier-plugin-tailwindcss"]
}
```

### Framer Motion
A library used to animate components

```js
import { motion } from 'framer-motion'

const Page = () => {
  <div>
    <ul>
      <motion.li
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}>
        <Link href="/about"> About </Link>
      </motion.li>
    <ul>
  </div>
}

export default Page

```

### Specifically styling a page using css module

Using css modules in NextJs allows us to create locally scoped CSS classes to avoid naming conflicts and improve maintainability.

Within page folder create a file `page.module.css` write your css inside it and any style writen to that page will only be applied to the page within it's directory.

To apply the styles, import it to the page.

```jsx
import Image from "next/image";
import styles from "./page.module.css"

export default function Home() {
  return (
    <main>
      <div className="container py-24">
        <h1 className={styles.title + " text-3xl font-bold"}> NextJs 13 Starter Kit</h1>
      </div>
    </main>
  );
}
```

### Tailwind Component
- TailwindUI
- HeadlessUI
- RadixUI

### Component Hierarchy

The React components defined in special files of a route segment are rendered in a specific hierarchy:

- layout.js
- template.js
- error.js
- loading.js
- not-found.js
- page.js or nested layout.js

### Deploying you app
- Node.js Server (That is not vercel)
Then, run `npm run build` to build your application. Finally run `npm start` to start the Node.js server.

If you are using `next/image` consider adding `sharp` for more performant image optimization.

To install sharp.
```sh
npm run dev
```

- Docker Image

- Static HTML Export
To enable a static export, change the output mode inside `next.config.js'

```json
const nextConfig = {
  output: 'export',
 // The html/css/js asset will be stored in a 'out' folder. To change this to 'dist' use the following code below
 // distDir: 'dist' 
}
```

### Templates
They are specialized re-rendered Layout UI. i.e They are Layout but they don't get cached like layout.js

Create a `template.tsx` file.

```ts
'use client'
import { useEffect } from 'react'

export default function Template ({ children }: { children: React.ReactNode }) => {

  useEffect(() => {
    console.log("Logging page view")
  }, [])

  return <div>{ children }</div>
})
```

### Active link

```js
import { usePathname } from "next/navigation";

const NavLink = ({ href, ...rest}) => {
  const pathname = usePathname()
  const isActive = href === pathname
  //....
}
// return the active path
```

> NB: Links are prefetched by default (only available in production), and prefetching can be disabled if specified.

It will reuse the area that didn't and only fetch areas that have changed.

#### Another way of using Links (useRouter)

```jsx
"use client";

import { useRouter } from "next/navigation"

const ContactButton = () => {
  const router = useRouter()

  function handleClick() {
    router.push("/about")
    // router.back
    // router.foward
    // router.refresh
    // router.replace
  }
}

```

### Suspense and Streaming

`loader.js` can easily be used to add suspense to a website that needs to asynchronously request some data to display some items on the page.

In a case where one uses a component that requires calling a function asynchronous `<Suspense>` can be used to display a loader, until the request is complete.

```js
import { Suspense } from 'react'

const Page = async ({ params }) => {
  return(
    <section className="py-24"> 
      <h1>HELLO, WORLD</h1>
      <Suspense fallback={<div>Loading view count... </div>}>
        <Count slugProp={slug} />
      </Suspense>
    </section>
  )
}
```

### Error Boundaries

In React `ErrorBoundary.jsx` is created and usually used to wrap a component in case it throws an error, so that it can be replaced by the element provided in `fallback` (Fallback UI) 

```js
<ErrorBoundary fallback={<Error/>}>
<Profile/>
</ErrorBoundary>
```

### Server vs Client Components

- SSR (Server Side Rendering): The page is rendered on the server and sent to the client.
Usage: Ideal for SEO and Initial page load performance.

- SSG (Static Site Generation): The page is generated at build time.
Usage: Best for pages with static content that doesn't change often.

- CSR (Client Side Rendering): Data is fetched and rendered on the client side, typically using React hooks.
Usage: Suitable for dynamic data that changes frequently.


### Server vs Client Components

All component in the `app/` (app router) are React Server components by default. 

React Client components can be brought in, in their specified component, they will a `"use client";` defined, which enables them to be a client component.

Server components cannot be imported into a client component. The moment a server component is imported into a client component, then it will be considered a client component due to the use of `"use client";`

But Server components can be passed as children to a client component.

`ExampleClientComponent.js`

```js
'use client';

import { useState } from 'react'

export default function ExampleClientComponent({ children }) {
  const [count, setCount] = useState(0)

  return (
    <>
    <button onClick={() => setCount(count + 1)}> {count} </button>
     {children}
    </>
  )
}
```

page.js (Server Component)

```js
import ExampleServerComponent from './example-server-component'
import ExampleClientComponent from './example-client-component'

export default function Page() {
  return(
    <ExampleClientComponent>
      <ExampleServerComponent/>
    </ExampleClientComponent>
  )
}

```

### Setting Runtime (Edge or Node)

layout.tsx / page.tsx / route.ts

```ts
export const runtime = "nodejs"
// 'edge' | 'nodejs'
```

### Fetching 

This type of fetching is done at build time and it is cached.
Caching here is good, if the data is static (doesn't change), but if the data is dynamic, you might want to disable caching.

```ts
async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos")

  if (!res.ok) throw new Error("Failed to fetch todos.")

  return res.json()
}
```

To disable caching:

```ts
async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos",{
    cache: "no-store" 
  })

  if (!res.ok) throw new Error("Failed to fetch todos.")

  return res.json()
}
```

or 

This forces this entire page.js to be dynmaic.
```ts
export const dynamic = "force-dynamic"

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos")

  if (!res.ok) throw new Error("Failed to fetch todos.")

  return res.json()
}
```

