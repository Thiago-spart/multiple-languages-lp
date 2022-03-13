import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

import { Head } from "./components/Head";

import { LayoutWrapper } from "web/layouts/wrapper";

import { GlobalStyle } from "./styles";

export const MyApp: FC<AppProps> = ({ Component, pageProps }) => (
	<ThemeProvider>
		<Head />
		<LayoutWrapper>
			<Component {...pageProps} />
		</LayoutWrapper>
		<GlobalStyle />
	</ThemeProvider>
);
