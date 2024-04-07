import React from 'react';
import { CssBaseline, Container, Grid, Paper, Typography, Link, createTheme, ThemeProvider } from '@mui/material';
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

const articles = [
  {
    title: "Semaine de la cuisine italienne dans le monde. 5e édition.",
    description: "La 5ème édition de la Semaine de la Cuisine italienne dans le Monde se déroulera du lundi 23 novembre au dimanche 29 novembre 2020, et pour la France se poursuivra tout le mois de décembre.",
    image: "https://lh3.googleusercontent.com/g413NW3IjD4DSEcgsDzY9vgauYAwAbq7Fkuj0ST2FuF4ZkM_ilUbmu_ahZwDfp8MnZMkPJqXOW6wS_47wP4mrg=w1280",
    link: "http://lien-vers-le-programme"
  },
  {
    title: "Au cinéma 'Un soir en Toscane'",
    description: "Sortie au cinéma en France à partir du 5 février du film 'Un soir en Toscane'. Un film où le réalisateur polonais Jacek Borcuch explore l'identité européenne et la montée du nationalisme.",
    image: "https://lh6.googleusercontent.com/wIxYiBtRisxuRPuv6nP78lHVUpZMwxAEK2O6TxDWgwIyTbDk3XQGknRQq19EL_EWJo-VU98H6sfErN8qxDR0KW-vKDBW4A95QzISkX8h6KylIe4O=w1280",
    link: "http://lien-vers-le-film"
  }
];

function Article({ image, title, description, link }) {
  return (
    <Paper style={{ padding: 20, marginBottom: 20, display: 'flex', alignItems: 'center' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <img src={image} alt={title} style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }} />
        </Grid>
        <Grid item xs={12} md={8} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Typography variant="h6">{title}</Typography>
          <Typography>{description}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default function Actualite() {
  const imagePath = 'https://www.associazioni-italiane.org/wp-content/uploads/2019/10/1-logo-apirp_scritta_ridotto.jpg';
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Header title="Actualités" imagePath={imagePath} sections={sections} />
      <Container maxWidth="lg">
        <main>
          {articles.map((article, index) => (
            <Article key={index} {...article} />
          ))}
        </main>
        <Footer description="APIRP - Site de l'Association des Professeurs d'Italien de la Région Parisienne" />
      </Container>
    </ThemeProvider>
  );
}
