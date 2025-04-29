import { css } from 'lit';

export const messageStyles = css`
  .message-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    color: var(--white);
    box-sizing: border-box;

    flex: none;
    order: 0;
    flex-grow: 0;
    position: relative;
    animation: animateMessage 0.2s linear forwards;
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
    opacity: 0;
    height: 1px;
    animation: animateFileInfo 0.2s linear forwards;
  }

  .file-info p {
    margin: 0;
  }

  @keyframes animateMessage {
    from {
      opacity: 0.4;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes animateFileInfo {
    from {
      opacity: 0;
      height: 1px;
    }
    to {
      opacity: 1;
      height: 142px;
    }
  }
`;
