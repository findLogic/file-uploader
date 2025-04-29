import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { UploadState } from '../../types/types';
import { messageStyles } from './message.styles';

@customElement('component-message')
export class ComponentMessage extends LitElement {
  static styles = [messageStyles];

  @property({ type: String })
  appState: UploadState = 'idle';

  @property()
  message: string = '';
  @property()
  filename: string = '';
  @property()
  name: string = '';
  @property()
  timestamp: string = '';

  render() {
    if (this.appState !== 'message-error' && this.appState !== 'message-success') {
      return html``;
    }

    let title = 'Файл успешно загружен';
    let content = html``;

    if (this.appState === 'message-success') {
      title = 'Файл успешно загружен';
      content = html` <p>name: ${this.name}</p>
        <p>file: ${this.filename}</p>
        <p>timestamp: ${this.timestamp}</p>
        <p>message: ${this.message}</p>`;
    }

    if (this.appState === 'message-error') {
      title = 'Ошибка в загрузке файла';
      content = html`<p>${this.message}</p>`;
    }

    return html`
      <div class="message-wrapper">
        <div class="message">
          <h1>${title}</h1>
          <div class="file-info">${content}</div>
        </div>
      </div>
    `;
  }
}
