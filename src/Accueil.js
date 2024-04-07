import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import post1 from './blog-post.1.md';
import {sections} from './sectionsArray';

const mainFeaturedPost = {
  title: "Association des Professeurs d' Italien de la région Parisienne",
  image: 'https://cdn.discordapp.com/attachments/1069605959858663455/1226643821635305493/IMG_3382.jpg?ex=66258415&is=66130f15&hm=3cb9cf06b156abf21d858885e4311ae6f38c7670becb3e89a0687fd7bc257440&',
  imageText: 'main image description',
};

const featuredPosts = [
  {
    title: "Bienvenue sur le site de l'Association des Professeurs d'Italien de la Région Parisienne", 
    date: "7 Avril 2024",
    description:"Notre association a pour vocation : ▪D’établir et développer des liens de solidarité et d’amitié entre les italianistes de la région parisienne ;",
  },
  {
    title: "Bienvenue sur le site de l'Association des Professeurs d'Italien de la Région Parisienne",
    date: "7 Avril 2024",
    description: "▪De renseigner les professeurs d’italien à tous niveaux sur la diffusion de l’enseignement de l’italien en région parisienne ▪De promouvoir de l’enseignement de l’italien...",
  },
];

const posts = [post1];

const sidebar = {
  title: 'À propos',
  description:
    "Projet réaliser par Yann TAURON, Kerim KASIKCI étudiant en BUT Métier du multimédia et de l'internet.",

  //  inutile
  // archives: [
  //  { title: 'Remonter haut de page', url: '#' },
  // ],
  //  inutile

  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'X', icon: XIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

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

export default function Accueil() {

  const imagePath = 'https://www.associazioni-italiane.org/wp-content/uploads/2019/10/1-logo-apirp_scritta_ridotto.jpg';
  console.log("post 1: "+post1);

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="xl">
        <Header title="" imagePath={imagePath} sections={sections} />

        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="A LA UNE..." posts={posts} />
            
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>

      </Container>
      <Footer
        title=""
        description="APIRP - Site de l'Association des Professeurs d'Italien de la Région Parisienne"
      />
    </ThemeProvider>
  );
}
