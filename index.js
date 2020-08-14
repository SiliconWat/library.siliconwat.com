import { Input } from "./elements/sw-input.mjs"
import { Signup } from "./components/sw-signup.mjs"

customElements.define("sw-input", Input, {extends: "input"})
customElements.define("sw-signup", Signup)