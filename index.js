import {TpInput} from "./tags/tp-input.mjs"
customElements.define("tp-input", TpInput, {extends: "input"})

import {SwTooltip} from "./elements/sw-tooltip.mjs"
customElements.define("sw-tooltip", SwTooltip)

import {SwTabs, SwTab, SwPanel} from "./elements/sw-tabs.mjs"
customElements.define("sw-tabs", SwTabs)
customElements.define("sw-tab", SwTab)
customElements.define("sw-panel", SwPanel)

import {TpUl} from "./tags/tp-ul.mjs"
customElements.define("tp-ul", TpUl, {extends: "ul"})

import {SwInfoCard} from "./elements/sw-info-card.mjs"
customElements.define("sw-info-card", SwInfoCard)

import {SwHeroCard} from "./elements/sw-hero-card.mjs"
customElements.define("sw-hero-card", SwHeroCard, )

import {SwSearch} from "./elements/sw-search.mjs"
customElements.define("sw-search", SwSearch)

import {SwProgress} from "./elements/sw-progress.mjs"
customElements.define("sw-progress", SwProgress)

import {HbAvatar} from "./components/hb-avatar.mjs"
customElements.define("hb-avatar", HbAvatar)

import {HbCardPayment} from "./components/hb-card-payment.mjs"
customElements.define("hb-card-payment", HbCardPayment)

import {HbAccount} from "./components/hb-account.mjs"
customElements.define("hb-account", HbAccount)

import {HbLogin} from "./components/hb-login.mjs"
customElements.define("hb-login", HbLogin)

import {HbSignup} from "./components/hb-signup.mjs"
customElements.define("hb-sign-up", HbSignup)

import {SwCountDown} from "./elements/sw-countdown.mjs"
customElements.define("sw-countdown", SwCountDown)

import {SwTimer} from "./elements/sw-timer.mjs"
customElements.define("sw-timer", SwTimer)

import {HbLogout} from "./components/hb-logout.mjs"
customElements.define("hb-logout", HbLogout)

///////////////

const countdown = document.querySelector("sw-countdown")
//countdown.addEventListener("done", () => alert("Surprise! You win!"))

const firebaseConfig = {
    apiKey: "AIzaSyD0yaO6l8kQw9zxHmSHs0gney9rM2Gbf9M",
    authDomain: "silicon-wat.firebaseapp.com",
    databaseURL: "https://silicon-wat.firebaseio.com",
    projectId: "silicon-wat",
    storageBucket: "silicon-wat.appspot.com",
    messagingSenderId: "460247639477",
    appId: "1:460247639477:web:6aca765d659417fd80e5fc",
    measurementId: "G-FWZCEFDZ93"
  };

  firebase.initializeApp(firebaseConfig);

  const signup = document.querySelector("hb-signup");
  signup.addEventListener("success", () => console.log("successfully signed up"))

  const login = document.querySelector("hb-login")
  login.addEventListener("success", () => console.log("logged in"))