---
title: "Xpiks 1.7.2 released"
date: 2023-05-26T08:27:41+03:00
image: "/images/posts/2023/xpiks-172/header.png"
author: Taras Kushnir
aliases:
  - /2017/02/24/xpiks-14-detailed-features/
  - /blog/xpiks-14-detailed-features
  - /2018/01/14/xpiks-15-overview/
  - /blog/xpiks-15-overview/
  - /blog/2019/xpiks-153-release
  - /blog/xpiks-153-release
keywords:
  - xpiks
  - release
  - review
  - plugins
  - upload
  - presets
categories:
  - xpiks
---

I'm happy to announce new version of Xpiks: 1.7.2. In this release we're bringing few dozen new features that users were asking for, alongside general improvements and bugfixes.

{{< table-of-contents >}}

## Uploading

### Improved Upload interface

In the previous releases there were multiple features added to the upload UI that were always hidden into the dropdown menus with checkboxes. Now they are finally moved to a separate screen that makes starting upload a 2-step process.

![Upload window](/images/posts/2023/xpiks-172/upload-window.png "Upload options are now more obvious")

You will see the impact of [upload history]({{< relref "/tutorials/uploading-history.md" >}}) of how many upload will be skipped and exact upload size if you want to use [Cloud Upload]({{< relref "/pages/cloud-upload.md" >}}).

### New Upload options

Now you're able to control 2 more things during upload.

![Upload options](/images/posts/2023/xpiks-172/upload-options.png "Additional upload options (in orange boxes)")

#### Filename adjustment for FTP

Since the very beginning, Xpiks was adjusting filename during FTP upload to make sure that upload succeeds. This adjustment meant that non-compatible characters of the filename were replaced to the underscore `_` and then filename was made unique using numbers. This also forced to use property `UploadFilename` during [CSV export]({{< relref "/tutorials/export-csv.md" >}}) instead of `Filename` as it could have been different.

Now with this option, you can force Xpiks to not to adjust the filename (which is a recommended way, however).

#### Using maximum network bandwidth

By default Xpiks uploads files in parallel to achieve optimal upload speed. However, not all agencies offer same upload speed to their FTP servers. In case you found that some agency works slower for you, you can use this option to force Xpiks not to use parallel upload when uploading to this agency (other agencies will still be uploaded to in parallel).

### Support for Vectorstock

Vectorstock has a special schema for how to create archives with vectors and now Xpiks officially supports it! You can now find Vectorstock in the list of available agencies. Please note that you need to get your account enabled by their support to upload via FTP.

### Ability to cancel individual uploads

Another long-time requested feature from users was to cancel only certain uploads and this release ships it. You can find it in the upload dialog:

![Cancel upload](/images/posts/2023/xpiks-172/cancel-individual-upload.png)

### Upload failure reasons

Now for failed uploads you will see the exact reason for each agency that caused the upload to fail. This can be useful to see if the agency has a classic "full disk" error or you used incorrect username and password.

![Cancel upload](/images/posts/2023/xpiks-172/upload-error.jpg)

## Presets

### Adding preset to multiple files

Now you can insert preset to multiple files without batch editing, directly from the main menu.

![Insert preset](/images/tutorials/presets/insert-preset-multiple.png)

### Create preset from keywords of an artwork

Each _"More"_ menu in the main view (or in the batch and single editing views) now allows you to create a preset from keywords.

![Create preset](/images/tutorials/presets/create-preset.gif)

### Temporary presets

Now it's possible to create a preset that will be only used until the end of the current session in Xpiks. It can be useful if you're processing many files for which you need presets, but you don't want to manually cleanup after.

![Temporary preset](/images/posts/2023/xpiks-172/temporary-preset.png)

## Editing

### Ability to append text to Title/Description

Now you can also append (and prepend too) text to Title or Description when doing batch editing. The options are in the dropdown next to the selection checkbox. This can be used, for example, to add `"Generative AI"` as required by Adobe Stock.

![Append and prepend](/images/posts/2023/xpiks-172/append-prepend.png)

### Option to initialize Description from filename

Some users are setting Title or Description in the filename and now it's possible to copy it to Description during import or by using a plugin. This option is available in `Settings -> Metadata` section and also during import (if autoimport is turned off). Xpiks intelligently selects words from the filename even if you use dashes or underscores.

![Filename description](/images/posts/2023/xpiks-172/filename-description.png)

### Apply from QuickBuffer to multiple artworks

