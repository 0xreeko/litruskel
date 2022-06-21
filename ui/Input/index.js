import {LitElement, html, css} from 'lit'


export class Input extends LitElement {
    render(){
        return html`
        <label>
        Input Lit
        </label>
        `
    }
}

customElements.define('rui-input', Input);