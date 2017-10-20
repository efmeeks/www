---
title: "Fix Google Drive Folder Icon in macOS"
date:   2017-07-25 12:00:00
---
Is your the Google Drive folder icon missing? Here's a simple fix.

* Open your Applications Folder

* Right click Google Drive and select *Show Package Contents*

* Open the Contents/Resources folder

``` bash
# Or open Terminal and enter the following
open /Applications/Google\ Drive/Contents/Resources
```

* Locate the icon file named `folder-mac-yosemite.icns` and copy it with `⌘C` or right-click then *Copy*

* Go to your Google Drive folder location

* Select the Google Drive folder then press `⌘I` or right-click then *Get Info*

* Click the folder icon then press `⌘V` to paste

Tadaa!
