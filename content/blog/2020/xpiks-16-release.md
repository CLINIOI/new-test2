---
title: "Xpiks 1.6 released"
date: 2020-09-04T08:26:06+03:00
image: "images/posts/2020/xpiks-16-release/new-release-16.jpg"
author: Taras Kushnir
keywords:
  - xpiks
  - release
  - review
  - upload
  - support
  - svg
  - keywording
categories:
  - xpiks
---

It is my pleasure to announce general availability of Xpiks 1.6! This release has a record number of new features comparatively to any previous major Xpiks update. Xpiks 1.6 improves almost every aspect of your experience. Without further ado let's get to it!

> If you are looking for the latest Xpiks release, check out [Xpiks 1.7.2]({{< relref "/blog/2023/xpiks-172-release.md" >}})

{{< table-of-contents >}}

## Xpiks Pro

Over the course of last years many users asked how they can help the project financially. And while donation was always an option, it wasn't the most rewarding one. With Xpiks 1.6 we introduce Xpiks Pro version of Xpiks that allows users to support the project and in exchange they get rewarded with awesome premium features. Xpiks Pro licenses are perpetual: it means if you buy the license, you can use the features that are included in it forever. There's no subscription involved, but if you want to support the project every year, you can renew your license. Also you can try any premium features for free during 14-day trial, no credit card required.

<br />

## Uploading experience improvement

Xpiks 1.6 significantly improves upload experience in many ways.

### Background upload

Since the beginning of Xpiks users asked for a feature where Xpiks would upload artworks and at the same time you could continue editing them. Since version 1.6 it is now implemented!

![Background upload](/images/tutorials/uploading/background-upload.gif)

As you can see as soon as you press "Upload", you are returned to the editing view and you can track and manage your upload in the new tab. You can of course get back to old behaviour using "More" menu in the Upload dialog. Please see [background upload tutorial]({{< relref "/tutorials/uploading-background" >}}) for details.

### Custom FTP directories

Usually Xpiks correctly selects a directory for your upload e.g. if microstock requires all images to be uploaded to `images/` directory and video to `videos/` directory, Xpiks would do that automatically. But in some cases, like with editorial images, you would want to specify a different directory than selected by default in Xpiks. Now you can explicitly specify it using custom directory setting!

![Custom FTP directory](/images/tutorials/uploading/custom-ftp-directory.gif)

As usual, see [tutorials]({{< relref "/tutorials/custom-upload-directory" >}}) for more details.

### FTPS support

