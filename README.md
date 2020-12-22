# README

<p align="center">
    <img alt="font webatlas" src="https://lmoraes.fr/assets/git/font_webatlas.png">
</p>

## Introduction

Font WebAtlas is an icon module designed for the creation of interfaces and web applications.

## Package managers

```console
npm install font_webatlas
```

## Quick Start

Import the css files as shown below :
```html
<link rel="stylesheet" type="text/css" href="node_modules/font_webatlas/webAtlas.css">
<link rel="stylesheet" type="text/css" href="node_modules/font_webatlas/font-face/webAtlas-original.css">
```

In this example, the default theme is `original`.
See the "Choice of theme" section to change the theme.

## Use

Add `icon icon_name` in the class attribute of an element.
```html
<!-- Displays the icon as a block -->
<i class="icon login"></i> Sign in
```

`<div>` tags are also usable.

Or add `icon-first icon_name` in the class attribute of an element.
```html
<!-- Displays the icon as the first letter of your block -->
<i class="icon-first login">Sign in</i>
```

## List of icons

See the list on this link :
<a href="https://lmoraes.fr/font_webatlas/">lmoraes.fr/font_webatlas</a>

Click on the icon you want to import, then click on `Copy class` or ` Copy HTML` button to copy the code to the clipboard

## Choice of theme

3 themes are available :
- Original
- Sharp
- Outline

Copy the link corresponding to the desired style :

```html
<!-- Theme Original -->
<link rel="stylesheet" type="text/css" href="node_modules/font_webatlas/font-face/webAtlas-original.css">

<!-- Theme Sharp -->
<link rel="stylesheet" type="text/css" href="node_modules/font_webatlas/font-face/webAtlas-sharp.css">

<!-- Theme Outline -->
<link rel="stylesheet" type="text/css" href="node_modules/font_webatlas/font-face/webAtlas-outline.css">
```

This allows you to propose several themes in your page or application, simply by interchanging these links.

## Use multiple themes at the same time

The chosen theme defines the "default" theme, but you can "force" a different theme on a particular icon by adding `original`,`sharp` or `outline` class :

```html
<!-- Displays the login icon in the default theme -->
<i class="icon login"> Login</i>

<!-- The icon is displayed in original -->
<i class="icon login original"> Login</i>

<!-- The icon is displayed in sharp -->
<i class="icon login sharp"> Login</i>

<!-- The icon is displayed in outline -->
<i class="icon login outline"> Login</i>
```

## Combination of icons

### By interlocking :

When possible, the child icon is repositioned so as to integrate with the parent icon :
```html
<i class="icon magnify">
    <i class="icon plus"></i>
</i>
```

It is also possible to nest text :
```html
<i class="icon calendar">
    <i>7</i>
</i>
```

### By overlapping :

The `combine` class allows more possibilities of animation (with the use of CSS rules such as transform).
```html
<i class="icon losange"></i>
<i class="icon combine warning"></i>  <!-- warning icon will be placed over losange icon -->
```