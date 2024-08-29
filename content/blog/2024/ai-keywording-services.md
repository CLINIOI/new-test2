---
title: "An unscientific test of AI keywording services for microstock contributors"
date: 2024-07-28T12:51:23+03:00
image: "/images/posts/2024/ai-keywording/header.jpg"
author: Taras Kushnir
keywords:
  - ai
  - microstock
  - keywording
  - metadata
  - keywords
  - generative
  - guide
categories:
  - guide
---

The largest complaint of microstock contributors, after falling earnings, is the tediousness of filling in the metadata: Title, Description, and Keywords. Everybody wants to do only the fun part - the shooting, but everything else - editing, keywording, and uploading - should happen somehow. In this spirit, the new savior, "The AI keywording", is finally going to put an end to the boredom of writing words manually.

After OpenAI, Claude, and now even ~~Facebook~~ Meta released _very_ capable models, new "AI keywording" solutions seem to appear on the market like mushrooms after the rain. So I decided to finally check them out and see what they offer (~~read: what UI they offer over calling ChatGPT underneath~~).

I will review the user experience, technical details and pricing of each service I can find.

{{< table-of-contents >}}

## About this review

First and foremost, this is **not** an _"objective comparison"_. I decided to upload my [best-seller image]({{< relref "/blog/2020/earn-6314-usd-single-photo-shutterstock.md" >}}) to different "AI keywording" services and see how they work. So yes, a sample size of this "study" is literally `1`. Nevertheless, it has shown _a lot_ of interesting things about all these services so I hope you'll enjoy me walking you through them.

> Note: my original plan was to showcase also a vector file and a video, but this blog post became so long already, that I reconsidered

![Mountaineers](/images/posts/2020/earn-6314-usd-shutterstock/photo-sell.jpeg "Image that was used for tests")

The reason I picked this photo is because I have a hindsight knowledge about which keywords were better than others in terms of earnings and I will be able to compare them with the generated ones. This knowledge is based on sales data and percentage split per keyword that I was tracking. In this blog post, I call them _"money keywords"_ and there are 5 of them: _"mountain, climb, team, climber, sport"_ (more than 76% of earnings).

Back in the day I wrote the Description manually and copied it to the Title (so they are literally the same - what a waste of space!). As for keywords, I used [keywords suggestion]({{< relref "/tutorials/suggestion-overview.md" >}}) in Xpiks version 1.0 (!), picked a few similar images, checked the keywords manually and was done with it. So it's interesting to see "what could have been", had I access to the "AI" technologies.

## The discontent

<details>
  <summary>My take on AI keywording, in case you don't know it.</summary>

I hope frequent readers know my take on "AI keywording". It's that it's a starting point. You can never replace human keywording with just running your files through "ChatGPT" and hoping for the best. That is, if you care about sales. Visual image recognition models in a way are "blind". They do not _understand_ what is on the picture and they especially cannot read "between the lines".

You will see that all services mentioned here make some form of blunder: they add "spammy" keywords or produce factually correct, but useless information. But it's still a great tool when used mindfully.
</details>

<details>
  <summary>My take on CSV files.</summary>

The majority of "cloud" services showcased here (except Xpiks and ImStocker) will _only_ produce a CSV file with metadata (this is kind of what you get for the money). Now, I'm not a fan of this because:
- if you want to review the results before uploading (which you hopefully do!), there's no thumbnail next to it on your computer (e.g. in Excel)
- you need _many_ CSV files (one per each agency you upload to) versus having metadata written to your actual files only _once_
- if you want to import metadata from CSV back to each file (to ease upload), you again need software that can do it, like Xpiks
- now you also need to manage CSV files (e.g. if you make changes to one file, you need to make changes in each CSV file - per agency)
</details>

## The TL;DR; version

Elaboration and in-depth review of tables below pretty much constitutes the rest of this blog post. But if you're here just to see the conclusions, then check out these short versions.

### Factual data

> Note: "Slow for Video" means that to get video keywords, you need to upload your **whole** video to their server, which I do not think is reasonable

