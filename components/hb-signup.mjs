const template = document.createElement("template");
template.innerHTML = `
    <style>
        :host {
            display: block;
        }
    </style>
    <slot></slot>
`

export class HbSignup extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"})
        this.shadowRoot.appendChild(template.content.cloneNode(true))

        this.signUp = this.signUp.bind(this)
    }

    connectedCallback() {
        const form = this.querySelector("form")
        form.addEventListener("submit", this.signUp)
    }

    signUp(event) {
        event.preventDefault()
        const formData = new FormData(event.target)
        const p = this.querySelector("p")

        window.firebase.auth().createUserWithEmailAndPassword(formData.get("email"), formData.get("password"))
	    .then(() => this.dispatchEvent(new Event("success")))
	    .catch(error => p.textContent = error.message)
    }
}