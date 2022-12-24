import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	* {
		margin: 0px;
		padding: 0px;
		box-sizing: border-box;
	}

	html {
		font-size: 10px;
	}

	body {
		background-color: white;
		font-weight: 400;
		font-size: 1.6rem;
		font-family: 'Source Sans Pro', sans-serif;
	}

	button {
		cursor: pointer;
	}
`;

export default GlobalStyle
