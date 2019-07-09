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

Dans cet exemple, les icones s'affichent dans le thème original. Consultez la partie "Choix du thème" pour modifier le thème.

## Utilisation

Ajoutez "icon nomIcone" dans l'attribut class d'un élément.
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

Voir la liste sur ce lien : lmoraes.fr/font_webatlas

Vous pouvez cliquer sur l'icone que vous souhaitez importer, le code css sera copié dans le presse papier.

## Choix du thème

3 thèmes sont disponibles :
- Original
- Sharp
- Outline

Incorporez le lien correspondant au style désiré :

```html
<!-- Thème Original -->
<link rel="stylesheet" type="text/css" href="node_modules/font_webatlas/dist/css/font-face/webAtlas-icons.css">

<!-- Thème Sharp -->
<link rel="stylesheet" type="text/css" href="node_modules/font_webatlas/dist/css/font-face/webAtlas-icons-sharp.css">

<!-- Thème Outline -->
<link rel="stylesheet" type="text/css" href="node_modules/font_webatlas/dist/css/font-face/webAtlas-icons-outline.css">
```

Cela vous permet de proposer plusieurs thèmes dans votre page ou application, simplement en interchangeant ces liens.

## Utiliser plusieurs thèmes en même temps

Le thème choisi définit le style "par défaut", mais vous pouvez "forcer" l'affichage d'un style différent sur une icone en particulier en ajoutant la class `original`, `sharp` ou `outline` :

```html
<!-- Affiche l'icone login dans le style par défaut -->
<div class="icon login"> Se connecter</div>

<!-- L'icone s'affiche en original -->
<div class="icon login original"> Se connecter</div>

<!-- L'icone s'affiche en sharp -->
<div class="icon login sharp"> Se connecter</div>

<!-- L'icone s'affiche en outline -->
<div class="icon login outline"> Se connecter</div>
```

## Contenu optionnels

Ajoutez ces liens optionnels pour plus de contenu :
```html
<!-- Ajoute les fontes WebAtlas et WebAtlas-Light (lettres et chiffres) -->
<link rel="stylesheet" type="text/css" href="dist/css/font-face/webAtlas-alphanumeric.css" />

<!-- Ajoute les icones geometric -->
<link rel="stylesheet" type="text/css" href="dist/css/webAtlas-geometric.css" />
<link rel="stylesheet" type="text/css" href="dist/css/font-face/webAtlas-geometric.css" />
```