---
layout: post
title: "Metadata for microstocks explained"
date: 2020-03-23T23:00:02-08:00
image: "images/posts/2020/metadata/picture-metadata.jpeg"
author: Taras Kushnir
aliases:
  - /blog/2020/metadata
keywords:
  - metadata
  - microstock
  - photo
  - vector
categories:
  - info
---

Word "metadata" is used frequently when talking about microstocks, but what does that mean? This article goes in depth of explaining what is metadata, how you can add it and why it is useful for microstocks.

## What is metadata

Metadata is "data about data". It is some additional information that [describes, structures or references](https://en.wikipedia.org/wiki/Metadata) actual data. Describing metadata is used for discovery and identification of the main data and this is exactly what is important for microstocks.

You are constantly dealing with metadata even you don't know that you are. For example, each file on your computer has creation and modification time properties. This information is not part of the file data, but it's a metadata that is stored together with the main data. In terms of photography metadata examples could be color depth, image resolution, camera make and model, shutter speed, location, description etc.

## How metadata is saved

Metadata is usually stored within original file. You may think about the file as a box with compartments: original picture file `kitten.jpg` does not only contain pixel data, but also other information like Exif or IPTC metadata.

![kitten.jpg](/images/posts/2020/metadata/file-metadata.jpg "Actual contents of an image file with pixel data and metadata")

Typically each metadata record consists of a property name (like "Author") and property value (e.g. "John Smith"). Whole metadata consists of many such records stored together. Same file opened with [exiftool](https://exiftool.org/) in console prints available metadata:

![exiftool metadata](/images/posts/2020/metadata/exiftool-metadata.png "Same file kitten.jpg opened with exiftool")

Metadata is saved to the file by the application or device that created or edited that file. It could be your camera, file explorer or image editor. After it is saved, it will be available for any software that reads the file.

It is also possible to store metadata separately from the file (external metadata), like it's done in [XMP sidecar files](https://en.wikipedia.org/wiki/Sidecar_file) or Digital Asset management software (e.g. ACDSee). This is also what microstock websites do by default when you enter metadata on the website.

## Photo metadata formats

There are many different types of metadata stored in media files and majority originated from photography. Some types are standarized and some are not. For example, each camera manufacturer has their own flavor of metadata they add to photos. Accordingly to [exiftool website](https://exiftool.org/TagNames/index.html), currently there are more than 23 000 types of information stored in metadata.

In the context of microstocks we are mainly interested in three metadata formats: Exif, IPTC and XMP.

### Exif

Exif ([Extensible Metadata Platform](https://en.wikipedia.org/wiki/Exif)) is the oldest international standard, supported in all possible file types. It usually includes information about format, creation, manufacturer, resolution, f-number, flash and many, many other fields. Exif format had some [drawbacks](https://en.wikipedia.org/wiki/Exif#Problems) like size limitation, unclear parts of specification (e.g. `MarkerNote` tag) and others.

### IPTC

IPTC ([International Press Telecomunications Council](https://en.wikipedia.org/wiki/IPTC_Information_Interchange_Model)) metadata is another format developed to improve exchange of news among newspapers back in 90s. It was popular in newspaper photographers and became widely adopted until Adobe created XMP format for metadata. Some portions of IPTC metadata overlap with Exif like a Copyright tag.

### XMP

XMP ([Extensible Media Platform](https://en.wikipedia.org/wiki/Extensible_Metadata_Platform)) is another metadata standard, developed by Adobe in order to have more control over the media industry. This format brought many improvements on top of other metadata formats such as distinct metadata language specification, [sidecar files](https://en.wikipedia.org/wiki/Sidecar_file) and others. Sometimes it is blamed for being extra complex and not fully supported by non-Adobe products.

## Metadata for microstocks

Currently each microstock has an upload form and fields to add metadata on their website like keywords and description. This is done in order to describe photo, vector or video and therefore help customers to find it.

![Shutterstock editing](/images/posts/2020/metadata/shutterstock-edit.jpg "Editing metadata on Shutterstock website")

These input fields allow to add metadata that will be stored outside of the file (external metadata). Typical workflow for contributors was to prepare the file, upload to website and add external metadata later on the website. This quickly becomes tedious if you repeat these steps for a couple of microstocks.

Fortunately microstock website are capable of reading and correctly interpreting metadata contained in files. Microstocks like [Shutterstock]({{< relref "/blog/2021/shutterstock-ultimate-guide" >}}) or [Adobe Stock]({{< relref "/blog/2020/adobe-stock-contributor-review.md" >}}) use certain metadata records to read Description, Keywords and Title. For example, they use `ImageDescription` record in Exif format, `Caption-Abstract` in IPTC or `Description` in XMP format to read the description.

This means that you can add appropriate metadata to file on your computer and now *metadata will always be present in that file*. When you upload the file to microstocks, they will be able to fetch the metadata you added by reading the file. Xpiks greatly helps you with this process and ensures that metadata is added correctly so microstocks can read it later. Please check out a [tutorial on how to do it]({{< relref "/tutorials/intro-editing" >}}).

## Vector and video metadata

Vector and video files can also carry metadata in the same way as images. You can save IPTC and XMP metadata in both vectors and videos. Also videos can additionally store QuickTime metadata. Nevertheless these formats have been less popular carriers of metadata than images. 

Many microstocks until recently required you to provide a separate ["preview" file with metadata for vectors]({{< relref "/blog/2020/upload-vectors-shutterstock" >}}) and a [CSV file for videos]({{< relref "/blog/2019/upload-video-shutterstock" >}}). However, they started to abandon this practice: first [Shutterstock removed preview requirement]({{< relref "/blog/2020/upload-vectors-shutterstock" >}}) and then Adobe Stock followed along. Other microstock are slowly adopting to this practice too.

## Is metadata a personal data

Metadata can contain a large amount of personal data. This might be location geo tags in the photos, make and model of camera, author copyright information and others. Description and keywords are also intellectual property owned by contributors that created it along with the media artwork itself. So overall the answer is yes: metadata is a personal data.

## Summary

Metadata is an additional information you can store along with the media files. It can be stored inside or separately from the original files. Microstock contributors benefit from metadata stored inside files since it allows to upload one file to many microstocks. Xpiks helps you to add proper metadata to your photos, vectors and videos. This metadata will be forever available that may help you not only with microstocks but also with local image library organization.
