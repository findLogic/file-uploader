import { css } from "lit";

export const rootStyles = css`
  :root {
    font-family: "Inter", sans-serif;
  }

  * {
    --app-accent: rgba(95, 92, 240, 1);
    --border-color: rgba(204, 204, 206, 0.28);
    --button-bg: rgba(204, 204, 206, 0.28);
    --button-hover-bg: rgba(204, 204, 206, 0.48);
    --disabled: rgba(187, 185, 210, 1);
    --frame-background: rgba(255, 255, 255, 0.4);
    --grey: rgba(165, 165, 165, 1);
    --light-white: rgba(241, 241, 241, 1);
    --white: rgba(255, 255, 255, 1);
    --error-color: #e74c3c;
    padding: 0;
    margin: 0;
  }

  .warapper {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 16px;
    box-sizing: border-box;
    background-color: var(--border-color);
    border-radius: 16px;
    width: 342px;
  }

  .screen {
    width: 302px;
    height: 479px;
    box-sizing: border-box;
    padding: 11px 12px 11px 13px;
    border-radius: 22px;
    color: var(--white);
    position: relative;
    background: linear-gradient(
      180deg,
      rgba(95, 92, 240, 1) 0%,
      rgba(221, 220, 252, 1) 43%,
      rgba(255, 255, 255, 1) 100%
    );
    border: none;
  }

  .message-screen {
    width: 302px;
    height: 230px;
    position: relative;
  }

  .screen-wrapper {
    padding-top: 31px;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;
