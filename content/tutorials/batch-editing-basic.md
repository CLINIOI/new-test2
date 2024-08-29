---
title: "Overview"
topic: "batch-editing"
order: 1
aliases:
  - /tutorials/batch-basic/
---

If you're in the [main view]({{< relref "/tutorials/interface-mainview" >}}) you can select files and press "Edit" button. This is how you start editing multiple files at once.

![Multiple editing](/images/tutorials/getting-started/multiple-view-editing.gif)

In order to apply changes you press "Save" button. Xpiks will overwrite [metadata]({{< relref "/blog/2020/metadata" >}}) in all artworks that you have previously selected for editing in main view.

If some of the files already had _Title_, _Description_ or _Keywords_ prefilled, **Xpiks will show common metadata** in multiple editing view:

- _Title_ will be prefilled if non-empty titles of selected artworks are the same
- _Description_ will be prefilled if non-empty descriptions of selected artworks are the same
- _Keywords_ will contain common keywords that are found in the selected artworks

![Combining artworks](/images/tutorials/batch-editing/combining-artworks.gif)

In the example above you can see that all three artworks have _same Description_ but _different Title_. Also each has 2 common keywords (`"common"`, `"keywords"`) and 1 other keyword. When you select them for batch editing Xpiks understands that their _Description_ is the same and it shows it right away. Also Xpiks shows keywords common to all opened artworks.
