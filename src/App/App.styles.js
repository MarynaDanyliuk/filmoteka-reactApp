import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 12px;
  letter-spacing: 0.03em;
}

a {
  text-decoration: none;
  color: inherit;
}

h1,
h2,
h3,
p {
  margin: 0;
}

ul,
ol {
  list-style: none;
  margin: 0;
  padding: 0;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}
`;