{{< data-table >}}
Service | Price per file | Result | Photo Speed | Vector Speed | Video Speed
--- | --- | --- | --- | --- | --- | --- | --- | ---
[ImStocker]({{< relref "/blog/2024/ai-keywording-services.md#imstocker-vision" >}}) | `0.2¢`/`2¢` + VAT | +Writes to files*+ | -Slow- | -Slow- | Not tested
[PhotoTag]({{< relref "/blog/2024/ai-keywording-services.md#phototagai" >}}) | `4¢` - `2¢` | CSV* | +Fast+ | Not supported | -Slow-
[VisualMind]({{< relref "/blog/2024/ai-keywording-services.md#visualmindai-aka-udreamai" >}}) | `2¢` + VAT | CSV | +Fast+ | Not supported | -Slow-
[Pixify Studio]({{< relref "/blog/2024/ai-keywording-services.md#pixify-studio" >}}) | `9¢` - `3¢` | CSV  | +Fast+ | Not supported | -Slow-
[Xpiks]({{< relref "/blog/2024/ai-keywording-services.md#auto-keywording-plugin-for-xpiks" >}}) | `1.5¢` | +Writes to files+ | +Fast+ | +Fast+ | +Fast+
{{</ data-table >}}

> \* ImStocker writes to files, only if you accompany Vision with their other app, ImStocker Studio

> \* PhotoTag now allows downloading some files back with EXIF metadata written to them (only jpeg images supported, no IPTC or XMP metadata supported)

> \* Price ranges are **inverted** because reasonable-sized credit packs have higher price per single file (to get lower price per file, you have to pay a lot upfront)

### Subjective opinions

Here are only my _subjective, personal, biased opinions_ based on my recent experience with the services.

> Note 1: "Basic" features means "Upload files - download CSV"
> Note 2: "Description" evaluation in this table also goes for "Title"

{{< data-table >}}
Service | Description Quality | Keywords Quality | Features | Design
--- | --- | --- | --- | --- | --- | ---
[ImStocker]({{< relref "/blog/2024/ai-keywording-services.md#imstocker-vision" >}}) | OK | OK | +Many*+ | -Somewhat outdated-
[PhotoTag]({{< relref "/blog/2024/ai-keywording-services.md#phototagai" >}}) | OK* | OK | -Basic- | Kitsch SaaS
[VisualMind]({{< relref "/blog/2024/ai-keywording-services.md#visualmindai-aka-udreamai" >}}) | OK | Better* | -Basic- | Minimalistic
[Pixify Studio]({{< relref "/blog/2024/ai-keywording-services.md#pixify-studio" >}}) | Better* | OK | FTP upload*, file organization | +Beautiful!+
[Xpiks]({{< relref "/blog/2024/ai-keywording-services.md#auto-keywording-plugin-for-xpiks" >}}) | Better* | Better* | +Many!+ | +Good+
{{</ data-table >}}

> \* ImStocker _Features_ - not in Vision, only if you use ImStocker Studio

> \* PhotoTag _Description_ - semantically OK, but did not fit into microstock agency requirements

> \* Pixify FTP upload - this is **not** to the agencies, it's just for uploading your files to them

> \* **Better\*** metadata - while it was "Better" than "OK", I still would edit it before using in my files, if I cared about sales

## ImStocker Vision

{{< link "https://vision.imstocker.com/" "nofollow" "ImStocker Vision" >}} is a service developed in Russia by the team behind ImStocker app. It is the only one, except Xpiks, that does not actually have the "AI" somewhere in its title, to ride the hype. Despite this, it turned out the slowest and also average in terms of quality. First of all, it took no less than 3 attempts to just log in, being constantly redirected to the web server blank page "Bad Gateway".

![ImStocker Vision login](/images/posts/2024/ai-keywording/imstocker-error.png "Reliability isn't great here")

Eventually, my persistence paid off and I was able to not only log in, but also upload a picture and click the button to generate metadata. I had to wait about 10 seconds when I was uploading the picture (637KB) for it to be "recognized" and then again about the same time when I clicked 'Generate description'. Here's the screenshot of what I got:

![ImStocker Vision metadata](/images/posts/2024/ai-keywording/ims-vision2.jpg "Metadata generated by ImStocker after clicking 'Generate description'")

