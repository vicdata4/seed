import { css } from 'lit-element';

export const CustomStyles = css`
  :host{
    display: grid;
    background-image: none;
    background-size: cover;
    overflow-y: auto;
    height: 100%;
  }

  section {
    display: flex;
    position: relative;
    justify-content: center;
    flex-direction: column;
    color: white;
    height: 100%;
    padding: 50px;
    box-sizing: border-box;
  }

  section > * {
    position: relative;
  }

  section::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.6);
  }

  .custom-link {
    display: inline-block;
    background-color: #e29512;
    border: none;
    padding: 10px;
    font-size: 15px;
    width: fit-content;
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

  .center {
    display: flex;
    align-items: center;
  }

  hr {
    position: relative;
    border-color: rgba(255,255,255,.4);
    width: 100%;
  }

  @media (min-width: 768px) {
    :host:before {
      left: unset;
      top: 0;
      right: 0;
    }

    :host section div{
      padding: 70px;
    }
  }
`;
