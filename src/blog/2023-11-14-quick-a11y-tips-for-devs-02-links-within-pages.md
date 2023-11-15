---
title: "Quick Accessibility Tips for Developers - With Cats and Coffee Themed Code Examples - Part 2: Links Within Pages"
date: 2023-11-15
tags:
  - post
  - featured
  - design
  - tools
  - tips
  - a11y
  - code
image: /assets/blog/A11yCodingTips-Cover.webp
imageAlt: "'Graphic with hot pink text on a black background. The top text says A11y Tips for Devs. Then there's a row of emojis with plus signs between them: happy cat face + cup of coffee + laptop _ active wheelchair user symbol. The bottom text says With Cat and Coffee themed code examples!'"
imageCaption: ADD CAPTION
description: Coding with accessibility in mind can be intimidating if you're not familiar with the needs of disabled, neurodiverse, Deaf/deaf, and hard of hearing users. Here is a quick tip on in-page links to help with longer pages like blog posts.
---

## About This Article Series

Coding with accessibility in mind can be intimidating if you're not familiar with the needs of disabled, neurodiverse, Deaf/deaf, and hard of hearing users. Yet, it's an essential skill to be both legally compliant, and to have easy to read and maintain code. 

*Note: Though it's ironic given today's topic, this article doesn't have links within the page - yet. <strong><em>I'm currently working on [a brand new site](https://gingerkiwi-2024-02.fly.dev) using Astro that will have enhanced accessibility features, and fix some of the styling that I'm not happy with in this gingerkiwi.blog site. </em></strong>When the site is fully launched, I'll be reformatting articles, including adding a contents section to all the longer articles.* 

*Visit [my new site being built in public](https://gingerkiwi-2024-02.fly.dev) on fly.io. There's links to Lazar Nikolov's Egghead.io course I'm using as the foundation for it.*

### The Cats and Coffee Examples


The **Quick Accessibility Tips for Devs** series has a fun cats and coffee example with the Crazy Cats Coffee website and repo. The first article used a codepen.

<img class="img-smaller"
     src="/assets/blog/site-screenshot-article-02.png"
     alt="screenshot of Crazy Cats Coffee website. Colour theme is beige and brown. Top navigation is dark black-brown with beige text. It says Skip to main content. Underneath that there's the round red-brown logo of a beige cat sitting in a coffee cup. underneath there's links to HOME MENU and THE CATS. Below in red-brown calligraphy text is Welcome to Crazy Cats Coffee! The next line says in bold italic black text Your Purr-fect Downtown Coffee Shop! underneath in regular weight and styled black text is Percentage of profits goes to support local rescue cat organizations. There's a picture of a dark brown long haired cat at coffee shop on a dark wood table by two iced coffees in plastic cups. Finally below the photo, in smaller red-brown calligraphy text than the welcome message is About Crazy Cats Coffee">

- [GitHub repo for the series](https://github.com/GingerKiwi/a11y-crazy-cats-coffee)
- [GitHub branch for this article](https://github.com/GingerKiwi/a11y-crazy-cats-coffee/tree/article-02-a11y-links)
- [The deployed site](https://a11y-crazy-cats-coffee.vercel.app/)
- [The page we're looking at today](https://a11y-crazy-cats-coffee.vercel.app/blog/2023-11-14-coffee-history.html)
- The [Crazy Cats Coffee codepen](https://codepen.io/gingerkiwi/pen/rNPjmXG?editors=1100) from the first article.

This week's article is a shorter one covering "in-page links"  - links within a page to other parts of the same page. This is especially useful such as in a longer blog post, or an FAQ page. 

## Contents

- In-page links
- Code template
- Crazy Cats Coffee code example
- The Code for the full blog page used as an example

## In-Page Links

**What are in-page links?**

Links within pages are hyperlinks that take users to different parts of the same page

**Why should developers use links within pages?**

1. They make it easier for all users to find the content they're interested in.
2. Screen reader users and refreshable braille display users often pull up a list of links at the beginning of reading a page.
3. Having a contents list at the beginning of the page helps users know what to expect in the blog post, FAQ, or other longer content page.
4. They can help with SEO

**How to use links within pages in your code**:

1. Create an id for the element you want to navigate to.
2. Use descriptive text for your links such as "coffee houses", and not "click here"
3. . Links must be keyboard focusable. Users must be able to tab to links.
4. Link text must be visually distinguishable from non-link text. For example links are commonly underlined, and in a different colour.
	1. When choosing colours keep in mind colour blindness (more on that in a later article).
5. All links, including in-page links, must have a visual indicator when users tab to them.
6. Links must be real links using the a tag (see code blocks below), and a valid href attribute. The use of additional ARIA labels should be avoided, except in special cases.
7. Special cases for using "aria-label" include links to citations where including the full text would take away from reading the content.

## In-Page Links Pages Template

```html
%% In-page link  %%
<a href="#id-of-location-in-page">Name of location in page</a>

%% --- page content --- %%

%% example of setting a location to link to - this one is in an h2 %%
<h2 id="id-of-location-in-page">Name of location in page</h2>
```

## In-Page Links Crazy Cat Coffee Code Example

```html

%% List of page links %%
 <h2>Contents</h2>
 
	<ol>
		<li><a href="#origin-of-coffee">The Origin of Coffee</a></li>
		<li><a href="#spread-of-coffee">The Spread of Coffee</a></li>
		<li><a href="#coffee-houses">Coffee Houses</a></li>
		<li><a href="#modern-production-tech">Modern Production Techniques</a></li>
		<li><a href="#health-benefits-coffee">The Health Benefits of Coffee</a></li>
		<li><a href="#references">References and Credits</a></li>
	</ol>
	
	%% Example of location link will take a user to %%

<h2 id="coffee-houses">Coffee Houses</h2>
```

## In-Page Links for Credits and References

Because the visible text in the link is just a superscript 1, we use aria-label="link to reference". This gives screen reader and refreshable braille display users the same information as users seeing the page. Visually a superscript number styled like a link means "this will take you to the reference for this text".  

If any user wants to see the reference they click or tap on the link. If not, the amount of text indicating that there's a reference isn't enough to break the reading flow for most users.

```html
%% Paragrah of text with an in-page link to the reference used to write it %%

<p>Coffee houses were established in Western Europe by the late 17th century, especially in Holland, England, and Germany. One of the earliest cultivations of coffee in the New World was when Gabriel de Clieu brought coffee seedlings to Martinique in 1720. These beans later sprouted 18,680 coffee trees which enabled its spread to other Caribbean islands such as Saint-Domingue and also to Mexico. By 1788, Saint-Domingue supplied half the world's coffee 
<a href="#ref-wikipedia" aria-label="link to reference">¹</a>.</p>

%% --- page content --- %%

%% location that the reference link navigates to %%

<li id="ref-wikipedia">Wikipedia <a href="https://en.wikipedia.org/wiki/History_of_coffee">The History of Coffee</a></li>

```


## The Full Blog Page

In case you're too busy to visit the GitHub repo for this series, I've included the full html for the blog page used as an example in this article. 

*Note: Like most things in this blog, this article and the code blocks will be reformatted when they are moved over to my new Astro blog.*

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog: The History of Coffee</title>
    <link rel="stylesheet" href="../styles.css">
</head>
<header class="text--align-center">
	<!-- 
	<img src="https://gingerkiwi.github.io/hosted-assets/icon-local_cafe_FILL0_wght400_GRAD0_opsz24.svg" alt="icon of coffee cup"> -->

	<a href="#main" id="skipToMain" class="a11y--skip-to-main">Skip to main content</a>
    <img class="image--centered logo" src="/assets/Logo_CrazyCatsCoffee.png" alt="Coffee shop logo. Icon of a cat sitting in a coffee mug.">
	<nav aria-label="Primary navigation">
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/menu">Menu</a></li>
			<li><a href="/cats">The Cats</a></li>
            <li><a href="/blog">Blog</a></li>
		</ul>
	</nav>
</header>
<body>
    <main class="format--max-width-70 padding-y-2">
        <h1>The History of Coffee</h1>
        <img class="image--centered" src="../assets/amanda-kerr-BvqCLtG9msc-unsplash.jpg" alt="a vintage metal coffee grinder. The base says VEGA S6 ESKILSTUNA SEPARATOR. The grider is on a rough, unfinished wood table. Theres several wooden barrels in the background.">
        
        <p class="padding-y-2">Here is a detailed history of coffee, one of the most popular beverages in the world.</p>

        <h2>Contents</h2>
       
        <ol>
            <li><a href="#origin-of-coffee">The Origin of Coffee</a></li>
            <li><a href="#spread-of-coffee">The Spread of Coffee</a></li>
            <li><a href="#coffee-houses">Coffee Houses</a></li>
            <li><a href="#modern-production-tech">Modern Production Techniques</a></li>
            <li><a href="#health-benefits-coffee">The Health Benefits of Coffee</a></li>
            <li><a href="#references">References and Credits</a></li>
        </ol>

<h2 id="origin-of-coffee">The Origin of Coffee</h2>
The history of coffee dates back to centuries of old oral tradition in modern-day Ethiopia and Yemen. It was already known in Mecca in the 15th century. Also, in the 15th century, Sufi monasteries in Yemen employed coffee as an aid to concentration during prayers <a href="#ref-wikipedia" aria-label="link to reference">¹</a>. 

Coffee is believed to have originated in the Ethiopian province of Kaffa, where it was discovered by a goat herder named Kaldi. Kaldi noticed that his goats became more energetic after eating the berries of a certain plant. He tried the berries himself and found that they had a similar effect on him. He then took the berries to a nearby monastery, where the monks brewed them into a beverage. The drink was found to be invigorating and helped the monks stay awake during long hours of prayer <a href="#ref-hcausa" aria-label="link to reference">²</a>.

<h2 id="spread-of-coffee">The Spread of Coffee</h2>
Coffee later spread to the Levant in the early 16th century; it caused some controversy on whether it was halal in Ottoman and Mamluk society. Coffee arrived in Italy the second half of the 16th century through commercial Mediterranean trade routes, while Central and Eastern Europeans learned of coffee from the Ottomans. By the mid 17th century, it had reached India and the East Indies <a href="#ref-wikipedia" aria-label="link to reference">¹</a>. 

<h2 id="coffee-houses">Coffee Houses</h2>
<p>Coffee houses were established in Western Europe by the late 17th century, especially in Holland, England, and Germany. One of the earliest cultivations of coffee in the New World was when Gabriel de Clieu brought coffee seedlings to Martinique in 1720. These beans later sprouted 18,680 coffee trees which enabled its spread to other Caribbean islands such as Saint-Domingue and also to Mexico. By 1788, Saint-Domingue supplied half the world's coffee <a href="#ref-wikipedia" aria-label="link to reference">¹</a>.</p>


<h2 id="modern-production-tech">Modern Production Techniques</h2> 
By 1852, Brazil became the world's largest producer of coffee and has held that status ever since. The period since 1950 saw the widening of the playing field owing to the emergence of several other major producers, notably Colombia, the Ivory Coast, Ethiopia, and Vietnam; the latter overtook Colombia and became the second-largest producer in 1999. Modern production techniques along with the mass productization of coffee has made it a household item today <a href="#ref-wikipedia" aria-label="link to reference">¹</a>.

<h2 id="health-benefits-coffee">The Health Benefits of Coffee</h2>
Coffee is not only a delicious beverage but also has several health benefits. Studies have shown that coffee can help reduce the risk of several diseases, including type 2 diabetes, liver disease, and Parkinson's disease <a href="#ref-healthline" aria-label="link to reference">³</a>. Coffee is also rich in antioxidants, which help protect the body against damage from free radicals <a href="#ref-medicalnews" aria-label="link to reference">⁴</a> .

<h2 id="references">References and Credits</h2> 
<ol>
    
    <li id="ref-wikipedia">Wikipedia <a href="https://en.wikipedia.org/wiki/History_of_coffee">The History of Coffee</a></li>
    <li id="ref-hcausa">NCAUSA <a href="https://www.ncausa.org/About-Coffee/History-of-Coffee">The History of Coffee</a></li>
    <li id="ref-healthline">Healthline <a href="https://www.healthline.com/nutrition/top-13-evidence-based-health-benefits-of-coffee">Top 13 Evenidence Based Health Benefits of Coffee</a></li>
    <li id="ref-medicalnews">Medical News Today <a href="https://www.medicalnewstoday.com/articles/270202">Is coffee good for you?</a></li>
    <li>Cover Photo <a href="https://unsplash.com/photos/black-and-gray-vegas6-commercial-machine-near-wine-barrels-BvqCLtG9msc">Amanda Kerr on Unsplash</a></li>
    <li>This article was composed by Bing AI</li>

</ol>

    </main>
    <footer class="padding-y-2">
        <nav aria-label="Secondary navigation">
            <ul>
                <li><a href="/" class="footer--nav">Home</a></li>
                <li><a href="/blog/2023-11-14-coffee-history" class="footer--nav ">Blog: Coffee History</a></li>
                <li class="footer--nav "><a href="/blog/special-events.html" class="footer--nav ">Blog: Special Events</a></li>
                <li><a href="/cats/adoptions" class="footer--nav ">Adoptions</a></li>
            </ul>
            <!-- navigation links for topics   -->
        </nav>
        <p>Site logo was developed in figma using "cat in mug" by Emily Murphy from</p> <a class="a--like-nav-hover a--like-nav" href="https://thenounproject.com/browse/icons/term/cat-in-mug/" target="_blank" title="cat in mug Icons" rel="nofollow noopener noreferrer external">Noun Project</a> (CC BY 3.0)
    </footer>
</body>
</html>
```

## Credits

1. The blog article on the history of coffee used in the code and site examples was written by Bing chat.
