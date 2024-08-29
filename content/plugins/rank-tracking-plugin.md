---
layout : "page-blog"
title: "Rank Tracking plugin"
description: >
    Track ranking of your artworks in customer queries on microstocks.
pro: true
image: '/images/plugins/rank-tracking/rank-tracking.png'
install_plugin: true
aliases:
  - /plugins/rank-tracking/
order: 6
---

## Overview

Rank tracking plugin allows you to see how your files are ranking in competitive customer queries on microstocks. Once you configure the queries, Xpiks will update the ranks every day and show them on a beautiful chart. Also you have an option to export raw data to Excel for you own analysis.

Xpiks supports tracking rank in Adobe Stock and partially in Shutterstock (see limitation note below).

## What is a ranking

Xpiks executes search queries that you configure (see below) on the microstock agency websites. In the results of the search queries it finds your artworks (photos, vectors or videos). On the chart you can see the position of your artwork in the results of the search query and how does it change with time - this is the ranking.

Even if your files rank high for the customer queries today, it is possible that new content will push your files down. Then you can react to it and create a better content in the respectful niches.

## How to track ranking

### Find query you would like to track

At first you should see which query you would like to watch. You can do that in Adobe Stock search.

![Adobe Stock search](/images/plugins/rank-tracking/stock-information.jpg "Suppose you would like to track query 'mountains team snow'")

Note search parameters you used:

- type of artworks (all, photo, vector, video, etc.)
- type of search (relevance, newest etc.)

After you found file you would like to track, note it's internal stock ID. You can find it in the URL or under the picture:

![Internal ID 1](/images/plugins/rank-tracking/photo-id.png "First place to look for ID is in the URL")

![Internal ID 2](/images/plugins/rank-tracking/photo-id2.png "Also you can find it under the picture")

### Add these details to the plugin

Now enter these details in the plugin itself:

![Plugin details](/images/plugins/rank-tracking/tracking-details.png "Same search parameters as you used in browser")

### Wait for results to appear

Xpiks will update the rankings and assign your search a color to find it on chart.

![Tracking results](/images/plugins/rank-tracking/updated-rank.png "Updated rank")

## Limitations

### Search depth

Xpiks tracks rank up to position `200` in the search results. If your file cannot be found in top 200 search results, Xpiks will stop looking for it.

### Shutterstock limitations

There are certain limitations imposed by Shutterstock API that cause _some_ files to not be found in search in Xpiks, while being found in website search. It applies only to Shutterstock, other microstocks (e.g. Adobe Stock) work fine. Currently there's no resolution to this issue.