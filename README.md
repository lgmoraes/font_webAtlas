# README

<p align="center">
    <img alt="font webatlas" src="http://lmoraes.fr/assets/git/font_webatlas.png" width="600">
</p>

## Introduction

WebAtlas est une police de caractère concu spécialement pour la création d'interfaces/applications web.

Elle contiens les icones les plus courantes pour la création facile et rapide de menus, d'espaces d'administration, de lecteurs...

## Package managers

```console
yarn add https://github.com/lgmoraes/Font_webatlas.git
```

## Liste des icones

La liste des icones est visible dans le fichier webAtlas.css :
```css
/* Le nom de l'icone ici est warning et son code UTF-8 est 1d4 */
.icon.warning::before{content:"\1d4  ";}
```

Bien sûr, si vous utilisez le nom de class de l'icone vous pouvez faire abstraction du code UTF-8

## Utilisation

### Cette procédure vous indique comment utiliser les noms de class d'icones et faire abstraction des codes UTF-8

Importer le fichier webAtlas.css :
```html
<link rel="stylesheet" type="text/css" href="node_modules/font_webatlas/css/webAtlas.css">
```

Puis ajouter la class 'icon' et la class correspondante a l'icon :
```html
<!-- Pour les icones à gauche de l'element -->
<div class="icon login">Se connecter</div>

<!-- Pour les icones à l'interieure d'un element -->
<div>
    <div class="icon div login"></div> Se connecter
</div>

<!-- Pour les icones à gauche de l'element avec une indentation sur la droite -->
<div class="icon div-indent login">Se connecter</div>
```

## Précisions

Cette fonte contient également les caractères alpha-numériques, les chiffres sont volontairement au format monospace (chaque chiffres utilisent la même largeur) afin de pouvoir facilement créer des interfaces de type timer.

La version Light ne contient pas d'icone, seulement les caractères alpha-numériques avec une graisse plus fine.


