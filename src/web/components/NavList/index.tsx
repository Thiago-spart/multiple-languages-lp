import { Container, ListItem } from "./styles";

import { NextLink } from "../NextLink";

export const NavList: React.FC = () => {
	return (
		<Container>
			<ListItem>
				<NextLink href="/products">Buy NFT</NextLink>
			</ListItem>
			<ListItem>
				<NextLink href="/about">About</NextLink>
			</ListItem>
			<ListItem>
				<NextLink href="/faq">FAQ</NextLink>
			</ListItem>
		</Container>
	);
};
