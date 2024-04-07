


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

let content = `Le Consulat Général d'Italie à Paris, en collaboration avec l'Institut Culturel Italien de Paris, lance le concours DANTE DÌ à l'occasion du Septième Centenaire de la mort de Dante, organisé par la Société Dante Alighieri - Comites.\n
Le concours est ouvert aux élèves italianistes des écoles, collèges et lycées des académies de Paris, Versailles, Créteil, Amiens, Lille, Orléans-Tours, Normandie. Les participants devront élaborer une production en italien sur le thème « Etoiles et planètes chez Dante » : une vidéo, un audio ou encore un récit ou essai illustré.\n
Les établissements scolaires sont invités à participer nombreux. Ils devront déposer leur dossier d'inscription par mail avant le 21 mars 2021.\n
Les élèves et l'enseignant vainqueurs du premier prix gagneront un voyage à Ravenna, avec accès gratuit au musée Dante et participation comme lecteurs à l'initiative \`L'ora que volge il disio\`, lecture perpétuelle de la Divina Commedia devant le Tombeau de Dante.\n
Vous trouverez ci joint le règlement du concours, toutes les précisions utiles pour le retour des propositions ainsi que le bulletin d'inscription.`;


export default function Activites() {
  const imagePath = 'https://www.associazioni-italiane.org/wp-content/uploads/2019/10/1-logo-apirp_scritta_ridotto.jpg';
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
      <Header title="" imagePath={imagePath} sections={sections} />
        <main>
            <p> Activités culturelles </p>
            <Article
            title="Concours Dante Dì"
            content={content}
            image="https://lh6.googleusercontent.com/dHINUBQPApBmqH553JtPKWNr1Wyeu-UqalOtFnAYvA0igxMNISjrI4UuWbAx7jnHkMU0B6ga_TxIIqR-kqExQyY5zBqZZ1j8BJzYSfBoJK8Ec6A4rAWsbewnn2xYvZOCaA=w1280"
            />

        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}
