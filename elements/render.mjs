export function css(strings) {
    const style = document.createElement("style")
    style.textContent = strings
    return style
} 

export function html(strings) {
    const template = new DOMParser().parseFromString(strings, "text/html")
    return template.documentElement.childNodes[1].firstChild
} 