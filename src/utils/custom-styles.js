import { css } from 'lit-element';

export const CustomStyles = css`

  section p {
    line-height: 1.8;
  }

  section h3 {
    margin: 0;
  }

  section h1 {
    margin: 0;
    font-size: 30px;
  }

  section div input {
    border: 1px solid #473d3d;
    margin-left: 0;
    border-radius: 5px;
    background-color: black;
    height: 30px;
    color: white;
    width: 100%;
    padding: 5px;
    margin: 10px;
    margin-left: 0;
  }

  section h1 span {
    color: #c7b788;
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
    background-color: rgb(197, 136, 31);
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
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .red {
    background-color: #bf4545;
  }

  .red:hover {
    background-color: rgb(142, 55, 55);
  }

  .blue {
    background-color: rgb(69, 126, 191);
  }

  .blue:hover {
      background-color: rgb(53, 98, 149);
  }

  @media (min-width: 768px) {
    section div input {
    width: 30%;
  }
  }
`;

export const ViewStyle = css`
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


  @media (min-width: 768px) {
    :host:before {
      left: unset;
      top: 0;
      right: 0;
    }
  }
`;