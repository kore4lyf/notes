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

### Server vs Client Components 2

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

```js
export const dynamic = "force-dynamic"

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos")

  if (!res.ok) throw new Error("Failed to fetch todos.")

  return res.json()
}
```

### Remote Images

```js
** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.thecocktaildb.com',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
};

module.exports = nextConfig;
```

### Responsive Image

using sizes

```jsx
<Image
  src={drink.strDrinkThumb}
  fill
  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw'
  alt={drink.strDrink}
  className='rounded-md object-cover'
/>
```

sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw'

### useFormStatus()

The useFormStatus Hook provides status information of the last form submission.

```js
'use client';
import { useFormStatus } from 'react-dom';
import { deleteTask } from '@/utils/actions';

// The useFormStatus Hook provides status information of the last form submission.
// useFormState is a Hook that allows you to update state based on the result of a form action.


const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button type='submit' className='btn btn-xs btn-error' disabled={pending}>
      {pending ? 'pending...' : 'delete'}
    </button>
  );
};

const DeleteForm = ({ id }) => {
  return (
    <form action={deleteTask}>
      <input type='hidden' name='id' value={id} />
      <SubmitBtn />
    </form>
  );
};
export default DeleteForm;

```

### useFormState()

useFormState is a Hook that allows you to update state based on the result of a form action.

TaskFormCustom.jsx

```js
'use client';
import { createTaskCustom } from '@/utils/actions';
import { useEffect } from 'react';

import { useFormStatus, useFormState } from 'react-dom';
import toast from 'react-hot-toast';
const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type='submit'
      className='btn btn-primary join-item'
      disabled={pending}
    >
      {pending ? 'please wait...' : 'create task'}
    </button>
  );
};

const initialState = {
  message: null,
};

const TaskForm = () => {
  const [state, formAction] = useFormState(createTaskCustom, initialState);

  useEffect(() => {
    if (state.message === 'error') {
      toast.error('there was an error');
      return;
    }
    if (state.message) {
      toast.success('task created....');
    }
  }, [state]);

  return (
    <form action={formAction}>
      <div className='join w-full'>
        <input
          type='text '
          className='input input-bordered join-item w-full'
          placeholder='type here'
          name='content'
          required
        />
        <SubmitBtn />
      </div>
    </form>
  );
};
export default TaskForm;
```

### useActionState()

useActionState is added to replace and improve the ReactDOM useFormState.

useActionState is a hook that allows you to update state based on the result of a form action.

```js
const [state, formAction, isPending] = useActionState(fn, initalState, permalink?)
```


### NextJs Rendering Techniques

#### Static Site Generation (SSG)

This is a technique where HTML pages are generated at build time. This means the constent is created when you deploy your site, not when a user requests it. It is extremely fast and can be served from a CDN, but it's not suitable for a website that has content that change.

By default NextJs use SSG. The website is cached and delivered thorough a CDN.

#### Incremental Static Regeneration (ISR)

It's an extension of SSG, that allows you to update static content, after you have deployed your site.

This means it will create static pages like SSG, after some time, it will update those pages.

ISR can be done in two ways:

- Time Based validation: You can revalidate your entire page after some time. This a route segment configuration.

```jsx
export const  revalidate = 3600 // invalidate every hour

// request or fetch DATA

const page = () => {
  return (
    <div>page</div>
  )
}

export default page
```

- Revalidate the request: uses the next revalidate option.

```jsx
export default async function Page() {
  const data = await fetch("http://api.vercel.app/blog", {
    next: { revalidate: 3600 }
  })

  const posts = await data.json()

  return (
    <main>
      <h1> Blog Posts </h1>
      ...
      ...
    </main>
  )
}
```

You can also revalidate on Demand using:

- revalidatePath

```jsx
"use server"

import { revalidatePath } from "next/cache"

export async function createPost() {
  // Invalidate the /posts route in the cache
  revalidatePath("/posts")
}
```

Another way to revalidate on demand is to use `revalidatTag`

#### Server Side Rendering (SSR)

It generates the HTML for a page from the server in response from the users request.

It's slower than SSG, and puts more load on the server, but you will always have up to date content.

This ideal for highly dynamic content.

For time based revalidation:

```js
export const revalidate = 0
```

For requests:

```jsx
export default async function Page() {
  const data = await fetch("http://api.vercel.app/blog", {
    next: { revalidate: 0 }
  })

  // or
  const data = await fetch("http://api.vercel.app/blog", {
    cache: "no-store"
  })

  const posts = await data.json()

  return (
    <main>
      <h1> Blog Posts </h1>
      ...
      ...
    </main>
  )
}
```

#### Partial Prerendering (PPR)

It's a new rendering that combines static and dynamic rendering. It's allows you to render a static shell of a page while streaming dynamic content.

With PPR you can have both static and dynamic content on a page, but static content loads faster and dynamic contents have a placeholder or container awaiting it's delivery.

PPR is still at experimental phase as a March 2025.

Update `next.config.ts`

```js
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
        // You can specify port and pathname patterns if needed
        // port: '',
        // pathname: '/**',
      },
    ],
  },
  experimental: {
    ppr: "incremental"
  },
  devIndicators: { // This will help us visualize what is happening with PPR
    appIsrStatus: true,
    buildActivity: true,
    buildActivityPosition: "bottom-right"
  }
};

export default nextConfig;
```

