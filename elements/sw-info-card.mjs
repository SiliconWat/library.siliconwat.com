const template = document.createElement("template");
template.innerHTML = `
    <style>
        :host {
            display: block;
            border: 1px solid grey;
        }
        ::slotted(h3) {
            color: blue;
        }
        ::slotted(p) {
            color: green;
        }
    </style>
    <slot name="title"></slot>
    <slot name="description"></slot>
`

export default class SwInfoCard extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }

}