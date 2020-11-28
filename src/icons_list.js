import './icons_list.css';
import data from '../icons.json';
import data_logos from '../node_modules/font_logos/logos.json';

var content = document.getElementById('content');
var divIcons = document.getElementById('divIcons');
var arrowUp = document.getElementById('arrowUp');
var switchTheme = document.getElementById('switchTheme');
var switchDisplayMode = document.getElementById('switchDisplayMode');
var inputClipboard = document.getElementById('inputClipboard');
var select_style = document.getElementById('select_style');
var search_input = document.getElementById('search_input');
var messageLine = document.getElementById('messageLine');
var messageLine_icon = document.getElementById('messageLine_icon');
var messageLine_message = document.getElementById('messageLine_message');
var btn_base = document.getElementById('btn_base');
var btn_editing = document.getElementById('btn_editing');
var btn_geometrics = document.getElementById('btn_geometrics');
var btn_games = document.getElementById('btn_games');
var btn_logos = document.getElementById('btn_logos');

var INTERVAL_SCROLL_RIGHT = 23;
var INTERVAL_SCROLL_LEFT = 10;
var LARGE_SCREEN = 650;
var TEXTS = {
    intro: "Clic on an item to copy the className on clipboard.",
    copied: "has been copied to the clipboard!",
    trademark: "This work includes material that may be protected as a trademark in some jurisdictions. If you want to use it, you have to ensure that you have the legal right to do so and that you do not infringe any trademark rights. See the trademark owner for rules about appropriate use of their trademarks."
};

var iconsElements = [];
var lastLoadedList = null;


/* INIT */

function init() {
    var urlParams = getUrlParams();
    var list = urlParams.list ? urlParams.list : 'base';

    loadList(list);

    for (var i = 0; i < data.styles.length; i++) {
        var style = data.styles[i];
        var e = document.createElement('option');
        e.value = style;
        e.innerHTML = ucfirst(style);
        select_style.appendChild(e);
    }

    showMessage("circle-info outline", TEXTS.intro);
}

var itemsScrolling = [];
var itemActual = null;

setInterval(auto_scrollRight, INTERVAL_SCROLL_RIGHT);
setInterval(auto_scrollLeft, INTERVAL_SCROLL_LEFT);

function auto_scrollRight() {
    for (var i = 0; i < itemsScrolling.length; i++) {
        var e = itemsScrolling[i];

        if (e === itemActual) {
            e.childNodes[1].scrollLeft++;
            return;
        }
    }
}

function auto_scrollLeft() {
    var newTab = [];

    for (var i = 0; i < itemsScrolling.length; i++) {
        var e = itemsScrolling[i];
        var t = e.childNodes[1];

        if (e !== itemActual) {
            t.scrollLeft--;

            // On retire les éléments dont le scroll est a 0
            if (t.scrollLeft > 0) {
                newTab.push(e);
            }
        }
        else {
            // itemActual doit être gardé dans la liste
            newTab.push(e);
        }
    }

    itemsScrolling = newTab;
}

onload = function() {
    init();

    // On doit attendre que la page soit chargé pour éviter des erreurs d'évènement
    onmousemove = function (e) {
        /** Gestion du scroll des noms d'icones **/
        var ele = e.target;
        
        if (hasClass("wrapper", ele) || hasClass("icon", ele)) {
            ele = ele.parentElement;
        }
        if (hasClass("btn", ele) && hasClass("item", ele)) {
            if (ele !== itemActual && ele.childNodes[1].scrollLeft === 0) {   // L'élément ne dois être ajouté qu'une fois
                itemsScrolling.push(ele);
            }

            itemActual = ele;
        }
        else {
            itemActual = null;
        }
    };
}

function majInterface() {
    if(largeScreen()) { 
        // Desktop
        messageLine.style.top = content.scrollTop + "px";

        if (content.scrollTop === 0)
            arrowUp.style.display = "none";
        else
            arrowUp.style.display = "block";
    }
    else {
        // Mobile
        messageLine.style.top = "70px";

        if (document.documentElement.scrollTop === 0)
            arrowUp.style.display = "none";
        else
            arrowUp.style.display = "block";
    }
}

onresize = majInterface;

onscroll = majInterface;

content.onscroll = majInterface;

content.onclick = function (e) {
    var ele = e.target;

    if(hasClass("btnDeploy", ele)) {
        toggleClass("active", ele);
        toggleClass("hide", ele.parentElement.lastChild);
        return;
    }

    if (hasClass("icon", ele)) {
        ele = ele.parentElement;
    }

    if (ele.className === "btn item") {
        inputClipboard.style.display = 'block';
        inputClipboard.value = ele.codeIcon;
        if (lastLoadedList !== "base" && lastLoadedList !== "logos")
            inputClipboard.value += " " + lastLoadedList;
        inputClipboard.select();
        document.execCommand('copy');
        inputClipboard.blur();
        inputClipboard.style.display = 'none';

        showMessage(ele.codeIcon, TEXTS.copied);
    }
};

select_style.onchange = function () {
    loadList();
};

messageLine.onclick = function () {
    this.style.display = "none";
};

btn_base.onclick = function () {
    loadList("base");
};

btn_editing.onclick = function () {
    loadList("editing");
};

btn_geometrics.onclick = function () {
    loadList("geometrics");
};

btn_games.onclick = function () {
    loadList("games");
};

btn_logos.onclick = function () {
    loadList("logos");

    showMessage("circle-info outline", TEXTS.trademark);
};

