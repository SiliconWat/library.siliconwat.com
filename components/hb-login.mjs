const template = document.createElement("template")
template.innerHTML = `
    <style>
        :host {
            display: block;
        }
    </style>
    <slot></slot>  
`
export class HbLogin extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true))

        this.logIn = this.logIn.bind(this)
    }

    connectedCallback() {
        const form = this.querySelector("form")
        form.addEventListener("submit", this.logIn)
    }

    logIn(event) {
        event.preventDefault()
        const formData = new FormData(event.target)
        const p = this.querySelector("p")
        
        window.firebase.auth().signInWithEmailAndPassword(formData.get("email"), formData.get("password"))
	    .then(() => this.dispatchEvent(new Event("success")))
	    .catch(error => p.textContent = error.message)
    }
}