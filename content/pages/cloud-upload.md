---
layout : "page-content"
title : "Xpiks Cloud upload"
url: "/cloud-upload/"
free_download: true
---

Cloud upload allows Xpiks users to upload files only once to Xpiks Cloud and let Xpiks Cloud to upload to all the agencies on their behalf.

{{< table-of-contents >}}

## Overview

Before you could upload all files directly from your computer to agencies FTP servers. But that would take a lot of time in case you are uploading many files or large files. Now you can upload only once and let Xpiks Cloud handle the rest.

![Cloud upload](/images/posts/2022/xpiks-171/cloud-upload.png "Upload only once and let Xpiks take it from there")

After upload to Xpiks Cloud, your files are safely stored and the uploads that you would have done directly, will take place in the cloud. After the upload is finished, your files will be kept for up to 7 days, in case you will reupload them. Any time you start a new cloud upload from Xpiks, only files that are not yet in the Xpiks Cloud will be actually uploaded.

Cloud upload functionality is **only** available for **Xpiks Pro+** users and is supported from Xpiks version 1.7.1 and onwards.

## How to use cloud upload

When you start a new upload in Xpiks, just mark the `"Upload via Xpiks Cloud"` checkbox - it's that simple!

![Using cloud upload](/images/tutorials/uploading/cloud-upload.gif)

### Tracking

Upload status tracking is done in 2 ways: via emails and via plugin. After upload is finished, you will get an email notification to the email associated with your license. Also you can install a [cloud upload plugin]({{< relref "/plugins/cloud-upload-plugin.md" >}}) that will allow to see the upload status of your latest uploads and cloud upload balance of your account.

### Total upload size

*Total upload size* is a size of the files that you are uploading times the number of agencies you are uploading to.

> Total upload size = (files) x (agencies)

#### Examples

{{< blog-table >}}
Files (size) | Agencies | Total upload size
--- | --- | ---
`1` file of size `120 MB` | `5` | `600 MB` (`1*120*5`)
`5` files `50 MB` each | `2` | `500 MB` (`5*50*2`)
{{</ blog-table >}}

### Limits

1. To start a cloud upload, the [total upload size]({{< relref "#total-upload-size" >}}) **must** be more than `300 MB`. Otherwise Xpiks will use a direct upload since it will be faster.
2. At this time Xpiks cloud supports uploads of up to `250` files in a single batch and individual files cannot be larger than `10 GB`.

## Billing

Each cloud upload user has an [account balance]({{< relref "#accounts-balance" >}}). When cloud upload is completed, it's [total upload size]({{< relref "#total-upload-size" >}}) is withdrawn from the respective account's balance. Account's balance can be topped up on demand at any time.

### Price

An allowance of `4GB / month` is included with each Pro+ subscription. Additional allowance is sold in packs.

{{< blog-table >}}
Pack | Price
--- | ---
`50 GB` | _€9_
`100 GB` | _€18_
`300 GB` | _€49_
{{</ blog-table >}}

<br />

### Account's balance

![Upload balance](/images/tutorials/uploading/cloud-upload-balance.png "Account's balance as seen in the cloud upload plugin")

Account balance is measured in bytes (as in "Megabytes" or "Gigabytes") to reflect the "currency" of each cloud upload. Your balance is the sum of _included allowance_ and _additional allowance_.

#### Included allowance

Each Pro+ subscription will include a **monthly** renewable allowance of `4 GB` (is equal to `4'000'000'000 bytes`). This allowance counts only towards uploads made during that month. In other words, it does not accumulate over months. Allowance for yearly subscriptions is split for each month.

While [total upload size]({{< relref "#total-upload-size" >}}) of all the uploads you will make does not exceed `4 GB` per each month, there's nothing else you need to do to enjoy Cloud Upload.

#### Additional allowance

You can purchase additional `GB` at any time. After the purchase, your account's balance is topped up with the respective amounts. Topped up amount does not expire while your subscription is active and it cannot be refunded.

### Charging rules

When charging for cloud upload, **included allowance is used first** and only after it is exhausted, additional allowance is used.

> **Example:** if your account has `4 GB` included upload and your additional balance is `10 GB`, when doing a `5 GB` upload, you will be left with `0 GB` included upload and `9 GB` additional balance. Next month your included upload balance will be reset back to `4 GB`, bringing your total balance to `13 GB` (`9 + 4 GB`).

#### Retried and failed uploads

You are charged **only** for succeeded uploads when you start upload from Xpiks. Failed uploads do not incur any charges. This means if your upload was retried automatically, you are charged only 1 time once it succeeds.

This rule applies **per file**. If some files have succeeded and some have failed to get uploaded, your account will be charged only by the [total upload size]({{< relref "#total-upload-size" >}}) of files that succeeded.

### Overdraft

In rare circumstances it is possible for user to start uploads in a way that user's balance will be negative upon their completion. After your balance becomes negative, you will lose the ability to use cloud upload until it will be topped up.

## Security

Cloud upload security is of primary importance and is taken very seriously. Xpiks minimizes chances of compromising user data and commits to quickly disclose and mitigate security incidents.

### Files

Your files will be stored for up to 7 days on Xpiks side.

Xpiks desktop application has only temporarily write-only permission to the file when you upload it to the cloud for the first time. After that the file can only be accessed by the server that performs the upload.

### Login credentials

Your FTP login credentials are **not** stored on Xpiks side and are encrypted in transit.

Every time you initiate a cloud upload, your FTP username and password are encrypted by a long randomly generated encryption key. Encryption key is a secret, shared between your local Xpiks application and server that runs the actual upload. Xpiks staff does not have access to your credentials.

### Upload environment

Server that runs the upload does not have a persistent storage of it's own and it does not have access from the public internet into it. Before executing uploads, latest security updates are always installed first. Servers that run the upload are rotated frequently.