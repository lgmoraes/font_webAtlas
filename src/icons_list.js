import './icons_list.css';
import data from '../icons.json';

var content = document.getElementById('content');
var divIcons = document.getElementById('divIcons');
var arrowUp = document.getElementById('arrowUp');
var switchTheme = document.getElementById('switchTheme');
var switchDisplayMode = document.getElementById('switchDisplayMode');
var inputClipboard = document.getElementById('inputClipboard');
var select_style = document.getElementById('select_style');
var search_input = document.getElementById('search_input');
var messageBox = document.getElementById('messageBox');
var btn_base = document.getElementById('btn_base');
var btn_editing = document.getElementById('btn_editing');
var btn_geometrics = document.getElementById('btn_geometrics');
var btn_games = document.getElementById('btn_games');
var btn_logos = document.getElementById('btn_logos');
var btn_copyClass = document.getElementById('btn_copyClass');
var btn_copyHTML = document.getElementById('btn_copyHTML');
var copyPanel = document.getElementById('copyPanel');
var copyPanel_btnClose = document.getElementById('copyPanel_btnClose');
var sliderIcon = document.getElementById('sliderIcon');
var sliderDiv = document.getElementById('sliderDiv');
var checkbox_addIcon = document.getElementById('checkbox_addIcon');
var icon_original = document.getElementById('icon_original');
var icon_sharp = document.getElementById('icon_sharp');
var icon_outline = document.getElementById('icon_outline');
var icon_selected = document.getElementById('icon_selected');
var voile = document.getElementById('voile');

var INTERVAL_SCROLL_RIGHT = 23;
var INTERVAL_SCROLL_LEFT = 10;
var LARGE_SCREEN = 650;
var TEXTS = {
    intro: "Click on the icon you want to copy",
    copyClass: "has been copied to the clipboard!",
    copyHTML: "HTML code has been copied!",
    trademark: "This work includes material that may be protected as a trademark in some jurisdictions. If you want to use it, you have to ensure that you have the legal right to do so and that you do not infringe any trademark rights. See the trademark owner for rules about appropriate use of their trademarks."
};

var iconsElements = [];
var lastLoadedList = null;
var activeBtn = null;
var selectedIcon = null;


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
    centerCopyPanel();

    if(largeScreen()) { 
        // Desktop
        if (content.scrollTop === 0)
            arrowUp.style.display = "none";
        else
            arrowUp.style.display = "block";
    }
    else {
        // Mobile
        if (document.documentElement.scrollTop === 0)
            arrowUp.style.display = "none";
        else
            arrowUp.style.display = "block";
    }
}

onresize = majInterface;

onscroll = majInterface;

content.onscroll = majInterface;

content.onclick = function(e) {
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
        openCopyPanel({
            name: ele.codeIcon,
            list: lastLoadedList,
            style: select_style.value
        });
    }
};

btn_copyClass.onclick = function() {
    copyClass();
}

btn_copyHTML.onclick = function() {
    copyHTML();
}

function copyClass() {
    var i = selectedIcon;
    var classes = getClasses();

    copyToClipboard(classes);
    showMessage([i.name, i.list, i.style].join(' '), TEXTS.copyClass);
}

function copyHTML() {
    var i = selectedIcon;
    var classes = getClasses();

    copyToClipboard(['<', i.div, ' class="', classes, '"></', i.div, '>'].join(""));
    showMessage([i.name, i.list, i.style].join(' '), TEXTS.copyHTML);
}

function copyToClipboard(txt) {
    inputClipboard.style.display = 'block';
    inputClipboard.value = txt;
    inputClipboard.select();
    document.execCommand('copy');
    inputClipboard.blur();
    inputClipboard.style.display = 'none';
}

function getClasses() {
    var i = selectedIcon;
    var classes = [];

    classes.push(i.name);
    if(i.list !== "base")
        classes.push(i.list);
    if(i.list !== "logos")
        classes.push(i.style);
    if(i.iconClass)
        classes.unshift(i.iconClass);
    
    return classes.join(" ");
}

select_style.onchange = function () {
    loadList();
};

messageBox.onclick = function () {
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

    showMessage("warning-triangle outline", TEXTS.trademark);
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
};

sliderIcon.children[0].onclick = function () {
    sliderVerticalActivation(this);
};

sliderDiv.children[0].onclick = function () {
    sliderVerticalActivation(this);
};

function sliderVerticalActivation (icon) {
    toggleClass("slider-vertical", icon);
    toggleClass("slider-vertical-on", icon);
    majSelectedIcon();
}

