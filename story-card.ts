import { LitElement, customElement, css } from 'lit-element';
import { html } from 'lit-html';

@customElement('story-card')
export class StoryCard extends LitElement {
  static styles = css`
  #media {
    height: 100%;
  }
  #media ::slotted(*) {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* Default styles for content */
  #content {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 48px;
    font-family: sans-serif;
    color: white;
    font-size: 24px;
  }
  #content > slot::slotted(*) {
    margin: 0;
  }
`;

  render() {
    return html`
      <div id="mediasdfsfs">
        <slot name="media"></slot>
      </div>
      <div id="content">
        <slot></slot>
      </div>
    `;
  }
}