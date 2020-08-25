const template = document.createElement("template");
template.innerHTML = `
    <style>
        :host {
            display: block;
        }
        ::slotted(img){
            border: 5px inset blue;
        }
        ::slotted(label){
            color: blue;
        }
        ::slotted(input){
            outline: 2px solid blue;
        }
    </style>
    <slot name="image"></slot>
    <slot name="label"></slot>
    <slot name="upload-image"></slot>
`
export class HbAvatar extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}