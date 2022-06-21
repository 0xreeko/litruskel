import { LitElement, html } from "lit";

export class Pill extends LitElement {

    static properties = {
        name: {type: String},
    }

    render(){
        return html`   
        <div>
            <div class="flex items-center">
                <span class="h-1 w-1 mr-1 rounded-full bg-green-500"></span>
                <span>${this.name}</span>
            </div>
        </div>
        `;
    }
}

customElements.define('rui-pill', Pill);