Highly requested feature by Xpiks users (although slightly discouraged as there's [batch editing]({{< relref "/tutorials/batch-editing-basic.md" >}}) for that purpose). In any event, it's now possible to do in Xpiks:

![QuickBuffer apply](/images/tutorials/quickbuffer/quickbuffer-apply-multiple.gif)

### Other editing improvements

- now you can set a color tag from a single artwork editing view
- metadata reading and writing speed was significantly improved
- it's now possible to zoom in/out in a single editing view with `Ctrl + mouse wheel` (or `Cmd` on Mac)
- [search filters]({{< relref "/tutorials/interface-filtering.md" >}}) now support new filter `x:ready` that will filter artworks with all metadata filled in (with the minimum requirements respected)

## Miscellaneous

### Ability to customize warnings

Here it comes, now you can customize what upload warnings you would like Xpiks to show to you. Open new section `Settings -> Warnings`:

![Warnings customization](/images/posts/2023/xpiks-172/warnings-customization.png)

### Larger previews in keywords suggestion

Now there's an option to show larger previews for found images to be able to see details (you can also open it in browser if needed via the context menu).

![Larger suggestion previews](/images/posts/2023/xpiks-172/keywords-suggestion-previews.gif)

### Moving artworks to another folder

After you processed and uploaded your files, frequently they will be moved to another folder on your hard drive. However, it can be a pain if few of them are in the different locations. Now you can do it directly from Xpiks, no need to use the file manager.

![Move to folder](/images/posts/2023/xpiks-172/move-to-folder.png)

### Showing exported CSV files in folder

Frequently you might end up with more than 1 CSV file for different agency and it can be hard to find them. Now, after the export is finished, you can navigate directly to each of the files you need. You can also use this functionality to rename the CSV file to your liking, as it will be preselected in the file browser.

![CSV in  folder](/images/posts/2023/xpiks-172/csv-in-folder.png)

### Option to have a light preview background

Sometimes you're working with PNG files or vector files that have dark pattern that is hard to see on the dark background in Xpiks. Now you have an option in `Settings -> Interface` to use a light background.

![Light background](/images/posts/2023/xpiks-172/light-background.png)

### Support for video previews with metadata

Users asked for this feature and it's shipped in this release. Now video metadata will be also written and read from/to previews, if they are available, just like for vectors. This can be useful for import from some legacy software, that used to work this way (when unable to write metadata to video itself).

### Rendering vector files without previews

Now a certain amount of vector files (EPS/AI) will be rendered in Xpiks without the need to have previews for them. It will not work for all vector files, however, it might be helpful if you don't have the preview. Note that some agencies still require previews for vectors.

### Onboarding for users

Starting with Xpiks 1.7.2 you can see personalized onboarding tutorials that will help you to ramp up faster with Xpiks. Xpiks keeps track of what you've tried and suggests new topics that might help you. It by no means covers all functionality, but only the most important parts.

![Onboarding](/images/posts/2023/xpiks-172/onboarding.png)

With onboarding you can now add demo files and try every feature in Xpiks, even upload! Demo files are ephemeral and all changes will be lost when you exit onboarding mode.

### Other improvements

- Support for image auto-rotation in the UI (configured in `Settings -> Interface`). Xpiks will read `Orientation` metadata and apply it when displaying the image.
- Now you can duplicate a CSV export plan from a context menu! No need to copy over each field separately
- You can delete a preset group with all attached presets from the context menu (previously you'd need to delete all presets first)
- If license activation fails, an error message is displayed with a specific error that caused it. For example, you might see if there was a typo in the email.
- When [Keywords Suggestion]({{< relref "/tutorials/suggestion-overview.md" >}}) is being closed with some keywords already selected, a warning is displayed. This can help to prevent accidental closing.
- When sorting list of files by filenames that contain numbers, a so-called "natural sorting" will be used that is compatible with file managers (like Windows Explorer or Finder on macOS).

## Plugins

### Auto-Keywording batch generate

Now it's possible to batch-generate AI keyword using auto-keywording plugin. This is subject to certain limits, but it was also a highly requested feature and now it's live!

![Batch generate AI keywords](/images/plugins/auto-keywording/auto-generate-batch-mode.png)

### Translator plugin extended text

Previously translator plugin supported a single keyword translation, however with the new release, you can translate the whole description or title. Text input increased from a single line to a multiline one.

![Larger input in translator](/images/posts/2023/xpiks-172/translator-extended.png)

### Extended editing plugin

Previously a plugin known under the name `"Trim keywords"` with Xpiks 1.7.2 became `"Extended editing plugin"`. In addition to keywords trimming, it brings few pieces of new functionality:

- Copy Description to Title (and vice versa)
- Copy Filename to Title (or Description)

![Extended editing](/images/posts/2023/xpiks-172/extended-editing.png)

It is planned to move more custom editing features into this plugins in future.
