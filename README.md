# README

<p align="center">
    <img alt="font webatlas" src="https://lmoraes.fr/assets/git/font_webatlas.png" width="600">
</p>

## Introduction

WebAtlas is a font specially designed for the creation of web interfaces / applications.

It contains the most common icons for easy and fast creation of menus, administration spaces, players...

You have at your disposal a micro application icons_list.html which allows you to observe the set of available icons and to copy the css code with a simple click.

## Package managers

```console
npm install font_webatlas
```

## List of icons

Simply open the icons_list.html file to see the complete list of available icons.
You can click on the icon you want to import, the css code will be copied to the clipboard.

You can also consult the webAtlas.css file:
```css
/* The name of the icon here is warning and its UTF-8 code is 1d4 */
.icon.warning::before{content:"\1d4  ";}
```

You can either use the css code of the icon (warning) or use the UTF-8 code (1d4).

## Use

### This procedure shows you how to use icon class names and disregards UTF-8 codes

Import the webAtlas.css and webAtlas-fontface.css files :
```html
<link rel="stylesheet" type="text/css" href="node_modules/font_webatlas/dist/css/webAtlas.css">
<link rel="stylesheet" type="text/css" href="node_modules/font_webatlas/dist/css/webAtlas-fontface.css">
```

Then add the class 'icon' and the class corresponding to the icon :
```html
<!-- For the icons to the left of the element -->
<div class="icon login"> Sign in</div>

<!-- For icons inside an element -->
<div>
    <div class="icon div login"></div> Sign in
</div>

<!-- For the icons to the left of the element with an indentation on the right -->
<div class="icon div-indent login">Sign in</div>

<!-- For icons centered with indentation -->
<div class="icon div-indent-center login">Sign in</div>
```

## Precisions

This font also contains alpha-numeric characters, the digits are deliberately in monospace format (each digits use the same width) in order to easily create timer type interfaces.

The Light version does not contain an icon, only alpha-numeric characters with a finer grease.
