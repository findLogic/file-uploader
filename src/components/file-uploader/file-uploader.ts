import { html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";
import { uploadFile } from "./api/uploadFile";
import "./components/close-button/close-button";
import "./components/file-drop/file-drop";
import "./components/file-info/file-info";
import "./components/input/input";
import "./components/message/message";
import "./components/send-button/send-button";
import "./components/title/title";
import { rootStyles } from "./file-uploader.styles";
import { UploadState } from "./types/types";

@customElement("file-uploader")
export class FileUploader extends LitElement {
  static styles = [rootStyles];

  @state()
  appState: UploadState = "idle";

  @state()
  file: File | null = null;

  @state()
  userInputFileName: string = "";

  @state()
  message: string = "";
  @state()
  filename: string = "";
  @state()
  name: string = "";
  @state()
  timestamp: string = "";

  render() {
    const showMessage =
      this.appState === "message-error" || this.appState === "message-success";

    return html`
      <div class="warapper">
        ${showMessage
          ? html`<div class="message-screen">
              <component-message
                .appState=${this.appState}
                s
                .message=${this.message}
                .filename=${this.filename}
                .name=${this.name}
                .timestamp=${this.timestamp}
              ></component-message>
              <component-close-button
                action="close"
                top="11px"
                right="12px"
                @action-triggered=${this.handleAction}
              ></component-close-button>
            </div>`
          : html`
              <div class="screen">
                <component-close-button
                  action="close"
                  top="11px"
                  right="12px"
                  ?disabled=${this.appState === "loading"}
                  @action-triggered=${this.handleAction}
                ></component-close-button>
                <div class="screen-wrapper">
                  <component-title .appState=${this.appState}></component-title>
                  <component-input
                    .appState=${this.appState}
                    @action-triggered=${this.handleAction}
                  ></component-input>
                  <component-file-drop
                    .appState=${this.appState}
                    @action-triggered=${this.handleAction}
                  ></component-file-drop>
                  <component-file-info
                    .appState=${this.appState}
                    .file=${this.file}
                    .userInputFileName=${this.userInputFileName}
                    @action-triggered=${this.handleAction}
                  ></component-file-info>
                  <component-send-button
                    .appState=${this.appState}
                    @action-triggered=${this.handleAction}
                  ></component-send-button>
                </div>
              </div>
            `}
      </div>
    `;
  }

  async handleAction(e: CustomEvent) {
    switch (e.detail.action) {
      case "close":
        this.appState = "idle";
        this.file = null;
        this.userInputFileName = "";
        this.message = "";
        this.filename = "";
        this.name = "";
        this.timestamp = "";

        break;
      case "filename-changed":
        this.appState = !!e.detail.value?.trim() ? "readyToDrop" : "idle";

        this.userInputFileName = e.detail.value?.trim() || "";

        break;
      case "file-changed":
        if (e.detail.value) {
          this.appState = "loadingInfo";
          this.file = e.detail.value;
        }
        break;
      case "clear-file":
        this.file = null;
        this.appState = "readyToDrop";
        break;
      case "ready-to-upload":
        this.appState = "readyToUpload";
        break;
      case "upload-to-server":
        if (this.file && this.userInputFileName) {
          this.appState = "loading";
          await uploadFile(this.file, this.userInputFileName).then((data) => {
            if (data?.result === "message-success") {
              this.appState = "message-success";
              this.message = data.data.message;
              this.filename = data.data.filename;
              this.name = data.data.name;
              this.timestamp = data.data.timestamp;
            } else if (data?.result === "message-error") {
              this.appState = "message-error";
              this.message = data.error as string;
            }
          });
        }
        break;
      default:
        console.log("Unknown action", e.detail.action);
    }
  }
}
