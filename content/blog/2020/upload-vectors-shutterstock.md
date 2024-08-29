---
layout: post
title: "How to upload vectors to Shutterstock: a full guide"
date: 2020-03-01T15:06:49-08:00
image: "images/posts/2020/vector-upload/vector-upload-hero.png"
author: Taras Kushnir
aliases:
  - /blog/2020/how-to-upload-vectors-shutterstock
  - /blog/2019/shutterstock-vector-rules
  - /blog/shutterstock-vector-rules-change
keywords:
  - vector
  - requirements
  - upload
  - microstock
  - manual
  - shutterstock
categories:
  - guide
  - beginner
---

## What is the vector file format

Vector images are a bunch of mathematical equations describing how to generate images. Instead of pixels, they contain curves and paths that allow to get a crisp sharp images upon scaling to any size. This is an advantage if you need to print your company's logo on a billboard, where rasterized design will loose quality when resized. Also vector file formulas keep file size to minimum compared to it's raster counterparts.

While vector files have many advantages, they have disadvantages as well. One of the biggest one is that you need a special software to create or understand them. Examples of such software are Adobe Illlustrator, Affinity Designer, Sketch or Inkscape. Vector files can be saved in the following formats: `AI` (Adobe Illustrator), `EPS` (Encapsulated PostScript), `SVG` (Scalable Vector Graphics) and `PDF` (Portable Document Format).

## Shutterstock vector requirements

Shutterstock accepts vectors in `EPS` format that satisfy following requirements:

- file format `EPS 10` (preferred) or `EPS 8`
- total file size less or equal to 100MB
- bounding box should be between 4 and 25 Megapixels
- vector should fit inside the artboard
- no included raster files
- no open paths
- no strokes or brushes (only outlined or expanded)
- no fonts (only outlined or expanded)
- no locked layers
- no traced images
- single artboard
- no trademarks (e.g. Apple, Microsoft)

### Common vector submission problem: open paths

![Open path](/images/posts/2020/vector-upload/open-path.png "Open path (on the left) and closed path (on the right)")

All microstocks require paths to be closed. This is a most common [rejection reason]({{< relref "/blog/2020/top-vector-rejection-reasons" >}}) for inexperienced contributors. If you use Adobe Illustrator, you can check if you have open paths using `Window -> Document Info -> Objects` (you have to select all first).

![Open paths inspection](/images/posts/2020/vector-upload/document-info.png "Document Info window in Adobe Illustrator can show if you have open paths")

Document Info can show you if you have brushes, strokes, fonts and everything else what may be prohibited on Shutterstock. There are useful plugins for Adobe Illustrator that help to close paths, one of which is called ["Close all paths"](http://vectips.com/tricks/10-free-and-extremely-useful-illustrator-scripts/).

### Vector preview

A "preview" is an image (raster file) of a minimum size 4MP generated from your vector file. It should have the same name as vector e.g. preview `Path.jpg` for vector `Path.eps`. This is done so that Shutterstock and other microstocks will be able to "pair" them and use preview on their website when selling your vector.

Previously Shutterstock required contributors to create this preview themselves. This is also where you would add metadata like description or keywords. However, recently Shutterstock changed vector upload rules and now they generate preview automatically. The same does [Adobe Stock]({{< relref "/blog/2020/adobe-stock-contributor-review.md" >}}) and few others (however, many microstocks still require separate vector preview).

Currently you have to embed [metadata]({{< relref "/blog/2020/metadata" >}}) in the vector file and although only few software is capable of that, Xpiks is one of them.

## Vector metadata editing

Whether you are uploading vector+preview for any microstocks or only vector for Shutterstock, open it in Xpiks. If you have a preview, Xpiks will find it automatically.

![Open vector in Xpiks](/images/posts/2020/vector-upload/xpiks-edit-vector.png "Vector with preview opened in Xpiks")

After opening, you should [add metadata]({{< relref "/tutorials/intro-editing" >}}) and [save the image]({{< relref "/tutorials/intro-saving" >}}).

Xpiks will save metadata both to vector file and preview (in case you added a preview) so all microstocks will correctly read it. After metadata is ready, you can upload vector to Shutterstock.

## Upload vector files to Shutterstock

If your vectors are large or you are uploading to more than 1 microstock, it's easiest to upload right in Xpiks. Just select the vector and hit "Upload" button.

![Select for upload](/images/posts/2020/vector-upload/select-for-upload.gif "Select for upload")

Select or create Shutterstock (check out [upload tutorial]({{< relref "/tutorials/intro-uploading" >}})) and hit "Start Upload". Wait until your files are uploaded.

![Xpiks vector upload](/images/posts/2020/vector-upload/xpiks-vector-upload.png "Vector upload in Xpiks")

After this is finished, you should see your files in the [Contributor Portal](https://submit.shutterstock.com/edit?language=en&type=photo) with added metadata (description and keywords).

![Shutterstock Uploaded Files](/images/posts/2020/vector-upload/uploaded-vector.png)

## Vector tips for contributors

Vector requirements outlined above are common to almost all microstocks that accept vector files. Make sure to go through them every time you prepare a vector for upload, especially if you are just starting out.

Always use Document Info to check if you left any open paths, fonts, brushes or strokes. In order to get rid of them, select all and use `Object -> Expand` in Adobe Illustrator. Double check layers window if you have any locked layers, this is an accessibility requirement on Shutterstock to have them unlocked.

If you used a non-digital artwork as reference image to create your vector, you will have to provide Shutterstock with property release for that. Property release is a document that recognizes your intellectual rights for that reference picture. These includes hand-drawn illustrations, paintings and even tattoos.

Shutterstock is one of the few microstocks that accepts [editorial]({{< relref "/blog/2019/editorial-content" >}}) illustrations. This means that illustrations can contain recognizable peoples, trademarks etc. If you are interested in creating those, you can learn more by viewing [Shutterstock workshop on the topic](https://www.shutterstock.com/blog/shuttertalk-live-presents-editorial-illustrations-and-vectors-101).

## Useful links

1. [Shutterstock help on vector upload](https://www.shutterstock.com/contributorsupport/articles/en_US/kbat02/How-do-I-submit-vector-illustrations-for-review?l=en_US)
2. [Tutorial about basic FTP upload]({{< relref "/tutorials/intro-uploading" >}})
3. [Ultimate contributor's guide to Shutterstock]({{< relref "/blog/2021/shutterstock-ultimate-guide" >}})
