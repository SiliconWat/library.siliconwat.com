const template = document.createElement("template");
template.innerHTML = `
    <style>
        ::slotted() {

        }
    </style>
    <slot></slot>
`

export class SwTimer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}