{{< data-table >}}
Field | ImStocker Vision | The Original
--- | --- | ---
Title | A group of people are climbing a mountain | Tied climbers climbing mountain with snow field tied with a rope with ice axes and helmets
Description | A group of people are climbing a mountain, with one of them wearing a yellow jacket. The mountain is covered in snow and the sky is clear. | Tied climbers climbing mountain with snow field tied with a rope with ice axes and helmets.
{{< /data-table >}}

My comment (as original picture author and keyworder) would be that their Title is okay, but the Description is this kind of level of correct uselessness that ML models are sometimes producing. To be more specific, there's no interest to the potential buyer that one of the people is in a yellow jacket, although it is correct factually.

### Keywords

Now, if ImStocker has been "famous" for something it's for the free keyworder they were offering. They definitely make use of their data in the Vision product too, enriching the list of keywords with competitiveness data, so it's actually interesting to compare.

<details>
  <summary>Detailed keywords comparison for ImStocker (click to open)</summary>

> NOTE that **common keywords have been removed**. Here they are: `sky`, `ice`, `peak`, `hiking`, `summit`, `travel`, `adventure`, `landscape`, `white`, `sport`, `cold`, `group`, `rope`, `extreme`, `teamwork`, `snow`, `climb`, `altitude`, `climber`, `mountaineer`, `caucasus` - 21 in total

Below I'm showing only the differences in keywords.

{{< data-table >}}
Only in ImStocker | Only in Original
--- | ---
29 | 11
`chamonix`, `glacier`, `winter`, `alpine`, `alps`, `france`, `nature`, `people`, `high`, `ridge`, `rock`, `mont blanc`, `outdoors`, `active`, `europe`, `steep`, `blue`, `risk`, `recreation`, `exposed`, `danger`, `trekking`, `snowy`, `view`, `man`, `alpinist`, `expedition`, `horizontal`, `blanc` | `courage`, `climbing`, `mountain`, `outdoor`, `top`, `team`, `weather`, `scenery`, `mountaineering`, `alpinists`, `bezengi`
{{< /data-table >}}

</details>

Judging by sales data from Shutterstock (again, best-selling keywords were _"mountain, climb, team, climber, sport"_), I can see that `mountain` and `team` are not offered by ImStocker, while the other 3 are present. Except for the most important keywords, ImStocker actually has the largest intersection with the originals, so it's good!

As a drawback, ImStocker is trying to fill up keywords to 50 limit and some of them are actually useful, like `risk`, `danger`, `trekking`, `expedition`. Others, on the other hand, are random pics, like `france`, `mont blanc` (it's not on the picture), `horizontal` (who really needs this information), `winter` (it's not, but OK, can be somewhat relevant to `snow`).

### Usability

I guess I mentioned reliability issues already so beyond that, you can download your metadata in CSV files, which, as discussed all around, is not that great. However, if you use ImStocker desktop app in addition to Vision, you can write metadata to files, which makes it much more convenient.

I did not get to test batches of files so it's hard to speak to the speed/reliability of that. But if you're processing many files at once, managing CSV files will become a hassle.

### Supported files

ImStocker Vision claims to work with photos, vectors, and videos and this can be justified if used from their desktop app (ImStocker Studio). Their web uploader form actually does not allow videos to be uploaded and I completely agree with that.

### Price

> First time I uploaded the file, ImStocker charged the credits price, but just shown me the EXIF metadata already in the file + their keywords. If you click "Generate description", it charges again.

Generating description {{< link "https://vision.imstocker.com/en/prices" "nofollow" "costs" >}} additional credits (2 additional credits) at the moment and all the prices do **not** include VAT tax (which can make it `20-30%` more expensive in EU, or about `10%` in US). Still, despite that, the price they show is around `0.2¢` per image (with daily limits) which is the cheapest in this review. However, it also reflects the service quality at this time. 

> Note that this is the price only if you buy a **bulk** subscription, one-time purchases cost approximately `2¢` per file, which is similar to others

They offer free metadata generation for 20 files so you can try it before you decide.

## PhotoTag.ai

