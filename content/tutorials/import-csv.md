---
title: "Import CSV"
topic: "integrations"
order: 3
pro: true
aliases:
  - /tutorials/howto-import-csv/
---

{{< table-of-contents >}}

## Overview

Xpiks can import metadata from any [CSV file](https://en.wikipedia.org/wiki/Comma-separated_values). You can use it import metadata from microstocks and write it into your files.

In order to do the import, select artworks you want to import and select "Import from CSV" from "More" menu. As the first step you need to select a CSV file that contains metadata.

![Import from CSV](/images/tutorials/howto/import-csv.gif)

## CSV Import schema

> Exact column names **do not matter** because Xpiks allows you to choose which columns mean what (also Xpiks tries to guess first)

After you select the file, you can setup mapping between columns in the CSV file and artwork properties. This mapping will be used to overwrite Description, Keywords or Title from specific columns in the CSV file. This happens if the file also contains a `FileName` column that can be matched to artwork's file name.

![CSV import mapping](/images/tutorials/howto/csv-import-mapping.png "Left side contains columns that Xpiks found in the CSV file")

After you configured mappings, press "Preview" and you will see a draft of what Xpiks will import from CSV file into each artwork. You can unselect some files if you don't want to import them at this point or you can press "Cancel" and reconfigure mapping between columns and artwork properties.

## Final review

![CSV import preview](/images/tutorials/howto/csv-import-preview.png)

If you're satisfied with the changes, just press "Import" to finish this procedure.
