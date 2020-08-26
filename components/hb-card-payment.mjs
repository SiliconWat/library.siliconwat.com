const template = document.createElement("template");
template.innerHTML = `
    <style>
        ::slotted(h2) {
        color: blue;
    }
        ::slotted(h3) {
        color: blue;
    }
        ::slotted(label) {
        color: blue;
    }
        ::slotted(input) {
        border: 2px solid blue;
    }
        ::slotted(form) {
        border: 2px solid blue;
    }
    </style>

    <slot name="paymentsection"></slot>
    <slot name="title"></slot>
    <form>
        <slot name="label"></slot>
        <slot name="input"></slot>
    </form>
    
    `

   export class HbCardPayment extends HTMLElement{
        constructor(){
            super();
            this.attachShadow({mode: "open"});
            this.shadowRoot.appendChild(template.content.cloneNode(true));

        }
    }