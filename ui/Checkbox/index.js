import {LitElement, html, css} from 'lit'


export class Checkbox extends LitElement {
render(){
    return html`
    <label>
    Checkbox Lit
    </label>
    `
}

}
customElements.define('rui-checkbox', Checkbox);