import {LitElement, html, css} from 'lit'


export class Toggle extends LitElement {
render(){
    return html`
    <label>
    Toggle Lit
    </label>
    `
}

}

customElements.define('rui-toggle', Toggle);