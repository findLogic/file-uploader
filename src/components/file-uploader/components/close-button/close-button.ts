import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { closeButtonStyles } from "./close-button.styles";

@customElement("component-close-button")
export class ComponentCloseButton extends LitElement {
  static styles = [closeButtonStyles];

  @property({ type: String }) action = "close";
  @property({ type: String }) top = "0";
  @property({ type: String }) right = "0";
  @property({ type: String }) color = "#ffffff";
  @property({ type: Boolean, attribute: "only-icon" }) onlyIcon = false;
  @property({ type: Boolean, attribute: "disabled" }) disabled = false;

  updated(changedProperties: Map<string, unknown>) {
    if (changedProperties.has("top") || changedProperties.has("right")) {
      this.style.setProperty("--close-button-top", this.top);
      this.style.setProperty("--close-button-right", this.right);
    }

    if (changedProperties.has("onlyIcon") || changedProperties.has("color")) {
      if (this.onlyIcon) {
        this.style.setProperty("--button-size", "20px");
        this.style.setProperty("--button-bg", "transparent");
        this.style.setProperty("--icon-size", "12.5px");
        this.style.setProperty("--button-radius", "0");
        this.style.setProperty("--button-hover-bg", "none");
      } else {
        this.style.setProperty("--button-size", "34px");
        this.style.setProperty("--icon-size", "17px");
        this.style.setProperty("--button-radius", "17px");
      }
      this.style.setProperty("--icon-color", this.color);
    }
  }

  render() {
    return html`
      <button
        class="close-button"
        @click=${this.handleClick}
        ?disabled=${this.disabled}
        aria-label=${`${this.action} button`}
      >
        <svg viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1.07108 15.5711C0.408375 14.9084 0.408375 13.8339 1.07108 13.1712L12.8133 1.42893C13.476 0.766224 14.5505 0.766224 15.2132 1.42893V1.42893C15.8759 2.09164 15.8759 3.1661 15.2132 3.82881L3.47096 15.5711C2.80825 16.2338 1.73379 16.2338 1.07108 15.5711V15.5711ZM1.07108 3.82881C0.408375 3.1661 0.408375 2.09164 1.07108 1.42893V1.42893C1.73379 0.766224 2.80825 0.766224 3.47096 1.42893L15.2132 13.1712C15.8759 13.8339 15.8759 14.9084 15.2132 15.5711V15.5711C14.5505 16.2338 13.476 16.2338 12.8133 15.5711L1.07108 3.82881Z"
          />
        </svg>
      </button>
    `;
  }

  private handleClick() {
    this.dispatchEvent(
      new CustomEvent("action-triggered", {
        detail: { action: this.action },
        bubbles: true,
        composed: true,
      }),
    );
  }
}
