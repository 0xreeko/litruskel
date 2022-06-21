import { LitElement, html, css } from "lit";
import { rootStyles } from "../root.styles";

export class Pill extends LitElement {

    static properties = {
        name: {type: String},
        color: {type: String},
    }

    constructor(){
        super();
        this.name;
        this.color = 'amethyst';
    }

    static styles = css`
        ${rootStyles}

        .pill::before {
            content: "6+";
            display: flex;
            width: 1rem;
            height: 1rem;
            border-radius: 50%;
            background-color: rgba(var(--ruby-500), 1);
            position: absolute;
            color: white;
            justify-content: center;
            align-items: center;
            right: -0.4rem;
            top: -0.4rem;
        }

        .pill {
            display: flex; 
            padding: 0.25rem 0.5rem;
            transition-duration: 300ms; 
            font-weight: 700; 
            align-items: center; 
            user-select: none; 
            font-size: var(--text-size);
            background-color: rgba(var(--amethyst-500) , 0.2);
            border-radius: var(--rounded-xs);
            color: rgba(var(--amethyst-500), 1);
            width: fit-content;
            text-transform: uppercase;
            letter-spacing: 0.05rem;
          }

          :hover {
            color: rgba(var(--amethyst-500), .2);
          }
            
          .dot {
            width: 4px;
            height: 4px;
            border-radius: 100%;
            margin-right: 4px;
            background-color: rgba(var(--amethyst-500) , 0.2);
          }
        `

    render(){
        return html`   
           <div style="display:inline-block; position:relative;">
            <div class='pill'>
                <span>${this.name}</span>
            </div>
           </div>
        `;
    }
}

customElements.define('rui-pill', Pill);