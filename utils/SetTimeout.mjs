export class SetInterval {
    constructor(callback, interval) {
        this.interval = interval
        this.callback = callback.bind(this)
        this.step = this.step.bind(this)
    }

    start() {
        this.expected = Date.now() + this.interval
        this.timeout = setTimeout(this.step, this.interval)
    }

    step() {
        const lag = Date.now() - this.expected // lag > this.interval
        this.timeout = setTimeout(this.step, this.interval - lag)
        this.callback()
        this.expected += this.interval
    }

    stop() {
        clearTimeout(this.timeout)
    }
}