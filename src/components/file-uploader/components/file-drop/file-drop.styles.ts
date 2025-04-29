import { css } from 'lit';

export const fileDropStyles = css`
  .upload-container {
    width: 100%;
    height: 257px;
    border: 1px solid var(--grey);
    border-radius: 30px;
    background: var(--frame-background);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    position: relative;
    cursor: default;
    margin-top: 10px;
  }

  .upload-container.readyToDrop {
    cursor: pointer;
  }

  .upload-container.dragging {
    border-color: var(--app-accent);
    background-color: rgba(74, 107, 223, 0.1);
  }

  .upload-container.error {
    border-color: var(--error-color);
  }

  .upload-label {
    display: block;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: inherit;
  }

  .upload-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 221px;
    gap: 14px;
  }

  .upload-text {
    font-size: 14px;
    text-align: center;
    line-height: 17px;
    color: var(--app-accent);
  }

  .file-name {
    display: inline-block;
    max-width: 180px;
    overflow: hidden;
  }

  .upload-container.error .upload-text {
    color: var(--error-color);
  }

  .file-info {
    font-size: 12px;
    color: var(--grey);
  }

  input[disabled] + .upload-content {
    pointer-events: none;
    opacity: 0.5;
  }

  .upload-container.dragging:not(.readyToDrop) {
    cursor: not-allowed;
  }
`;
