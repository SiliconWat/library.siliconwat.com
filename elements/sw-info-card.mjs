const template = document.createElement("template");
template.innerHTML = `
<h3>Account</h3>
<p>Name</p>
`


export default class SwInfoCard extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }

}