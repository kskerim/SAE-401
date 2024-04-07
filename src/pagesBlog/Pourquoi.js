import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../Header';
import Footer from '../Footer';
import { sections } from '../sectionsArray';

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#009246',
    },
    secondary: {
      main: '#ce2b37',
    },
  },
});

export default function Pourquoi() {
  const imagePath = 'https://www.associazioni-italiane.org/wp-content/uploads/2019/10/1-logo-apirp_scritta_ridotto.jpg';

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="xl">
      <Header title="" imagePath={imagePath} sections={sections} />
        <main>
          {/* Ajoutez ici le contenu du texte de votre image en tant que paragraphes de Typography */}
          <Typography variant="h6" component="h2" gutterBottom>
            Pourquoi adhérer?
          </Typography>
          {/* Utilisez des paragraphes de Typography pour le reste du contenu */}
          <Typography paragraph>
            Pour: 
          </Typography>
          <Typography paragraph>
          Participer activement aux assemblées générales.
            </Typography>
            <Typography paragraph>
            Recevoir chaque année le bulletin imprimé de l’association et les plaquettes gratuites pour la promotion de l’italien.
Soutenir des initiatives pour la promotion de l’enseignement de l’italien en île-de-France :
            </Typography>
          <Typography paragraph>
            Qui peut adhérer
          </Typography>
          <Typography paragraph>
            Pour devenir membres il faut: remplir une fiche d’inscription ET verser annuellement une cotisation, dont le montant est fixé chaque année par le Conseil d’administration.
          </Typography>
          <Typography paragraph>
            À ce sujet veuillez consulter la page suivante : 
            <Link href="https://sites.google.com/view/apirp/adh%C3%A9sion" target="_blank" rel="noopener">
              sites.google.com/view/apirp/adhésion
            </Link>
          </Typography>
        </main>
      </Container>
      <Footer
        title=""
        description="APIRP - Site de l'Association des Professeurs d'Italien de la Région Parisienne"
      />
    </ThemeProvider>
  );
}
