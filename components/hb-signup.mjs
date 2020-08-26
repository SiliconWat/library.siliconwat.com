const template = document.createElement("template");
template.innerHTML = `
    <style>
        ::slotted(input) {
            border: 2px solid blue;
        }
    </style>
    <form>
        <slot name="username"></slot>
        <slot name="password"></slot>
        <slot name="register"></slot>
    </form>
`

export class HbSignup extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}