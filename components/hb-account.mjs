const template = document.createElement("template");
template.innerHTML = `
    <style>
        ::slotted(form) {
            border: 2px solid blue;
        }
        ::slotted(h3) {
            color:blue;
        }
        ::slotted(b) {
            color:blue;
        }
        ::slotted(label) {
            color: blue;
        }
        ::slotted(input) {
            border: 2px solid blue;
            color: white;
        }
    </style>
    <slot name="title"></slot>
    <slot name="form"></slot>
    <slot name="email"></slot>
    <slot name="label"></slot>
    <slot name="input"></slot>
    `

export class HbAccount extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}