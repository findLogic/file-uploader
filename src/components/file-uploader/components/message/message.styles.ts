import { css } from "lit";

export const messageStyles = css`
  .message-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 7px 13px;
    gap: 10px;
    color: var(--white);
    box-sizing: border-box;
    height: 100%;

    border-radius: 22px;
    flex: none;
    order: 0;
    flex-grow: 0;
    position: relative;
  }

  .success {
    background: linear-gradient(180deg, #5f5cf0 0%, #8f8df4 100%);
  }

  .error {
    background: linear-gradient(180deg, #f05c5c 0%, #8f8df4 100%);
  }

  .message {
    padding-top: 41px;
  }

  .message .close-button {
    position: absolute;
    top: 24px;
    right: 32px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
  }

  .message h1 {
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 10px;
    margin-top: 0;
    text-align: center;
  }

  .file-info {
    text-align: left;
    margin: 0 68.5px;
    font-weight: 300;
    font-size: 14px;
  }

  .file-info p {
    margin: 0;
  }
`;
