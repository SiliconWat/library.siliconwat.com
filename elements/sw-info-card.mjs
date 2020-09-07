const template = document.createElement("template");
template.innerHTML = `
    <style>
        :host {
            display: block;
            border: 1px solid grey;
        }
    </style>
    <slot></slot>
`

export class SwInfoCard extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }

}