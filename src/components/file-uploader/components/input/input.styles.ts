import { css } from 'lit';

export const inputStyles = css`
  .input-container {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    height: 35px;
    margin-top: 10px;
    background-color: var(--light-white);
    border-radius: 10px;
    border: 1px solid #a4a4a4;
    position: relative;
    transition: all 0.14s linear;
  }

  .input-container input {
    flex-grow: 1;
    height: 100%;
    padding: 0px 29px 0px 9px;
    font-weight: 500;
    color: var(--app-accent);
    font-size: 17.5px;
    background-color: transparent;
    border: none;
    outline: none;
  }

  input::placeholder {
    font-size: 17.5px;
  }
`;
