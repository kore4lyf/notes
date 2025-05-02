# Modern SEO (Search & Social Optimization)

## Content

1. Traditional SEO
   - Content Quality
   - Crawler Hints

2. Metadata
   - Thumbnails
   - Structured Data

3. Mobile Optimizations
   - Performance
   - PWA

4. Accelerated Mobile Pages

## Traditional SEO

- Making it easy for crawlers to do their job.
- Increasing the quality of you site. (When common words are remove there should be something terminology left that can be used to describe the content)
- Unique and targeted content, including relevant keywords and terminology.
- Richness of content (videos, images)
- Frequent updates (Search engines favor content that is new over content that has been around for a while.)
- Link Building. (You want influential site to refer to your url)
- Keyword stuffing (used to work)

### Strategies for Business with Physical Locations

- Create a complete Google My Business Page
- Ask for reviews for your business, and display on your website.
- Submit your business to local directories - [https://moz.com/local](https://moz.com/local).
- Correct errors/outdated information in Local Citations
- Acquire local backlinks - vendors, partners, local NGOs etc
- Set specific geographic targeting in Google Search Console

### Page Rank

- Underlying assumption: "Quality" of a site is proportional to the number of links to it.
- The value of a link on a "quality site" is worth more.

### Long Tail Keywords

What keywords are important for your business.

- "Learn Javascript" vs "SEO metadata video course"
- Keyword phrases which are very, very specific to whatever you are selling
- Site visitors are ore likely to use when they're closer to a point-of-purchase
- [https://app.wordtracker.com](https://app.wordtracker.com)
- [https://www.semrush.com/](https://www.semrush.com/)

The links above are good for starting with a general keyword and great or high opportunity phrases you can use.

### SEO Keyword Tools

Discover relevant keywords:

1. [Google Keyword planer](https://adwords.google.com/ko/KeywordPlanner)
  It allows you to provide a lending page and it would give you some keyword suggestions for the page.
2. [Google Trends](https://trends.google.com)

### Link Building Campaigns

Once we have found some keyword, we are ready to build a link building campaign.

- Create "Key pages" for popular product and services on you website
- Focus inbound links to key pages to build higher ranking pages
- "Link Velocity": rate at which a piece of content or a page earns links over time
- Guest post on trustworthy industry / authority sites
- Analyze competitor's link profile & identify link opportunities: [Spyfu](https://sypfu.com)

### White Hat SEO vs Black Hat SEO

White Hat SEO is similar to making content as good as it can be for human beings. Black Hat SEOs attempt to please the bots.

### Removing Bad Links

- Use Google Search Console to renew Search traffic & links
- Remove link reference from spammy websites
- Disavow bad links using (Google Disavow Tool)
- Eliminate mutual "link exchange" with other sites add `<rel="nofollow">`
- Remove dead or broken links from your website

### Ad Campaigns

- Target the right audience
- Cost effective
- Deploy marketing budget when it matters
- Short feedback loop
- Control over risk
- Not a magic pill

Pricing:

- CPM - Cost per 1000 impressions (View)
- CPC - Cost per click
- CPA - Cost per action (conversion)
- CPI - Cost per install (For mobile apps)

### Basic Metadata

- title - 30 - 65 characters

```html
<title> Mordern SEO </title>
```

- description - 120 - 156 characters. Brife summary of what the page is about

```html
<meta name="description" content="How to deploy our first app"/>
```

- keywords - don't matter anymore

```html
<meta name="Keywords" content="deployment, heroku, git, shell, commands seo"/>
```

#### Exercise 1

```html
<head>
  <title>My website</title>
  <meta name="description" content="How to deploy our first app"/>
  <meta name="Keywords" content="deployment, heroku, git, shell, commands seo"/>
</head>
```

### Facebook OpenGraph

Social Metadata

Metadata Tools

- [Google Structured Data Testing Tool](https://search.google.com/structured-data/testing-tool)
- [SEO Meta chrome extension](http://www.seo-extension.com)
- [Facebook OpenGraph debugger](https://developers.facebook.com/tools/debug)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [Pinterest Rich Card debugger](http://developers.pinterest.com/tools/url-debugger)

```html
<meta property="og:url" content="http://www.xxxxxx.app">
<meta property="og:type" content="article">
<meta property="og:title" content="A man called God">
<meta property="og:description" content="Does cu...tive thinking?">
<meta property="og:image" content="http://static....umbo-v2.jpg">

you may specify you image with and height
<meta property="og:image:width" content="620">
<meta property="og:image:height" content="541">
```

For urls use canonical url, so that even if the original url changes in the future you can maintain the canonical url. The canonical url is usually short and readable.

For Facebook images should be 600 x 315, but 1200 x 630 is recommended so it can have a good quality on devices with high resolution.

### Twitter Cards

```html
<meta name="twitter:card" content="summary"/> 
<meta name="twitter:site" content="@FrontEndMasters"/>
<meta name="twitter:creator" content="@1Marc">
<meta name="twitter:image" content="https://...jpg">
```

twitter:card `content="summary"` is Similar to type in open graph
You may also say `content="summary_large_image"` or a player card `content="player"` allows people play videos from a card, `content="app"` links to an app store.

for image:
150 x 150 for summary
560 x 300 for summary_large_image

### Structured Data

- Information that crawlers are already looking for, and can easily read
- Consistent structure, across many web properties
- Preferred format: JSON-LD in a special script tag

```html
<script type="application/ld+json">
  ...
</script>
```

#### What does this get us?

- Enhanced features in apps
- Indexers don't have to guess so much about connections between things
- More control over the way search results look

Breadcrumbs (used by google's crawler to know how a site is structured)

```html
<script type="application/ld+json">
  {
    "@context": "http://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@id": "https://example.com/books",
        "name": "Books",
        "image": "http://example.com/images/icon-book.png"
      }
    },{
      "@type": "ListItem",
      "position": 2
      ....
    }
    }]
  }
</script>

<script type="application/id+json">
{
  "@context": "http://schema.org",
  "@type": "Course",
  "name": "Introduction to Computer Science and Programming",
  "description": "Introduction CS course laying out the basics.",
  "provider": {
    "@type": "Organization",
    "name": "University of Technoloy - Edureka",
    "sameAs": "http://www.ut-eureka.edu"
  }
}
</script>
```

To make the content data dynamic react.

> ids don't have to be numbers they can be urls too.

You can visit [Schema.org](https://schema.org) to know how the data should be structured.

To test you structure data visit **Google structured data testing tool**.

Google also has a sample for you can apply to a page.
The higher the itemListElement the deeper the content.

Add `<script type="application/ld+json">` inside body tag at the very beginning.

You can add two structured data to your page one to show depth and the other that describes your content.

You can get samples from Google.

## Mobile Pages

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

Other properties:

- width - Positive integer or "device-width"
- initial-scale - Positive number between 1.0 and 10.0
- maximum-scale - Positive number between 1.0 and 10.0
- minimum-scale - Positive number between 1.0 and 10.0
- user-scalable - yes or no

Allows website launch in Fullscreen on IOS

```html
<meta name="apple-mobile-web-app-capable" content="yes">
```

Black Status Bar

```html
<meta name="apple-mobile-web-app-status-bar-style" content="black">
```

Home Screen Title

```html
<meta name="apple-mobile-web-app-title" content="Frontend Masters">
```

manifest.json for android devices

```html
<link rel="manifest" href="/manifest.json">
```

```json
{
  "name": "Frontend Masters", // App name
  "icons": [
    { /* 192px Square recommended for "add to home screen" */
      "src": "/myicon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    { /* 512px Square recommended for "startup screen" */
      "src": "/myicon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }

  ], // Various sizes of icon
  "theme_color": "#2d89ef", // Title bar styling
  "background_color": "#2d89ef", // Used for startup screen
  "display": "standalone" // Launch as an app
}
```

for the display, it may take:

- fullscreen - All available display area is used
- standalone - Look & feel like a standalone app
- minimal-ui - "lightbrowser" UI. Doesn't have own window.
- browser - Conventional web app in a browser

### Home screen Icons

```html
<link href="https://placehold.it/152" sizes="152x152" rel="apple-touch-icon">
```

other sizes: unfortunately you have to provide a link tag for other sizes too.

57 - iPhone 1, 2
72 - iPad 1, 2
114 - iPhone 4 (Retina)
120 - iPhone 6, 7, SE
144 - iPad 3 (Retina)
152 - iPad Air, Air 2, Mini
167 - iPad Pro
180 - iPhone 6+, 7+
128 - Android Regular
192 - Android High Res

```html
<script>
addToHomeScreen({
  appId: "mordern.seo", // Local storage name (no need to change)
  message: "Add to home?", // the message can be customized
  modal: false, // block UI until the message is closed
  mandatory: false, // can't proceed if you don't add to homescreen

})
</script>
```

### AMP (Accelerated Mobile Pages)

No longer a an important factor.