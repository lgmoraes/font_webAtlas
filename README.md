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

In this example, the icons are displayed in the theme named original. See the "Choice of theme" section to change the theme.

## Use

Add "icon icon_name" in the class attribute of an element.
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

See the list on this link : lmoraes.fr/font_webatlas

You can click on the icon you want to import, the css code will be copied to the clipboard.

## Choice of theme

3 themes are available :
- Original
- Sharp
- Outline

Incorporate the link corresponding to the desired style :

```html
<!-- Theme Original -->
<link rel="stylesheet" type="text/css" href="node_modules/font_webatlas/dist/css/font-face/webAtlas-icons.css">

<!-- Theme Sharp -->
<link rel="stylesheet" type="text/css" href="node_modules/font_webatlas/dist/css/font-face/webAtlas-icons-sharp.css">

<!-- Theme Outline -->
<link rel="stylesheet" type="text/css" href="node_modules/font_webatlas/dist/css/font-face/webAtlas-icons-outline.css">
```

This allows you to propose several themes in your page or application, simply by interchanging these links.

## Use multiple themes at the same time

The chosen theme defines the "default" style, but you can "force" a different style on a particular icon by adding `original`,` sharp` or `outline` class :

```html
<!-- Displays the login icon in the default style -->
<div class="icon login"> Login </div>

<!-- The icon is displayed in original -->
<div class="icon login original"> Login</div>

<!-- The icon is displayed in sharp -->
<div class="icon login sharp"> Login</div>

<!-- The icon is displayed in outline -->
<div class="icon login outline"> Login</div>
```

## Optional Content

Add these optional links for more content :
```html
<!-- Adds the fonts WebAtlas and WebAtlas-Light (letters and numbers) -->
<link rel="stylesheet" type="text/css" href="dist/css/font-face/webAtlas-alphanumeric.css" />

<!-- Adds geometric icons -->
<link rel="stylesheet" type="text/css" href="dist/css/webAtlas-geometric.css" />
<link rel="stylesheet" type="text/css" href="dist/css/font-face/webAtlas-geometric.css" />
```