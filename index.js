import { Input } from "./elements/sw-input.mjs"
import { Signup } from "./components/hb-signup.mjs"

customElements.define("sw-input", Input, {extends: "input"})
customElements.define("sw-signup", Signup)