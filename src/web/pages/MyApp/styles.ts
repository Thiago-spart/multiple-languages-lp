import { createGlobalStyle } from "styled-components";

import { CONFIGS } from "styles/configs";

import { COLORS } from "styles/colors";
import { FONTS } from "styles/fonts";

export const GlobalStyle = createGlobalStyle`
	*, *::before, *::after {
		box-sizing: border-box;
	}

	* {
    margin: 0;
    padding: 0;

		/* &:focus-visible { */
			/* outline: var(--alternative-outline); */
		 	/* box-shadow: var(--outline); */
		/* } */
  }

	html, body {
		min-height: 100%;
	}

  html {
    font-size: 62.5%;
		scroll-behavior: smooth;
  }

  body {
		-webkit-font-smoothing: antialiased;
    background-color: var(--body-background);
    background-image: url("/background.png");
		color: var(--text-color);
    font-family: "Montserrat", sans-serif;
		${FONTS.text}
  }

	a {
		color: var(--text-color);
		text-decoration: none;
	}

	button, input, textarea {
		background: transparent;
    color: var(--text-color);
		${FONTS.text}
		border: transparent;
	}

	ul {
		list-style: none;
	}

	::-webkit-scrollbar {
		width: 1rem;
		height: 1rem;
	}

	::-webkit-scrollbar-thumb {
		background: var(--scrollbar);
		border-radius: 5px;
	}

	::-webkit-scrollbar-track {
		background: var(--scrollbar-background);
		border-radius: 5px;
	}

	::-webkit-scrollbar-corner {
		background: transparent;
	}

	:root {
		${COLORS.root}
		${CONFIGS}
	}

	#root, #__next {
		isolation: isolate;
	}

	@media (max-width: 768px) {
    html {
      font-size: 60%;
    }
  }

	@media (max-width: 425px) {
    html {
      font-size: 57.5%;
    }
  }

	@media (max-width: 375px) {
    html {
      font-size: 55%;
    }
  }

	@media (max-width: 320px) {
    html {
      font-size: 52.5%;
    }
  }

	@media (max-width: 280px) {
    html {
      font-size: 50%;
    }
  }
`;
