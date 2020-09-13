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

        this.newUsername = this.querySelector("input[name=newusername]")
        this.password = this.querySelector("input[name=password]")
        this.button = this.querySelector("button")

        this.updateUsername = this.updateUsername.bind(this)
    }

    connectedCallback() {
        const form = this.querySelector("form")
        form.addEventListener("submit", this.updateUsername)
    }

    updateUsername(event) {
        event.preventDefault()
        this.disable()

        const currentUser = window.firebase.auth().currentUser
        const users = window.firebase.firestore().collection("users")
        const usernameLowerCase = this.newUsername.value.toLowerCase()       
        const p = this.querySelector("p")
        p.textContent = ""

        reauth(currentUser, this.password.value)
            .then(() => users.where("username", "==", usernameLowerCase).get())
            .then(results => {
                if (results.empty) {
                  return users.doc(currentUser.uid).update({
                    username: usernameLowerCase
                  })
                  .then(() => this.dispatchEvent(new CustomEvent("success", {detail: {username: usernameLowerCase}})))
                  //.catch(error => p.textContent = error.message) // this might not be needed
                } else {
                  p.textContent = "This username is not available."
                }
            })
            .catch(error => p.textContent = error.message)
            .finally(() => this.enable())
    }

    disable() {
        this.dispatchEvent(new Event("submit"))
        this.newUsername.disabled = true
        this.password.disabled = true
        this.button.disabled = true
    }

    enable() {
        this.dispatchEvent(new Event("done"))
        this.newUsername.disabled = false
        this.password.disabled = false
        this.button.disabled = false
    }
}

export class HbAccountEmail extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true))

        this.newEmail = this.querySelector("input[name=newemail]")
        this.password = this.querySelector("input[name=password]")
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
            .then(() => currentUser.updateEmail(this.newEmail.value))
            .then(() => this.dispatchEvent(new Event("success")))
            .catch(error => p.textContent = error.message)
            .finally(() => this.enable())
    }

    disable() {
        this.dispatchEvent(new Event("submit"))
        this.newEmail.disabled = true
        this.password.disabled = true
        this.button.disabled = true
    }

    enable() {
        this.dispatchEvent(new Event("done"))
        this.newEmail.disabled = false
        this.password.disabled = false
        this.button.disabled = false
    }
}

export class HbAccountPassword extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true))

        this.newPassword = this.querySelector("input[name=newpassword]")
        this.password = this.querySelector("input[name=password]")
        this.button = this.querySelector("button")

        this.updatePassword = this.updatePassword.bind(this)
    }

    connectedCallback() {
        const form = this.querySelector("form")
        form.addEventListener("submit", this.updatePassword)
    }

    updatePassword(event) {
        event.preventDefault()
        this.disable()

        const currentUser = window.firebase.auth().currentUser
        const p = this.querySelector("p")
        p.textContent = ""

        reauth(currentUser, this.password.value)
            .then(() => currentUser.updatePassword(this.newPassword.value))
            .then(() => this.dispatchEvent(new Event("success")))
            .catch(error => p.textContent = error.message)
            .finally(() => this.enable())
    }

    disable() {
        this.dispatchEvent(new Event("submit"))
        this.newPassword.disabled = true
        this.password.disabled = true
        this.button.disabled = true
    }

    enable() {
        this.dispatchEvent(new Event("done"))
        this.newPassword.disabled = false
        this.password.disabled = false
        this.button.disabled = false
    }
}

export class HbAccountDelete extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}