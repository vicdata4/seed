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

  form {
    display: flex;
    flex-direction:column;
    align-self: center;
  }

  form input {
    font-size: 18px;
    border: 1px solid #473d3d;
    margin-left: 0;
    border: none;
    border-bottom: 1px solid rgb(70, 150, 135);
    border-radius: 5px;
    background-color: transparent;
    height: 30px;
    color: white;
    padding: 5px;
    margin-bottom: 20px;
    margin-left: 0;
  }

  ::placeholder {
    color: #00dce6;
    opacity: 1; /* Firefox */
  }

  input[type='text']{
    font-size:20px;
  }

  input[type='submit'] {
    height: fit-content;
    margin: 0;
  }

  section h1 span {
    color: #c7b788;
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

  .form-button {
    align-self: flex-end;
  }

  .sm-title {
    color: #63f6f7;
  }

  @media (min-width: 768px) {

    form {
      width: 50%;
    }

    .form-button {
      width: auto;
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
