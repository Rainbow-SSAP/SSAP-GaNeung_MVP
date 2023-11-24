import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const styled = { createGlobalStyle };

const GlobalStyle = styled.createGlobalStyle`
  ${normalize} // 브라우저마다 동일하게 CSS 적용시키기

  :root {
    --vh: 100%;
  }

  @font-face {
    font-family: "Noto Sans KR", sans-serif;
    src: url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap");
  }

  * {
    box-sizing: border-box;
    font-size: 10px;
  }

  html,
  body,
  div,
  span,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  form,
  label,
  table {
    margin: 0;
    padding: 0;
    border: 0;
  }

  body {
    font-family: "Noto Sans KR", sans-serif;
    background-color: #262626;
  }

  ol,
  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
