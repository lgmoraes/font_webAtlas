(()=>{"use strict";var n={724:(n,r,e)=>{e.d(r,{Z:()=>i});var o=e(645),t=e.n(o)()((function(n){return n[1]}));t.push([n.id,"body {\r\n    height: 100%;\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    color:rgb(80, 80, 80);\r\n    background: rgb(222, 222, 222);\r\n    font-family: \"WebAtlas\";\r\n}\r\n\r\nh2 {\r\n    text-align: left;\r\n    font-family: 'WebAtlas';\r\n    font-size: 25px;\r\n    margin: 8px;\r\n    margin-top: 30px;\r\n}\r\n\r\n#sidebar h2 {\r\n    text-align: center;\r\n    color:rgb(111, 186, 255);\r\n}\r\n\r\nselect {\r\n    width: 180px;\r\n    padding: 3px 10px;\r\n    border-radius: 10px;\r\n    color:rgb(53, 55, 57);\r\n    font-family: webAtlas;\r\n    font-size: 1.2em;\r\n    background: none;\r\n    border: 2px solid rgb(53, 55, 57);\r\n    margin: 20px auto;\r\n    display: block;\r\n    outline: none;\r\n}\r\nselect:disabled {\r\n    opacity: .5;\r\n}\r\n\r\nselect option {\r\n    color: white;\r\n    background-color: rgb(60, 60, 60);\r\n}\r\n\r\n#header, #sidebar {\r\n    box-sizing: border-box;\r\n    position: fixed;\r\n}\r\n\r\n#header {\r\n    width: 100%;\r\n    height: 80px;\r\n    padding: 0 .5em;\r\n    font-size: 40px;\r\n    line-height: 40px;\r\n    background-color: white;\r\n}\r\n\r\nh1 {\r\n    line-height: 80px;\r\n    vertical-align: top;\r\n    font-weight: normal;\r\n    margin: 0;\r\n    font-size: 40px;\r\n    display: inline-block;\r\n}\r\n\r\n#search {\r\n    width: 200px;\r\n    height: 40px;\r\n    line-height: 40px;\r\n    padding-left: .5em;\r\n    color:rgb(140, 140, 140);\r\n    font-size: 26px;\r\n    background-color: rgb(250, 250, 250);\r\n    box-shadow:\r\n        inset 0 0 12px rgba(150, 150, 150, .45),\r\n        inset 0 1px rgba(255, 255, 255, 0.1),\r\n        inset 0 -1px 3px rgba(0, 0, 0, 0.3),\r\n        inset 0 0 0 1px rgba(255, 255, 255, 0.1),\r\n        0 1px 2px rgba(0, 0, 0, 0.15);\r\n    border-radius: 20px;\r\n    vertical-align: top;\r\n    position: fixed;\r\n    top: 20px;\r\n    left: 300px;\r\n}\r\n#search input {\r\n    width: 120px;\r\n    color:rgb(140, 140, 140);\r\n    line-height: 40px;\r\n    margin-left: 6px;\r\n    font-size: 25px;\r\n    font-family: WebAtlas;\r\n    border: none;\r\n    background: none;\r\n    outline: none;\r\n}\r\n\r\n#sidebar, #copyPanel {\r\n    width: 250px;\r\n    padding: 1em;\r\n    background: white;\r\n    box-shadow: inset 0 0 3em rgba(0, 0, 0, .3);\r\n    top: 80px;\r\n    left: 0;\r\n    bottom: 0;\r\n    position: fixed;\r\n}\r\n#sidebar .btn, #copyPanel .btn {\r\n    background-color: white;\r\n    line-height: 1.5em;\r\n    padding: .1em 0;\r\n    margin-bottom: 5px;\r\n    font-size: 1.2em;\r\n    text-align: center;\r\n    box-sizing: border-box;\r\n}\r\n\r\n#content {\r\n    overflow: auto;\r\n    top: 80px;\r\n    left: 250px;\r\n    right: 0;\r\n    bottom: 0;\r\n    position: fixed;\r\n}\r\n#content.gridMode .item  {\r\n    width: 60px;\r\n    height: 60px;\r\n    line-height: 50px;\r\n    margin: 0;\r\n}\r\n#content.gridMode .item .title, #content.gridMode .item .wrapper {\r\n    display: none;\r\n}\r\n\r\n#divIcons {\r\n    padding: 1em;\r\n}\r\n\r\n#arrowUp {\r\n    width: 45px;\r\n    height: 45px;\r\n    line-height: 45px;\r\n    text-align: center;\r\n    font-size: 26px;\r\n    border-radius: 100%;\r\n    cursor: pointer;\r\n    background-color: white;\r\n    animation: fadeIn .5s;\r\n    position: fixed;\r\n    right: 30px;\r\n    bottom: 30px;\r\n}\r\n#arrowUp:active {\r\n    box-shadow: inset 0 -1px 18px rgba(78, 82, 87, 0.6), inset 0 0 0 1px rgba(255, 255, 255, 0.1);\r\n    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), transparent 50%, rgba(255, 255, 255, 0.07));\r\n}\r\n\r\n#menuTopRight {\r\n    position: fixed;\r\n    top: 20px;\r\n    right: 20px;\r\n}\r\n\r\n#menuTopRight .btn {\r\n    width: 40px;\r\n    height: 40px;\r\n    line-height: 40px;\r\n    box-sizing: border-box;\r\n    text-align: center;\r\n    font-size: 20px;\r\n    border-radius: 0;\r\n    cursor: pointer;\r\n}\r\n\r\n#menuTopRight .btn:first-child {\r\n    border-top-left-radius: 8px;\r\n    border-bottom-left-radius: 8px;\r\n}\r\n#menuTopRight .btn:last-child {\r\n    border-top-right-radius: 8px;\r\n    border-bottom-right-radius: 8px;\r\n}\r\n\r\n#messageBox {\r\n    font-family: 'WebAtlas';\r\n    font-size: 20px;\r\n    padding: .3em .5em;\r\n    margin-right: 1em;\r\n    box-sizing: border-box;\r\n    overflow: hidden;\r\n    background: rgb(111, 186, 255);\r\n    border-radius: 6px;\r\n    cursor: pointer;\r\n    animation: fadeIn .5s;\r\n    z-index: 5;\r\n    position: fixed;\r\n    top: 4.4em;\r\n    left: 1em;\r\n}\r\n\r\n.center {\r\n    text-align: center;\r\n}\r\n\r\n.hr {\r\n    height: 2px;\r\n    margin-bottom: 5px;\r\n    background-color: rgb(60, 60, 60);\r\n}\r\n\r\n.accordion h2 {\r\n    color: inherit;\r\n    display: inline-block;\r\n}\r\n\r\n.hr, .accordion h2 {\r\n    width: 300px;\r\n    max-width: 100%;\r\n}\r\n\r\n.accordion .btnDeploy {\r\n    font-size: 25px;\r\n    margin-left: -50px;\r\n    cursor: pointer;\r\n    display: inline-block;\r\n}\r\n\r\n.btnDeploy {\r\n    transform: rotate(0deg);\r\n    transition: .3s;\r\n}.btnDeploy.active {\r\n    transform: rotate(-180deg);\r\n}\r\n\r\n.accordion .list {\r\n    overflow: hidden;\r\n}\r\n.accordion .list.hide {\r\n    display: none;\r\n}\r\n\r\n.btn {\r\n    background: rgb(240, 240, 240);\r\n    border-radius: 3px;\r\n    box-shadow:\r\n        inset 0 1px rgba(255, 255, 255, 0.1),\r\n        inset 0 -1px 3px rgba(0, 0, 0, 0.3),\r\n        inset 0 0 0 1px rgba(255, 255, 255, 0.1),\r\n        0 1px 2px rgba(0, 0, 0, 0.15);\r\n    cursor: pointer;\r\n}\r\n.btn:active, .btn.active {\r\n    box-shadow: inset 0 -1px 18px rgba(78, 82, 87, 0.6), inset 0 0 0 1px rgba(255, 255, 255, 0.1);\r\n    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), transparent 50%, rgba(255, 255, 255, 0.07));\r\n}\r\n\r\n.item {\r\n    width: 100px;\r\n    height: 70px;\r\n    box-sizing: border-box;\r\n    padding: 5px;\r\n    margin: 4px;\r\n    font-size: 30px;\r\n    text-align: center;\r\n    background-clip: border-box;\r\n    vertical-align: top;\r\n    animation: flipInX .5s;\r\n    display: inline-block;\r\n    position: relative;\r\n}\r\n.item .wrapper {\r\n    position: absolute;\r\n    height: 22px;\r\n    left: 5px;\r\n    right: 5px;\r\n    bottom: 5px;\r\n    background: linear-gradient(to right,\r\n        rgba(240,240,240,1) 0%,\r\n        rgba(240,240,240,0) 5%,\r\n        rgba(240,240,240,0) 95%,\r\n        rgba(240,240,240,1) 100%\r\n    );\r\n}\r\n.item .title {\r\n    overflow: hidden;\r\n    padding: 0 10px;\r\n    padding-bottom: 2px;\r\n    font-size: 18px;\r\n    white-space: nowrap;\r\n}\r\n\r\n.item:active .wrapper {\r\n    display: none;\r\n}\r\n\r\n\r\n/*** COPY PANEL ***/\r\n\r\n#copyPanel {\r\n    border-radius: 6px;\r\n    overflow-y: auto;\r\n}\r\n#copyPanel h2 {\r\n    text-align: center;\r\n    margin: 0;\r\n    margin-top: -.5em;\r\n    margin-bottom: 1em;\r\n}\r\n#copyPanel #copyPanel_btnClose {\r\n    width: 40px;\r\n    height: 25px;\r\n    line-height: 25px;\r\n    border-radius: 3px;\r\n    text-align: center;\r\n    color: #b0b0b0;\r\n    cursor: pointer;\r\n    position: absolute;\r\n    top: 5px;\r\n    right: 5px;\r\n}\r\n#copyPanel #copyPanel_btnClose:hover {\r\n    color: #e2e2e2;\r\n    background-color: #b0b0b0;\r\n}\r\n\r\n#copyPanel_options, #copyPanel_icons {\r\n    vertical-align: top;\r\n}\r\n\r\n#sliderIcon, #sliderDiv {\r\n    position: relative;\r\n}\r\n\r\n#sliderIcon i, #sliderDiv i {\r\n    font-size: 35px;\r\n    cursor: pointer;\r\n}\r\n\r\n#sliderIcon .slider-list, #sliderDiv .slider-list {\r\n    left: 40px;\r\n    top: 4px;\r\n    position: absolute;\r\n}\r\n\r\n.slider-list div {\r\n    cursor: pointer;\r\n}\r\n\r\n#checkbox_addIcon {\r\n    cursor: pointer;\r\n}\r\n\r\n#btn_copyClass, #btn_copyHTML {\r\n    padding: 4px;\r\n    margin-top: 1em;\r\n    border-radius: 6px;\r\n    color: rgba(0, 0, 0, .5);\r\n    text-shadow: none;\r\n    box-shadow:\r\n        inset 0 0 8px rgba(0, 0, 0, .5),\r\n        0 0 5px rgba(0, 0, 0, .3);\r\n    cursor: pointer;\r\n    position: absolute;\r\n    left: 9px;\r\n    right: 9px;\r\n    bottom: 9px;\r\n}\r\n#btn_copyClass:active, #btn_copyHTML:active {\r\n    box-shadow:\r\n        inset 0 0 18px rgba(0, 0, 0, .8),\r\n        0 0 5px rgba(0, 0, 0, .5);\r\n}\r\n\r\n#btn_copyClass {\r\n    background: linear-gradient(to bottom,\r\n        #8EDCFF 10%,\r\n        #0085FF 90%);\r\n}\r\n\r\n#btn_copyHTML {\r\n    background: linear-gradient(to bottom,\r\n        #FFD18E 10%,\r\n        #FF3F00 90%);\r\n}\r\n\r\n#copyPanel {\r\n    max-width: 100%;\r\n    width: 500px;\r\n    height: 350px;\r\n    display: none;\r\n    z-index: 4;\r\n}\r\n#copyPanel_options {\r\n    width: 200px;\r\n    padding-right: 1em;\r\n    display: inline-block;\r\n    box-sizing: border-box;\r\n}\r\n#copyPanel_icons {\r\n    width: 300px;\r\n    height: 300px;\r\n    display: inline-block;\r\n    position: relative;\r\n}\r\n\r\n#copyPanel .frame {\r\n    width: 32%;\r\n    height: 32%;\r\n    line-height: 96px;\r\n    font-size: 3em;\r\n    border-radius: 5px;\r\n    background-color: #ddd;\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    position: absolute;\r\n}\r\n#icon_original {\r\n    left: 0;\r\n}\r\n#icon_sharp {\r\n    left: 34%;\r\n}\r\n#icon_outline {\r\n    right: 0;\r\n}\r\n#copyPanel #icon_selected {\r\n    width: 100%;\r\n    height: auto;\r\n    line-height: 198px;\r\n    font-size: 10em;\r\n    cursor: default;\r\n    top: 34%;\r\n    left: 0;\r\n    bottom: 0;\r\n}\r\n\r\n#copyPanel_options fieldset {\r\n    padding: 9px;\r\n    padding-bottom: 50px;\r\n    margin: 10px;\r\n    border: 1px solid #d0d0d0;\r\n    border-radius: 6px;\r\n    box-shadow: inset 0 0 1em rgba(0, 0, 0, 0.25);\r\n    box-sizing: border-box;\r\n    position: relative;\r\n}\r\n\r\n#voile {\r\n    display: none;\r\n    background-color: black;\r\n    opacity: .5;\r\n    animation: fadeInTransparent .5s;\r\n    z-index: 3;\r\n    position: fixed;\r\n    left: 0;\r\n    right: 0;\r\n    top: 0;\r\n    bottom: 0;\r\n}\r\n\r\n\r\n/*** ANIMATIONS ***/\r\n\r\n@keyframes fadeIn {\r\n    0%   {opacity: 0;}\r\n    100% {opacity: 1;}\r\n}\r\n\r\n@keyframes fadeInTransparent {\r\n    0%   {opacity: 0;}\r\n    100% {opacity: .5;}\r\n}\r\n\r\n@keyframes flipInX {\r\n    0%   {transform: rotateX(90deg);}\r\n    100% {transform: rotateX(0deg);}\r\n}\r\n\r\n\r\n/*** THEME SOMBRE ***/\r\n\r\nbody.darkMode {\r\n    color: #ddd;\r\n    text-shadow: 1px 1px 0 black;\r\n    background: #373738;\r\n}\r\nbody.darkMode #header {\r\n    border-bottom: 1px solid #26272b;\r\n    background: linear-gradient(#646464, #333);\r\n}\r\n\r\nbody.darkMode h1, body.darkMode h2, body.darkMode .btnDeploy {\r\n    color:rgb(210, 167, 23);\r\n}\r\nbody.darkMode .btnDeploy {\r\n    text-shadow: none;\r\n}\r\nbody.darkMode .hr {\r\n    background-color: rgb(210, 167, 23);\r\n}\r\n\r\nbody.darkMode #sidebar h2 {\r\n    color: rgb(53, 55, 57);\r\n    text-shadow: 0 1px 0 rgba(255, 255, 255, .25);\r\n}\r\n\r\nbody.darkMode .btn, body.darkMode #arrowUp {\r\n    background-color: rgba(27, 27, 29, .9);\r\n    border: 1px solid rgba(0, 0, 0, .4);\r\n    border-bottom-color: rgb(17, 17, 17);\r\n    box-shadow:\r\n        inset 0 1px rgba(255,255,255,0.1),\r\n        inset 0 -1px 3px rgba(0,0,0,0.3),\r\n        inset 0 0 0 1px rgba(255,255,255,0.1),\r\n        0 1px 2px rgba(0,0,0,0.15);\r\n}\r\n\r\nbody.darkMode #arrowUp {\r\n    background: rgba(27, 27, 29, .9);\r\n}\r\n\r\nbody.darkMode .wrapper {\r\n    background: linear-gradient(to right,\r\n        rgba(27, 27, 29,1) 0%,\r\n        rgba(27, 27, 29,0) 5%,\r\n        rgba(27, 27, 29,0) 95%,\r\n        rgba(27, 27, 29,1) 100%\r\n    );\r\n}\r\n\r\nbody.darkMode #copyPanel .frame {\r\n    background: rgba(0, 0, 0, .5);\r\n}\r\n\r\nbody.darkMode #copyPanel #copyPanel_btnClose:hover {\r\n    color: #53565a;\r\n    text-shadow: none;\r\n}\r\n\r\nbody.darkMode #sidebar {\r\n    border-right: 1px solid #313131;\r\n    background: #737373;\r\n    box-shadow: inset 0 0 5em rgba(0, 0, 0, 0.6);\r\n}\r\n\r\nbody.darkMode #sidebar .btn, body.darkMode #copyPanel {\r\n    text-shadow: 0 1px rgba(0,0,0,0.8);\r\n    background: #46494d;\r\n    background-clip: border-box;\r\n    border: 1px solid #111;\r\n    border-bottom-color: rgb(17, 17, 17);\r\n    border-radius: 3px;\r\n    box-shadow: \r\n        inset 0 1px rgba(255,255,255,0.1),\r\n        inset 0 -1px 3px rgba(0,0,0,0.3),\r\n        inset 0 0 0 1px rgba(255,255,255,0.1),\r\n        0 1px 2px rgba(0,0,0,0.15);\r\n    background-image: linear-gradient(to bottom, rgba(255,255,255,0.08),rgba(255,255,255,0) 50%,rgba(0,0,0,0) 51%,rgba(0,0,0,0.25));\r\n}\r\nbody.darkMode #sidebar .btn {\r\n    line-height: 1.3em;\r\n}\r\nbody.darkMode #sidebar .btn:active, body.darkMode #sidebar .btn.active {\r\n    background: #393d40;\r\n    box-shadow: inset 0 -1px 18px rgba(0,0,0,0.8),inset 0 0 0 1px rgba(255,255,255,0.1);\r\n    background-image: linear-gradient(to bottom, rgba(0,0,0,0.1),transparent 50%,rgba(255,255,255,0.07));\r\n}\r\n\r\nbody.darkMode #messageBox {\r\n    color: rgb(80, 80, 80);\r\n    background-color: rgb(210, 167, 23);\r\n    text-shadow: none;\r\n}\r\n\r\nbody.darkMode #search {\r\n    color: #ddd;\r\n    background: rgba(27, 27, 29, .9);\r\n    border: 1px solid rgba(0, 0, 0, .4);\r\n    box-shadow:\r\n        inset 0 1px rgba(255, 255, 255, 0.1),\r\n        inset 0 -1px 3px rgba(0, 0, 0, 0.3),\r\n        inset 0 0 0 1px rgba(255, 255, 255, 0.1),\r\n        0 1px 2px rgba(0, 0, 0, 0.15);\r\n    margin-top: -1px;\r\n}\r\nbody.darkMode #search input {\r\n    color: #ddd;\r\n}\r\n\r\n\r\n/*** MEDIAS QUERIES ***/\r\n\r\n@media (max-width: 650px) {\r\n    #header {\r\n        height: 70px;\r\n    }\r\n\r\n    h1 {\r\n        line-height: 70px;\r\n    }\r\n\r\n    #header, #sidebar, #content {\r\n        width: auto;\r\n        top: 0;\r\n        left: 0;\r\n        display: block;\r\n        position: relative;\r\n    }\r\n\r\n    #sidebar {\r\n        text-align: center;\r\n    }\r\n\r\n    #sidebar .btn {\r\n        width: 48%;\r\n        margin: 2px;\r\n        display: inline-block;\r\n    }\r\n    #sidebar #btn_logos {\r\n        width: 60%;\r\n    }\r\n\r\n    #divIcons {\r\n        position: relative;\r\n    }\r\n\r\n    #menuTopRight {\r\n        top: 15px;\r\n        right: 15px;\r\n    }\r\n\r\n    #search {\r\n        width: 45px;\r\n        margin: 0;\r\n        white-space: nowrap;\r\n        overflow: hidden;\r\n        transition: width .5s;\r\n        z-index: 2;\r\n        position: fixed;\r\n        top: 15px;\r\n        right: 120px;\r\n        left: unset;\r\n    }\r\n    #search:hover, #search.active {\r\n        width: 170px;\r\n    }\r\n\r\n    #arrowUp {\r\n        z-index: 1;\r\n    }\r\n\r\n    body.darkMode #sidebar {\r\n        border-right: none;\r\n        border-bottom: 1px solid #313131;\r\n    }\r\n\r\n    .accordion .list {\r\n        text-align: center;\r\n    }\r\n\r\n    #copyPanel {\r\n        width: auto;\r\n        height: auto;\r\n        border-radius: 0;\r\n        top: unset;\r\n        bottom: unset;\r\n        left: 0;\r\n        right: 0;\r\n    }\r\n    #copyPanel_options, #copyPanel_icons {\r\n        width: 100%;\r\n        padding: 0;\r\n    }\r\n    #copyPanel_options #sliderIcon {\r\n        width: 50%;\r\n    }\r\n    #copyPanel_options fieldset {\r\n        width: 49%;\r\n        height: 100px;\r\n        margin: .5em 0;\r\n        vertical-align: top;\r\n        display: inline-block;\r\n    }\r\n    #copyPanel_options fieldset:first-of-type {\r\n        margin-right: 2%;\r\n    }\r\n    #copyPanel_options #checkbox_addIcon {\r\n        line-height: 27px;\r\n    }\r\n}\r\n@media (max-width: 460px) {\r\n    #header {\r\n        padding: 0 .3em;\r\n    }\r\n\r\n    h1 {\r\n        width: 150px;\r\n        line-height: 31px;\r\n        font-size: 35px;\r\n        padding: 4px 0;\r\n    }\r\n}",""]);const i=t},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e=n(r);return r[2]?"@media ".concat(r[2]," {").concat(e,"}"):e})).join("")},r.i=function(n,e,o){"string"==typeof n&&(n=[[null,n,""]]);var t={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(t[a]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);o&&t[d[0]]||(e&&(d[2]?d[2]="".concat(e," and ").concat(d[2]):d[2]=e),r.push(d))}},r}},379:(n,r,e)=>{var o,t=function(){var n={};return function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[r]=e}return n[r]}}(),i=[];function a(n){for(var r=-1,e=0;e<i.length;e++)if(i[e].identifier===n){r=e;break}return r}function l(n,r){for(var e={},o=[],t=0;t<n.length;t++){var l=n[t],d=r.base?l[0]+r.base:l[0],c=e[d]||0,s="".concat(d," ").concat(c);e[d]=c+1;var p=a(s),u={css:l[1],media:l[2],sourceMap:l[3]};-1!==p?(i[p].references++,i[p].updater(u)):i.push({identifier:s,updater:h(u,r),references:1}),o.push(s)}return o}function d(n){var r=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var i=e.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(n){r.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(r);else{var a=t(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(r)}return r}var c,s=(c=[],function(n,r){return c[n]=r,c.filter(Boolean).join("\n")});function p(n,r,e,o){var t=e?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet)n.styleSheet.cssText=s(r,t);else{var i=document.createTextNode(t),a=n.childNodes;a[r]&&n.removeChild(a[r]),a.length?n.insertBefore(i,a[r]):n.appendChild(i)}}function u(n,r,e){var o=e.css,t=e.media,i=e.sourceMap;if(t?n.setAttribute("media",t):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var g=null,b=0;function h(n,r){var e,o,t;if(r.singleton){var i=b++;e=g||(g=d(r)),o=p.bind(null,e,i,!1),t=p.bind(null,e,i,!0)}else e=d(r),o=u.bind(null,e,r),t=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return o(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;o(n=r)}else t()}}n.exports=function(n,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var e=l(n=n||[],r);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var o=0;o<e.length;o++){var t=a(e[o]);i[t].references--}for(var d=l(n,r),c=0;c<e.length;c++){var s=a(e[c]);0===i[s].references&&(i[s].updater(),i.splice(s,1))}e=d}}}}},r={};function e(o){if(r[o])return r[o].exports;var t=r[o]={id:o,exports:{}};return n[o](t,t.exports,e),t.exports}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var o in r)e.o(r,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:r[o]})},e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{var n=e(379),r=e.n(n),o=e(724);r()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;const t=JSON.parse('{"styles":["original","sharp","outline"],"base":{"General":{"newFile":"ɏ","folder":"ɐ","folder-open":"ɘ","save":"ɑ","copy":"ɒ","paste":"ɓ","cut":"ɔ","newFile2":"Ɏ","folder-add":"ɗ","copy2":"ɕ","paste2":"ɖ","bell":"ñ","email":"ĸ","email-open":"Ĺ","attachment":"Ļ","command":"û","warning":"Ǖ","warning-triangle":"ǔ","download":"ȗ","upload":"Ș","file":"Ȑ","file-download":"ȑ","file-upload":"Ȓ","downloadData":"ȓ","downloadData2":"Ȕ","idCard":"ø","user":"Ψ","addUser":"Ω","removeUser":"Ϊ","modifyUser":"Ϋ","users":"ά","userGroup":"έ","user2":"ή","addUser2":"ί","removeUser2":"ΰ","modifyUser2":"α","users2":"β","userGroup2":"γ","login":"А","logout":"Б","power":"В","power2":"Г","gear":"Ȣ","gear2":"ȣ","gear3":"Ȥ","gear4":"ȥ","gear5":"Ȧ","gear6":"ȧ","gear7":"Ȩ","gear8":"ȩ","settings":"ȯ","settings2":"Ȱ","settings3":"ȱ","dustbin":"Ϸ","dustbin2":"ϸ","resize":"ņ","fullscreen":"Ň","reload":"Ǻ","reload-left":"ǻ","reload2":"Ǽ","reload3":"ǽ","reload4":"ǹ","dialogue-left":"Ϗ","dialogue":"ύ","dialogue-right":"ϐ","dialogue2-left":"ϑ","dialogue2":"ώ","dialogue2-right":"ϒ","time":"Ŏ","time-rewind":"Ő","timer":"ō","timer2":"ŏ","apps":"ɨ","apps2":"ɪ","apps3":"ɩ","menu":"ɬ","menu-compact":"ɭ","menu2":"ɮ","menu2-vertical":"ɯ","grid":"ɡ","home":"ˌ","home2":"ˍ","magnify":"є","padlock":"ф","padlock-unlock":"х","network":"ѭ","database":"ĩ","window":"Ē","application":"Ĕ","application-ok":"ĕ","application-ko":"Ė","application-warning":"ė","application-gear":"Ę","application-multiple":"ē","cloud":"Ī","cloud-download":"ī","cloud-upload":"Ĭ","cloud-swap":"ĭ","cloud-sync":"Į","cloud-ok":"į","cloud-ko":"İ","cloud-warning":"ı","cloud-warning2":"Ĳ","calendar":"ŕ","calendar-days":"Ŗ","calendar-weeks":"ŗ","calendar-months":"Ř","calendar-modify":"ř","calendar-add":"Ś","calendar-remove":"ś","calendar-valide":"Ŝ","calendar-warning":"ŝ","calendar-lock":"Ş"},"Medias":{"image":"ɠ","vector":"ɝ","video":"ɟ","music":"ɞ","waveform":"ȷ","waveform2":"ȸ","waveform3":"ȹ","spreadsheet":"ɢ","spreadsheet2":"ɣ","spreadsheet3":"ɤ","cube":"ϝ","cube-stroke":"Ϟ"},"Hardware":{"camera":"ġ","camera2":"Ģ","webcam":"ģ","micro":"Ĥ","headset":"þ","print":"ý","screen":"ę","screen-play":"ě","screen-gear":"Ě","mobile":"Ğ","tablet":"ĝ","mouse":"Ġ","keyboard":"ğ","speaker":"ĥ","chip":"Ħ","server":"ħ","server2":"Ĩ"},"Divers":{"cookie":"è","bulb":"ï","lightning":"ð","bookmark":"ò","hierarchie":"ê","building":"ë","crown":"í","tutorial":"î","map":"ó","archive":"õ","bug":"ö","weight":"ù","planet":"ѫ","planet-invert":"Ѭ","plug":"Ѯ","plug-off":"ѯ","share":"ʾ","star":"ʾ","star-half":"ʿ","star-empty":"ˀ","heart":"Ϥ","infinite":"ϣ","puzzle":"Ϫ","thumbUp":"Ϯ","thumbDown":"ϯ","badge":"ϲ","smiley":"ϳ","smiley-neutral":"ϴ","smiley-sad":"ϵ","checkerboard":"ϥ","checkerboard2":"Ϧ","experimental":"ϩ","wifi":"š","wifi-off":"Ţ","signal":"Ť","rss":"ť","flame":"Я","flame2":"а","cursor":"Ǫ","hourglass":"ǫ","statistics":"ļ","statistics2":"ľ","statistics3":"Ŀ","statistics4":"ŀ","barcode":"Ũ","qrcode":"ũ","circlecode":"Ŧ","box":"ϛ","box-stroke":"Ϝ","forbidden":"Э","forbidden2":"Ю","sun":"Ѡ","moon":"ѡ","pin":"Ѱ","pin2":"ѱ","postIt":"ғ","clickableImage":"Җ"},"Ok Ko":{"ok":"Ą","ko":"ą","ok-thin":"Ă","ko-thin":"ă","ok-thinner":"Ā","ko-thinner":"ā","ok-large":"Ć","ko-large":"ć","ok-larger":"Ĉ","ko-larger":"ĉ","ok-double":"Ċ","ko-double":"ċ","ok-double2":"Č","ko-double2":"č","ok-mini":"Ď","ko-mini":"ď"},"Plus Minus":{"plus":"ʛ","minus":"ʜ","plus-thin":"ʙ","minus-thin":"ʚ","plus-thinner":"ʗ","minus-thinner":"ʘ","plus-large":"ʝ","minus-large":"ʞ","plus-larger":"ʟ","minus-larger":"ʠ","plus-double":"ʡ","minus-double":"ʢ","plus-double2":"ʣ","minus-double2":"ʤ","plus-mini":"ʥ","minus-mini":"ʦ"},"Circles":{"circle-ok":"ƭ","circle-ko":"Ʈ","circle-ok-handwriting":"Ư","circle-ko-handwriting":"ư","circle-plus":"Ʊ","circle-minus":"Ʋ","circle-info":"ƶ","circle-warning":"Ƶ","circle-arrowLeft":"Ʒ","circle-arrowUp":"Ƹ","circle-arrowRight":"ƹ","circle-arrowDown":"ƺ","circle-play":"ƻ","circle-pause":"Ƽ","circle-download":"ƽ","circle-upload":"ƾ"},"Formular":{"radio":"ɱ","radio-checked":"ɰ","checkbox":"ɳ","checkbox-checked":"ɲ","radio2":"ɵ","radio2-checked":"ɴ","checkbox2":"ɷ","checkbox2-checked":"ɶ","radio3":"ɹ","radio3-checked":"ɸ","checkbox3":"ɻ","checkbox3-checked":"ɺ","slider":"ʃ","slider-on":"ʄ","slider-vertical":"ʅ","slider-vertical-on":"ʆ"},"Player":{"play":"Ա","pause":"Բ","stop":"Գ","rec":"԰","slow":"Դ","next":"Ե","previous":"Զ","fastForward":"Է","rewind":"Ը","eject":"Թ","speaker-high":"Ժ","speaker-medium":"Ի","speaker-low":"Լ","speaker-mute":"Խ","loop":"Ծ","loopUnique":"Կ","random":"Հ","addToList":"Ձ"},"Arrows":{"arrow-swap":"ӣ","move":"Ӥ","move-alt":"ӥ","arrow-horizontal":"Ӧ","arrow-vertical":"ӧ","arrow-diagonal":"Ө","arrow-diagonal2":"ө","arrow-align-horizontal":"Ӫ","arrow-align-vertical":"ӫ","arrow-align-left":"Ӭ","arrow-align-top":"ӭ","arrow-align-right":"Ӯ","arrow-align-down":"ӯ","arrow-resize-up":"Ӱ","arrow-resize-down":"ӱ","arrow-left":"ҹ","arrow-up":"Һ","arrow-right":"һ","arrow-down":"Ҽ","arrow-up-left":"ҽ","arrow-up-right":"Ҿ","arrow-down-right":"ҿ","arrow-down-left":"Ӏ","arrow2-left":"Ӂ","arrow2-up":"ӂ","arrow2-right":"Ӄ","arrow2-down":"ӄ","arrow2-up-left":"Ӆ","arrow2-up-right":"ӆ","arrow2-down-right":"Ӈ","arrow2-down-left":"ӈ","arrow3-left":"Ӊ","arrow3-up":"ӊ","arrow3-right":"Ӌ","arrow3-down":"ӌ","arrow3-up-left":"Ӎ","arrow3-up-right":"ӎ","arrow3-down-right":"ӏ","arrow3-down-left":"Ӑ","arrow4-left":"ӑ","arrow4-up":"Ӓ","arrow4-right":"ӓ","arrow4-down":"Ӕ","arrow4-up-left":"ӕ","arrow4-up-right":"Ӗ","arrow4-down-right":"ӗ","arrow4-down-left":"Ә","arrow-list":"Ӳ","arrow2-list":"ӳ","arrow3-list":"Ӵ","arrow4-list":"ӵ"}},"editing":{"Text":{"bold":"Ű","italic":"ű","underline":"Ų","bold-fr":"Ů","underline-fr":"ů","align-left":"Ŵ","align-center":"ŵ","align-right":"Ŷ","align-justify":"ŷ","abc":"Ғ","textHeight":"Ÿ","formRadio":"Ҕ","formCheckbox":"ҕ"},"Tools":{"undo":"ӡ","redo":"Ӣ","pen":"ş","pen-detailed":"Š","pen2":"š","pen2-detailed":"Ţ","color":"ŧ","fill":"Ŧ","line-width":"ź","line-style":"Ż","borderRadius":"ż","link":"Ū","link-broken":"ū","link2":"Ŭ","magnet":"Ϭ","eye":"ȸ","eye-closed":"ȹ","eye-half":"Ⱥ","splitHorizontal":"Ʈ","splitVertical":"Ư"},"Elements":{"layer":"Ǝ","element":"Ɔ","element-add":"Ƈ","element-add2":"ƈ","element-remove":"Ɖ","element2":"Ɗ","element2-add":"Ƌ","element2-add2":"ƌ","element2-remove":"ƍ","element-layer":"Ə","element-up":"Ɛ","element-down":"Ƒ","element-first":"ƒ","element-last":"Ɠ","select":"Ɣ","select-add":"ƕ","select-group":"Ɩ","edit":"Ƙ","edit-group":"Ɨ","edit-triangle":"ƙ","edit-line":"ƚ","displace-left":"Ȅ","displace-right":"ȅ","displace2-left":"Ȇ","displace2-right":"ȇ"}},"geometrics":{"Forms":{"circle":"Æ","circle2":"Å","circle3":"Ä","circle-filled":"Ã","circle-dashed":"Ç","circle-dashed2":"È","circle-dashed3":"É","circle-hatched":"Ê","circle-hatched2":"Ë","square-dashed":"Í","square-dashed2":"Î","square-dashed3":"Ï","square-dashed4":"Ð","square-dashed5":"Ì","square-hatched":"Ñ","square-hatched2":"Ò","triangleUp":"Ó","triangleUp-stroke":"Ô","triangleDown":"Õ","triangleDown-stroke":"Ö","losange":"×","losange-stroke":"Ø","pentagon":"Ù","pentagon-stroke":"Ú","hexagon":"Û","hexagon-stroke":"Ü","hexagon2":"Ý","hexagon2-stroke":"Þ","decagon":"ß","decagon-stroke":"à"},"Spinners":{"spinner-full":"ê","spinner-quarter":"ì","spinner-third":"í","spinner-half":"î","spinner-threeQuarter":"ï","spinner-dual":"ð"}},"games":{"Collectable":{"candy":"Ã","candy2":"Ä","cake":"Æ","cake2":"Ç","coin":"È","coin-c":"É","coin2":"Ê","coin2-star":"Ë","coin3":"Ì","coin3-c":"Í","ruby":"Î","diamond":"Ï","diamond2":"Ð","diamond3":"Ñ","bag":"Ò","bomb":"×"},"Stats":{"accuracy":"Ô","speed":"Õ","force":"Ö","armor":"û","skull":"Ø","grave":"Ù","sleep":"Ā"},"Players":{"joystick":"Ü","joystick2":"Ý","dice1":"ë","dice2":"ì","dice3":"í","dice4":"î","dice5":"ï","dice6":"ð"}}}'),i=JSON.parse('{"c":{"Social Media":{"facebook":"f","facebook2":"ë","messenger":"e","linkedIn":"i","linkedIn2":"î","twitter":"t","google":"g","google2":"ì","youtube":"y","youtube2":"ô","instagram":"o","instagram2":"ï","pinterest":"p","pinterest2":"ð","snapshat":"s","snapshat2":"ñ","discord":"d","discord2":"ê","github":"h","github2":"í","npm":"n","telegram":"v","telegram2":"ò","whatsapp":"w","whatsapp2":"ó"},"OS":{"apple":"a","windows":"m","linux":"l","android":"b"}}}');var a=document.getElementById("content"),l=document.getElementById("divIcons"),d=document.getElementById("arrowUp"),c=document.getElementById("switchTheme"),s=document.getElementById("switchDisplayMode"),p=document.getElementById("inputClipboard"),u=document.getElementById("select_style"),g=document.getElementById("search_input"),b=document.getElementById("messageBox"),h=document.getElementById("btn_base"),m=document.getElementById("btn_editing"),f=document.getElementById("btn_geometrics"),x=document.getElementById("btn_games"),y=document.getElementById("btn_logos"),w=document.getElementById("btn_copyClass"),k=document.getElementById("btn_copyHTML"),v=document.getElementById("copyPanel"),E=document.getElementById("copyPanel_btnClose"),I=document.getElementById("sliderIcon"),M=document.getElementById("sliderDiv"),_=document.getElementById("checkbox_addIcon"),C=document.getElementById("icon_original"),z=document.getElementById("icon_sharp"),N=document.getElementById("icon_outline"),P=document.getElementById("icon_selected"),T=document.getElementById("voile"),B=[],D=null,U=null,H=null;var L=[],S=null;function j(){!function(){if("block"!==v.style.display)return!1;var n;v.style.height="",v.style.top="",v.style.bottom="",(n=v).style.top=(window.innerHeight||document.body.clientHeight||document.documentElement.clientHeight)/2-n.offsetHeight/2+"px",n.style.left=G()/2-n.offsetWidth/2+"px",v.style.top<"0"&&(v.style.height="auto",v.style.top="0",v.style.bottom="0"),W()?document.documentElement.style.overflowY="":(v.style.left="0",v.style.right="0",document.documentElement.style.overflowY="hidden")}(),W()?0===a.scrollTop?d.style.display="none":d.style.display="block":0===document.documentElement.scrollTop?d.style.display="none":d.style.display="block"}function F(n){p.style.display="block",p.value=n,p.select(),document.execCommand("copy"),p.blur(),p.style.display="none"}function O(){var n=H,r=[];return r.push(n.name,n.style),"base"!==n.list&&r.splice(1,0,n.list),n.iconClass&&r.unshift(n.iconClass),r.join(" ")}function A(n){V("slider-vertical",n),V("slider-vertical-on",n),R()}function R(){var n=H;J("checkbox3-checked",_)?n.iconClass=J("slider-vertical-on",I.children[0])?"icon":"icon-first":n.iconClass=!1,n.div=J("slider-vertical-on",M.children[0])?"i":"div"}function q(){v.style.display="none",T.style.display="none",document.documentElement.style.overflowY=""}function W(){return G()>650}function X(n,r){b.style.display="block",b.className="icon-first "+n,b.innerHTML=r}function Y(n){var r,e=u.value||"original",o=null,a=null,d=null;for(a in void 0===n?n=D:D=n,U&&Q("active",U),Z("active",U=document.getElementById("btn_"+n)),l.innerHTML="",B=[],"logos"===n?(d=i.c,u.disabled=!0):(d=t[n],u.disabled=!1),d){var c=d[a],s=document.createElement("h2"),p=document.createElement("div"),g=document.createElement("div"),b=document.createElement("div");for(o in s.innerHTML=a,Z("accordion",p),Z("btnDeploy icon arrow3-down active",g),Z("list",b),p.appendChild(s),p.appendChild(g),p.appendChild((r=void 0,(r=document.createElement("div")).className="hr",r)),p.appendChild(b),l.appendChild(p),c){var h=document.createElement("div"),m=document.createElement("div"),f=document.createElement("div"),x=document.createElement("div");if(m.className="icon "+o,Z(e,m),Z(n,m),h.appendChild(m),h.className="btn item",h.codeIcon=o,f.className="wrapper",x.className="title",x.appendChild(document.createTextNode(o)),h.appendChild(x),h.appendChild(f),B.push(h),b.appendChild(h),x.scrollWidth>x.offsetWidth){var y=document.createElement("span");y.style.width="5px",y.style.display="inline-block",x.appendChild(y)}}}}function G(){return window.innerWidth||document.body.clientWidth||document.documentElement.clientWidth}function J(n,r){return""!=r.className&&-1!==r.className.split(" ").indexOf(n)}function Z(n,r){return!J(n,r)&&(r.className+=" "+n,!0)}function Q(n,r){if(!J(n,r))return!1;var e=r.className.split(" "),o="",t=e.indexOf(n);e.splice(t,1),e.length>0&&(o=e[0]);for(var i=1;i<e.length;i++)o+=" "+e[i];return r.className=o,!0}function V(n,r){return!Q(n,r)&&(Z(n,r),!0)}setInterval((function(){for(var n=0;n<L.length;n++){var r=L[n];if(r===S)return void r.childNodes[1].scrollLeft++}}),23),setInterval((function(){for(var n=[],r=0;r<L.length;r++){var e=L[r],o=e.childNodes[1];e!==S?(o.scrollLeft--,o.scrollLeft>0&&n.push(e)):n.push(e)}L=n}),10),onload=function(){(function(){var n,r=function(){var n={},r=window.location.search;if(r)for(var e=r.substring(1).split("&"),o=0;o<e.length;o++){var t=e[o];n[(t=t.split("="))[0]]=t[1]}return n}();Y(r.list?r.list:"base");for(var e=0;e<t.styles.length;e++){var o=t.styles[e],i=document.createElement("option");i.value=o,i.innerHTML=(n=o).charAt(0).toUpperCase()+n.slice(1),u.appendChild(i)}X("circle-info outline","Click on the icon you want to copy")})(),onmousemove=function(n){var r=n.target;(J("wrapper",r)||J("icon",r))&&(r=r.parentElement),J("btn",r)&&J("item",r)?(r!==S&&0===r.childNodes[1].scrollLeft&&L.push(r),S=r):S=null}},onresize=j,onscroll=j,a.onscroll=j,a.onclick=function(n){var r,e=n.target;if(J("btnDeploy",e))return V("active",e),void V("hide",e.parentElement.lastChild);J("icon",e)&&(e=e.parentElement),"btn item"===e.className&&(r={name:e.codeIcon,list:D,style:u.value},H=r,R(),C.className="frame icon "+r.name+" "+r.list+" original",z.className="frame icon "+r.name+" "+r.list+" sharp",N.className="frame icon "+r.name+" "+r.list+" outline",P.className="frame icon "+r.name+" "+r.list+" "+r.style,v.style.display="block",T.style.display="block",j())},w.onclick=function(){var n;n=H,F(O()),X([n.name,n.list,n.style].join(" "),"has been copied to the clipboard!")},k.onclick=function(){var n,r;n=H,r=O(),F(["<",n.div,' class="',r,'"></',n.div,">"].join("")),X([n.name,n.list,n.style].join(" "),"HTML code has been copied!")},u.onchange=function(){Y()},b.onclick=function(){this.style.display="none"},h.onclick=function(){Y("base")},m.onclick=function(){Y("editing")},f.onclick=function(){Y("geometrics")},x.onclick=function(){Y("games")},y.onclick=function(){Y("logos"),X("warning-triangle outline","This work includes material that may be protected as a trademark in some jurisdictions. If you want to use it, you have to ensure that you have the legal right to do so and that you do not infringe any trademark rights. See the trademark owner for rules about appropriate use of their trademarks.")},d.onclick=function(){W()?a.scrollTop=0:document.documentElement.scrollTop=0},g.onfocus=function(){Z("active",g.parentElement)},g.onblur=function(){Q("active",g.parentElement)},g.onkeydown=function(){setTimeout((function(){!function(){var n=g.value;if(""===n)return function(){for(var n=0;n<B.length;n++)B[n].style.display=""}(),!1;for(var r=0;r<B.length;r++){var e=B[r];-1!==e.childNodes[1].firstChild.nodeValue.indexOf(n)?e.style.display="":e.style.display="none"}}()}),1)},I.children[0].onclick=function(){A(this)},M.children[0].onclick=function(){A(this)},sliderIcon_icon.onclick=function(){I.children[0].className="icon slider-vertical-on",R()},sliderIcon_icon_first.onclick=function(){I.children[0].className="icon slider-vertical",R()},sliderDiv_i.onclick=function(){M.children[0].className="icon slider-vertical-on",R()},sliderDiv_div.onclick=function(){M.children[0].className="icon slider-vertical",R()},_.onclick=function(){V("checkbox3",this),V("checkbox3-checked",this),R()},C.onclick=function(){var n=H;n.style="original",P.className="frame icon "+n.name+" "+n.list+" "+n.style},z.onclick=function(){var n=H;n.style="sharp",P.className="frame icon "+n.name+" "+n.list+" "+n.style},N.onclick=function(){var n=H;n.style="outline",P.className="frame icon "+n.name+" "+n.list+" "+n.style},E.onmousedown=function(){q()},T.onmousedown=function(){q()},c.onclick=function(){V("moon",this),V("sun",this),V("darkMode",document.body)},s.onclick=function(){V("apps3",this),V("apps",this),V("gridMode",a)}})()})();