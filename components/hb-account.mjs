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