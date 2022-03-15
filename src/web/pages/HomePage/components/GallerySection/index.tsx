/* eslint-disable @next/next/no-img-element */
import { Container, ImageContainer } from "./styles";

export const GallerySection: React.FC = () => {
	return (
		<Container>
			<ImageContainer>
				<img src="/galeria-1.png" alt="galeria-1" />
			</ImageContainer>
			<ImageContainer>
				<img src="/galeria-2.png" alt="galeria-2" />
			</ImageContainer>
			<ImageContainer>
				<img src="/galeria-3.png" alt="galeria-3" />
			</ImageContainer>
			<ImageContainer>
				<img src="/galeria-4.png" alt="galeria-4" />
			</ImageContainer>
			<ImageContainer>
				<img src="/galeria-5.png" alt="galeria-5" />
			</ImageContainer>
			<ImageContainer>
				<img src="/galeria-6.png" alt="galeria-6" />
			</ImageContainer>
			<ImageContainer>
				<img src="/galeria-7.png" alt="galeria-7" />
			</ImageContainer>
			<ImageContainer>
				<img src="/galeria-8.png" alt="galeria-8" />
			</ImageContainer>
		</Container>
	);
};