sliderIcon_icon.onclick = function() {
    sliderIcon.children[0].className = "icon slider-vertical-on";
    majSelectedIcon();
};
sliderIcon_icon_first.onclick = function() {
    sliderIcon.children[0].className = "icon slider-vertical";
    majSelectedIcon();
};
sliderDiv_i.onclick = function() {
    sliderDiv.children[0].className = "icon slider-vertical-on";
    majSelectedIcon();
};
sliderDiv_div.onclick = function() {
    sliderDiv.children[0].className = "icon slider-vertical";
    majSelectedIcon();
};

checkbox_addIcon.onclick = function() {
    toggleClass("checkbox3", this);
    toggleClass("checkbox3-checked", this);
    majSelectedIcon();
};

icon_original.onclick = function() {
    var i = selectedIcon;

    i.style = "original";
    icon_selected.className = "frame icon " + i.name + " " + i.list + " " + i.style;
};
icon_sharp.onclick = function() {
    var i = selectedIcon;

    i.style = "sharp";
    icon_selected.className = "frame icon " + i.name + " " + i.list + " " + i.style;
};
icon_outline.onclick = function() {
    var i = selectedIcon;

    i.style = "outline";
    icon_selected.className = "frame icon " + i.name + " " + i.list + " " + i.style;
};

copyPanel_btnClose.onmousedown = function () {
    closeCopyPanel();
};
voile.onmousedown = function () {
    closeCopyPanel();
};

function majSelectedIcon() {
    var i = selectedIcon;

    if(hasClass("checkbox3-checked", checkbox_addIcon))
        i.iconClass = hasClass("slider-vertical-on", sliderIcon.children[0]) ? "icon" : "icon-first";
    else
        i.iconClass = false;
    i.div = hasClass("slider-vertical-on", sliderDiv.children[0]) ? "i" : "div";
}

function openCopyPanel(icon) {
    selectedIcon = icon;
    majSelectedIcon();

    icon_original.className = "frame icon " + icon.name + " " + icon.list + " original";
    icon_sharp.className = "frame icon " + icon.name + " " + icon.list + " sharp";
    icon_outline.className = "frame icon " + icon.name + " " + icon.list + " outline";
    icon_selected.className = "frame icon " + icon.name + " " + icon.list + " " + icon.style;

    if (icon.list === "logos") {
        addClass("disabled", icon_original);
        addClass("disabled", icon_sharp);
        addClass("disabled", icon_outline);
    }

    copyPanel.style.display = "block";
    voile.style.display = "block";

    majInterface();
}

function closeCopyPanel() {
    copyPanel.style.display = "none";
    voile.style.display = "none";

    document.documentElement.style.overflowY = "";
}

function largeScreen() {
    return getInnerWidth() > LARGE_SCREEN;
}

function showMessage(iconClasses, message) {
    messageBox.style.display = "block";
    messageBox.className = "icon-first " + iconClasses;
    messageBox.innerHTML = message;
}

function search() {
    var s = search_input.value.toLowerCase();

    if (s === "") {
        showAllIcones();
        return false;
    }

    for (var i = 0; i < iconsElements.length; i++) {
        var e = iconsElements[i];
        var iconName = e.childNodes[1].firstChild.nodeValue;

        if (iconName.toLowerCase().indexOf(s) !== -1)
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

    if(list === undefined)
        list = lastLoadedList;
    else
        lastLoadedList = list;

    /* Sidebar buttons */
    if(activeBtn)
        removeClass('active', activeBtn);

    activeBtn = document.getElementById('btn_' + list);
    addClass('active', activeBtn);

    /* Icons list */
    divIcons.innerHTML = "";
    iconsElements = [];

    if(list === "logos") {
        categories = data.addons.logos.icons;
        select_style.disabled = true;
    }
    else {
        categories = data.icons[list];
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

function getInnerHeight() {
	return window.innerHeight || document.body.clientHeight || document.documentElement.clientHeight; // innerHeight MultiSupport.
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

function centerOnScreen(element) {
	element.style.top = (getInnerHeight()/2) - (element.offsetHeight/2) + "px";
    element.style.left = (getInnerWidth()/2) - (element.offsetWidth/2) + "px";
}

function centerCopyPanel() {
    if (copyPanel.style.display !== "block")
        return false;

    /* Reset*/
    copyPanel.style.height = "";
    copyPanel.style.top = "";
    copyPanel.style.bottom = "";

	centerOnScreen(copyPanel);
    
    if(copyPanel.style.top < "0") {
        copyPanel.style.height = "auto";
        copyPanel.style.top = "0";
        copyPanel.style.bottom = "0";
    }

    if(!largeScreen()) {
        copyPanel.style.left = "0";
        copyPanel.style.right = "0";

        document.documentElement.style.overflowY = "hidden";    // Evite un bug de scrolling
    }
    else {
        document.documentElement.style.overflowY = "";
    }
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
