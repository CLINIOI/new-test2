---
title: "Export CSV"
topic: "integrations"
order: 2
aliases:
  - /tutorials/howto-export-csv/
---

{{< table-of-contents >}}

## CSV export in Xpiks

You can export artworks' metadata to a [CSV file](https://en.wikipedia.org/wiki/Comma-separated_values) with Xpiks. Mostly this is required for uploading video files to microstocks but you may also use it to send [metadata]({{< relref "/blog/2020/metadata" >}}) to another person or for backup.

This functionality is available from main menu _Edit -> Selected artworks -> Export to CSV_ as well as from the actions toolbar in the [main window]({{< relref "/tutorials/interface-mainview" >}}).

![CSV export](/images/tutorials/howto/basic-csv-scheme.gif)

CSV scheme is a list of column names and values that will be written there when the export will actually happen. Look at this example:

![CSV export example](/images/tutorials/howto/csv-scheme-xpiks.png)

Here we instruct Xpiks to export 4 files' metadata to CSV with 3 columns:

* column "My Filename" and value _Filename_ (e.g. actual name of the artwork file) written into that column
* column "My Description" and _Description_ of each artwork written there
* column "My Keywords" and _Keywords_ of each artwork written there

You can check the result of the export in Finder:

![CSV export result](/images/tutorials/howto/numbers-csv-result.png)

As you can see, 4 files are exported to CSV with each column having previously defined values.

## Empty columns

If you need Xpiks to create a column with no value inside (for you to fill it in later) you can select _Empty_ property for export scheme. Xpiks will create a column and leave value empty for each artwork you will export.

![CSV empty column](/images/tutorials/howto/csv-custom-field.png)

&nbsp;

## Video upload

Keep in mind that you have to use property **[UploadFilename]** instead of [Filename] for video files upload and CSV generation. Some microstocks have issues with filenames that contain spaces or special characters. During upload Xpiks normalizes the filename (replaces special characters) so you will upload without troubles. But since the uploaded filename will be different, you will need to use same names in CSV in order for it to be accepted.

## Custom values

As of version 1.6 Xpiks supports specifying custom values in CSV columns.

![CSV custom column](/images/tutorials/howto/custom-csv-property.gif)

This produces the following result:

![CSV custom column result](/images/tutorials/howto/custom-export-column.png)

This functionality can be useful if you want to export videos and specify the same price for all entries.
