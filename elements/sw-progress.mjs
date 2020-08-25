const template = document.createElement("template");
template.innerHTML = `
    <style>
    ::slotted(label) {
        color: blue;
    }
    ::slotted(progress){
        border: 2px solid blue;
        background-color: white;
    }
    </style>
    <slot name="label"></slot>
    <slot name="bar"></slot>
`
  

export class SwProgress extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}