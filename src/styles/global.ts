import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --text-color: #f0f0f0;
    --text-color-secondary: #b3c5cd;

    --primary-color: #21b6b7;

    --background-color: #252329;
    --background-color-dark: #3c393f;
    --background-color-light: #120f13;

    --font-family: "Poppins", sans-serif;
    --box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
  }

  [data-theme="dark"] {
    --text-color: #124a63;
    --text-color-secondary: #b3c5cd;

    --primary-color: #21b6b7;

    --background-color: #f9f9f9;
    --background-color-dark: #eef3f6;
    --background-color-light: white;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family:  var(--font-family);
    background-color: var(--background-color);
    color: var(--text-color);
    min-height: 100vh;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    color: inherit;
    font-family: var(--font-family);
  }
`;
