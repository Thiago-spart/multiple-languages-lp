import { HeadTitle } from "web/components/HeadTitle";

import { DetailSection } from "./components/DetailSection";
import { GallerySection } from "./components/GallerySection";
import { PresentationSection } from "./components/PresentationSection";

import type { FCWithLayout } from "types/interfaces/layout";

import { Container } from "./styles";

export const HomePage: FCWithLayout = () => {
	return (
		<>
			<HeadTitle title="Home" />
			<Container>
				<PresentationSection />
				<GallerySection />
				<DetailSection />
			</Container>
		</>
	);
};
