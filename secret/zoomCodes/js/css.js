"use strict"
function addCSS(...param) {
    let block = document.createElement("link")
    for (let index = 0; index < param.length; index++) {
        let paramKeys = Object.keys(param[index])
        let paramValues = Object.values(param[index])
        block.setAttribute(paramKeys,paramValues)
    }
    document.head.appendChild(block)
}
addCSS({"rel":"stylesheet"},{"href":"../../css/style.css"})
addCSS({"rel":"stylesheet"},{"href":"../../css/nav.css"})
addCSS({"rel":"stylesheet"},{"href":"../../css/class.css"})

document.head.removeChild(document.querySelector("head script[src='../../js/css.js']"))