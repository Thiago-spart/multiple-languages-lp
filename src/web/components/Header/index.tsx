/* eslint-disable @next/next/no-img-element */
import { Container, Logo, SignInButton } from "./styles";

import { NavList } from "../NavList";

export const Header: React.FC = () => {
	return (
		<Container>
			<Logo src="/logo.svg" alt="Rocket NFT's logo" />

			<NavList />

			<SignInButton type="button">
				<img src="/logo_MetaMask.svg" alt="MetaMask's logo" />
				<span>connect wallet</span>
			</SignInButton>
		</Container>
	);
};
