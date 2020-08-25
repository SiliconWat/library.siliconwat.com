import TpInput from "./tags/tp-input.mjs"
customElements.define("tp-input", TpInput, {extends: "input"})

//import HbSignup from "./components/hb-signup.mjs"
//customElements.define("hb-signup", HbSignup)

import SwTooltip from "./elements/sw-tooltip.mjs"
customElements.define("sw-tooltip", SwTooltip)

import {SwTabs, SwTab, SwPanel} from "./elements/sw-tabs.mjs"
customElements.define("sw-tabs", SwTabs)
customElements.define("sw-tab", SwTab)
customElements.define("sw-panel", SwPanel)

import TpUl from "./tags/tp-ul.mjs"
customElements.define("tp-ul", TpUl, {extends: "ul"})

import SwInfoCard from "./elements/sw-info-card.mjs"
customElements.define("sw-info-card", SwInfoCard)

import {SwHeroCard} from "./elements/sw-hero-card.mjs"
customElements.define("sw-hero-card", SwHeroCard, )

import {SwSearch} from "./elements/sw-search.mjs"
customElements.define("sw-search", SwSearch)

import {SwProgress} from "./elements/sw-progress.mjs"
customElements.define("sw-progress", SwProgress)

import {HbAvatar} from "./components/hb-avatar.mjs"
customElements.define("hb-avatar", HbAvatar)