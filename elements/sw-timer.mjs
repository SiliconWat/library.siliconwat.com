import {SetInterval} from "../utils/SetTimeout.mjs"

const template = document.createElement("template");
template.innerHTML = `
    <style>
        :host {
            display: block;
        }
    </style>
    <slot></slot>
`

export class SwTimer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.start = this.start.bind(this)
    }

    connectedCallback() {
        const form = this.querySelector("form")
        form.addEventListener("submit", this.start)
    }

    start(event) {
        event.preventDefault()
        const hours = this.querySelector("input[name=hours]")
        const minutes = this.querySelector("input[name=minutes]")
        const seconds = this.querySelector("input[name=seconds]")

        const timer = new SetInterval(() => {
            if (hours.value == 0 && minutes.value == 0 && seconds.value == 0) {
                timer.stop()
            }
            else {
                if (seconds.value == 0) {
                    seconds.value = 60
                    if (minutes.value == 0) {
                        hours.value = Number(hours.value) - 1
                        minutes.value = 60
                    }
                    minutes.value = Number(minutes.value) - 1
                }
                seconds.value = Number(seconds.value) - 1
            }
        }, 1000)

        timer.start()
    }

    _start(event) {
        //console.log(event.composedPath())
        event.preventDefault()
        const hours = this.querySelector("input[name=hours]")
        const minutes = this.querySelector("input[name=minutes]")
        const seconds = this.querySelector("input[name=seconds]")
        
        const countdown = setInterval(() => {
            if (hours.value == 0 && minutes.value == 0 && seconds.value == 0) {
                clearInterval(countdown)
                this.dispatchEvent(new Event("done"))
            }
            else {
                if (seconds.value == 0) {
                    seconds.value = 60
                    if (minutes.value == 0) {
                        hours.value = Number(hours.value) - 1
                        minutes.value = 60
                    }
                    minutes.value = Number(minutes.value) - 1
                }
                seconds.value = Number(seconds.value) - 1
            }
        }, 1000)
        
        //const data = new FormData(event.target)
        //console.log(data.get("minutes"))
    }

}