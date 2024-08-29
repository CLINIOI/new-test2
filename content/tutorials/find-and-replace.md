---
title: "Find and replace"
topic: "miscellaneous"
order: 4
pro: true
aliases:
  - /tutorials/howto-find-and-replace/
---

Usually if you need to edit multiple files at once you would use [batch editing]({{< relref "/tutorials/batch-editing-basic" >}}) but if you need to quickly replace something in Keywords, Title or Description, Find And Replace might be handy.

Hit `Ctrl+Shift+F` (`Cmd+Shift+F` on Mac) or main menu _Edit -> Find and replace_ and you will see this:

![Find and replace](/images/tutorials/howto/find-and-replace.png)

You have an option to find (and replace) selectively in Description, Title or Keywords as well as do <i>case-sensitive search</i> (where `"Word"` is not equal to `"word"`) and to match <i>whole words only</i> (that is searching for `"sun"` will not find `"sunny"` but will find only `"sun"`).

After you typed in what you're looking for and configured search options, you can hit "Find and replace" button. Xpiks will present you <strong>a preview of what will change</strong> before actually doing a replace. Here you can refine the replacement by selecting artworks which will be affected.

![Replace preview](/images/tutorials/howto/replace-preview.gif)

Also all the matches are highlighted so you can be sure not to replace anything that you don't want to replace. Also keep in mind that Xpiks will search only in currently filtered artworks.

<br />

However if you need just to find artworks better use [filtering]({{< relref "/tutorials/interface-filtering" >}}) instead.
