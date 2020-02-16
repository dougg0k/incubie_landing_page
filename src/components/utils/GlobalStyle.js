import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
	${normalize}
  body {
		font-family: 'Open Sans', sans-serif;
		-moz-osx-font-smoothing: grayscale;
  	-webkit-font-smoothing: antialiased;
  	-moz-font-smoothing: antialiased;
  	text-rendering: optimizelegibility;
		scroll-behavior: smooth;
		font-size: 16px;
  }
`;

export default GlobalStyle;
