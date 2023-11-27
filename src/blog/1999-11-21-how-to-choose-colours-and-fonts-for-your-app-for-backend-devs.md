---
title: "Design Tools and Tips for Backend Developers - Part 02: How to Choose a Colour Pallet and Fonts 101"
date: 1999-11-21
tags:
  - post
  - design
  - css
  - backend
  - tools
  - tips
  - "#tailwind"
  - "#typography"
  - "#fonts"
  - "#UI-design-ideas"
image: /assets/blog/2023-08-08_charlesdeluvio-cZr2sgaxy3Q-unsplash.jpg
imageAlt: "'Photo of two black cell phones. The one on the upper left is showing an app login screen with a black background. It has the option to sign in with Apple or with Google. The app is named byte. there are multiple colourful small shapes swirling around the background. The second phone in the lower left shows the same app after login. It's also a black background. The top has a search bar that says \"user name\" Then there is an orange-yellow area that says \"Spotlight\" with stars around it. Underneath is a light blue area that says \"Popular Now\", then another area that's purple that says \"Experimental, New & Trending\" finally there's two side by side squares with no text. The on on the left is yellow ith an open banana. The one on the left is very light green with a lilly pad with a pink flower.'"
imageCaption: ADD CAPTION
description: This is the second in a series of articles on tips and tricks for web and app design - both for backend dev, and new developers. Every time I get in a discussion with backend or sometimes full-stack devs that prefer the backend, they say that one reason they prefer backend is that they're "not good at design". However, with a few simple tools and tips even those scared of design can become more comfortable in designing good looking apps. Today we're looking at how to choose a colour pallet and fonts (typography) for your app.
---
# DRAFT

This is second in a series of articles on tips and tricks for UI design and CSS - both for backend dev, and new developers. There's <a href="#about-this-series">more about this series</a> below. But <a href="#todays-topic">let's get started!</a>

_Note: If you're viewing this on gingerkiwi.blog some of the headings and links may look a little weird. I'm working on a new fullstack Astro site which will have nice styling for in-page links, along with a ton of other design and accessibility improvements. It's being built as a dark theme first, with a theme switcher to be added. The [new Astro site](https://gingerkiwi.xyz)is being built in public at a temporary url. It will be moved to [https://gingerkiwi.dev](https://gingerkiwi.dev) in the next few weeks (November and December, 2023)_.
## <h2 id="todays-topic">Today's Topic</h2>

