import {LitElement, html, css} from 'lit'


export class Radio extends LitElement {

    static properties = {
        name: {type: String},
    }
    render(){
        return html`
        <span>
        ${this.name}
        </span>
        `
    }
}

customElements.define('rui-radio', Radio);