const template = document.createElement("template");
template.innerHTML = `
    <style>
        :host {
            display: block;
        }
    </style>
    <slot></slot>
`

export class HbAccount extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}

export class HbAccountVerify extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true))

        this.user = null
        this.button = this.querySelector("button")
        this.sendEmailVerification = this.sendEmailVerification.bind(this)
    }

    connectedCallback() {
        const form = this.querySelector("form")
        form.addEventListener("submit", this.sendEmailVerification)

        window.firebase.auth().onAuthStateChanged(user => {
            this.user = user
            const label = this.querySelector("label")
            label.textContent = user.email
        })
    }

    sendEmailVerification(event) {
        event.preventDefault()
        this.disable()

        this.user.sendEmailVerification()
        .then(() => this.dispatchEvent(new Event("success")))
        .catch(error => console.error(error.message))
        .finally(() => this.enable())
    }

    disable() {
        this.dispatchEvent(new Event("click"))
        this.button.disabled = true
    }

    enable() {
        this.dispatchEvent(new Event("done"))
        this.button.disabled = false
    }
}

function reauth(currentUser, password) {
    const credential = window.firebase.auth.EmailAuthProvider.credential(currentUser.email, password)
    return currentUser.reauthenticateWithCredential(credential)
}

export class HbAccountUsername extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}

export class HbAccountEmail extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true))

        this.email = this.querySelector("input[type=email]")
        this.password = this.querySelector("input[type=password]")
        this.button = this.querySelector("button")

        this.updateEmail = this.updateEmail.bind(this)
    }

    connectedCallback() {
        const form = this.querySelector("form")
        form.addEventListener("submit", this.updateEmail)
    }

    updateEmail(event) {
        event.preventDefault()
        this.disable()
        
        const currentUser = window.firebase.auth().currentUser
        const p = this.querySelector("p")
        p.textContent = ""

        reauth(currentUser, this.password.value)
            .then(() => currentUser.updateEmail(this.email.value))
            .then(() => this.dispatchEvent(new Event("success")))
            .catch(error => p.textContent = error.message)
            .finally(() => this.enable())
    }

    disable() {
        this.dispatchEvent(new Event("submit"))
        this.email.disabled = true
        this.password.disabled = true
        this.button.disabled = true
    }

    enable() {
        this.dispatchEvent(new Event("done"))
        this.email.disabled = false
        this.password.disabled = false
        this.button.disabled = false
    }
}

export class HbAccountPassword extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}

export class HbAccountDelete extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}