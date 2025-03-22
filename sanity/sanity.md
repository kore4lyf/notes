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

*[_id == "image-b9c9dbd7b37508e3adbb7237026b426b0ad3bb50-740x786-jpgimage-b9c9dbd7b37508e3adbb7237026b426b0ad3bb50-740x786-jpg"]

This means fetch all where _id match the image string.

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