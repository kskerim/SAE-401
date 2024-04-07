import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
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

const brochures = [
  {
    image: 'https://lh4.googleusercontent.com/igvr_HLgxdkdDeXc0Ncm_UozNjLr3VHazi6-iSlYxXvCIvauU-nQavj8PuVZoP0N8S6d2Ig0Z_URWJczdFv7kDDO1K5DJLLq8a38J2Ojfkw=w1280',
    alt: 'Brochure Front',
  },
  {
    image: 'https://lh5.googleusercontent.com/LMBaOw5cnVu61ieq1r6WvlrXc1NugrbC2v6MR3hBEiFwwYQmKq6TaBqBuxrxuOKpOKCzaxxADpx8rZn045KiIaBRwFi93LaAETnWT8QuKGg=w1280',
    alt: 'Brochure Back',
  },
];

export default function BrochuresPage() {
  const imagePath = 'https://www.associazioni-italiane.org/wp-content/uploads/2019/10/1-logo-apirp_scritta_ridotto.jpg';
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="xl" component="main">
      <Header title="" imagePath={imagePath} sections={sections} />
        <Typography variant="h5" gutterBottom>
          La plaquette éditée par l'APIRP
        </Typography>
        <Typography paragraph>
          L'APIRP a édité un dépliant pour la promotion de l'apprentissage de la langue italienne dans les établissements scolaires de l'Île-de-France.
        </Typography>
        <Grid container spacing={4}>
          {brochures.map((brochure, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="auto"
                  image={brochure.image}
                  alt={brochure.alt}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
        <Typography paragraph align="center" sx={{ mt: 4 }}>
          Pour commander les dépliants :
        </Typography>
        <Container align="center">
          <Button variant="contained" color="primary" href="https://fr.wikipedia.org/wiki/Max_Verstappen">
            Commander
          </Button>
        </Container>

      </Container>
      <Footer title="" description="APIRP - Site de l'Association des Professeurs d'Italien de la Région Parisienne" />
    </ThemeProvider>
  );
}
