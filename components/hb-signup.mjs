import {css, html} from "../render.mjs"

export class HbSignup extends HTMLElement {
    constructor() {
        super()
        const shadow = this.attachShadow({mode: "open"})
        shadow.appendChild(this.style)
        shadow.appendChild(this.markup)
    }

    get style() {
        return css`
            input {
                outline: 2px solid green;
            }
        `
    }

    get markup() {
        return html`
            <form>
                <input />
            </form>
        `
    }
}