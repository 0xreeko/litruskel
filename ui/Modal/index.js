import {LitElement, html, css} from 'lit'


export class Modal extends LitElement {
render(){
    return html`
    <label>
    Modal Lit
    </label>
    `
}

}

customElements.define('rui-modal', Modal);