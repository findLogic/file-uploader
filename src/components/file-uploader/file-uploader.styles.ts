import { css } from 'lit';

export const rootStyles = css`
  :root {
    font-family: 'Inter', sans-serif;
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
    position: relative;
    width: 342px;
  }

  .screen {
    display: flex;

    flex-direction: column;
    align-items: center;
    justify-content: center;
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
    transition: height 0.35s linear;
  }

  .screen-310 {
    height: 310px;
  }

  .screen-230 {
    height: 230px;
    padding: 7px 12px 7px 13px;
  }

  .message-screen {
    width: 302px;
    height: 230px;
    display: none;
    position: relative;
  }

  .screen-wrapper {
    padding-top: 31px;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .content {
    padding-top: 31px;
    height: auto;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    transition: all 0.2s ease-out;
  }

  .half-content {
    display: grid;
    height: 162.75px;
    padding-top: 31px;
    position: relative;
    padding-bottom: 22.25px;
    grid-template-rows: 3px 1fr auto 1fr;
    opacity: 0.4;
  }

  .half-content > *:nth-child(2) {
    display: none;
  }

  .empty-content {
    display: none;
  }

  .content-message {
    padding: 0;
  }

  .screen.success {
    background: linear-gradient(180deg, #5f5cf0 0%, #8f8df4 100%);
    opacity: 1;
    height: 230px;
  }

  .screen.error {
    background: linear-gradient(180deg, #f05c5c 0%, #8f8df4 100%);
    opacity: 1;
    height: 230px;
  }

  .content-message > * {
    display: none;
  }

  .content-message > *:nth-child(1),
  .content-message > *:nth-child(2) {
    display: block;
  }

  .hide {
    animation: containerDisappear 0.1s ease-in forwards;
  }

  @keyframes containerDisappear {
    from {
      opacity: 1;
      transform: scale(1);
    }
    to {
      opacity: 0;
      transform: scale(0);
    }
  }
`;
