const template = document.createElement("template")
template.innerHTML = `
    <style>
        :host {
            
        }
    </style>
    <slot>
        <form></form>
    </slot>
        
`
export class HbLogin extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}