---
title: "How I earned 6,314 USD from a single photo on Shutterstock"
date: 2020-07-29T10:13:24+03:00
image: "/images/posts/2020/earn-6314-usd-shutterstock/hero.jpg"
author: Taras Kushnir
keywords:
  - shutterstock
  - earnings
  - analysis
  - statistics
  - analytics
  - income
categories:
  - earnings
---

Do you want to upload your photo to microstock once and earn royalties forever? Don't rush until you read this.

It was October 2013 and it was almost a year since I registered on Shutterstock. Sad thing is that I haven't earned a cent during that year although I passed the exam with 9 photos out of 10 (you needed 7 to pass back then). I was disappointed, but I decided to not give up and I continued to upload photos that have never been sold. And then, one day, I uploaded it: my new photo that turned to be my best-seller.

Here's this photo:

![Mountaineers](/images/posts/2020/earn-6314-usd-shutterstock/photo-sell.jpeg "Climbers on their way to the summit")

I shoot it during one climb with a team when we just started moving after a break. Group of people tied together and arranged in a perfect perspective. Untouched snow and a sharp summit ahead of us in a crystal clear mountain air. While I saw many climbing photos, this one is telling a story in it's own unique way.

It started to sell from day 1 after I uploaded it and accordingly to my study that I'm going to outline below it will sell till 2024 - for a little bit over 10 years. Technically it was not a top-notch work: a square picture (not typical to microstocks or photography in general) shot on my old Panasonic with a tiny sensor. Back then I didn't shoot RAW and my "post-processing" skills were much worse than now. Also back then even Xpiks did not yet exist so I had to [keyword]({{< relref "/tutorials/keywords-overview" >}}) and [upload]({{< relref "/tutorials/intro-uploading" >}}) it using the website.

Nevertheless during the last couple of years there were many buyers who contacted me directly asking where I shot it and for the history behind the photo. They used the picture in all sorts of businesses: from climbing-related ones to banking and finance. It's hard to know for sure why it was so successful. Maybe it was a good visualisation for a concept "success" or "achievement". Or maybe it was used to show the teamwork. Or maybe it was just hard to steal (Shutterstock is full of similar content). In the end - you never know.

## Earnings patterns

![Total earnings](/images/posts/2020/earn-6314-usd-shutterstock/photo-earnings.jpeg "Total earnings showing $6314 in Shutterstock Contributor Portal")

This photo was sold almost every day. I had all sorts of photo sales: from subscriptions and On-Demands to the most expensive [Enhanced downloads](https://www.shutterstock.com/pricing). In fact, if we put those earnings on a chart, we will see that on a single day I earned from it everything ranging from cents to more than a hundred of dollars.

![Daily earnings](/images/posts/2020/earn-6314-usd-shutterstock/earnings.jpeg "Chart with daily earnings from this photo - after it was uploaded in October 2013")

It would be cool to analyse this data to see any trends or interesting data patterns, but for that we need to transform that chart. The best way to do it is to use a moving average that is popular to analyze financial data. To get that, every point on a chart is averaged with it's neighbours where number of neighbours is chosen based on the data and aim.

![Moving average](/images/posts/2020/earn-6314-usd-shutterstock/moving-average.jpeg "Moving average with 30-day buckets")

This chart is already much better, but the patterns might not be absolutely obvious. To make the patterns more vivid, we need to approximate all those points with a continuous line. Here I'm approximating the earnings data with a high-degree polynomial:

![Moving average peaks](/images/posts/2020/earn-6314-usd-shutterstock/moving-average-peaks.jpeg "Earnings peaks (in red) lying on the approximation line")

This is already much more interesting. You can immediately see that not only **earnings are not constant, but they are fluctuating in a repetitive pattern**. They are having peaks every year around winter: in my case in January, February and March. It must be related to the nature of my photo: probably winter months are more popular for mountaineering blogposts or news for some reason. Or it's just the fact that typically summers are boring in the microstock business and buying activity decreases.

## Half-life period

But just by looking onto this chart you can notice one thing: while fluctuating and being repetitive, the approximation goes down. In fact, if we try to approximate it using a line, not a polynomial, we will get a trend:

![Trend](/images/posts/2020/earn-6314-usd-shutterstock/moving-average-forecast.jpeg "Global trend of earnings on Shutterstock")

Trend is steadily decreasing. This is not good, but it's expected. Popularity of your photo on microstock is going down pretty much every day. It is being replaced by newer or better photos or it is simply buried under the avalanche of low-quality content so buyers don't even know it exists.

Microstock jargon calls it a **_"half-life"_: a time needed for your photo to sell twice less than it was being sold before**. Having this line it's easy to calculate it for my photo. Every year I'm getting `10.3%` less earnings for it than a year before. Hence the estimate: having `100%` value in the beginning, it will take around 5 years to half that and 10 years to get to `0`. And you can see it if you extrapolate the chart.

![Forecast zero](/images/posts/2020/earn-6314-usd-shutterstock/forecast-zero.jpeg "Earnings are expected to reach zero in 2024")

As you can see, if this trend will continue with the same pace as the last 7 years, I will reach zero earnings from this photo in 2024. 10 years worth of earnings from a single photo is not that bad, but you have to have many of those to earn your living from microstock.

This aligns in general with other bloggers and microstock contributors. For example, Steven Heap from BackyardSilver reviews his [quarterly earnings](https://backyardsilver.com/quarterly-review-of-stock-photo-earnings/) and concludes that earnings per single file have fallen from `$0.6` in 2014 to almost `$0.2` in 2020. Anonymous contributor interviewed by [Alex from Brutally Honest blog](https://brutallyhonestmicrostock.com/2019/09/03/declining-earnings-in-microstock-veterans-pov/) publishes data that concludes his earnings halved from 2016 to 2019 which is only 3 years.

## What can you learn from it

The biggest factor that can ruin the pattern is the pandemic and recent [earnings restructuring]({{< relref "/blog/2020/new-shutterstock-earnings-breakdown" >}}) from Shutterstock. This is related both to buying power decrease and to royalties cut. Most probably this pattern will not hold exactly like before, but it will not fade immediately too.

Having analyzed this data, we can have some **important conclusions**:

-   Having just one photo in your portfolio is not enough because of the "half-life" period. Eventually all profits will fade away.
-   Earnings will never be constant: they will rise and fall even during the same trend. This is important to understand for financial planning.
-   Earnings trend can be impacted by the outer world that can affect both buying power and your earning percentage.
-   Your best-seller will not necessarily be the one is hardest to produce.

Calculations for charts used in this post can be found [here](https://gist.github.com/ribtoks/a3aca6a6fdfa17ccc899fc1a4be9ef6e). Header image {{< link "https://www.freepik.com/vectors/finance" "nofollow" "here">}}.
