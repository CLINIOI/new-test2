---
title: "Filtering"
topic: "interface"
order: 6
---

{{< table-of-contents >}}

List of artworks in the [main view]({{< relref "/tutorials/interface-mainview" >}}) can get really large if you add many directories. That's why Xpiks supports filtering them so you can see only part of all items.

## Directories filtering

First and simplest filtering you can apply is _directory filtering_. You can just click on a directory name in _Files and Folders_ tab and Xpiks will show artworks only from that directory. Multiselect is also supported.

![Directories filter](/images/posts/2018/xpiks-15-overview/directories-filter.gif)

&nbsp;

## Color tags filtering

Xpiks can also filter using color tags. Check out [this topic separately]({{< relref "/tutorials/interface-color-tags" >}}).

## Artworks filtering

### Common

What is more important you can search or filter through all opened artworks.

![Artworks filter](/images/tutorials/interface/filter-whereis.gif)

Xpiks will try to find matches of what you entered in this field in every artwork and fitler out artworks which don't have matches. And how to match what you have typed in there is controlled in Settings:

![Search settings](/images/tutorials/interface/settings-search.png)

If you check _[Search match all terms]_ and you will enter few words inside search field, Xpiks will look for matches of *all* words in every artwork's [metadata]({{< relref "/blog/2020/metadata" >}}). If this is unchecked, Xpiks will look for *any* match in metadata.

_[Search by path]_ option allows you also to match filepath of each artwork to what you have typed in the search field.

### Special

Except ordinary search through artworks Xpiks supports different special terms.

Usually Xpiks searches for case-insensitive matches. But if you enter "!" (exclamation mark) before a word, Xpiks will look for *exact* match of this word _in Keywords_.

![Search settings](/images/tutorials/interface/exact-search.gif)

Also you can type in **special keywords** inside Search field. Those special keywords are `x:empty`, `x:modified`, `x:selected`, `x:ready`, `x:vector` and `x:image`.

For example, if you enter `x:empty` Xpiks will show you artworks which don't have any metadata filled in or if you enter `x:modified` Xpiks will show you artworks which are modified but not saved. You can also combine that with usual search terms.

![Search modified](/images/tutorials/interface/search-xmodified.gif)
