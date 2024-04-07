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

export default function Programmes() {
  const imagePath = 'https://www.associazioni-italiane.org/wp-content/uploads/2019/10/1-logo-apirp_scritta_ridotto.jpg';

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="xl">
      <Header title="" imagePath={imagePath} sections={sections} />
        <main>
          <Typography variant="h6" gutterBottom>
            PROGRAMMES LYCÉE 2019
          </Typography>
          <Typography paragraph>
            Les nouveaux programmes définitifs du lycée sont parus:
          </Typography>
          <Typography paragraph>
            <Link href="https://www.education.gouv.fr/pid285/bulletin_officiel.html?pid_bo=38502" target="_blank" rel="noopener">
              Bulletin officiel - Nouveaux programmes du lycée
            </Link>
          </Typography>
          {/* Ajoutez d'autres éléments ici si nécessaire */}
        </main>
      </Container>
      <Footer
        title=""
        description="APIRP - Site de l'Association des Professeurs d'Italien de la Région Parisienne"
      />
    </ThemeProvider>
  );
}
