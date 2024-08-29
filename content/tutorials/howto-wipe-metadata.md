---
title: "Wipe all metadata"
topic: "miscellaneous"
order: 6
aliases:
  - /tutorials/howto-wipe-metadata/
---

Xpiks can help you in clearing literally ALL [metadata]({{< relref "/blog/2020/metadata" >}}) which is contained in files. For example, for photos such metadata could be tags, date, geolocation, camera model information, lens etc.

If you would be using [exiftool](https://exiftool.org/) to do the job, this would be equal to a command `exiftool -all= myphoto.jpg`.

With Xpiks it's possible to do it for multiple files at once. This is destructive operation with almost no way to restore, so Xpiks will ask you not once but twice to confirm.

![Wipe all metadata](/images/tutorials/howto/wipe-metadata.gif)

Also Xpiks does not clear your edits inside the app. That means that while actual files do not contain any metadata anymore, _Title_, _Description_ and _Keywords_ inside Xpiks will be left intact so you will be able to save them later.

