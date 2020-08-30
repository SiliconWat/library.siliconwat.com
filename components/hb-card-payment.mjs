const template = document.createElement("template");
template.innerHTML = `
    <style>
        :host {
            display: block;
        }
    </style>
    <slot>
        <form></form>
    </slot>
    
    `

   export class HbCardPayment extends HTMLElement{
        constructor(){
            super();
            this.attachShadow({mode: "open"});
            this.shadowRoot.appendChild(template.content.cloneNode(true));

        }
    }