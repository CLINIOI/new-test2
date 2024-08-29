---
layout : "page-blog"
title: "Auto Keywording plugin"
description: >
    Automatically generate relevant keywords, titles and descriptions.
pro: true
image: '/images/plugins/auto-keywording/auto-keywording.jpg'
install_plugin: true
aliases:
  - /plugins/auto-keywording/
order: 1
---

## Overview

This plugin brings a new tab to Xpiks that can be used when editing a single artwork from [main view]({{< relref "/tutorials/interface-mainview" >}}) or [single artwork editing view]({{< relref "/tutorials/interface-single-view" >}}).

You can generate and apply keywords and description with a click of a button. It significantly reduces time that is required for keywording.

![Generate and apply](/images/plugins/auto-keywording/automatic_keywords.gif "Xpiks uses image recognition and keywords enhancing magic to generate keywords")

### Description and Title generation

Starting from plugin version 0.3.0 and onwards you can also generate descriptions in addition to keywords (and from 0.5.1 - title). Generation of descriptions can be turned off in the "More" menu below the keywords if you don't need it.

> Note that there are cases when description/title **cannot** be generated - in those cases Xpiks will show `N/A` ("Not Available") label.

### Batch generation

It is possible to generate AI keywords, titles and descriptions for many images at once (from Xpiks 1.7.2 and onwards).

![More menu](/images/plugins/auto-keywording/more-menu.jpg)

This action is available via the "More" menu for selected artworks ("More -> Plugins -> Auto keywording -> Generate").

![Batch generate AI keywords](/images/plugins/auto-keywording/auto-generate-batch-mode.png "Batch auto-keywording dialog in Xpiks")

## Price

Metadata generation incurs credits. Keywords-only generation costs `1` credit per file and with description and title it costs `5` credits per file.

All Xpiks Pro+ customers are automatically granted **every month** `4,000` _included_ credits. Should you need more credits, you can top up your account at any time.

{{< blog-table >}}
Extra credits | Price
--- | ---
`3,000` | _€9_
`5,000` | _€15_
`10,000` | _€29_
{{</ blog-table >}}

Included credits do not accumulate. Purchased credits do not expire while your subscription is active. Credits are not refundable. Included credits are always used prior to purchased credits.

You can check current credit balance in the _"More"_ menu under the generated keywords in the tab or in the batch keywording dialog.

## Limits

Use of this plugin is a subject to limits.

#### File types

This plugin generates keywords and descriptions for **all file types**: photos, vectors and videos (please note that vector files are supported from version 0.5.9 and higher).

#### Trial evaluation

During trial you can generate keywords and description for **10 artworks each 10 minutes**. If you exceed this limit, generation will be disabled until the next 10 minutes.

Batch generation is not available during trial evaluation.

#### Pro+ users

Batch generation is limited to `1000` files at once _without_ description and to `100` files _with_ description. We're working on increasing these limits in future. Amount of times you can run batch generation depends entirely on the amount of credits on your balance and is not limited otherwise.

## Recommendations

Xpiks recommends to use the plugin as a starting point for your keywording and **not** as a replacement of one. Keywording is the 2nd most valuable thing (after the content itself) that affects sales of your artworks and we treat it seriously (check numerous studies in our blog). Note that image recognition is not a precise science and AI can and will make **mistakes**. Always check the suggested metadata yourself before saving your files.

## Terms and conditions

Use of this plugin is a subject to additional terms and conditions. You will be presented with consent dialog when installing plugin in Xpiks.

Main condition of these terms is that in order to generate automatic keywords you must authorize Xpiks to upload a significantly downscaled copy of your photo to the server and/or any involved vendor. Please read the whole document when installing the plugin and don't use the plugin if you do not agree.