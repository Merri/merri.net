---
title: 'The perfect image lazy loading'
publishDate: '2022-03-15'
layout: '$layouts/BlogPost.astro'
author: 'Vesa Piittinen'
description: 'Lazy loading has seen some insane amounts of over-engineering around it in the past few years.'
devUrl: 'https://dev.to/merri/the-perfect-image-lazy-loading-16i4'
---

Alright, lets get our JavaScript coding fingers ready for we are going to make the most awesomest image lazy loading!

```html
<img
  alt="A giraffe eating fallback code solutions"
  src="giraffe.jpg"
  height="500"
  width="1000"
  loading="lazy"
/>
```

## Wait, what?

Yes, HTML is enough to perfectly solve this issue. [Safari 15.4 now ships with lazy loading support](https://webkit.org/blog/12445/new-webkit-features-in-safari-15-4/). It was the last browser we waited for to catch up.

You no longer never need to do any JavaScript or CSS trickery related to typical image content loading.

## But what about my fade in animation!

Don't do it. You should use a **progressive image**. The thing with progressive image is that once browser receives any image data it is able to start rendering at least something visual.

If you do image animation such as a fade in transition you are making a mistake. Without adding in lots of complex code you can only trigger a fade in transition **once the entire image file is done loading**. On slow connection this means the image will display, well, probably way after user has scrolled past the image.

This is an unnecessary cost only for having a "cool fade in animation that I like and it fits the design".

## I want at least a fallback color!!

Don't do that either. If you're using a progressive image then the time a browser **might** show the "ugly alt text" is greatly reduced. Automating a fallback background color is not worth the extra code or complexity. Besides it can get in the way with alpha transparency images anyway.

## Conclusion

Embrace the simpliness that you now have and put your mind into other things.
