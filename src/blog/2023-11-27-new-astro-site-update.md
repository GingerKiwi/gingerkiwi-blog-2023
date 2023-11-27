---
title: New Astro Site Updates and Plans
date: 2023-11-27
tags:
  - post
  - featured
  - code
  - "#new-astro"
  - "#updates"
image: /assets/blog/GK-dev_Update.webp
imageAlt: "'Graphic. Dark blue background. Gradient orange to pink border. Gradient text at top says GingerKiwi.dev. Underneath orange text says New Blog & Portfolio Astro + Next.js + SQLite then there's a row of three emojis separated by two + signs. crossed hammer and wrench, a redheaded woman behind a silver laptop, and a blue wheelchair symbol. Underneath in pink text it says Building in Public Updates'"
imageCaption: ADD CAPTION
description: "Earlier this month I started the long overdue process of combining my .dev and .blog sites into a single full-stack site with improved accessibility, article collections, an RSS, and reader features. As of Sunday evening, the new site is currently live at: https://gingerkiwi-2024.fly.dev, and the backend is working. Readers can now like posts. Continue reading to learn of plans and when it should be live on www.GingerKiwi.dev"
---


 Developing a new full-stack site is a multi-step iterative process.  The new gingerkiwi.dev site combines a blog with over two years of writing, with a developer portfolio, while adding a ton of new features. 
 Here's some of the details and updates for the new https://GingerKiwi.dev.
 
## This Week:

- I've started the domain registrars transfer of [gingerkiwi.dev](http://gingerkiwi.dev/) (No more GoDaddy! 🥳) . So the site should be deployed on .dev before the end of the week.
- My web hosting will move from Netlify to [Fly.io](http://fly.io/)  
- Email hosting for [gingerkiwi.dev](http://gingerkiwi.dev/) is switching from Google Workspace to [Microsoft 365](https://www.linkedin.com/company/microsoft-365/) Business
- As of last night, the backend is working. Readers can now like posts. See the article from two days ago about the "The Social Saturday Group Debugging Party".
  
  ### Next Steps

- Fix the layout issues on mobile
- Refactor the CSS and set custom fonts
- Get the cover images and their alt text working how I want them too 
- Create subpages for article series such as Motivational Mondays, Quick A11y Tips for Devs, and French for Devs.
- Write the accessibility statement
- Add portfolio projects and contact pages

There will be a ton of ongoing work moving all my blog posts from the past 1.5 years and older saved work onto this new site.

A light theme, setting theme to device settings, and some other features will be added in the upcoming months.

## The Stack

- Fullstack Next.js, Astro, React, 
- Tailwind CSS, 
- Drizzle ORM, Better-SQLite 
- Hosted on Fly.io

## Features

- Collections for posts with pages for different topics and article series.
- RSS feed 
- Improved accessibility features (see details below)
- Dark and light theme

### Accessibility Features

Some of the accessibility features include:

- skip-to-main-content, 
- in-page links for long articles, 
- fixed the semantic headings issue with posts and logo on gingerkiwi.blog, 
- dark mode
- Visual and colour indication of links on hover and focus
- Will be tested with NDVA and MacOS VoiceOver (2024)
- Accessibility statement page
