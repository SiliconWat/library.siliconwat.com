const template = document.createElement("template");
template.innerHTML = `
    <style>

    </style>
    <slot></slot>
`

export class HbSignup extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}