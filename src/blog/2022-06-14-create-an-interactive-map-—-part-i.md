---
title: Create an interactive map — Part I
description: "Creating an interactive "
author: Gary Cuétara
date: 2022-06-14T10:40:02.755Z
tags:
  - post
  - featured
image: /assets/blog/2022-06-14-09_01_36-window.png
imageAlt: An image of a medieval fantasy map
---
If you've ever read fantasy novels or played a medieval fantasy TTRPG, you've surely come across these fantasy maps reminiscent of [medieval europe's maps](https://i.pinimg.com/originals/f2/68/ec/f268ec457d062eba8a3d116a3004930e.jpg). A famous example is [Tolkien's Middle Earth map](https://preview.redd.it/0um3t9v8w3s21.jpg?auto=webp&s=c3716718b2b97d3d054275855e098de36f2750f6), which found even more popularity through its appearance in Peter Jackson's adaptation of the trilogy.

With the advent of the internet, this worldbuilding tool has adapted and changed to an interactive version not unlike Google Maps, which one can utilize to immerse oneself into the world of the franchise it represents. From [series](https://www.witchernetflix.com/) to [videogames](https://eldenring.wiki.fextralife.com/Interactive%2BMap), these maps can be useful to learn either lore or used as a guide to progress through the storyline.

While it may look intimidating, going about creating one of these maps isn't as difficult as it may seem. True, it may require some creativity and making use of the capabilities of some Javascript libraries, but I'll take a crack at making a simple guide on making a fantasy map on scratch.

For this guide, I'll make use of the following tech stack.

* Adobe Photoshop, for the map design (can be replaced with any graphical design tool).
* HTML, CSS and Javascript, for the basic website architecture.
* [Leaflet](https://leafletjs.com/index.html), a implement maps for your website.

If you want to check out the final result of this project, you can do so here (PENDING).

Without further ado, let's get started.

- - -

In this first part, we'll be focusing on preparing all the necessary assets for our map.

For this guide I'll be using Adobe Photoshop, but you may use the software you're more comfortable with.

We'll start by creating a new file. Make sure to set a big filesize, since this map will be able to be zoomed in and out. Mine is 5145x5145px.

![Photoshop canvas size, showing a width and height of 5145x5145px](/assets/blog/1.png "Canvas size window")

We now should have an empty white canvas. In this canvas we will be drawing the silhouette of our map. I used the standard photoshop flat brush, and drew it all in black. In the end, you should have something like this.

![A black and white silhouette of a map](/assets/blog/2.png "Map silhouette")

I won't be covering how to design the shape of your map, as there's plenty of guides and tutorials out there and I feel it's a bit out of scope for what I'm trying to teach here. However, I highly recommend [WASD20's playlist on how to draw fantasy maps](https://www.youtube.com/watch?v=2q-eDLiqtdg&list=PLq8DIL0O-i-mYmd-rt-xvy-MfvkGMvJf7).

To this shape I applied a series of Photoshop layer styles. This is not necessary, and I've played around with a lot of these to get the appearance to my liking. You may deviate from this, or choose equivalents in your preferred software.

To add these layers in Photoshop go to Layer > Layer Styles and choose the following.

![Stroke layer style, with a size of 7px, a position of Outside, a Blend mode of Normal, an opacity of 100%, a fill type of Color and a Color of #3c1c00.](/assets/blog/3.png "Stroke Layer Style panel")

![Inner glow layer style, with a blend mode of Overlay, an opacity of 75%, a noise of 0%, solid black, a technique of softer, source of edge, choke of 0% and size of 24%, default contour, range of 50% and jitter of 0%](/assets/blog/4.png "Inner glow Layer Style panel")