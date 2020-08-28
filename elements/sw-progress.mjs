const template = document.createElement("template");
template.innerHTML = `
    <style>
        :host {
            display: block
        }
    </style>
    <slot></slot>
    `

export class SwProgress extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}