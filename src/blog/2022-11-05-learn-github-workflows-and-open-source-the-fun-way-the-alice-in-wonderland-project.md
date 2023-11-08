---
title: |
  Learn GitHub Workflows and Open Source the Fun Way: The Alice in Wonderland Project
date: 2022-11-05
tags:
  - post
  - git-github
  - open-source
image: /assets/blog/down-the-rabbit-hole.jpg
imageAlt: Neon lights saying Down the Rabbit Hole on a black background. All the words are in pink neon, except the is in yellow neon
imageCaption: ADD CAPTION
description: Welcome to Wonderland! Getting involved in open source and learning GitHub workflows can be intimidating and challenging for new developers. During Hacktoberfest 2022, I created an open source repo to help other new developers learn GitHub work flows, get involved with open source while being social and making something fun.
---

**Welcome to Wonderland!**

Getting involved in open source and learning GitHub workflows can be intimidating and challenging for new developers - myself included. So during Hacktoberfest 2022, I created an open source repo to help other new developers learn GitHub work flows, get involved with open source while being social and making something fun.

[The Alice in Wonderland Project](https://github.com/GingerKiwi/alice-game) is a html/css/vanilla javascript text-based game with an Alice in Wonderland theme.  As this is a repo geared towards new developers learning GitHub workflows, most issues and PRs are small. Some are as simple as 'create a h2 heading on line x'. Some are low code  or no code issues like adding text to a markdown file. There's also some longer ones, like the current create a JSON file of contributor objects from the project discussion.

---

## The Alice In Wonderland Project History

This game was originally created as a [python console game](https://github.com/GingerKiwi/alice-game/blob/main/159.172_AliceStealsBandersnatchGame.py) as part of a computer science course at Massey University, New Zealand in 2020. Part of the assignment was documenting the thought process using comments. (So there's a lot of comments in the .py file!). The assignment was the classic [Camel Game](http://programarcadegames.com/index.php?lang=en&chapter=lab_camel) from "Program Arcade Games and With Python And Pygame" and originally conceived in 1979 in "More BASIC Computer Games".

However, the premise of the game is both racist and colonialist - stealing an camel from the "natives" and racing away from them across the Mobi desert. So I changed the theme to Alice from Tim Burton's Alice in Wonderland movie rescuing the Red Queen's Bandersnatch from his imprisonment and racing across Underland to get to the White Queen's castle. I also added a random chance that the player would be attacked by the Jabberwocky, be killed, and the Jabberwocky poem would print on the screen.

### From Python Console to Javascript Text Based Web App

The goal is to take the existing python code and turn it into an accessible text based web game in html, css, and vanilla javascript. The game type is much like the classic text based "Oregon Trail" PC game. As we're still working on the html and css, the repo looks like it's a python project and not a javascript one. So I get a lot of devs reaching out who want to learn python. 

## Accessibility - Part of Every PR - Not Retrofitted and Refactored

This project is being developed with accessibility in mind from the beginning and at every step. That starts with semantic html, labelling elements, and having a "skip to main content". It also means that even if planned accessibility features such as theme switching aren't being released in a particular version, the code is still written to make those features easily added.

This is one reason why CSS variables are being used, instead of hard coding colours and font/text attributes. While CSS variables are a more intermediate level skill, they make it easier to switch colours, type/font and implement theme switching instead of having to refactor the entire stylesheet. 

This is not just an "extra" add on. It's industry best practice as it results in immense cost savings to include accessibility at every step in the development process. You wouldn't build a house without doors and windows, then cut holes in the walls afterwards to put them in. That's both costly and down right silly. So don't build web apps and software that way!

---

## Where the Alice in Wonderland Project is Going Next

Now that the Hacktoberfest is over, this project is going to progress slowly and steadily. While I'm a new dev, I've created and managed other types of projects before and know how to keep things from going pear shaped. Miscommunication and project creep suck!

So, I'm working on setting up some project management tools (e.g. Jira, discord server for live chat), an initial project proposal, and delegating parts of the Alice project so that it stays doable for everyone. A slow, organized and thoughtful start means a much better experience for everyone! No one needs to end up with as sore a head and grumpy as the Red Queen! Maintainers don't need to lose their head by getting overworked.  ;-)

If (when!) you get involved with The Alice in Wonderland Project, expect a relaxed, fun, social pace. We're not trying to push out new releases and versions on a fast paced schedule. We're building a community, having fun, and learning together. Everyone has personal lives, projects, and things that keep them busy. That shouldn't prevent any of us from being part of the open source community!

---

## How to Get Involved

If you'd like become part of the community at [The Alice in Wonderland project on GitHub](https://github.com/GingerKiwi/alice-game) and contribute to developing the game please follow these three steps:

1. Please introduce yourself in the [discussions tab](https://github.com/GingerKiwi/alice-game/discussions/4)
2. Have a quick read through *both* the [**CONTRIBUTING.md**](https://github.com/GingerKiwi/alice-game/blob/main/CONTRIBUTING.md) and [**README.md**](https://github.com/GingerKiwi/alice-game/blob/main/README.md) files
3. Comment in the issue that you'd like to work on.

If we still have contributor spots open, one of the maintainers or myself will assign you the issue. If we've maxed out the number of contributors we can effectively support, we'll put you on a waitlist, and you're welcome to follow along on GitHub.

### People Roles - Who Does What?

If you're interested in joining other devs in going down the rabbit hole to learn GitHub workflows, get involved in open source, learn accessibility, and apply your html, css, javascript, and markdown skills there's two options. The first step is to be a contributor.

#### **Contributors:**

Contributors are the backbone of the project. They're new devs at any point in their learn to code journey - from knowing how to say "hello world" in html heading all the way to more advanced CSS (css variables, grid, css functions) and JavaScript (e.g. JavaScript promises, arrow and constructor functions, api).


#### **Maintainers:**

Maintainers act as team leads. They are fellow new devs who are far enough along in a skillset that they can provide valuable code reviews and manage part of the project. For example, my fellow 'NewbiesSmashingPumpkins' teammate, and Scrimba friend [Wes](https://www.linkedin.com/in/wesley-vinson-edd/) is overseeing the Javascript and JSON parts of the project.

#### **Creator/Maintainer:**

Finally there's me. As the project creator, I'm writing the project management documentation, guiding maintainers in contributing to project management, and helping new devs learn markup and technical writing.

---

## Join Your Fellow Devs Down the Rabbit Hole Today!


**Say Hello on GitHub: [https://github.com/GingerKiwi/alice-game](https://github.com/GingerKiwi/alice-game)**

**Connect with me on [LinkedIn](https://www.linkedin.com/in/elizabethmccready)**

**Follow my blog, and watch out for when the new JamStack version is released [gingerkiwi.blog](https://gingerkiwi.blog)**

**Follow me on [Dev.to](https://dev.to/gingerkiwi)**

Happy Coding, and Welcome to Wonderland!

---
## Image Credits

- [Cover Image: Brecht Corbeel on unsplash.com](https://unsplash.com/photos/BvAwzPQRRis)
- [Down the Rabbit Hole: 
Meghan Hessler on unsplash.com](https://unsplash.com/photos/KaOQ6u1zRVw)