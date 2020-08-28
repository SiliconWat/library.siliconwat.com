const template = document.createElement("template")
template.innerHTML = `
    <style>
        :host {
            
        }
    </style>
    <form>
        <slot name="username"></slot>
        <slot name="password"></slot>
        <slot name="login"></slot>
        <slot name="forgot"></slot>
    </form>
        
`
export class HbLogin extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}