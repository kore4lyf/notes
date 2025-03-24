# Sanity

Sanity is a content platform.
Content platforms treat the content (images, database, videos) of your app like data.

Putting contents directly into HTML, will not allow your app to scale well. This gave rise to a Headless CMS, a tool that turns your content to a cloud base API, so it can be accessed from any application.

A content platform is a critical aspect of a modern tech stack.

- Frontend
- Content Platform (API)
- Backend

This is also known as JAM stack (Javascript, API, Markup (HTML)).
Because content is not directly embedded in your code, you can use it any where.

```sh
npm i -g @sanity/cli && sanity init 
```

`npm i -g @sanity/cli` installs sanity globally, while `sanity init` initializes a new sanity project.

After entering the command `sanity cli`. You will be asked to:

- Log in
- Choose an existing project or Create a new one
- Select organization or create a new one
- Use the default dataset configuration? (Y)
- confirm output path (path to  your code)
- select project template choose a clean one
- Choose package manager

Wait for installation.

To sanity studio.

```sh
npm run dev # - to run Sanity Studio
# OR
sanity start # used to preview static builds

# Other helpful commands
npx sanity docs # - to open the documentation in a browser
npx sanity manage # - to open the project settings in a browser
npx sanity help # - to explore the CLI manual
```

Sanity provides a UI for you to add data manually. But you must provide the schema for the types of data of you want to store.

## Sanity Studio

### Structure Plugin

This is where you can add, delete or modify the data within your datasets.

### Vision Plugin

This where you can query your content using Groq.

Groq is a query language used by Sanity.

### Using Groq to query data

This means fetch all where _id match the image string.

```s
*[_id == "image-b9c9dbd7b37508e3adbb7237026b426b0ad3bb50-740x786-jpgimage-b9c9dbd7b37508e3adbb7237026b426b0ad3bb50-740x786-jpg"]
```

This means fetch all data from schema dataset.

```s
*[_type == "startup"]
```

```s
*[_type == "startup" && defined(slug.current)]
```

Specifying the data you want from the query:

```s
*[_type == "startup" && defined(slug.current)] {
  _id, title, _createdAt, author, view, description, category, image
}
```

Result from a real query:

result is an array of object.

```json
[…] 1 item
0:{…} 8 properties
category:AI
image:https://img.freepik.com/premium-vector/colorful-90s-seamless-pattern-squiggle-kid-background-doodle-minimalistic-wallpaper-with-basic-forms-lines-vector-scribble-backdrop_384065-1700.jpg
_id:f92b8f30-e15d-48fb-b7b6-2cd6ef17b07d
title:AI Prada
_createdAt:2025-03-22T18:36:27Z
author:{…} 2 properties
_ref:b4e616b8-ba0a-4bf7-9236-ca622a5d68fc
_type:reference
view:null
description:An AI focused company, working on optimizing a generative a AI model resource consumption.
```

from the query above, author is a reference to another data type.

```json
author:{…} 2 properties
_ref:b4e616b8-ba0a-4bf7-9236-ca622a5d68fc
_type:reference
```

To be able to extract data from a reference, you must destructure the data in your query.

```s
*[_type == "startup" && defined(slug.current)] {
  _id,
  title,
  _createdAt,
  author -> {
    _id,
    name,
    image,
    bio
  }, 
  view,
  description,
  category,
  image
}
```

By including the information we'd like to get from the reference, in our query , we'd be able to get the details we want from it too.

```json
[…] 1 item
0:{…} 8 properties
author:{…} 4 properties
_id:b4e616b8-ba0a-4bf7-9236-ca622a5d68fc
name:KoRe
image:https://img.freepik.com/free-vector/random-fun-hand-drawn-doodle-pattern-background_1048-19869.jpg
bio:Software Developer
view:null
description:An AI focused company, working on optimizing a generative a AI model resource consumption.
category:AI
image:https://img.freepik.com/premium-vector/colorful-90s-seamless-pattern-squiggle-kid-background-doodle-minimalistic-wallpaper-with-basic-forms-lines-vector-scribble-backdrop_384065-1700.jpg
_id:f92b8f30-e15d-48fb-b7b6-2cd6ef17b07d
title:AI Prada
_createdAt:2025-03-22T18:36:27Z
```

Adding filter:

Want to make sure newest items come first (| order(_createdAt desc))

```s
export const STARTUP_QUERY = defineQuery(`*[_type == "startup" && defined(slug.current)] | order(_createdAt desc){
  _id,
  title,
  _createdAt,
  author -> {
    _id, name, image, bio
  }, 
  view,
  description,
  category,
  image
}
`)
```

## Schema Types

To learn more about how you can store date visit [https://www.sanity.io/docs/](https://www.sanity.io/docs/)

## Deploy your studio

```sh
npm run deploy
# OR
sanity deploy
```

You will get a prompt to provide a hostname for the dataset. The hostname must be unique.

for example I gave a ame `sanity-project-kore` and I got this domain `https://sanity-project-kore.sanity.studio/`

> What ever you do on local version will deployed version, if someone made a change you will also be able to see who did it and depending on your privileges, you may be able to revert some changes.

## Other Commands

List all dataset

```sh
sanity dataset list
```

## Generate Types (Typescript) from schemaTypes and query result

Sanity has a tool that can generate types for schema types and query result.

### Extracting Schema Types

```sh
npx sanity@latest schema extract --path ./sanity/extract.json
```

This extract the types into extract.json within the sanity folder.

Then create a file called sanity-typegen.json and paste the code below into it.

```json
{
  "path": "./**/*.{ts,tsx,js,jsx}",
  "schema": "./sanity/extract.json",
  "generate": "./sanity/types.ts"
}
```

Then run the command below:

```sh
npx sanity@latest typegen generate
```

To avoid having to type all command manually every time you create a new schemaType or query, add the following command to script in package.json

```json
"scripts": {
  "predev": "npm run typegen",
  "prebuild": "npm run typegen",
  "typegen": "sanity schema extract --path=./sanity/extract.json && sanity typegen generate"
},
```

After adding the command to the script, to generate type you can simply type:

```sh
npm run typegen
```

### Get changes in Real Time

After initializing sanity in your code you will find a `sanity/lib/client.ts` in your project.

```ts
import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
```

useCdn is usually set to true, which prevents real time update until after every 60 secs.
Which means if there is an update and you refresh, you will get the update immediately after the refresh.

If want to get the content live, you'd have to leverage sanity `Live Content Api`, which allow one to deliver, live and dynamic experiences to your users.

To implement it, install `server-only`

```sh
npm i server-only
```

Sever-only is a package that helps us to ensure that a specific module can only be used in a server component.

