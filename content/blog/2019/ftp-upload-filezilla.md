---
layout: post
title: "How to upload to Shutterstock using FTP client FileZilla"
date: 2019-12-14T20:22:18-08:00
image: "images/posts/2019/filezilla-upload/filezilla-ftp-upload.png"
author: Taras Kushnir
aliases:
  - /blog/2019/ftp-upload-with-filezilla
keywords:
  - upload
  - ftp
  - filezilla
  - manual
  - server
  - protocol
categories:
  - guide
---

## What is FTP

[FTP](https://en.wikipedia.org/wiki/File_Transfer_Protocol) (File Transfer Protocol) is one of the ways to communicate over the Internet. It was invented in the 80s and heavily used for fileshares in the early 00s. In fact there're many fileshares that use FTP right now: website hostings and [microstock websites]({{< relref "/blog/2020/top-microstocks" >}}).

There are two parties in this communication: an FTP client and FTP server. Microstocks like Shutterstock or [Adobe Stock]({{< relref "/blog/2020/adobe-stock-contributor-review.md" >}}) are running FTP servers and contributors use FTP clients like FileZilla or Xpiks to access these servers. Each contributor has a "home" directory on that server and can use it to store files, which in case of microstocks are photos, vectors and others.

## Why microstocks use FTP

Contributors are rarely uploading only few files, usually they upload batches of many photos, illustrations or videos. Web uploader in any microstock like Shutterstock or Adobe Stock is less suited for bulk uploads. Thats why instead of inventing something new they decided to use already existing technology (FTP) which is better suited for bulk file operations over the network.

## What is FileZilla

[FileZilla](https://filezilla-project.org/) is one of the [FTP clients](https://en.wikipedia.org/wiki/Comparison_of_FTP_client_software) that can help you login and transfer files to FTP servers. It's history spans over almost 20 years since it was [first released in 2001](https://en.wikipedia.org/wiki/FileZilla). FileZilla is available across all desktop platforms: you can use it on Windows, macOS and Linux.

![FileZilla main window](/images/posts/2019/filezilla-upload/filezilla-interface.png "FileZilla main window")

### Interface

FileZilla interface is following a popular practice of 2-panel file managers like Total Commander or Norton Commander. However, left part always shows local computer and right part shows remote server. Top panel allows you to type in address and credentials to remote FTP server.

![FileZilla main window](/images/posts/2019/filezilla-upload/filezilla-interface-explained.png)

FileZilla interface is basic and a little bit rough and it takes a little bit of time to get used to it especially if you're new. However, it is one of the most featured FTP clients on the market so it definitely pays off to master it.

## How to upload to Shutterstock using FileZilla

### Find FTP address, username and password

First step in FTP upload is connection to FTP server. In order to connect you have to know address of FTP server and username and password. All microstock use different addresses and you have to find it in the settings. On Shutterstock you can find it on the [Upload page](https://submit.shutterstock.com/upload/portfolio?language=en&r=nav) in the Contributor Portal. Below the file selection tool you can find FTP server settings:

![FTP instructions](/images/posts/2019/filezilla-upload/shutterstock-ftp-instructions.png)

Now you can enter Shutterstock FTP server address `ftp.shutterstock.com` and your username and password into FileZilla Address panel and press "QuickConnect". If you entered everything correctly, right panel with "Remote files" will not be empty anymore.

![FileZilla connected to FTP server](/images/posts/2019/filezilla-upload/filezilla-connect-shutterstock.png)

### Drag'n'drop your local files to FTP server

After you connected to FTP server, you're good to upload your files. Just find local directory on the left (in "Local files") and drag it to the "Remote files" part.

![FileZilla upload to FTP server](/images/posts/2019/filezilla-upload/drag-files-to-upload.gif)

<br />

### Wait for Shutterstock to process FTP upload

After you uploaded the files, Shutterstock will process them and add them to your ["Portfolio -> Submit content" page](https://submit.shutterstock.com/edit?language=en&type=photo) where you can add keywords and description. Allow some time for processing depending on a number of files you uploaded. Also if their servers are busy then it may take even more time.

Ultimately, you can find your files in the portal:

![Uploaded files to FTP](/images/posts/2019/filezilla-upload/shutterstock-uploaded-photos.jpg)

That's pretty much it. This process is OK if you upload to one microstock, but if you're uploading to few of them, it may become too time-consuming. Xpiks allows you to upload to any number of microstocks at the same time - check out [basic uploading tutorial]({{< relref "/tutorials/intro-uploading" >}}).

### Useful links

* [FileZilla website](https://filezilla-project.org/)
* [How to upload video to Shutterstock]({{< relref "/blog/2019/upload-video-shutterstock" >}})
* [Shutterstock FTP guide](https://www.shutterstock.com/contributorsupport/articles/en_US/kbat02/How-do-I-upload-content-via-FTPS)
* [Upload interface of Xpiks]({{< relref "/tutorials/interface-upload" >}})

