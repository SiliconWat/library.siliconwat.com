import { TpInput } from "./tags/tp-input.mjs"
customElements.define("tp-input", TpInput, {extends: "input"})

import { HbSignup } from "./components/hb-signup.mjs"
customElements.define("hb-signup", HbSignup)

import SwTooltip from "./elements/sw-tooltip.mjs"
customElements.define("sw-tooltip", SwTooltip)

import {SwTabs, SwTab, SwPanel} from "./elements/sw-tabs.mjs"
customElements.define("sw-tabs", SwTabs)
customElements.define("sw-tab", SwTab)
customElements.define("sw-panel", SwPanel)

import TpUl from "./tags/tp-ul.mjs"
customElements.define("tp-ul", TpUl, {extends: "ul"})