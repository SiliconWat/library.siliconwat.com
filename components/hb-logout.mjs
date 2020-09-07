const template = document.createElement("template");
template.innerHTML = `
    <style>
        :host {
            display: flex;
        }
    </style>
    <slot></slot>

`

export class HbLogout extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        this.ShadowRoot.appendChild(template.content.cloneNode(true));
        this.logout = this.logout.bind(this)
    }
    connectedCallback() {
        const form = this.querySelector("form")
        form.addEventListener("submit", this.logout)
    }

    logout(event) {
        event.preventDefault()
        const formData = new FormData(event.target)
        const p = this.querySelector("p")
        
        firebase.auth().signOut()
	    .then(() => this.dispatchEvent(new Event("successly logout")))
	    .catch(error => p.textContent = error.message)
    }
}
