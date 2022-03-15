import styled from "styled-components";

import { SIZES } from "styles/sizes";

export const Container = styled.section`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	row-gap: 6.6rem;
	column-gap: 1.6rem;
	align-items: center;
	padding: 5.2rem ${SIZES.horizontalPadding};
`;

export const ImageContainer = styled.div`
	width: 100%;

	img {
		object-fit: cover;
		width: 100%;
	}
`;
