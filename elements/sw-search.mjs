
const template = document.createElement("template");
template.innerHTML = `
    <style>
        ::slotted(input) {
            border: 2px solid blue;
        }
        ::slotted(button) {
            border: 2px solid blue;
            background-color: blue;
            color: white;
        }
    </style>
    <slot name="text"></slot>
    <slot name="search-button"></slot>
`
export class SwSearch extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}