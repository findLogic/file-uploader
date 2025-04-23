import { LitElement, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { fileInfoStyles } from "./file-info.styles";
import { UploadState } from "../../types/types";

@customElement("component-file-info")
export class ComponentFileInfo extends LitElement {
  static styles = [fileInfoStyles];

  @property({ type: String })
  appState: UploadState = "idle";

  @property()
  userInputFileName: string = "";

  @property({ type: Object })
  file: File | null = null;

  @state()
  private progress = 0;

  @state()
  private hideProgress = false;

  @state()
  private enlargeText = false;

  private animationFrameId: number | null = null;
  private startTime: number | null = null;
  private readonly duration = 1500;
  private readonly enlargeDelay = 1500;
  private isAnimating = false;

  connectedCallback() {
    super.connectedCallback();
    this.handleAppStateChange();
  }

  disconnectedCallback() {
    this.stopAnimation();
    super.disconnectedCallback();
  }

  willUpdate(changedProperties: Map<string, unknown>) {
    if (changedProperties.has("appState")) {
      this.handleAppStateChange();
    }
  }

  private handleAppStateChange() {
    if (this.appState === "loadingInfo") {
      this.resetAnimation();
      this.startAnimation();
    } else if (
      this.appState === "readyToUpload" ||
      this.appState === "loading"
    ) {
      this.stopAnimation();
      this.progress = 1;
      this.hideProgress = true;
      this.enlargeText = true;
    } else {
      this.stopAnimation();
      this.resetAnimation();
    }
  }

  private resetAnimation() {
    this.progress = 0;
    this.hideProgress = false;
    this.enlargeText = false;
    this.isAnimating = false;
  }

  private startAnimation() {
    this.stopAnimation();
    this.startTime = performance.now();
    this.isAnimating = true;
    this.animationFrameId = requestAnimationFrame(
      this.animateLoading.bind(this),
    );
  }

  private stopAnimation() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
    this.isAnimating = false;
  }

  private animateLoading(timestamp: number) {
    if (!this.isAnimating) return;

    const elapsed = timestamp - (this.startTime || timestamp);

    if (elapsed < this.duration) {
      const newProgress = Math.min(elapsed / this.duration, 1);
      if (newProgress !== this.progress) {
        this.progress = newProgress;
      }
    } else if (!this.hideProgress) {
      this.hideProgress = true;
      this.dispatchReadyToUpload();
    } else if (elapsed >= this.enlargeDelay && !this.enlargeText) {
      this.enlargeText = true;
    }

    if (elapsed < this.enlargeDelay || !this.enlargeText) {
      this.animationFrameId = requestAnimationFrame(
        this.animateLoading.bind(this),
      );
    } else {
      this.isAnimating = false;
    }
  }

  private getFileExtension(): string {
    if (!this.file) return "";

    const mimeMap: Record<string, string> = {
      "text/plain": ".txt",
      "application/json": ".json",
      "text/csv": ".csv",
    };

    return this.file.type && mimeMap[this.file.type]
      ? mimeMap[this.file.type]
      : this.file.name.slice(this.file.name.lastIndexOf(".") || 0);
  }

  private dispatchReadyToUpload() {
    this.dispatchEvent(
      new CustomEvent("action-triggered", {
        detail: { action: "ready-to-upload" },
        bubbles: true,
        composed: true,
      }),
    );
  }

  render() {
    if (!["loadingInfo", "readyToUpload", "loading"].includes(this.appState)) {
      return html``;
    }

    const extension = this.getFileExtension();
    const displayName = this.userInputFileName + extension;
    const percent = Math.round(this.progress * 100);

    return html`
      <div class="file" ?disabled=${this.appState === "loading"}>
        <div class="file-wrapper">
          <div class="icon" aria-hidden="true"></div>
          <div class="name-upload-line">
            <div class="name-percent">
              <span class="file-name ${this.enlargeText ? "enlarged" : ""}">
                ${displayName}
              </span>
              <span
                class="upload-percent ${this.enlargeText ? "enlarged" : ""}"
              >
                ${percent}%
              </span>
            </div>
            <div class="upload-line ${this.hideProgress ? "hidden" : ""}">
              <div class="rectangle-wrapper">
                <div
                  class="rectangle-color"
                  style="width: ${this.progress * 100}%"
                ></div>
              </div>
            </div>
          </div>
          <component-close-button
            top="3px"
            right="3px"
            action="clear-file"
            color="var(--app-accent)"
            ?disabled=${this.appState === "loading"}
            only-icon
          >
          </component-close-button>
        </div>
      </div>
    `;
  }
}
