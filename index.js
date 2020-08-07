import { Input } from "./elements/inherited/sw-input.mjs"
import { Signup } from "./elements/autonomous/sw-signup.mjs"

customElements.define("sw-input", Input, {extends: "input"})
customElements.define("sw-signup", Signup)