arrowUp.onclick = function () {
    if (largeScreen()) {
        content.scrollTop = 0;
    }
    else {
        document.documentElement.scrollTop = 0;
    }
};

search_input.onfocus = function () {
    addClass("active", search_input.parentElement);
};

search_input.onblur = function () {
    removeClass("active", search_input.parentElement);
};

search_input.onkeydown = function () {
    setTimeout(function () {
        search();
    }, 1);
}

function largeScreen() {
    return getInnerWidth() > LARGE_SCREEN;
}

function showMessage(icon, message) {
    messageLine.style.display = "block";
    messageLine_icon.className = "icon " + select_style.value + " " + lastLoadedList + " " + icon;
    messageLine_message.innerHTML = message;
}

function search() {
    var s = search_input.value;

    if (s === "") {
        showAllIcones();
        return false;
    }

    for (var i = 0; i < iconsElements.length; i++) {
        var e = iconsElements[i];
        var iconName = e.childNodes[1].firstChild.nodeValue;

        if (iconName.indexOf(s) !== -1)
            e.style.display = "";
        else
            e.style.display = "none";
    }
}

function showAllIcones() {
    for (var i = 0; i < iconsElements.length; i++) {
        iconsElements[i].style.display = "";
    }
}

function loadList(list) {
    var style = select_style.value || "original";   // "original" si la page n'est pas encore initialisée
    
    var icon = null;
    var category = null;
    var categories = null;

    divIcons.innerHTML = "";
    iconsElements = [];

    if(list === undefined)
        list = lastLoadedList;
    else
        lastLoadedList = list;

    if(list === "logos") {
        categories = data_logos["icons"];
        select_style.disabled = true;
    }
    else {
        categories = data[list];
        select_style.disabled = false;
    }

    for (category in categories) {
        var icones = categories[category];
        var newH2 = document.createElement('h2');
        var newAccordion = document.createElement('div');
        var newBtnDeplay = document.createElement('div');
        var newList = document.createElement('div');

        newH2.innerHTML = category;
        addClass("accordion", newAccordion);
        addClass("btnDeploy icon arrow3-down active", newBtnDeplay);
        addClass("list", newList);

        newAccordion.appendChild(newH2);
        newAccordion.appendChild(newBtnDeplay);
        newAccordion.appendChild(getHr());
        newAccordion.appendChild(newList);
        divIcons.appendChild(newAccordion);

        for (icon in icones) {
            var newDiv = document.createElement('div');
            var newDivIcon = document.createElement('div');
            var newDivWrapper = document.createElement('div');
            var newDivTitle = document.createElement('div');

            newDivIcon.className = "icon " + icon;
            addClass(style, newDivIcon);
            addClass(list, newDivIcon);
            newDiv.appendChild(newDivIcon);
            newDiv.className = "btn item";
            newDiv.codeIcon = icon;

            newDivWrapper.className = "wrapper";

            newDivTitle.className = "title";
            newDivTitle.appendChild(document.createTextNode(icon));
            newDiv.appendChild(newDivTitle);
            newDiv.appendChild(newDivWrapper);

            iconsElements.push(newDiv);
            newList.appendChild(newDiv);

            if (newDivTitle.scrollWidth > newDivTitle.offsetWidth) {
                var empty = document.createElement("span");

                empty.style.width = "5px";
                empty.style.display = "inline-block";
                newDivTitle.appendChild(empty);   // Permet un scrolling total
            }
        }
    }
}

switchTheme.onclick = function () {
    toggleClass("moon", this);
    toggleClass("sun", this);

    toggleClass("darkMode", document.body);
};

switchDisplayMode.onclick = function () {
    toggleClass("apps3", this);
    toggleClass("apps", this);

    toggleClass("gridMode", content);
};

function getHr() {
    var element = document.createElement('div');
    element.className = "hr";

    return element;
}

function getInnerWidth() {
    return window.innerWidth || document.body.clientWidth || document.documentElement.clientWidth; // Pour obtenir la largeur disponible, fonctionne toutes correctement.
}

// fallback de Object.assign() pour IE11
function assign(target, source) {
    for (var key in source) {
        target[key] = source[key];
    }
}

function ucfirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function getUrlParams() {
    var obj = {};
    var url = window.location.search;

    if (url) {
        var params = url.substring(1).split("&");

        for (var i = 0; i < params.length; i++) {
            var p = params[i];
            p = p.split("=");
            obj[p[0]] = p[1];
        }
    }

    return obj;
}

// MANIPULATION DE CLASS
// Utile pour IE < 10 (classList n'étant pas compatible avant Internet Explorer 10)

function hasClass(c, element) {
    if (element.className == '')
        return false;

    var classes = element.className.split(' ');
    return classes.indexOf(c) !== -1;
}

function addClass(c, element) {
    if (hasClass(c, element))
        return false;

    element.className += " " + c;
    return true;
}

function removeClass(c, element) {
    if (!hasClass(c, element))
        return false;

    var classes = element.className.split(' ');
    var newClass = "";
    var indexToRemove = classes.indexOf(c);

    classes.splice(indexToRemove, 1);

    if (classes.length > 0)
        newClass = classes[0];

    for (var i = 1; i < classes.length; i++) {
        newClass += " " + classes[i];
    }

    element.className = newClass;

    return true;
}

function toggleClass(c, element) {	/* Ajoute la class si elle n'existe pas ou Supprime la class si elle existe */
    if (!removeClass(c, element)) {
        addClass(c, element);
        return true;
    }

    return false;
}
