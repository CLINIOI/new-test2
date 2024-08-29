---
layout : "page-content"
title: "Release notes"
url : "/release-notes/"
---

### Xpiks 1.7.3 - Latest version

Released Sep 7, 2023. Full version: 1.7.3.20

- Improve stability of batch auto-keywording
- Fix duplicate vector attachments to previews
- Automatically normalize FTP filenames when needed
- Fix auto-keywording for TIFF files
- Notify about cloud upload start failures
- Preserve order of files when adding
- Allow importing CSV data from preview files
- Fix incorrect CSV format warning when importing
- Fix plugin settings lost during plugin update
- Do not review duplicates with empty metadata
- Security and stability improvements
- Improve license management
- Added "RAW" files support
- Show histogram for images
- Improve saving files reliability
- Allow partial cloud uploads
- Fix modified status not updated for vectors

<br />

### Xpiks 1.7.2

[Overview]({{< relref "/blog/2023/xpiks-172-release.md" >}}). Released May 28, 2023.

- Option to use the maximum bandwidth for upload for certain hosts
- Improved upload UI
- Option to skip normalizing filenames for FTP upload
- Upload support for Vectorstock
- Allow canceling upload to individual hosts
- Show the upload failure reason in the upload report
- Show the exact amount of skipped uploads due to Upload History
- Functionality to add preset to selected artworks
- Allow deleting preset group with all attached presets
- Option to create preset only for the current session
- Functionality to create a preset from artwork keywords
- Allow appending and prepending text to Title/Description
- Add empty/ready file selection options
- Possibility to set color tag from the single artwork edit view
- Option to use the filename as a description
- Allow applying QuickBuffer to multiple artworks
- Ability to zoom in/out in a single artwork editing view
- Ability to customize detected warnings
- Improve metadata reading and writing speed
- Option to show larger previews in keywords suggestion
- Support for image auto-rotation based on Orientation metadata
- Use natural sorting for filenames with numbers
- Functionality to show exported CSV files in folder
- Functionality to move artworks to another folder
- Add the option to have light preview background
- Support for reading/writing video metadata with previews
- Render vector file from embedded preview (without external preview file)
- Show onboarding progress for new users
- Functionality to duplicate a CSV export plan
- Show specific error messages from license activation errors
- Warning when closing unsaved Keywords Suggestion


<br />

### Xpiks 1.7.1

[Overview]({{< relref "/blog/2022/xpiks-171-release.md" >}}). Released May 31, 2022.

- Ability to upload via [Xpiks Cloud]({{< relref "/pages/cloud-upload.md" >}})
- Speedup local upload to a single host
- [Plugin]({{< relref "/plugins/translator-plugin.md" >}}) to translate to and from 26 languages
- [Plugin]({{< relref "plugins/cloud-upload-plugin.md" >}}) to track user cloud uploads
- Add functionality to delete the license
- Add ability to reset host upload settings to defaults
- Allow to Find-and-Replace to a list of keywords
- Ask for user email to start a trial
- Allow limited CSV export plans for free plan users
- Allow limited presets for free plan users
- Improve filename matching when using CSV import
- Improve upload history accounting for changed files
- Fix upload progress stalled after upload is retried
- Fix hang on Windows when Delete Keywords is used
- Fix crash of translation plugin load on Windows
- Add Thai translation
- Fix plugins update process
- Improve keywords suggestion reliability
- Fix upload to Vecteezy
- Improve reliability of saving metadata to EPS
- Improve retrying uploads reliability


<br />

### Xpiks 1.7.0

[Overview]({{< relref "/blog/2021/xpiks-17-release" >}}). Released Sep 16, 2021. Full version: 1.7.0.4

