import { Input } from "./elements/sw-input.mjs"
import { Signup } from "./components/hb-signup.mjs"
import SwTooltip from "./elements/sw-tooltip.mjs"

customElements.define("sw-input", Input, {extends: "input"})
customElements.define("hb-signup", Signup)
customElements.define("sw-tooltip", SwTooltip)