const template = document.createElement("template");
template.innerHTML = `
    <style>
        :host {
            display: block;
        }
    </style>
    <slot></slot>
`

export class SwTimer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.start = this.start.bind(this)
    }

    connectedCallback() {
        const form = this.querySelector("form")
        form.addEventListener("submit", this.start)
    }

    start(event) {
        //console.log(event.composedPath())
        event.preventDefault()
        const hours = this.querySelector("input[name=hours]")
        console.log(hours.value)
        const data = new FormData(event.target)
        console.log(data.get("minutes"))
    }


}