{{< link "https://www.phototag.ai/" "nofollow" "PhotoTag" >}} is "AI-keywording only" service from US that was allegedly made by a single person, so it's great! On the other hand, it's a service with the most aggressive marketing out there, even made Alex from Brutally Honest blog to ~~promote~~ {{< link "https://brutallyhonestmicrostock.com/2023/11/07/review-of-phototag-ai-keywording-your-images-automatically-using-ai/" "nofollow" "write about them" >}}. They sent me a "welcome" email saying they became _"the best tool on the market"_. Oh boy... The good news is, their service does work smoothly, in comparison to ImStocker Vision, and here is the proof of that:

![PhotoTag](/images/posts/2024/ai-keywording/phototag.jpg "Metadata generated by PhotoTag.ai")

Now, let's inspect that more closely.

{{< data-table >}}
Field | PhotoTag | The Original
--- | --- | ---
Title | Climbers Ascend Snow-Covered Mountain Peak Under Clear Blue Sky During Daylight Hours | Tied climbers climbing mountain with snow field tied with a rope with ice axes and helmets
Description | A group of climbers navigates a narrow, snow-covered ridge on a mountain. The sun shines brightly, illuminating the icy landscape. Each climber is equipped with safety gear, making their way toward the summit with determination. The backdrop features rocky terrain and distant peaks, creating a breathtaking atmosphere for this challenging ascent. | Tied climbers climbing mountain with snow field tied with a rope with ice axes and helmets
{{< /data-table >}}

