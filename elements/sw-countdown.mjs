const template = document.createElement("template");
template.innerHTML = `
    <style>
        ::slotted(label) {
            font-weight: bold;
            font-size: 2em;
        }
        ::slotted(h3) {
            color: blue;
        }
        ::slotted(h4) {
            color: blue;
        }
    </style>
    <slot name="title"></slot>
    <slot name="days"></slot>
    <slot name="time"></slot>
`

export class SwCountDown extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}