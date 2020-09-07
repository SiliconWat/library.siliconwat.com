const template = document.createElement("template");
template.innerHTML =`
    <slot></slot>
`

export class HbFollow extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}