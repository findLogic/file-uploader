import { css } from "lit";

export const titleStyles = css`
  .title {
    font-weight: 600;
    height: 24px;
    font-size: 20px;
    margin: 0 0 7px 0;
    text-align: center;
    color: var(--white);
  }

  .instruction {
    font-weight: 300;
    height: 17px;
    font-size: 14px;
    margin: 0;
    text-align: center;
    color: var(--white);
  }

  .loader-container {
    display: flex;
    justify-content: center;
  }

  .loader {
    border: 3px solid var(--border-color);
    border-radius: 50%;
    border-top: 3px solid var(--white);
    box-sizing: border-box;
    width: 17px;
    height: 17px;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
