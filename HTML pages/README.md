# Red Tiger Studio, Static Preview

Static HTML preview of the Shopify theme. For testing the design and copy before deploying to Shopify.

## How to preview

1. Unzip the folder.
2. Double-click `index.html`. It opens in your browser.
3. Click around. All four pages link to each other, navigation works, mobile menu works, FAQ accordions work.

That's it. No server needed, no build step, no dependencies.

## What's in here

- `index.html`, homepage
- `subscription.html`, subscription page
- `about.html`, about page
- `contact.html`, contact page
- `theme.css`, all styling
- `theme.js`, mobile nav toggle

## What works in the preview

- Full visual design, fonts, colours, layout, animations.
- Page-to-page navigation.
- Mobile responsiveness, resize the window or use browser dev tools to test.
- FAQ accordion on the subscription page.
- Marquee strip animation on the homepage.
- Hover states on buttons and links.

## What doesn't work (and won't until Shopify deployment)

- Subscribe buttons. They link to `#`, in Shopify they'll go to the real product checkout.
- Contact form. It shows an alert in the preview, in Shopify it sends a real email.
- Newsletter signup in the footer. Same as above.
- Real product images. All images are diagonal striped placeholders.
- Past drops grid. Currently shows three placeholder months, in Shopify it'll pull from the actual collection.

## Sharing for feedback

Three easy ways to share with your friend for sign-off:

**Option A, send the zip.** She unzips and double-clicks `index.html`. Works offline, no setup.

**Option B, drop into Netlify.** Go to netlify.com, drag the unzipped folder onto the dashboard, get a live URL in 30 seconds. Free, no account needed for one-off drops.

**Option C, GitHub Pages.** Commit the folder to a public Git repo, enable Pages in repo settings. Live URL within minutes.

Netlify is probably the smoothest for a non-technical friend.

## After feedback

Once your friend signs off on the design and copy, the preview becomes a reference. Take it back to the Shopify Liquid theme in the parent folder, deploy that to Shopify, you're live.
