---
title: "Top 5 vector rejection reasons and how to fix them"
date: 2020-06-28T08:49:15+03:00
image: "images/posts/2020/vector-rejection/vector-rejection.png"
author: Taras Kushnir
aliases:
  - /blog/2020/top-vector-rejection-reasons
keywords:
  - microstock
  - review
  - rejection
  - vector
categories:
  - beginner
  - info
---

Vector rejections are quite different from [photo rejection reasons]({{< relref "/blog/2020/top-photo-rejection-reasons" >}}) though still frustrating. Also despite photo rejections are pretty much not changing, vector submission experience in microstocks is changing. One example could be [Shutterstock removing preview requirement]({{< relref "/blog/2020/upload-vectors-shutterstock" >}}) and some others following it. In this blogpost we discuss what you may face today and how to deal with it. As you will see, fixing vector rejections is easier than fixing photo rejections.

&nbsp;

## Artboard size. The size of your artwork must be at least 4 megapixels

![Artboard size](/images/posts/2020/vector-rejection/artboard-size.png "Make sure to have 4MP artboard on 300 DPI")

#### Why

This one is tough since most people get it wrong. This rejection is not about size of the file (that you can see in File Properties in your folder) but it's about dimensions of the artwork. 4 megapixels usually means your artwork width and height should be `2000px` x `2000px` (or any combination that when multiplied is more than `4 000 000` square pixels like `1500px` x `2700px`).

#### How to fix

If you are using Adobe Illustrator, you can fix this in `File -> Document Setup...` menu. Make sure to set `Units` to `pixels` and width and height in a way that gets you minimum `4 000 000` square pixels when multiplied. It is a bit harder to fix in Affinity Designer though: you have to scale up your artwork by a factor of `10` (you'll have to experiment), set DPI to `300` and Rasterize set to `Nothing` (check more on [their](https://forum.affinity.serif.com/index.php?/topic/86022-why-is-exported-eps-file-size-smaller-than-original-one/) [forums](https://forum.affinity.serif.com/index.php?/topic/39675-eps-export-for-microstock-submission/)).

&nbsp;

## Reference image needed

![Reference image](/images/posts/2020/vector-rejection/reference-image.jpg "Watercolor illustration and vector created from it")

#### Why

Sometimes if your illustration looks "too real" or is obviously traced or redrawn from a photo, you need to provide a "reference image" along with your vector. The reason is that since [microstocks]({{< relref "/blog/2020/top-microstocks" >}}) are dealing with copyright issues, before selling your work they need to make sure you own all rights for the artwork. Sometimes they also require photos of hand drawn sketches for your vectors in case there's no reference photo.

Examples of reference images are: photo used to create an auto-traced or manually traced image, a photo that was converted to vector using a mesh, hand-drawn sketch with pen/pencil on paper (can be scanned), a photo converted for drawing using a Photoshop filter.

#### How to fix

Fixing is easy: find (or create) the sketches you used for creating the artwork or upload a photo or a screenshot of what you used for the inspiration. You can resubmit this content and get approved if this was the only problem with your submission.

&nbsp;

## Raster effects. Bitmap images and/or effects are not permitted.

![Embedded bitmap](/images/posts/2020/vector-rejection/embedded-bitmap.png "Embedding bitmaps and any raster effects is disallowed")

#### Why

Usually this happens if you attach a raster image to your vector (or forget to remove one after auto-tracing), rasterize part of the vector, use a raster-based effect like Gaussian or Radial Blur, Drop Shadows or transparency. The problem is that vectors having any of those elements will technically contain a bitmap image (either manually or automatically created) after being exported to EPS 8 that does not support them. EPS 10 does not support only Gaussian/Radial Blur and Drop Shadow. Bitmap images / Raster effects are prohibited in vectors on microstocks - hence the rejection.

#### How to fix

First of all, try to use [EPS 10 format](https://helpx.adobe.com/stock/contributor/help/vector-requirements.html) since it supports more features. Then you have to remove all real bitmap images that you included by yourself. As for the bitmap effects, in order to find them in Adobe Illustrator, open `Windows -> Links`. If you have any bitmapped effect, you can click "Go to link" and locate the object in the artboard.

You can also replace drop shadow with a gradient and get accepted. Although there's no real way to remove transparency in EPS 8, you can get along with a technical trick where you optically mix colors to create a "transparency effect".

&nbsp;

## Title/Keywords issue. Title/Keywords must be descriptive and relevant

![Title issues](/images/posts/2020/vector-rejection/title-issues.jpg "Always provide metadata in English first. Microstock can translate it on their own")

#### Why

Usually this happens if you were too lazy when filling in description or keywords or when you were too active when doing so. In another words, you either spammed with [lots of words in keywords](https://support.submit.shutterstock.com/s/article/How-is-Keyword-Spamming-Defined?language=en_US) and/or title or you added not enough of them. You can also get this rejection if your title was not in English (e.g. you added some special character like `ä` or `õ`) or if title does not accurately describe the image.

#### How to fix

Good news is that this one is relatively easy to fix. You can need to come up with a title/keywords that are descriptive and to the point. Avoid too generic descriptions or ones that contain unnecessary information. Do not use keywords, your username or any random information that is not relevant to the image in the title/description. Do not add non-applicable keywords to the artwork. Use [keywords suggestion in Xpiks]({{< relref "/tutorials/suggestion-overview" >}}) to make sure you are using correct ones.

&nbsp;

## Artwork too large or too small, multiple artboards

![Too small artwork](/images/posts/2020/vector-rejection/artwork-too-small.png "Artwork is too small on the artboard")

#### Why

There are several rejections falling into this category. First few are [related to the artboard](https://www.shutterstock.com/contributorsupport/articles/kbat02/Why-was-my-content-rejected-for-Artboard?l=en_US) position: your submission gets rejected if image itself is larger than the artboard, much smaller than the artboard or is outside of the artboard. Also it might be that you created multiple artboards within the file.

#### How to fix

Resolution in both cases is relatively trivial. For artboards, just make sure to delete all artboards but one. To fix the size, adjust your artwork so that it is aligned with the boundaries of the artboard. Save and resubmit.
