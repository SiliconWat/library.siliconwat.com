const template = document.createElement("template");
template.innerHTML = `
    <style>
        :host {
            display: block;
        }
    </style>
    <slot></slot>
`

export class SwCountDown extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    start() {
        const hours = this.querySelector("h4 span")
        const minutes = this.querySelector("input[name=minutes]")
        const seconds = this.querySelector("input[name=seconds]")
    }
    
}