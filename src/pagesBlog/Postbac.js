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

export default function Postbac() {
  const imagePath = 'https://www.associazioni-italiane.org/wp-content/uploads/2019/10/1-logo-apirp_scritta_ridotto.jpg';

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="xl">
      <Header title="" imagePath={imagePath} sections={sections} />
        <main>
          <Typography variant="h5" component="h1" gutterBottom>
            ACADÉMIE DE PARIS UNIVERSITÉS
          </Typography>
          <Typography variant="body1" component="div">
            </Typography>
            <Link href="http://www.univ-paris3.fr" target="_blank" rel="noopener">
              Université Paris 3 Sorbonne Nouvelle
            </Link>
            <Typography paragraph>
            Cursus proposés :
            </Typography>
            <Typography paragraph>
            ▪ Licence LLCER d'italien : mineure interculturelle/monodisciplinaire; mineure Communication; mineure FLES; mineure Etudes internationales; mineure anglais (ouverture en L1 à la rentrée 2015)
            </Typography>
            <Typography paragraph>
            ▪ Master MEEF 1er degré
            </Typography>
            <Typography paragraph>
            ▪ Master MEEF 2nd degré
            </Typography>
            <Typography paragraph>
            ▪ Master MEEF 2nd degré parcours FLE
            </Typography>
            <Typography paragraph>
            ▪ Master MEEF 2nd degré parcours Lettres
            </Typography>
            <Typography paragraph>
            ▪ Master MEEF 2nd degré parcours Italien
          </Typography>
          <Typography variant="body1" component="div">
            <Link href="http://www.paris-sorbonne.fr" target="_blank" rel="noopener">
              Université Paris IV-Sorbonne
            </Link>
          </Typography>
          <Typography paragraph>
          ▪ Cursus proposés : Licence LLCER d'italien; Master MEEF 2nd degré parcours Italien
          </Typography>
          <Typography paragraph>
          ▪ Deux parcours de spécialité (1. Littérature et culture ; 2. Langue et Traduction)
          </Typography>
          <Typography paragraph>
          ▪ Quatre bi-licences (Italien-Histoire ; Italien-Lettres modernes ; Italien-Lettres modernes appliquées ; Italien-Musicologie)
          </Typography>
          <Typography paragraph>
          ▪ Master recherche en Études italiennes (Littérature, Culture, Arts du spectacle et Traduction) 
          </Typography>
          <Typography paragraph>
          ▪ Master professionnel en Traduction spécialisée multilingue
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
