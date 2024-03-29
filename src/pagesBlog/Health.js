


import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../Header';
import MainFeaturedPost from '../MainFeaturedPost';
import Footer from '../Footer';
import {sections} from '../sectionsArray'




// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Health() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog" sections={sections} />
        <main>
            <p> Health page </p>

        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}
