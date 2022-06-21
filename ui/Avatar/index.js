import {LitElement, html, css} from 'lit';

export class Avatar extends LitElement {
  
  static styles = css`
  
`;

  constructor() {
    super();
  }
  render() {
    return html`<p>
      <slot name="placeholder"></slot>
    </p>`;
  } 
}

customElements.define('rui-avatar', Avatar);