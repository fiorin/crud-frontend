import type { AppProps /*, AppContext */ } from 'next/app'
import React from "react";
import Head from 'next/head';
import theme from '../config/theme'
import Container from '../components/Container';
import GlobalStyle from '../styles/globals';
import MenuIconsList from '../components/MenuIconsList';
import Signature from '../components/Signature';
import MenuOptionsActions from '../components/MenuOptionsActions';
import MenuOptionsList from '../components/MenuOptionsList';

function MyApp({ Component, pageProps }: AppProps) {
  const { title, favicon } = theme;
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href={favicon} />
      </Head>
        <GlobalStyle />
        <Container>
          <Container.External>
              <Container.Columns.Icons>
                <MenuIconsList/>
              </Container.Columns.Icons>
              <Container.Internal>
                <Container.Columns.Options>
                  <MenuOptionsActions/>
                  <MenuOptionsList/>
                </Container.Columns.Options>
                <Container.Columns.Content>
                  <Component {...pageProps} />
                </Container.Columns.Content>
              </Container.Internal>
          </Container.External>
        </Container>
        <Signature/>
    </div>
  )
}

export default MyApp
