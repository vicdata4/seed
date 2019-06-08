import { css } from 'lit-element';

export const GlobalStyles = css`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    --app-title-color: white;
    --app-header-height: 100px;
    --app-color-blue-light: #21bfbf;

    color: var(--app-title-color, white);
  }

  :host div {
    position: relative;
    padding: 70px;
    
  }

  :host:before {
    content: "";
    height: 100%;
    position: absolute;
    top: var(--app-header-height);
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,.5);
  }


  .custom-link {
    display: inline-block;
    background-color: #e29512;
    border: none;
    padding: 10px;
    font-size: 15px;
    color: white;
    border-radius: 7px;
    text-decoration: none;
    cursor: pointer;
  }

  .custom-link:hover {
    background-color: rgb(166, 108, 10);
  }




  @media (min-width: 768px) {
    :host:before {
      width: 70%;
      left: unset;
      top: 0;
      right: 0;
    }
  }
`;
