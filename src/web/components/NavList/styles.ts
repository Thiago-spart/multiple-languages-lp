import styled from "styled-components";

export const Container = styled.ul`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 6rem;
`;

export const ListItem = styled.li`
	transition: all 0.4s ease-in-out;

	&:hover {
		filter: brightness(0.8);
	}
`;
