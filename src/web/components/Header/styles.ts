import styled from "styled-components";

import { SIZES } from "styles/sizes";

export const Container = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 5.2rem ${SIZES.horizontalPadding};
`;

export const Logo = styled.img`
	width: 26.5rem;
`;

export const SignInButton = styled.button`
	padding: 1.45rem 1.5rem;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1.5rem;
	background: var(--wallet-button-background);
	color: var(--black-text);
	cursor: pointer;
	border-radius: 0.4rem;
	transition: all 0.4s ease-out;

	&:hover {
		filter: brightness(0.8);
	}
`;
