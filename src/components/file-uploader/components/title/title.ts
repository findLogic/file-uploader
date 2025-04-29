import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { UploadState } from '../../types/types';
import { titleStyles } from './title.styles';

@customElement('component-title')
export class ComponentTitle extends LitElement {
  static styles = [titleStyles];

  @property({ type: String })
  appState: UploadState = 'idle';

  render() {
    if (this.appState === 'message-success' || this.appState === 'message-error') {
      return html` <div class="title-container">
        <h2 class="title">Загрузочное окно</h2>
      </div>`;
    }

    return html`
      <div class="title-container">
        <h2 class="title">Загрузочное окно</h2>
        ${this.renderInstruction()}
      </div>
    `;
  }

  private renderInstruction() {
    switch (this.appState) {
      case 'idle':
        return html`<p class="instruction">Перед загрузкой дайте имя файлу</p>`;
      case 'readyToDrop':
        return html`<p class="instruction">Перенесите ваш файл в область ниже</p> `;
      case 'readyToUpload':
        return html`<p class="instruction">Загрузите ваш файл</p>`;
      case 'loadingInfo':
        return html`<p class="instruction">Обработка файла...</p>`;
      case 'loading':
        return html`<div class="loader-container">
          <div class="loader"></div>
        </div>`;
    }
  }
}
