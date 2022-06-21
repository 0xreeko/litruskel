import {LitElement, html, css} from 'lit'


export class Card extends LitElement {
render(){
    return html`
    <label>
    Card Lit
    </label>
    `
}

}

customElements.define('rui-card', Card);