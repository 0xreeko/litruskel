import {LitElement, html, css} from 'lit'
import { rootStyles } from '../root.styles';


export class Select extends LitElement {

    static styles = css`
    ${rootStyles}

    select {
        border: 1px solid #ccc;
        padding: 0.45rem 1.5rem 0.45rem 0.5rem;
        border-radius: var(--rounded-sm); 
        background-color: rgba(var(--sylver-500) , 0.2);
        color: rgba(var(--ruby-500), 1);
    }
    .select {
        position: relative;
        width: fit-content;
        display: inline-block;
    }
    svg {
        width: 16px;
        height: 16px;
        margin-left: 1rem; 
    }
    button {
        height: 32px;
        border-radius: var(--rounded-md);
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: rgba(var(--sylver-500), 1);
        padding: 0.5rem 1rem;
        border: none;
        width: 100%;
    }
    ul {
        transition-duration: 500ms;
        position: absolute;
        margin-top: 0.5rem;
        display: none;
        z-index: 10;
        width: 100%;
        max-height: 10rem;
        padding: 0.25rem 0.1rem;
        border: 1px solid rgba(var(--sylver-500), 1);
        border-radius: var(--rounded-md);
        overflow-y: auto;
        overflow-x: hidden;
        background-color: rgba(var(--sylver-500), 1);
    }
    li {
        list-style: none;
        padding: 0.5rem 0 0 0.75rem;
        cursor: pointer;
        transition-duration: 300ms;
        border-radius: var(--rounded-xs);
    }
    li:hover {
        background-color: rgba(var(--sylver-400), 1);
        }
    `

    constructor(){
        super();
        this.modal = false;
    }
    modalStatus() {
        this.modal = !this.modal;
        this.dispatchEvent(new CustomEvent('modal-status'));
    }
    render(){
        return html`
        <div class="select" @click=${this.modalStatus}>
        <select>
            <option value="" disabled>Select a chain</option>
            <option value="">Amethyst</option>
            <option value="">Aqua</option>
            <option value="">Azure</option>
            <option value="">Jade</option>
            <option value="">Jasper</option>
            <option value="">Kunzite</option>
            <option value="">Moonstone</option>
        </select>
        </div>
        `
    }

}

customElements.define('rui-select', Select);