# README

<p align="center">
    <img alt="font webatlas" src="https://lmoraes.fr/assets/git/font_webatlas.png" width="600">
</p>

## Introduction

WebAtlas est une police de caractère concu spécialement pour la création d'interfaces/applications web.

Elle contiens les icones les plus courantes pour la création facile et rapide de menus, d'espaces d'administration, de lecteurs...

Vous avez a disposition une micro application icons_list.html qui vous permet d'observer l'ensembles des icones disponibles et d'en copier le code css d'un simple clique.

## Package managers

```console
npm install font_webatlas
```

## Liste des icones

Ouvrez simplement le fichier icons_list.html pour voir la liste complète des icones disponibles.
Vous pouvez cliquer sur l'icone que vous souhaitez importer, le code css sera copié dans le presse papier.

Vous pouvez aussi consulter le fichier webAtlas.css :
```css
/* Le nom de l'icone ici est warning et son code UTF-8 est 1d4 */
.icon.warning::before{content:"\1d4  ";}
```

Vous pouvez soit utiliser le code css de l'icone (warning) ou utiliser directement le code UTF-8 (1d4).

## Utilisation

### Cette procédure vous indique comment utiliser les noms de class d'icones et faire abstraction des codes UTF-8

Importer les fichiers webAtlas.css et webAtlas-fontface.css :
```html
<link rel="stylesheet" type="text/css" href="node_modules/font_webatlas/dist/css/webAtlas.css">
<link rel="stylesheet" type="text/css" href="node_modules/font_webatlas/dist/css/webAtlas-fontface.css">
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

<!-- Pour les icones centrés avec indentation -->
<div class="icon div-indent-center login">Se connecter</div>
```

## Précisions

Cette fonte contient également les caractères alpha-numériques, les chiffres sont volontairement au format monospace (chaque chiffres utilisent la même largeur) afin de pouvoir facilement créer des interfaces de type timer.

La version Light ne contient pas d'icone, seulement les caractères alpha-numériques avec une graisse plus fine.
