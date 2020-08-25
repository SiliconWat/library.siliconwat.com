const template = document.createElement("template");
template.innerHTML = `
<h3>Title</h3>
<img src="https://lh3.googleusercontent.com/n5YVojZbLIb2r9pLSVjZ0WdMqUX-ydO9PntNZF_-yl1PVFDw9ZX8u9Xhk_nVbasu_CtAiBo=s149"/>
<p>This is fruit</p>
`

export class SwHeroCard extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:"open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}