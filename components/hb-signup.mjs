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
        const data = new FormData(event.target)
        console.log(data.get("email"))

        firebase.auth().createUserWithEmailAndPassword(email, password)
	    .then(() => console.log("signed up but need to verify email"))
	    .catch(error => console.error(error.message))
    }
}

function signUp(email, password) {
	firebase.auth().createUserWithEmailAndPassword(email, password)
	.then(() => console.log("signed up but need to verify email"))
	.catch(error => console.error(error.message))
}