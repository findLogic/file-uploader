import { css } from "lit";

export const sendButtonStyles = css`
  .upload-button {
    height: 56px;
    width: 100%;
    background-color: var(--disabled);
    border-radius: 30px;
    border: none;
    font-weight: 500;
    color: var(--white);
    font-size: 20px;
    margin-top: 10px;
    cursor: not-allowed;
  }

  .upload-button:not(:disabled) {
    background-color: var(--app-accent);
    cursor: pointer;
  }
`;
