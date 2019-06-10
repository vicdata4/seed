import { css } from 'lit-element';

export const CustomStyles = css`
  :host {
    display: flex;
    justify-content: center;
    position: relative;
    overflow: hidden;
    height: 100%;

    --app-title-color: white;
    --app-header-height: 100px;
    --app-color-blue-light: #21bfbf;

    color: var(--app-title-color, white);

    
  }

  :host section {
    position: relative;
    overflow: auto;
    height: 100%;
  }

  :host section div{
    padding: 50px;
  }

  :host section p{
    line-height: 1.5;
    
  }

  :host::before {
    content: "";
    position: absolute;
    
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.4);
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

  .npm-command {
    color: red;
  }


  @media (min-width: 768px) {
    :host:before {
      
      left: unset;
      top: 0;
      right: 0;
    }
  }
`;
