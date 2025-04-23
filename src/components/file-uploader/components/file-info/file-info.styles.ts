import { css } from "lit";

export const fileInfoStyles = css`
  .file {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    height: 35px;
    align-items: flex-start;
    gap: 10px;
    box-sizing: border-box;
    padding: 3px 3px 4px 3px;
    position: relative;
    align-self: stretch;
    width: 100%;
    background-color: var(--ligth-white);
    border-radius: 10px;
    border: 1px solid #a4a4a4;
  }

  .file[disabled] {
    opacity: 0.5;
  }

  .file-wrapper {
    display: grid;
    grid-template-columns: 37px 182px auto;
    width: 100%;
    gap: 14px;
    position: relative;
    height: 100%;
  }

  .icon {
    position: relative;
    width: 37px;
    height: 28px;
    background-color: var(--app-accent);
    border-radius: 10px;
    align-self: center;
  }

  .name-upload-line {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    margin: 2px 0;
    height: 24px;
    position: relative;
  }

  .name-percent {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    width: 100%;
    height: 100%;
  }

  .file-name {
    position: relative;
    font-weight: 500;
    color: var(--app-accent);
    font-size: 10px;
    line-height: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: calc(100% - 30px);
    flex-grow: 1;
    transition:
      font-size 0.5s ease,
      line-height 0.5s ease;
  }

  .file-name.enlarged {
    font-size: 15.53px;
    line-height: 19px;
  }

  .upload-percent {
    position: relative;
    width: 36px;
    font-weight: 400;
    color: var(--app-accent);
    font-size: 10px;
    line-height: 10px;
    text-align: right;
    flex-shrink: 0;
    transition:
      font-size 0.5s ease,
      line-height 0.5s ease;
  }

  .upload-percent.enlarged {
    font-size: 13.85px;
    line-height: 17px;
  }

  .upload-line {
    height: 6px;
    position: relative;
    margin-top: 6px;
    width: 100%;
    transition: opacity 0s;
  }

  .upload-line.hidden {
    opacity: 0;
    height: 0;
    margin: 0;
  }

  .rectangle-wrapper {
    width: 100%;
    height: 5px;
    background-color: var(--white);
    border-radius: 10px;
    overflow: hidden;
  }

  .rectangle-color {
    height: 100%;
    background-color: var(--app-accent);
    border-radius: 10px;
    transition: width 0.1s linear;
  }

  .file-name-wrapper {
    flex-grow: 1;
    height: 12px;
    min-width: 0;
    overflow: hidden;
  }
`;
