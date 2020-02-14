import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
	${normalize}
  body {
    font-family: 'Lato', sans-serif;
		-moz-osx-font-smoothing: grayscale;
  	-webkit-font-smoothing: antialiased;
  	-moz-font-smoothing: antialiased;
  	text-rendering: optimizelegibility;
		scroll-behavior: smooth;
  }
`;

export default GlobalStyle;
