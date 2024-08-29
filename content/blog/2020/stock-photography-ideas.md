---
title: "How to find stock photography ideas that sell (backed by data)"
date: 2020-07-21T21:21:05+03:00
image: "images/posts/2020/stock-photo-ideas/hero.jpg"
author: Taras Kushnir
emailbest: true
keywords:
  - microstock
  - photo
  - inspiration
  - ideas
  - analysis
  - analytics
categories:
  - content
  - analysis
---

You just uploaded your perfect artwork to the microstock. Few weeks have passed but you got just a couple of sales. Quite depressing, isn't it? If that is familiar to you, you should know you made one mistake: you didn't met the buyer's demand. In this post we will show you how to never do it again.

{{< table-of-contents >}}

## What the buyer needs

There's an important rule to being successful at microstocks: **you should create the content the buyer needs, not the content you like**. It is very basic yet many people never seem to care about it. However it has a small caveat: how to know what the buyer needs? And while it might be obvious for some seasonal holidays like New Year or Christmas or [popular culture]({{< relref "/blog/2021/movie-trend-analysis" >}}), it is not clear how to get it in general.

To answer that question we can put ourselves into the buyer shoes. Say, we need an image to our new blog post or media campaign. What do we do? Right, we go to Shutterstock or any other microstock and search for the image. But what if we never heard of Shutterstock? Well, in that case everybody heard of Google. Indeed, if you open Google and search for "stock photo", you will get ton of suggestions of what people look for:

![Google suggestions](/images/posts/2020/stock-photo-ideas/google-suggestions.jpg "Google suggestions for query 'stock photo'")

While Google autosuggest is a good and free tool, it does not show one important metric: **how many buyers are searching for this particular query**. Without this knowledge, it's hard to know where is a bigger demand. And surprisingly there are tools that can answer this question: meet SEO tools. SEO stands for Search Engine Optimization - it's a set of techniques used by webmasters to make your website rank higher in Google. Those techniques include, but are not limited to: keywords research, backlink analysis, on-page SEO. Here is a bunch of tools, that can provide the statistics we need:

