import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { UploadState } from '../../types/types';
import { inputStyles } from './input.styles';

@customElement('component-input')
export class ComponentInput extends LitElement {
  static styles = [inputStyles];

  @property({ type: String })
  appState: UploadState = 'idle';

  @state()
  private inputValue = '';

  render() {
    if (this.appState === 'idle') {
      this.clearInput();
    }

    if (this.appState !== 'idle' && this.appState !== 'readyToDrop') {
      return html``;
    }

    return html`
      <div class="input-container">
        <input
          type="text"
          .value=${this.inputValue}
          @input=${this.handleInput}
          placeholder="Название файла"
        />

        <component-close-button
          action="filename-changed"
          top="6px"
          right="6px"
          color=${this.inputValue.length > 0 ? 'var(--app-accent)' : 'var(--grey)'}
          only-icon
          @action-triggered=${this.clearInput}
        ></component-close-button>
      </div>
    `;
  }

  private handleInput(e: Event) {
    this.inputValue = (e.target as HTMLInputElement).value;
    this.dispatchEvent(
      new CustomEvent('action-triggered', {
        detail: {
          action: 'filename-changed',
          value: this.inputValue,
        },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private clearInput() {
    this.inputValue = '';
  }
}
