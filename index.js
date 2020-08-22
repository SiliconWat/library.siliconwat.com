import { Input } from "./elements/sw-input.mjs"
import { Signup } from "./components/hb-signup.mjs"
import SwTooltip from "./elements/sw-tooltip.mjs"

import {SwTabs, SwTab, SwPanel} from "./elements/sw-tabs.mjs"

customElements.define("sw-input", Input, {extends: "input"})
customElements.define("hb-signup", Signup)
customElements.define("sw-tooltip", SwTooltip)

customElements.define("sw-tabs", SwTabs)
customElements.define("sw-tab", SwTab)
customElements.define("sw-panel", SwPanel)