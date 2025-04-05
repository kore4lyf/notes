# Sentry

Go to [https://www.sentry.io](https://www.sentry.io).

## Add the following config to package.json

You may add it `after the scripts key`

```js
  "overrides": {
    "react": "$react",
    "react-dom": "$react-dom",
    "next": "$next"
  },
```

## Setup

Choose your server e.g. nextjs, php, ruby e.t.c

```sh
npx @sentry/wizard@latest -i nextjs --saas --org flint-ai --project your-project-name
```

If you encounter any problem running the code above, trying installing sentry first.

```sh
npm i @sentry/nextjs --legacy-peer-deps
```

If it's successful then. run the first sh command again, to run the Sentry Next.js Wizard, but don't update sentry.

Wizard Interaction:

- Do you want to route Sentry requests in the browser thNext.js server to avoid ad blockers?
│  ○ Yes (Can increase your server load and hosting bill)
│  ● No (Browser errors and events might be blocked by ad
●  Sounds good! We'll leave the option commented for late case :)
│
◆  Do you want to enable Tracing to track the performance
application?
│  ● Yes (recommended)
│  ○ No
│
◆  Do you want to enable Session Replay to get a video-li reproduction of errors during a user session?
│  ● Yes (recommended, but increases bundle size)
│
◆  Created fresh sentry.server.config.ts.
│
◆  Created fresh sentry.edge.config.ts.
│
◆  Added new instrumentation.ts file.
│
◆  Added new instrumentation-client.ts file.
│
◆  Added Sentry configuration to next.config.ts. (you pro to clean this up a bit!)
│
◆  Created app\global-error.tsx.
│
◆  Do you want to create an example page ("/sentry-example
◇  Do you want to create an example page ("/sentry-example
to test your Sentry setup?
│  Yes
│
◆  Created app\sentry-example-page\page.tsx.
│
◆  Created app\api\sentry-example-api\route.ts.
│
◆  Created .env.sentry-build-plugin with auth token for y source map uploading locally.
│
◆  Added .env.sentry-build-plugin to .gitignore.
│
◆  Warning: The Sentry SDK is only compatible with Turbo
Next.js version 15.3.0 (or 15.3.0-canary.8) or later. If 
using Turbopack with an older Next.js version, temporaril
`--turbo` or `--turbopack` from your dev command until yo
◇  Warning: The Sentry SDK is only compatible with Turbop
Next.js version 15.3.0 (or 15.3.0-canary.8) or later. If 
using Turbopack with an older Next.js version, temporaril
`--turbo` or `--turbopack` from your dev command until yo
verified the SDK is working as expected. Note that the SD
continue to work for non-Turbopack production builds.
│  I understand.
│
◆  Are you using a CI/CD tool to build and deploy your ap◇  Are you using a CI/CD tool to build and deploy your ap│  Yes
│
◇  Add the Sentry authentication token as an environment o your CI setup:

SENTRY_AUTH_TOKEN=sntrys_eyJp.....

│
▲  DO NOT commit this auth token to your repository!
│
◇  Did you configure CI as shown above?
│  Yes, continue!
│
└
Successfully installed the Sentry Next.js SDK! 

You can validate your setup by (re)starting your dev envi.g. npm run dev) and visiting "/sentry-example-page"
Don't forget to remove `--turbo` or `--turbopack` from yomand until you have verified the SDK is working. You can  it back afterwards.

If you encounter any issues, let us know here: https://gietsentry/sentry-javascript/issues

## Next

Copy the SENTRY_AUTH_TOKEN and paste it in you `.env.local`

Start your development server and visit `/sentry-example-page` if you have set it up. Click the button to trigger a test error.
Or, trigger a sample error by calling a function that does not exist somewhere in your application.

```js
myUndefinedFunction();
```

If you see an issue in your Sentry Issues, you have successfully set up Sentry with Next.js.

