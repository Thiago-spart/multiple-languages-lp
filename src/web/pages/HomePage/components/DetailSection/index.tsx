/* eslint-disable @next/next/no-img-element */
import { NextLink } from "web/components/NextLink";

import { Container, DataDiv, ReviewDiv, StatementDiv } from "./styles";

export const DetailSection: React.FC = () => {
	return (
		<Container>
			<DataDiv>
				<div>
					<span>10K+</span>
					<p>Artes</p>
				</div>
				<div>
					<span>200+</span>
					<p>Vendas</p>
				</div>
				<div>
					<span>20+</span>
					<p>Artistas</p>
				</div>
			</DataDiv>
			<ReviewDiv>
				<StatementDiv>
					<div>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue
							malesuada amet pretium lacus. Id
							<NextLink href="#">potenti diam</NextLink> et cras odio viverra.
							Amet, velit ut hac sit. Enim ultricies mauris mattis nunc semper.
						</p>
						<NextLink href="#">Text Link</NextLink>
					</div>
					<div>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue
							malesuada amet pretium lacus. Id
							<NextLink href="#">potenti diam</NextLink> et cras odio viverra.
							Amet, velit ut hac sit. Enim ultricies mauris mattis nunc semper.
						</p>
						<NextLink href="#">Text Link</NextLink>
					</div>
				</StatementDiv>
				<img src="/banner.png" alt="banner" />
			</ReviewDiv>
		</Container>
	);
};
