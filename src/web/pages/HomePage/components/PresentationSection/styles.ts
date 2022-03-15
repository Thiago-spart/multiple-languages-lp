import styled from "styled-components";

import { FONTS } from "styles/fonts";
import { SIZES } from "styles/sizes";

export const Container = styled.section`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 5.2rem ${SIZES.horizontalPadding};
	gap: 4rem;
`;

export const TitleDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 4rem;

	h1 {
		${FONTS.title1}
	}

	span {
		color: var(--color-logo);
	}
`;

export const DescriptionDiv = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
	gap: 5.5rem;
	width: 30%;
`;

export const SelectedArtists = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.6rem;
	align-self: flex-end;

	div {
		align-self: flex-end;

		span {
			font-weight: 700;
		}
	}
`;
