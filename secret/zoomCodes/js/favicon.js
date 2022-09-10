"use strict"
function addFavicon(tag,...param) {
    let block = document.createElement(tag)
    for (let index = 0; index < param.length; index++) {
        let paramKeys = Object.keys(param[index])
        let paramValues = Object.values(param[index])
        block.setAttribute(paramKeys,paramValues)
    }
    document.head.appendChild(block)
}
addFavicon("link",{"rel":"apple-touch-icon"},{"sizes":"120x120"},{"href":"../../imgZoom/apple-touch-icon.png"})
addFavicon("link",{"rel":"icon"},{"type":"image/png"},{"sizes":"32x32"},{"href":"../../imgZoom/favicon-32x32.png"})
addFavicon("link",{"rel":"icon"},{"type":"image/png"},{"sizes":"16x16"},{"href":"../../imgZoom/favicon-16x16.png"})
addFavicon("link",{"rel":"manifest"},{"href":"../../imgZoom/site.webmanifest"})
addFavicon("link",{"rel":"mask-icon"},{"href":"../../imgZoom/safari-pinned-tab.svg"},{"color":"#00c7ff"})
addFavicon("meta",{"name":"msapplication-TileColor"},{"content":"#ffffff"})
addFavicon("meta",{"name":"theme-color"},{"content":"#ffffff"})
document.head.removeChild(document.querySelector("head script[src='../../js/favicon.js']"))