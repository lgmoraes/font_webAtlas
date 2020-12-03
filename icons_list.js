(()=>{"use strict";var r={724:(r,n,e)=>{e.d(n,{Z:()=>i});var o=e(645),t=e.n(o)()((function(r){return r[1]}));t.push([r.id,"body {\r\n    height: 100%;\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    color:rgb(80, 80, 80);\r\n    background: rgb(222, 222, 222);\r\n    font-family: \"WebAtlas\";\r\n}\r\n\r\nh2 {\r\n    text-align: left;\r\n    font-family: 'WebAtlas';\r\n    font-size: 25px;\r\n    margin: 8px;\r\n    margin-top: 30px;\r\n}\r\n\r\n#sidebar h2 {\r\n    text-align: center;\r\n    color:rgb(111, 186, 255);\r\n}\r\n\r\nselect {\r\n    width: 180px;\r\n    padding: 3px 10px;\r\n    border-radius: 10px;\r\n    color:rgb(53, 55, 57);\r\n    font-family: webAtlas;\r\n    font-size: 1.2em;\r\n    background: none;\r\n    border: 2px solid rgb(53, 55, 57);\r\n    margin: 20px auto;\r\n    display: block;\r\n    outline: none;\r\n}\r\nselect:disabled {\r\n    opacity: .5;\r\n}\r\n\r\nselect option {\r\n    color: white;\r\n    background-color: rgb(60, 60, 60);\r\n}\r\n\r\n#header, #sidebar {\r\n    box-sizing: border-box;\r\n    position: fixed;\r\n}\r\n\r\n#header {\r\n    width: 100%;\r\n    height: 80px;\r\n    padding: 0 .5em;\r\n    font-size: 40px;\r\n    line-height: 40px;\r\n    background-color: white;\r\n}\r\n\r\nh1 {\r\n    line-height: 80px;\r\n    vertical-align: top;\r\n    font-weight: normal;\r\n    margin: 0;\r\n    font-size: 40px;\r\n    display: inline-block;\r\n}\r\n\r\n#search {\r\n    width: 200px;\r\n    height: 40px;\r\n    line-height: 40px;\r\n    padding-left: .5em;\r\n    color:rgb(140, 140, 140);\r\n    font-size: 26px;\r\n    background-color: rgb(250, 250, 250);\r\n    box-shadow:\r\n        inset 0 0 12px rgba(150, 150, 150, .45),\r\n        inset 0 1px rgba(255, 255, 255, 0.1),\r\n        inset 0 -1px 3px rgba(0, 0, 0, 0.3),\r\n        inset 0 0 0 1px rgba(255, 255, 255, 0.1),\r\n        0 1px 2px rgba(0, 0, 0, 0.15);\r\n    border-radius: 20px;\r\n    vertical-align: top;\r\n    position: fixed;\r\n    top: 20px;\r\n    left: 300px;\r\n}\r\n#search input {\r\n    width: 120px;\r\n    color:rgb(140, 140, 140);\r\n    line-height: 40px;\r\n    margin-left: 6px;\r\n    font-size: 25px;\r\n    font-family: WebAtlas;\r\n    border: none;\r\n    background: none;\r\n    outline: none;\r\n}\r\n\r\n#sidebar {\r\n    width: 250px;\r\n    padding: 1em;\r\n    background: white;\r\n    box-shadow: inset 0 0 3em rgba(0, 0, 0, .3);\r\n    top: 80px;\r\n    left: 0;\r\n    bottom: 0;\r\n    position: fixed;\r\n}\r\n#sidebar .btn {\r\n    background-color: white;\r\n    line-height: 1.5em;\r\n    padding: .1em 0;\r\n    margin-bottom: 5px;\r\n    font-size: 1.2em;\r\n    text-align: center;\r\n    box-sizing: border-box;\r\n}\r\n\r\n#content {\r\n    overflow: auto;\r\n    top: 80px;\r\n    left: 250px;\r\n    right: 0;\r\n    bottom: 0;\r\n    position: fixed;\r\n}\r\n#content.gridMode .item  {\r\n    width: 60px;\r\n    height: 60px;\r\n    line-height: 50px;\r\n    margin: 0;\r\n}\r\n#content.gridMode .item .title, #content.gridMode .item .wrapper {\r\n    display: none;\r\n}\r\n\r\n#divIcons {\r\n    padding: 1em;\r\n}\r\n\r\n#arrowUp {\r\n    width: 40px;\r\n    height: 40px;\r\n    line-height: 40px;\r\n    text-align: center;\r\n    font-size: 22px;\r\n    border-radius: 100%;\r\n    cursor: pointer;\r\n    background-color: white;\r\n    position: fixed;\r\n    right: 30px;\r\n    bottom: 30px;\r\n}\r\n#arrowUp:active {\r\n    box-shadow: inset 0 -1px 18px rgba(78, 82, 87, 0.6), inset 0 0 0 1px rgba(255, 255, 255, 0.1);\r\n    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), transparent 50%, rgba(255, 255, 255, 0.07));\r\n}\r\n\r\n#menuTopRight {\r\n    position: fixed;\r\n    top: 20px;\r\n    right: 20px;\r\n}\r\n\r\n#menuTopRight .btn {\r\n    width: 40px;\r\n    height: 40px;\r\n    line-height: 40px;\r\n    box-sizing: border-box;\r\n    text-align: center;\r\n    font-size: 20px;\r\n    border-radius: 0;\r\n    cursor: pointer;\r\n}\r\n\r\n#menuTopRight .btn:first-child {\r\n    border-top-left-radius: 8px;\r\n    border-bottom-left-radius: 8px;\r\n}\r\n#menuTopRight .btn:last-child {\r\n    border-top-right-radius: 8px;\r\n    border-bottom-right-radius: 8px;\r\n}\r\n\r\n#messageLine {\r\n    font-family: 'WebAtlas';\r\n    line-height: 28px;\r\n    font-size: 20px;\r\n    padding: .3em .5em;\r\n    box-sizing: border-box;\r\n    overflow: hidden;\r\n    background: rgb(111, 186, 255);\r\n    cursor: pointer;\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    top: 0;\r\n    z-index: 1;\r\n}\r\n\r\n.hr {\r\n    height: 2px;\r\n    margin-bottom: 5px;\r\n    background-color: rgb(60, 60, 60);\r\n}\r\n\r\n.accordion h2 {\r\n    color: inherit;\r\n    display: inline-block;\r\n}\r\n\r\n.hr, .accordion h2 {\r\n    width: 300px;\r\n    max-width: 100%;\r\n}\r\n\r\n.accordion .btnDeploy {\r\n    font-size: 25px;\r\n    margin-left: -50px;\r\n    cursor: pointer;\r\n    display: inline-block;\r\n}\r\n\r\n.btnDeploy {\r\n    transform: rotate(0deg);\r\n    transition: .3s;\r\n}.btnDeploy.active {\r\n    transform: rotate(-180deg);\r\n}\r\n\r\n.accordion .list {\r\n    overflow: hidden;\r\n    transition: .3s;\r\n}\r\n.accordion .list.hide {\r\n    display: none;\r\n}\r\n\r\n.btn {\r\n    background: rgb(240, 240, 240);\r\n    border-radius: 3px;\r\n    box-shadow:\r\n        inset 0 1px rgba(255, 255, 255, 0.1),\r\n        inset 0 -1px 3px rgba(0, 0, 0, 0.3),\r\n        inset 0 0 0 1px rgba(255, 255, 255, 0.1),\r\n        0 1px 2px rgba(0, 0, 0, 0.15);\r\n    cursor: pointer;\r\n}\r\n.btn:active, .btn.active {\r\n    box-shadow: inset 0 -1px 18px rgba(78, 82, 87, 0.6), inset 0 0 0 1px rgba(255, 255, 255, 0.1);\r\n    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), transparent 50%, rgba(255, 255, 255, 0.07));\r\n}\r\n\r\n.item {\r\n    width: 100px;\r\n    box-sizing: border-box;\r\n    padding: 5px;\r\n    margin: 4px;\r\n    font-size: 30px;\r\n    text-align: center;\r\n    background-clip: border-box;\r\n    vertical-align: top;\r\n    animation: flipInX .5s;\r\n    display: inline-block;\r\n    position: relative;\r\n}\r\n.item .wrapper {\r\n    position: absolute;\r\n    height: 22px;\r\n    left: 5px;\r\n    right: 5px;\r\n    bottom: 5px;\r\n    background: linear-gradient(to right,\r\n        rgba(240,240,240,1) 0%,\r\n        rgba(240,240,240,0) 5%,\r\n        rgba(240,240,240,0) 95%,\r\n        rgba(240,240,240,1) 100%\r\n    );\r\n}\r\n.item .title {\r\n    overflow: hidden;\r\n    padding: 0 10px;\r\n    font-size: 18px;\r\n    white-space: nowrap;\r\n}\r\n\r\n.item:active .wrapper {\r\n    display: none;\r\n}\r\n\r\n\r\n/*** ANIMATIONS ***/\r\n\r\n.fadeIn {\r\n    animation: fadeIn .5s;\r\n}\r\n\r\n@keyframes fadeIn {\r\n    0%   {opacity: 0;}\r\n    100% {opacity: 1;}\r\n}\r\n\r\n@keyframes flipInX {\r\n    0%   {transform: rotateX(90deg);}\r\n    100% {transform: rotateX(0deg);}\r\n}\r\n\r\n\r\n/*** THEME SOMBRE ***/\r\n\r\nbody.darkMode {\r\n    color: #ddd;\r\n    text-shadow: 1px 1px 0 black;\r\n    background: #373738;\r\n}\r\nbody.darkMode #header {\r\n    border-bottom: 1px solid #26272b;\r\n    background: linear-gradient(#646464, #333);\r\n}\r\n\r\nbody.darkMode h1, body.darkMode h2, body.darkMode .btnDeploy {\r\n    color:rgb(210, 167, 23);\r\n}\r\nbody.darkMode .btnDeploy {\r\n    text-shadow: none;\r\n}\r\nbody.darkMode .hr {\r\n    background-color: rgb(210, 167, 23);\r\n}\r\n\r\nbody.darkMode #sidebar h2 {\r\n    color: rgb(53, 55, 57);\r\n    text-shadow: 0 1px 0 rgba(255, 255, 255, .25);\r\n}\r\n\r\nbody.darkMode .btn, body.darkMode #arrowUp {\r\n    background-color: rgba(27, 27, 29, .9);\r\n    border: 1px solid rgba(0, 0, 0, .4);\r\n    border-bottom-color: rgb(17, 17, 17);\r\n    box-shadow:\r\n        inset 0 1px rgba(255,255,255,0.1),\r\n        inset 0 -1px 3px rgba(0,0,0,0.3),\r\n        inset 0 0 0 1px rgba(255,255,255,0.1),\r\n        0 1px 2px rgba(0,0,0,0.15);\r\n}\r\n\r\nbody.darkMode #arrowUp {\r\n    background: rgba(27, 27, 29, .9);\r\n}\r\n\r\nbody.darkMode .wrapper {\r\n    background: linear-gradient(to right,\r\n        rgba(27, 27, 29,1) 0%,\r\n        rgba(27, 27, 29,0) 5%,\r\n        rgba(27, 27, 29,0) 95%,\r\n        rgba(27, 27, 29,1) 100%\r\n    );\r\n}\r\n\r\nbody.darkMode #sidebar {\r\n    border-right: 1px solid #313131;\r\n    background: #737373;\r\n    box-shadow: inset 0 0 5em rgba(0, 0, 0, 0.6);\r\n}\r\n\r\nbody.darkMode #sidebar .btn {\r\n    text-shadow: 0 1px rgba(0,0,0,0.8);\r\n    background: #46494d;\r\n    line-height: 1.3em;\r\n    background-clip: border-box;\r\n    border: 1px solid #111;\r\n    border-bottom-color: rgb(17, 17, 17);\r\n    border-radius: 3px;\r\n    box-shadow: \r\n        inset 0 1px rgba(255,255,255,0.1),\r\n        inset 0 -1px 3px rgba(0,0,0,0.3),\r\n        inset 0 0 0 1px rgba(255,255,255,0.1),\r\n        0 1px 2px rgba(0,0,0,0.15);\r\n    background-image: linear-gradient(to bottom, rgba(255,255,255,0.08),rgba(255,255,255,0) 50%,rgba(0,0,0,0) 51%,rgba(0,0,0,0.25));\r\n}\r\nbody.darkMode #sidebar .btn:active, body.darkMode #sidebar .btn.active {\r\n    background: #393d40;\r\n    box-shadow: inset 0 -1px 18px rgba(0,0,0,0.8),inset 0 0 0 1px rgba(255,255,255,0.1);\r\n    background-image: linear-gradient(to bottom, rgba(0,0,0,0.1),transparent 50%,rgba(255,255,255,0.07));\r\n}\r\n\r\nbody.darkMode #messageLine {\r\n    color: rgb(80, 80, 80);\r\n    background-color: rgb(210, 167, 23);\r\n    text-shadow: none;\r\n}\r\n\r\nbody.darkMode #search {\r\n    color: #ddd;\r\n    background: rgba(27, 27, 29, .9);\r\n    border: 1px solid rgba(0, 0, 0, .4);\r\n    box-shadow:\r\n        inset 0 1px rgba(255, 255, 255, 0.1),\r\n        inset 0 -1px 3px rgba(0, 0, 0, 0.3),\r\n        inset 0 0 0 1px rgba(255, 255, 255, 0.1),\r\n        0 1px 2px rgba(0, 0, 0, 0.15);\r\n    margin-top: -1px;\r\n}\r\nbody.darkMode #search input {\r\n    color: #ddd;\r\n}\r\n\r\n\r\n/*** MEDIAS QUERIES ***/\r\n\r\n@media (max-width: 650px) {\r\n    #header {\r\n        height: 70px;\r\n    }\r\n\r\n    h1 {\r\n        line-height: 70px;\r\n    }\r\n\r\n    #header, #sidebar, #content {\r\n        width: auto;\r\n        top: 0;\r\n        left: 0;\r\n        display: block;\r\n        position: relative;\r\n    }\r\n\r\n    #sidebar {\r\n        text-align: center;\r\n    }\r\n\r\n    #sidebar .btn {\r\n        width: 48%;\r\n        margin: 2px;\r\n        display: inline-block;\r\n    }\r\n    #sidebar #btn_logos {\r\n        width: 60%;\r\n    }\r\n\r\n\r\n    #messageLine {\r\n        position: fixed;\r\n        top: 70px;\r\n    }\r\n\r\n    #divIcons {\r\n        position: relative;\r\n    }\r\n\r\n    #menuTopRight {\r\n        top: 15px;\r\n        right: 15px;\r\n    }\r\n\r\n    #search {\r\n        width: 45px;\r\n        margin: 0;\r\n        white-space: nowrap;\r\n        overflow: hidden;\r\n        transition: width .5s;\r\n        z-index: 2;\r\n        position: fixed;\r\n        top: 15px;\r\n        right: 120px;\r\n        left: unset;\r\n    }\r\n    #search:hover, #search.active {\r\n        width: 170px;\r\n    }\r\n\r\n    #arrowUp {\r\n        z-index: 1;\r\n    }\r\n\r\n    body.darkMode #sidebar {\r\n        border-right: none;\r\n        border-bottom: 1px solid #313131;\r\n    }\r\n\r\n    .accordion .list {\r\n        text-align: center;\r\n    }\r\n}\r\n@media (max-width: 460px) {\r\n    #header {\r\n        padding: 0 .3em;\r\n    }\r\n\r\n    h1 {\r\n        width: 150px;\r\n        line-height: 33px;\r\n        font-size: 36px;\r\n    }\r\n}",""]);const i=t},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e=r(n);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},n.i=function(r,e,o){"string"==typeof r&&(r=[[null,r,""]]);var t={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(t[a]=!0)}for(var d=0;d<r.length;d++){var l=[].concat(r[d]);o&&t[l[0]]||(e&&(l[2]?l[2]="".concat(e," and ").concat(l[2]):l[2]=e),n.push(l))}},n}},379:(r,n,e)=>{var o,t=function(){var r={};return function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}r[n]=e}return r[n]}}(),i=[];function a(r){for(var n=-1,e=0;e<i.length;e++)if(i[e].identifier===r){n=e;break}return n}function d(r,n){for(var e={},o=[],t=0;t<r.length;t++){var d=r[t],l=n.base?d[0]+n.base:d[0],s=e[l]||0,c="".concat(l," ").concat(s);e[l]=s+1;var p=a(c),g={css:d[1],media:d[2],sourceMap:d[3]};-1!==p?(i[p].references++,i[p].updater(g)):i.push({identifier:c,updater:h(g,n),references:1}),o.push(c)}return o}function l(r){var n=document.createElement("style"),o=r.attributes||{};if(void 0===o.nonce){var i=e.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(r){n.setAttribute(r,o[r])})),"function"==typeof r.insert)r.insert(n);else{var a=t(r.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var s,c=(s=[],function(r,n){return s[r]=n,s.filter(Boolean).join("\n")});function p(r,n,e,o){var t=e?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(r.styleSheet)r.styleSheet.cssText=c(n,t);else{var i=document.createTextNode(t),a=r.childNodes;a[n]&&r.removeChild(a[n]),a.length?r.insertBefore(i,a[n]):r.appendChild(i)}}function g(r,n,e){var o=e.css,t=e.media,i=e.sourceMap;if(t?r.setAttribute("media",t):r.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleSheet)r.styleSheet.cssText=o;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(o))}}var u=null,b=0;function h(r,n){var e,o,t;if(n.singleton){var i=b++;e=u||(u=l(n)),o=p.bind(null,e,i,!1),t=p.bind(null,e,i,!0)}else e=l(n),o=g.bind(null,e,n),t=function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(e)};return o(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap)return;o(r=n)}else t()}}r.exports=function(r,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var e=d(r=r||[],n);return function(r){if(r=r||[],"[object Array]"===Object.prototype.toString.call(r)){for(var o=0;o<e.length;o++){var t=a(e[o]);i[t].references--}for(var l=d(r,n),s=0;s<e.length;s++){var c=a(e[s]);0===i[c].references&&(i[c].updater(),i.splice(c,1))}e=l}}}}},n={};function e(o){if(n[o])return n[o].exports;var t=n[o]={id:o,exports:{}};return r[o](t,t.exports,e),t.exports}e.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return e.d(n,{a:n}),n},e.d=(r,n)=>{for(var o in n)e.o(n,o)&&!e.o(r,o)&&Object.defineProperty(r,o,{enumerable:!0,get:n[o]})},e.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),(()=>{var r=e(379),n=e.n(r),o=e(724);n()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;const t=JSON.parse('{"styles":["original","sharp","outline"],"base":{"General":{"newFile":"ɏ","folder":"ɐ","folder-open":"ɘ","save":"ɑ","copy":"ɒ","paste":"ɓ","cut":"ɔ","newFile2":"Ɏ","folder-add":"ɗ","copy2":"ɕ","paste2":"ɖ","bell":"ñ","email":"ĸ","email-open":"Ĺ","attachment":"Ļ","command":"û","warning":"Ǖ","warning-triangle":"ǔ","download":"ȗ","upload":"Ș","file":"Ȑ","file-download":"ȑ","file-upload":"Ȓ","downloadData":"ȓ","downloadData2":"Ȕ","idCard":"ø","user":"Ψ","addUser":"Ω","removeUser":"Ϊ","modifyUser":"Ϋ","users":"ά","userGroup":"έ","user2":"ή","addUser2":"ί","removeUser2":"ΰ","modifyUser2":"α","users2":"β","userGroup2":"γ","login":"А","logout":"Б","power":"В","power2":"Г","gear":"Ȣ","gear2":"ȣ","gear3":"Ȥ","gear4":"ȥ","gear5":"Ȧ","gear6":"ȧ","gear7":"Ȩ","gear8":"ȩ","settings":"ȯ","settings2":"Ȱ","settings3":"ȱ","dustbin":"Ϸ","dustbin2":"ϸ","resize":"ņ","fullscreen":"Ň","reload":"Ǻ","reload-left":"ǻ","reload2":"Ǽ","reload3":"ǽ","reload4":"ǹ","dialogue-left":"Ϗ","dialogue":"ύ","dialogue-right":"ϐ","dialogue2-left":"ϑ","dialogue2":"ώ","dialogue2-right":"ϒ","time":"Ŏ","time-rewind":"Ő","timer":"ō","timer2":"ŏ","apps":"ɨ","apps2":"ɪ","apps3":"ɩ","menu":"ɬ","menu-compact":"ɭ","menu2":"ɮ","menu2-vertical":"ɯ","grid":"ɡ","home":"ˌ","home2":"ˍ","magnify":"є","padlock":"ф","padlock-unlock":"х","network":"ѭ","database":"ĩ","window":"Ē","application":"Ĕ","application-ok":"ĕ","application-ko":"Ė","application-warning":"ė","application-gear":"Ę","application-multiple":"ē","cloud":"Ī","cloud-download":"ī","cloud-upload":"Ĭ","cloud-swap":"ĭ","cloud-sync":"Į","cloud-ok":"į","cloud-ko":"İ","cloud-warning":"ı","cloud-warning2":"Ĳ","calendar":"ŕ","calendar-days":"Ŗ","calendar-weeks":"ŗ","calendar-months":"Ř","calendar-modify":"ř","calendar-add":"Ś","calendar-remove":"ś","calendar-valide":"Ŝ","calendar-warning":"ŝ","calendar-lock":"Ş"},"Medias":{"image":"ɠ","vector":"ɝ","video":"ɟ","music":"ɞ","waveform":"ȷ","waveform2":"ȸ","waveform3":"ȹ","spreadsheet":"ɢ","spreadsheet2":"ɣ","spreadsheet3":"ɤ","cube":"ϝ","cube-stroke":"Ϟ"},"Hardware":{"camera":"ġ","camera2":"Ģ","webcam":"ģ","micro":"Ĥ","headset":"þ","print":"ý","screen":"ę","screen-play":"ě","screen-gear":"Ě","mobile":"Ğ","tablet":"ĝ","mouse":"Ġ","keyboard":"ğ","speaker":"ĥ","chip":"Ħ","server":"ħ","server2":"Ĩ"},"Divers":{"cookie":"è","bulb":"ï","lightning":"ð","bookmark":"ò","hierarchie":"ê","building":"ë","crown":"í","tutorial":"î","map":"ó","archive":"õ","bug":"ö","weight":"ù","planet":"ѫ","planet-invert":"Ѭ","plug":"Ѯ","plug-off":"ѯ","share":"ʾ","star":"ʾ","star-half":"ʿ","star-empty":"ˀ","heart":"Ϥ","infinite":"ϣ","puzzle":"Ϫ","thumbUp":"Ϯ","thumbDown":"ϯ","badge":"ϲ","smiley":"ϳ","smiley-neutral":"ϴ","smiley-sad":"ϵ","checkerboard":"ϥ","checkerboard2":"Ϧ","experimental":"ϩ","wifi":"š","wifi-off":"Ţ","signal":"Ť","rss":"ť","flame":"Я","flame2":"а","cursor":"Ǫ","hourglass":"ǫ","statistics":"ļ","statistics2":"ľ","statistics3":"Ŀ","statistics4":"ŀ","barcode":"Ũ","qrcode":"ũ","circlecode":"Ŧ","box":"ϛ","box-stroke":"Ϝ","forbidden":"Э","forbidden2":"Ю","sun":"Ѡ","moon":"ѡ","pin":"Ѱ","pin2":"ѱ","postIt":"ғ","clickableImage":"Җ"},"Ok Ko":{"ok":"Ą","ko":"ą","ok-thin":"Ă","ko-thin":"ă","ok-thinner":"Ā","ko-thinner":"ā","ok-large":"Ć","ko-large":"ć","ok-larger":"Ĉ","ko-larger":"ĉ","ok-double":"Ċ","ko-double":"ċ","ok-double2":"Č","ko-double2":"č","ok-mini":"Ď","ko-mini":"ď"},"Plus Minus":{"plus":"ʛ","minus":"ʜ","plus-thin":"ʙ","minus-thin":"ʚ","plus-thinner":"ʗ","minus-thinner":"ʘ","plus-large":"ʝ","minus-large":"ʞ","plus-larger":"ʟ","minus-larger":"ʠ","plus-double":"ʡ","minus-double":"ʢ","plus-double2":"ʣ","minus-double2":"ʤ","plus-mini":"ʥ","minus-mini":"ʦ"},"Circles":{"circle-ok":"ƭ","circle-ko":"Ʈ","circle-ok-handwriting":"Ư","circle-ko-handwriting":"ư","circle-plus":"Ʊ","circle-minus":"Ʋ","circle-info":"ƶ","circle-warning":"Ƶ","circle-arrowLeft":"Ʒ","circle-arrowUp":"Ƹ","circle-arrowRight":"ƹ","circle-arrowDown":"ƺ","circle-play":"ƻ","circle-pause":"Ƽ","circle-download":"ƽ","circle-upload":"ƾ"},"Formular":{"radio":"ɱ","radio-checked":"ɰ","checkbox":"ɳ","checkbox-checked":"ɲ","radio2":"ɵ","radio2-checked":"ɴ","checkbox2":"ɷ","checkbox2-checked":"ɶ","radio3":"ɹ","radio3-checked":"ɸ","checkbox3":"ɻ","checkbox3-checked":"ɺ","slider":"ʃ","slider-on":"ʄ","slider-vertical":"ʅ","slider-vertical-on":"ʆ"},"Player":{"play":"Ա","pause":"Բ","stop":"Գ","rec":"԰","slow":"Դ","next":"Ե","previous":"Զ","fastForward":"Է","rewind":"Ը","eject":"Թ","speaker-high":"Ժ","speaker-medium":"Ի","speaker-low":"Լ","speaker-mute":"Խ","loop":"Ծ","loopUnique":"Կ","random":"Հ","addToList":"Ձ"},"Arrows":{"arrow-swap":"ӣ","move":"Ӥ","move-alt":"ӥ","arrow-horizontal":"Ӧ","arrow-vertical":"ӧ","arrow-diagonal":"Ө","arrow-diagonal2":"ө","arrow-align-horizontal":"Ӫ","arrow-align-vertical":"ӫ","arrow-align-left":"Ӭ","arrow-align-top":"ӭ","arrow-align-right":"Ӯ","arrow-align-down":"ӯ","arrow-resize-up":"Ӱ","arrow-resize-down":"ӱ","arrow-left":"ҹ","arrow-up":"Һ","arrow-right":"һ","arrow-down":"Ҽ","arrow-up-left":"ҽ","arrow-up-right":"Ҿ","arrow-down-right":"ҿ","arrow-down-left":"Ӏ","arrow2-left":"Ӂ","arrow2-up":"ӂ","arrow2-right":"Ӄ","arrow2-down":"ӄ","arrow2-up-left":"Ӆ","arrow2-up-right":"ӆ","arrow2-down-right":"Ӈ","arrow2-down-left":"ӈ","arrow3-left":"Ӊ","arrow3-up":"ӊ","arrow3-right":"Ӌ","arrow3-down":"ӌ","arrow3-up-left":"Ӎ","arrow3-up-right":"ӎ","arrow3-down-right":"ӏ","arrow3-down-left":"Ӑ","arrow4-left":"ӑ","arrow4-up":"Ӓ","arrow4-right":"ӓ","arrow4-down":"Ӕ","arrow4-up-left":"ӕ","arrow4-up-right":"Ӗ","arrow4-down-right":"ӗ","arrow4-down-left":"Ә","arrow-list":"Ӳ","arrow2-list":"ӳ","arrow3-list":"Ӵ","arrow4-list":"ӵ"}},"editing":{"Text":{"bold":"Ű","italic":"ű","underline":"Ų","bold-fr":"Ů","underline-fr":"ů","align-left":"Ŵ","align-center":"ŵ","align-right":"Ŷ","align-justify":"ŷ","abc":"Ғ","textHeight":"Ÿ","formRadio":"Ҕ","formCheckbox":"ҕ"},"Tools":{"undo":"ӡ","redo":"Ӣ","pen":"ş","pen-detailed":"Š","pen2":"š","pen2-detailed":"Ţ","color":"ŧ","fill":"Ŧ","line-width":"ź","line-style":"Ż","borderRadius":"ż","link":"Ū","link-broken":"ū","link2":"Ŭ","magnet":"Ϭ","eye":"ȸ","eye-closed":"ȹ","eye-half":"Ⱥ","splitHorizontal":"Ʈ","splitVertical":"Ư"},"Elements":{"layer":"Ǝ","element":"Ɔ","element-add":"Ƈ","element-add2":"ƈ","element-remove":"Ɖ","element2":"Ɗ","element2-add":"Ƌ","element2-add2":"ƌ","element2-remove":"ƍ","element-layer":"Ə","element-up":"Ɛ","element-down":"Ƒ","element-first":"ƒ","element-last":"Ɠ","select":"Ɣ","select-add":"ƕ","select-group":"Ɩ","edit":"Ƙ","edit-group":"Ɨ","edit-triangle":"ƙ","edit-line":"ƚ","displace-left":"Ȅ","displace-right":"ȅ","displace2-left":"Ȇ","displace2-right":"ȇ"}},"geometrics":{"Forms":{"circle":"Æ","circle2":"Å","circle3":"Ä","circle-filled":"Ã","circle-dashed":"Ç","circle-dashed2":"È","circle-dashed3":"É","circle-hatched":"Ê","circle-hatched2":"Ë","square-dashed":"Í","square-dashed2":"Î","square-dashed3":"Ï","square-dashed4":"Ð","square-dashed5":"Ì","square-hatched":"Ñ","square-hatched2":"Ò","triangleUp":"Ó","triangleUp-stroke":"Ô","triangleDown":"Õ","triangleDown-stroke":"Ö","losange":"×","losange-stroke":"Ø","pentagon":"Ù","pentagon-stroke":"Ú","hexagon":"Û","hexagon-stroke":"Ü","hexagon2":"Ý","hexagon2-stroke":"Þ","decagon":"ß","decagon-stroke":"à"},"Spinners":{"spinner-full":"ê","spinner-quarter":"ì","spinner-third":"í","spinner-half":"î","spinner-threeQuarter":"ï","spinner-dual":"ð"}},"games":{"Collectable":{"candy":"Ã","candy2":"Ä","cake":"Æ","cake2":"Ç","coin":"È","coin-c":"É","coin2":"Ê","coin2-star":"Ë","coin3":"Ì","coin3-c":"Í","ruby":"Î","diamond":"Ï","diamond2":"Ð","diamond3":"Ñ","bag":"Ò","bomb":"×"},"Stats":{"accuracy":"Ô","speed":"Õ","force":"Ö","armor":"û","skull":"Ø","grave":"Ù","sleep":"Ā"},"Players":{"joystick":"Ü","joystick2":"Ý","dice1":"ë","dice2":"ì","dice3":"í","dice4":"î","dice5":"ï","dice6":"ð"}}}'),i=JSON.parse('{"c":{"Social Media":{"facebook":"f","facebook2":"ë","messenger":"e","linkedIn":"i","linkedIn2":"î","twitter":"t","google":"g","google2":"ì","youtube":"y","youtube2":"ô","instagram":"o","instagram2":"ï","pinterest":"p","pinterest2":"ð","snapshat":"s","snapshat2":"ñ","discord":"d","discord2":"ê","github":"h","github2":"í","npm":"n","telegram":"v","telegram2":"ò","whatsapp":"w","whatsapp2":"ó"},"OS":{"apple":"a","windows":"m","linux":"l","android":"b"}}}');var a=document.getElementById("content"),d=document.getElementById("divIcons"),l=document.getElementById("arrowUp"),s=document.getElementById("switchTheme"),c=document.getElementById("switchDisplayMode"),p=document.getElementById("inputClipboard"),g=document.getElementById("select_style"),u=document.getElementById("search_input"),b=document.getElementById("messageLine"),h=document.getElementById("messageLine_icon"),m=document.getElementById("messageLine_message"),f=document.getElementById("btn_base"),x=document.getElementById("btn_editing"),w=document.getElementById("btn_geometrics"),k=document.getElementById("btn_games"),y=document.getElementById("btn_logos"),v=[],E=null,M=null;var I=[],z=null;function C(){T()?(b.style.top=a.scrollTop+"px",0===a.scrollTop?l.style.display="none":l.style.display="block"):(b.style.top="70px",0===document.documentElement.scrollTop?l.style.display="none":l.style.display="block")}function T(){return(window.innerWidth||document.body.clientWidth||document.documentElement.clientWidth)>650}function N(r,n){b.style.display="block",h.className="icon "+g.value+" "+E+" "+r,m.innerHTML=n}function B(r){var n,e=g.value||"original",o=null,a=null,l=null;for(a in void 0===r?r=E:E=r,M&&S("active",M),L("active",M=document.getElementById("btn_"+r)),d.innerHTML="",v=[],"logos"===r?(l=i.c,g.disabled=!0):(l=t[r],g.disabled=!1),l){var s=l[a],c=document.createElement("h2"),p=document.createElement("div"),u=document.createElement("div"),b=document.createElement("div");for(o in c.innerHTML=a,L("accordion",p),L("btnDeploy icon arrow3-down active",u),L("list",b),p.appendChild(c),p.appendChild(u),p.appendChild((n=void 0,(n=document.createElement("div")).className="hr",n)),p.appendChild(b),d.appendChild(p),s){var h=document.createElement("div"),m=document.createElement("div"),f=document.createElement("div"),x=document.createElement("div");if(m.className="icon "+o,L(e,m),L(r,m),h.appendChild(m),h.className="btn item",h.codeIcon=o,f.className="wrapper",x.className="title",x.appendChild(document.createTextNode(o)),h.appendChild(x),h.appendChild(f),v.push(h),b.appendChild(h),x.scrollWidth>x.offsetWidth){var w=document.createElement("span");w.style.width="5px",w.style.display="inline-block",x.appendChild(w)}}}}function U(r,n){return""!=n.className&&-1!==n.className.split(" ").indexOf(r)}function L(r,n){return!U(r,n)&&(n.className+=" "+r,!0)}function S(r,n){if(!U(r,n))return!1;var e=n.className.split(" "),o="",t=e.indexOf(r);e.splice(t,1),e.length>0&&(o=e[0]);for(var i=1;i<e.length;i++)o+=" "+e[i];return n.className=o,!0}function D(r,n){return!S(r,n)&&(L(r,n),!0)}setInterval((function(){for(var r=0;r<I.length;r++){var n=I[r];if(n===z)return void n.childNodes[1].scrollLeft++}}),23),setInterval((function(){for(var r=[],n=0;n<I.length;n++){var e=I[n],o=e.childNodes[1];e!==z?(o.scrollLeft--,o.scrollLeft>0&&r.push(e)):r.push(e)}I=r}),10),onload=function(){(function(){var r,n=function(){var r={},n=window.location.search;if(n)for(var e=n.substring(1).split("&"),o=0;o<e.length;o++){var t=e[o];r[(t=t.split("="))[0]]=t[1]}return r}();B(n.list?n.list:"base");for(var e=0;e<t.styles.length;e++){var o=t.styles[e],i=document.createElement("option");i.value=o,i.innerHTML=(r=o).charAt(0).toUpperCase()+r.slice(1),g.appendChild(i)}N("circle-info outline","Clic on an item to copy the className on clipboard.")})(),onmousemove=function(r){var n=r.target;(U("wrapper",n)||U("icon",n))&&(n=n.parentElement),U("btn",n)&&U("item",n)?(n!==z&&0===n.childNodes[1].scrollLeft&&I.push(n),z=n):z=null}},onresize=C,onscroll=C,a.onscroll=C,a.onclick=function(r){var n=r.target;if(U("btnDeploy",n))return D("active",n),void D("hide",n.parentElement.lastChild);U("icon",n)&&(n=n.parentElement),"btn item"===n.className&&(p.style.display="block",p.value=n.codeIcon,"base"!==E&&"logos"!==E&&(p.value+=" "+E),p.select(),document.execCommand("copy"),p.blur(),p.style.display="none",N(n.codeIcon,"has been copied to the clipboard!"))},g.onchange=function(){B()},b.onclick=function(){this.style.display="none"},f.onclick=function(){B("base")},x.onclick=function(){B("editing")},w.onclick=function(){B("geometrics")},k.onclick=function(){B("games")},y.onclick=function(){B("logos"),N("circle-info outline","This work includes material that may be protected as a trademark in some jurisdictions. If you want to use it, you have to ensure that you have the legal right to do so and that you do not infringe any trademark rights. See the trademark owner for rules about appropriate use of their trademarks.")},l.onclick=function(){T()?a.scrollTop=0:document.documentElement.scrollTop=0},u.onfocus=function(){L("active",u.parentElement)},u.onblur=function(){S("active",u.parentElement)},u.onkeydown=function(){setTimeout((function(){!function(){var r=u.value;if(""===r)return function(){for(var r=0;r<v.length;r++)v[r].style.display=""}(),!1;for(var n=0;n<v.length;n++){var e=v[n];-1!==e.childNodes[1].firstChild.nodeValue.indexOf(r)?e.style.display="":e.style.display="none"}}()}),1)},s.onclick=function(){D("moon",this),D("sun",this),D("darkMode",document.body)},c.onclick=function(){D("apps3",this),D("apps",this),D("gridMode",a)}})()})();