* [Ahrefs](https://ahrefs.com)
* [Moz](https://moz.com/)
* [SEMrush](https://www.semrush.com/)
* [SERPstat](https://serpstat.com/)
* [and many more](https://www.hostingsprout.com/ahrefs-alternative/)

While those tools are primarily used by SEO professionals to monitor and optimize traffic from search engines, they have invaluable data for microstock contributors too. Let's look into the same query as in Google autosuggest, but this time in Ahrefs Keywords Explorer.

![Ahrefs keywords explorer](/images/posts/2020/stock-photo-ideas/search-stock-photo-volume.jpg "Searches for 'stock photo' - note 'Volume' column that shows amount of traffic")

Here's a part of that table:

{{< blog-table >}}
Keyword | Country | Volume | Clicks | Parent keyword
--- | --- | --- | --- | ---
soldering stock photo | US | 2000 | - | soldering stock photo
thumbs up stock photo | US | 1800 | 293 | soldering stock photo
stock photo man | US | 1600 | 261 | man stock photo
family stock photo | US | 1500 | 381 | family images
old man stock photo | US | 1500 | 338 | pics of old man
hacker stock photo | US | 1400 | 402 | hacker stock photo
money stock photo | US | 1200 | 280 | money images
doctor stock photo | US | 1000 | 341 | doctor stock photography
business stock photo | US | 1000 | 286 | business images
{{< /blog-table >}}

You can [download the first 100 rows]({{< misc/rel "/files/posts/stock-photo-ideas/google_us_stock-photo_phrase-match.csv" >}}) if you want to explore it yourself.

"Keyword" column in the table above is what people are typing in Google and "Volume" is amount of these searches per month. Also this table features a so-called "Parent Keyword" column which is a broader topic that is actually been searched when using a query from "Keyword".

You can see that each of these queries gets more than a 1000 monthly searches in US alone! Exploring these data can help you to decide what you would like to produce and also can help you choose between few different directions. **Having these kinds of insights into buyer demand will never let you down again.**

Now if you want to narrow down this search, you can modify "Include" filter in Ahrefs toolbar and enter something. I entered "background" as an example of a popular query:

![Ahrefs keywords explorer 2](/images/posts/2020/stock-photo-ideas/search-background-volume.jpg "Searches for 'stock photo' filtered for 'background': 742 examples of what buyers look for")

You get 742 examples of search queries that include "background" each having a search volume shown. Not bad for only few minutes of work. But can we do even better than that?

## What buyers search on Shutterstock

Of course, knowing what buyers search on Google is good, but it would be even better to know what they are searching on Shutterstock. It's handy that Shustterstock also has an autosuggestion when searching so we can see what most commonly buyers are searching for, just like Google search.

![Shutterstock suggestions](/images/posts/2020/stock-photo-ideas/shutterstock-suggestion.jpg "Shutterstock suggestions can reveal buyer demands")

Even though this is very useful, the problem is that we don't know the volume of these searches. But it appears that we can answer these questions using SEO tools as well. Ahrefs has a powerful tool called "Site explorer" that allows to explore traffic, keywords and backlinks of a given website or it's particular page.

We know that all search results pages on Shutterstock start with _"shutterstock.com/search/"_. So if we enter _"shutterstock.com/search"_ as a webpage and select "Prefix match" in Ahrefs, we can get different metrics associated with this particular page. But the one we are mostly interested in is called "Top pages" report. It shows what are the most visited pages on the website or pages starting with a prefix. It contains millions of results for such a big website as Shutterstock so to narrow it down, I entered "worker" as a search phrase:

![Shutterstock suggestions](/images/posts/2020/stock-photo-ideas/shutterstock-search-worker.jpg "Shutterstock top searches using keyword 'worker' - 2381 search queries from buyers")

Here's a part of that results:

{{< blog-table >}}
Traffic | URL | Top keyword | Volume
--- | --- | --- | ---
249 | https://www.shutterstock.com/search/social+worker | social workers images | 200
161 | https://www.shutterstock.com/search/construction+worker+cartoon | construction worker cartoon | 250
116 | https://www.shutterstock.com/search/cartoon+office+worker | office worker cartoon | 90
79 | https://www.shutterstock.com/search/worker+logo | worker logo | 100
75 | https://www.shutterstock.com/search/social+worker+symbol | social worker symbols | 200
{{< /blog-table >}}

You can [download the first 100 rows]({{< misc/rel "/files/posts/stock-photo-ideas/shutterstock-top-pages-by-traffic.csv" >}}) if you want to explore it yourself.

"URL" column shows the actual search that customers entered in the Shutterstock. For example, they used search "social worker" for the first row in the table. "Top keyword" column shows what was the actual keyword given pages ranks for in Google (not Shutterstock) and it's Google search volume as "Volume". On the other hand, "Traffic" column shows total number of visitors to this page on Shuterstock per month.

So here you go: now if you decide to create visuals of a "worker", you will know exact traffic and phrase the buyers use to search for it. It opens truly wonderful opportunities in creating the "right" content that will satisfy the demand.

Such data can also show which topics are niches are out there: just limit traffic to a lower value and examine the search queries. After you find interesting ones, you can always explore Shutterstock to see if the niche is well represented or not.

### Top 100 searches in Shutterstock

An interesting insight can be drawn from [analysing top-100 customer queries on Shutterstock]({{< relref "/blog/2021/top-100-queries-shutterstock.md" >}}). It seems that there are few major categories what customers need the most:

- Backgrounds of different colors (specifically: blue, black, red, white, yellow, green, orange and golden)
- Textured backgrounds (islamic, nature, plain, glitter, rainbow, fire, birthday, anime, easter, gamer)
- Logos of Instagram, Whatsapp, Facebook and Nike
- Holidays topics such as Christmas, Thanksgiving, New Year and Diwali
- Photos of people, such as old granny, cute baby, mom and son, scary face and others

## What are your competitors' best sellers

Another angle of viewing at this problem is to check what are the most popular images of your competitors. This can also reveal what actually buyers want. If you would know it, you would have an opportunity to create even better artworks and outrank your competitors in the Shutterstock search results.

In order to find the most-viewed artworks, you can leverage the same page in Ahrefs: "Top pages" report. But now instead of _"shutterstock.com/search"_ page that shows searches, you can enter _"shutterstock.com/image-photo"_ as a prefix since all individual photos on Shutterstock start with this URL.

![Shutterstock top images](/images/posts/2020/stock-photo-ideas/shutterstock-top-artworks.jpg "Shutterstock top artworks by traffic")

Here you can find the exact artworks that brought the most traffic to their authors. Most authors also include their main keyword in the title of the artwork so you can narrow down results to the niche that you're trying to conquer. Just use "Include" filter in the top toolbar on Ahrefs website and filter out irrelevant results.

## How to validate your content ideas

After you found few prominent topics, make sure to check what the first page of results on Shutterstock for each of them. Make notes of type of the content that ranks high: are there people in the frame, what is the angle of the photos, are there any common technical details (e.g. blurred edges, common colors), how many artworks this particular search result has.

![Shutterstock first page](/images/posts/2020/stock-photo-ideas/explore-shutterstock-query.jpg "First page of Shutterstock search results can say a lot about the content produced")

Also first page of results may suggest you additional keywords to verify the Volume for. On the example above you might notice "door survey", "door visit", "seniors at door". All these might be great keywords to check in Shutterstock top searches report in Ahrefs.

After you do this, check the topics you found in [Google Trends](https://trends.google.com/trends/). Here's a comparison for a few ideas found recently in the "worker" query from Shutterstock results:

![Google trends](/images/posts/2020/stock-photo-ideas/google-trends.jpg "Google trends comparison for concepts 'office worker' and 'social worker'")

You can see that general interest is higher for keywords "social worker" than for "office worker" - this insights might help you a lot to select a topic for your next artworks. Also "social worker" gets more traffic accordingly to the Ahrefs tool. You can also check an excellent blogpost on [microstock analysis using Google Trends](https://www.mystockphoto.org/google-trends-stock-photography/) to learn more.

## Can you trust SEO tools data

Ahrefs and other SEO tools get their traffic data from a huge third-party data source called [Clickstream](https://www.techopedia.com/definition/15403/clickstream). This is the browsing history and click data that is collected using freeware and shareware applications from your computers (yes, it was mentioned in those long terms of service that nobody reads). Clickstream providers allegedly anonymize the data and aggregate it and services like Moz or Ahrefs build on top of it. This makes **the numbers reported by SEO tools an underestimations** of the real traffic potential of each respectful page. So in general, the answer is "Yes" - you can trust this data.

## Which SEO tool you should use for the research

It's worth mentioning that SEO tools with such power are not free. In fact, they are quite expensive. The aforementioned Ahrefs starts with _$100_ per month and goes as high as _$1000_ per month. It's main competitor Moz is about the same. Others mentioned in the beginning can be half as expensive, but they are anyway not cheap in general. And while each tool is different in terms of UI and features, they are based on the same data and for the traffic estimates all use Clickstream. Also luckily you don't have to use it for the 12 month in a row: it is enough to conduct a small research only couple of times per year and then implement what you found.

Most of the tools offer some sort of trial evaluation so the best advice you can get is to try them out and figure one that is the best for you. Also there some free tools that you can use: [Ahrefs Keywords Generator](https://ahrefs.com/keyword-generator) that shows Volume and Traffic metrics and [Answer the Public](https://answerthepublic.com/) that can show you more autosuggest queries from Google and Bing.

<br />

**Used links**

* Ahefs learnings materials can be found [here](https://www.youtube.com/channel/UCWquNQV8Y0_defMKnGKrFOQ)
* header image sourced from [here](https://www.freepik.com/free-photos-vectors/business)
