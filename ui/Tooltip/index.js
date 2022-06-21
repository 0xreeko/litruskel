import {LitElement, html} from 'lit';


export class Tooltip extends LitElement {
    render(){
        return html`
        <span>
        Tooltip Lit
        </span>
        `
    }
}

customElements.define('rui-tooltip', Tooltip);