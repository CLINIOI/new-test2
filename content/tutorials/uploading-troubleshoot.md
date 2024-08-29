---
title: "Upload troubleshooting"
topic: "uploading"
order: 6
aliases:
  - /tutorials/misc-troubleshoot-upload
---

Quality of FTP upload in Xpiks depends very much not only on time-tested uploading in Xpiks, but also on your local internet provider, microstocks websites which update and break their services frequently and many other fragile things. In case you have any connectivity issues it is important to detect where does the error originate: locally or on the FTP server side.

Xpiks allows you to better understand what is going on with detailed upload logging. You can turn it on in _Upload_ section of _Settings_. Please keep in mind that **enabling detailed logging makes your upload slower** so please don't forget to **turn it off after** the experiment.

![Upload settings](/images/tutorials/miscellaneous/upload-settings.png)

Usually you would need to do the following:

* turn on _Detailed logging_ for uploading
* try to upload some files (this will generate enough logs to troubleshoot networking)
* turn off _Detailed logging_ for uploading

Later in order to understand what happens, please [contact support]({{< relref "/tutorials/contact-support.md" >}}) and get help from professional.

Detailed upload logging saves the dialog between Xpiks and remote server. This dialog can be extremely useful to troubleshoot the problem on either side. This is an example of such dialog for testing the connection:

![Upload settings](/images/tutorials/miscellaneous/upload-logging.png)

Please keep in mind that Xpiks strips all sensitive data like passwords from detailed FTP logging.
