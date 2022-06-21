import {LitElement, html, css} from 'lit'


export class Toast extends LitElement {
render(){
    return html`
    <label>
    Toast Lit
    </label>
    `
}

}
customElements.define('rui-toast', Toast);