
import {
  ChonkyIconName,
  setChonkyDefaults,
} from 'chonky';

import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../Header';
import Footer from '../Footer';
import {sections} from '../sectionsArray';
import { FullFileBrowser } from 'chonky';
import { ChonkyIconFA } from 'chonky-icon-fontawesome';
import { useState } from 'react';


setChonkyDefaults({ iconComponent: ChonkyIconFA });




export default function Bulletins() {
  const [backgroundColor, setBackgroundColor] = useState('#009246'); // Initial color
  const imagePath = 'https://www.associazioni-italiane.org/wp-content/uploads/2019/10/1-logo-apirp_scritta_ridotto.jpg';
  const files = [
    {
        id: 'mcd',
        name: 'Bulletin N°25 2018-2019.pdf',
        icon: ChonkyIconName.pdf,
    },
    {
        id: 'mcy',
        name: 'Menu.pdf',
        icon: ChonkyIconName.pdf,
    },
    {
        id: 'mcs',
        name: 'Lettre aux adhérents.pdf',
        icon: ChonkyIconName.pdf,
    },
  ];
  const file = [
    {
        id: 'mcd',
        name: 'test.pdf',
        icon: ChonkyIconName.pdf,
    },
    {
        id: 'mcy',
        name: 'test2.pdf',
        icon: ChonkyIconName.pdf,
    },
    {
        id: 'mcs',
        name: 'test3.pdf',
        icon: ChonkyIconName.pdf,
    },
  ];
  const folderChain = [{ id: 'xcv', name: 'Demo', isDir: true }];
  return (
    <ThemeProvider theme={createTheme({
      components: {
        MuiAppBar: {
          styleOverrides: {
            root: {
              backgroundColor: backgroundColor,
            },
          },
        },
      },
      palette: {
        primary: {
          main: backgroundColor,
        },
        secondary: {
          main: '#ce2b37',
        },
      },
    })}>
      <CssBaseline />
      <Container maxWidth="xl">
      <Header title="" imagePath={imagePath} sections={sections} style={{ backgroundColor: '#009246 !important' }}/>
        <main>
          <p> Les bulletins de l'association </p>

          <p>Si vous souhaitez commander l'un de ces bulletin vous pouvez envoyer un chèque de 4 € à l'ordre de l'APIRP à l'adresse suivante : Mme Valérie GUILLOUET - 10, rue Blondel - 92400 COURBEVOIE</p>

          <h2 style={{ textAlign: 'center', color: '#009246' }}>Le dernier bulletin 2018 - 2019 a été consacré à la cuisine italienne</h2>
 
          <div style={{ height: 300 }}>
            <FullFileBrowser files={files} folderChain={folderChain} />
          </div>

          <h2 style={{ textAlign: 'center', color: '#009246' }}> Ci-dessous les sommaires des derniers bulletins</h2>
 
          <div style={{ height: 300 }}>
            <FullFileBrowser files={file} folderChain={folderChain} />
          </div>
        </main>
      </Container>
      <Footer
        title=""
        description="APIRP - Site de l'Association des Professeurs d'Italien de la Région Parisienne"
      />
    </ThemeProvider>
  );
}
