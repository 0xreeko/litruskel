import { LitElement, html, css } from "lit";

export class Button extends LitElement {

    static styles = css`
        button {
            appearance: none;
        }
        `

    static properties = {
            label: {type: String},
    }

    render() {
        return html`
            <button>
                <span>${this.label}</span>
            </button>
            `
    }
}

customElements.define('rui-button', Button);