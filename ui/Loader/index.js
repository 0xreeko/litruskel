import {LitElement, html, css} from 'lit'


export class Loader extends LitElement {
render(){
    return html`
    <label>
    Loader Lit
    </label>
    `
}

}

customElements.define('rui-loader', Loader);