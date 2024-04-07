


import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../Header';
import Footer from '../Footer';
import {sections} from '../sectionsArray';
import Membre from '../Membre';
import { sectionMembre } from '../sectionMembre';
import Grid from '@mui/material/Grid';



// TODO remove, this demo shouldn't need to reset the theme.
const Theme = createTheme({
  palette: {
    primary: {
      main: '#009246',
    },
    },
    secondary: {
      main: '#ce2b37',
  },
});

export default function Elus() {
  const imagePath = 'https://www.associazioni-italiane.org/wp-content/uploads/2019/10/1-logo-apirp_scritta_ridotto.jpg';
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <Container maxWidth="xl">
        <Header title="" imagePath={imagePath} sections={sections} />
        <main>
          <p> Les élus au C.A. </p>
          <Grid container spacing={3}>
            {sectionMembre.map((section) => (
              <Grid item xs={12} sm={4} key={section.titre}>
                <Membre
                  titre={section.titre}
                  personne={section.personne}
                  img={section.img}
                />
              </Grid>
            ))}
          </Grid>
        </main>
      </Container>
      <Footer
        title=""
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}
