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

export class SwCountDown extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        this.start()
    }

    start() {
        const hours = this.querySelector("h4 span:nth-child(1)")
        const minutes = this.querySelector("h4 span:nth-child(2)")
        const seconds = this.querySelector("h4 span:nth-child(3)")
        const days = this.querySelector("h3 span:nth-child(1)")
        const daysWord = this.querySelector("h3 span:nth-child(2)")

        //console.log(hours, minutes, seconds)

        const timer = new SetInterval(() => {
            if (days.textContent == 0 && hours.textContent == 0 && minutes.textContent == 0 && seconds.textContent == 0) {
                timer.stop()
            }
            else {
                if (seconds.textContent == 0) {
                    seconds.textContent = 60
                    if (minutes.textContent == 0) {
                        minutes.textContent = 60
                        if (hours.textContent == 0) {
                            days.textContent = Number(days.textContent) - 1
                            hours.textContent = 24
                            daysWord.textContent = days.textContent == 1 ? "day" : "days"
                        }
                        hours.textContent = Number(hours.textContent) - 1
                    }
                    minutes.textContent = Number(minutes.textContent) - 1
                }
                seconds.textContent = Number(seconds.textContent) - 1
            }
        }, 1000)

        timer.start()
    }
    
}