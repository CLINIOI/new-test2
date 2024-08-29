---
title: "Xpiks 1.7 released"
date: 2021-09-16T11:17:44+03:00
image: "/images/posts/2021/xpiks-17-release/xpiks17.png"
author: Taras Kushnir
keywords:
  - xpiks
  - release
  - review
  - plugins
  - suggestion
  - keywording
categories:
  - xpiks
---

> If you are looking for the latest Xpiks release, check out [Xpiks 1.7.2]({{< relref "/blog/2023/xpiks-172-release.md" >}})

It is my pleasure to announce general availability of Xpiks 1.7! In this release Xpiks gets one of the most important features for it's growth: support of plugins. Also you can enjoy few newly-available plugins from the [plugin marketplace]({{< relref "/plugins/_index.md" >}}), including automatic keywording using image recognition, generating PDF model releases and others.

{{< table-of-contents >}}

## Xpiks Pro+

Following the [previous release]({{< relref "/blog/2020/xpiks-16-release.md" >}}), Xpiks 1.7 introduces [a new plan]({{< relref "/pages/pricing.md" >}}) called **Pro+**. The main difference from _Pro_ plan is that you can use **any plugin** from plugin marketplace (in addition to all Pro features). Another difference is that _Pro+_ is a subscription plan with monthly and yearly billing, while _Pro_ is a one-time purchase. _Pro_ plan is still available. The main reason for introducing a subscription plan is that some plugins now require server resources so one-time purchase cannot pay for servers indefinitely. Also only subscription model will make continuous work on Xpiks possible.

## Keywords Suggestion

Keywords Suggestion experience was significantly updated in the new release with both new features and enhancements.

### Automatic keywording

First and foremost improvement is the fully automatic keywording! Now you don't need to sweat over which keywords to use or what artworks to search to find similars. Instead, Xpiks will offer you all keywords on a push of a button:

![Generate and apply](/images/plugins/auto-keywording/automatic_keywords.gif "Keywords are suggested keeping microstock focus in mind")

Automatic suggestion works when editing a single file and it is enabled for photos and videos. You can review the keywords, before applying them to the artwork. Now the most tedious part of keywording is solved!

Automatic keywording is provided via a [plugin]({{< relref "/plugins/auto-keywording-plugin.md" >}}).

### Reverse image search

Another feature that can shave tons of time is reverse image search. Now you don't need to craft a search query to find pictures similar to yours. One press of a button and you get similar picture to yours sorted by their popularity:

![Suggestion](/images/tutorials/suggestion/suggestion-reverse-search.gif)

Also you can select any image in the existing search results and _"Search similar"_ images, if that was a good match to yours. Read more in the [tutorial]({{< relref "/tutorials/suggestion-reverse-search.md" >}}).

### Automatic selection of similar images

In case there are many images similar to yours, Xpiks will offer you to automatically them. You don't even need to scroll suggestion results to the end to find good ones.

![Similar](/images/tutorials/suggestion/select-similar.gif)

Also Xpiks can select images similar to yours in case such matches are found. Read more in the [tutorial]({{< relref "/tutorials/suggestion-similar.md" >}}).

### Suggestions specific for videos

Before 1.7, Xpiks only supported search in Photos, Vectors and Illustrations. From this release you can also search only in Videos while doing keywords suggestion.

![video suggestions](/images/posts/2021/xpiks-17-release/video-suggestions.png "Find videos similar to yours")

## Plugins

The main feature of Xpiks 1.7 is the support of plugin marketplace that will allow 3rdparty integrations of Xpiks. Along with the release, there are 5 plugins initially available in the marketplace. More plugins are on the way!

### Auto Keywording plugin

[This plugin]({{< relref "/plugins/auto-keywording-plugin.md" >}}) was discussed in the keywords suggestion section of this blogpost. It's main feature is a new tab that allows to automatically generate keywords for photos and videos. Xpiks does not only generate keywords from image recognition but also suggest keywords that are typically used on microstocks for such image.

### Model Release plugin

![Signature in PDF](/images/plugins/model-release/generated.png)

