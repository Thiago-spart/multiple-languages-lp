import { css } from "styled-components";

export const FONTS = {
	title1: css`
		font-style: normal;
		font-weight: 700;
		font-size: 5rem;
		line-height: 6.1rem;
	`,
	title2: css`
		font-weight: 400;
		line-height: 4rem;
		font-size: 3rem;

		@media screen and (min-width: 601px) {
			font-size: 3.8rem;
			line-height: 5.3rem;
		}
	`,
	title3: css`
		font-weight: 400;
		line-height: clamp(3.5rem, 5vw, 6rem);
		font-size: clamp(2.5rem, 5vw, 5rem);

		@media screen and (min-width: 601px) {
			font-size: 3.7rem;
			line-height: 5.3rem;
		}
	`,
	text: css`
		font-style: normal;
		font-weight: 400;
		font-size: 1.8rem;
		line-height: 2.2rem;
	`,
	text2: css`
		font-style: normal;
		font-weight: 600;
		font-size: 2rem;
		line-height: 2.4rem;
	`,
};
