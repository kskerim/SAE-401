


import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../Header';
import Footer from '../Footer';
import {sections} from '../sectionsArray';
import Article from '../Article';




// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#009246',
    },
    },
    secondary: {
      main: '#ce2b37',
  },
});

export default function Forum() {
  const imagePath = 'https://www.associazioni-italiane.org/wp-content/uploads/2019/10/1-logo-apirp_scritta_ridotto.jpg';
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
      <Header title="" imagePath={imagePath} sections={sections} />
        <main>
          <p> Forum des associations franco-italiennes </p>
          <Article
          title="Forum des associations italiennes virtuel : APIRP 2020"
          content="Le forum des associations franco-italiennes initialement prévu place Baudoyer à Paris, se déroulera cette année de façon virtuelle le 20 et
          21 juin 2020. L' APIRP participera avec une intervention de Olivier Morin et Ilaria Madonna, président et vice-présidente de l'association, le samedi 20 juin de 16h30 à 16h50. Pour l'occasion Ilaria Madonna a
          créé un padlet pour illustrer les projets menés par l'APIRP, intitulé APIRP 2020. Vous y trouverez des renseignements sur la diffusion de
          l'enseignement de l'italien dans les trois académies franciliennes, des documents pour la promotion de notre belle langue, une vidéo pour présenter
          le bilan des activités de l'APIRP de cette année, le dossier ESABAC, le programme du concours de recrutement ainsi que des projets menés par nos
          adhérents. Voici le lien :  https://padlet.com/apirpassociation/apirp2020. L'intégralité du forum sera retransmise sur la page Facebook du Forum des
          Associations italiennes."
          image="https://lh5.googleusercontent.com/HoJHn2Qwr_zXzgNwK6yYpl6jlY1oYv3wGmgjSz1tEUyxRuBwUB87Rid1Xet94Yb99ViR9A=w1280"
          />


        </main>
      </Container>
      <Footer
        title=""
        description="APIRP - Site de l'Association des Professeurs d'Italien de la Région Parisienne"
      />
    </ThemeProvider>
  );
}
