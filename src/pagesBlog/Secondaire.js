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

export default function Secondaire() {
  const imagePath = 'https://www.associazioni-italiane.org/wp-content/uploads/2019/10/1-logo-apirp_scritta_ridotto.jpg';

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="xl">
      <Header title="" imagePath={imagePath} sections={sections} />
        <main>
          <Typography variant="h6" gutterBottom>
            L'italien dans le secondaire
          </Typography>
          {/* Ajoutez des Typography et des Link pour chaque section du texte ici */}
          <Typography variant="body1" component="p">
          Nous pouvons vous proposer les listes qui suivent grâce à l'aimable contribution de Mme Pagliari, IA-IPR de l'académie de Paris , de Mme Cutino, IA-IPR de l'académie de Créteil et de M. Cherki, IA-IPR de l'académie de Versailles. 
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
