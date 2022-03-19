import styled from "styled-components";

import { FONTS } from "styles/fonts";
import { SIZES } from "styles/sizes";

export const Container = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	padding-left: ${SIZES.horizontalPadding};
	border-bottom: 1px solid var(--subtitle-color);
`;

export const DataDiv = styled.div`
	/* padding-bottom: 13.3rem; */
	padding-top: 13.3rem;
	padding-right: 6.7rem;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 7rem;

	div {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		gap: 0.8rem;

		span {
			${FONTS.title1}
		}

		p {
			${FONTS.text2}
			color: var(--subtitle-color);
		}
	}
`;

export const ReviewDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 7.1rem;
	flex-direction: column;
`;

export const StatementDiv = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	gap: 12.6rem;
	padding-left: 6.8rem;
	padding-right: 13.8rem;

	div {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		flex-direction: column;
		gap: 6.3rem;

		p a {
			color: var(--color-logo);
		}
		a {
			text-decoration: underline;
		}
	}
`;
