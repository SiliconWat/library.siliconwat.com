
const template = document.createElement("template");
template.innerHTML = `
<input placeholder="Search User"/>
<button>Search</button>
`
export class SwSearch extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}