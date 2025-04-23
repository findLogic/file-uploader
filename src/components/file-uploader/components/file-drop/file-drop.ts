import { LitElement, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { UploadState } from "../../types/types";
import { fileDropStyles } from "./file-drop.styles";
import { folderHtml } from "./folder-html";

@customElement("component-file-drop")
export class ComponentFileDrop extends LitElement {
  static styles = [fileDropStyles];

  @property({ type: String })
  appState: UploadState = "idle";

  @state()
  private file: File | null = null;

  @state()
  private errorMessage: string | null = null;

  @state()
  private isDragging = false;

  private errorTimeout: number | null = null;

  updated(changedProperties: Map<string, unknown>) {
    if (
      changedProperties.has("appState") &&
      (this.appState === "idle" || this.appState === "readyToDrop")
    ) {
      this.clearFile();
    }
  }

  render() {
    if (["message-error", "message-success"].includes(this.appState)) {
      return html``;
    }

    return html`
      <div
        class="upload-container ${classMap({
          dragging: this.isDragging,
          error: this.errorMessage !== null,
          readyToDrop: this.appState === "readyToDrop",
        })}"
        @dragover=${this.handleDragOver}
        @dragleave=${this.handleDragLeave}
        @drop=${this.handleDrop}
      >
        <label class="upload-label">
          <input
            type="file"
            @change=${this.handleFileChange}
            ?disabled=${this.appState !== "readyToDrop"}
            accept=".txt,.json,.csv"
            hidden
          />

          <div class="upload-content">
            ${folderHtml()}
            <div class="upload-text">
              ${this.errorMessage
                ? this.errorMessage
                : this.file
                  ? html`<span class="file-name"
                      >${this.formatFileName(this.file)}</span
                    >`
                  : "Перенесите ваш файл в область ниже"}
            </div>
            ${this.file
              ? html`
                  <div class="file-info">
                    Размер: ${(this.file.size / 1024).toFixed(2)} KB
                  </div>
                `
              : ""}
          </div>
        </label>
      </div>
    `;
  }

  private formatFileName(file: File): string {
    const extension = this.getFileExtension(file);
    const nameWithoutExt = file.name.replace(/\.[^/.]+$/, "");

    return nameWithoutExt.length <= 20
      ? file.name
      : `${nameWithoutExt.substring(0, 20)}...${extension}`;
  }

  private getFileExtension(file: File): string {
    const mimeMap: Record<string, string> = {
      "text/plain": ".txt",
      "application/json": ".json",
      "text/csv": ".csv",
    };

    return file.type && mimeMap[file.type]
      ? mimeMap[file.type]
      : file.name.slice(Math.max(0, file.name.lastIndexOf(".")));
  }

  private handleDragOver(e: DragEvent) {
    e.preventDefault();
    if (this.appState === "readyToDrop") {
      this.isDragging = true;
    }
  }

  private handleDragLeave() {
    this.isDragging = false;
  }

  private handleDrop(e: DragEvent) {
    e.preventDefault();
    this.isDragging = false;

    if (this.appState !== "readyToDrop" || !e.dataTransfer?.files) return;

    this.processFiles(e.dataTransfer.files);
  }

  private handleFileChange(e: Event) {
    const input = e.target as HTMLInputElement;
    if (!input.files) return;

    this.processFiles(input.files);
  }

  private processFiles(files: FileList) {
    this.clearError();

    if (files.length > 1) {
      this.showError("Можно загрузить только один файл");
      return;
    }

    const file = files[0];
    const extension = this.getFileExtension(file);
    const allowedExtensions = [".txt", ".json", ".csv"];

    if (!allowedExtensions.includes(extension)) {
      this.showError("Допустимы только файлы .txt, .json, .csv");
      return;
    }

    if (file.size > 1024) {
      this.showError("Файл слишком большой (макс. 1 КБ)");
      return;
    }

    this.file = file;
    this.dispatchFileChanged();
  }

  private showError(message: string) {
    this.errorMessage = message;
    this.errorTimeout = window.setTimeout(() => {
      this.errorMessage = null;
    }, 3000);
  }

  private clearError() {
    if (this.errorTimeout) {
      clearTimeout(this.errorTimeout);
      this.errorTimeout = null;
    }
    this.errorMessage = null;
  }

  private clearFile() {
    this.file = null;
    this.clearError();

    const fileInput = this.shadowRoot?.querySelector(
      'input[type="file"]',
    ) as HTMLInputElement;
    if (fileInput) {
      fileInput.value = "";
    }

    this.dispatchFileChanged();
  }

  private dispatchFileChanged() {
    this.dispatchEvent(
      new CustomEvent("action-triggered", {
        detail: {
          action: "file-changed",
          value: this.file,
        },
        bubbles: true,
        composed: true,
      }),
    );
  }
}
