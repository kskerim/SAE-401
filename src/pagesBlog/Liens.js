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

const contactInfo = [
  {
    name: '▪FNAI (Fédération Nationale des Associations d’Italiens)',
    address: 'Adresse: 37, rue Pierre Dupré 13008 MARSEILLE',
    email: 'fnai.profitotal@gmail.com',
  },
  {
    name: '▪APLV(Association des Professeurs de Langues Vivantes)',
    address: 'Adresse: 46, rue Saint-Antoine 75004 PARIS',
    tel: 'Téléphone: 01 42 72 61 90',    
    email: 'aplv.lm@gmail.com',
    website: 'Site: www.aplv-languesmodernes.org',
  },
  {
    name: '▪S.I.E.S (Société des Italianistes de l’Enseignement Supérieur)',
    website: 'Site: www.sies-asso.org',
  },
  {
    name: '▪A.P.I.R.P (Association des Professeurs d’Italien de la Région Parisienne)',
    address: 'Adresse: 46, rue Saint-Antoine 75004 PARIS',
  },
];

export default function Contact() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="xl">
      <Header title="" imagePath={sections[0].imagePath} sections={sections} />
        <main>
          {contactInfo.map((info, index) => (
            <div key={index}>
              <Typography variant="h6">{info.name}</Typography>
              <Typography>{info.address}</Typography>
              {info.tel && <Typography>{info.tel}</Typography>}
              <Typography>
                <Link href={`mailto:${info.email}`}>{info.email}</Link>
              </Typography>
              {info.website && (
                <Typography>
                  <Link href={info.website} target="_blank" rel="noopener">
                    {info.website}
                  </Link>
                </Typography>
              )}
              {/* Ajoutez d'autres détails comme ci-dessus */}
            </div>
          ))}
        </main>
      </Container>
      <Footer
        title=""
        description="APIRP - Site de l'Association des Professeurs d'Italien de la Région Parisienne"
      />
    </ThemeProvider>
  );
}
