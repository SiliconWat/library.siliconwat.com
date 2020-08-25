const template = document.createElement("template");
template.innerHTML = `
    <style>
        ::slotted(h3) {
            color: blue;
        }
        ::slotted(img) {
            border: 2px solid blue;
        }
        ::slotted(p) {
            color: gray;
        }
    </style>
    <slot name="title"></slot>
    <slot name="picture"></slot>
    <slot name="description"></slot>
`

export class SwHeroCard extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:"open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}