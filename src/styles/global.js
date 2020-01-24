import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    font-family: 'roboto', sans-serif;
  }

  body{
    display :flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    text-align: center;

    color : #fff;
    background: linear-gradient(to right, rgb(83,105,118),rgb(41,46,73))
  }
`;
