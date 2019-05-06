# README

<p align="center">
    <img alt="font webatlas" src="https://lmoraes.fr/assets/git/font_webatlas.png" width="600">
</p>

## Introduction

Font_WebAtlas is fonts of icons designed especially for the creation of interfaces/web applications.

They contain the most common icons for quick and easy creation of menus, administration spaces, players...

## Package managers

```console
npm install font_webatlas
```

## Quick Start

Import the css files as shown below:
```html
<link rel="stylesheet" type="text/css" href="node_modules/font_webatlas/dist/css/webAtlas-icons.css">
<link rel="stylesheet" type="text/css" href="node_modules/font_webatlas/dist/css/font-face/webAtlas-icons.css">
```

## Use

Add 'icon icon_name' in the class attribute of an element.
```html
<!-- Displays the icon to the left of the element -->
<div class="icon login"> Sign in</div>
```

You can adjust the rendering by adding one of the following class :
* div
* div-indent
* div-indent-center

```html
<!-- Display the icon as a block -->
<div class="example_button">
    <div class="icon div login"></div> Sign in
</div>

<!-- Displays the icon as a block with a margin to the right -->
<div class="example_button">
    <div class="icon div-indent login"></div>Sign in
</div>

<!-- Displays the icon as a block with left and right margins -->
<div class="example_button">
    <div class="icon div-indent-center login"></div>Sign in
</div>
```

## List of icons

Just open the `icons_list.html` file to see the complete list of available icons.
You can click on the icon you want to import, the css code will be copied to the clipboard.

## Alternative style

If the `Sharp` style suits better to your site's visual than the default style, replace the link :
```html
<link rel="stylesheet" type="text/css" href="node_modules/font_webatlas/dist/css/font-face/webAtlas-icons.css">
```
by this one :
```html
<link rel="stylesheet" type="text/css" href="node_modules/font_webatlas/dist/css/font-face/webAtlas-icons-sharp.css">
```