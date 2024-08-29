---
title: "Analyzing keywording of 10,000 most popular stock images"
date: 2022-10-01T08:19:38+03:00
image: "/images/posts/2022/keywording-analysis/header.jpg"
author: Taras Kushnir
keywords:
  - analysis
  - statistics
  - analytics
  - keywording
  - metadata
  - microstock
  - keywords
  - ideas
categories:
  - analysis
---

Keywording is really the second most important deciding factor in your success on microstocks (after the quality of your work, of course). To be found, your artwork has to feature keywords similar to those customers might be using to search for it.

However, whist so important, it is largely still a mystery to many. Should you compete for the most "juicy" ones, that already feature millions of search results or should you target the "niche" ones? Should you only add just a few most important keywords or should you fill all 50 available slots?

In this research we will try to shed some light on what might be the keywording guidance you always needed.

{{< table-of-contents >}}

## Method of the research

In order to conduct such research, it was decided to analyze the 10,000 most popular images on Shutterstock. "Popularity" in the given context is defined by the microstock itself and is targeted for the customers, which is perfect for the research. This is a relatively small sample (full selection is measured in hundreds of millions images). However, it represents the larger selection really well, as you will be able to see below. For these images we collected their keywords, authors, categories and other relevant information available on the microstock.

![Most popular images](/images/posts/2022/keywording-analysis/popular-images-shutterstock.png "Most popular images on Shutterstock (today)")

One caveat is that these search results constantly change: new pictures become most popular, agency's search algorithm changes etc. However, as this is anyway a sample of the whole collection, it is good enough to conduct general research. Small changes in the search results will not affect data analysis at a whole.

### Interpreting the results and disclaimer

**Disclaimer:** This study attempts to reveal how keywording affects ranking in search results. It does not (and cannot) study how keywording affects direct sales since only microstock platforms have this data. Also there are other factors (as content quality and customer needs) that will affect sales.

Interpretation of the results below is certainly a personal opinion of the author. In the end, it's up to you what learnings you might want to take from it.

Each chart below will be commented and explained, but if you want to get maximum out of the presented information, you might want to understand what is a "box-and-whiskers" chart before reading. You can expand a short section below to read more.

### About the boxplots

<details>
  <summary>Explanation of the box-and-whiskers chart (click to expand)</summary>
  <p style="text-align: center;">
    <img src="/images/posts/2022/keywording-analysis/boxplot-quartiles.jpg" loading="lazy" alt="Box plot" />
    <span class="imagecaption"><i>A box-and-whiskers plot (or a boxplot in short)</i></span>
  </p>
  <p>
Box plots divide the data into sections that each contain approximately <code>25%</code> of the data in that set. Median value means that half of the values in the dataset are larger than it and half are smaller than it. <b>The box itself contains <code>50%</code> of the values in the dataset</b>. Whiskers add <code>50%</code> more. Also there might be <i>"outliers"</i> - values that still belong to the dataset, but do not fit into general picture.
</p>
<p>You can also learn more in <a href="https://en.wikipedia.org/wiki/Box_plot" target="_blanc">Wikipedia</a>.
</details>

### Data size

The dataset on hand consists of slightly more than `10,472` images that are split in `100` pages on the website. Images are created by `2,397` unique authors and contain `49,044` unique keywords.

## Analysis results

### How many keywords do the most popular images have

Even before we move to the "more interesting" topics, one question is obvious. And it's the amount of keywords people add to their images.

![Keywords counts](/images/posts/2022/keywording-analysis/keywords-counts.png "Assets count with a certain amount of keywords")

