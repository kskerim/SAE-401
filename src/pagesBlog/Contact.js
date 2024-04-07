


import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../Header';
import Footer from '../Footer';
import {sections} from '../sectionsArray';



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

export default function Contact() {
  const imagePath = 'https://www.associazioni-italiane.org/wp-content/uploads/2019/10/1-logo-apirp_scritta_ridotto.jpg';
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="xl">
      <Header title="" imagePath={imagePath} sections={sections} />
        <main>
            <p> Liens et contacts </p>

            <h2 style={{ textAlign: 'center', color: '#009246' }}>Adresse mail: apirp.association@gmail.com</h2>
            <p>Pour nous signaler tout changement de coordonnées personnelles (adresse de domicile, téléphone, courriel) ou professionnelles (changement d’établissement de rattachement, de statut, etc.), merci d’envoyer un courriel à : <strong>apirp.association@gmail.com.</strong> </p>

            <p>Pour les renouvellement d’adhésion et pour les commandes de plaquettes pour la promotion de l’italien, nos adhérents peuvent aussi se servir des formulaires publiés dans les deux dernières page de notre bulletin annuel.</p>

            <h2 style={{ textAlign: 'center', color: '#009246' }}>Facebook:</h2>
            <p>Si vous souhaitez nous suivre :</p>

            <a>https://m.facebook.com/APIRP</a>
        </main>
      </Container>
      <Footer
        title=""
        description="APIRP - Site de l'Association des Professeurs d'Italien de la Région Parisienne"
      />
    </ThemeProvider>
  );
}
