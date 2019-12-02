---
slug: '/is-ssr-really-the-only-solution'
date: '2019-12-02'
updatedAt: '2019-12-02'
title: 'Is SSR Really the Only Solution?'
# Description should be no more than 160 characters in length
description: 'My thoughts on server side rendering in 2019: SSR's advantages, disadvantages and alternatives'
categories: ['web', 'ssr', 'architecture']
banner: './images/banner.png'
---

import Link from "$components/Link";
import Quote from "$components/mdx/Quote";

![banner](./images/bannerBig.png)

## What's Wrong with SSR

There is nothing wrong with SSR. I write this blog not to criticize SSR, but to express some other thoughts.

## Imagine the Following Scenario

As developers, we all want to tackle technically challenging projects. However, in most business settings, projects are often pretty tedious: a couple of static pages, a product display page, etc. These projects are not technically challenging, but they must be done.

## Just Use jQuery

When receiving these "simple" projects, the first thing that comes to most people's mind is jQuery. Although jQuery has long been considered outdated in the front-end community, it really does the job. With BootStrap, these static pages can be finished in hours.

The jQuery + BootStrap combo is still feasible today because it satisfies most business requirements and has a pretty smooth learning curve. 

Everything is solved, right? Can we just stop the discussion?

## MVVM Dominates

MVVM is the dominant trend in the front-end community. Even complete beginners know that jQuery is a thing of the past, and that they must learn Angular, React or Vue.

Angular. React. Vue. Once you get started with a framework, you will never want to use jQuery again. Even if you don't use any of the three, how about ES 2015+? How about Less, Sass? How about Pug, EJS? If you use any of these, then you probably need Babel, Gulp and Webpack, right?

jQuery is not bad, but developers today are just more used to MVVM.

## SEO: A Recurring Topic

MVVM really improves development experience and productivity. Another concept is often mentioned together with MVVM. Single Page Application, or SPA. This is something that we love and hate.

SPA produces great user experience. Switching pages feels smooth and natural. But the biggest problem of SPA is its poor support for SEO (Search Engine Optimization).

To solve the SEO problem, mainstream MVVM frameworks all offer some SSR-based solutions.

To be continued, work in progress...