[This plugin]({{< relref "/plugins/model-release-plugin.md" >}}) allows you to create model releases without the need to play with Photoshop or Illustrator where you fill-in the PDF form and draw your signatures! (or even worse, scan and fill them by hand). Now you can do everything in Xpiks: create models and witnesses data, take a signature picture with your phone and Xpiks will generate you a valid model release.

![Reference](/images/plugins/model-release/reference.png "Reference to your illustration")

Also you can generate property releases with added visual references. These model and property releases are available in English, Spanish and Russian.

### Keywording Order plugin

[This plugin]({{< relref "/plugins/keywording-order-plugin.md" >}}) allows you to **get other people to keyword your artworks securely**. Now you do not need to send them originals or waste your time to downscaling files to "safe" size: Xpiks does that for you! Using this plugin you can create a standalone file that you can share with other people for keywording. After the keywording is done, you can import their work back to the original files. All that is done while original files actually never leave your computer.

Main intention behind this plugin is that _sharing your files with other people is not secure_ by it's nature. Even if other person does not have bad intentions, their computer might get compromised. Your files are under risk of ending up where you would not want them to be. Maybe even on microstocks being sold by others.

### Rank Tracking plugin

![Tracking rank](/images/plugins/rank-tracking/rank-tracking.png)

[This plugin]({{< relref "/plugins/rank-tracking-plugin" >}}) allows you to see how your files rank in the microstock search for customers by finding at which **position in search results** are your files. You can understand if your work is still relevant or you need to put more effort in the specific areas where you loose rank.

You can track artworks on Adobe Stock and Shutterstock by Relevance, Popularity or Newest search criteria. Xpiks will keep tracking the artwork if it ranks in the first 200 search results.

### Trim Keywords plugin

![Trim keywords](/images/plugins/trim-keywords/trim-options.jpg "Use a preset number or enter a custom one")

[This plugin]({{< relref "/plugins/extended-editing-plugin.md" >}}) allows you to remove extra keywords that you might have accidentally added. It has few built-in thresholds for typical number of keywords and also a custom one.

## Miscellaneous

### Xpiks speaks Greek

Xpiks adds a 17th language to the list of translated languages: _Greek_. Huge thanks to Theocharis Charitonidis for his generous contribution! Now Greek users can enjoy native user interface.

### Copyright tag

![Copyright](/images/tutorials/miscellaneous/copyright.png)

One of the features users requested for quite some time is the ability to add _Copyright_ metadata. With Xpiks 1.7 it is possible. If you will setup this setting, every time Xpiks will save your artworks, the _Copyright_ will be added.

### Changing the order of upload hosts

Another improvement that was highly requested by users: ability to change the order of hosts in the [Upload window]({{< relref "/tutorials/interface-upload.md" >}}). This is also possible now.

### iStock metadata improvement

Even though Xpiks is not "officially approved" iStock/Getty uploading tool (yet), many people use it because it simplifies their life in terms of keywording. However, there was a problem that iStock was reading artwork's Title from incorrect metadata. From Xpiks 1.7 you can additionally save Title in a way that will be understood by iStock (changed in _Settings -> Metadata_).

### New updater on Windows

Some users reported issues with update on Windows operating system. Since Xpiks 1.7, there's a new update installer available that should resolve these issues.

### Manual filename column selection on CSV import

Now during CSV import Xpiks will allow you to manually select a column that is used to match file names in case automatic selection failed. Previously the CSV import would fail.

### New CSV export templates

Xpiks adds new CSV export templates for Canva and Envato Market.

### Reworking in-app notifications

Previously Xpiks would notify you about an update or anything else when the event has happened. Now Xpiks will wait until you "do nothing" so you won't be interrupted when adding keywords or typing a word.

### Support for PNG files

Another long-awaited feature will allow you to prepare files for agencies like Creative Market, Canva and Pixta.

### Bugfixes

Xpiks 1.7 also contains fixes for the small issues found since the previous release:

- CSV with quoted columns cannot be imported to Deepmeta
- Xpiks cannot parse CSV with extra empty columns
- CSV export column with `$` sign is unsupported
- Keyword editing starts while dragging a keyword
