const template = document.createElement("template");
template.innerHTML = `
    <style>
        :host {

        }
    </style>
    <slot></slot>
`

export class SwHeroCard extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:"open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}