The Title is generally OK (we'll not notice again how Capitalized Every Word Is By ChatGPT) and, even the Description is also _kind of_ OK, but its length is `347` characters, which is way beyond the `200` characters usual Description length limit. Minor, but unpleasant details that will make you rework it as agencies will cull your upload.

### Keywords

Keywords are special so we always review them separately.

<details>
  <summary>Detailed keywords comparison for PhotoTag.ai (click to open)</summary>

> Just like with ImStocker, **common keywords were removed** (here they are: `ice`, `peak`, `hiking`, `summit`, `adventure`, `landscape`, `mountain`, `outdoor`, `cold`, `teamwork`, `snow`, `scenery`, `altitude` - 13 in total)

Here are the differences in keywords between PhotoTag and the Original.

{{< data-table >}}
Only in PhotoTag | Only in Original
--- | ---
27 | 19
`climbers`, `ridge`, `ascent`, `winter`, `expedition`, `blue sky`, `nature`, `risk`, `trek`, `equipment`, `safety gear`, `exploration`, `challenge`, `fitness`, `trekking poles`, `breathtaking`, `summit attempt`, `journey`, `national park`, `sports`, `adrenaline`, `climbing technique`, `snow-covered`, `rugged`, `wilderness`, `beliefs`, `heights` | `sky`, `travel`, `courage`, `climbing`, `white`, `sport`, `top`, `group`, `rope`, `extreme`, `team`, `weather`, `climb`, `climber`, `mountaineer`, `mountaineering`, `caucasus`, `alpinists`, `bezengi`
{{< /data-table >}}

</details>

Okay, this time there were fewer common keywords, which is interesting. First and foremost, judging from "money keywords" (_"mountain, climb, team, climber, sport"_), `climb`, `team`, `climber` and `sport`, **4 out of 5 were missed** by PhotoTag, which leaves only a single "money" keyword that was used: the `mountain`. This is definitely not great.

There are, however, a few interesting keywords that they suggest: `ascent`, `safety gear`, `summit attempt`, `adrenaline`, but there are also a couple of "useless" ones like `trekking poles`, `beliefs`, `heights`. Again, I don't actually have any data to judge the "usefulness" of a keyword that is _not_ in my photo, it's just a personal opinion based on general experience.

### Usability

While I'm not a fan of their design, I found the website simple enough to use and it was functional (which is important, after reviewing other solutions here).

The result you get for your money is CSV files so if you want to keep metadata in your files, you need again software (like exiftool or even Xpiks) to write this metadata to the files. Of course, alternatively, you can upload CSV straight to the agencies and not keep metadata in files. PhotoTag does not offer any solution to this.

_Update from 14.08.2024_: PhotoTag now allows you to download some of your files back with metadata written. Currently only JPEG images are allowed and only EXIF metadata is written (no IPTC or XMP metadata supported).

### Supported files

PhotoTag claims they support photos and videos (no vectors). But given they are a cloud service only, good luck uploading your videos first to them, in order to get keywords, and then again to microstocks.

### Price

There're {{< link "https://www.phototag.ai/#pricing" "nofollow" "many prices" >}} options and they split upload and metadata credits separately, but if we're talking about one-time prices, they are from `4¢` to `2¢` per file (for larger packs worth `$149`). Note that they run a lot of discount campaigns (e.g. when I'm writing this review, they offer a "limited time only" `50%` discount) so the actual price might get a bit lower.

PhotoTag offers 10 files try-before-you-buy for new accounts, so you can try for yourself before deciding.

## VisualMind.ai (aka udream.ai)

{{< link "https://www.visualmind.ai/" "nofollow" "VisualMind" >}} (known previously as UDream.AI) is another "AI-keywords" service, this time from Lithuania, also made by a small team. It does seem more bare-bones in comparison to PhotoTag, but personally, I do like the design more, it does not "jump into your face" as the PhotoTag. Registration went smoothly and quite soon I was able to process my first image.

![VisualMind](/images/posts/2024/ai-keywording/visualmind-photo.png "Result of generation of visual mind")

Well, when I said it's more "bare-bones", I didn't expect not to see even a thumbnail, but OK, I can download a CSV too.

{{< data-table >}}
Field | VisualMind | The Original
--- | --- | ---
Title | Group of mountaineers tied on a rope walking up a snow covered mountain ridge | Tied climbers climbing mountain with snow field tied with a rope with ice axes and helmets
Description | Group of climbers is making its way across a snowy mountain ridge on a sunny day | Tied climbers climbing mountain with snow field tied with a rope with ice axes and helmets
{{< /data-table >}}

I do like the Title more (finally no Capitalized Words Anymore!), but the Description is "worse" than a Title. It basically is the same text, while it should be longer and add some useful information (yes, I know that my original Description is a copied Title, but here I'm paying money for it!).

### Keywords

Probably the biggest surprise of my review.

<details>
  <summary>Detailed keywords comparison for VisualMind.ai (click to open)</summary>

> First, as usual, removing common keywords - `sky`, `ice`, `peak`, `hiking`, `summit`, `travel`, `climbing`, `adventure`, `landscape`, `sport`, `mountain`, `cold`, `group`, `rope`, `team`, `teamwork`, `snow`, `scenery`, `altitude`, `climber`, `mountaineering` - all 21 of them

And now the differences:

{{< data-table >}}
Only in VisualMind | Only in Original
--- | ---
12 | 11
`ridge`, `blue`, `challenge`, `danger`, `success`, `achievement`, `winter`, `nature`, `expedition`, `high`, `active`, `outdoors` | `courage`, `white`, `outdoor`, `top`, `extreme`, `weather`, `climb`, `mountaineer`, `caucasus`, `alpinists`, `bezengi`
{{< /data-table >}}

</details>

First and foremost, judging by "money keywords" (_"mountain, climb, team, climber, sport"_), **4 out of 5 were included** by VisualMind, only the `climb` was missed. This is the best result so far (on par with Xpiks).

In general, you may notice that keyword lists are quite even. Original and VisualMind both have about `10` keywords that are not present in the other. VisualMind suggested a few reasonable keywords like `achievement`, `expedition`, and `active` that were not added originally and others I would not add.

### Supported files

Just like PhotoTag, VisualMind claims to support photos and videos. And the latter suffers from exactly the same problem as with PhotoTag. They only have a website to work with. If you have many videos, it will not be fun to upload them to get metadata. Vectors/illustrations are not claimed to be supported.

### Price

VisualMind offers {{< link "https://www.visualmind.ai/pricing/" "nofollow" "many ways to buy" >}} (subscriptions or credit packs). Price level starts from `2¢` per file and goes down to approximately `1¢` per file if you buy _a lot_ of credits (`€499`). Prices exclude VAT (remember to add `~30%` in EU and `~10%` in US).

They offer 20 free credits for new accounts at this time, so you can also try the quality of their service.

## Pixify Studio

{{< link "https://www.pixify.io/" "nofollow" "Pixify" >}} used to be a Shopify plugin created by Jacob Lund (and still is), until they also jumped on the "AI kewording" train", by releasing "Pixify Studio" app. From the web services discussed so far, this has the cleanest and most flawless UI and it worked without issues. It allowed me to generate the following metadata:

![Pixify Studio](/images/posts/2024/ai-keywording/pixify-photo.jpg "My Photo in Pixify Studio (credits/email edited out)")

{{< data-table >}}
Field | Pixify | The Original
--- | --- | ---
Title | Group Of Climbers Ascending Snowy Mountain Ridge | Tied climbers climbing mountain with snow field tied with a rope with ice axes and helmets
Description | Adventurous group of climbers equipped with ropes scaling a steep snowy mountain ridge under a clear blue sky. | Tied climbers climbing mountain with snow field tied with a rope with ice axes and helmets
{{< /data-table >}}

My comments are that the Title/Description are completely reasonable. I would lowercase the Title to actually use it, but otherwise, it's perfectly acceptable.

### Keywords

Keywords situation is less amazing than VisualMind, but not that bad.

<details>
  <summary>Detailed keywords comparison for Pixify Studio (click to open)</summary>

> **Removed common keywords** - 18 of them - `sky`, `ice`, `peak`, `hiking`, `summit`, `climbing`, `adventure`, `landscape`, `sport`, `mountain`, `cold`, `group`, `rope`, `extreme`, `teamwork`, `snow`, `altitude`, `mountaineering`

The ones that were different:

{{< data-table >}}
Only in Pixify | Only in Original
--- | ---
22 | 14
`backpack`, `blue`, `challenge`, `clear`, `climbers`, `determination`, `effort`, `equipment`, `experience`, `fitness`, `frozen`, `gear`, `goal`, `high`, `nature`, `outdoors`, `physical`, `ridge`, `rock`, `scenic`, `snowy`, `success` | `travel`, `courage`, `white`, `outdoor`, `top`, `team`, `weather`, `scenery`, `climb`, `climber`, `mountaineer`, `caucasus`, `alpinists`, `bezengi`
{{< /data-table >}}

</details>

Now, from the "money keywords" (_"mountain, climb, team, climber, sport"_), Pixify got **2 out of 5 right**, leaving out `climb`, `team`, and `climber`. Not exactly great, given that those were the 5 most important ones.

As for the rest, generated by Pixify, I think `effort`, `experience`, `goal`, `success` are interesting keywords that would have been worth adding to my photo. There were, of course, a lot of what I'd call "spam", like `frozen`, `challenge`, `backpack`, `nature` etc.

### Usability

Pixify offers a desktop app (as usual these days, a browser in disguise), but it feels great and snappy. It has productivity shortcuts and folders to organize pictures. Hell, it even features an FTP upload for getting files to their servers! And I guess I already mentioned it's the cleanest app, besides Xpiks, that I saw while doing this review.

The drawback, while it's a good _desktop_ app, all you get are again CSV files. It does not write metadata back to files, it does not work with your files locally, you need to upload all of them to their cloud storage first. The app is pretty much the browser that opens the page _studio.pixify.io_, same thing if you just use your usual browser.

One thing different from competitors is that they offer Lightroom Classic plugin for photos to use their AI keywords.

### Supported files

Pixify app supports photos and videos, but the uploader only supports image types. So I supposed you can only upload videos by FTP. No vector/illustration support was announced.

### Price

{{< link "https://www.pixify.io/studio/pricing" "nofollow" "Pixify prices" >}} starts from `9¢` per file and goes to a bit less than `3¢`, if you buy the largest of the largest credit packs (`$225/month`). This makes it the most expensive service out there, being priced about 3-4 times more than the nearest competitor.

They do offer 50 free credits at this point, so you can try the service for free.

## Auto Keywording plugin for Xpiks

> **Disclaimer:** you're reading about Xpiks on Xpiks blog, we love ❤️ Xpiks here!

Well, just for the sake of my argument about AI, let's see how it actually works in Xpiks. To try it out, you need to install an [Auto Keywording Plugin]({{< relref "/plugins/auto-keywording-plugin.md" >}}). Then you have an option to do "single" and "batch" auto-keywording.

Maybe you noticed it's called "_auto_ keywording" and not "AI keywording". That's because I don't like marketing speak to call everything "AI" and also because Xpiks uses a couple of machine learning models and not just a single "AI brain".

![Xpiks auto-keywording](/images/posts/2024/ai-keywording/auto-keywording-xpiks.jpg "Auto keywording plugin (on the left) in Xpiks")

After clicking the "Generate" button, I got my metadata in about a second!

{{< data-table >}}
Field | Xpiks | The Original
--- | --- | ---
Title | Climbers Ascending a Snowy Mountain Ridge | Tied climbers climbing mountain with snow field tied with a rope with ice axes and helmets
Description | A group of climbers ascending a snowy mountain ridge under a clear blue sky. The steep slope is covered in snow, and the climbers are roped together, showcasing teamwork in a challenging environment. | Tied climbers climbing mountain with snow field tied with a rope with ice axes and helmets
{{< /data-table >}}

Just to be fair to other services, showcased in this blogpost: Title and Description offered here are okay. They are not exceptionally better than anything else. I could use both as is (meaning, "as suggested by Xpiks"), but if I actually cared (and I do care), I would edit them before saving them to the file. In my opinion, they are worse than a human can write if the human will think a little bit.

### Keywords

It is a really interesting exercise to compare "AI keywords" today to how I wrote them "back then".

<details>
  <summary>Detailed keywords comparison for Xpiks (click to open)</summary>

> **Removed common keywords** - 15 of them - `ice`, `peak`, `summit`, `climbing`, `adventure`, `sport`, `mountain`, `outdoor`, `cold`, `top`, `rope`, `teamwork`, `snow`, `climb`, `climber`

And the differences:

{{< data-table >}}
Only in Xpiks | Only in Original
--- | ---
16 | 17
`winter`, `challenge`, `recreation`, `effort`, `mountain climbing`, `high`, `pinnacle`, `action`, `accomplishment`, `confront`, `rock climbing`, `hike`, `mountain peak`, `risk`, `daylight`, `leisure`, `outdoors`, `glacier`, `skier`, `ridge`, `blue sky`, `topography`, `terrain`, `environment` | `sky`, `hiking`, `travel`, `courage`, `landscape`, `white`, `group`, `extreme`, `team`, `weather`, `scenery`, `altitude`, `mountaineer`, `mountaineering`, `caucasus`, `alpinists`, `bezengi`
{{< /data-table >}}

</details>

As usual, comparing the "money keywords" (_"mountain, climb, team, climber, sport"_), **Xpiks offered 4 out of 5**, which is as good as it gets these days, omitting only `team` (but offering `teamwork` instead).

From good keywords that were offered, but I did not add back in the day, were `accomplishment`, `glacier`, `risk`, `leisure`. There were also a few "spammy" keywords that I would not add to my own picture, like `daylight` and `skier`.

### Two unique features others don't have

Now, Xpiks has 2 more tricks to pull off here, that none of the other solutions have.

![Auto-keywording advanced options](/images/posts/2024/ai-keywording/advanced-options-xpiks.jpg "Additional options for keywording in Xpiks")

First, Xpiks can offer you **hierarchies of concepts**. A hierarchy is of the likes of _"tree < forest < landscape < environment"_ or _"Stockholm < Sweden < Europe < place"_. If you add one word, the hierarchy is added too. If we enable concept hierarchy for the current picture, Xpiks immediately offers 4 more keywords: `topography`, `terrain`, `environment`, `landscape`. While not groundbreaking in this example, I did have `landscape` in the original list and `terrain` can be added _if_ you have room for it.

Second, Xpiks has a **recommendation ML model** that is trained on groups of keywords frequently used together. This is an extra mile because sometimes (hopefully made by humans!) keywords lists contain related concepts, that are searched for by buyers but are not "visible" on the picture. Turning it on for this example immediately yields 5 more keywords: `ski`, `skiing`, `alps`, `alpine`, `extreme`. From these, I would definitely add `extreme` and `alps` (though it's not Alps on the picture, but truly relevant and not many people can tell the difference).

### Usability

Xpiks is a desktop-first app (that isn't a browser!), which writes metadata back to the original files on your computer as soon as you generate it. You _can_ have CSV too if you want, but saving everything back to files is just so much more convenient (and faster).

Videos are processed lightning fast because Xpiks extracts frames locally and the whole video files are not uploaded to the "cloud" for that purpose, unlike others.

If there's something users [praise constantly]({{< relref "/pages/testimonials.md" >}}) in Xpiks, it's the user interface friendliness and productivity speed, so I'll leave it at that.

### Supported files

Photos, vectors, and videos are fully supported so everything said above is applicable to them.

### Price

There are [a couple of credit packs]({{< relref "/plugins/auto-keywording-plugin.md#price" >}}), but the price for the user is constant (it's not cheaper if you buy a larger pack) and is around `1.5¢` per file (including VAT, so no surprises here). This puts Xpiks into the cheapest range and given what I saw in terms of quality of other solutions, I feel like we really need to raise our prices for image credits!

Xpiks offers a free trial, during which you can use 10 new files every 10 minutes for auto keywording. There are some daily limits in place against abuse, but this is by far way more than any of the other services can offer.

## Other notable mentions

### Agencies themselves

Agencies also run kind of the same ML models to index your files after upload (in addition to your metadata). So if you want to be lazy, you can upload to, say, Adobe Stock, pull the auto-generated metadata and paste it to some offline app like Xpiks to save into files. After that you can just upload same files everywhere.

### ChatGPT / Claude / Other LLMs

You _can_ build amazing things yourself with ChatGPT alone. It can help as well to generate metadata, but it requires some time investment to nail the prompt(s), fix the mistakes it will make, and understand what exactly you want as an outcome.

There's a full blog post coming soon on how to build your own "PhotoTag" or "VisualMind" in ChatGPT and I will link to it here when it's published. So subscribe to the newsletter!

### StockSubmitter

StockSubmitter allows you to BYOK (Bring Your Own API Key) from ChatGPT and, apparently also "bring your own prompt" and then you can generate metadata. However, this approach has a high friction so I'm not reviewing it here - it might be simpler to use ChatGPT directly!

### Maigen

![Maigen](/images/posts/2024/ai-keywording/maigen.png "Maigen - requires external API Key")

Maigen is a new player on the field, that started, just like Xpiks many years ago, with a [forum post](https://www.microstockgroup.com/software/maigen-automatic-metadata-generator-with-modern-and-advanced-features/), no website, and obscure links to GitHub releases for download. It's a fully cross-platform desktop app I wanted to like, just for how clean it looks. But it does not work out of the box as it needs a Google Gemini API key that I did not have and did not want to get. However I do support the app and hope the author will develop it further.

## Conclusion

Thank you, if you got this far! When I started this review, I did not really know what to expect. I knew that all the services right now have access to pretty much the same state-of-the-art machine learning models. I was still curious to see if, having a single focus area, they will manage to produce something better than Xpiks did for some time already.

To quickly recap what I discovered about the services themselves: [VisualMind]({{< relref "#visualmindai-aka-udreamai" >}}) produces similar in quality keywords to Xpiks, [Pixify Studio]({{< relref "#pixify-studio" >}}) looks as clean as Xpiks, while [PhotoTag]({{< relref "#phototagai" >}}) does not deliver on quality, and [ImStocker]({{< relref "#imstocker-vision" >}}) - on quality _and_ user experience. Price-wise, Pixify is 4 times more expensive than its closest competitor, while Xpiks is the second-cheapest option, "losing" only to ImStocker.

The problem I see with services like [PhotoTag]({{< relref "#phototagai" >}}) or [VisualMind]({{< relref "#visualmindai-aka-udreamai" >}}) is that they are "AI keywording", but **not** "AI keywording _for microstocks_". They miss some things like keywords spam or ultra-long description that has to be readjusted, that would be obvious to microstock contributors. The general problem with ChatGPT-generated metadata is that keywords are mostly duplicated in Description and Title, taking extra room and creating "spam".

If there was any point of this article then it was the exploration itself and I hope you enjoyed the journey!