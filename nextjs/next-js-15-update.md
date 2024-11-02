# Next JS 15 - Update

## 1. Caching Behaviour

- fetch requests 
- GET route handlers 
- Client Navigations

Are no longer cached by default.

## 2. Request APIs

Requetst API are now Asynchronus.

Which affects:

- cookies
- headers
- draftMode
- params (layout.js, page.js, route.js, route.js, default.js, generateMetadata and generateViewport)
- searchParams in page.js

## 3. Updating Breaking changes

Nextjs included codemods with every major Next.js release to help automate upgrading breaking changes.

There also released an enhance codemod CLI:

```sh
npx @next/codemod@canary upgrade latest
```

## 4. React 19 - Support

Nextjs 15 is shipped with React 19 support, which means if you are using the app/ router you will automatically be using React 19.

If you are still using the pages router you can stay on React 18 and still benefit from all the features that nextjs offers.

## 5. Static Route Indicator

On the Developer experience side, Next js introduces, Static Route indicator. It's a visual guide that shows which sites are static and which routes are dynamic during development.

## 6. Support for next.config.ts

You now can use typescript for your next js config file. Just rename you ```next.config.js``` to ```next.config.ts```.

## 7. ```<Form>``` Component (next/form)

It makes form handling much better with automatic prefetching, client-side navigation and progressive enhancement (Works even if javascript has been loaded yet).

## 8. Turbopack Dev

To use turbo pack, in your package.json add 

```sh
"scripts": {
  "dev": next dev --turbo
}
```

Using used to speed up development process.
This is only to enhance your developement experience, it's not going to work in production.

## 9. unstable_after feature

This is very useful in server side development, it allows you to run a code after all the information requested has been received by the client.


next.config.ts

```ts
const nextConfig = {
  experiemental: {
    after: true
  }
}

export default nextConfig;
```

Then import the function in Server Component, Server Actions, Route Handlers, or Middleware.

```ts
import { unstable_after as after }
import { log } from '@/app/utils'

export default function Layout({ children }) {
  // Secondary task
  after(() => {
    log()
  })

  // Primary task
  return <>{children}</>
}
```

## 10. Improvements for self-hosting

## 11. Enhanced Security for Server Actions

1. Dead code elimination: Unused Server Actions won't have their ID's exposed to the client-side javascript bundle, reducing bundle size and improving performance
2. Secure action IDs: Next.js now creates unguessable, non-deterministic IDs to allow the client to reference and and call the Server Action. These IDs are periodically recalculated between builds enhanced security.

## 12. Optimizing bundling of external packages

## 13. ESLint 9 Support

Uses ESLint 8 by default, to use ESLint 9, you must specify.

## 14. Developement and Build Development

