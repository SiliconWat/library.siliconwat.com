const template = document.createElement("template")
template.innerHTML = `
    <style>
        ::slotted(input) {
            padding: 5px;
            border: 2px solid blue;
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