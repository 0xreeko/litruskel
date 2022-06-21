import {LitElement, html, css} from 'lit'


export class Select extends LitElement {
render(){
    return html`
    <label>
    Select Lit
    </label>
    `
}

}

customElements.define('rui-select', Select);