FTP security has always been a tough topic given that your usernames and passwords are being sent in a plain text over the internet. Luckily, [microstock websites]({{< relref "/blog/2020/top-microstocks" >}}) are aware of the problem and Shutterstock was apparently first one to start testing [FTPS](https://en.wikipedia.org/wiki/FTPS) (FTP over SSL) access instead of FTP. Hopefully other microstock websites will also take security seriously. While FTPS would not work in older Xpiks version, since 1.6 it it is supported.

### Upload history

Xpiks now keeps track of where and when you have uploaded the particular file. It greatly helps with not uploading duplicates to the same microstock in case you're reuploading some files and you added existing one by mistake. This setting is ON by default, but you can disable it in the "More" menu in the upload dialog.

![Skip recent uploads](/images/tutorials/uploading/skip-recent-uploads.png)

Also you can review where and when each artwork has been uploaded to from the artwork context menu. See [upload history tutorial]({{< relref "/tutorials/uploading-history" >}}) for details.

### Failed uploads

Now Xpiks allows to reupload failed uploads with just a single click! No need to remember which files failed and to which microstock, now you can retry all of them. Also keep in mind that before showing these uploads as failed, Xpiks retries all of them at least 3 times automatically.

![Retry failed](/images/tutorials/uploading/retry-failed.png)

<br />

## Color tags

This was a number one of the requested features: ability to mark artworks with colors and organize them into virtual collections. Now you can assign one of the existing color to artworks and later filter by this color in UI. You can create unique workflows using color tags. See details in [color tags tutorial]({{< relref "/tutorials/interface-color-tags" >}}).

![Color tags interface](/images/tutorials/interface/color-tags.png)

<br />

## Import from CSV

Some microstocks allow exporting metadata in CSV format for the older uploads and you can use this to attach this metadata to the real files so you could have it there. Or you could just share metadata this way between different contributors or simply between computers. Now it is possible in Xpiks: a convenient way to import metadata from CSV and assign columns to artwork properties.

![CSV import mapping](/images/tutorials/howto/csv-import-mapping.png)

See full [CSV import tutorial]({{< relref "/tutorials/import-csv.md" >}}) for details on how to use this feature.

## Support

Xpiks now allows you to contact support right from the app. If you have any question or you want to report a bug, there's no more convenient way than this! Also Xpiks would upload your logs automatically so support time will be much shorter and with less friction.

![Contact support](/images/tutorials/howto/contact-support.gif)

In-app support is only available to customers who have active Xpiks Pro license. All other customers can have community support in one of the supported platforms (like Google Groups).

<br />

## Presets

Xpiks 1.6 improves presets experience as well.

### Smart groups

As of version 1.6, new predefined groups are available: "Recently added" and "Recently used". As their names imply, they contain few lately used or added presets. This allows you to find presets much faster when you want to insert them using a context menu.

![Recently used group](/images/tutorials/presets/recently-used.png)

<br />

### Sorting presets alphabetically

Another highly requested feature: ability to sort presets in the context menu now arrived in Xpiks. You can find new setting in the "UI" section and it will keep presets and groups sorted so you can faster find them in the context menu.

![Sorted presets](/images/tutorials/presets/sorted-presets.png)

<br />

## Settings synchronization

Another highly requested functionality that is now available is ability to synchronize all Xpiks settings between computers. Previously there was a remotely convenient option to use "portable" settings for Windows, but with Xpiks 1.6, there's a new functionality available for all platforms. Xpiks allows you to specify a directory where a single file with all settings will be created. This directory can be your Dropbox, Google Drive or just local hard drive. When you move to a new computer, you can use the same single file to restore everything. See [sync tutorial]({{< relref "/tutorials/misc-settings-sync" >}}) for details of what is synchronized.

![Settings synchronization](/images/tutorials/miscellaneous/settings-sync.png)

<br />

## SVG support

![SVG support](/images/posts/2020/xpiks-16-release/svg-support.png)

Xpiks now support SVG vectors in addition to EPS and AI. But unlike the latter two, Xpiks can show you SVG thumbnails without additional preview files. Now you can process and upload SVGs to a number of microstocks like Adobe Stock or Freepik.

## Smaller improvements

### UI improvements

We polished and improved UI in many places within the app, specifically in the main editing area where selection and highlighting were confusing some users and in the batch editing mode. Tabs panel now does not fully hide and allow you to quickly needed tab. Also all context menus and popup dialogs are redesigned for a more "Xpiks-native" look and feel.

### Custom CSV export columns

Previously Xpiks only supported Empty columns for CSV export, but now you can set your own value for those columns! This is useful if you want to set the same video prices for some microstocks that allow such setting. See [CSV custom value tutorial]({{< relref "/tutorials/export-csv.md" >}}).

### New vector warnings

Xpiks got smarter about vector files and now it will notify you if you violate vector preview requirements or vector file size requirements set by microstocks.

### Spelling suggestions in keyword editing

In case you begun editing a keyword that has a spelling error, Xpiks will suggest you corrections right in the editing window, so now you can just select a correction with a mouse.

![Editing suggestions](/images/tutorials/keywording/edit-spelling.gif)

<br />

### Ctrl+click selection of suggested keywords

Also a highly-requested feature: ability to select [suggested or "other" keywords]({{< relref "/tutorials/suggestion-overview" >}}) using a Ctlr + click (Cmd + click on macOS) instead of clicking on tiny "add" or "remove" icons using a mouse.

### Latest blogposts and tutorials

Xpiks will show you latest tutorials and blog posts that are available on the website on it's main screen so you can stay in the know of the latest microstock news and tips.

### Limits for the local thumbnail cache

Xpiks now can allow you to limit how much disk space you would like to dedicate to the photo/video thumbnails locally. Default limit is 300 MB and Xpiks will automatically remove older thumbnails to fit into this limit. You can change this in "System" section of Settings.

### Video previews improvements

Xpiks 1.6 brings experimental support for video preview generation out of process that will make Xpiks not to crash in case of issues in ffmpeg.

### New translations

Xpiks 1.6 got also translated by volunteers to Romanian and Czech languages, which makes in total 15 languages!

## Bugfixes

Xpiks 1.6 ships with lots of fixes for the small issues found in previous release

-   Fix for master password cannot be set
-   Fix for Recoverty not starting on macOS
-   Fix for settings being removed in portable mode during update on Windows
-   Fix few most common crashes on Windows
-   Fix for video thumbnails not shown in Failed uploads