In your page.tsx, `export const experimental_ppr = true`

```tsx
import { STARTUP_BY_ID_QUERY } from "@/sanity/lib/queries"
import { notFound } from "next/navigation"
import React from 'react'

export const experimental_ppr = true

const page = async ({ params }: { params: Promise<{ id: string }>}) => {
  const id  = (await params).id

  const post = await client.fetch(STARTUP_BY_ID_QUERY, { id })

  if(!post) return notFound()

  return (
    <>
      <h1 className="text-3xl">This is a startup number: {id}</h1>
    </>
  )
}

export default page
```

## API

Create a folder called /api within /app folder

then create a `db.ts` file within app/api, to emulate a JSON database

app/api/db.ts

```ts
const books = [
  {id: 1, name: "Atomic Habits"},
  {id: 2, name: "Deep Work"},
  {id: 3, name: "The 7 Habits of Highly Effective People"}
]

export default books
```

Create book route within api, the create a new  file called route.ts

app/api/books/route.ts

```ts
import books from "../db";

export async function GET() {
  return Response.json(books)
}
```

Create a dynamic route within books called id i.e. [id]

app/api/books/[id]/route.ts

```ts
import books from "../../db"

export async function PUT(
  request: Request,
  context: { params: { id: string } }
) {
  const id = +context.params.id
  const book = await request.json()
  
  const index = books.findIndex((b) => b.id === id)
  books[index] = book
  return Response.json(books)
}

export async function DELETE(
  request: Request,
  context: { params: { id: string }}
) {
  const id = +context.params.id

  const index = books.findIndex((b) => b.id === id)
  books.splice(index, 1)
  return Response.json(books)
}
```

## Client Side vs Server Side Components

**Nextjs default renders webpage as a server component.**
You can specify how you want NextJs to render you webpage.

```js
"use server"
// OR
"use client"
```

## Search Engine Optimization

There two ways we can manage metadata in a nextjs application.

- Config based: create a JavaScript object in the layout or any page.js file.

```js
export const metadata = {
  title: "Home | Next.js",
  description: "Generated by create next app",
  openGraph: {
    ...openGraphImage,
    title: "Home"
  }
}
```

If this metadata is added to a page, it will overide the default or the metadata written in the layout.tsx file.

**Dynamic Metadata**:

```ts
export async functions generateMetadata({ params }) {
  const { id } = await params
  const resource = await getResourceById({ id })

  const title = resource.title + " | JS Mastery"
  const seoDescription = "Free resources database containing ebooks, guides and videos"

  return {
    title,
    description: seoDescription,
    other: {
      "og:title": title,
      "og:description": seoDescription,
      "og:image": resource.image,
      "twitter:title": title,
      "twitter:image": resource.image,
      "twitter:description": seoDescription

    }
  }
}

export default function Page({ params, searchParams }) {
  ...
}
```

- **File Based Metadata**:

You can put data in files like robots.txt

src/robots.txt

```txt
User-Agent: *
Allow: /
Disallow: /private/

Sitemap: https://acme.com/sitemap.xml
```

app/sitemap.xml

```xml
<urlset xmlns="http:// www.sitemaps.org/schema/sitemap/0.9">
  <url>
    <loc>https:/acme.com</loc>
    <lastmod>2023-04-06T15:02:24.021Z</lastmod>
    <changefreq>yearly</changefreq>
    <priority>1</priority>
  </url>
  <url>
    <loc>https:/acme.com/about</loc>
    <lastmod>2023-04-06T15:02:24.021Z</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https:/acme.com/blog</loc>
    <lastmod>2023-04-06T15:02:24.021Z</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.5</priority>
  </url>
</urlset>
```

file convention: **favIcon** - .ico - valid locations: app/

file convention: **icon** - .ico, .jpg, .jpeg, .png, .svg - valid location: app/**/*

file convention: **apple-icon** - .jpg, .jpeg, .png - valid location: app/**/*

file convention: opengraph-image - .jpg, .jpeg, .png, .gif

file convention: twitter-image - .jpg, .jpeg, .png, .gif

file convention: opengraph-image.alt - txt

flie convention: twitter-image.alt - .txt

> File based metadata has a higher priority over a config based metadata.

## unstable_after

unstable_after allows you to schedule work to be executed after a response is finished. This is useful for task and other side effect that should not block the response, such as logging and analytics.

It can be used in server components e.g. server actions, route handlers and Middleware.

```js
import { unstable_after as after } from 'next/server'

const Component = async () => {
  after( async () => await // Do something asynchronous
  )
}
```

To enable experimental.after it must be enabled in next config

## Suspense

Here `id` is an asynchronous data.
Skeleton is a suspense component from shadcn, which an could be any component.


```js

import React, { Suspense } from 'react'

export const exprimental_ppr = true

const page = () => {
  return (
    <>
      <Suspense fallback={<Skeleton className="w-fit" />}>
        <View id={id} />
      </Suspense>
    </>
  )
}
```

## Parallel and Sequential data fetching

When fetching data inside components, you need to be aware of two data fetching patterns: Parallel and Sequential.

Sequential: request in a component tree are dependent on each other. This can lead to longer loading times.

Parallel: request in a route are eagerly initiated and will load data at the same time. This reduces the to time it takes to load data.

```ts
const [post, select] = await Promise.all([
  
])
```