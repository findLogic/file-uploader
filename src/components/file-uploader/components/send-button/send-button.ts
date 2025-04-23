import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { UploadState } from "../../types/types";
import { sendButtonStyles } from "./send-button.styles";

@customElement("component-send-button")
export class ComponentSendButton extends LitElement {
  static styles = [sendButtonStyles];

  @property({ type: String })
  appState: UploadState = "idle";

  render() {
    return html`
      <button
        ?disabled=${this.appState !== "readyToUpload"}
        class="upload-button"
        @click=${this.uploadToServer}
      >
        Загрузить на сервер
      </button>
    `;
  }

  private uploadToServer() {
    this.dispatchEvent(
      new CustomEvent("action-triggered", {
        detail: {
          action: "upload-to-server",
        },
        bubbles: true,
        composed: true,
      }),
    );
  }
}
