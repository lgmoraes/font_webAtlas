# README

<p align="center">
    <img alt="font webatlas" src="https://lmoraes.fr/assets/git/font_webatlas.png" width="600">
</p>

## Introduction

Font_WebAtlas c'est des polices d'icones conçus spécialement pour la création d'interfaces/applications web.

Elles contiennent les icones les plus courantes pour la création facile et rapide de menus, d'espaces d'administration, de lecteurs...

## Package managers

```console
npm install font_webatlas
```

## Démmarage rapide

Importez les fichiers css comme indiqué ci-dessous :
```html
<link rel="stylesheet" type="text/css" href="node_modules/font_webatlas/dist/css/webAtlas-icons.css">
<link rel="stylesheet" type="text/css" href="node_modules/font_webatlas/dist/css/font-face/webAtlas-icons.css">
```

## Utilisation

Ajoutez 'icon nomIcone' dans l'attribut class d'un élément.
```html
<!-- Affiche l'icone à gauche de l'élément -->
<div class="icon login"> Se connecter</div>
```

Vous pouvez ajuster le rendu en ajoutant une des class suivantes :
* div
* div-indent
* div-indent-center

```html
<!-- Affiche l'icone en tant que block -->
<div class="bouton_d_exemple">
    <div class="icon div login"></div> Se connecter
</div>

<!-- Affiche l'icone en tant que block suivi d'une marge -->
<div class="bouton_d_exemple">
    <div class="icon div-indent login"></div>Se connecter
</div>

<!-- Affiche l'icone en tant que block avec une marge à gauche et à droite -->
<div class="bouton_d_exemple">
    <div class="icon div-indent-center login"></div>Se connecter
</div>
```

## Liste des icones

Ouvrez simplement le fichier `icons_list.html` pour voir la liste complète des icones disponibles.
Vous pouvez cliquer sur l'icone que vous souhaitez importer, le code css sera copié dans le presse papier.

## Style alternatif

Si le style `Sharp` convient mieux au visuel de votre site que le style par défaut, remplacez le lien :
```html
<link rel="stylesheet" type="text/css" href="node_modules/font_webatlas/dist/css/font-face/webAtlas-icons.css">
```
par celui-ci :
```html
<link rel="stylesheet" type="text/css" href="node_modules/font_webatlas/dist/css/font-face/webAtlas-icons-sharp.css">
```