- Add support for [plugin marketplace]({{< relref "/plugins/_index.md" >}})
- [Plugin]({{< relref "/plugins/auto-keywording-plugin.md" >}}) for automatic keywording
- [Plugin]({{< relref "/plugins/keywording-order-plugin.md" >}}) for creating keywording orders
- [Plugin]({{< relref "/plugins/model-release-plugin.md" >}}) for creating model releases
- [Plugin]({{< relref "/plugins/extended-editing-plugin.md" >}}) for trimming keywords
- [Plugin]({{< relref "/plugins/rank-tracking-plugin.md" >}}) for tracking rankings on microstocks
- Add Greek translation
- Keywords suggestions using [reverse image search]({{< relref "/tutorials/suggestion-reverse-search.md" >}})
- Add exiftool replacement on macOS due to Perl being deprecated
- New updates installer on Windows
- Functionality to find [similar images]({{< relref "/tutorials/suggestion-similar.md" >}}) in keywords suggestions
- Keywords suggestions support for videos
- Ability to change the order of upload hosts
- Ability to save Title to IPTC:Headline (for iStock upload)
- Ability to add [Copyright metadata]({{< relref "/tutorials/misc-copyright.md" >}})
- Make app notifications less obtrusive
- Add support for PNG
    
<br />

### Xpiks 1.6.0

[Overview]({{< relref "/blog/2020/xpiks-16-release" >}}). Released Sep 13, 2020. Full version: 1.6.0.16

-   Background upload support
-   Fail-safe mode of generation video previews
-   Support for custom FTP directories for upload
-   New warnings for EPS filesize
-   New warnings for vector preview size
-   Spelling suggestions in keyword editing dialog
-   FTPS support
-   Custom CSV export columns
-   Metadata import from CSV
-   Show latest blogposts and tutorials on start
-   Support form within the app
-   Upload history for artworks
-   SVG files support
-   Settings synchronization
-   Color tags for artworks
-   Support thresholds for local thumbnails cache
-   Ability to reupload failed files with one click
-   Smart preset groups for recently added and used
-   Option to keep presets sorted alphabetically
-   Add suggested keywords with Ctrl + click
-   New translations to Czech and Romanian
-   Automatic suggestions for helpdesk

<br />

### Xpiks 1.5.5

Released Nov 21, 2019. Full version: 1.5.5.9

-   Xpiks is notarized for macOS
-   Update openSSL libraries on Windows
-   Add help links in dialogs
-   Enable upload hosts scrolling during upload
-   Fix potential issue with thumbnails generation
-   Fix keywords blinking too often
-   Set forced left to right orientation

<br />

### Xpiks 1.5.4

Released Jul 20, 2019.

-   Fix CSV filenames mismatch with uploaded files
-   Fix updater on Windows not starting
-   Fix upload timeout issues
-   Fix Windows update issues
-   Fix EPS metadata writing
-   Improve upload reliability on slow connections
-   Fix EPS backups created always

<br />

### Xpiks 1.5.3

Released Jun 22, 2019.

-   Beta support for saving metadata to EPS files
-   Support for skipping vector previews on upload
-   Use Adobe Stock instead of Fotolia for keywords suggestion
-   Manage preset groups functionality
-   Manage translation dictionaries functionality
-   Shutterstock search results now include also editorial
-   Improve FTP upload speed
-   Remove warning about duplicate keywords in Title and Description
-   Fix issue with CSV file format for Shutterstock
-   Fix for loading suggestion thumbnails from end
-   Fix for switching to next/prev artwork not working from edit fields
-   Fix issue with exiftool path in Linux

<br />

### Xpiks 1.5.2

Released Jun 11, 2018.

- Autocompletion in Presets window
- GDPR-related privacy consent question
- Consolidate filenames for upload
- Improved stock upload options
- Fixes for handling of corrupted internal database
- Fix for stock suggestions sometimes not available

<br />

### Xpiks 1.5.1

Released Mar 4, 2018.

- Added Italian translation
- Fix for default CSV plans being not usable
- Fix for warnings not updated after editing
- Fix for artwork grid filtering positioning
- Fix for Upload dialog host Title issues
- Option to have portable settings in Xpiks
- Show links from More menu on bigger screens
- Fix for video previews of files larger than 2GB
- Ability to mouse move full size image in single view
- Basic drag'n'drop functionality for keywords

<br />

### Xpiks 1.5.0

Released Jan 14, 2018.

- Support for Video files
- Words semantic analysis (duplicates detection)
- Presets groups and autocompletion
- Session management
- CSV export
- New shiny UI
- Automatic metadata import support
- Directories filtering
- New languages: Hungarian, Indonesian, Polish and Turkish