<strong>Today we're looking at how to choose a beautiful and accessible colour pallet and fonts (typography) for your app.</strong> We'll be using the [Tailwind CSS colors page](https://tailwindcss.com/docs/customizing-colors) as our starting point. **You don't have to use Tailwind in your project**, but the nice grid of Tailwind colours page helps keep things simple - a grid is far easier than a colour wheel.<strong>This process should take about 15-30 minutes.</strong> However, it could be as long as an hour if you spend more time trying different options out. 

## Contents: The Tools and The Five Steps

There's a selection of tools, and five simple steps to follow. Feel free to skip the "About this article series" section if you just want to get going.

1.  <a href="#about-this-series">About this article series </a>
2. <a href="#tools-overview">Tools used: Overview</a>
3. <a href="#tools-setup">Tools: Setup and organize your tools</a>
4. <a href="#tools-links-to-open">Tools: Links to have open</a>
5. <a href="#step-1">Step 1: Choose your favourite colour</a> from the Tailwind colour page
6. <a href="#step-2">Step 2: Create a colour pallet with the colour calculator.</a>
7. <a href="#step-3">Step 3: Convert your three colours to Tailwind colours</a>
8. <a href="#step-4">Step 4: Choose a header and a body font from Google Fonts</a>
9. <a href="#step-5">Step 5: Visualize your colours and fonts</a> using Real Time Colours
10. <a href="#resources-and-readings">Resources and recommended readings</a>


<h2 id="about-this-series">About The Design Tips for Backend Devs Series</h2>

**Does the following sound familiar?** You have a great idea for an app, but have no idea where to start with the frontend. But it needs a frontend! So you cobble together some Bootstrap CSS, but it still doesn't look as cool as its functionality, the layout is weird, it's failing accessibility testing, and you're swearing at whoever invented CSS (Håkon Wium Lie). Basically, the awesome fullstack app that you spent ages coding and debugging looks like 💩!

This series is designed to give backend devs and new devs a helping hand with design - we're all part of the awesome global dev community after all! It's much easier to focus on coding if you have a starting point in the design of the frontend. 

Accessibility tips are also integrated. This decreases tech debt, keeps more users on your site (20% of people are disabled, Deaf/deaf, and/or neurodivergent), and is a legal requirement. 

Note: This series is aimed at developers who are uncomfortable with design. So some of the methods, tools, and tips are ones that I wouldn't necessarily recommend to those comfortable and/or experienced in UI design, graphic design, or other art. I also skip over some of the more design geek topics and theory. But resources and recommended readings are included. All the articles give simple ways to just get something done so developers can move on to what they're passionate about. 

<h2 id="tools-overview">Tools Used in This Article</h2>

There's so many tools on the web that can help you design a colour pallet and typography for websites and mobile apps. I've chosen the following set because it's worked for myself, and for when I helped my Toronto Javascript coding buddy with his new Astro site. Using the Tailwind CSS Colours has two added bonuses. It's lovely colour grid keeping things organized. It's also simple to implement the colour pallet and fonts if you happen to be using Tailwind. 

### Setup and Organize Your Tools

Before diving in it's important to be organized. Things will go faster and you'll be able to get back to your awesome app's code sooner.

1. Open the websites and tools listed below. 
2. Arrange them in tabs from left to right in your browser of choice. 
3. You will also need a place to take notes. A markdown file or Notion.io is ideal for this because you can add code blocks, but a Word or Google doc works perfectly fine. 
### Links to Have Open - In Order

1. [Tailwind CSS colours page](https://tailwindcss.com/docs/customizing-colors)
2. [Tailwind to Hex converter](https://tailwind-color-finder.vercel.app)
3. [Sessions College Colour Calculator](https://www.sessions.edu/color-calculator/?utm_source=pocket_saves)
4. [Realtime Colours]()
5. [Google Fonts - display fonts](https://fonts.google.com/?classification=Display) This is for your headings
6. [Google Fonts - sans serif](https://fonts.google.com/?stroke=Sans+Serif)This is for your body text


___


<h2 id="step-1">Step 1: Choose Your Favourite Colour on the Tailwind Colours Page</h2>

### Substeps

- 1a. Go to the first tab you have open.
- 1b. Choose your favourite colour row.
- 1c. Write down the name of the colour row
- 1d. Click on the 700 value of your colour

### Example

- Favourite colour: 

<h2 id="step-2">Step 2: Use the Color Calculator to Create a Pallet</h2>

### Substeps

- 1a. Go to the Sessions Color Calculator tab
- 1b. Scroll down until you see the colour wheel
- 1c. Paste your Tailwind 800 colour in the "1. Pick a colour" text box.
- 1d. In "Step 2: Colour Harmonies" select one of the 3, three-colour harmonies after reading the section on "Selecting a colour harmony" below.

#### Selecting a colour harmony

**What are colour harmonies?** Colour harmonies are sets of colours that work well together given their mathematical relationship to each other on the colour wheel. (Yes, there's math in art - and a whole bunch if you're a knitter and knitting designer as well as a developer!)  

**We're only going to choose between the 3, three-colour harmonies in step two in the Sessions College tool : the 3rd, 4th, and 5th options**  I could - and have in my university art courses - written thousands of words just on colour theory. Let's just skip that and quickly choose one of three options based on your goals and audience for your app. 

From left to right, starting at the 3rd option on this tool the colour harmony choices are:

1. Analogous: this is the three dots close to each other 
2. Split complimentary: This is the skinny (isosceles) triangle 
3. Triadic: This is the equilateral triangle

Ok, but which ones should you choose? Lets' skip the thousands of words of colour theory and psychology again, and quickly choose one based on the following:

1. Split complimentary: Unless you're audience is one of the two below start with the split complimentary. It's a nice happy middle.
2. Analogous: If you have a **very formal audience** like a banking app or something for a legal firm or government department.
3. Triadic: If you have a very vibrant and fun app,  or your app features an important call to action.

### Substeps Continued

- 1e. Click on the chosen colour harmony.
_Note: If you're using the split complimentary colour harmony and you hate one of the colours use Triadic instead._


### Example: Choosing a Colour Harmony

...

<h2 id="step-3">Step 3: Convert Your Colours to Tailwind Colours</h2>

### Substeps

### Example


<h2 id="step-4">Step 4: Choose Fonts From Google Fonts</h2>

### Substeps

### Example

<h2 id="step-5">Step 5: Visualize Your Colours and Fonts</h2>

### Substeps

### Example

<h2 id="resources-and-readings">Resources </h2>

If you want to learn more about colour theory here's a few resources to get you started.

- Cameron Chapman's [5 Part Series](https://www.smashingmagazine.com/2010/01/color-theory-for-designers-part-1-the-meaning-of-color/)on Colour Theory, visual perception, and typography in [Smashing Magazine](https://www.smashingmagazine.com/)
- Interaction Design Foundation [What is Color Theory?](https://www.interaction-design.org/literature/topics/color-theory)
- Jane Hannah [An Introduction to Color Theory and Color Palettes](https://careerfoundry.com/en/blog/ui-design/introduction-to-color-theory-and-color-palettes/#:~:text=The%20color%20wheel%20doesn%E2%80%99t%20just%20chart%20each%20primary%2C,create%20bespoke%20color%20palettes%20that%20promote%20aesthetic%20harmony.)on Career Foundery
- Jane Hannah on LinkedIn [Jaye Hannah | LinkedIn](https://www.linkedin.com/in/jaye-hannah-8b50ba120/)
- Blender Gruru [Understanding Colour](https://youtu.be/Qj1FK8n7WgY?si=dmwbJ9HK58nnt0dc)on YouTube
- Brooklyn Tweed [# How to Knit: Selecting Colors for Colorwork](https://youtu.be/wZSaZWErjLw?si=CMTZ8sbUrkyxXNro) _Yes, I had to slip a knitting reference in!_