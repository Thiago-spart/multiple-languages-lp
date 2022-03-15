/* eslint-disable @next/next/no-img-element */
import { Container, DescriptionDiv, SelectedArtists, TitleDiv } from "./styles";

export const PresentationSection: React.FC = () => {
	return (
		<Container>
			<DescriptionDiv>
				<p>
					Mercado digital para colecionáveis em criptos e tokens não fungível
					(NFT). Compre, venda e descubra ativos digitais exclusivos para você.
				</p>

				<SelectedArtists>
					<img src="/group-avarts.png" alt="selected artists" />

					<div>
						<span>+10</span>
						<p>Artistas selecionados</p>
					</div>
				</SelectedArtists>
			</DescriptionDiv>
			<TitleDiv>
				<h1>
					Descubra a verdadeira arte digital e colecione diversas
					<span> NFTs</span>
				</h1>

				<img src="/badge.svg" alt="A arte explora" />
			</TitleDiv>
		</Container>
	);
};
