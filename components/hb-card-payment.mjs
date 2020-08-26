const template = document.createElement("template");
template.innerHTML = `
    <script>
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
    </script>

    <slot name="paymentSection"></slot>
    <slot name="paytitle"></slot>
    <slot name="label"></slot>
    <slot name="input"></slot>
    
    `

   export class HbCardPayment extends HTMLElement{
        constructor(){
            super();
            this.attachShadow({mode: "open"});
            this.shadowRoot.appendChild(template.content.cloneNode(true));

        }
    }