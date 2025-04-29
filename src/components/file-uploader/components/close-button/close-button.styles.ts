import { css } from 'lit';

export const closeButtonStyles = css`
  :host {
    display: inline-block;
    position: absolute;
    top: var(--close-button-top, 0);
    right: var(--close-button-right, 0);
    z-index: 100;
  }

  .close-button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease;
    box-sizing: border-box;
    width: var(--button-size, 34px);
    height: var(--button-size, 34px);
    background: var(--button-bg);
    border-radius: var(--button-radius, 50%);
  }

  .close-button[disabled] {
    cursor: not-allowed;
  }

  .close-button:hover {
    background: var(--button-hover-bg);
  }

  .close-button svg {
    width: var(--icon-size, 17px);
    height: var(--icon-size, 17px);
    fill: var(--icon-color, #ffffff);
    pointer-events: none;
  }
`;
