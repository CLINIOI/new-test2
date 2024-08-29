---
title: "Analysis of Adobe Stock portfolios from top-500 customer queries"
date: 2022-01-25T10:41:07+02:00
author: Taras Kushnir
image: '/images/posts/2022/adobe-top-500/header.png'
emailbest: true
keywords:
  - shutterstock
  - adobe
  - microstock
  - customer
  - query
  - analysis
  - comparison
categories:
  - analysis
---

Some time ago we analyzed [top portfolios on Shutterstock](https://petapixel.com/2021/07/23/how-to-rank-on-the-first-page-of-top-queries-on-stock-photo-sites/) and found interesting insights of how different portfolios rank in top customer queries. Since then many users asked to do the same analysis for Adobe Stock. So here we are: crunching data on over `11,316` portfolios who's `41,059` artworks rank in the first page of results of top-500 customer search queries.

Additionally we will compare all the results with the Shutterstock analysis that was done before.

{{< table-of-contents >}}

## Method of research

We selected top-500 queries (similar to these [top-100 queries]({{< relref "/blog/2021/top-100-queries-shutterstock.md" >}})) that have the largest monthly traffic on Adobe Stock and from these queries we gathered first page of search results. 

We only analyzed first page of results because as the joke goes, _"the best way to hide something is on the second page of Google results"_ (in our case - on Adobe Stock search results). Of course, this approach does not guarantee that customer actually purchased anything from the first page, but at scale it is a good approximation of it.

## Adobe Stock portfolios analyzed

As of the time of this research (data collected in July 2021), there were `11,316` unique portfolios whose artworks rank in top-500 customer queries (by search traffic). Out of these portfolios `46%` have less than `2,000` artworks and `9%` have less than `100`. This should give you a clue that **it is possible to rank high even with relatively small portfolios**: you don't need to be a studio with few people to do well.

### Studios vs Individual contributors

Speaking about studios, we found that there were approximately `5%` of studios vs `95%` of individual contributors. These numbers align well with Shutterstock research (`4%` studios), meaning that in total ratio is consistent across industry. Although studios might have an edge over the individuals (simply by producing more content), it seems that they do not consistently overrank individuals.

### Portfolio size differences

Here are the 9 largest portfolios on [Adobe Stock]({{< relref "/blog/2020/adobe-stock-contributor-review.md" >}}) from those, who rank high in customer queries:

{{< data-table >}}
| \# | Portfolio | Size |
| --- | --- | --- |
| 1 | Africa Studio | 1,337,294 |
| 2 | Krakenimages.com | 1,241,817 |
| 3 | Gstudio | 1,224,419 |
| 4 | antishock | 997,546 |
| 5 | Wirestock | 931,683 |
| 6 | LIGHTFIELD STUDIOS | 858,455 |
| 7 | Elnur | 846,783 |
| 8 | Pixel-Shot | 831,054 |
| 9 | New Africa | 808,839 |
{{< /data-table >}}

Comparing with Shutterstock, we might notice few small discrepancies, but the difference is small:

{{< data-table >}}
| \# | Portfolio | Size |
| --- | --- | --- |
| 1 | s_maria | 1,354,079 |
| 2 | Krakenimages.com | 1,316,079 |
| 3 | lineartestpilot | 1,166,764 |
| 4 | Rawpixel.com | 1,104,417 |
| 5 | best_vector | 1,065,918 |
| 6 | Aha-Soft | 843,105 |
| 7 | antishock | 787,411 |
| 8 | Art Furnace | 745,728 |
| 9 | Rvector | 737,786 |
| 10 | New Africa | 713,237 |
{{< /data-table >}}

Although these portfolios are crazy large (*close or over a million images!*) and mostly belong to studios, they are the very minority and the portfolio size distribution looks like this:

![Portfolio size in Adobe Stock](/images/posts/2022/adobe-top-500/portfolio-size.png "Adobe Stock total portfolio size distribution")

Out of these Adobe Stock portfolios, `31%` have less than `1,000` artworks (`30%` for Shutterstock). Compare it with Shutterstock (note that this is only photos portfolio distribution vs total for Adobe Stock):

![Portfolio size in Shutterstock](/images/posts/2022/adobe-top-500/ss-portfolio-size.png "Shutterstock Image portfolio size distribution")

While varying in details, the pattern is by-and-large the same: the majority of portfolios that rank high don't have enormous size. Almost half (`46%`) of portfolios are less than `2,000` items big.

## Search results monopoly: which portfolios dominate

You might have noticed that although `41,059` unique images are available in search results, only `11,316` portfolios own them. It means that **many portfolios rank several times in the search results**. It is tempting to assume, that because of studio have so "unfairly" large portfolios, they simply overrank individuals. However, if we slice the results by how many times each particular account appears in the results, we see that this is not the case.

![Adobe Stock Authors times in search](/images/posts/2022/adobe-top-500/authors-rankings.png "How many times each portfolio ranks in Adobe Stock top-500 search queries")

Notice that studios are mostly equally split by individuals here. There are 11 accounts that rank over 100 times over 500 customer queries which is quite impressive. Here are they:

{{< data-table >}}
| \# | Account | Rank times |
| --- | --- | --- |
| 1 | New Africa | 191 |
| 2 | deagreez | 185 |
| 3 | Pixel-Shot | 160 |
| 4 | LIGHTFIELD STUDIOS | 143 |
| 5 | Rawpixel.com | 140 |
| 6 | Krakenimages.com | 116 |
| 7 | Prostock-studio | 113 |
| 8 | RocknRoller Studios | 109 |
| 9 | Victor | 108 |
| 10 | twindesigner | 107 |
| 11 | iDESIGN_4U | 103 |
{{< /data-table >}}

It is interesting to compare such results with Shutterstock, since the picture is a bit different. **Shutterstock search results are more dominated with individual accounts (vs studios) than Adobe Stock**, but there was no anomaly with potential keywords spam (user _fizkes_).

![Shutterstock Authors times in search](/images/posts/2022/adobe-top-500/ss-authors-rankings.png "How many times each portfolio ranks in Shutterstock top-500 search queries")

As for the comparison, you can also note that for Shutterstock there were `14,046` unique portfolios ranking in search vs `11,316` in Adobe Stock. This makes Adobe Stock search results less diversified across portfolios than Shutterstock ones.

## Traffic monopoly: which portfolios get more views

Similarly to Shutterstock, there are few accounts that get a significant Google search traffic to their portfolios. This traffic is estimated search volume of "Search phrase" multiplied by click-though rate (CTR) of the URL/website with search results.

{{< data-table >}}
| \# | Account | Traffic | Portfolio size |
| --- | --- | --- | --- |
| 1 | Login | 7,096 | 36,233 |
| 2 | ipopba | 139 | 3820 |
| 3 | Stocksy | 88 | - |
| 4 | Rawpixel.com | 75 | 323,183 |
| 5 | Subbotina Anna | 41 | 12,710 |
| 6 | .shock | 35 | 163,720 |
| 7 | EyeEm | 32 | 5,427,649 |
| 8 | ifoto | 32 | 992 |
| 9 | JackF | 30 | 547,277 |
| 10 | Photobank | 29 | 8745 |
{{< /data-table >}}

First place of course goes to the "SEO-hacker" with the username "Login" who is first in the Google search results ["Adobe Stock Login"](https://www.google.com/search?q=adobe+stock+login). 

![Google login portfolio](/images/posts/2022/adobe-top-500/google-results-login.png "Creative way to get some traffic to it's page")

However, such SEO-trick arguably does not provide any help with sales as the [search intent](https://yoast.com/search-intent/) behind the query is not a customer looking for assets.

It is entertaining to see that large collections like EyeEm/Stocksy/Pond5 that are present on Adobe Stock as partners do not consistently steal traffic from individual contributors and there are users with as little as `1,000` pictures in the portfolio that receives as much traffic as users with `500,000`.

Some users get consistent search traffic across agencies, namely "Subbotina Anna" whose portfolio gets good traffic on Shutterstock as well.

## Links monopoly: portfolios with more external links

Arguably backlinks are one of the most important factors in Google ratings so it's interesting to evaluate portfolios by the number of websites that are linking to them. Interestingly enough, while some portfolios have as much as `900` domains linking to their Shutterstock portfolio, the largest number of domains linking to Adobe Stock portfolio was only `90` which is **10 times smaller**.

{{< data-table >}}
| \# | Account | Linking domains |
| --- | --- | --- |
| 1 | EyeEm | 90 |
| 2 | Login | 72 |
| 3 | grandfailure | 39 |
| 4 | Rawpixel.com | 35 |
| 5 | WavebreakMediaMicro | 27 |
| 6 | Andrey Popov | 23 |
| 7 | Africa Studio | 21 |
| 8 | Monkey Business | 21 |
| 9 | Jacob Lund | 20 |
| 10 | Wirestock | 20 |
{{< /data-table >}}

While not so exciting as on Shutterstock (editorial links from newspapers), the nature of the backlinks to Adobe Stock seems to be only random mentions from the blogs that used the image.

![Backlinks to Adobe Stock portfolio](/images/posts/2022/adobe-top-500/backlinks.png "Few blogposts cared enough to link to where they got the image")

All in all that means that **backlinks currently have way less power on Adobe Stock and therefore it is a possible vector of growth** for portfolios.

## Conclusion

Although many people sell their artworks on both platforms, we found some differences in the results:

- more search results on [Adobe Stock](https://stock.adobe.com/) come from fewer portfolios than on Shutterstock (11 thousands vs 14)
- ratio of studio to individuals in search results is higher on Adobe Stock than on Shutterstock
- certain partner collections that are available on Adobe Stock, but not on Shutterstock, like EyeEm
- portfolios on Adobe Stock get 10 times less linking domains than on Shutterstock

_Note:_ a [link](https://petapixel.com/2021/07/23/how-to-rank-on-the-first-page-of-top-queries-on-stock-photo-sites/) to the original research about Shutterstock.