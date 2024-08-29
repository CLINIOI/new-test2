---
title: "Xpiks 1.7.1 released"
date: 2022-05-26T08:19:31+03:00
image: "/images/posts/2022/xpiks-171/header.png"
author: Taras Kushnir
keywords:
  - xpiks
  - release
  - review
  - plugins
  - upload
  - cloud
categories:
  - xpiks
---

> If you are looking for the latest Xpiks release, check out [Xpiks 1.7.2]({{< relref "/blog/2023/xpiks-172-release.md" >}})

It is my pleasure to announce general availability of Xpiks 1.7.1! The major feature brought by this release is the ability to do cloud upload. Now you do not need to keep your computer running after starting the upload: the upload can continue in Xpiks Cloud.

{{< table-of-contents >}}

## Upload improvements

### Cloud Upload

The highlight of 1.7.1 release is the long-awaited cloud upload functionality! _"Cloud upload"_ means that instead of uploading directly from your computer to all microstocks, you will **upload only once** to Xpiks Cloud. Then your files will be uploaded to all microstocks that you specified from Xpiks Cloud. 

![Cloud upload](/images/posts/2022/xpiks-171/cloud-upload.png "Upload only once and let Xpiks take it from there")

You do not need to have any other storage (like Dropbox or GDrive) - Xpiks Clouds provides both storage and uploading functionality. You will save the time and internet bandwidth when uploading files from your computer. You will also have a peace of mind since Xpiks Cloud will automatically retry uploads in case of any networking connectivity issues. This is especially relevant to those uploading videos, but will be also benefit all users with large volumes of upload.

Cloud upload is available **only for Xpiks Pro+** users. All technical and billing details are available on the [Cloud Upload page]({{< relref "/pages/cloud-upload.md" >}}).

### Direct upload improvements

> By "direct upload" we now mean upload from your computer to the FTP server directly (without Xpiks cloud)

![Upload window](/images/posts/2022/xpiks-171/upload-window.jpg "Upload now looks and feels better")

There are few changes here:

- In certain circumstances direct upload will became at least twice as fast due to Xpiks now uploading to the same host using few threads. Previously single host would always use only one thread. The difference will be significant if you upload many files to a single host or few large files.
- UI of upload has been reworked in an effort to make it simpler and more efficient. Now user can see what exactly files are being uploaded and configuration of the agency FTP server has moved to a separate dialog.
- Now there's an option to reset all FTP settings to their defaults right from the setting up dialog. This is useful in case you made few changes in "Advanced" section and now upload "does not work".
- Fixed a situation when upload progress appeared stalled due to Xpiks not reporting the progress correctly after upload retry
- Upload history will now not account files that were uploaded, but changed locally, making it possible to seamlessly upload them again

## Licensing changes

### Ability to delete the license

The most popular request from users was to give some sort of control in removing old license activations. With this release such possibility is available via menu `Tools -> License -> Delete license`. It will delete the license locally and unlink the activation for this particular device. This will make it possible to use your license on other devices.

Deleting **does not cancel** the license, it only unlinks the license from the particular computer.

### Few related improvements

There are a few other changes related to licenses:

- Users without a license can now enjoy up to 3 [keywords presets]({{< relref "/tutorials/presets-overview.md" >}}) (previously: none)
- Users without a license can now create up to 3 [csv export plans]({{< relref "/tutorials/export-csv.md" >}}) (previously: 0)
- Xpiks now requires an email to start Xpiks Pro+ trial

## New plugins

Xpiks 1.7.1 makes 2 new plugins available.

### Cloud upload plugin

![Cloud upload plugin](/images/plugins/cloud-upload/cloud-upload.png)

[Cloud upload plugin]({{< relref "/plugins/cloud-upload-plugin.md" >}}) is a companion of cloud-upload functionality. It provides a centralized place for tracking your cloud uploads (note: they are different from your local upload history). Also it shows you how much upload balance your account has and allows to top-up that balance conveniently.

This plugin will see some development after the release of Xpiks 1.7.1. It is planned to add more functionality, like detailed upload information and actions on the cloud uploads.

### Translator plugin

This plugin was partially available already for 1.7.0 release, but now it's "officially" released. [Translator plugin]({{< relref "/plugins/translator-plugin.md" >}}) allows users to translate words to and from 26 different languages. It comes as a successor of built-in Xpiks translation functionality, having all supported languages available from the start.

For Xpiks 1.7.0 (previous release) users of the plugin, a crash has been fixed that sometimes prevented use of the plugin.

## Other improvements

- [Find and replace]({{< relref "/tutorials/find-and-replace.md" >}}) improvements. Previously it was not possible to replace a word into a list of words. To make it work in Xpiks 1.7.1, the replacement should be a comma-separated list like `some,new,keywords` and the options should only have `"Search in keywords"`, `"Whole words only"` and `"Case sensitive"` checked.
- Xpiks 1.7.1 is translated into Thai language which makes it the **18th**(!) language that is available in Xpiks
- Fixed crash that occured under certain circumstances when using [Delete keywords]({{< relref "/tutorials/keywords-batch-delete.md" >}}) functionality on Windows
- Improve filename matching during [CSV import]({{< relref "/tutorials/import-csv.md" >}}) when files had FTP-incompatible characters

*Cloud upload image from {{< link "https://storyset.com/data" "nofollow" "here">}}.*