Majority, `47%` of the `10,000` assets, have full `50` keywords added. A close follower is the `49` keywords with `19%` of the assets and `48` keywords with `8%`. Overall while almost everybody try to fill from 40 to 50 keywords, there are notable exceptions: around `50` artworks with less than `10` keywords each and 2 artworks (e.g. [this](https://www.shutterstock.com/image-photo/voice-controlled-smart-speaker-little-kid-1959832546)) with `51` and `52` keywords respectively (which is interesting since Shutterstock imposes a 50-keyword limit).

Now, what can be interesting is to see what is the keyword variability per page of search results. Page in the give context is just an artificial measure of the image position in search. Each page has approximately 100 images. Here only first `30` pages (approx. `3000` images) are chosen in order to not to clutter the chart.

![Keywords counts per page](/images/posts/2022/keywording-analysis/keyword-count-per-page.png "Distribution of keyword counts per page")

> Boxplot explanation is in the [header]({{< relref "#about-the-boxplots" >}}). What you need to know now is that `50%` of the data is in the box itself.

Here the distribution of the keyword counts is represented by a boxplot. For example, for the page 1 it means that `50%` of the images have 30-50 keywords, for page 2 `50%` of the images have 40-50 keywords and so on. Now, you can clearly **see the trend**: the further into the pages, the less variability is in the keywords counts. Sure, all pages have _"outliers"_ (gray circles) with smaller amount of keywords, but the vast majority seems to fill 47-50 keywords all of the time (median is 49 keywords).

What this can teach you is that you do not *necessarily* need 50 keywords to rank among the top of most popular images. However, to rank consistently among the rest, you might want to fill from 47 to 50 keywords.

### Does the keyword order matter

#### Are the keywords sorted alphabetically

Short answer is "No". At least none of these `10,000` images had their keywords sorted alphabetically.

#### Is it beneficial to place the most "important" keywords first

There was no such evidence found. We analyzed the position of certain high-competition keywords inside the keywords of top-ranking images and there was no direct connection between the two. Of course, this is a subject to agency search algorithm changes, however, as of now this does not seem to matter.

### How many authors compete for the same keywords

A short answer is: "a lot". But even within these `10,000` images there are so many interesting patterns related to authors.

First of all, it's interesting to see how many authors are competing per page of search results in total.

![Authors per page](/images/posts/2022/keywording-analysis/authors-per-page.png "Unique authors per search page")

You can notice that first pages (the "hardest" to get in) actually are shared with the least amount of authors. Meaning that these "most competitive" authors rank couple of times on those pages. And this number is growing further into the search results, meaning it's easier to get in to "less popular" pages (obviously).

In general, if we try to group all keywords and authors that are competing for them, an interesting pattern emerges.

![Authors per keyword](/images/posts/2022/keywording-analysis/authors-per-keyword.png "Keywords with more than 350 authors competing for them")

Here on the chart you can see number of authors that are competing per single keyword. Keyword `"background"` is an obvious leader with more than `1200` authors (half from all!) competing for it. Other group is `"white"`, `"nature"` and `"beautiful"` with close to `800` authors competing for each of them.

### A note about keywords "competitiveness"

#### What is a keyword competitiveness

_"Competitiveness"_ is a measure of how easy or hard is it to rank for a given keyword, taking into account things like how other artworks and authors rank for that keyword, sales potential of the keyword and customer demand. This measure is used in the [Keyword Rating plugin]({{< relref "plugins/keyword-rating-plugin.md" >}}) for Xpiks. We will use this measurement to reveal other insights about the data.

This measure is expressed as a number and the higher the number, the harder it is to rank for the given keyword in search results.

#### What are some of the high- and low-competition keywords

Here are some of the **high-competition** keywords: `care, adult, beauty, healthy, isolated, portrait, health, blue, green, girl, home, modern, summer, technology, man, natural, lifestyle, design, person, happy, concept, female, nature, business, beautiful, young, people, white, women, background`.

To the contrary, here are some of the **low-competition** ones: `kids playground, swing sand, silk fabric, abaya fashion, playful park, persian gulf countries, youth cneter, house of culture, laptop leader, computer board, broadroom brainstorm, old help, sales presentation, african entrepreneurs`.

### How to rank for more than 50 keywords

> Note: this does **not** include the Description/Title words that are also indexed for search

It does not take to be a data scientist to notice an interesting pattern: low-competition keywords mostly have 2 words while high-competition keywords mostly have 1. It might be an interesting "hack": while they are easier to rank for, they might intersect with the high-competition one. For example, `"computer"` has relatively high competition, while `"computer board"` has a lower one. By targeting the lower one, you might also rank for the `"computer"` and `"board"` separately, although used in the same context. What this enables you to achieve is that most probably you will rank for way more than 50 allowed keywords. Of course, it is a subject to agency search algorithm changes, but the current evidence proves this "hack" to be working for the time being.

### What keywords the most popular authors rank for

Before answering this exact question, it might be helpful to explore how authors rank for keywords in general.

For that purpose we collected authors that rank in the first 5 pages of search results. Arguably, those are the most interesting pages, if you judge by any page-related chart earlier in this blogpost. 5 first pages have the least amount of authors ranking there and they have the largest variability in keywords count per image, in comparison with any other pages. For these authors we collected all of the images that rank in the `10,000` most popular images and put their keyword's competitiveness on a chart below.

![Authors keywords rating](/images/posts/2022/keywording-analysis/authors-keywords-rating.png "Distribution of all keywords each author ranks for, sorted by mean rating")

Now, there's a lot going on in this chart so we'll stop here for a bit. First of all, the `X` axis (horizontal one) of the chart is just a list of all authors that are ranking in the first 5 pages. Their names were removed from chart in order to reduce clutter. `Y` axis (vertical one) is the distribution of the [keyword competitiveness]({{< relref "#what-is-a-keyword-competitiveness" >}}) of each of the authors in the `X` axis. So for each author we collected all the keywords the author ranks for and showed their competitiveness (rating) in the [box chart]({{< relref "#about-the-boxplots" >}}). In order to see the general picture, each distribution was sorted from left to right by mean keyword competitiveness.

> To summarize: One vertical box on the chart represents competitiveness of majority of the keywords one author ranks for.

#### Low-competition authors

You can notice that there are authors on the left side of the chart that target _mostly_ low-competition keywords.

![Low competition authors](/images/posts/2022/keywording-analysis/low-competition-authors.png)

Here are, among others, these authors with links to portfolios: 

- {{< link "https://www.shutterstock.com/g/ComposedPix" "nofollow" "ComposedPix" >}}
- {{< link "https://www.shutterstock.com/g/Ground%20Picture" "nofollow" "Ground Picture" >}}
- {{< link "https://www.shutterstock.com/g/fizkes" "nofollow" "fizkes" >}}
- {{< link "https://www.shutterstock.com/g/Inside%20Creative%20House" "nofollow" "Inside Creative House" >}}
- {{< link "https://www.shutterstock.com/g/Yanosh%20Nemesh" "nofollow" "Yanosh Nemesh" >}}
- {{< link "https://www.shutterstock.com/g/Seneline" "nofollow" "Seneline" >}}

If you're to explore some of the mentioned portfolio, you can find they are highly specialized in a certain topic, like 2 accounts targeting Russian invasion to Ukraine. Targeting a single niche allowed these accounts to rank high in the first 5 pages.

Some of the keywords these authors rank for, are: `smart technology, project report, job leaders, skyscraper commercial, workteam 35s, make menopause, age gray, facial treatment, insurance afro, girl count, online transfer, older caucasian, workshop training, office benefit, african domestic, enjoy vat, businesswoman profit`.

#### High-competition authors

Similarly, let's investigate the higher side of the spectrum: authors targeting _mostly_ the hardest to rank for keywords.

![High competition authors](/images/posts/2022/keywording-analysis/high-competition-authors.png)

Here are some of their portfolios:

- {{< link "https://www.shutterstock.com/g/Zolotarevs" "nofollow" "Zolotarevs" >}}
- {{< link "https://www.shutterstock.com/g/Mix%20and%20Match%20Studio" "nofollow" "Mix and Match Studio" >}}
- {{< link "https://www.shutterstock.com/g/Ivan%20Zelenin" "nofollow" "Ivan Zelenin" >}}

These authors mostly also target a single niche. However, those are niches that always existed with high competition (and demand): business, flowers, estate etc.

Some of the keywords these authors rank for, are: `background, people, baby, isolated, fashion, room, sofa, living, green, beautiful, 3d, decor, luxury, flora, chamomile, bloom, natural`.

#### Presence in the search results

If we check how authors that target low- and high-competition keywords are present in the search output, this is what we'll find:

![Low vs high authors](/images/posts/2022/keywording-analysis/low-vs-high-authors.png "High- vs low-competition authors per search results page")

Now this is where it gets interesting. You can see from the chart that authors targeting high-competition keywords outrank those who target low-competition ones in the first and partially second pages. However, judging by the sheer volume, the low-competition authors rank on average **7 times per page** for the rest 100 pages. On the other hand, authors, that target only high-competition topics, mostly do not exist outside of the first few pages.

This reveals an interesting heuristic: in order to be _consistently_ present among all levels of "popularity", you should **prioritize medium and low-competition keywords**.

## How to estimate keyword competitiveness for your keywords

It is clear that keyword competitiveness has direct effect into where you will rank. Although it does not guarantee sales, it does get you eyeballs from the customers. Therefore you might want to target keywords based on their competitiveness. If you're using Xpiks, you can get the data using a [Keyword Rating plugin]({{< relref "/plugins/keyword-rating-plugin.md" >}}).

[![Keyword rating plugin](/images/plugins/keyword-rating/keyword-rating.jpg "Keyword competitiveness data from keyword rating plugin")]({{< relref "/plugins/keyword-rating-plugin.md" >}})

The plugin draws harder to rank keywords in red and easier to rank keywords in green, showing you a distribution of the keywords that you are targeting as well.

One interesting use might be to see keywords of your images that do not have many sales to see if you only targeted "red" keywords and readjust them if that's the case.

## Conclusion

Although this is an information rich study, it feels like this is only the beginning so it was tempting to even add _"part 1"_ to the blogpost title. [Keywording]({{< relref "/blog/2023/keywording-files-for-microstock.md" >}}) was and will remain one of the very important aspects affecting your sales on the microstocks (up until the microstocks will fully replace it with image recognition AI).

It is crucial to selectively target special keywords which you want to rank for, rather than "eloquently describing what is on your picture" with _"who, what, where, when, why"_ etc. If you select too many highest-competition keywords, even with the best intentions, you will only target the _"cream of the crops"_, where competition is tough.

It is possible to compete in microstock business, but you need to play smart to have an edge.